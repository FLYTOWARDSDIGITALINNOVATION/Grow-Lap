import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getBlogs, getBlogsAsync } from '../utils/blogStorage';
import './BlogDetail.css';

const BlogDetail = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  // Instant synchronous initial state lookup to eliminate "Loading..." screen completely
  const [blog, setBlog] = useState(() => {
    const localBlogs = getBlogs();
    return localBlogs.find(b => b.id.toString() === blogId || (b._id && b._id.toString() === blogId)) || null;
  });

  useEffect(() => {
    const fetchBlog = async () => {
      const blogs = await getBlogsAsync();
      const foundBlog = blogs.find(b => b.id.toString() === blogId || (b._id && b._id.toString() === blogId));
      if (foundBlog) {
        setBlog(foundBlog);
      } else if (!blog) {
        navigate('/blog');
      }
    };
    fetchBlog();
  }, [blogId, navigate]);

  if (!blog) return null;

  return (
    <div className="blog-detail-page">
      <div className="container blog-detail-container">
        <Link to="/blog" className="back-link">&larr; Back to Blogs</Link>
        
        <div className="blog-detail-header">
          <div className="blog-meta">
            <span className="blog-date-badge">{blog.date} {blog.month} {new Date().getFullYear()}</span>
          </div>
          <h1 className="blog-detail-title">{blog.title}</h1>
        </div>

        <div className="blog-detail-image-box">
          <img src={blog.image} alt={blog.title} className="blog-detail-image" />
        </div>

        <div className="blog-detail-content-wrapper">
          <div 
            className="blog-detail-body" 
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
