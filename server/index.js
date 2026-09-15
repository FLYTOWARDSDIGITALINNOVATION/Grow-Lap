import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import dns from 'dns';
import { fileURLToPath } from 'url';

// Configure Node.js DNS resolution to use Google & Cloudflare DNS for SRV records
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {
  // Fallback if system overrides
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env
dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://udhayabanu2005_db_user:lXqm4ekyizfKSjLr@cluster0.vborebb.mongodb.net/growlap?appName=Cluster0';

mongoose.connect(MONGODB_URI, { family: 4, serverSelectionTimeoutMS: 10000 })
  .then(() => console.log('Successfully connected to MongoDB Database!'))
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });

// Blog Mongoose Schema & Model
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  excerpt: { type: String },
  image: { type: String },
  category: { type: String, default: 'Digital Marketing' },
  author: { type: String, default: 'Admin' },
  date: { type: String },
  month: { type: String },
  comments: { type: String, default: '0' }
}, { 
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id.toString();
      return ret;
    }
  }
});

const Blog = mongoose.model('Blog', blogSchema);

// GET all blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Failed to fetch blogs from database.' });
  }
});

// GET single blog by ID
app.get('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog post not found.' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog post.' });
  }
});

// POST sync array of local blogs to MongoDB database
app.post('/api/blogs/sync', async (req, res) => {
  try {
    const { blogs } = req.body;
    if (!Array.isArray(blogs) || blogs.length === 0) {
      return res.json({ message: 'No blogs to sync.' });
    }

    const inserted = [];
    for (const b of blogs) {
      if (!b.title) continue;
      const existing = await Blog.findOne({ title: b.title });
      if (!existing) {
        const currentDate = new Date();
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        const newBlog = new Blog({
          title: b.title,
          content: b.content || b.excerpt,
          excerpt: b.excerpt || (b.content ? b.content.substring(0, 100).replace(/<[^>]+>/g, '') + '...' : ''),
          image: b.image || 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=800',
          date: b.date || currentDate.getDate().toString(),
          month: b.month || months[currentDate.getMonth()],
          category: b.category || 'Digital Marketing',
          author: b.author || 'Admin'
        });
        const saved = await newBlog.save();
        inserted.push(saved);
      }
    }
    const allBlogs = await Blog.find().sort({ createdAt: -1 });
    res.json({ message: `Synced ${inserted.length} blogs to MongoDB Atlas`, blogs: allBlogs });
  } catch (error) {
    console.error('Error syncing blogs:', error);
    res.status(500).json({ error: 'Failed to sync blogs to database.' });
  }
});

// POST create a new blog (Only blogs are saved to database)
app.post('/api/blogs', async (req, res) => {
  try {
    const { title, content, excerpt, image, date, month, category, author } = req.body;
    
    const currentDate = new Date();
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    
    const newBlog = new Blog({
      title,
      content,
      excerpt: excerpt || (content ? content.substring(0, 100).replace(/<[^>]+>/g, '') + '...' : ''),
      image: image || 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=800',
      date: date || currentDate.getDate().toString(),
      month: month || months[currentDate.getMonth()],
      category: category || 'Digital Marketing',
      author: author || 'Admin'
    });

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ error: 'Failed to save blog to MongoDB database.' });
  }
});

// PUT update a blog
app.put('/api/blogs/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ error: 'Blog not found.' });
    }
    res.json(updatedBlog);
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ error: 'Failed to update blog in database.' });
  }
});

// DELETE a blog
app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found.' });
    }
    res.json({ message: 'Blog deleted successfully from database.', id: req.params.id });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ error: 'Failed to delete blog from database.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Express MongoDB Server is running on port ${PORT}`);
});
