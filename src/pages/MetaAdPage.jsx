import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChartLine, FaCogs, FaUsers, FaMousePointer, FaShoppingCart, FaVideo, FaImages, FaSearchDollar, FaPenNib, FaVial, FaCode, FaChartBar, FaCheckCircle, FaBullhorn, FaGlobe } from 'react-icons/fa';
import './MetaAdPage.css';

const MetaAdPage = () => {
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
    document.title = "Meta Ads Services | Facebook & Instagram Advertising for Business Growth";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Grow your business with professional Meta Ads services. We create high-converting Facebook and Instagram ad campaigns for lead generation, sales, website traffic, and brand awareness.";
  }, []);

  const metaServices = [
    { title: "Facebook Ads Campaign Management", icon: <FaBullhorn /> },
    { title: "Instagram Ads Campaign Management", icon: <FaImages /> },
    { title: "Lead Generation Campaigns", icon: <FaUsers /> },
    { title: "Website Traffic Campaigns", icon: <FaGlobe /> },
    { title: "Sales & Conversion Campaigns", icon: <FaShoppingCart /> },
    { title: "Brand Awareness Campaigns", icon: <FaBullhorn /> },
    { title: "Remarketing & Retargeting Ads", icon: <FaMousePointer /> },
    { title: "E-commerce Product Ads", icon: <FaShoppingCart /> },
    { title: "Video Advertising Campaigns", icon: <FaVideo /> },
    { title: "Carousel & Collection Ads", icon: <FaImages /> },
    { title: "Audience Research & Targeting", icon: <FaSearchDollar /> },
    { title: "Ad Copy & Creative Design", icon: <FaPenNib /> },
    { title: "A/B Testing & Optimization", icon: <FaVial /> },
    { title: "Pixel Setup & Conversion Tracking", icon: <FaCode /> },
    { title: "Monthly Performance Reporting", icon: <FaChartBar /> },
  ];

  const whyChooseUs = [
    "Certified Digital Marketing Experts",
    "Customized Advertising Strategies",
    "Advanced Audience Targeting",
    "High-Converting Ad Creatives",
    "Budget-Friendly Campaign Management",
    "Continuous Campaign Optimization",
    "Detailed Performance Analytics",
    "Increased Lead Generation",
    "Higher Conversion Rates",
    "Transparent Reporting & Support"
  ];

  const metaProcess = [
    { step: 1, title: "Business Analysis", desc: "We understand your business objectives, target audience, and competitors to create an effective advertising strategy." },
    { step: 2, title: "Audience Research", desc: "We identify the ideal audience based on demographics, interests, behaviors, and purchasing intent." },
    { step: 3, title: "Campaign Setup", desc: "We build optimized Facebook and Instagram ad campaigns with compelling visuals, persuasive ad copy, and clear calls to action." },
    { step: 4, title: "Tracking & Pixel Integration", desc: "We configure Meta Pixel and conversion tracking to measure campaign performance and user actions accurately." },
    { step: 5, title: "Campaign Optimization", desc: "We continuously monitor, test, and optimize campaigns to improve click-through rates, reduce costs, and increase conversions." },
    { step: 6, title: "Performance Reporting", desc: "Receive detailed reports with insights into impressions, clicks, conversions, return on ad spend (ROAS), and campaign performance." }
  ];

  const industries = [
    "E-commerce", "Healthcare", "Real Estate", "Education", "Restaurants & Cafés", "Fashion & Beauty", "Technology", "Finance", "Travel & Tourism", "Fitness & Wellness", "Local Businesses", "Startups & Enterprises"
  ];

  const tools = [
    "Meta Ads Manager", "Meta Business Suite", "Meta Pixel", "Google Analytics 4 (GA4)", "Google Tag Manager", "Canva Pro", "Adobe Photoshop", "Adobe Premiere Pro", "ChatGPT", "Looker Studio"
  ];

  return (
    <div className="meta-page-container">
      {/* Hero Section */}
      <section className="meta-hero">
        
        <div className="container">
          <Link to="/services/digital-marketing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Digital Marketing
          </Link>
        </div>
        <div className="container meta-hero-grid">
<div className="meta-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>META ADS SERVICES</p>
            <h1 className="meta-hero-title">Grow Your Business&nbsp;with <br/><span>High-Performance Meta Ads</span></h1>
            <p className="meta-hero-desc">
              Reach the right audience and maximize your return on investment with our Professional Meta Ads Services. We create data-driven advertising campaigns on Facebook and Instagram that help businesses increase brand awareness, generate quality leads, drive website traffic, and boost online sales.
            </p>
            <p className="meta-hero-desc" style={{ marginBottom: '3rem' }}>
              Our team develops customized Meta advertising strategies tailored to your business goals, ensuring every campaign delivers measurable results and sustainable growth.
            </p>
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
              Start Your Meta Ads Campaign Today
            </Link>
          </div>

          <div className="hero-image-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/meta-logo.svg" alt="Meta Ads Services" style={{ width: '100%', maxWidth: '450px', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* Our Meta Ads Services */}
      <section className="meta-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Meta Ads Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="meta-services-grid">
            {metaServices.map((service, idx) => (
              <div key={idx} className="meta-service-card">
                <div className="meta-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Benefits */}
      <section className="meta-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Why Choose Our Meta Ads Services?</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {whyChooseUs.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: '#ccc', fontSize: '1.1rem' }}>
                    <FaCheckCircle style={{ color: 'var(--accent-orange)' }} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="meta-power-card">
              <h3>The Power of Meta Ads</h3>
              <p>
                Meta Ads allow businesses to connect with highly targeted audiences across Facebook and Instagram. With advanced targeting options, remarketing capabilities, and real-time optimization, Meta advertising helps increase brand visibility, generate qualified leads, improve customer engagement, and drive measurable business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Meta Ads Process */}
      <section className="meta-process-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Meta Ads Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="meta-process-timeline">
            {metaProcess.map((step, idx) => (
              <div key={idx} className="meta-step-card">
                <div className="meta-step-number">{step.step}</div>
                <div className="meta-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Tools */}
      <section className="meta-tools-section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Industries We Serve</h2>
              <div className="title-underline"></div>
              <div className="meta-tools-grid">
                {industries.map((ind, idx) => (
                  <div key={idx} className="meta-tool-tag">{ind}</div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Meta Ads Tools We Use</h2>
              <div className="title-underline"></div>
              <div className="meta-tools-grid">
                {tools.map((tool, idx) => (
                  <div key={idx} className="meta-tool-tag" style={{ backgroundColor: 'rgba(255, 94, 0, 0.1)', borderColor: 'rgba(255, 94, 0, 0.3)' }}>{tool}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="meta-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="meta-faqs">
            <details className="meta-faq-item">
              <summary>What are Meta Ads?</summary>
              <p>Meta Ads are paid advertising campaigns that run across Facebook, Instagram, Messenger, and the Meta Audience Network to help businesses reach their ideal customers.</p>
            </details>
            <details className="meta-faq-item">
              <summary>How much should I spend on Meta Ads?</summary>
              <p>Your advertising budget depends on your business goals, industry, and competition. We create campaigns that maximize results within your available budget.</p>
            </details>
            <details className="meta-faq-item">
              <summary>Can Meta Ads generate leads and sales?</summary>
              <p>Yes. With the right audience targeting, creative assets, and campaign optimization, Meta Ads can significantly increase leads, website traffic, and online sales.</p>
            </details>
            <details className="meta-faq-item">
              <summary>Do you provide monthly reports?</summary>
              <p>Yes. We provide detailed reports covering campaign performance, conversions, audience insights, and recommendations for continuous improvement.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="meta-cta-section">
        <div className="container">
          <h2 className="meta-cta-title">Ready to Grow with Meta Ads?</h2>
          <p className="meta-cta-desc">
            Turn your advertising budget into measurable business results with our professional Meta Ads services. From strategy and creative design to campaign management and optimization, we help your business reach the right audience and achieve higher conversions.
          </p>
          <Link to="/contact" className="meta-cta-btn">
            Start Your Meta Ads Campaign Today <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default MetaAdPage;
