import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './ServicesSection.css';

const ServicesSection = ({ limit }) => {
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-subtitle text-accent">WHAT WE DO</p>
          <h2 className="section-title">Our Services</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="services-stacked-container">
          {displayedServices.map((service, index) => (
            <Link 
              to={`/services/${service.slug}`} 
              key={index} 
              className="service-sticky-link"
              style={{ top: `calc(120px + ${index * 30}px)` }}
            >
              <div className="service-stacked-card">
                <div className="ssc-image-box">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="ssc-content-box">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="ssc-explore">Explore Service &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {limit && (
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn-primary">View All Services &rarr;</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
