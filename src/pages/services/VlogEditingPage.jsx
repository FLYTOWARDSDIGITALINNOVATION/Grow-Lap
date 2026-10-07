import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaYoutube, FaPlane, FaHome, FaHeart, FaUtensils, FaDumbbell, FaBriefcase, FaCalendarAlt, FaGraduationCap, FaMicrophoneAlt, FaCheckCircle, FaVideo, FaPlusCircle , FaCamera} from 'react-icons/fa';
import './VlogEditingPage.css';

const VlogEditingPage = () => {
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
    document.title = "Professional Full Vlog Editing Services | Engage Your Audience";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Create high-quality, engaging, and professional vlogs with our Full Vlog Editing Services. We transform your raw footage into captivating videos that keep viewers watching.";
  }, []);

  const vlogServices = [
    { title: "YouTube Vlog Editing", icon: <FaYoutube /> },
    { title: "Travel Vlog Editing", icon: <FaPlane /> },
    { title: "Daily & Lifestyle Vlog Editing", icon: <FaHome /> },
    { title: "Family & Personal Vlog Editing", icon: <FaHeart /> },
    { title: "Food & Cooking Vlog Editing", icon: <FaUtensils /> },
    { title: "Fitness & Gym Vlog Editing", icon: <FaDumbbell /> },
    { title: "Business & Brand Vlogs", icon: <FaBriefcase /> },
    { title: "Event & Behind-the-Scenes Vlogs", icon: <FaCalendarAlt /> },
    { title: "Educational & Tutorial Vlogs", icon: <FaGraduationCap /> },
    { title: "Podcast & Interview Vlog Editing", icon: <FaMicrophoneAlt /> },
  ];

  const whatsIncluded = [
    "Professional Video Trimming & Sequencing",
    "Storytelling & Scene Arrangement",
    "Smooth Transitions & Visual Effects",
    "Cinematic Color Correction & Color Grading",
    "Audio Cleanup & Background Noise Removal",
    "Royalty-Free Background Music",
    "Animated Titles & Motion Graphics",
    "Subtitles & Captions",
    "Zoom Effects & Dynamic Camera Motion",
    "Logo Animation & Brand Elements",
    "Intro & Outro Editing",
    "HD & 4K Video Export"
  ];

  const whyChooseUs = [
    "Experienced Professional Editors",
    "Creative Storytelling Approach",
    "Fast Turnaround Time",
    "High-Quality Video Output",
    "YouTube & Social Media Optimized",
    "Brand-Consistent Editing Style",
    "Affordable Pricing",
    "Dedicated Customer Support"
  ];

  const benefits = [
    "Increase Viewer Retention",
    "Improve Watch Time",
    "Build a Strong Personal Brand",
    "Boost YouTube Channel Growth",
    "Create High-Quality Content Consistently",
    "Save Time with Expert Editing",
    "Enhance Audience Engagement",
    "Deliver a Professional Viewing Experience"
  ];

  const vlogProcess = [
    { step: 1, title: "Share Footage", desc: "Share your raw video footage." },
    { step: 2, title: "Tell Us Your Style", desc: "Tell us your editing style and goals." },
    { step: 3, title: "Editing & Enhancement", desc: "We organize, edit, and enhance your content." },
    { step: 4, title: "Add Elements", desc: "We add music, captions, effects, and branding." },
    { step: 5, title: "Final Delivery", desc: "Receive a polished, ready-to-publish vlog." }
  ];

  const industries = [
    "YouTubers & Content Creators", "Travel Bloggers", "Lifestyle Influencers", "Businesses & Startups", "Coaches & Consultants", "Fitness Trainers", "Food & Recipe Creators", "Educational Creators", "Real Estate Professionals", "Digital Marketing Agencies"
  ];

  return (
    <div className="vlog-editing-page-container">
      {/* Hero Section */}
      <section className="vlog-editing-hero">
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="/services/video-editing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Video Editing
          </Link>
        </div>
        <div className="container vlog-editing-hero-grid">
<div className="vlog-editing-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>FULL VLOG EDITING SERVICES</p>
            <h1 className="vlog-editing-hero-title">Turn Your Raw Footage&nbsp;into <br/><span>Engaging Vlogs</span></h1>
            <p className="vlog-editing-hero-desc">
            Create high-quality, engaging, and professional vlogs with our Full Vlog Editing Services. Whether you're a YouTuber, travel creator, lifestyle influencer, business owner, or brand, we transform your raw footage into captivating videos that keep viewers watching from start to finish.
          </p>
            
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
            Get Your Vlogs Edited Today
          </Link>
          </div>

          <div className="hero-image-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/Full Vlog Editing.webp" alt="Hero Image" style={{ width: '100%', maxWidth: '550px', height: 'auto', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))' }} />
          </div>
        </div>
      </section>

      {/* Our Vlog Editing Services */}
      <section className="vlog-editing-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Full Vlog Editing Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="vlog-editing-services-grid">
            {vlogServices.map((service, idx) => (
              <div key={idx} className="vlog-editing-service-card">
                <div className="vlog-editing-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & Why Choose Us */}
      <section className="vlog-editing-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
      <section className="vlog-editing-benefits-extra" style={{ padding: '5rem 0', backgroundColor: '#0a0a0c' }}>
        <div className="container">
            <div style={{ backgroundColor: '#121215', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ color: 'var(--accent-orange)', marginBottom: '2rem', fontSize: '2.2rem', textAlign: 'center' }}>Benefits of Professional Vlog Editing</h2>
              <div className="grid-2" style={{ gap: '2rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {benefits.slice(0, 4).map((benefit, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '1.2rem', color: '#aaa', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <FaVideo style={{ color: 'var(--accent-orange)', marginTop: '5px', flexShrink: 0 }} /> {benefit}
                      </li>
                    ))}
                  </ul>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {benefits.slice(4).map((benefit, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '1.2rem', color: '#aaa', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <FaVideo style={{ color: 'var(--accent-orange)', marginTop: '5px', flexShrink: 0 }} /> {benefit}
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
        </div>
      </section>

      {/* Our Editing Process */}
      <section className="vlog-editing-process-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Editing Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="vlog-editing-process-timeline">
            {vlogProcess.map((step, idx) => (
              <div key={idx} className="vlog-editing-step-card">
                <div className="vlog-editing-step-number">{step.step}</div>
                <div className="vlog-editing-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="vlog-editing-tools-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Industries We Serve</h2>
            <div className="title-underline mx-auto"></div>
            <p style={{ color: '#aaa', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our full vlog editing services are perfect for a wide range of creators and businesses:
            </p>
          </div>
          <div className="vlog-editing-tools-grid" style={{ justifyContent: 'center' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="vlog-editing-tool-tag">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="vlog-editing-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="vlog-editing-faqs">
            <details className="vlog-editing-faq-item">
              <summary>What types of vlogs do you edit?</summary>
              <p>We edit travel, lifestyle, daily, fitness, food, educational, business, family, event, and behind-the-scenes vlogs for YouTube and social media.</p>
            </details>
            <details className="vlog-editing-faq-item">
              <summary>Can you edit long-form YouTube videos?</summary>
              <p>Yes. We specialize in full-length YouTube vlog editing, from 5-minute videos to hour-long content, while maintaining an engaging pace.</p>
            </details>
            <details className="vlog-editing-faq-item">
              <summary>Do you add subtitles, music, and motion graphics?</summary>
              <p>Absolutely. We can add subtitles, licensed background music, motion graphics, transitions, logo animations, and visual effects to enhance your vlog.</p>
            </details>
            <details className="vlog-editing-faq-item">
              <summary>Which platforms do you optimize videos for?</summary>
              <p>We optimize videos for YouTube, Facebook, Instagram, TikTok, LinkedIn, and other digital platforms.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="vlog-editing-cta-section">
        <div className="container">
          <h2 className="vlog-editing-cta-title">Ready to Elevate Your Vlogs?</h2>
          <p className="vlog-editing-cta-desc">
            Transform your raw footage into compelling stories with our Professional Full Vlog Editing Services. We create visually stunning, audience-focused videos that help you grow your channel, strengthen your brand, and increase engagement.
          </p>
          <Link to="/contact" className="vlog-editing-cta-btn">
            Contact Us Today <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default VlogEditingPage;
