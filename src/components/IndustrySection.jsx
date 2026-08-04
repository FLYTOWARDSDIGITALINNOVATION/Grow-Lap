import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { industries } from '../data/industries';
import './IndustrySection.css';

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
                <ul className="industry-card-lines">
                  {item.lines.map((line, i) => (
                    <li key={i} className="industry-line-item">
                      <FaCheckCircle className="industry-line-icon" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <Link to={`/industry/${item.slug}`} className="industry-explore-link">
                  Explore Service &rarr;
                </Link>
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
