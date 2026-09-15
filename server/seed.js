import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import dns from 'dns';
import { fileURLToPath } from 'url';

// DNS Fix for Windows SRV Lookup
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://udhayabanu2005_db_user:lXqm4ekyizfKSjLr@cluster0.vborebb.mongodb.net/growlap?appName=Cluster0';

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
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

const defaultBlogs = [
  {
    date: '20',
    month: 'MAY',
    title: '10 Web Development Trends to Watch in 2024',
    excerpt: 'Stay ahead with the latest trends in web development and design.',
    content: 'Full article about 10 web development trends in 2024...',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    category: 'Digital Marketing',
    author: 'Admin'
  },
  {
    date: '15',
    month: 'MAY',
    title: 'How Digital Marketing Can Grow Your Business',
    excerpt: 'Explore powerful digital marketing strategies that actually work.',
    content: 'Full article about digital marketing strategies...',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
    category: 'Digital Marketing',
    author: 'Admin'
  },
  {
    date: '10',
    month: 'MAY',
    title: 'Why Custom Software Is Important for Businesses',
    excerpt: 'Understand the benefits of custom software solutions for your business.',
    content: 'Full article about custom software benefits...',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    category: 'Digital Marketing',
    author: 'Admin'
  }
];

async function seedDatabase() {
  try {
    console.log('Connecting to MongoDB Atlas Database...');
    await mongoose.connect(MONGODB_URI, { family: 4, serverSelectionTimeoutMS: 10000 });
    console.log('Connected!');

    const existingCount = await Blog.countDocuments();
    if (existingCount === 0) {
      console.log('Seeding initial blogs into growlap.blogs collection...');
      const inserted = await Blog.insertMany(defaultBlogs);
      console.log(`Successfully inserted ${inserted.length} blog documents into MongoDB Atlas!`);
    } else {
      console.log(`Database already has ${existingCount} blog documents.`);
    }

    mongoose.disconnect();
    console.log('Done!');
  } catch (error) {
    console.error('Error seeding MongoDB Atlas:', error);
    process.exit(1);
  }
}

seedDatabase();
