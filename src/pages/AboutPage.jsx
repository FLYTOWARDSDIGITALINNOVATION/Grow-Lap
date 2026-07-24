import React from 'react';
import { FaHeart, FaShieldAlt, FaHandshake } from 'react-icons/fa';
import AboutSection from '../components/AboutSection';

const AboutPage = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }}>
      
      {/* This section contains "Shaping Stronger Brands Through Digital Excellence" */}
      <AboutSection />

      {/* Our Story Section */}
      <div className="container" style={{ marginTop: '5rem', marginBottom: '4rem' }}>
        <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p className="section-subtitle text-accent">OUR STORY</p>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            The Journey of <span className="text-accent">Digital Excellence</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            What started as a small team of passionate creators has now grown into a full-fledged digital innovation agency. 
            At Fly Towards Digital Innovation, our journey has always been fueled by a single motive: helping brands unlock their true potential in the digital space.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            We believe that every business has a unique story, and our job is to tell that story to the world through 
            impactful marketing, stunning visuals, and cutting-edge technology. From capturing perfect moments through our shoots to crafting viral marketing campaigns, we have consistently pushed the boundaries of digital excellence.
          </p>
        </div>
      </div>

      {/* Core Values / Partnership Section */}
      <div className="container" style={{ marginBottom: '5rem', marginTop: '2rem' }}>
        <div className="grid-3">
          
          <div style={{ 
            backgroundColor: 'var(--bg-card)', 
            padding: '3rem 2rem', 
            borderRadius: '8px', 
            textAlign: 'center',
            border: '1px solid var(--border-color)',
            transition: 'transform 0.3s ease'
          }} className="core-value-card">
            <FaHeart style={{ fontSize: '3rem', color: 'var(--accent-orange)', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Partnership</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: 0 }}>
              We're not just service providers, we're your digital partners
            </p>
          </div>

          <div style={{ 
            backgroundColor: 'var(--bg-card)', 
            padding: '3rem 2rem', 
            borderRadius: '8px', 
            textAlign: 'center',
            border: '1px solid var(--border-color)',
            transition: 'transform 0.3s ease'
          }} className="core-value-card">
            <FaShieldAlt style={{ fontSize: '3rem', color: 'var(--accent-orange)', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Trust</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: 0 }}>
              Building long-term relationships based on trust and reliability
            </p>
          </div>

          <div style={{ 
            backgroundColor: 'var(--bg-card)', 
            padding: '3rem 2rem', 
            borderRadius: '8px', 
            textAlign: 'center',
            border: '1px solid var(--border-color)',
            transition: 'transform 0.3s ease'
          }} className="core-value-card">
            <FaHandshake style={{ fontSize: '3rem', color: 'var(--accent-orange)', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Support</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: 0 }}>
              Always there when you need us, supporting your success
            </p>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default AboutPage;
