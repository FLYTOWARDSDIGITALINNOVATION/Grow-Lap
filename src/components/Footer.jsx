import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { servicesData } from '../data/servicesData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-monoline">
      {/* SVG Wave */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          {/* Fill the bottom part with footer color */}
          <path d="M0,120 V60 Q300,120 600,60 T1200,60 V120 Z" fill="#050505" />
          {/* Draw the orange line exactly on the curve */}
          <path d="M0,60 Q300,120 600,60 T1200,60" fill="none" stroke="var(--accent-orange)" strokeWidth="4" />
        </svg>
      </div>

      <div className="container" style={{ maxWidth: '1400px' }}>
        <div className="footer-grid-mono">
          
          {/* Column 1: Logo & Socials */}
          <div className="footer-col-mono">
            <Link to="/" className="footer-brand">
              Fly Towards
            </Link>
            <p className="footer-mono-desc">
              We help businesses grow with creative digital solutions, powerful technology and result-driven strategies. Fly towards digital innovation with us.
            </p>
            <div className="mono-social-links">
              <a href="#" className="social-fb"><FaFacebookF /></a>
              <a href="#" className="social-tw"><FaTwitter /></a>
              <a href="https://www.instagram.com/flytowardsdigitalmarketing?igsh=c3JjbG5zeHczY2hm" target="_blank" rel="noopener noreferrer" className="social-in"><FaInstagram /></a>
              <a href="#" className="social-li"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Column 2: Company Info */}
          <div className="footer-col-mono">
            <h4 className="mono-title">Company Info</h4>
            <ul className="mono-links">
              <li><Link to="/">- Home</Link></li>
              <li><Link to="/about">- About Us</Link></li>
              <li><Link to="/services">- Services</Link></li>
              <li><Link to="/industry">- Industries</Link></li>
              <li><Link to="/blog">- Blog</Link></li>
              <li><Link to="/contact">- Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services (Wide) */}
          <div className="footer-col-mono footer-col-services">
            <h4 className="mono-title">All Our Services</h4>
            <ul className="mono-links services-grid">
              {servicesData.map(category => 
                category.benefits.map(benefit => (
                  <li key={benefit.slug}>
                    <Link to={`/services/${category.slug}/${benefit.slug}`}>- {benefit.title}</Link>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Column 4: Industries & Contact */}
          <div className="footer-col-mono">
            <div style={{ marginBottom: '2.5rem' }}>
              <h4 className="mono-title">Industries</h4>
              <ul className="mono-links">
                <li><Link to="/industry">- Real Estate</Link></li>
                <li><Link to="/industry">- Clothing Brands</Link></li>
                <li><Link to="/industry">- Hospitals & Clinics</Link></li>
                <li><Link to="/industry">- Schools & Colleges</Link></li>
                <li><Link to="/industry">- Construction</Link></li>
                <li><Link to="/industry">- Hotels & Showrooms</Link></li>
                <li><Link to="/industry">- Various Industries</Link></li>
              </ul>
            </div>

            <div className="footer-contact-block">
              <h4 className="mono-title">Contact</h4>
              <form className="mono-subscribe-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email Address" required />
                <button type="submit" className="mono-btn-subscribe">Contact</button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-mono-bottom">
          <p>© 2026 Fly Towards Digital Innovation. All Rights Reserved.</p>
        </div>
      </div>
      
      <button onClick={() => window.scrollTo(0, 0)} className="mono-scroll-top">
        ^
      </button>
    </footer>
  );
};

export default Footer;
