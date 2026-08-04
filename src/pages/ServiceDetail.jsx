import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { FaArrowLeft, FaCheck, FaArrowRight, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { categorySlug } = useParams();
  const service = servicesData.find(s => s.slug === categorySlug);
  const [activeFaq, setActiveFaq] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    // Add a unique timestamp to the subject to prevent email threading in Gmail
    const timestamp = new Date().toLocaleString();
    formData.append('_subject', `New Service Inquiry - ${timestamp}`);
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    fetch('https://formsubmit.co/ajax/udhayabanu2005@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Clear the form after success and show inline message instead of reloading
      form.reset();
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    })
    .catch(error => {
      console.error('Submission failed', error);
      alert('Failed to send message. Please try again later.');
    });
  };

  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  if (!service) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center', minHeight: '60vh', backgroundColor: 'var(--bg-dark)', color: '#fff' }}>
        <h2>Service not found</h2>
        <Link to="/services" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-container">
      
      {/* Modern Lead Gen Hero Section */}
      <section className="sd-hero">
        <div className="container sd-hero-grid">
          
          <div className="sd-hero-content">
            <Link to="/services" className="sd-breadcrumb">
              <FaArrowLeft /> Back to Services
            </Link>
            <h1 className="sd-hero-title">
              Elevate Your <span style={{ color: 'var(--accent-orange)' }}>{service.title}</span> Strategy
            </h1>
            <p className="sd-hero-desc">
              {service.description} We offer tailored solutions to simplify your processes, increase conversions, and streamline operations.
            </p>
            
            <div className="sd-hero-buttons">
              <Link to="/contact" className="btn-primary sd-btn" style={{ padding: '12px 24px' }}>
                <FaPaperPlane /> Contact Us
              </Link>
              <div className="sd-btn-or">OR</div>
              <a href="tel:+917695883647" className="btn-secondary sd-btn" style={{ padding: '12px 24px' }}>
                <FaPhoneAlt /> Call Now
              </a>
            </div>
          </div>
          
          <div className="sd-hero-form-wrapper">
            <div className="sd-quote-form interactive-form">
              <h3>Get Your Free Growth Strategy</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="sd-form-group">
                  <input type="text" name="Name" placeholder="Name*" required />
                </div>
                <div className="sd-form-group">
                  <input type="tel" name="Phone Number" placeholder="Phone No*" required />
                </div>
                <div className="sd-form-group">
                  <input type="email" name="Email" placeholder="Email*" required />
                </div>
                <div className="sd-form-group">
                  <textarea name="Message" placeholder="Type Your Message*" rows="3" required></textarea>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                  <button type="submit" className="btn-primary" style={{ padding: '16px 40px', borderRadius: '12px', fontSize: '1.2rem', fontWeight: 'bold' }}>
                    Submit
                  </button>
                </div>
                {isSubmitted && (
                  <div style={{ marginTop: '15px', padding: '10px', backgroundColor: 'rgba(40, 167, 69, 0.1)', color: '#28a745', border: '1px solid #28a745', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold' }}>
                    Request sent successfully! We'll contact you soon.
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </section>


      {/* Sub-Services Grid Section */}
      <section className="sd-subservices-section">
        <div className="container">
          <div className="sd-section-header">
            <h4 style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '10px' }}>Our Capabilities</h4>
            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', fontStyle: 'italic', fontWeight: '800' }}>Explore {service.title} Services</h2>
            <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Click on any of the specific services below to learn more about how we can help.</p>
          </div>
          
          <div className="sd-grid">
            {service.benefits.map((benefit, i) => (
              <Link to={`/services/${categorySlug}/${benefit.slug}`} key={i} className="sd-card">
                <div className="sd-card-image-box">
                  <img src={benefit.image} alt={benefit.title} loading="lazy" />
                </div>
                <div className="sd-card-content">
                  <h3 className="sd-card-title">{benefit.title}</h3>
                  <p className="sd-card-desc">{benefit.desc}</p>
                  <span className="sd-card-explore">Learn More &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Overview & FAQ Section */}
      <section className="sd-overview-section">
        <div className="container sd-overview-grid">
          
          {/* SEO Content Left */}
          <div className="sd-overview-left">
            <h2 className="sd-overview-title" style={{ lineHeight: '1.2' }}>
              Start Growing Today with a Results-Driven <br/><span style={{ color: 'var(--accent-orange)' }}>{service.title}</span> Service That Delivers ROI
            </h2>
            
            <p className="sd-overview-text" style={{ marginTop: '2rem' }}>
              Fly Towards Digital Innovation is your trusted partner that drives measurable ROI. {service.longDescription}
            </p>
            
            <p className="sd-overview-text" style={{ marginTop: '1.5rem' }}>
              Being a reliable digital marketing agency, we add value to businesses across various industries. Our top-tier {service.title.toLowerCase()} services align perfectly with each campaign that you undertake for maximum exposure, stronger brand positioning, and consistent lead generation. We provide you with a range of affordable packages according to your business size.
            </p>
            
            <p style={{ marginTop: '2.5rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
              Call us at <span style={{ color: 'var(--accent-orange)' }}>+91 76958 83647</span> and get a free SEO audit report!
            </p>
          </div>

          {/* FAQs Right */}
          <div className="sd-faq-right">
            <h2 className="sd-overview-title" style={{ fontStyle: 'italic', marginBottom: '2rem' }}>FAQs</h2>
            <div className="sd-faq-list">
              {service.faqs && service.faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`sd-faq-item ${activeFaq === index ? 'active' : ''}`}
                  onClick={() => setActiveFaq(index === activeFaq ? null : index)}
                >
                  <div className="sd-faq-header">
                    <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: '600' }}>{faq.question}</h4>
                    <div className="sd-faq-icon">{activeFaq === index ? '-' : '+'}</div>
                  </div>
                  {activeFaq === index && (
                    <div className="sd-faq-body">
                      <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.7' }}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Modern CTA */}
      <div className="container">
        <div className="sd-cta">
          <h2>Ready to elevate your brand?</h2>
          <p>
            Contact our team today to discuss how we can tailor our {service.title} services to achieve your specific business goals.
          </p>
          <Link to="/contact" className="sd-cta-btn">
            GET A FREE AUDIT <FaArrowRight />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default ServiceDetail;
