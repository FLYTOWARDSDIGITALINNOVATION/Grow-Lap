import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { FaArrowLeft, FaPaperPlane, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';
import './SubServiceDetail.css';

const SubServiceDetail = () => {
  const { categorySlug, subServiceSlug } = useParams();
  
  const parentService = servicesData.find(s => s.slug === categorySlug);
  const subService = parentService?.benefits.find(b => b.slug === subServiceSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug, subServiceSlug]);

  if (!parentService || !subService) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center', minHeight: '60vh', backgroundColor: 'var(--bg-dark)', color: '#fff' }}>
        <h2>Service not found</h2>
        <Link to="/services" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="subservice-page-container">
      {/* Hero Section */}
      <section className="ssd-hero" style={{ backgroundImage: `linear-gradient(to right, rgba(8, 8, 10, 0.95), rgba(8, 8, 10, 0.7)), url(${subService.image})` }}>
        <div className="container">
          <Link to={`/services/${categorySlug}`} className="ssd-breadcrumb">
            <FaArrowLeft /> Back to {parentService.title}
          </Link>
          <h1 className="ssd-hero-title">
            Professional <span style={{ color: 'var(--accent-orange)' }}>{subService.title}</span> Services
          </h1>
          <p className="ssd-hero-desc">
            {subService.desc} Elevate your business with our tailored solutions designed for maximum impact and ROI.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="ssd-content-section">
        <div className="container ssd-grid-layout">
          
          <div className="ssd-left-content">
            <h2>Why Choose Our {subService.title} Services?</h2>
            <p>
              In today's competitive landscape, having a strategic approach to <strong>{subService.title.toLowerCase()}</strong> is crucial. We don't just execute tasks; we build comprehensive strategies that align with your broader business goals.
            </p>
            <p>
              Our team of experts utilizes the latest tools and industry best practices to ensure that your investment yields the highest possible returns. Whether you're looking to increase brand awareness, generate high-quality leads, or boost sales, our solutions are customized to meet your specific needs.
            </p>

            {subService.video && (
              <div className="ssd-video-wrapper" style={{ marginTop: '2rem', marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                <video 
                  src={subService.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  style={{ width: '100%', display: 'block' }}
                />
              </div>
            )}
            
            <div className="ssd-features">
              <div className="ssd-feature-item">
                <FaCheckCircle className="ssd-feature-icon" />
                <div>
                  <h4>Tailored Strategy</h4>
                  <p>Customized approaches that fit your unique business model.</p>
                </div>
              </div>
              <div className="ssd-feature-item">
                <FaCheckCircle className="ssd-feature-icon" />
                <div>
                  <h4>Expert Execution</h4>
                  <p>Delivered by a team of seasoned professionals.</p>
                </div>
              </div>
              <div className="ssd-feature-item">
                <FaCheckCircle className="ssd-feature-icon" />
                <div>
                  <h4>Data-Driven Results</h4>
                  <p>Continuous optimization based on real-time analytics.</p>
                </div>
              </div>
            </div>

            {/* Added Content: Process Section */}
            <div className="ssd-process-section" style={{ marginTop: '4rem' }}>
              <h2>Our Proven Process</h2>
              <p>We believe in a transparent, step-by-step approach to guarantee the success of your {subService.title} campaigns.</p>
              
              <div className="ssd-process-steps">
                <div className="ssd-process-step">
                  <div className="ssd-step-number">01</div>
                  <div className="ssd-step-content">
                    <h4>Discovery & Analysis</h4>
                    <p>We start by deeply understanding your brand, target audience, and current market position to identify the best opportunities.</p>
                  </div>
                </div>
                
                <div className="ssd-process-step">
                  <div className="ssd-step-number">02</div>
                  <div className="ssd-step-content">
                    <h4>Strategy Development</h4>
                    <p>Our experts craft a customized, data-backed strategy specifically designed to achieve your desired outcomes and maximize ROI.</p>
                  </div>
                </div>
                
                <div className="ssd-process-step">
                  <div className="ssd-step-number">03</div>
                  <div className="ssd-step-content">
                    <h4>Execution & Implementation</h4>
                    <p>We deploy the strategy using industry-leading tools, ensuring every detail is executed flawlessly for maximum impact.</p>
                  </div>
                </div>
                
                <div className="ssd-process-step">
                  <div className="ssd-step-number">04</div>
                  <div className="ssd-step-content">
                    <h4>Monitoring & Optimization</h4>
                    <p>We continuously monitor performance metrics and A/B test variations to refine the campaign and scale your results.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Added Content: Metrics Banner */}
            <div className="ssd-metrics-banner" style={{ marginTop: '4rem', display: 'flex', gap: '2rem', backgroundColor: 'rgba(255, 94, 0, 0.1)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255, 94, 0, 0.2)' }}>
              <div className="ssd-metric">
                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>98%</h3>
                <p style={{ margin: 0, fontWeight: '600', color: '#fff' }}>Client Satisfaction</p>
              </div>
              <div className="ssd-metric">
                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>3X</h3>
                <p style={{ margin: 0, fontWeight: '600', color: '#fff' }}>Average ROI Increase</p>
              </div>
              <div className="ssd-metric">
                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>24/7</h3>
                <p style={{ margin: 0, fontWeight: '600', color: '#fff' }}>Performance Monitoring</p>
              </div>
            </div>
            
            {/* Added Content: FAQs Section */}
            <div className="ssd-faq-section" style={{ marginTop: '5rem' }}>
              <h2>Frequently Asked Questions</h2>
              <p style={{ marginBottom: '2rem' }}>Got questions about our {subService.title} services? We have answers.</p>
              
              <div className="ssd-faqs">
                <details className="ssd-faq-item-collapsible">
                  <summary>How long does it take to see results?</summary>
                  <p>Results depend on various factors including your industry, budget, and current baseline. However, our targeted strategies are designed to show measurable improvements within the first 30 to 60 days of campaign launch.</p>
                </details>
                <details className="ssd-faq-item-collapsible">
                  <summary>Do you offer customized packages?</summary>
                  <p>Absolutely. We understand that no two businesses are alike. We offer fully bespoke solutions tailored specifically to your unique goals and budget constraints.</p>
                </details>
                <details className="ssd-faq-item-collapsible">
                  <summary>How do you measure success and ROI?</summary>
                  <p>We use advanced analytics and tracking tools to monitor every campaign. You will receive detailed monthly reports showing exact metrics, including lead volume, conversion rates, and overall ROI.</p>
                </details>
                <details className="ssd-faq-item-collapsible">
                  <summary>Can I scale my services up or down?</summary>
                  <p>Yes, our flexible approach allows you to scale your investment based on performance and seasonal business needs. We are here to support your growth at every stage.</p>
                </details>
              </div>
            </div>
          </div>

          {/* Lead Generation Form */}
          <div className="ssd-right-sidebar">
            <div className="ssd-lead-form">
              <h3>Get Started Today</h3>
              <p>Fill out the form below and our team will get back to you with a custom proposal.</p>
              
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="ssd-form-group">
                  <input type="text" placeholder="Full Name*" required />
                </div>
                <div className="ssd-form-group">
                  <input type="email" placeholder="Email Address*" required />
                </div>
                <div className="ssd-form-group">
                  <input type="tel" placeholder="Phone Number*" required />
                </div>
                <div className="ssd-form-group">
                  <textarea placeholder="Tell us about your project requirements*" rows="4" required></textarea>
                </div>
                <button type="submit" className="ssd-submit-btn">
                  <FaPaperPlane /> Request a Free Consultation
                </button>
              </form>
              
              <div className="ssd-or-call">
                <p>Or speak directly to an expert:</p>
                <a href="tel:+917695883647" className="ssd-call-btn">
                  <FaPhoneAlt /> +91 76958 83647
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Added Content: Bottom CTA Section */}
      <section className="ssd-bottom-cta" style={{ backgroundColor: '#0c0c0e', padding: '6rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '1.5rem', fontWeight: '800' }}>Ready to dominate your market?</h2>
          <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '700px', margin: '0 auto 3rem auto', lineHeight: '1.6' }}>
            Stop leaving money on the table. Partner with us today to leverage our expertise in {subService.title} and watch your business scale to new heights.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem', borderRadius: '50px' }}>Start Your Journey</button>
            <a href="tel:+917695883647" className="btn-secondary" style={{ padding: '16px 32px', fontSize: '1.1rem', borderRadius: '50px' }}>Call Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubServiceDetail;
