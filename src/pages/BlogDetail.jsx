import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getBlogs } from '../utils/blogStorage';
import './BlogDetail.css';

const BlogDetail = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const blogs = getBlogs();
    const foundBlog = blogs.find(b => b.id.toString() === blogId);
    if (foundBlog) {
      setBlog(foundBlog);
    } else {
      navigate('/blog');
    }
  }, [blogId, navigate]);

  if (!blog) return <div className="loading-state">Loading...</div>;

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-hero" style={{ backgroundImage: `linear-gradient(to bottom, rgba(10,10,10,0.4), rgba(10,10,10,0.9)), url(${blog.image})` }}>
        <div className="container">
          <Link to="/blog" className="back-link">&larr; Back to Blogs</Link>
          <div className="blog-detail-header">
            <div className="blog-meta">
              <span className="blog-date-badge">{blog.date} {blog.month} {new Date().getFullYear()}</span>
            </div>
            <h1 className="blog-detail-title">{blog.title}</h1>
          </div>
        </div>
      </div>

      <div className="container">
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
