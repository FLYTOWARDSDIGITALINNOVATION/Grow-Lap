import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHashtag, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaPinterest, FaPaintBrush, FaTasks, FaBullhorn, FaUsers, FaUserFriends, FaChartBar, FaGlobe, FaSearchDollar, FaCheckCircle } from 'react-icons/fa';
import './SocialMediaPage.css';

const SocialMediaPage = () => {
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
    document.title = "Social Media Marketing Services | Grow Your Brand & Generate More Leads";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Boost your online presence with professional Social Media Marketing services. We offer Facebook, Instagram, LinkedIn, YouTube, content creation, paid advertising, and social media management to grow your business.";
  }, []);

  const smmServices = [
    { title: "Social Media Strategy & Planning", icon: <FaHashtag /> },
    { title: "Facebook Marketing", icon: <FaFacebook /> },
    { title: "Instagram Marketing", icon: <FaInstagram /> },
    { title: "LinkedIn Marketing", icon: <FaLinkedin /> },
    { title: "YouTube Marketing", icon: <FaYoutube /> },
    { title: "X (Twitter) Marketing", icon: <FaTwitter /> },
    { title: "Pinterest Marketing", icon: <FaPinterest /> },
    { title: "Content Creation & Design", icon: <FaPaintBrush /> },
    { title: "Social Media Management", icon: <FaTasks /> },
    { title: "Paid Social Media Advertising", icon: <FaBullhorn /> },
    { title: "Community Management", icon: <FaUsers /> },
    { title: "Influencer Marketing", icon: <FaUserFriends /> },
    { title: "Social Media Analytics & Reporting", icon: <FaChartBar /> },
    { title: "Brand Awareness Campaigns", icon: <FaGlobe /> },
    { title: "Lead Generation Campaigns", icon: <FaSearchDollar /> },
  ];

  const whyChooseUs = [
    "Customized Marketing Strategies",
    "Creative Content & Visual Design",
    "Consistent Brand Messaging",
    "Advanced Audience Targeting",
    "Increased Brand Awareness",
    "Higher Engagement & Reach",
    "Lead Generation & Sales Growth",
    "Data-Driven Campaign Optimization",
    "Transparent Performance Reports",
    "Dedicated Social Media Experts"
  ];

  const smmProcess = [
    { step: 1, title: "Business & Audience Analysis", desc: "We understand your business goals, target audience, and competitors to build a winning social media strategy." },
    { step: 2, title: "Content Planning", desc: "Our team creates a customized content calendar with engaging posts, reels, stories, and promotional content." },
    { step: 3, title: "Creative Content Creation", desc: "We design eye-catching graphics, write compelling captions, and produce engaging videos that reflect your brand identity." },
    { step: 4, title: "Campaign Management", desc: "We publish and manage content across multiple social media platforms while maintaining consistency and audience engagement." },
    { step: 5, title: "Paid Advertising & Optimization", desc: "We launch targeted social media ad campaigns and continuously optimize them to maximize reach, engagement, and conversions." },
    { step: 6, title: "Performance Reporting", desc: "Receive detailed monthly reports with insights into reach, impressions, engagement, followers, website traffic, and conversions." }
  ];

  const industries = [
    "E-commerce", "Healthcare", "Real Estate", "Education", "Restaurants & Cafés", "Fashion & Beauty", "Technology", "Travel & Tourism", "Finance", "Fitness & Wellness", "Local Businesses", "Startups & Enterprises"
  ];

  const tools = [
    "Meta Business Suite", "Meta Ads Manager", "Canva Pro", "Adobe Photoshop", "Adobe Premiere Pro", "CapCut Pro", "Hootsuite", "Buffer", "Google Analytics 4 (GA4)", "Google Tag Manager", "Looker Studio", "ChatGPT"
  ];

  return (
    <div className="smm-page-container">
      {/* Hero Section */}
      <section className="smm-hero">
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="/services/digital-marketing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Digital Marketing
          </Link>
        </div>
        <div className="container smm-hero-grid">
<div className="smm-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>SOCIAL MEDIA MARKETING SERVICES</p>
            <h1 className="smm-hero-title">
              Grow Your Brand with <br />
              Professional <span>Social Media Marketing</span>
            </h1>
            <p className="smm-hero-desc">
              Build a strong online presence and connect with your audience through our Social Media Marketing (SMM) Services. We create result-driven social media strategies that increase brand awareness, engage your audience, generate quality leads, and drive business growth across the world's leading social platforms.
            </p>
            <p className="smm-hero-desc" style={{ marginBottom: '3rem' }}>
              Whether you're a startup, local business, e-commerce brand, or enterprise, our social media experts develop customized campaigns that help you stand out and achieve measurable results.
            </p>
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
              Grow Your Business with Social Media
            </Link>
          </div>

          <div className="hero-image-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/SOCIAL MEDIA MARKETING SERVICES.webp" alt="Social Media Marketing Services" style={{ width: '100%', maxWidth: '450px', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} />
          </div>
        </div>
      </section>

      {/* Our SMM Services */}
      <section className="smm-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Social Media Marketing Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="smm-services-grid">
            {smmServices.map((service, idx) => (
              <div key={idx} className="smm-service-card">
                <div className="smm-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Benefits */}
      <section className="smm-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
              <h3 style={{ color: 'var(--accent-orange)', marginBottom: '1.5rem', fontSize: '2rem' }}>The Power of Social Media</h3>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Social media marketing helps businesses build brand awareness, strengthen customer relationships, increase website traffic, and generate qualified leads.
              </p>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8' }}>
                By consistently sharing valuable content and running targeted campaigns, your business can improve customer engagement, boost sales, and create long-term brand loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our SMM Process */}
      <section className="smm-process-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Social Media Marketing Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="smm-process-timeline">
            {smmProcess.map((step, idx) => (
              <div key={idx} className="smm-step-card">
                <div className="smm-step-number">{step.step}</div>
                <div className="smm-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Tools */}
      <section className="smm-tools-section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Industries We Serve</h2>
              <div className="title-underline"></div>
              <div className="smm-tools-grid">
                {industries.map((ind, idx) => (
                  <div key={idx} className="smm-tool-tag">{ind}</div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Tools We Use</h2>
              <div className="title-underline"></div>
              <div className="smm-tools-grid">
                {tools.map((tool, idx) => (
                  <div key={idx} className="smm-tool-tag" style={{ backgroundColor: 'rgba(255, 94, 0, 0.1)', borderColor: 'rgba(255, 94, 0, 0.3)' }}>{tool}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="smm-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="smm-faqs">
            <details className="smm-faq-item">
              <summary>What is Social Media Marketing?</summary>
              <p>Social Media Marketing (SMM) is the process of promoting your business on platforms like Facebook, Instagram, LinkedIn, YouTube, and X to increase brand awareness, engage customers, and generate leads.</p>
            </details>
            <details className="smm-faq-item">
              <summary>Which social media platforms do you manage?</summary>
              <p>We manage Facebook, Instagram, LinkedIn, YouTube, X (Twitter), Pinterest, and other platforms based on your business goals.</p>
            </details>
            <details className="smm-faq-item">
              <summary>Can Social Media Marketing increase sales?</summary>
              <p>Yes. With the right strategy, engaging content, and targeted advertising, social media marketing can increase website traffic, generate qualified leads, and improve sales.</p>
            </details>
            <details className="smm-faq-item">
              <summary>Do you provide monthly performance reports?</summary>
              <p>Yes. We provide detailed reports covering audience growth, engagement, reach, conversions, and campaign performance to help you measure success.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="smm-cta-section">
        <div className="container">
          <h2 className="smm-cta-title">Ready to Grow Your Brand on Social Media?</h2>
          <p className="smm-cta-desc">
            Take your business to the next level with our professional Social Media Marketing services. From strategy and content creation to campaign management and paid advertising, we help you connect with your audience and achieve measurable business growth.
          </p>
          <Link to="/contact" className="smm-cta-btn">
            Grow Your Business with Social Media <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default SocialMediaPage;
