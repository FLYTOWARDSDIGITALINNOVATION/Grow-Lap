import React, { useEffect } from 'react';
import BlogSection from '../components/BlogSection';
import { FaShareAlt } from 'react-icons/fa';
import './BlogPage.css';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px', backgroundColor: 'var(--bg-dark)', minHeight: '100vh' }}>
      
      {/* Blog Hero Section */}
      <div className="blog-hero-container">
        <div className="blog-hero-badge">
          <FaShareAlt /> <span>OFFICIAL JOURNAL</span>
        </div>
        
        <h1 className="blog-hero-title">
          Digital Insights & <span className="text-gradient-orange">Innovation</span>
        </h1>
        
        <p className="blog-hero-subtitle">
          Expert strategies, technology updates, and guides on growing your brand in today's modern digital economy.
        </p>
      </div>

      <div style={{ marginTop: '-4rem' }}>
        <BlogSection />
      </div>
    </div>
  );
};

export default BlogPage;
