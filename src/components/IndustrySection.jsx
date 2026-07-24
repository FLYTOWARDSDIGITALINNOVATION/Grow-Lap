import React from 'react';
import { Link } from 'react-router-dom';
import './IndustrySection.css';

const industries = [
  {
    name: 'REAL ESTATE',
    tag: 'SELL PROPERTIES FASTER',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    pills: ['Property Shoot', 'Targeted Ads', 'Lead Funnels']
  },
  {
    name: 'CLOTHING BRANDS',
    tag: 'FASHION THAT CONVERTS',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80', 
    pills: ['Lookbook Shoots', 'Social Buzz', 'E-Commerce']
  },
  {
    name: 'MANUFACTURING',
    tag: 'B2B DOMINANCE',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    pills: ['Factory Shoots', 'B2B SEO', 'LinkedIn Ads']
  },
  {
    name: 'JEWELRY',
    tag: 'LUXURY MEETS DIGITAL',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    pills: ['Macro Shoots', 'Luxury Branding', 'Visual Ads']
  },
  {
    name: 'HOSPITALS & CLINICS',
    tag: 'PATIENT-FIRST MARKETING',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    pills: ['Facility Tours', 'Local SEO', 'Doctor Profiles']
  },
  {
    name: 'HOTELS',
    tag: 'DRIVE DIRECT BOOKINGS',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    pills: ['Cinematic Promos', 'Search Campaigns', 'Social Proof']
  },
  {
    name: 'SCHOOLS & COLLEGES',
    tag: 'INSPIRE THE NEXT GENERATION',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    pills: ['Campus Tours', 'Parent Targeting', 'Success Stories']
  },
  {
    name: 'TAXIS & TRANSPORT',
    tag: 'DOMINATE LOCAL TRANSIT',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    pills: ['Local Awareness', 'Search Dominance', 'Driver Recruitment']
  },
  {
    name: 'CONSTRUCTION',
    tag: 'BUILD YOUR DIGITAL FOUNDATION',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    pills: ['Project Portfolios', 'B2B Search', 'Trust Signals']
  },
  {
    name: 'SHOWROOMS',
    tag: 'DRIVE INSANE LOCAL FOOTFALL',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
    pills: ['Product Spotlights', 'Geo-Targeted Ads', 'Walk-in Campaigns']
  }
];

const IndustrySection = ({ limit }) => {
  const displayedIndustries = limit ? industries.slice(0, limit) : industries;

  return (
    <section id="industry" className="industry-section section-padding">
      <div className="container">
        {limit && (
          <div className="section-header text-center">
            <p className="section-subtitle text-accent">WHO WE SERVE</p>
            <h2 className="section-title">Industries We Dominate</h2>
            <div className="section-line"></div>
          </div>
        )}

        <div className="industry-img-grid">
          {displayedIndustries.map((item, index) => (
            <div key={index} className="industry-img-card">
              <div className="industry-card-img" style={{ backgroundImage: `url(${item.image})` }}></div>
              <div className="industry-card-body">
                <span className="industry-card-tag">{item.tag}</span>
                <h3 className="industry-card-title">{item.name}</h3>
                <div className="industry-card-pills">
                  {item.pills.map((pill, i) => (
                    <span key={i} className="industry-pill">{pill}</span>
                  ))}
                </div>
                <div className="industry-explore-link">
                  Explore Service &rarr;
                </div>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/industry" className="btn-primary">View All Industries &rarr;</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustrySection;
