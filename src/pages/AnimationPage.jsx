import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaFilm, FaCube, FaMagic, FaChalkboardTeacher, FaPenNib, FaShoppingCart, FaShareAlt, FaBullhorn, FaUserAlt, FaChartBar, FaDesktop, FaYoutube, FaAd, FaLightbulb, FaCheckCircle, FaPlusCircle, FaVideo , FaPlayCircle} from 'react-icons/fa';
import './AnimationPage.css';

const AnimationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Professional Animation Services | Creative Animation";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Capture your audience's attention with our Professional Animation Services. We create engaging, high-quality animations that help businesses communicate.";
  }, []);

  const animationServices = [
    { title: "2D Animation", icon: <FaFilm /> },
    { title: "3D Animation", icon: <FaCube /> },
    { title: "Motion Graphics Animation", icon: <FaMagic /> },
    { title: "Explainer Video Animation", icon: <FaChalkboardTeacher /> },
    { title: "Whiteboard Animation", icon: <FaPenNib /> },
    { title: "Logo Animation", icon: <FaLightbulb /> },
    { title: "Product Animation", icon: <FaShoppingCart /> },
    { title: "Social Media Animation", icon: <FaShareAlt /> },
    { title: "Promotional Video Animation", icon: <FaBullhorn /> },
    { title: "Character Animation", icon: <FaUserAlt /> },
    { title: "Infographic Animation", icon: <FaChartBar /> },
    { title: "Corporate Presentation Animation", icon: <FaDesktop /> },
    { title: "YouTube Intro & Outro Animation", icon: <FaYoutube /> },
    { title: "Animated Advertisements", icon: <FaAd /> },
    { title: "Custom Animation Solutions", icon: <FaLightbulb /> },
  ];

  const whatsIncluded = [
    "Custom Animation Concepts",
    "Professional Storyboarding",
    "Smooth Motion Graphics",
    "Creative Visual Effects",
    "Voiceover & Background Music Integration",
    "Text Animation & Kinetic Typography",
    "Brand Colors & Logo Integration",
    "HD, Full HD & 4K Video Export",
    "Multiple File Formats (MP4, MOV, GIF, WebM)",
    "Revisions & Quality Assurance"
  ];

  const whyChooseUs = [
    "Experienced Animation Designers",
    "Creative & Engaging Storytelling",
    "High-Quality Visuals",
    "Fast Turnaround Time",
    "Customized Animation Solutions",
    "Affordable Pricing",
    "Optimized for Digital Platforms",
    "Dedicated Customer Support"
  ];

  const benefits = [
    "Increase Brand Awareness",
    "Simplify Complex Concepts",
    "Improve Audience Engagement",
    "Boost Social Media Performance",
    "Increase Website Conversions",
    "Enhance Product Demonstrations",
    "Strengthen Marketing Campaigns",
    "Create Memorable Customer Experiences"
  ];

  const animationProcess = [
    { step: 1, title: "Understand Goals", desc: "Understand your goals and project requirements." },
    { step: 2, title: "Concept & Storyboard", desc: "Develop a creative concept and storyboard." },
    { step: 3, title: "Design Assets", desc: "Design illustrations and visual assets." },
    { step: 4, title: "Animation", desc: "Animate scenes with smooth transitions and effects." },
    { step: 5, title: "Audio Integration", desc: "Add voiceover, music, and sound effects." },
    { step: 6, title: "Final Delivery", desc: "Deliver a polished animation ready for web, social media, or presentations." }
  ];

  const industries = [
    "Startups & Small Businesses", "Digital Marketing Agencies", "E-commerce Brands", "Educational Institutions", "Healthcare Organizations", "Real Estate Companies", "Technology & SaaS Companies", "Corporate Businesses", "Content Creators & Influencers", "Non-Profit Organizations"
  ];

  return (
    <div className="animation-page-container">
      {/* Hero Section */}
      <section className="animation-hero">
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="/services/video-editing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Video Editing
          </Link>
        </div>
        <div className="container animation-hero-grid">
          <div className="animation-hero-image-wrapper">
            <div className="animation-orbit-container">
              <div className="orbit-ring orbit-ring-1"></div>
              <div className="orbit-ring orbit-ring-2"></div>
              <div className="orbit-ring orbit-ring-3"></div>
              <img src="/Animation.webp" alt="Hero Image" className="hero-orbit-image" />
              <div className="orbit-satellite sat-1">
                <FaFilm />
              </div>
              <div className="orbit-satellite sat-2">
                <FaMagic />
              </div>
              <div className="orbit-satellite sat-3">
                <FaPlayCircle />
              </div>
            </div>
          </div>
          <div className="animation-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>ANIMATION SERVICES</p>
            <h1 className="animation-hero-title">Bring Your Ideas to Life with <br/><span>Creative Animation</span></h1>
            <p className="animation-hero-desc">
            Capture your audience's attention with our Professional Animation Services. We create engaging, high-quality animations that help businesses communicate complex ideas, promote products, and strengthen their brand identity. Whether you need explainer videos, promotional animations, logo animations, or social media content, our creative team delivers visually compelling animations that leave a lasting impression.
          </p>
            
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
            Bring Your Ideas to Life
          </Link>
          </div>
        </div>
      </section>

      {/* Our Animation Services */}
      <section className="animation-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Animation Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="animation-services-grid">
            {animationServices.map((service, idx) => (
              <div key={idx} className="animation-service-card">
                <div className="animation-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & Why Choose Us */}
      <section className="animation-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
      <section className="animation-benefits-extra" style={{ padding: '5rem 0', backgroundColor: '#0a0a0c' }}>
        <div className="container">
            <div style={{ backgroundColor: '#121215', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ color: 'var(--accent-orange)', marginBottom: '2rem', fontSize: '2.2rem', textAlign: 'center' }}>Benefits of Professional Animation</h2>
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

      {/* Our Animation Process */}
      <section className="animation-process-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Animation Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="animation-process-timeline">
            {animationProcess.map((step, idx) => (
              <div key={idx} className="animation-step-card">
                <div className="animation-step-number">{step.step}</div>
                <div className="animation-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="animation-tools-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Industries We Serve</h2>
            <div className="title-underline mx-auto"></div>
            <p style={{ color: '#aaa', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our animation services are ideal for:
            </p>
          </div>
          <div className="animation-tools-grid" style={{ justifyContent: 'center' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="animation-tool-tag">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="animation-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="animation-faqs">
            <details className="animation-faq-item">
              <summary>What types of animation do you create?</summary>
              <p>We create 2D animation, 3D animation, explainer videos, motion graphics, logo animations, promotional videos, product animations, whiteboard animations, and social media animations.</p>
            </details>
            <details className="animation-faq-item">
              <summary>Can you create animations for social media?</summary>
              <p>Yes. We design animations optimized for Instagram, Facebook, YouTube, LinkedIn, TikTok, and other digital platforms.</p>
            </details>
            <details className="animation-faq-item">
              <summary>Do you provide voiceovers and background music?</summary>
              <p>Absolutely. We can include professional voiceovers, royalty-free background music, sound effects, and subtitles to enhance your animation.</p>
            </details>
            <details className="animation-faq-item">
              <summary>What file formats do you deliver?</summary>
              <p>We provide high-quality animation files in MP4, MOV, GIF, WebM, and other formats based on your project requirements.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="animation-cta-section">
        <div className="container">
          <h2 className="animation-cta-title">Elevate Your Brand with Professional Animation</h2>
          <p className="animation-cta-desc">
            Animation is one of the most effective ways to capture attention, explain your message, and connect with your audience. Our Professional Animation Services help businesses create engaging visual content that increases brand awareness, drives customer engagement, and supports business growth.
          </p>
          <p className="animation-cta-desc" style={{ marginTop: '1rem' }}>
            Whether you need an explainer video, product animation, logo animation, or social media content, our team is ready to bring your vision to life with creative, high-quality animations.
          </p>
          <p className="animation-cta-desc" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
            Contact us today to create professional animations that make your brand stand out and deliver lasting impact.
          </p>
          <Link to="/contact" className="animation-cta-btn" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Get Started With Animation <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AnimationPage;
