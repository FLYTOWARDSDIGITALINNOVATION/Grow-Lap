import React from 'react';
import IndustrySection from '../components/IndustrySection';

const IndustryPage = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }}>
      {/* Intro Content */}
      <div className="container" style={{ marginBottom: '3rem' }}>
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="section-subtitle text-accent">OUR EXPERTISE ACROSS SECTORS</p>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            Empowering Every <span className="text-accent">Industry</span> With Digital Growth
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Every industry has unique challenges and audiences. At Fly Towards Digital Innovation, 
            we tailor our digital marketing, content creation, and shooting services to meet the 
            exact needs of your sector. Whether you run a hospital, a clothing brand, or a real-estate 
            company, our strategies ensure you stand out in a competitive market.
          </p>
        </div>
      </div>

      {/* Industry Grid */}
      <IndustrySection />
    </div>
  );
};

export default IndustryPage;
