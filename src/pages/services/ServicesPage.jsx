import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaSearch, FaGoogle, FaBullhorn, FaShareAlt, FaEnvelope, FaWhatsapp, FaLinkedin,
  FaPenNib, FaUserTie, FaFileAlt, FaVideo, FaFilm, FaPlayCircle, FaHeart,
  FaCameraRetro, FaPaintBrush, FaImage, FaPrint, FaPalette, FaMagic,
  FaCamera, FaBox, FaMobileAlt, FaMicrophone, FaArrowRight, FaPenSquare
} from 'react-icons/fa';
import { FaMeta } from 'react-icons/fa6';
import { TbDrone } from 'react-icons/tb';
import SEO from '../../components/SEO';
import './ServicesPage.css';

const serviceTree = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    tag: 'DIGITAL MARKETING',
    icon: <FaBullhorn />,
    items: [
      { title: 'SEO', subtitle: 'Search Engine Optimization', slug: 'seo', icon: <FaSearch /> },
      { title: 'Meta Ads', slug: 'meta-ad', icon: <FaMeta /> },
      { title: 'Google Ads', slug: 'google-ad', icon: <FaGoogle /> },
      { title: 'Online Promotion', slug: 'online-promotion', icon: <FaBullhorn /> },
      { title: 'Social Media Marketing', slug: 'social-media-marketing', icon: <FaShareAlt /> },
      { title: 'Email Marketing', slug: 'email', icon: <FaEnvelope /> },
      { title: 'WhatsApp Marketing', slug: 'whatsapp', icon: <FaWhatsapp /> },
      { title: 'LinkedIn Marketing', slug: 'linkedin', icon: <FaLinkedin /> },
      { title: 'Content Creation', slug: 'content-creation', icon: <FaPenNib /> }
    ]
  },
  {
    id: 'editing',
    title: 'Editing',
    tag: 'EDITING',
    icon: <FaPenSquare />,
    items: [
      { title: 'Video Editing', slug: 'video-editing', icon: <FaVideo /> },
      { title: 'Reels Editing', slug: 'reels-editing', icon: <FaFilm /> },
      { title: 'Logo Design', slug: 'logo-design', icon: <FaPaintBrush /> },
      { title: 'Poster Design', slug: 'poster-design', icon: <FaImage /> },
      { title: 'Photo Editing', slug: 'photo-editing', icon: <FaCameraRetro /> }
    ]
  },
  {
    id: 'shooting',
    title: 'Shooting',
    tag: 'SHOOTING',
    icon: <FaCamera />,
    items: [
      { title: 'DSLR Camera Shoot', slug: 'dslr-shoot', icon: <FaCamera /> },
      { title: 'Product Shoot', slug: 'product-shoot', icon: <FaBox /> },
      { title: 'Drone Shoot', slug: 'drone-shoot', icon: <TbDrone /> },
      { title: 'Reels Shoot', slug: 'reels-shoot', icon: <FaVideo /> },
      { title: 'Podcast', slug: 'podcast-shoot', icon: <FaMicrophone /> }
    ]
  }
];

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('digital-marketing');

  const currentCategory = serviceTree.find(cat => cat.id === activeCategory) || serviceTree[0];
  const activeIndex = serviceTree.findIndex(cat => cat.id === activeCategory);

  return (
    <div className="services-page-container">
      <SEO 
        title="Our Services | Grow Lap - Digital Marketing, Video Editing & Shoots"
        description="Explore Grow Lap's full range of services: SEO, Meta Ads, Google Ads, Graphic Design, Video Editing, Product Shoots, and Personal Branding."
        keywords="digital marketing services, video editing services, branding services, SEO company, Grow Lap"
      />

      {/* Section 1: Intro Header */}
      <div className="container sp-intro">
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <p className="section-subtitle text-accent">OUR SERVICES</p>
          <h1 className="sp-intro-title">
            Make Your Brand <span className="text-accent">Stand Out</span> and Reach More Customers
          </h1>
          <p className="sp-intro-desc">
            At Grow Lap we help your business reach the right audience through digital marketing, professional shoots, creative editing and business development. We help you build a strong brand presence, connect with potential customers and achieve sustainable business growth.
          </p>
        </div>
      </div>

      {/* Section 2: Choose Your Service - Tree Architecture */}
      <div className="container">
        <div className="services-choose-section">
          <div className="service-tree-card">
            
            {/* Active Category Tag Indicator */}
            <div className="active-tag-indicator">
              <span className="indicator-bullet"></span>
              <span className="indicator-label">{currentCategory.tag}</span>
            </div>

            {/* Core 3 Category Selectors */}
            <div className="service-core-tabs">
              {serviceTree.map((cat, idx) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`core-service-tab ${isActive ? 'active' : ''}`}
                    type="button"
                  >
                    <div className="core-tab-left">
                      <span className="core-tab-icon">{cat.icon}</span>
                      <span className="core-tab-title">{cat.title}</span>
                    </div>
                    <span className="core-tab-arrow">
                      <FaArrowRight />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Flowchart Connector Tree Line */}
            <div className="tree-connector-visual">
              <div 
                className="tree-trunk-drop" 
                style={{
                  left: activeIndex === 0 ? '16.66%' : activeIndex === 1 ? '50%' : '83.33%'
                }}
              ></div>
              <div 
                className="tree-junction-node" 
                style={{
                  left: activeIndex === 0 ? '16.66%' : activeIndex === 1 ? '50%' : '83.33%'
                }}
              ></div>
              <div 
                className="tree-horizontal-bus"
                style={{
                  left: currentCategory.items.length === 9 ? 'calc(100% / 18)' : '10%',
                  right: currentCategory.items.length === 9 ? 'calc(100% / 18)' : '10%'
                }}
              ></div>
            </div>

            {/* Sub-Service Nodes Grid */}
            <div 
              key={activeCategory} 
              className={`sub-services-grid grid-items-${currentCategory.items.length}`}
            >
              {currentCategory.items.map((item) => (
                <div key={item.slug} className="sub-service-col">
                  <div className="card-top-stem"></div>
                  <Link 
                    to={`/services/${currentCategory.id}/${item.slug}`}
                    className="tree-sub-card"
                  >
                    <div className="sub-card-icon-wrapper">
                      {item.icon}
                    </div>
                    <div className="sub-card-name">
                      {item.title}
                    </div>
                    {item.subtitle && (
                      <div className="sub-card-extra">
                        {item.subtitle}
                      </div>
                    )}
                  </Link>
                </div>
              ))}
            </div>

          </div>

          {/* Section 3: Bottom CTA Banner */}
          <div className="services-bottom-cta">
            <div className="services-cta-center">
              <span className="cta-kicker text-accent">GET STARTED</span>
              <h3 className="cta-banner-title">
                Let's Grow Your <span className="text-accent">Business Together</span>
              </h3>
              <p className="cta-banner-desc">
                Looking to grow your business? We’re here to help with marketing, professional shoots, editing, and business development.
              </p>
            </div>

            <div className="services-cta-right">
              <Link to="/#lets-talk" className="cta-action-button">
                Get in Touch <FaArrowRight style={{ marginLeft: '6px' }} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
