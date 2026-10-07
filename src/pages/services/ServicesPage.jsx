import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { servicesData } from '../../data/servicesData';
import SEO from '../../components/SEO';
import './ServicesPage.css';

const badges = ['MARKETING', 'POST-PRODUCTION', 'PRODUCTION'];
const customImages = [
  '/pexels-markus-winkler-1430818-4604639.webp',
  'photo-1574717024653-61fd2cf4d44d.webp',
  'service_shoots_new.webp'
];

const ServicesPage = () => {
  return (
    <div className="services-page-container">
      <SEO 
        title="Our Services | Grow Lap - Digital Marketing, Video Editing & Shoots"
        description="Explore Grow Lap's full range of services: SEO, Meta Ads, Google Ads, Graphic Design, Video Editing, Product Shoots, and Personal Branding."
        keywords="digital marketing services, video editing services, branding services, SEO company, Grow Lap"
      />
      {/* Intro Content */}
      <div className="container sp-intro">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="section-subtitle text-accent">OUR EXPERTISE</p>
          <h1 className="sp-intro-title">
            Elevate Your Brand with Our <span className="text-accent">Digital Marketing</span> Services
          </h1>
          <p className="sp-intro-desc">
            At Grow Lap, we don't just provide services; we deliver growth. 
            The categories listed below highlight our core areas of expertise, but our true strength lies in offering a massive, fully customized range of 360-degree digital solutions. 
            From advanced SEO and complex ad campaigns to high-end professional shoots and complete brand identity, we provide absolutely everything your brand needs to dominate the digital landscape.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Services List */}
        <div className="sp-list">
          {servicesData.map((service, index) => (
            <div key={service.slug} className={`sp-card ${index % 2 !== 0 ? 'reverse' : ''}`}>
              
              <div className="sp-image-container">
                <img src={customImages[index] || service.image} alt={service.title} className="sp-image" />
              </div>

              <div className="sp-content">
                <span className="sp-badge">{badges[index]}</span>
                <h2 className="sp-title">{service.title.toUpperCase()}</h2>
                
                <div className="sp-tags">
                  {service.benefits.map((benefit) => (
                    <Link 
                      key={benefit.slug} 
                      to={`/services/${service.slug}/${benefit.slug}`} 
                      className="sp-tag"
                      style={{ textDecoration: 'none' }}
                    >
                      {benefit.title}
                    </Link>
                  ))}
                </div>

                <Link to={`/services/${service.slug}`} className="sp-explore">
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
