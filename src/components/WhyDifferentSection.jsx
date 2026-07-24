import React from 'react';
import { FaChartLine, FaEye, FaUserTie, FaCog } from 'react-icons/fa';
import './WhyDifferentSection.css';

const reasons = [
  {
    icon: <FaChartLine />,
    title: 'Data-Driven Strategies',
    description: "Every campaign is backed by deep analytics, ensuring maximum ROI."
  },
  {
    icon: <FaEye />,
    title: 'Transparent Reporting',
    description: "Clear, easy-to-understand reports showing exactly where your budget goes."
  },
  {
    icon: <FaUserTie />,
    title: 'Dedicated Expert Team',
    description: "Work directly with seasoned specialists invested in your success."
  },
  {
    icon: <FaCog />,
    title: 'Tailored Solutions',
    description: "Custom digital solutions aligned with your unique business goals."
  }
];

const WhyDifferentSection = () => {
  return (
    <section className="why-different-section section-padding">
      <div className="container">
        <div className="why-different-layout">
          {/* Left Content */}
          <div className="why-content-side">
            <p className="section-subtitle text-accent">OUR EDGE</p>
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 1rem 0' }}>Why We Are Different</h2>
            <div className="section-line" style={{ margin: '0 0 2.5rem 0' }}></div>
            
            <p className="why-intro">
              In a sea of generic agencies, we stand out by prioritizing tangible results over vanity metrics. 
              Here is what makes partnering with us a game-changer for your business.
            </p>

            <div className="why-list">
              {reasons.map((reason, index) => (
                <div key={index} className="why-list-item">
                  <div className="why-list-icon">
                    {reason.icon}
                  </div>
                  <div className="why-list-text">
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="why-image-side">
            <div className="why-image-wrapper">
              <img src="https://picsum.photos/seed/difference/800/900" alt="Why We Are Different" className="why-image" />
              <div className="why-image-overlay">
                <div className="why-stat">
                  <h4>10+</h4>
                  <p>Years Experience</p>
                </div>
                <div className="why-stat">
                  <h4>100%</h4>
                  <p>Client Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
