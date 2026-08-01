import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaMobileAlt, FaVideo, FaShoppingBag, FaStore, FaUtensils, FaTshirt, FaBriefcase, FaCalendarAlt, FaUserTie, FaHome, FaFilm, FaCheckCircle, FaPlusCircle, FaCameraRetro } from 'react-icons/fa';
import './MobileShootPage.css';

const MobileShootPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Professional Mobile Shoot Services | High-Quality Content";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Create engaging visual content with our Professional Mobile Shoot Services. We specialize in capturing high-quality photos and videos using advanced smartphone cameras.";
  }, []);

  const mobileServices = [
    { title: "Social Media Content Shoots", icon: <FaMobileAlt /> },
    { title: "Instagram Reels & TikTok Video Shoots", icon: <FaVideo /> },
    { title: "Product Mobile Photography", icon: <FaShoppingBag /> },
    { title: "Business & Brand Promotion Shoots", icon: <FaStore /> },
    { title: "Restaurant & Food Photography", icon: <FaUtensils /> },
    { title: "Fashion & Lifestyle Shoots", icon: <FaTshirt /> },
    { title: "Corporate Mobile Videography", icon: <FaBriefcase /> },
    { title: "Event Coverage", icon: <FaCalendarAlt /> },
    { title: "Behind-the-Scenes Content", icon: <FaFilm /> },
    { title: "Personal Branding Shoots", icon: <FaUserTie /> },
    { title: "Real Estate Mobile Videos", icon: <FaHome /> },
    { title: "Short Promotional Videos", icon: <FaVideo /> },
  ];

  const whatsIncluded = [
    "Professional Smartphone Photography & Videography",
    "Creative Composition & Camera Angles",
    "Natural & Studio Lighting Setup",
    "Smooth Stabilized Video Recording",
    "Professional Photo & Video Editing",
    "Color Correction & Enhancement",
    "Reels & Shorts Optimization",
    "High-Resolution Image Delivery",
    "HD & 4K Video Export (Device Dependent)",
    "Ready-to-Post Content for Social Media"
  ];

  const whyChooseUs = [
    "Experienced Mobile Content Creators",
    "Affordable & Cost-Effective Solutions",
    "Fast Turnaround Time",
    "Social Media-Focused Content",
    "Creative Storytelling Approach",
    "High-Quality Editing",
    "Brand-Consistent Visual Style",
    "Dedicated Customer Support"
  ];

  const benefits = [
    "Increase Social Media Engagement",
    "Create Authentic Brand Content",
    "Boost Online Visibility",
    "Improve Marketing Campaign Performance",
    "Build Customer Trust",
    "Generate More Leads & Sales",
    "Produce Content Quickly & Efficiently",
    "Stay Consistent Across Digital Platforms"
  ];

  const mobileProcess = [
    { step: 1, title: "Understand Brand", desc: "Understand your brand and content objectives." },
    { step: 2, title: "Plan the Shoot", desc: "Plan the shoot location, style, and creative concept." },
    { step: 3, title: "Capture Content", desc: "Capture professional photos and videos using premium smartphones." },
    { step: 4, title: "Post-Production", desc: "Edit and enhance every photo and video." },
    { step: 5, title: "Final Delivery", desc: "Deliver optimized content ready for Instagram, Facebook, YouTube, TikTok, LinkedIn, and your website." }
  ];

  const industries = [
    "Small Businesses & Startups", "E-commerce Brands", "Restaurants & Cafés", "Fashion & Beauty Brands", "Influencers & Content Creators", "Real Estate Companies", "Fitness Centers & Gyms", "Educational Institutions", "Healthcare Businesses", "Digital Marketing Agencies"
  ];

  return (
    <div className="mobile-shoot-page-container">
      {/* Hero Section */}
      <section className="mobile-shoot-hero">
        <div className="container">
          <p className="section-subtitle text-accent" style={{ marginBottom: '1rem' }}>MOBILE SHOOT SERVICES</p>
          <h1 className="mobile-shoot-hero-title">High-Quality Mobile Photography & Videography <br/><span>for Modern Brands</span></h1>
          <p className="mobile-shoot-hero-desc">
            Create engaging visual content with our Professional Mobile Shoot Services. We specialize in capturing high-quality photos and videos using advanced smartphone cameras, delivering content that is perfect for social media, websites, digital marketing campaigns, and online promotions. Whether you're a business owner, influencer, content creator, or startup, our mobile shoots help your brand connect with today's digital audience.
          </p>
          <p className="mobile-shoot-hero-desc" style={{ marginBottom: '3rem' }}>
            Using the latest mobile photography techniques, professional lighting, stabilization tools, and creative editing, we produce stunning visuals that look polished, authentic, and ready to publish.
          </p>
          <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem' }}>
            Book Your Shoot Today
          </Link>
        </div>
      </section>

      {/* Our Mobile Shoot Services */}
      <section className="mobile-shoot-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Mobile Shoot Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="mobile-shoot-services-grid">
            {mobileServices.map((service, idx) => (
              <div key={idx} className="mobile-shoot-service-card">
                <div className="mobile-shoot-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & Why Choose Us */}
      <section className="mobile-shoot-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>What's Included</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {whatsIncluded.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '1rem', color: '#ccc', fontSize: '1.1rem', lineHeight: '1.5' }}>
                    <FaPlusCircle style={{ color: 'var(--accent-orange)', marginTop: '4px', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Why Choose Us?</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {whyChooseUs.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: '#ccc', fontSize: '1.1rem' }}>
                    <FaCheckCircle style={{ color: 'var(--accent-orange)' }} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="mobile-shoot-benefits-extra" style={{ padding: '5rem 0', backgroundColor: '#0a0a0c' }}>
        <div className="container">
            <div style={{ backgroundColor: '#121215', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ color: 'var(--accent-orange)', marginBottom: '2rem', fontSize: '2.2rem', textAlign: 'center' }}>Benefits of Professional Mobile Content Creation</h2>
              <div className="grid-2" style={{ gap: '2rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {benefits.slice(0, 4).map((benefit, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '1.2rem', color: '#aaa', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <FaCameraRetro style={{ color: 'var(--accent-orange)', marginTop: '5px', flexShrink: 0 }} /> {benefit}
                      </li>
                    ))}
                  </ul>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {benefits.slice(4).map((benefit, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '1.2rem', color: '#aaa', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <FaCameraRetro style={{ color: 'var(--accent-orange)', marginTop: '5px', flexShrink: 0 }} /> {benefit}
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
        </div>
      </section>

      {/* Our Shooting Process */}
      <section className="mobile-shoot-process-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Mobile Shoot Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="mobile-shoot-process-timeline">
            {mobileProcess.map((step, idx) => (
              <div key={idx} className="mobile-shoot-step-card">
                <div className="mobile-shoot-step-number">{step.step}</div>
                <div className="mobile-shoot-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="mobile-shoot-tools-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Industries We Serve</h2>
            <div className="title-underline mx-auto"></div>
            <p style={{ color: '#aaa', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our mobile shoot services are ideal for:
            </p>
          </div>
          <div className="mobile-shoot-tools-grid" style={{ justifyContent: 'center' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="mobile-shoot-tool-tag">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mobile-shoot-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="mobile-shoot-faqs">
            <details className="mobile-shoot-faq-item">
              <summary>What is a mobile shoot service?</summary>
              <p>A mobile shoot service uses advanced smartphones and professional techniques to create high-quality photos and videos for businesses, brands, and social media platforms.</p>
            </details>
            <details className="mobile-shoot-faq-item">
              <summary>Can mobile-shot content be used for professional marketing?</summary>
              <p>Yes. Modern smartphones can produce exceptional-quality visuals when combined with expert composition, lighting, and professional editing, making them ideal for websites, social media, and digital advertising.</p>
            </details>
            <details className="mobile-shoot-faq-item">
              <summary>Do you edit the photos and videos?</summary>
              <p>Absolutely. Every project includes professional editing, color correction, retouching, and optimization to ensure your content looks polished and engaging.</p>
            </details>
            <details className="mobile-shoot-faq-item">
              <summary>Which platforms is the content optimized for?</summary>
              <p>We create content optimized for Instagram, Facebook, YouTube, TikTok, LinkedIn, WhatsApp, websites, and other digital marketing platforms.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mobile-shoot-cta-section">
        <div className="container">
          <h2 className="mobile-shoot-cta-title">Create Powerful Content with Professional Mobile Shoots</h2>
          <p className="mobile-shoot-cta-desc">
            Great content doesn't always require expensive equipment—it requires creativity, strategy, and professional execution. Our Professional Mobile Shoot Services help businesses and creators produce authentic, engaging, and high-quality visual content that captures attention and drives results.
          </p>
          <p className="mobile-shoot-cta-desc" style={{ marginTop: '1rem' }}>
            Whether you need product photography, social media reels, promotional videos, or personal branding content, we're here to deliver mobile-first visuals that elevate your online presence.
          </p>
          <p className="mobile-shoot-cta-desc" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
            Contact us today to book your professional mobile shoot and create content that inspires, engages, and grows your brand.
          </p>
          <Link to="/contact" className="mobile-shoot-cta-btn" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Book Your Shoot Now <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default MobileShootPage;
