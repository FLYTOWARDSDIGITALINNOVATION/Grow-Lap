import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaVideo, FaMicrophoneAlt, FaCamera, FaBriefcase, FaUserTie, FaGraduationCap, FaMapMarkerAlt, FaTags, FaShareAlt, FaFilm, FaUsers, FaCog, FaCheckCircle, FaPlusCircle, FaHeadphones } from 'react-icons/fa';
import './PodcastShootPage.css';

const PodcastShootPage = () => {
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
    document.title = "Professional Podcast Shoot Services | Engage Your Audience";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Create professional, engaging, and visually appealing podcasts with our Professional Podcast Shoot Services. We provide complete podcast production solutions.";
  }, []);

  const podcastServices = [
    { title: "Video Podcast Production", icon: <FaVideo /> },
    { title: "Audio Podcast Recording", icon: <FaMicrophoneAlt /> },
    { title: "Multi-Camera Podcast Shoots", icon: <FaCamera /> },
    { title: "Business & Corporate Podcasts", icon: <FaBriefcase /> },
    { title: "Interview Podcast Production", icon: <FaUserTie /> },
    { title: "Educational Podcast Recording", icon: <FaGraduationCap /> },
    { title: "Studio & On-Location Podcast Shoots", icon: <FaMapMarkerAlt /> },
    { title: "Branded Podcast Content", icon: <FaTags /> },
    { title: "Social Media Podcast Clips", icon: <FaShareAlt /> },
    { title: "Podcast Reels & Shorts", icon: <FaFilm /> },
    { title: "Live Podcast Event Coverage", icon: <FaUsers /> },
    { title: "Custom Podcast Production", icon: <FaCog /> },
  ];

  const whatsIncluded = [
    "Professional DSLR or Mirrorless Camera Setup",
    "High-Quality Audio Recording",
    "Multi-Camera Video Production",
    "Professional Lighting Setup",
    "Premium Microphones & Audio Equipment",
    "Audio Cleanup & Noise Reduction",
    "Video Editing & Color Grading",
    "Motion Graphics & Animated Titles",
    "Intro & Outro Creation",
    "Subtitles & Captions",
    "HD, Full HD & 4K Video Delivery",
    "Podcast Platform-Ready File Export"
  ];

  const whyChooseUs = [
    "Experienced Podcast Production Team",
    "Professional Audio & Video Quality",
    "Creative Multi-Camera Editing",
    "Fast Turnaround Time",
    "Customized Production Solutions",
    "Affordable Pricing",
    "Content Optimized for Multiple Platforms",
    "Dedicated Customer Support"
  ];

  const benefits = [
    "Build Brand Authority",
    "Increase Audience Engagement",
    "Deliver High-Quality Content",
    "Grow Your Podcast Audience",
    "Improve Audio & Video Quality",
    "Create Shareable Social Media Clips",
    "Strengthen Your Online Presence",
    "Save Time with End-to-End Production"
  ];

  const podcastProcess = [
    { step: 1, title: "Understand Goals", desc: "Understand your podcast goals and audience." },
    { step: 2, title: "Plan Setup", desc: "Plan the recording setup and production workflow." },
    { step: 3, title: "Record Podcast", desc: "Record high-quality video and audio using professional equipment." },
    { step: 4, title: "Edit & Polish", desc: "Edit the podcast with transitions, titles, music, and branding." },
    { step: 5, title: "Final Delivery", desc: "Deliver platform-ready files for publishing and promotion." }
  ];

  const industries = [
    "Businesses & Startups", "Entrepreneurs", "Coaches & Consultants", "Digital Marketing Agencies", "Educational Institutions", "Healthcare Professionals", "Technology Companies", "Corporate Organizations", "Influencers & Content Creators", "Media & Production Companies"
  ];

  return (
    <div className="podcast-shoot-page-container">
      {/* Hero Section */}
      <section className="podcast-shoot-hero">
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="/services/shoot" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Shoot Services
          </Link>
        </div>
        <div className="container podcast-shoot-hero-grid">
<div className="podcast-shoot-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>PODCAST SHOOT SERVICES</p>
            <h1 className="podcast-shoot-hero-title">High-Quality Podcast Production&nbsp;That <br/><span>Engages Your Audience</span></h1>
            <p className="podcast-shoot-hero-desc">
            Create professional, engaging, and visually appealing podcasts with our Professional Podcast Shoot Services. Whether you're a business, entrepreneur, educator, influencer, or content creator, we provide complete podcast production solutions that help you share your ideas with confidence. From multi-camera video recording to crystal-clear audio and professional editing, we ensure every episode reflects your brand and keeps your audience engaged.
          </p>
            
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
            Launch Your Podcast Today
          </Link>
          </div>

          <div className="hero-image-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/Podcast.webp" alt="Hero Image" style={{ width: '100%', maxWidth: '550px', height: 'auto', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))' }} />
          </div>
        </div>
      </section>

      {/* Our Podcast Shoot Services */}
      <section className="podcast-shoot-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Podcast Shoot Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="podcast-shoot-services-grid">
            {podcastServices.map((service, idx) => (
              <div key={idx} className="podcast-shoot-service-card">
                <div className="podcast-shoot-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & Why Choose Us */}
      <section className="podcast-shoot-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
      <section className="podcast-shoot-benefits-extra" style={{ padding: '5rem 0', backgroundColor: '#0a0a0c' }}>
        <div className="container">
            <div style={{ backgroundColor: '#121215', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ color: 'var(--accent-orange)', marginBottom: '2rem', fontSize: '2.2rem', textAlign: 'center' }}>Benefits of Professional Podcast Production</h2>
              <div className="grid-2" style={{ gap: '2rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {benefits.slice(0, 4).map((benefit, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '1.2rem', color: '#aaa', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <FaHeadphones style={{ color: 'var(--accent-orange)', marginTop: '5px', flexShrink: 0 }} /> {benefit}
                      </li>
                    ))}
                  </ul>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {benefits.slice(4).map((benefit, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '1.2rem', color: '#aaa', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <FaHeadphones style={{ color: 'var(--accent-orange)', marginTop: '5px', flexShrink: 0 }} /> {benefit}
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
        </div>
      </section>

      {/* Our Shooting Process */}
      <section className="podcast-shoot-process-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Podcast Production Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="podcast-shoot-process-timeline">
            {podcastProcess.map((step, idx) => (
              <div key={idx} className="podcast-shoot-step-card">
                <div className="podcast-shoot-step-number">{step.step}</div>
                <div className="podcast-shoot-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="podcast-shoot-tools-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Industries We Serve</h2>
            <div className="title-underline mx-auto"></div>
            <p style={{ color: '#aaa', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our podcast shoot services are ideal for:
            </p>
          </div>
          <div className="podcast-shoot-tools-grid" style={{ justifyContent: 'center' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="podcast-shoot-tool-tag">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="podcast-shoot-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="podcast-shoot-faqs">
            <details className="podcast-shoot-faq-item">
              <summary>Do you provide both podcast recording and editing?</summary>
              <p>Yes. We offer complete podcast production, including recording, professional editing, audio enhancement, color grading, branding, and final delivery.</p>
            </details>
            <details className="podcast-shoot-faq-item">
              <summary>Can you shoot podcasts at my location?</summary>
              <p>Absolutely. We provide both studio and on-location podcast shoot services based on your requirements.</p>
            </details>
            <details className="podcast-shoot-faq-item">
              <summary>Do you create social media clips from podcasts?</summary>
              <p>Yes. We create engaging short clips, Instagram Reels, YouTube Shorts, TikTok videos, and promotional highlights from your podcast episodes.</p>
            </details>
            <details className="podcast-shoot-faq-item">
              <summary>Which platforms are the podcasts optimized for?</summary>
              <p>We optimize podcasts for YouTube, Spotify, Apple Podcasts, Google Podcasts, Facebook, Instagram, LinkedIn, TikTok, and your website.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="podcast-shoot-cta-section">
        <div className="container">
          <h2 className="podcast-shoot-cta-title">Launch Your Podcast with Professional Production</h2>
          <p className="podcast-shoot-cta-desc">
            A professionally produced podcast helps you connect with your audience, build credibility, and grow your brand. Our Professional Podcast Shoot Services combine premium video production, crystal-clear audio, and creative editing to deliver engaging podcast episodes that stand out across every platform.
          </p>
          <p className="podcast-shoot-cta-desc" style={{ marginTop: '1rem' }}>
            Whether you're starting a new podcast or enhancing an existing show, our team is ready to create high-quality content that informs, inspires, and grows your audience.
          </p>
          <p className="podcast-shoot-cta-desc" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
            Contact us today to book your professional podcast shoot and produce podcast episodes that make a lasting impact.
          </p>
          <Link to="/contact" className="podcast-shoot-cta-btn" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Book Your Podcast Shoot <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default PodcastShootPage;
