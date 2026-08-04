import React from 'react';
import { FaSyncAlt } from 'react-icons/fa';
import './OptimizationLoop.css';

const loopSteps = [
  {
    id: '01',
    title: 'Launch',
    description: 'Go live with data-backed digital campaigns and creative assets quickly.'
  },
  {
    id: '02',
    title: 'Read the signal',
    description: 'Track audience behavior, ad performance, and conversion signals in real-time.'
  },
  {
    id: '03',
    title: 'Sharpen',
    description: 'Refine targeting, messaging, and creatives to maximize digital ROI.'
  },
  {
    id: '04',
    title: 'Scale',
    description: 'Expand winning campaigns across channels to grow leads and sales.'
  }
];

const OptimizationLoop = () => {
  return (
    <section className="opt-loop-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="opt-loop-header text-center">
          <p className="opt-loop-subtitle">HOW WE DELIVER VALUE</p>
          <h2 className="opt-loop-title">Our Continuous Optimization Loop</h2>
          <div className="opt-loop-line"></div>
        </div>

        {/* Circular Loop Container (Desktop only) */}
        <div className="opt-loop-wrapper-desktop">
          <div className="opt-loop-circle-container">
            
            {/* Concentric Decorative Rings */}
            <div className="opt-concentric-ring ring-1"></div>
            <div className="opt-concentric-ring ring-2"></div>
            
            {/* Rotating SVG Ring with arrows */}
            <div className="opt-rotating-ring-wrapper">
              <svg className="opt-ring-svg" viewBox="0 0 100 100">
                {/* Glowing Background Ring */}
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255, 94, 0, 0.15)" strokeWidth="3" />
                {/* Active Neon Ring */}
                <circle cx="50" cy="50" r="45" fill="none" stroke="#ff9800" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="30 15 40 15 20 10" />
                
                {/* Clockwise arrows along the ring path */}
                {/* Arrow at 12 o'clock */}
                <path d="M 50 5 L 53 8 L 50 11" fill="none" stroke="#ff9800" strokeWidth="1" strokeLinecap="round" />
                {/* Arrow at 3 o'clock */}
                <path d="M 95 50 L 92 53 L 89 50" fill="none" stroke="#ff9800" strokeWidth="1" strokeLinecap="round" />
                {/* Arrow at 6 o'clock */}
                <path d="M 50 95 L 47 92 L 50 89" fill="none" stroke="#ff9800" strokeWidth="1" strokeLinecap="round" />
                {/* Arrow at 9 o'clock */}
                <path d="M 5 50 L 8 47 L 11 50" fill="none" stroke="#ff9800" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>

            {/* Central Sticky Hub */}
            <div className="opt-center-hub">
              <div className="opt-hub-content">
                <FaSyncAlt className="opt-hub-icon-spin" />
                <h3>One team. One loop. <br/><span className="opt-accent-text">No handoff.</span></h3>
              </div>
            </div>

            {/* Step 01: Ship (Top) */}
            <div className="opt-step-card pos-top">
              <div className="opt-card-header">
                <span className="opt-card-number">01</span>
                <h4>{loopSteps[0].title}</h4>
              </div>
              <p>{loopSteps[0].description}</p>
            </div>

            {/* Step 02: Read the signal (Right) */}
            <div className="opt-step-card pos-right">
              <div className="opt-card-header">
                <span className="opt-card-number">02</span>
                <h4>{loopSteps[1].title}</h4>
              </div>
              <p>{loopSteps[1].description}</p>
            </div>

            {/* Step 03: Sharpen (Bottom) */}
            <div className="opt-step-card pos-bottom">
              <div className="opt-card-header">
                <span className="opt-card-number">03</span>
                <h4>{loopSteps[2].title}</h4>
              </div>
              <p>{loopSteps[2].description}</p>
            </div>

            {/* Step 04: Scale (Left) */}
            <div className="opt-step-card pos-left">
              <div className="opt-card-header">
                <span className="opt-card-number">04</span>
                <h4>{loopSteps[3].title}</h4>
              </div>
              <p>{loopSteps[3].description}</p>
            </div>

          </div>
        </div>

        {/* Mobile Linear List Container */}
        <div className="opt-loop-wrapper-mobile">
          <div className="opt-mobile-hub">
            <FaSyncAlt className="opt-hub-icon-spin" />
            <h3>One team. One loop. <span className="opt-accent-text">No handoff.</span></h3>
          </div>
          <div className="opt-mobile-steps">
            {loopSteps.map((step, idx) => (
              <div className="opt-mobile-card" key={idx}>
                <div className="opt-mobile-num">{step.id}</div>
                <div className="opt-mobile-info">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OptimizationLoop;
