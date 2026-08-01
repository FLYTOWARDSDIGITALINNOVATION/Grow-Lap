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
    <section id="process" className="modern-process-section section-padding">
      <div className="container">
        <div className="process-header text-center" style={{ marginBottom: '4rem' }}>
          <h4 className="section-subtitle text-accent">How We Work</h4>
          <h2 className="section-title">Our <span className="text-accent">Process</span></h2>
          <p className="has-subtitle" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
            A proven, step-by-step approach to turning your vision into measurable digital success.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div key={index} className="process-card-modern">
              <div className="process-step-number">{step.id}</div>
              <div className="process-icon-modern">
                {step.icon}
              </div>
              <h3 className="process-card-title">{step.title}</h3>
              <p className="process-card-desc">{step.description}</p>
              
              {/* Connection arrow between cards except last one */}
              {index < processSteps.length - 1 && (
                <div className="process-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
