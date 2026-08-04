import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiChevronDown, FiHome, FiBriefcase, FiBookOpen } from 'react-icons/fi';
import { industries } from '../data/industries';
import { servicesData } from '../data/servicesData';
import './Navbar.css';

const industryCategories = [
  {
    title: 'Property & Retail',
    icon: <FiHome />,
    slug: 'property-retail',
    items: [
      { name: 'Real Estate', slug: 'real-estate' },
      { name: 'Construction', slug: 'construction' },
      { name: 'Villas', slug: 'villas' },
      { name: 'Furniture Stores', slug: 'furniture' },
      { name: 'Showrooms', slug: 'showrooms' },
      { name: 'Retail Shops', slug: 'retail-shops' },
      { name: 'Cracker Brands', slug: 'crackers' },
      { name: 'Jewelry', slug: 'jewelry' }
    ]
  },
  {
    title: 'Business & Corporate',
    icon: <FiBriefcase />,
    slug: 'business-corporate',
    items: [
      { name: 'Manufacturing', slug: 'manufacturing' },
      { name: 'Financial Services', slug: 'finance' },
      { name: 'Taxis & Transport', slug: 'taxis-transport' }
    ]
  },
  {
    title: 'Education & Lifestyle',
    icon: <FiBookOpen />,
    slug: 'education-lifestyle',
    items: [
      { name: 'Schools', slug: 'schools' },
      { name: 'Colleges', slug: 'colleges' },
      { name: 'Academies', slug: 'academy' },
      { name: 'Coaching Centres', slug: 'coaching-center' },
      { name: 'Hotels', slug: 'hotels' },
      { name: 'Resorts', slug: 'resorts' },
      { name: 'Restaurants', slug: 'restaurants' },
      { name: 'Boutiques', slug: 'boutique' },
      { name: 'Clothing Brands', slug: 'clothing-brands' },
      { name: 'Spa', slug: 'spa' }
    ]
  }
];

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
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={handleLinkClick}>About Us</Link></li>
          
          <li className={`nav-dropdown ${hideDropdown ? 'hide-dropdown' : ''}`}>
            <Link to="/services" className={location.pathname.includes('/services') ? 'active' : ''} onClick={handleLinkClick}>
              Services <FiChevronDown className="dropdown-icon" />
            </Link>
            <div className="mega-menu services-mega-menu">
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
          
          <li className={`nav-dropdown ${hideDropdown ? 'hide-dropdown' : ''}`}>
            <Link to="/industry" className={location.pathname.includes('/industry') ? 'active' : ''} onClick={handleLinkClick}>
              Industry <FiChevronDown className="dropdown-icon" />
            </Link>
            <div className="mega-menu industry-mega-menu">
              <div className="mega-menu-inner">
                {industryCategories.map((category) => (
                  <div key={category.slug} className="mega-menu-column">
                    <h4 className="mega-menu-title">
                      <span className="mega-icon">{category.icon}</span>
                      {category.title}
                    </h4>
                    <ul className="mega-menu-list">
                      {category.items.map((ind) => (
                        <li key={ind.slug}>
                          <Link 
                            to={`/industry/${ind.slug}`} 
                            className="mega-menu-link"
                            onClick={handleLinkClick}
                          >
                            {ind.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li>
          
          <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={handleLinkClick}>Blog</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={handleLinkClick}>Contact Us</Link></li>
        </ul>
        
        <Link to="/contact" className="btn-primary">GET A AUTHENTICATION</Link>
      </div>
    </nav>
  );
};

export default Navbar;
