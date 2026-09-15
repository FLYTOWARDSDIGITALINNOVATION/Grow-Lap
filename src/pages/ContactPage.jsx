import React, { useState } from 'react';
import './ContactPage.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const form = e.target;
    const formData = new FormData(form);

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
      form.reset();
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
    <div className="contact-page-wrapper">
      <div className="contact-bg-accents"></div>
      
      {/* Top Banner Section */}
      <div className="contact-hero-banner" style={{ paddingTop: '2.5rem', paddingBottom: '1.5rem', textAlign: 'center' }}>
        <div className="container">
          <p className="contact-hero-badge text-accent" style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '0.5rem' }}>CONTACT US</p>
          <h1 className="contact-hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#fff', marginBottom: '0.8rem', fontFamily: 'Outfit, sans-serif' }}>Get In Touch With <span className="text-gradient-orange">Grow Lap</span></h1>
          <p className="contact-hero-subtitle" style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)', color: '#aaa', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>Have questions or ready to launch your next digital marketing campaign? We are here to help you scale.</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-layout">
          
          {/* Left Form Section */}
          <div className="contact-form-section">
            <p className="contact-subtitle text-accent" style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.4rem' }}>GET IN TOUCH</p>
            <h1 className="contact-title" style={{ textTransform: 'uppercase' }}>LET'S WORK <span className="contact-title-accent">TOGETHER</span></h1>
            <p className="contact-desc" style={{ fontSize: '1rem', color: '#ccc', marginBottom: '0.8rem', lineHeight: '1.5' }}>Ready to grow your business? Let's build your brand strategy together.</p>
            <div className="contact-title-line"></div>
            
            <form onSubmit={handleSubmit}>
              {/* Hidden fields for FormSubmit configuration */}
              <input type="hidden" name="_subject" value="New Contact Form Submission - Fly Towards" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="contact-form-grid">
                <input type="text" name="Name" className="contact-input full-width" placeholder="Name" required />
                <input type="text" name="Company Name" className="contact-input" placeholder="Company Name" required />
                <input type="tel" name="Phone Number" className="contact-input" placeholder="Phone number" required />
                <textarea name="Message" className="contact-textarea" placeholder="Message" required></textarea>
              </div>
              
              <div className="contact-checkbox-group">
                <input type="checkbox" id="terms" name="Agreed_To_Terms" value="Yes" required />
                <label htmlFor="terms">I agree <a href="#">Privacy Terms and Conditions</a></label>
              </div>
              
              <button type="submit" className="btn-contact-submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit"}
              </button>

              {result && (
                <p style={{ color: result.includes('successfully') ? '#4caf50' : '#ff9800', marginTop: '1rem', textAlign: 'center' }}>
                  {result}
                </p>
              )}
            </form>
          </div>

          {/* Right Image Section */}
          <div className="contact-image-wrapper">
            <img src="/contact-illustration.webp" alt="Contact Us 3D Illustration" className="contact-3d-image" />
          </div>

        </div>
        
        {/* Contact Info Centered Card */}
        <div className="direct-contact-section">
          <div className="direct-contact-header">
            <h3>Direct Contact</h3>
            <p>Reach out to us directly for immediate assistance or to start a new project. Our team is ready to assist you.</p>
          </div>
          
          <div className="contact-cards-grid">
            <a href="tel:+917695883647" className="contact-info-card" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="icon-circle">
                <FaPhoneAlt className="contact-icon text-accent" />
              </div>
              <h4>Call Us</h4>
              <p>+91 76958 83647</p>
            </a>
            
            <a href="mailto:growlapmarketing@gmail.com" className="contact-info-card" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="icon-circle">
                <FaEnvelope className="contact-icon text-accent" />
              </div>
              <h4>Email Us</h4>
              <p>growlapmarketing@gmail.com</p>
            </a>
            
            <a href="#map-location" className="contact-info-card" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="icon-circle">
                <FaMapMarkerAlt className="contact-icon text-accent" />
              </div>
              <h4>Visit Us</h4>
              <p>Sankarankovil, Tamil Nadu, India</p>
            </a>
            
            <div className="contact-info-card">
              <div className="icon-circle">
                <FaClock className="contact-icon text-accent" />
              </div>
              <h4>Working Hours</h4>
              <p>Mon - Sat: 9.00 AM - 6.00 PM</p>
            </div>
          </div>
        </div>
      
      {/* Map Location */}
      <div id="map-location" style={{ marginTop: '1rem', marginBottom: '4rem', scrollMarginTop: '100px' }}>
        <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Find Us Here</h3>
        <iframe 
          title="Location Map"
          width="100%" 
          height="400" 
          style={{ border: 0, borderRadius: '8px', filter: 'invert(90%) hue-rotate(180deg)' }} 
          loading="lazy" 
          allowFullScreen 
          src="https://maps.google.com/maps?q=Sankarankovil,%20Tamil%20Nadu,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
      </div>
    </div>
  );
};

export default ContactPage;
