// Default blogs used when localStorage is empty
const defaultBlogs = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    date: '20',
    month: 'MAY',
    title: '10 Web Development Trends to Watch in 2024',
    excerpt: 'Stay ahead with the latest trends in web development and design.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
    date: '15',
    month: 'MAY',
    title: 'How Digital Marketing Can Grow Your Business',
    excerpt: 'Explore powerful digital marketing strategies that actually work.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    date: '10',
    month: 'MAY',
    title: 'Why Custom Software Is Important for Businesses',
    excerpt: 'Understand the benefits of custom software solutions for your business.'
  }
];

// Key used in localStorage
const STORAGE_KEY = 'fly_digital_blogs';

// Get all blogs
export const getBlogs = () => {
  const storedBlogs = localStorage.getItem(STORAGE_KEY);
  if (storedBlogs) {
    return JSON.parse(storedBlogs);
  }
  // Initialize if empty
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultBlogs));
  return defaultBlogs;
};

// Add a new blog
export const addBlog = (blog) => {
  const blogs = getBlogs();
  const newBlog = {
    ...blog,
    id: Date.now() // Simple unique ID
  };
  const updatedBlogs = [newBlog, ...blogs]; // Add to the beginning
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBlogs));
  return updatedBlogs;
};

// Delete a blog
export const deleteBlog = (id) => {
  const blogs = getBlogs();
  const updatedBlogs = blogs.filter(b => b.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBlogs));
  return updatedBlogs;
};

// Update a blog
export const updateBlog = (id, updatedData) => {
  const blogs = getBlogs();
  const updatedBlogs = blogs.map(b => 
    b.id === id ? { ...b, ...updatedData } : b
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBlogs));
  return updatedBlogs;
};
