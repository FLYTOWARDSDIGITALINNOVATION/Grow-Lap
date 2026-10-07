import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShareAlt } from 'react-icons/fa';
import SEO from '../components/SEO';
import { getBlogs, getBlogsAsync } from '../utils/blogStorage';
import './BlogPage.css';

/* ==========================================================================
   BLOG SECTION COMPONENT
   ========================================================================== */
const BlogSection = () => {
  const [blogs, setBlogs] = useState(getBlogs());

  useEffect(() => {
    const fetchBlogs = async () => {
      const dbBlogs = await getBlogsAsync();
      if (dbBlogs && dbBlogs.length > 0) {
        setBlogs(dbBlogs);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section id="blog" className="blog-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-subtitle text-accent">LATEST INSIGHTS</p>
          <h2 className="section-title">Our Latest Blog</h2>
          <div className="section-line"></div>
        </div>

        <div className="grid-3 blog-grid">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-date">
                  <span className="date-num">{blog.date}</span>
                  <span className="date-month">{blog.month}</span>
                </div>
              </div>
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.excerpt ? blog.excerpt.replace(/&nbsp;/g, ' ').replace(/<[^>]+>/g, '') : ''}</p>
                <Link to={`/blog/${blog.id}`} className="read-more">Read More &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   MAIN BLOG PAGE COMPONENT
   ========================================================================== */
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
      <SEO 
        title="Blog & Digital Marketing Insights | Grow Lap"
        description="Read the latest insights, strategies, and tutorials on Digital Marketing, SEO, Social Media Ads, Branding, and Video Editing from Grow Lap experts."
        keywords="digital marketing blog, SEO tips, social media strategies, video editing guide, Grow Lap blog"
      />
      
      {/* Blog Hero Section */}
      <div className="blog-hero-container">
        <div className="blog-hero-badge">
          <FaShareAlt /> <span>OFFICIAL JOURNAL</span>
        </div>
        
        <h1 className="blog-hero-title">
          Insights & Strategies for <span className="text-gradient-orange">Digital Success</span>
        </h1>
        <p className="blog-hero-subtitle">
          Explore expert guides, market trends, and actionable tips on SEO, Meta Ads, Graphic Design, Video Editing, and Branding.
        </p>
      </div>

      {/* Main Blog Cards Section */}
      <BlogSection />
    </div>
  );
};

export default BlogPage;
