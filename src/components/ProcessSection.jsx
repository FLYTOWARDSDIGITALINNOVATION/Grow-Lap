import React from 'react';
import { FaSearch, FaBullseye, FaRocket, FaChartLine } from 'react-icons/fa';
import './ProcessSection.css';

const processSteps = [
  {
    id: '01',
    icon: <FaSearch style={{ color: '#00d2ff' }} />,
    title: 'Discovery & Research',
    description: 'We start by diving deep into your brand, your audience, and the competitive landscape to uncover hidden opportunities.'
  },
  {
    id: '02',
    icon: <FaBullseye style={{ color: '#ff4b4b' }} />,
    title: 'Strategic Planning',
    description: 'Crafting a customized, data-backed roadmap tailored to your specific goals and market positioning.'
  },
  {
    id: '03',
    icon: <FaRocket style={{ color: '#ff9800' }} />,
    title: 'Campaign Execution',
    description: 'Deploying targeted campaigns across optimal channels with precision, creative flair, and strategic alignment.'
  },
  {
    id: '04',
    icon: <FaChartLine style={{ color: '#4caf50' }} />,
    title: 'Optimization & Growth',
    description: 'Continuously monitoring performance metrics and optimizing your campaigns to ensure sustainable business growth.'
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="timeline-process-section section-padding">
      <div className="container">
        <div className="timeline-header text-center">
          <h2 className="timeline-title">Our <span className="text-accent">Process</span></h2>
        </div>

        <div className="timeline-container">
          {/* Vertical Line */}
          <div className="timeline-vertical-line"></div>

          {processSteps.map((step, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="timeline-icon">{step.icon}</div>
                  <h3 className="timeline-card-title">{step.title}</h3>
                </div>
                <p className="timeline-card-desc">{step.description}</p>
                <span className="timeline-number">{step.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
