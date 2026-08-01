import React from 'react';
import './LetsTalkSection.css';

const LetsTalkSection = () => {
  return (
    <section className="lets-talk-section">
      <div className="lets-talk-bg-pattern"></div>
      <div className="container lets-talk-container">
        
        {/* Left Side: Typography */}
        <div className="lets-talk-text">
          <h1>
            <span className="text-white">Let's</span><br/>
            <span className="text-orange">Talk!</span>
          </h1>
        </div>
        
        {/* Right Side: Form */}
        <div className="lets-talk-form-container">
          <form className="lets-talk-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Jane Smith" required />
            </div>
            
            <div className="form-group">
              {/* User specifically asked to replace Email with Company */}
              <label>Company</label>
              <input type="text" placeholder="Your Company Name" required />
            </div>
            
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Write your message" rows="4" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
        
      </div>
    </section>
  );
};

export default LetsTalkSection;
