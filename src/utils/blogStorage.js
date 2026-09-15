// API Base URL for MongoDB Express Backend
const API_URL = 'http://localhost:5000/api/blogs';

// Default fallback blogs (Empty by default)
const defaultBlogs = [];

// Key used in localStorage
const STORAGE_KEY = 'fly_digital_blogs';

// Helper to fetch with timeout
const fetchWithTimeout = async (url, options = {}, timeoutMs = 2500) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

// Synchronous getter with background MongoDB sync
export const getBlogs = () => {
  const storedBlogs = localStorage.getItem(STORAGE_KEY);
  let localBlogs = defaultBlogs;
  
  if (storedBlogs) {
    try {
      localBlogs = JSON.parse(storedBlogs);
    } catch (e) {
      localBlogs = defaultBlogs;
    }
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultBlogs));
  }

  // Trigger background fetch from MongoDB API
  fetchWithTimeout(API_URL, {}, 2500)
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      }
    })
    .catch(() => {
      // Backend offline or connecting, continue using cached blogs
    });

  return localBlogs;
};

// Auto-sync local blogs to MongoDB Atlas database
export const syncLocalBlogsToDB = async () => {
  const storedBlogs = localStorage.getItem(STORAGE_KEY);
  if (!storedBlogs) return;
  try {
    const localBlogs = JSON.parse(storedBlogs);
    if (Array.isArray(localBlogs) && localBlogs.length > 0) {
      const res = await fetchWithTimeout(`${API_URL}/sync`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blogs: localBlogs })
      }, 2500);
      if (res.ok) {
        const data = await res.json();
        if (data.blogs && data.blogs.length > 0) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data.blogs));
          return data.blogs;
        }
      }
    }
  } catch (e) {
    // Backend offline or connecting
  }
};

// Async getter directly from MongoDB Database
export const getBlogsAsync = async () => {
  try {
    const res = await fetchWithTimeout(API_URL, {}, 5000);
    if (!res.ok) throw new Error('API response failed');
    const data = await res.json();
    if (Array.isArray(data)) {
      // Overwrite local storage with exact data from MongoDB database
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return data;
    }
  } catch (error) {
    console.warn('MongoDB API offline/connecting, loading cached blogs.', error);
  }
  return getBlogs();
};

// Add a new blog to MongoDB database
export const addBlog = async (blog) => {
  let savedBlog = null;
  
  try {
    const res = await fetchWithTimeout(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    }, 10000); // 10s timeout to ensure MongoDB Atlas save finishes
    
    if (res.ok) {
      savedBlog = await res.json();
    } else {
      const errJson = await res.json().catch(() => ({}));
      throw new Error(errJson.error || 'Failed to save to database');
    }
  } catch (error) {
    console.error('Failed to post blog to MongoDB server:', error);
    throw error; // Pass error to UI so user gets informed
  }

  // Local fallback / sync update
  const blogs = getBlogs();
  const newBlog = savedBlog || {
    ...blog,
    id: Date.now().toString()
  };
  const updatedBlogs = [newBlog, ...blogs.filter(b => b.id !== newBlog.id)];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBlogs));
  
  return updatedBlogs;
};

// Delete a blog from MongoDB database
export const deleteBlog = async (id) => {
  try {
    await fetchWithTimeout(`${API_URL}/${id}`, {
      method: 'DELETE'
    }, 2500);
  } catch (error) {
    console.error('Failed to delete blog from MongoDB server:', error);
  }

  const blogs = getBlogs();
  const updatedBlogs = blogs.filter(b => b.id.toString() !== id.toString());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBlogs));
  return updatedBlogs;
};

// Update a blog in MongoDB database
export const updateBlog = async (id, updatedData) => {
  let updatedFromDB = null;

  try {
    const res = await fetchWithTimeout(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData)
    }, 10000);
    if (res.ok) {
      updatedFromDB = await res.json();
    } else {
      const errJson = await res.json().catch(() => ({}));
      throw new Error(errJson.error || 'Failed to update blog in database');
    }
  } catch (error) {
    console.error('Failed to update blog on MongoDB server:', error);
    throw error;
  }

  const blogs = getBlogs();
  const updatedBlogs = blogs.map(b => 
    b.id.toString() === id.toString() ? (updatedFromDB || { ...b, ...updatedData, id: id }) : b
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBlogs));
  return updatedBlogs;
};
