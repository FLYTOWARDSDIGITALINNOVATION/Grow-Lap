import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { servicesData } from '../data/servicesData';
import whatsappQr from '../assets/images/whatsapp-qr.png';
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
              <img src="/Grow Lap.webp" alt="Grow Lap Logo" className="footer-logo-image" />
              <div className="footer-logo-text">
                <span className="footer-logo-main">Grow <span style={{ color: 'var(--accent-orange)' }}>Lap</span></span>
              </div>
            </Link>
            <p className="footer-mono-desc">
              We help businesses grow with creative digital solutions, powerful technology and result-driven strategies. Grow with us.
            </p>
            <div className="mono-social-links">
              <a 
                href="https://www.instagram.com/growlap_?igsh=c3JjbG5zeHczY2hm" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="instagram-badge-link"
              >
                <div className="social-in"><FaInstagram /></div>
                <span className="instagram-handle">@growlap_</span>
              </a>
            </div>
            
            {/* WhatsApp QR Code Section */}
            <div className="footer-qr-container">
              <div className="qr-box">
                <img src={whatsappQr} alt="WhatsApp QR Code" />
              </div>
              <div className="qr-text">
                <strong>Scan to Chat</strong>
                <span>Connect on WhatsApp</span>
              </div>
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
                <li><Link to="/industry" className="highlight-link">- Various Industries</Link></li>
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
          <p>© 2026 Grow Lap Digital Innovation. All Rights Reserved.</p>
        </div>
      </div>
      
      <button onClick={() => window.scrollTo(0, 0)} className="mono-scroll-top">
        ^
      </button>
    </footer>
  );
};

export default Footer;
