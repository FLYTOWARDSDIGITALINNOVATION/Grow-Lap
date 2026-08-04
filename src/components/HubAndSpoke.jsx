import React from 'react';
import { FaSearch, FaBullseye, FaRocket, FaChartLine, FaCogs } from 'react-icons/fa';
import './HubAndSpoke.css';

const HubAndSpoke = () => {
  return (
    <section className="has-section">
      <div className="container">
        
        <div className="has-header text-center">
          <h4 className="section-subtitle text-accent">How We Work</h4>
          <h2 className="has-title">Our <span className="text-accent">Process</span></h2>
          <p className="has-subtitle">
            A proven, step-by-step approach to turning your vision into measurable digital success.
          </p>
        </div>

        <div className="has-layout">
          
          {/* Left Column - Spokes */}
          <div className="has-col has-col-left" style={{ justifyContent: 'space-around' }}>
            <div className="has-spoke has-spoke-left">
              <div className="has-spoke-border"></div>
              <div className="has-spoke-icon-wrapper">
                <div className="has-spoke-icon" style={{ color: '#00d2ff' }}><FaSearch /></div>
              </div>
              <div className="has-spoke-content">
                <h4>01. Discovery & Research</h4>
                <p>We start by diving deep into your brand, your audience, and the competitive landscape to uncover hidden opportunities.</p>
              </div>
              <div className="has-connection has-conn-left-1"></div>
            </div>

            <div className="has-spoke has-spoke-left">
              <div className="has-spoke-border"></div>
              <div className="has-spoke-icon-wrapper">
                <div className="has-spoke-icon" style={{ color: '#ff9800' }}><FaRocket /></div>
              </div>
              <div className="has-spoke-content">
                <h4>03. Campaign Execution</h4>
                <p>Deploying targeted campaigns across optimal channels with precision, creative flair, and strategic alignment.</p>
              </div>
              <div className="has-connection has-conn-left-3"></div>
            </div>
          </div>

          {/* Center Hub */}
          <div className="has-col has-col-center">
            <div className="has-hub">
              <div className="has-hub-dashed"></div>
              <div className="has-hub-inner">
                <FaCogs className="has-hub-icon" />
                <h3>Our Proven</h3>
                <h3 className="has-hub-accent">Methodology</h3>
                <h3>For Success</h3>
                <div className="has-hub-dot"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Spokes */}
          <div className="has-col has-col-right" style={{ justifyContent: 'space-around' }}>
            <div className="has-spoke has-spoke-right">
              <div className="has-spoke-border"></div>
              <div className="has-connection has-conn-right-1"></div>
              <div className="has-spoke-icon-wrapper">
                <div className="has-spoke-icon" style={{ color: '#ff4b4b' }}><FaBullseye /></div>
              </div>
              <div className="has-spoke-content">
                <h4>02. Strategic Planning</h4>
                <p>Crafting a customized, data-backed roadmap tailored to your specific goals and market positioning.</p>
              </div>
            </div>

            <div className="has-spoke has-spoke-right">
              <div className="has-spoke-border"></div>
              <div className="has-connection has-conn-right-3"></div>
              <div className="has-spoke-icon-wrapper">
                <div className="has-spoke-icon" style={{ color: '#4caf50' }}><FaChartLine /></div>
              </div>
              <div className="has-spoke-content">
                <h4>04. Optimization & Growth</h4>
                <p>Continuously monitoring performance metrics and optimizing your campaigns to ensure sustainable business growth.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HubAndSpoke;
