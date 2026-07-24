import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './ServicesPage.css';

const pageServices = [
  {
    id: 1,
    badge: 'MARKETING',
    title: 'DIGITAL MARKETING',
    tags: [
      'SEO - search engine optimization',
      'meta ad',
      'google ad',
      'online promotion',
      'social media marketing',
      'email',
      'WhatsApp',
      'LinkedIn',
      'content creation',
      'personal branding',
      'script writing'
    ],
    image: '/pexels-markus-winkler-1430818-4604639.jpg',
    link: '/services/digital-marketing'
  },
  {
    id: 2,
    badge: 'POST-PRODUCTION',
    title: 'VIDEO EDITING',
    tags: [
      'editing',
      'reels editing',
      'vlog full editing',
      'wedding editing',
      'photo editing',
      'logo design',
      'poster design',
      'flex design',
      'graphics design',
      'animation'
    ],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    link: '/services/video-editing'
  },
  {
    id: 3,
    badge: 'PRODUCTION',
    title: 'SHOOT',
    tags: [
      'DSLR shoot',
      'product shoot',
      'mobile shoot',
      'drone shoot',
      'reels shoot',
      'podcast shoot'
    ],
    image: 'service_shoots_new.webp',
    link: '/services/shoot'
  }
];

const ServicesPage = () => {
  return (
    <div className="services-page-container">
      {/* Intro Content */}
      <div className="container sp-intro" style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="section-subtitle text-accent">OUR EXPERTISE</p>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            Elevate Your Brand with Our <span className="text-accent">Digital Marketing</span> Services
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            At Fly Towards Digital Innovation, we don't just provide services; we deliver growth. 
            Our comprehensive suite of digital marketing solutions is designed to boost your online presence, 
            engage your target audience, and drive measurable results. From SEO and Social Media to 
            professional shoots and video editing, we are your one-stop solution for all digital needs.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Services List */}
        <div className="sp-list">
          {pageServices.map((service, index) => (
            <div key={service.id} className={`sp-card ${index % 2 !== 0 ? 'reverse' : ''}`}>
              
              <div className="sp-image-container">
                <img src={service.image} alt={service.title} className="sp-image" />
              </div>

              <div className="sp-content">
                <span className="sp-badge">{service.badge}</span>
                <h2 className="sp-title">{service.title}</h2>
                
                <div className="sp-tags">
                  {service.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="sp-tag">{tag}</span>
                  ))}
                </div>

                <Link to={service.link} className="sp-explore">
                  Explore Service <FaArrowRight style={{ fontSize: '1rem' }} />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
