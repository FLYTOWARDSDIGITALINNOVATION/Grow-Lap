import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './ServicesSection.css';

const ServiceCard3D = ({ service, index }) => {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);
  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - top) / height - 0.5;
    // Map to angles (max 10 degrees)
    setTilt({ x: x * 10, y: y * -10 }); 
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <Link 
      to={`/services/${service.slug}`} 
      className="service-sticky-link"
      style={{ top: `calc(120px + ${index * 30}px)` }}
    >
      <div 
        className="service-stacked-card tilt-card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) ${isHovering ? 'translateZ(20px)' : 'translateZ(0)'}`,
          transition: isHovering ? 'transform 0.1s ease-out, box-shadow 0.1s ease-out' : 'transform 0.5s ease-out, box-shadow 0.5s ease-out',
          boxShadow: isHovering ? `0 30px 60px rgba(0,0,0,0.6), ${-tilt.x}px ${tilt.y}px 25px rgba(255, 107, 0, 0.15)` : ''
        }}
      >
        <div className="ssc-image-box" style={{ transform: isHovering ? 'translateZ(40px)' : 'translateZ(0)', transition: 'transform 0.3s ease-out' }}>
          <img src={service.image} alt={service.title} />
        </div>
        <div className="ssc-content-box" style={{ transform: isHovering ? 'translateZ(30px)' : 'translateZ(0)', transition: 'transform 0.3s ease-out' }}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <span className="ssc-explore">Explore Category &rarr;</span>
        </div>
      </div>
    </Link>
  );
};

const ServicesSection = ({ limit }) => {
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-subtitle text-accent">WHAT WE DO</p>
          <h2 className="section-title">Our Categories</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="services-stacked-container">
          {displayedServices.map((service, index) => (
            <ServiceCard3D key={index} service={service} index={index} />
          ))}
        </div>

        {limit && (
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn-primary">View All Categories &rarr;</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
