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
                <input type="email" name="Email" className="contact-input" placeholder="E-mail" required />
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
        <div style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center' }}>
          <div className="direct-contact-card">
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-orange)', fontSize: '2.2rem' }}>Direct Contact</h3>
            <p style={{ marginBottom: '2.5rem', color: '#aaa', lineHeight: 1.6, fontSize: '1.1rem' }}>Reach out to us directly for immediate assistance or to start a new project. Our team is ready to assist you.</p>
            <ul className="contact-info" style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
              <li style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', fontSize: '1.15rem', justifyContent: 'center' }}>
                <FaPhoneAlt className="contact-icon text-accent" style={{ fontSize: '1.4rem' }} />
                <span>+91 76958 83647</span>
              </li>
              <li style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', fontSize: '1.15rem', justifyContent: 'center' }}>
                <FaEnvelope className="contact-icon text-accent" style={{ fontSize: '1.4rem' }} />
                <span>info@flytowardsdigitalinnovation.com</span>
              </li>
              <li style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', fontSize: '1.15rem', justifyContent: 'center' }}>
                <FaMapMarkerAlt className="contact-icon text-accent" style={{ fontSize: '1.4rem' }} />
                <span>Sankarankovil, Tamil Nadu, India</span>
              </li>
              <li style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', fontSize: '1.15rem', justifyContent: 'center' }}>
                <FaClock className="contact-icon text-accent" style={{ fontSize: '1.4rem' }} />
                <span>Mon - Sat: 9.00 AM - 6.00 PM</span>
              </li>
            </ul>
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
