import React from 'react';
import './ContactPage.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch('https://formsubmit.co/ajax/udhayabanu2005@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Refresh the page upon success as requested
      window.location.reload();
    })
    .catch(error => {
      console.error('Submission failed', error);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-bg-accents"></div>
      
      <div className="container">
        <div className="contact-layout">
          
          {/* Left Form Section */}
          <div className="contact-form-section">
            <h1 className="contact-title" style={{ textTransform: 'uppercase' }}>LET'S WORK <span className="contact-title-accent">TOGETHER</span></h1>
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
              
              <button type="submit" className="btn-contact-submit">Submit</button>
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
            <div className="contact-info-card">
              <div className="icon-circle">
                <FaPhoneAlt className="contact-icon text-accent" />
              </div>
              <h4>Call Us</h4>
              <p>+91 76958 83647</p>
            </div>
            
            <div className="contact-info-card">
              <div className="icon-circle">
                <FaEnvelope className="contact-icon text-accent" />
              </div>
              <h4>Email Us</h4>
              <p>info@flytowardsdigitalinnovation.com</p>
            </div>
            
            <div className="contact-info-card">
              <div className="icon-circle">
                <FaMapMarkerAlt className="contact-icon text-accent" />
              </div>
              <h4>Visit Us</h4>
              <p>Sankarankovil, Tamil Nadu, India</p>
            </div>
            
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
      <div style={{ marginTop: '1rem', marginBottom: '4rem' }}>
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
