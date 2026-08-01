import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaVideo, FaFilm, FaHeart, FaRing, FaGlassCheers, FaCamera, FaPlane, FaUsers, FaInstagram, FaClosedCaptioning, FaCheckCircle, FaPlusCircle } from 'react-icons/fa';
import './WeddingEditingPage.css';

const WeddingEditingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Professional Wedding Video Editing Services | Timeless Films";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Relive your special day with our Professional Wedding Video Editing Services. We transform your raw wedding footage into beautifully crafted cinematic films.";
  }, []);

  const weddingServices = [
    { title: "Cinematic Wedding Film Editing", icon: <FaFilm /> },
    { title: "Full Wedding Video Editing", icon: <FaVideo /> },
    { title: "Wedding Highlight Reel Editing", icon: <FaHeart /> },
    { title: "Teaser & Trailer Videos", icon: <FaRing /> },
    { title: "Reception & Ceremony Editing", icon: <FaGlassCheers /> },
    { title: "Pre-Wedding & Engagement Video Editing", icon: <FaCamera /> },
    { title: "Drone Footage Editing", icon: <FaPlane /> },
    { title: "Multi-Camera Wedding Editing", icon: <FaUsers /> },
    { title: "Wedding Reels & Social Media Clips", icon: <FaInstagram /> },
    { title: "Subtitle & Caption Integration", icon: <FaClosedCaptioning /> },
  ];

  const whatsIncluded = [
    "Professional Video Trimming & Sequencing",
    "Cinematic Storytelling",
    "Color Correction & Color Grading",
    "Audio Cleanup & Noise Reduction",
    "Licensed Background Music",
    "Smooth Transitions & Visual Effects",
    "Motion Graphics & Animated Titles",
    "Slow Motion & Speed Ramping",
    "Intro & Outro Design",
    "HD, Full HD & 4K Video Export"
  ];

  const whyChooseUs = [
    "Experienced Wedding Video Editors",
    "Cinematic & Emotional Storytelling",
    "Fast Turnaround Time",
    "Premium Editing Quality",
    "Personalized Editing Style",
    "Secure File Handling",
    "Affordable Pricing",
    "Dedicated Customer Support"
  ];

  const benefits = [
    "Preserve Precious Memories Forever",
    "Create a Beautiful Cinematic Experience",
    "Share Stunning Wedding Highlights with Family & Friends",
    "Enhance Video Quality with Professional Editing",
    "Save Time with Expert Post-Production",
    "Receive Ready-to-Share Videos for Every Platform"
  ];

  const weddingProcess = [
    { step: 1, title: "Upload Footage", desc: "Upload your raw wedding footage." },
    { step: 2, title: "Share Your Style", desc: "Share your preferred editing style and music." },
    { step: 3, title: "Organize & Edit", desc: "We organize, edit, and enhance every important moment." },
    { step: 4, title: "Cinematic Enhancements", desc: "We add cinematic effects, transitions, titles, and audio enhancements." },
    { step: 5, title: "Final Delivery", desc: "Receive your professionally edited wedding film ready for viewing and sharing." }
  ];

  const industries = [
    "Couples", "Wedding Videographers", "Wedding Photography Studios", "Event Management Companies", "Freelance Filmmakers", "Wedding Production Agencies"
  ];

  return (
    <div className="wedding-editing-page-container">
      {/* Hero Section */}
      <section className="wedding-editing-hero">
        <div className="container">
          <p className="section-subtitle text-accent" style={{ marginBottom: '1rem' }}>WEDDING VIDEO EDITING SERVICES</p>
          <h1 className="wedding-editing-hero-title">Turn Your Wedding Memories into <br/><span>Timeless Films</span></h1>
          <p className="wedding-editing-hero-desc">
            Relive your special day with our Professional Wedding Video Editing Services. We transform your raw wedding footage into beautifully crafted cinematic films that capture every emotion, smile, and unforgettable moment.
          </p>
          <p className="wedding-editing-hero-desc" style={{ marginBottom: '3rem' }}>
            Whether you're a couple, wedding videographer, or event company, we deliver high-quality wedding videos that tell your unique love story. Our expert editors combine cinematic storytelling, seamless transitions, color grading, audio enhancement, motion graphics, and licensed background music to create elegant wedding films you'll cherish forever.
          </p>
          <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem' }}>
            Create Your Wedding Film Today
          </Link>
        </div>
      </section>

      {/* Our Wedding Editing Services */}
      <section className="wedding-editing-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Wedding Video Editing Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="wedding-editing-services-grid">
            {weddingServices.map((service, idx) => (
              <div key={idx} className="wedding-editing-service-card">
                <div className="wedding-editing-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & Why Choose Us */}
      <section className="wedding-editing-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
      <section className="wedding-editing-benefits-extra" style={{ padding: '5rem 0', backgroundColor: '#0a0a0c' }}>
        <div className="container">
            <div style={{ backgroundColor: '#121215', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ color: 'var(--accent-orange)', marginBottom: '2rem', fontSize: '2.2rem', textAlign: 'center' }}>Benefits of Professional Wedding Video Editing</h2>
              <div className="grid-2" style={{ gap: '2rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '1.2rem', color: '#aaa', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <FaVideo style={{ color: 'var(--accent-orange)', marginTop: '5px', flexShrink: 0 }} /> {benefit}
                      </li>
                    ))}
                  </ul>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {benefits.slice(3).map((benefit, idx) => (
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
      <section className="wedding-editing-process-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Editing Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="wedding-editing-process-timeline">
            {weddingProcess.map((step, idx) => (
              <div key={idx} className="wedding-editing-step-card">
                <div className="wedding-editing-step-number">{step.step}</div>
                <div className="wedding-editing-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="wedding-editing-tools-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Who We Serve</h2>
            <div className="title-underline mx-auto"></div>
            <p style={{ color: '#aaa', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our wedding editing services are perfect for:
            </p>
          </div>
          <div className="wedding-editing-tools-grid" style={{ justifyContent: 'center' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="wedding-editing-tool-tag">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="wedding-editing-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="wedding-editing-faqs">
            <details className="wedding-editing-faq-item">
              <summary>What wedding videos do you edit?</summary>
              <p>We edit full wedding films, highlight videos, teaser trailers, engagement videos, reception videos, ceremony recordings, and social media wedding reels.</p>
            </details>
            <details className="wedding-editing-faq-item">
              <summary>Can you edit multi-camera wedding footage?</summary>
              <p>Yes. We professionally synchronize and edit footage from multiple cameras and drone shots to create a seamless cinematic experience.</p>
            </details>
            <details className="wedding-editing-faq-item">
              <summary>Do you provide color grading and audio enhancement?</summary>
              <p>Absolutely. Every wedding video includes professional color grading, audio cleanup, background music integration, and visual enhancements for a polished final result.</p>
            </details>
            <details className="wedding-editing-faq-item">
              <summary>What video quality do you deliver?</summary>
              <p>We deliver videos in HD, Full HD, and 4K formats, optimized for YouTube, Instagram, Facebook, and personal viewing.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wedding-editing-cta-section">
        <div className="container">
          <h2 className="wedding-editing-cta-title">Create a Wedding Film You'll Treasure Forever</h2>
          <p className="wedding-editing-cta-desc">
            Your wedding is one of life's most memorable moments. Let our Professional Wedding Video Editing Services transform your footage into a timeless cinematic film that captures every emotion and detail. Whether you need a complete wedding film, a highlight reel, or social media edits, we're here to bring your memories to life.
          </p>
          <Link to="/contact" className="wedding-editing-cta-btn">
            Contact Us Today <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default WeddingEditingPage;
