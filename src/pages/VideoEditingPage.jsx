import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaVideo, FaYoutube, FaFilm, FaBuilding, FaShoppingCart, FaMagic, FaCameraRetro, FaMicrophoneAlt, FaPalette, FaClosedCaptioning, FaCheckCircle, FaPlayCircle } from 'react-icons/fa';
import './VideoEditingPage.css';

const VideoEditingPage = () => {
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
    document.title = "Professional Video Editing Services | Engaging Visual Stories";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Transform your videos into engaging visual stories with our professional Video Editing Services. We create high-quality promotional, social media, and corporate videos.";
  }, []);

  const videoServices = [
    { title: "Social Media Reels & Shorts Editing", icon: <FaFilm /> },
    { title: "YouTube Video Editing", icon: <FaYoutube /> },
    { title: "Promotional & Advertisement Videos", icon: <FaPlayCircle /> },
    { title: "Corporate & Business Videos", icon: <FaBuilding /> },
    { title: "Product Demo Videos", icon: <FaShoppingCart /> },
    { title: "Motion Graphics & Animation", icon: <FaMagic /> },
    { title: "Event & Wedding Video Editing", icon: <FaCameraRetro /> },
    { title: "Podcast & Interview Editing", icon: <FaMicrophoneAlt /> },
    { title: "Color Grading & Color Correction", icon: <FaPalette /> },
    { title: "Subtitle & Caption Creation", icon: <FaClosedCaptioning /> },
  ];

  const whyChooseUs = [
    "Professional & Creative Editing",
    "Fast Turnaround Time",
    "High-Quality 4K Video Output",
    "Brand-Focused Visual Storytelling",
    "Platform-Optimized Videos",
    "Affordable Pricing",
    "Unlimited Creativity",
    "Dedicated Support"
  ];

  const benefits = [
    "Increase audience engagement",
    "Improve brand awareness",
    "Boost social media reach",
    "Enhance marketing campaign performance",
    "Deliver a professional brand image",
    "Increase conversions and customer trust"
  ];

  const industries = [
    "Startups", "Small Businesses", "E-commerce Brands", "Real Estate", "Education", "Healthcare", "Restaurants", "Fashion", "Influencers", "Coaches", "Agencies", "Corporate Organizations"
  ];

  return (
    <div className="video-editing-page-container">
      {/* Hero Section */}
      <section className="video-editing-hero">
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="/services/video-editing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Video Editing
          </Link>
        </div>
        <div className="container video-editing-hero-grid">
<div className="video-editing-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>VIDEO EDITING SERVICES</p>
            <h1 className="video-editing-hero-title">Transform Your Videos&nbsp;into <br/><span>Engaging Visual Stories</span></h1>
            <p className="video-editing-hero-desc">
              Bring your ideas to life with our professional Video Editing Services. We create high-quality, engaging, and visually appealing videos that help businesses, brands, and creators connect with their audience.
            </p>
            <p className="video-editing-hero-desc" style={{ marginBottom: '3rem' }}>
              Whether you need promotional videos, social media reels, YouTube content, corporate videos, or advertisements, our expert editors deliver polished videos that leave a lasting impression. Our editing process includes seamless transitions, color correction, motion graphics, subtitles, background music, sound enhancement, and visual effects to ensure every video looks professional and captures attention.
            </p>
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
              Create Stunning Videos Today
            </Link>
          </div>

          <div className="hero-image-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/photo-1574717024653-61fd2cf4d44d.webp" alt="Video Editing Services" style={{ width: '100%', maxWidth: '550px', height: 'auto', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))' }} />
          </div>
        </div>
      </section>

      {/* Our Video Editing Services */}
      <section className="video-editing-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Video Editing Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="video-editing-services-grid">
            {videoServices.map((service, idx) => (
              <div key={idx} className="video-editing-service-card">
                <div className="video-editing-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Benefits */}
      <section className="video-editing-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
              <h3 style={{ color: 'var(--accent-orange)', marginBottom: '1.5rem', fontSize: '2rem' }}>Benefits of Professional Editing</h3>
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

      {/* Industries */}
      <section className="video-editing-tools-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Industries We Serve</h2>
            <div className="title-underline mx-auto"></div>
            <p style={{ color: '#aaa', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              We provide video editing services for startups, small businesses, e-commerce brands, real estate, education, healthcare, restaurants, fashion, influencers, coaches, agencies, and corporate organizations.
            </p>
          </div>
          <div className="video-editing-tools-grid" style={{ justifyContent: 'center' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="video-editing-tool-tag">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="video-editing-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="video-editing-faqs">
            <details className="video-editing-faq-item">
              <summary>What types of videos do you edit?</summary>
              <p>We edit promotional videos, YouTube videos, Instagram Reels, Facebook videos, TikTok videos, product videos, corporate presentations, podcasts, interviews, and event videos.</p>
            </details>
            <details className="video-editing-faq-item">
              <summary>How long does video editing take?</summary>
              <p>Project delivery depends on the video's complexity and duration. Most projects are completed within 2–5 business days.</p>
            </details>
            <details className="video-editing-faq-item">
              <summary>Can you edit videos for social media?</summary>
              <p>Yes. We create videos optimized for Instagram, Facebook, YouTube, LinkedIn, TikTok, and other social media platforms.</p>
            </details>
            <details className="video-editing-faq-item">
              <summary>Do you provide subtitles and motion graphics?</summary>
              <p>Absolutely. We can add subtitles, captions, animated text, motion graphics, logos, and custom visual effects.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="video-editing-cta-section">
        <div className="container">
          <h2 className="video-editing-cta-title">Ready to Create Stunning Videos?</h2>
          <p className="video-editing-cta-desc">
            Turn your raw footage into captivating videos that attract viewers, build trust, and grow your business. Contact us today for professional video editing services tailored to your brand.
          </p>
          <Link to="/contact" className="video-editing-cta-btn">
            Get Your Video Edited Today <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default VideoEditingPage;
