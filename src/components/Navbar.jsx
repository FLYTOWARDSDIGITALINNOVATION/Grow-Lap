import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { industries } from '../data/industries';
import { servicesData } from '../data/servicesData';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

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
        <Link to="/" className="logo">
          <div className="logo-icon"></div>
          <span className="logo-text">Fly Towards <br/><small>Digital Innovation</small></span>
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
                ))}
              </div>
            </div>
          </li>
          
          <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
        </ul>
        
        <Link to="/contact" className="btn-primary">Get a Quote</Link>
      </div>
    </nav>
  );
};

export default Navbar;
