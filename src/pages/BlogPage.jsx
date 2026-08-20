import React, { useEffect } from 'react';
import BlogSection from '../components/BlogSection';
import { FaShareAlt } from 'react-icons/fa';
import './BlogPage.css';

const BlogPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-show');
        }
      });
    }, { threshold: 0.1 });
    
    const faqItems = document.querySelectorAll('details[class*="-faq-item"]');
    faqItems.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-page-wrapper" style={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh' }}>
      
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
