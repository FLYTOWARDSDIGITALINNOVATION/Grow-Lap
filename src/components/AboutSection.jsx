import React from 'react';
import { FaBullseye, FaLightbulb, FaUserTie, FaHeadset } from 'react-icons/fa';
import './AboutSection.css';

const reasons = [
  {
    icon: <FaBullseye />,
    title: 'Result Driven',
    description: 'We focus on strategies that deliver measurable growth.'
  },
  {
    icon: <FaLightbulb />,
    title: 'Innovative Solutions',
    description: 'We use the latest technology to solve real business problems.'
  },
  {
    icon: <FaUserTie />,
    title: 'Experienced Team',
    description: 'Skilled professionals with deep industry experience.'
  },
  {
    icon: <FaHeadset />,
    title: 'Dedicated Support',
    description: 'We are with you at every step, even after delivery.'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container grid-2 align-center">
        {/* Left Side */}
        <div className="about-content">
          <p className="section-subtitle text-accent">ABOUT US</p>
          <h2 className="about-title">
            Shaping Stronger Brands Through <span className="text-accent">Digital Excellence</span>
          </h2>
          <p>
            Fly Towards Digital Innovation is a creative IT solution and digital marketing agency passionate about helping businesses grow in the digital world. From startups to enterprises, we deliver solutions that make an impact.
          </p>
          <button className="btn-primary mt-2">Know More About Us &rarr;</button>
        </div>

        {/* Right Side */}
        <div className="about-reasons">
          <p className="section-subtitle text-accent text-center-mobile">WHY CHOOSE US?</p>
          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <div key={index} className="reason-card">
                <div className="reason-icon text-accent">{reason.icon}</div>
                <div className="reason-info">
                  <h4>{reason.title}</h4>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
