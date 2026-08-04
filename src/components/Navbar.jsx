import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { industries } from '../data/industries';
import { servicesData } from '../data/servicesData';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [hideDropdown, setHideDropdown] = useState(false);

  const handleLinkClick = () => {
    setHideDropdown(true);
    setTimeout(() => setHideDropdown(false), 300);
    
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  useEffect(() => {
    // Temporarily hide dropdown on route change (solves the hover issue on touch/click)
    setHideDropdown(true);
    const timer = setTimeout(() => setHideDropdown(false), 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Helper function to convert uppercase industry name to Title Case
  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => {
        if (word === '&') return '&';
        // Handle parenthesis if any
        if (word.startsWith('(') && word.endsWith(')')) {
          return '(' + word.charAt(1).toUpperCase() + word.slice(2);
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <div className="logo-text">
            <span className="logo-main">Fly Towards</span>
            <span className="logo-sub">Digital Marketing</span>
          </div>
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
          
          <li className="nav-item-dropdown">
            <Link 
              to="/services" 
              className={`nav-dropdown-toggle ${location.pathname.startsWith('/services') ? 'active' : ''}`}
            >
              Services <FiChevronDown className="dropdown-icon" />
            </Link>
            <div className="dropdown-menu services-dropdown">
              {servicesData.map((service) => (
                <Link 
                  key={service.slug} 
                  to={`/services/${service.slug}`} 
                  className="dropdown-item"
                >
                  <span className="dropdown-item-icon">{service.icon}</span>
                  <div className="dropdown-item-content">
                    <span className="dropdown-item-title">{service.title}</span>
                    <span className="dropdown-item-desc">{service.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </li>
          
          <li className="nav-item-dropdown mega-dropdown">
            <Link 
              to="/industry" 
              className={`nav-dropdown-toggle ${location.pathname.startsWith('/industry') ? 'active' : ''}`}
            >
              Industry <FiChevronDown className="dropdown-icon" />
            </Link>
            <div className="dropdown-menu mega-menu">
              <div className="mega-menu-grid">
                {industries.map((ind) => (
                  <Link 
                    key={ind.slug} 
                    to={`/industry/${ind.slug}`} 
                    className="mega-menu-item"
                  >
                    <span className="mega-menu-item-name">{toTitleCase(ind.name)}</span>
                  </Link>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={handleLinkClick}>About Us</Link></li>
          
          <li className={`nav-dropdown ${hideDropdown ? 'hide-dropdown' : ''}`}>
            <Link to="/services" className={location.pathname.includes('/services') ? 'active' : ''} onClick={handleLinkClick}>Services ▾</Link>
            <div className="mega-menu">
              <div className="mega-menu-inner">
                {servicesData.map((category) => (
                  <div key={category.slug} className="mega-menu-column">
                    <h4 className="mega-menu-title">
                      <span className="mega-icon">{category.icon}</span>
                      {category.title}
                    </h4>
                    <ul className="mega-menu-list">
                      {category.benefits.map((service) => (
                        <li key={service.slug}>
                          <Link 
                            to={`/services/${category.slug}/${service.slug}`} 
                            className="mega-menu-link"
                            onClick={handleLinkClick}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li>
          

          <li><Link to="/industry" className={location.pathname === '/industry' ? 'active' : ''}>Industry</Link></li>
          <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
        </ul>
        
        <Link to="/contact" className="btn-primary">GET A AUTHENTICATION</Link>
      </div>
    </nav>
  );
};

export default Navbar;
