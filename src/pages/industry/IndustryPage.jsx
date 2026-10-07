import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { industries } from '../../data/industries';
import SEO from '../../components/SEO';

const IndustryPage = () => {
  return (
    <div className="industry-page-wrapper" style={{ minHeight: '80vh', paddingTop: '140px' }}>
      <SEO 
        title="Industries We Serve | Grow Lap" 
        description="Explore the tailored digital marketing, web development, and shoot services provided by Grow Lap across various industries."
      />
      {/* Intro Content */}
      <div className="container" style={{ marginBottom: '3rem' }}>
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="section-subtitle text-accent">OUR EXPERTISE ACROSS SECTORS</p>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            Empowering Every <span className="text-accent">Industry</span> With Digital Growth
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Every industry has unique challenges and audiences. At Grow Lap, 
            we tailor our digital marketing, content creation, and shooting services to meet the 
            exact needs of your sector. Whether you run a hospital, a clothing brand, or a real-estate 
            company, our strategies ensure you stand out in a competitive market.
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
