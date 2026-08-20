import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLinkedin, FaIdCard, FaPenNib, FaSearch, FaUserTie, FaBullhorn, FaMousePointer, FaEnvelopeOpenText, FaCrosshairs, FaVideo, FaUsers, FaLightbulb, FaChartBar, FaChartLine, FaCheckCircle } from 'react-icons/fa';
import './LinkedinMarketingPage.css';

const LinkedinMarketingPage = () => {
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
    document.title = "LinkedIn Marketing Services | B2B Lead Generation & LinkedIn Ads";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Grow your business with professional LinkedIn Marketing services. We provide LinkedIn profile optimization, B2B lead generation, content marketing, LinkedIn Ads management, and business page management to increase visibility and drive business growth.";
  }, []);

  const linkedinServices = [
    { title: "LinkedIn Business Page Management", icon: <FaLinkedin /> },
    { title: "Personal Branding on LinkedIn", icon: <FaIdCard /> },
    { title: "LinkedIn Content Creation", icon: <FaPenNib /> },
    { title: "LinkedIn Profile Optimization", icon: <FaSearch /> },
    { title: "B2B Lead Generation", icon: <FaUserTie /> },
    { title: "LinkedIn Ads Campaign Management", icon: <FaBullhorn /> },
    { title: "Sponsored Content Campaigns", icon: <FaMousePointer /> },
    { title: "InMail Advertising", icon: <FaEnvelopeOpenText /> },
    { title: "Audience Targeting & Research", icon: <FaCrosshairs /> },
    { title: "LinkedIn Video Marketing", icon: <FaVideo /> },
    { title: "Employee Advocacy Programs", icon: <FaUsers /> },
    { title: "Thought Leadership Content", icon: <FaLightbulb /> },
    { title: "Performance Analytics & Reporting", icon: <FaChartBar /> },
    { title: "LinkedIn Growth Strategy", icon: <FaChartLine /> },
  ];

  const whyChooseUs = [
    "Experienced LinkedIn Marketing Experts",
    "Customized B2B Marketing Strategies",
    "Professional Content Creation",
    "Advanced Audience Targeting",
    "High-Quality Lead Generation",
    "Increased Brand Awareness",
    "Strong Professional Networking",
    "Data-Driven Campaign Optimization",
    "Transparent Performance Reporting",
    "Dedicated Marketing Support"
  ];

  const linkedinProcess = [
    { step: 1, title: "Business & Audience Analysis", desc: "We understand your business objectives, target audience, and industry to create a tailored LinkedIn marketing strategy." },
    { step: 2, title: "Profile & Page Optimization", desc: "We optimize your LinkedIn profile and company page with professional branding, compelling descriptions, and SEO-friendly content." },
    { step: 3, title: "Content Strategy", desc: "Our team develops engaging posts, articles, videos, and thought leadership content to increase visibility and audience engagement." },
    { step: 4, title: "Campaign Management", desc: "We create and manage LinkedIn advertising campaigns, including Sponsored Content, Message Ads, and Lead Generation Forms." },
    { step: 5, title: "Lead Generation & Engagement", desc: "We connect your business with decision-makers through targeted outreach, meaningful engagement, and strategic networking." },
    { step: 6, title: "Reporting & Optimization", desc: "Receive detailed performance reports with insights into profile growth, engagement, leads, conversions, and campaign success." }
  ];

  const industries = [
    "B2B Companies", "Technology & SaaS", "Manufacturing", "Finance", "Healthcare", "Education", "Consulting", "Real Estate", "Recruitment & HR", "Startups", "Corporate Organizations", "Professional Service Providers"
  ];

  const tools = [
    "LinkedIn Campaign Manager", "LinkedIn Sales Navigator", "LinkedIn Analytics", "Canva Pro", "Adobe Photoshop", "Adobe Premiere Pro", "Google Analytics 4 (GA4)", "Google Tag Manager", "HubSpot CRM", "Buffer", "Hootsuite", "ChatGPT"
  ];

  return (
    <div className="linkedin-page-container">
      {/* Hero Section */}
      <section className="linkedin-hero">
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="/services/digital-marketing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Digital Marketing
          </Link>
        </div>
        <div className="container linkedin-hero-grid">
<div className="linkedin-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>LINKEDIN MARKETING SERVICES</p>
            <h1 className="linkedin-hero-title">Grow Your Business with&nbsp;Professional <br/><span>LinkedIn Marketing</span></h1>
            <p className="linkedin-hero-desc">
              Build a strong professional presence and connect with decision-makers through our LinkedIn Marketing Services. We help businesses, startups, and professionals increase brand visibility, generate high-quality B2B leads, and establish industry authority with strategic LinkedIn marketing.
            </p>
            <p className="linkedin-hero-desc" style={{ marginBottom: '3rem' }}>
              Whether you're looking to promote your business, attract potential clients, recruit top talent, or strengthen your professional network, our customized LinkedIn marketing solutions deliver measurable results.
            </p>
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
              Grow Your Business on LinkedIn
            </Link>
          </div>

          <div className="hero-image-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/3.webp" alt="LinkedIn Marketing Services" style={{ width: '100%', maxWidth: '450px', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} />
          </div>
        </div>
      </section>

      {/* Our LinkedIn Marketing Services */}
      <section className="linkedin-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our LinkedIn Marketing Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="linkedin-services-grid">
            {linkedinServices.map((service, idx) => (
              <div key={idx} className="linkedin-service-card">
                <div className="linkedin-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Benefits */}
      <section className="linkedin-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
              <h3 style={{ color: 'var(--accent-orange)', marginBottom: '1.5rem', fontSize: '2rem' }}>The Power of LinkedIn Marketing</h3>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                LinkedIn Marketing helps businesses build credibility, reach professionals, generate qualified B2B leads, and strengthen brand authority.
              </p>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8' }}>
                By sharing valuable content and running targeted campaigns, your business can create meaningful connections, improve customer trust, and drive sustainable business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our LinkedIn Marketing Process */}
      <section className="linkedin-process-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our LinkedIn Marketing Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="linkedin-process-timeline">
            {linkedinProcess.map((step, idx) => (
              <div key={idx} className="linkedin-step-card">
                <div className="linkedin-step-number">{step.step}</div>
                <div className="linkedin-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Tools */}
      <section className="linkedin-tools-section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Industries We Serve</h2>
              <div className="title-underline"></div>
              <div className="linkedin-tools-grid">
                {industries.map((ind, idx) => (
                  <div key={idx} className="linkedin-tool-tag">{ind}</div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Tools We Use</h2>
              <div className="title-underline"></div>
              <div className="linkedin-tools-grid">
                {tools.map((tool, idx) => (
                  <div key={idx} className="linkedin-tool-tag" style={{ backgroundColor: 'rgba(255, 94, 0, 0.1)', borderColor: 'rgba(255, 94, 0, 0.3)' }}>{tool}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="linkedin-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="linkedin-faqs">
            <details className="linkedin-faq-item">
              <summary>What is LinkedIn Marketing?</summary>
              <p>LinkedIn Marketing is the process of promoting your business, services, or personal brand on LinkedIn to build professional relationships, generate B2B leads, and increase brand visibility.</p>
            </details>
            <details className="linkedin-faq-item">
              <summary>Is LinkedIn Marketing suitable for B2B businesses?</summary>
              <p>Yes. LinkedIn is one of the most effective platforms for B2B marketing, helping businesses connect with decision-makers, executives, and industry professionals.</p>
            </details>
            <details className="linkedin-faq-item">
              <summary>Do you manage LinkedIn advertising campaigns?</summary>
              <p>Yes. We create, manage, and optimize LinkedIn Ads, including Sponsored Content, Lead Generation Forms, and InMail campaigns.</p>
            </details>
            <details className="linkedin-faq-item">
              <summary>Can LinkedIn Marketing generate quality leads?</summary>
              <p>Absolutely. With targeted content, optimized profiles, and strategic advertising, LinkedIn can generate high-quality leads and valuable business opportunities.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="linkedin-cta-section">
        <div className="container">
          <h2 className="linkedin-cta-title">Ready to Grow Your Business on LinkedIn?</h2>
          <p className="linkedin-cta-desc">
            Expand your professional network, generate qualified B2B leads, and build a trusted brand with our expert LinkedIn Marketing services. From profile optimization and content creation to LinkedIn Ads and lead generation, we help your business achieve measurable growth.
          </p>
          <Link to="/contact" className="linkedin-cta-btn">
            Grow Your Business on LinkedIn <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default LinkedinMarketingPage;
