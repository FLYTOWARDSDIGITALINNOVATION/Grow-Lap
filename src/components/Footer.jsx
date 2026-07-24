import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top grid-4">
          {/* Company Info */}
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              <div className="logo-icon"></div>
              <span className="logo-text">Fly Towards <br/><small>Digital Innovation</small></span>
            </Link>
            <p className="footer-desc">
              We help businesses grow with creative digital solutions, powerful technology and result-driven strategies.
            </p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/flytowardsdigitalmarketing?igsh=c3JjbG5zeHczY2hm" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">&gt; Home</Link></li>
              <li><Link to="/about">&gt; About Us</Link></li>
              <li><Link to="/services">&gt; Services</Link></li>
              <li><Link to="/industry">&gt; Industry</Link></li>
              <li><Link to="/blog">&gt; Blog</Link></li>
              <li><Link to="/contact">&gt; Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-col">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">&gt; Web Development</Link></li>
              <li><Link to="/services">&gt; Mobile App Development</Link></li>
              <li><Link to="/services">&gt; Digital Marketing</Link></li>
              <li><Link to="/services">&gt; SEO & Analytics</Link></li>
              <li><Link to="/services">&gt; E-Commerce Solutions</Link></li>
              <li><Link to="/services">&gt; Software Solutions</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-col">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="contact-info">
              <li>
                <FaPhoneAlt className="contact-icon text-accent" />
                <span>+91 76958 83647</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon text-accent" />
                <span>info@flytowardsdigitalinnovation.com</span>
              </li>
              <li>
                <FaMapMarkerAlt className="contact-icon text-accent" />
                <span>Sankarankovil, Tamil Nadu, India</span>
              </li>
              <li>
                <FaClock className="contact-icon text-accent" />
                <span>Mon - Sat: 9.00 AM - 6.00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Fly Towards Digital Innovation. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
      
      <button onClick={() => window.scrollTo(0, 0)} className="scroll-top">
        &uarr;
      </button>
    </footer>
  );
};

export default Footer;
