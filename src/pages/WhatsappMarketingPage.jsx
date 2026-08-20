import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaWhatsapp, FaCogs, FaBullhorn, FaUsers, FaShoppingCart, FaHeadset, FaRobot, FaBroadcastTower, FaMousePointer, FaBell, FaCalendarAlt, FaComments, FaChartBar, FaTasks, FaCheckCircle } from 'react-icons/fa';
import './WhatsappMarketingPage.css';

const WhatsappMarketingPage = () => {
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
    document.title = "WhatsApp Marketing Services | Business Messaging & Lead Generation";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Grow your business with professional WhatsApp Marketing services. We offer WhatsApp Business setup, API integration, bulk messaging, automation, chatbots, lead generation, and customer engagement solutions.";
  }, []);

  const whatsappServices = [
    { title: "WhatsApp Business Account Setup", icon: <FaWhatsapp /> },
    { title: "WhatsApp Business API Integration", icon: <FaCogs /> },
    { title: "Promotional Message Campaigns", icon: <FaBullhorn /> },
    { title: "Bulk WhatsApp Marketing", icon: <FaUsers /> },
    { title: "Product & Service Promotions", icon: <FaShoppingCart /> },
    { title: "Lead Generation Campaigns", icon: <FaUsers /> },
    { title: "Customer Support Automation", icon: <FaHeadset /> },
    { title: "WhatsApp Chatbot Integration", icon: <FaRobot /> },
    { title: "Broadcast Messaging", icon: <FaBroadcastTower /> },
    { title: "Click-to-WhatsApp Ads", icon: <FaMousePointer /> },
    { title: "Order & Booking Notifications", icon: <FaBell /> },
    { title: "Event & Offer Promotions", icon: <FaCalendarAlt /> },
    { title: "Customer Engagement Campaigns", icon: <FaComments /> },
    { title: "Campaign Analytics & Reporting", icon: <FaChartBar /> },
    { title: "WhatsApp Automation Workflows", icon: <FaTasks /> },
  ];

  const whyChooseUs = [
    "Personalized Customer Communication",
    "High Message Open Rates",
    "Instant Customer Engagement",
    "Faster Lead Generation",
    "Automated Messaging Solutions",
    "Secure & Reliable Communication",
    "Targeted Marketing Campaigns",
    "Improved Customer Retention",
    "Data-Driven Campaign Optimization",
    "Dedicated WhatsApp Marketing Experts"
  ];

  const whatsappProcess = [
    { step: 1, title: "Business Consultation", desc: "We understand your business goals, target audience, and communication requirements." },
    { step: 2, title: "WhatsApp Setup", desc: "We configure your WhatsApp Business account or integrate the WhatsApp Business API for advanced features and automation." },
    { step: 3, title: "Campaign Planning", desc: "Our team creates personalized marketing campaigns with engaging content, images, videos, and clear calls to action." },
    { step: 4, title: "Campaign Launch", desc: "We deliver targeted WhatsApp messages to your audience while following platform best practices and applicable messaging policies." },
    { step: 5, title: "Automation & Customer Engagement", desc: "We implement chatbots, automated replies, and follow-up workflows to improve customer interactions and response times." },
    { step: 6, title: "Performance Reporting", desc: "Receive detailed reports on message delivery, read rates, responses, clicks, conversions, and overall campaign performance." }
  ];

  const industries = [
    "E-commerce", "Healthcare", "Real Estate", "Education", "Restaurants & Cafés", "Travel & Tourism", "Fashion & Beauty", "Technology", "Finance", "Local Businesses", "Startups", "Corporate Organizations"
  ];

  const tools = [
    "WhatsApp Business", "WhatsApp Business API", "Meta Business Suite", "Google Analytics 4 (GA4)", "Google Tag Manager", "Canva Pro", "ChatGPT", "HubSpot", "Brevo", "Zapier"
  ];

  return (
    <div className="whatsapp-page-container">
      {/* Hero Section */}
      <section className="whatsapp-hero">
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="/services/digital-marketing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Digital Marketing
          </Link>
        </div>
        <div className="container whatsapp-hero-grid">
<div className="whatsapp-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>WHATSAPP MARKETING SERVICES</p>
            <h1 className="whatsapp-hero-title">Grow Your Business with&nbsp;Professional <br/><span>WhatsApp&nbsp;Marketing</span></h1>
            <p className="whatsapp-hero-desc">
              Connect with your customers instantly through our Professional WhatsApp Marketing Services. We help businesses build stronger customer relationships, generate high-quality leads, promote products and services, and increase sales using personalized WhatsApp campaigns.
            </p>
            <p className="whatsapp-hero-desc" style={{ marginBottom: '3rem' }}>
              With billions of active users worldwide, WhatsApp is one of the most effective communication platforms for engaging customers, sharing updates, and delivering real-time support. Our tailored WhatsApp marketing strategies help your business reach the right audience with higher open rates and faster customer responses.
            </p>
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
              Start Your WhatsApp Marketing Campaign
            </Link>
          </div>

          <div className="hero-image-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/1.webp" alt="WhatsApp Marketing Services" style={{ width: '100%', maxWidth: '450px', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} />
          </div>
        </div>
      </section>

      {/* Our WhatsApp Marketing Services */}
      <section className="whatsapp-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our WhatsApp Marketing Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="whatsapp-services-grid">
            {whatsappServices.map((service, idx) => (
              <div key={idx} className="whatsapp-service-card">
                <div className="whatsapp-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Benefits */}
      <section className="whatsapp-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
              <h3 style={{ color: 'var(--accent-orange)', marginBottom: '1.5rem', fontSize: '2rem' }}>The Power of WhatsApp</h3>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                WhatsApp Marketing helps businesses communicate directly with customers in a fast, personal, and effective way. It improves customer engagement, increases brand awareness, supports lead nurturing, promotes products and services, and drives more conversions through real-time conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our WhatsApp Marketing Process */}
      <section className="whatsapp-process-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our WhatsApp Marketing Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="whatsapp-process-timeline">
            {whatsappProcess.map((step, idx) => (
              <div key={idx} className="whatsapp-step-card">
                <div className="whatsapp-step-number">{step.step}</div>
                <div className="whatsapp-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Tools */}
      <section className="whatsapp-tools-section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Industries We Serve</h2>
              <div className="title-underline"></div>
              <div className="whatsapp-tools-grid">
                {industries.map((ind, idx) => (
                  <div key={idx} className="whatsapp-tool-tag">{ind}</div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Tools We Use</h2>
              <div className="title-underline"></div>
              <div className="whatsapp-tools-grid">
                {tools.map((tool, idx) => (
                  <div key={idx} className="whatsapp-tool-tag" style={{ backgroundColor: 'rgba(255, 94, 0, 0.1)', borderColor: 'rgba(255, 94, 0, 0.3)' }}>{tool}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="whatsapp-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="whatsapp-faqs">
            <details className="whatsapp-faq-item">
              <summary>What is WhatsApp Marketing?</summary>
              <p>WhatsApp Marketing is a digital marketing strategy that uses WhatsApp to promote products and services, engage customers, generate leads, and provide customer support through personalized messaging.</p>
            </details>
            <details className="whatsapp-faq-item">
              <summary>Is WhatsApp Marketing suitable for small businesses?</summary>
              <p>Yes. WhatsApp Marketing is an excellent solution for businesses of all sizes. It helps small businesses connect directly with customers, build trust, and increase sales.</p>
            </details>
            <details className="whatsapp-faq-item">
              <summary>Can you automate WhatsApp messages?</summary>
              <p>Yes. We can set up automated welcome messages, follow-ups, chatbots, order updates, and customer support workflows using the WhatsApp Business API.</p>
            </details>
            <details className="whatsapp-faq-item">
              <summary>Do you provide campaign performance reports?</summary>
              <p>Yes. We provide detailed reports that include message delivery, read rates, customer responses, clicks, conversions, and campaign performance insights.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="whatsapp-cta-section">
        <div className="container">
          <h2 className="whatsapp-cta-title">Ready to Grow with WhatsApp Marketing?</h2>
          <p className="whatsapp-cta-desc">
            Reach your customers where they communicate every day. Our professional WhatsApp Marketing services help you increase engagement, generate more leads, improve customer support, and drive business growth through personalized messaging and automation.
          </p>
          <Link to="/contact" className="whatsapp-cta-btn">
            Start Your WhatsApp Marketing Campaign <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default WhatsappMarketingPage;
