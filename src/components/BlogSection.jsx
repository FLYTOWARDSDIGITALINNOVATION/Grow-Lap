import React from 'react';
import { Link } from 'react-router-dom';
import './BlogSection.css';

import { getBlogs, getBlogsAsync } from '../utils/blogStorage';

const BlogSection = () => {
  const [blogs, setBlogs] = React.useState(getBlogs());

  React.useEffect(() => {
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

export default BlogSection;
