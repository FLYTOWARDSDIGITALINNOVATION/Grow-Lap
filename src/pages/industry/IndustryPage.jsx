import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { industries } from '../../data/industries';
import SEO from '../../components/SEO';

const IndustryPage = () => {
  return (
    <div className="industry-page-wrapper" style={{ minHeight: '80vh', paddingTop: '140px' }}>
      <SEO 
        title="Industry-Specific Digital Marketing Services | Grow Lap" 
        description="Explore industry-specific digital marketing services from Grow Lap. We help businesses reach the right audience, build their brand, and grow online."
        keywords="Industry-Specific Digital Marketing Services"
        canonical="https://www.growlap.com/industry"
        ogImage="https://www.growlap.com/Grow%20Lap.webp"
        ogImageAlt="Industry"
        robots="index,follow"
      />
      {/* Intro Content */}
      <div className="container" style={{ marginBottom: '3rem' }}>
        <div className="text-center" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <p className="section-subtitle text-accent">OUR EXPERTISE ACROSS SECTORS</p>
          <h1 className="industry-hero-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: '1.25', color: '#fff' }}>
            Industry-Specific Digital Marketing Services for <span className="text-accent">Business Growth</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
            Every industry has different goals, challenges, and customers. Grow Lap provides industry-specific digital marketing services to help businesses improve online visibility, reach the right audience, and attract more potential customers through tailored marketing solutions.
          </p>
        </div>
      </div>

      {/* Industry Grid */}
      <section id="industry" className="industry-section section-padding">
        <div className="container">
          <div className="industry-img-grid">
            {industries.map((item, index) => (
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
        </div>
      </section>
    </div>
  );
};

export default IndustryPage;
