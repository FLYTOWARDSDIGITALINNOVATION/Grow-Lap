import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div style={{ paddingTop: '120px', minHeight: '60vh' }} className="container">
      <div className="section-header text-center">
        <p className="section-subtitle text-accent">GET IN TOUCH</p>
        <h2 className="section-title">Contact Us</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="grid-2" style={{ marginTop: '3rem' }}>
        <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '8px' }}>
          <h3>Send us a message</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
            <input type="text" placeholder="Your Name" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark)', color: 'white' }} />
            <input type="email" placeholder="Your Email" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark)', color: 'white' }} />
            <textarea placeholder="Message" rows="5" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark)', color: 'white' }}></textarea>
            <button type="button" className="btn-primary">Send Message</button>
          </form>
        </div>
        
        <div style={{ padding: '2rem' }}>
          <h3>Contact Information</h3>
          <p style={{ marginBottom: '2rem' }}>Reach out to us for any inquiries or to start a new project. Our team is ready to assist you.</p>
          <ul className="contact-info" style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <FaPhoneAlt className="contact-icon text-accent" />
              <span>+91 76958 83647</span>
            </li>
            <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <FaEnvelope className="contact-icon text-accent" />
              <span>info@flytowardsdigitalinnovation.com</span>
            </li>
            <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <FaMapMarkerAlt className="contact-icon text-accent" />
              <span>Sankarankovil, Tamil Nadu, India</span>
            </li>
            <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <FaClock className="contact-icon text-accent" />
              <span>Mon - Sat: 9.00 AM - 6.00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Map Location */}
      <div style={{ marginTop: '4rem', marginBottom: '2rem' }}>
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
  );
};

export default ContactPage;
