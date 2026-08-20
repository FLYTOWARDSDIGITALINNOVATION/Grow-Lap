import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaEnvelopeOpenText, FaBullhorn, FaRegHandshake, FaRoute, FaShoppingCart, FaRocket, FaCalendarAlt, FaHeart, FaPenNib, FaUsers, FaVial, FaChartBar, FaFileAlt, FaCogs, FaCheckCircle } from 'react-icons/fa';
import './EmailMarketingPage.css';

const EmailMarketingPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-show');
        }
      });
    }, { threshold: 0.1 });
    
    const faqItems = document.querySelectorAll('details[class*="-faq-item"]');
    faqItems.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Email Marketing Services | Professional Email Campaign Management";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Grow your business with professional Email Marketing services. We create personalized email campaigns, newsletters, automation workflows, lead nurturing, and promotional emails to increase engagement, conversions, and customer loyalty.";
  }, []);

  const emailServices = [
    { title: "Email Marketing Strategy", icon: <FaRoute /> },
    { title: "Newsletter Design & Management", icon: <FaFileAlt /> },
    { title: "Promotional Email Campaigns", icon: <FaBullhorn /> },
    { title: "Welcome Email Series", icon: <FaRegHandshake /> },
    { title: "Lead Nurturing Campaigns", icon: <FaUsers /> },
    { title: "Automated Email Workflows", icon: <FaCogs /> },
    { title: "Abandoned Cart Recovery Emails", icon: <FaShoppingCart /> },
    { title: "Product Launch Campaigns", icon: <FaRocket /> },
    { title: "Event & Webinar Email Campaigns", icon: <FaCalendarAlt /> },
    { title: "Customer Retention Emails", icon: <FaHeart /> },
    { title: "Email Copywriting & Design", icon: <FaPenNib /> },
    { title: "Audience Segmentation", icon: <FaUsers /> },
    { title: "A/B Testing & Optimization", icon: <FaVial /> },
    { title: "Email Performance Analytics", icon: <FaChartBar /> },
    { title: "Monthly Campaign Reporting", icon: <FaFileAlt /> },
  ];

  const whyChooseUs = [
    "Customized Email Marketing Strategies",
    "Mobile-Friendly Email Designs",
    "Personalized Customer Communication",
    "High Open & Click-Through Rates",
    "Marketing Automation Expertise",
    "Audience Segmentation & Targeting",
    "Data-Driven Campaign Optimization",
    "Improved Customer Retention",
    "Transparent Performance Reporting",
    "Dedicated Email Marketing Specialists"
  ];

  const emailProcess = [
    { step: 1, title: "Business & Audience Analysis", desc: "We understand your business goals, target audience, and customer journey to create an effective email marketing strategy." },
    { step: 2, title: "List Segmentation", desc: "We organize your email subscribers into targeted groups based on demographics, interests, and customer behavior for personalized communication." },
    { step: 3, title: "Email Design & Content Creation", desc: "Our team creates visually appealing email templates with engaging copy, compelling calls-to-action, and responsive designs." },
    { step: 4, title: "Campaign Launch", desc: "We schedule and send email campaigns at the optimal time to maximize engagement and conversions." },
    { step: 5, title: "Testing & Optimization", desc: "We conduct A/B testing on subject lines, content, and CTAs to improve open rates, click-through rates, and campaign performance." },
    { step: 6, title: "Reporting & Performance Analysis", desc: "Receive detailed reports on email opens, clicks, conversions, unsubscribe rates, and overall campaign performance." }
  ];

  const industries = [
    "E-commerce", "Healthcare", "Education", "Real Estate", "Restaurants & Cafés", "Travel & Tourism", "Fashion & Beauty", "Technology", "Finance", "Local Businesses", "Startups", "Corporate Organizations"
  ];

  const tools = [
    "Mailchimp", "Brevo (Sendinblue)", "HubSpot", "Klaviyo", "MailerLite", "Constant Contact", "ActiveCampaign", "ConvertKit", "Google Analytics 4 (GA4)", "Looker Studio", "Canva Pro", "ChatGPT"
  ];

  return (
    <div className="email-page-container">
      {/* Hero Section */}
      <section className="email-hero">
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="/services/digital-marketing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Digital Marketing
          </Link>
        </div>
        <div className="container email-hero-grid">
<div className="email-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>EMAIL MARKETING SERVICES</p>
            <h1 className="email-hero-title">Drive Engagement and Increase Sales&nbsp;with <br/><span>Professional Email Marketing</span></h1>
            <p className="email-hero-desc">
              Build stronger customer relationships and grow your business with our Professional Email Marketing Services. We create personalized, data-driven email campaigns that engage your audience, nurture leads, increase conversions, and encourage repeat business.
            </p>
            <p className="email-hero-desc" style={{ marginBottom: '3rem' }}>
              Whether you're promoting products, launching a new service, or keeping customers informed, our email marketing strategies help you deliver the right message to the right audience at the right time.
            </p>
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
              Start Your Email Marketing Campaign
            </Link>
          </div>

          <div className="hero-image-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/email marketing serives.webp" alt="Email Marketing Services" style={{ width: '100%', maxWidth: '450px', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} />
          </div>
        </div>
      </section>

      {/* Our Email Marketing Services */}
      <section className="email-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Email Marketing Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="email-services-grid">
            {emailServices.map((service, idx) => (
              <div key={idx} className="email-service-card">
                <div className="email-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Benefits */}
      <section className="email-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Why Choose Our Services?</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {whyChooseUs.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: '#ccc', fontSize: '1.1rem' }}>
                    <FaCheckCircle style={{ color: 'var(--accent-orange)' }} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ backgroundColor: '#121215', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <h3 style={{ color: 'var(--accent-orange)', marginBottom: '1.5rem', fontSize: '2rem' }}>The Power of Email Marketing</h3>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Email marketing is one of the most cost-effective digital marketing channels. It helps businesses build customer loyalty, increase website traffic, and generate qualified leads.
              </p>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8' }}>
                With targeted communication, you can recover abandoned carts, promote products and services, and improve return on investment (ROI) through personalized communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Email Marketing Process */}
      <section className="email-process-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Email Marketing Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="email-process-timeline">
            {emailProcess.map((step, idx) => (
              <div key={idx} className="email-step-card">
                <div className="email-step-number">{step.step}</div>
                <div className="email-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Tools */}
      <section className="email-tools-section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Industries We Serve</h2>
              <div className="title-underline"></div>
              <div className="email-tools-grid">
                {industries.map((ind, idx) => (
                  <div key={idx} className="email-tool-tag">{ind}</div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Tools We Use</h2>
              <div className="title-underline"></div>
              <div className="email-tools-grid">
                {tools.map((tool, idx) => (
                  <div key={idx} className="email-tool-tag" style={{ backgroundColor: 'rgba(255, 94, 0, 0.1)', borderColor: 'rgba(255, 94, 0, 0.3)' }}>{tool}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="email-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="email-faqs">
            <details className="email-faq-item">
              <summary>What is Email Marketing?</summary>
              <p>Email marketing is a digital marketing strategy that uses targeted email campaigns to promote products, share updates, nurture leads, and strengthen customer relationships.</p>
            </details>
            <details className="email-faq-item">
              <summary>Can email marketing help increase sales?</summary>
              <p>Yes. Personalized email campaigns can drive more website traffic, improve customer engagement, recover abandoned carts, and increase sales and repeat purchases.</p>
            </details>
            <details className="email-faq-item">
              <summary>How often should I send marketing emails?</summary>
              <p>The ideal frequency depends on your business and audience. We create a schedule that keeps your subscribers engaged without overwhelming them.</p>
            </details>
            <details className="email-faq-item">
              <summary>Do you provide campaign performance reports?</summary>
              <p>Yes. We provide detailed reports with metrics such as open rates, click-through rates, conversions, and subscriber engagement to measure campaign success.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="email-cta-section">
        <div className="container">
          <h2 className="email-cta-title">Ready to Grow with Email Marketing?</h2>
          <p className="email-cta-desc">
            Turn subscribers into loyal customers with our professional Email Marketing services. From strategy and content creation to automation and performance tracking, we help your business deliver impactful email campaigns that drive measurable results.
          </p>
          <Link to="/contact" className="email-cta-btn">
            Start Your Email Marketing Campaign <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default EmailMarketingPage;
