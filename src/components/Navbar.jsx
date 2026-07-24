import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <div className="logo-icon"></div>
          <span className="logo-text">Fly Towards <br/><small>Digital Innovation</small></span>
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
          <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
          <li><Link to="/industry" className={location.pathname === '/industry' ? 'active' : ''}>Industry</Link></li>
          <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
        </ul>
        
        <Link to="/contact" className="btn-primary">Get a Quote</Link>
      </div>
    </nav>
  );
};

export default Navbar;
