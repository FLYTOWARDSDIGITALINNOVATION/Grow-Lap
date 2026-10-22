import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-monoline">
      {/* SVG Wave */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 V60 Q300,120 600,60 T1200,60 V120 Z" fill="#050505" />
          <path d="M0,60 Q300,120 600,60 T1200,60" fill="none" stroke="var(--accent-orange)" strokeWidth="4" />
        </svg>
      </div>

      <div className="container" style={{ maxWidth: '1400px' }}>
        <div className="footer-grid-mono">
          
          {/* Column 1: Logo & Company Contact Details */}
          <div className="footer-col-mono">
            <Link to="/" className="footer-brand">
              <img src="/Grow Lap.webp" alt="Grow Lap Logo" className="footer-logo-image" />
              <div className="footer-logo-text">
                <span className="footer-logo-main">Grow <span style={{ color: 'var(--accent-orange)' }}>Lap</span></span>
              </div>
            </Link>
            <p className="footer-mono-desc">
              We solve your business challenges with creative ideas, engaging content, and smart digital solutions. Let’s grow together!
            </p>
            <div className="footer-contact-details">
              <p><FaMapMarkerAlt style={{ color: 'var(--accent-orange)', marginRight: '8px', flexShrink: 0 }} /> <span><strong>Visit Us:</strong> Sankarankovil, TamilNadu, India</span></p>
              <p><FaEnvelope style={{ color: 'var(--accent-orange)', marginRight: '8px', flexShrink: 0 }} /> <span><strong>Email ID:</strong> <a href="mailto:growlapmarketing@gmail.com">growlapmarketing@gmail.com</a></span></p>
              <p><FaPhoneAlt style={{ color: 'var(--accent-orange)', marginRight: '8px', flexShrink: 0 }} /> <span><strong>Call / Whatsapp:</strong> <a href="tel:+916383246378">+91 63832 46378</a></span></p>
            </div>
          </div>

          {/* Column 2: Company Info */}
          <div className="footer-col-mono">
            <h4 className="mono-title">Company Info</h4>
            <ul className="mono-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/industry">Industries</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: All Our Services */}
          <div className="footer-col-mono">
            <h4 className="mono-title">All Our Services</h4>
            <ul className="mono-links">
              <li><Link to="/services">Digital marketing</Link></li>
              <li><Link to="/services/digital-marketing/seo">SEO</Link></li>
              <li><Link to="/services/digital-marketing/meta-ad">Meta ads</Link></li>
              <li><Link to="/services/digital-marketing/google-ad">Google ads</Link></li>
              <li><Link to="/services/video-editing/editing">shoot and editing</Link></li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="footer-col-mono">
            <h4 className="mono-title">Follow Us</h4>
            <ul className="mono-links social-mono-links">
              <li>
                <a href="https://www.instagram.com/growlap_?igsh=c3JjbG5zeHczY2hm" target="_blank" rel="noopener noreferrer">
                  <FaInstagram style={{ color: '#E1306C', marginRight: '12px', fontSize: '1.55rem', flexShrink: 0 }} /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/growlap-bdm/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin style={{ color: '#0077B5', marginRight: '12px', fontSize: '1.55rem', flexShrink: 0 }} /> Linkedin
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@grow_lap?si=9VGuafhDGwK4q9XQ" target="_blank" rel="noopener noreferrer">
                  <FaYoutube style={{ color: '#FF0000', marginRight: '12px', fontSize: '1.55rem', flexShrink: 0 }} /> You Tube
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-mono-bottom">
          <p>© 2026 Grow Lap Digital Innovation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
