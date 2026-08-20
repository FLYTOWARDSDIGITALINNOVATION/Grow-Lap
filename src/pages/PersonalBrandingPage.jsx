import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaUserTie, FaLinkedin, FaShareAlt, FaGlobe, FaSearch, FaPenNib, FaVideo, FaIdBadge, FaPalette, FaLightbulb, FaShieldAlt, FaMicrophone, FaCalendarAlt, FaUsers, FaChartBar, FaCheckCircle } from 'react-icons/fa';
import './PersonalBrandingPage.css';

const PersonalBrandingPage = () => {
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
    document.title = "Personal Branding Services | Build Your Professional Brand & Online Presence";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Grow your professional reputation with expert Personal Branding services. We provide brand strategy, LinkedIn optimization, content creation, profile management, and personal SEO to increase visibility, credibility, and business opportunities.";
  }, []);

  const personalServices = [
    { title: "Personal Brand Strategy", icon: <FaIdBadge /> },
    { title: "LinkedIn Profile Optimization", icon: <FaLinkedin /> },
    { title: "Social Media Branding", icon: <FaShareAlt /> },
    { title: "Personal Website Development", icon: <FaGlobe /> },
    { title: "SEO-Optimized Personal Profiles", icon: <FaSearch /> },
    { title: "Content Creation & Copywriting", icon: <FaPenNib /> },
    { title: "Video & Reel Content Strategy", icon: <FaVideo /> },
    { title: "Professional Bio Writing", icon: <FaUserTie /> },
    { title: "Brand Identity & Visual Design", icon: <FaPalette /> },
    { title: "Thought Leadership Content", icon: <FaLightbulb /> },
    { title: "Reputation Management", icon: <FaShieldAlt /> },
    { title: "Public Speaking & Media Branding", icon: <FaMicrophone /> },
    { title: "Content Calendar Planning", icon: <FaCalendarAlt /> },
    { title: "Audience Growth Strategy", icon: <FaUsers /> },
    { title: "Performance Analytics & Reporting", icon: <FaChartBar /> },
  ];

  const whyChooseUs = [
    "Customized Personal Branding Strategy",
    "Professional Profile Optimization",
    "Consistent Brand Identity",
    "SEO-Friendly Content & Profiles",
    "Increased Online Visibility",
    "Stronger Personal Credibility",
    "High-Quality Content Creation",
    "Audience Growth & Engagement",
    "Long-Term Brand Development",
    "Dedicated Branding Experts"
  ];

  const personalProcess = [
    { step: 1, title: "Brand Discovery", desc: "We understand your goals, expertise, values, and target audience to define your unique personal brand." },
    { step: 2, title: "Brand Strategy", desc: "We create a customized branding roadmap that aligns with your professional objectives and industry." },
    { step: 3, title: "Profile Optimization", desc: "We optimize your LinkedIn profile, social media accounts, and personal website with SEO-friendly content and professional branding." },
    { step: 4, title: "Content Creation", desc: "Our team develops engaging articles, blogs, videos, social media posts, and thought leadership content that showcases your expertise." },
    { step: 5, title: "Brand Promotion", desc: "We increase your online visibility through SEO, social media marketing, content marketing, and strategic digital campaigns." },
    { step: 6, title: "Performance Monitoring", desc: "We track audience growth, engagement, website traffic, and brand performance to continuously improve your online presence." }
  ];

  const industries = [
    "Entrepreneurs", "Business Owners", "CEOs & Executives", "Freelancers", "Coaches & Consultants", "Influencers & Content Creators", "Public Speakers", "Authors", "Doctors & Lawyers", "Real Estate Professionals", "Educators & Trainers", "Startup Founders"
  ];

  const tools = [
    "LinkedIn", "Canva Pro", "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "CapCut Pro", "Meta Business Suite", "Google Analytics 4 (GA4)", "Google Search Console", "ChatGPT", "Notion", "Figma"
  ];

  return (
    <div className="personal-page-container">
      {/* Hero Section */}
      <section className="personal-hero">
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="/services/digital-marketing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Digital Marketing
          </Link>
        </div>
        <div className="container personal-hero-grid">
<div className="personal-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>PERSONAL BRANDING SERVICES</p>
            <h1 className="personal-hero-title" style={{ color: 'white' }}>Build a Powerful <span style={{ whiteSpace: 'nowrap', color: 'var(--accent-orange)' }}>Personal Brand</span> <br/><span style={{ whiteSpace: 'nowrap', color: 'white' }}>That Sets You Apart</span></h1>
            <p className="personal-hero-desc">
              Your personal brand is more than just your online presence—it's how people recognize, trust, and remember you. Our Personal Branding Services help entrepreneurs, business owners, professionals, influencers, coaches, and executives establish a strong digital identity that builds credibility, attracts opportunities, and drives long-term success.
            </p>
            <p className="personal-hero-desc" style={{ marginBottom: '3rem' }}>
              From profile optimization and content creation to social media strategy and personal website development, we create a powerful brand that reflects your expertise and connects with your target audience.
            </p>
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
              Start Building Your Personal Brand
            </Link>
          </div>

          <div className="hero-image-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/personal-branding.webp" alt="Personal Branding Services" style={{ width: '100%', maxWidth: '550px', height: 'auto', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))' }} />
          </div>
        </div>
      </section>

      {/* Our Personal Branding Services */}
      <section className="personal-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Personal Branding Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="personal-services-grid">
            {personalServices.map((service, idx) => (
              <div key={idx} className="personal-service-card">
                <div className="personal-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Benefits */}
      <section className="personal-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
              <h3 style={{ color: 'var(--accent-orange)', marginBottom: '1.5rem', fontSize: '2rem' }}>The Power of Personal Branding</h3>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                A strong personal brand helps you build trust, increase visibility, establish authority, and create meaningful connections with your audience.
              </p>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8' }}>
                It enhances your professional reputation, attracts clients and career opportunities, and positions you as a leader in your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Personal Branding Process */}
      <section className="personal-process-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Personal Branding Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="personal-process-timeline">
            {personalProcess.map((step, idx) => (
              <div key={idx} className="personal-step-card">
                <div className="personal-step-number">{step.step}</div>
                <div className="personal-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Benefit & Tools */}
      <section className="personal-tools-section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Who Can Benefit from Personal Branding?</h2>
              <div className="title-underline"></div>
              <div className="personal-tools-grid">
                {industries.map((ind, idx) => (
                  <div key={idx} className="personal-tool-tag">{ind}</div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Tools We Use</h2>
              <div className="title-underline"></div>
              <div className="personal-tools-grid">
                {tools.map((tool, idx) => (
                  <div key={idx} className="personal-tool-tag" style={{ backgroundColor: 'rgba(255, 94, 0, 0.1)', borderColor: 'rgba(255, 94, 0, 0.3)' }}>{tool}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="personal-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="personal-faqs">
            <details className="personal-faq-item">
              <summary>What is Personal Branding?</summary>
              <p>Personal branding is the process of creating a unique professional identity that showcases your skills, experience, and values. It helps you build trust, attract opportunities, and grow your influence online.</p>
            </details>
            <details className="personal-faq-item">
              <summary>Why is Personal Branding important?</summary>
              <p>A strong personal brand improves your credibility, increases your visibility, helps you attract clients, employers, and business opportunities, and differentiates you from competitors.</p>
            </details>
            <details className="personal-faq-item">
              <summary>Which platforms do you optimize?</summary>
              <p>We optimize LinkedIn, Instagram, Facebook, YouTube, X (Twitter), and personal websites to ensure a consistent and professional online presence.</p>
            </details>
            <details className="personal-faq-item">
              <summary>How long does it take to see results?</summary>
              <p>Personal branding is a long-term investment. With consistent content creation, profile optimization, and audience engagement, you can begin seeing meaningful growth within a few months.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="personal-cta-section">
        <div className="container">
          <h2 className="personal-cta-title">Ready to Build Your Personal Brand?</h2>
          <p className="personal-cta-desc">
            Your personal brand is your greatest professional asset. Let us help you create a memorable online presence that builds trust, attracts opportunities, and supports long-term success.
          </p>
          <Link to="/contact" className="personal-cta-btn">
            Start Building Your Personal Brand <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default PersonalBrandingPage;
