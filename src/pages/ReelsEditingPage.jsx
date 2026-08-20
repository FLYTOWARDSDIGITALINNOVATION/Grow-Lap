import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaLinkedin, FaMicrophoneAlt, FaUserTie, FaBullhorn, FaShoppingCart, FaCameraRetro, FaClosedCaptioning, FaMagic, FaCheckCircle, FaVideo , FaFilm, FaPlayCircle} from 'react-icons/fa';
import './ReelsEditingPage.css';

const ReelsEditingPage = () => {
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
    document.title = "Professional Reels Editing Services | Grow Your Brand";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Capture attention in seconds with our Professional Reels Editing Services. We transform your raw footage into engaging, high-quality short-form videos designed to increase views, engagement, and conversions.";
  }, []);

  const reelsServices = [
    { title: "Instagram Reels Editing", icon: <FaInstagram /> },
    { title: "YouTube Shorts Editing", icon: <FaYoutube /> },
    { title: "TikTok Video Editing", icon: <FaTiktok /> },
    { title: "Facebook Reels Editing", icon: <FaFacebook /> },
    { title: "LinkedIn Short Video Editing", icon: <FaLinkedin /> },
    { title: "Podcast Clips & Highlight Reels", icon: <FaMicrophoneAlt /> },
    { title: "Talking Head Video Editing", icon: <FaUserTie /> },
    { title: "Promotional & Brand Reels", icon: <FaBullhorn /> },
    { title: "Product Showcase Reels", icon: <FaShoppingCart /> },
    { title: "Event & Lifestyle Reels", icon: <FaCameraRetro /> },
    { title: "Subtitle & Caption Editing", icon: <FaClosedCaptioning /> },
    { title: "Motion Graphics & Animated Text", icon: <FaMagic /> },
  ];

  const whyChooseUs = [
    "Creative & Professional Editing",
    "Trend-Focused Editing Style",
    "Fast Turnaround Time",
    "High-Quality HD & 4K Export",
    "Platform-Optimized Video Formats",
    "Engaging Captions & Motion Graphics",
    "Brand-Consistent Visual Identity",
    "Affordable Pricing & Reliable Support"
  ];

  const benefits = [
    "Increase Instagram Reach & Engagement",
    "Improve Audience Retention",
    "Boost Brand Awareness",
    "Drive More Website Traffic",
    "Generate More Leads & Sales",
    "Build a Strong Social Media Presence",
    "Create Content That Encourages Shares & Saves"
  ];

  const reelsProcess = [
    { step: 1, title: "Share Footage", desc: "Share your raw footage with us." },
    { step: 2, title: "Understand Brand Goals", desc: "We understand your brand and content goals." },
    { step: 3, title: "Creative Editing", desc: "Our editors add cuts, transitions, captions, music, and effects." },
    { step: 4, title: "Platform Optimization", desc: "We optimize the reel for your preferred platform." },
    { step: 5, title: "Final Delivery", desc: "Receive your polished, ready-to-publish reel." }
  ];

  const industries = [
    "Businesses & Startups", "Digital Marketing Agencies", "E-commerce Brands", "Influencers & Content Creators", "Coaches & Consultants", "Restaurants & Cafés", "Fitness Trainers & Gyms", "Real Estate Professionals", "Educational Institutions", "Healthcare & Beauty Brands"
  ];

  return (
    <div className="reels-editing-page-container">
      {/* Hero Section */}
      <section className="reels-editing-hero">
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="/services/video-editing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Video Editing
          </Link>
        </div>
        <div className="container reels-editing-hero-grid">
<div className="reels-editing-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>REELS EDITING SERVICES</p>
            <h1 className="reels-editing-hero-title">Create Scroll-Stopping Reels&nbsp;That <br/><span>Grow Your Brand</span></h1>
            <p className="reels-editing-hero-desc">
            Capture attention in seconds with our Professional Reels Editing Services. We transform your raw footage into engaging, high-quality short-form videos designed to increase views, engagement, and conversions across Instagram, Facebook, TikTok, YouTube Shorts, and LinkedIn.
          </p>
            
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
            Get Your Reels Edited Today
          </Link>
          </div>

          <div className="hero-image-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/Reels Editing.webp" alt="Hero Image" style={{ width: '100%', maxWidth: '550px', height: 'auto', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))' }} />
          </div>
        </div>
      </section>

      {/* Our Reels Editing Services */}
      <section className="reels-editing-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Reels Editing Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="reels-editing-services-grid">
            {reelsServices.map((service, idx) => (
              <div key={idx} className="reels-editing-service-card">
                <div className="reels-editing-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Benefits */}
      <section className="reels-editing-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
              <h3 style={{ color: 'var(--accent-orange)', marginBottom: '1.5rem', fontSize: '2rem' }}>Benefits of Professional Reels</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {benefits.map((benefit, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '1rem', color: '#aaa', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    <FaVideo style={{ color: 'var(--accent-orange)', marginTop: '5px', flexShrink: 0 }} /> {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Editing Process */}
      <section className="reels-editing-process-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Editing Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="reels-editing-process-timeline">
            {reelsProcess.map((step, idx) => (
              <div key={idx} className="reels-editing-step-card">
                <div className="reels-editing-step-number">{step.step}</div>
                <div className="reels-editing-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="reels-editing-tools-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Industries We Serve</h2>
            <div className="title-underline mx-auto"></div>
            <p style={{ color: '#aaa', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our reels editing services are ideal for a variety of sectors, helping them maximize engagement across platforms.
            </p>
          </div>
          <div className="reels-editing-tools-grid" style={{ justifyContent: 'center' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="reels-editing-tool-tag">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="reels-editing-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="reels-editing-faqs">
            <details className="reels-editing-faq-item">
              <summary>Which platforms do you edit reels for?</summary>
              <p>We create optimized reels for Instagram, Facebook, TikTok, YouTube Shorts, and LinkedIn.</p>
            </details>
            <details className="reels-editing-faq-item">
              <summary>Can you add captions and trending effects?</summary>
              <p>Yes. We add stylish captions, animated text, trending transitions, sound effects, background music, and motion graphics to maximize engagement.</p>
            </details>
            <details className="reels-editing-faq-item">
              <summary>What video formats do you deliver?</summary>
              <p>We deliver high-quality videos in MP4 format, optimized for mobile and social media platforms.</p>
            </details>
            <details className="reels-editing-faq-item">
              <summary>How quickly can I receive my edited reel?</summary>
              <p>Most reels are delivered within 24–72 hours, depending on the project's complexity and revisions.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="reels-editing-cta-section">
        <div className="container">
          <h2 className="reels-editing-cta-title">Ready to Make Your Content Go Viral?</h2>
          <p className="reels-editing-cta-desc">
            Turn your ideas into captivating short-form videos with our Professional Reels Editing Services. Whether you're building a personal brand, promoting products, or growing your business, we create engaging reels that attract attention, increase engagement, and deliver real results.
          </p>
          <Link to="/contact" className="reels-editing-cta-btn">
            Get Started Today <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ReelsEditingPage;
