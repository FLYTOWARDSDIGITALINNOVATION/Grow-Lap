import React from 'react';
import './BlogSection.css';

const blogs = [
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    date: '20',
    month: 'MAY',
    title: '10 Web Development Trends to Watch in 2024',
    excerpt: 'Stay ahead with the latest trends in web development and design.'
  },
  {
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
    date: '15',
    month: 'MAY',
    title: 'How Digital Marketing Can Grow Your Business',
    excerpt: 'Explore powerful digital marketing strategies that actually work.'
  },
  {
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    date: '10',
    month: 'MAY',
    title: 'Why Custom Software Is Important for Businesses',
    excerpt: 'Understand the benefits of custom software solutions for your business.'
  }
];

const BlogSection = () => {
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
                <p>{blog.excerpt}</p>
                <a href="#" className="read-more">Read More &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
