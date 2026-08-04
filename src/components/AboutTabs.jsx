import React, { useState } from 'react';
import { FaRocket, FaLightbulb, FaTools, FaCheckCircle, FaHandshake, FaChartLine } from 'react-icons/fa';
import './AboutTabs.css';

const tabData = [
  {
    id: 'mission',
    icon: <FaRocket />,
    title: 'Our Mission',
    subtitle: 'Deliver exceptional ROI',
    headline: 'Empowering Businesses with Digital Brilliance',
    description: "To empower businesses with innovative, data-driven digital marketing solutions that foster sustainable growth, build meaningful customer relationships, and drive measurable return on investment. We believe in providing tangible results over vanity metrics.",
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    bullets: ['Focus on sustainable growth', 'Data-driven decision making', 'Measurable return on investment']
  },
  {
    id: 'vision',
    icon: <FaLightbulb />,
    title: 'Our Vision',
    subtitle: 'Setting new standards',
    headline: 'To Become The World\'s Most Trusted Agency',
    description: "To become the world's most trusted digital innovation agency, recognized for our relentless pursuit of excellence, creative brilliance, and unparalleled ability to transform traditional businesses into modern digital leaders.",
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    bullets: ['Global industry recognition', 'Setting new creative standards', 'Cultivating top marketing talent']
  },
  {
    id: 'approach',
    icon: <FaTools />,
    title: 'Our Approach',
    subtitle: 'Strategic & Customized',
    headline: 'Tailored Strategies For Unique Goals',
    description: "We don't believe in one-size-fits-all. Our approach involves deep market research, understanding your specific target audience, and crafting tailored strategies that align perfectly with your business objectives and budget.",
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    bullets: ['Deep market analysis', 'Customized digital roadmaps', 'Agile execution and testing']
  },
  {
    id: 'quality',
    icon: <FaCheckCircle />,
    title: 'Quality Assurance',
    subtitle: 'Uncompromising excellence',
    headline: 'Excellence in Every Pixel and Pixel',
    description: "We treat your brand as if it were our own. We never compromise on the quality of our deliverables. From flawless code and stunning designs to persuasive copywriting, every element is rigorously checked before launch.",
    image: 'https://images.unsplash.com/photo-1542744094-24638ea0b3b5?w=800&q=80',
    bullets: ['Rigorous quality checks', 'Premium design standards', 'Flawless technical execution']
  },
  {
    id: 'partnership',
    icon: <FaHandshake />,
    title: 'Client Partnership',
    subtitle: 'Your extended team',
    headline: 'We Are In This Together',
    description: "We view our clients as long-term partners. Transparency, consistent communication, and mutual trust form the foundation of everything we do. When you succeed, we succeed.",
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=800&q=80',
    bullets: ['Transparent communication', 'Dedicated account managers', 'Long-term growth focus']
  },
  {
    id: 'growth',
    icon: <FaChartLine />,
    title: 'Continuous Growth',
    subtitle: 'Always evolving',
    headline: 'Staying Ahead of The Digital Curve',
    description: "The digital landscape changes daily. We continuously invest in learning, testing new tools, and adapting our strategies to ensure our clients always stay one step ahead of their competitors.",
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80',
    bullets: ['Continuous skill development', 'Early adoption of new tech', 'Proactive strategy updates']
  }
];

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState(tabData[0]);
  const [isFading, setIsFading] = useState(false);

  const handleTabClick = (tab) => {
    if (activeTab.id === tab.id) return;
    
    setIsFading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsFading(false);
    }, 300); // 300ms fade transition
  };

  return (
    <section className="about-tabs-section">
      <div className="container">
        
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <p className="section-subtitle text-accent">OUR FOUNDATION</p>
          <h2 style={{ fontSize: '2rem' }}>Who We Are & What Drives Us</h2>
        </div>

        <div className="about-tabs-layout">
          
          {/* Left Side: Tabs Grid */}
          <div className="about-tabs-grid">
            {tabData.map((tab) => (
              <button 
                key={tab.id}
                className={`about-tab-btn ${activeTab.id === tab.id ? 'active' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                <div className="about-tab-icon">
                  {tab.icon}
                </div>
                <div className="about-tab-text">
                  <h4>{tab.title}</h4>
                  <p>{tab.subtitle}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side: Content Panel */}
          <div className="about-tabs-content-wrapper">
            <div className={`about-tabs-content ${isFading ? 'fading' : ''}`}>
              
              <div className="about-tabs-image">
                <img src={activeTab.image} alt={activeTab.title} />
                <div className="about-tabs-image-overlay"></div>
              </div>
              
              <div className="about-tabs-details">
                <h3>{activeTab.headline}</h3>
                <p>{activeTab.description}</p>
                <ul className="about-tabs-bullets">
                  {activeTab.bullets.map((bullet, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="bullet-icon" /> {bullet}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutTabs;
