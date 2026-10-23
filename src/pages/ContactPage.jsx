import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheck, FaPaperPlane } from 'react-icons/fa';
import SEO from '../components/SEO';

const industryOptions = [
  "Real Estate",
  "Construction",
  "Manufacturing",
  "Automobile",
  "Education / Academies",
  "Retail",
  "Furniture Stores",
  "Jewelry Shops",
  "Other"
];

const serviceOptions = [
  "SEO",
  "Meta Ads (Facebook & Instagram)",
  "Google Ads",
  "Social Media Marketing",
  "Email Marketing",
  "Content Marketing",
  "Photography & Videography",
  "Video & Reels Editing",
  "Logo & Poster Design"
];

const ContactPage = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [serviceError, setServiceError] = useState(false);

  const toggleService = (service) => {
    setSelectedServices(prev => {
      const updated = prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service];
      if (updated.length > 0) {
        setServiceError(false);
      }
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      setServiceError(true);
      const servicesEl = document.getElementById('services-section-selector');
      if (servicesEl) {
        servicesEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

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
      setResult("Message sent successfully! Our team will contact you soon.");
      form.reset();
      setSelectedServices([]);
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 6000);
    })
    .catch(error => {
      console.error('Submission failed', error);
      setResult("Failed to send message. Please try again or reach us via WhatsApp.");
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 6000);
    });
  };

  return (
    <div className="contact-page-wrapper">
      <SEO 
        title="Contact Grow Lap | Let's Discuss Your Ideas"
        description="Contact Grow Lap to discuss your ideas and business needs. Our team is ready to help with digital marketing, professional shoots, and creative editing."
        keywords="Contact Grow Lap"
        canonical="https://www.growlap.com/contact"
        robots="index,follow"
        ogImageAlt="Grow Lap Contact Us-"
      />
      <div className="contact-bg-accents"></div>
      
      {/* Top Banner Section */}
      <div className="contact-hero-banner" style={{ paddingTop: '2.5rem', paddingBottom: '1.5rem', textAlign: 'center' }}>
        <div className="container">
          <p className="contact-hero-badge text-accent" style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '0.5rem' }}>CONTACT US</p>
          <h1 className="contact-hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#fff', marginBottom: '0.8rem', fontFamily: 'Outfit, sans-serif' }}>
            Get In Touch With <span className="text-gradient-orange">Grow Lap</span>
          </h1>
          <p className="contact-hero-subtitle" style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)', color: '#aaa', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
            Have questions or ready to launch your next digital marketing campaign? We are here to help you scale.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contact-layout">
          
          {/* Left Form Section */}
          <div className="contact-form-section">
            <p className="contact-subtitle text-accent" style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.4rem' }}>GET IN TOUCH</p>
            <h1 className="contact-title" style={{ textTransform: 'uppercase' }}>LET'S WORK <span className="contact-title-accent">TOGETHER</span></h1>
            <p className="contact-desc" style={{ fontSize: '1rem', color: '#ccc', marginBottom: '0.8rem', lineHeight: '1.5' }}>
              Ready to grow your business? Let's build your brand strategy together.
            </p>
            <div className="contact-title-line"></div>
            
            <form onSubmit={handleSubmit} className="contact-form-main">
              {/* Hidden fields for FormSubmit configuration */}
              <input type="hidden" name="_subject" value="New Business Enquiry - Grow Lap" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="Services Interested" value={selectedServices.join(', ')} />
              
              <div className="contact-form-grid">
                {/* 1. Full Name */}
                <div className="contact-field-group">
                  <label className="contact-field-label">
                    Full Name <span className="req-star">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="Full Name" 
                    className="contact-input" 
                    required 
                  />
                </div>

                {/* 2. Business Name */}
                <div className="contact-field-group">
                  <label className="contact-field-label">
                    Business Name <span className="req-star">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="Business Name" 
                    className="contact-input" 
                    required 
                  />
                </div>

                {/* 3. Email Address */}
                <div className="contact-field-group">
                  <label className="contact-field-label">
                    Email Address <span className="req-star">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="Email Address" 
                    className="contact-input" 
                    required 
                  />
                </div>

                {/* 4. Phone Number */}
                <div className="contact-field-group">
                  <label className="contact-field-label">
                    Phone Number <span className="req-star">*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="Phone Number" 
                    className="contact-input" 
                    required 
                  />
                </div>

                {/* 5. Industry Selection */}
                <div className="contact-field-group full-width">
                  <label className="contact-field-label">
                    Which industry does your business belong to? <span className="req-star">*</span>
                  </label>
                  <div className="contact-select-wrap">
                    <select 
                      name="Industry" 
                      className="contact-input contact-select" 
                      required 
                      defaultValue=""
                    >
                      <option value="" disabled>Select your industry</option>
                      {industryOptions.map((ind, idx) => (
                        <option key={idx} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 6. Services Selection (Chips) */}
                <div className="contact-field-group full-width" id="services-section-selector">
                  <div className="services-label-row">
                    <label className="contact-field-label">
                      Which services are you interested in? <span className="req-star">*</span>
                    </label>
                    <span className="services-hint-badge">Select all that apply</span>
                  </div>

                  <div className="services-chips-grid">
                    {serviceOptions.map((service, idx) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          type="button"
                          key={idx}
                          className={`service-chip ${isSelected ? 'active' : ''}`}
                          onClick={() => toggleService(service)}
                        >
                          <span className="chip-indicator">
                            {isSelected ? <FaCheck /> : '+'}
                          </span>
                          <span className="chip-text">{service}</span>
                        </button>
                      );
                    })}
                  </div>

                  {serviceError && (
                    <p className="service-error-text">
                      Please select at least one service you are interested in.
                    </p>
                  )}
                </div>

                {/* 7. Requirements */}
                <div className="contact-field-group full-width">
                  <label className="contact-field-label">
                    Tell Us About Your Requirements
                  </label>
                  <textarea 
                    name="Requirements" 
                    className="contact-textarea"
                  ></textarea>
                </div>
              </div>
              
              <div className="contact-checkbox-group">
                <input type="checkbox" id="terms" name="Agreed_To_Terms" value="Yes" required />
                <label htmlFor="terms">
                  I agree to the <Link to="/privacy">Privacy Policy</Link> and <Link to="/terms">Terms &amp; Conditions</Link>
                </label>
              </div>
              
              <button type="submit" className="btn-contact-submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit"}
              </button>

              {result && (
                <p className={`contact-result-msg ${result.includes('successfully') ? 'success' : 'error'}`}>
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
            <a href="tel:+916383246378" className="contact-info-card" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="icon-circle">
                <FaPhoneAlt className="contact-icon text-accent" />
              </div>
              <h4>Call Us</h4>
              <p>+91 63832 46378</p>
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
