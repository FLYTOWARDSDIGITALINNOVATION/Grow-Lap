import React, { useState } from 'react';
import './LetsTalkSection.css';

const LetsTalkSection = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(event.target);

    fetch('https://formsubmit.co/ajax/growlapmarketing@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setResult("Message sent successfully!");
      event.target.reset();
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    })
    .catch(error => {
      console.error('Submission failed', error);
      setResult("Failed to send message. Please try again.");
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    });
  };

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
          <form className="lets-talk-form" onSubmit={onSubmit}>
            {/* Hidden fields for FormSubmit configuration */}
            <input type="hidden" name="_subject" value="New Contact Form Submission - Home Page (Let's Talk)" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="Your Email Address" required />
            </div>
            
            <div className="form-group">
              <label>Company</label>
              <input type="text" name="company" placeholder="Your Company Name" required />
            </div>
            
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Write your message" rows="4" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
            
            {result && (
              <p className="form-result-message" style={{ color: result.includes('Success') ? '#4caf50' : '#ff9800', marginTop: '1rem', textAlign: 'center' }}>
                {result}
              </p>
            )}
          </form>
        </div>
        
      </div>
    </section>
  );
};

export default LetsTalkSection;
