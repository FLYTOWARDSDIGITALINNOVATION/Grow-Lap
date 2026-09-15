import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import dns from 'dns';
import { fileURLToPath } from 'url';

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

async function checkAndSync() {
  try {
    console.log('Connecting to MongoDB Atlas...');
    await mongoose.connect(MONGODB_URI, { family: 4, serverSelectionTimeoutMS: 10000 });
    console.log('Connected!');

    // Insert user's published blog "qweetryiopp" directly into MongoDB Atlas if not already present!
    const userBlogTitle = 'qweetryiopp';
    const existing = await Blog.findOne({ title: userBlogTitle });
    
    if (!existing) {
      console.log(`Pushing user's blog "${userBlogTitle}" to MongoDB Atlas...`);
      const currentDate = new Date();
      const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      
      const newBlogDoc = new Blog({
        title: 'qweetryiopp',
        content: 'the comment the website is very gud the comment the website is very gud; the comment the website...',
        excerpt: 'the comment the website is very gud the comment the website is very gud; the comment the website...',
        image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=800',
        date: currentDate.getDate().toString(),
        month: months[currentDate.getMonth()],
        category: 'Digital Marketing',
        author: 'Admin'
      });

      await newBlogDoc.save();
      console.log(`Successfully saved "${userBlogTitle}" into MongoDB Atlas!`);
    } else {
      console.log(`Blog "${userBlogTitle}" already exists in MongoDB Atlas.`);
    }

    const allBlogs = await Blog.find();
    console.log(`Total blogs in MongoDB Atlas growlap.blogs: ${allBlogs.length}`);
    allBlogs.forEach((b, i) => console.log(`${i + 1}. ${b.title} (ID: ${b._id})`));

    mongoose.disconnect();
  } catch (err) {
    console.error('Error during sync:', err);
  }
}

checkAndSync();
