import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPenNib, FaBuilding, FaRocket, FaBriefcase, FaGem, FaClock, FaCat, FaFont, FaBold, FaIcons, FaSyncAlt, FaCheckCircle, FaPlusCircle, FaPalette , FaLightbulb} from 'react-icons/fa';
import './LogoDesignPage.css';

const LogoDesignPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Professional Logo Design Services | Define Your Brand";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Create a Unique Logo That Defines Your Brand. Our Professional Logo Design Services help businesses create memorable, modern, and impactful logos.";
  }, []);

  const logoServices = [
    { title: "Custom Logo Design", icon: <FaPenNib /> },
    { title: "Business Logo Design", icon: <FaBriefcase /> },
    { title: "Startup Logo Design", icon: <FaRocket /> },
    { title: "Corporate Logo Design", icon: <FaBuilding /> },
    { title: "Minimalist Logo Design", icon: <FaClock /> },
    { title: "Modern Logo Design", icon: <FaPalette /> },
    { title: "Luxury Logo Design", icon: <FaGem /> },
    { title: "Mascot Logo Design", icon: <FaCat /> },
    { title: "Monogram Logo Design", icon: <FaFont /> },
    { title: "Typography & Wordmark Logos", icon: <FaBold /> },
    { title: "Icon & Symbol Logo Design", icon: <FaIcons /> },
    { title: "Logo Redesign & Brand Refresh", icon: <FaSyncAlt /> },
  ];

  const whatsIncluded = [
    "100% Custom Logo Concepts",
    "Creative & Unique Designs",
    "Multiple Design Concepts",
    "Unlimited Revisions*",
    "High-Resolution Files",
    "Vector Source Files (AI, EPS, SVG, PDF)",
    "PNG with Transparent Background",
    "JPG & Web-Optimized Formats",
    "Full Color, Black & White Versions",
    "Brand Color & Typography Recommendations"
  ];

  const whyChooseUs = [
    "Experienced Creative Designers",
    "Unique & Original Concepts",
    "Brand-Focused Design Strategy",
    "Fast Turnaround Time",
    "Scalable Vector Files",
    "Professional Quality",
    "Affordable Pricing",
    "Dedicated Customer Support"
  ];

  const benefits = [
    "Build a Strong Brand Identity",
    "Increase Brand Recognition",
    "Create a Memorable First Impression",
    "Establish Trust and Credibility",
    "Maintain Consistency Across All Platforms",
    "Stand Out from Competitors",
    "Strengthen Marketing & Advertising Campaigns"
  ];

  const logoProcess = [
    { step: 1, title: "Understand Goals", desc: "Understand your business, industry, and goals." },
    { step: 2, title: "Research", desc: "Research your target audience and competitors." },
    { step: 3, title: "Create Concepts", desc: "Create unique logo concepts." },
    { step: 4, title: "Refine Design", desc: "Refine the selected design based on your feedback." },
    { step: 5, title: "Final Delivery", desc: "Deliver the final logo in multiple formats for print and digital use." }
  ];

  const industries = [
    "Startups", "Small & Medium Businesses", "E-commerce Brands", "Digital Marketing Agencies", "Restaurants & Cafés", "Healthcare Providers", "Educational Institutions", "Real Estate Companies", "Fashion & Beauty Brands", "Technology Companies", "Personal Brands & Influencers"
  ];

  return (
    <div className="logo-design-page-container">
      {/* Hero Section */}
      <section className="logo-design-hero">
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="/services/video-editing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Video Editing
          </Link>
        </div>
        <div className="container logo-design-hero-grid">
          <div className="logo-design-hero-image-wrapper">
            <div className="logo-design-orbit-container">
              <div className="orbit-ring orbit-ring-1"></div>
              <div className="orbit-ring orbit-ring-2"></div>
              <div className="orbit-ring orbit-ring-3"></div>
              <img src="/logo.webp" alt="Hero Image" className="hero-orbit-image" />
              <div className="orbit-satellite sat-1">
                <FaPenNib />
              </div>
              <div className="orbit-satellite sat-2">
                <FaPalette />
              </div>
              <div className="orbit-satellite sat-3">
                <FaLightbulb />
              </div>
            </div>
          </div>
          <div className="logo-design-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>LOGO DESIGN SERVICES</p>
            <h1 className="logo-design-hero-title">Create a Unique Logo That <br/><span>Defines Your Brand</span></h1>
            <p className="logo-design-hero-desc">
            Your logo is the face of your business and the foundation of your brand identity. Our Professional Logo Design Services help businesses create memorable, modern, and impactful logos that leave a lasting impression. Whether you're launching a startup, rebranding an existing business, or building a personal brand, we design custom logos that reflect your vision and connect with your target audience.
          </p>
            
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
            Get Your Custom Logo Today
          </Link>
          </div>
        </div>
      </section>

      {/* Our Logo Design Services */}
      <section className="logo-design-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Logo Design Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="logo-design-services-grid">
            {logoServices.map((service, idx) => (
              <div key={idx} className="logo-design-service-card">
                <div className="logo-design-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & Why Choose Us */}
      <section className="logo-design-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
              <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '1rem', fontStyle: 'italic' }}>*Revision policy may vary depending on the selected package.</p>
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
      <section className="logo-design-benefits-extra" style={{ padding: '5rem 0', backgroundColor: '#0a0a0c' }}>
        <div className="container">
            <div style={{ backgroundColor: '#121215', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ color: 'var(--accent-orange)', marginBottom: '2rem', fontSize: '2.2rem', textAlign: 'center' }}>Benefits of a Professional Logo</h2>
              <div className="grid-2" style={{ gap: '2rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {benefits.slice(0, 4).map((benefit, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '1.2rem', color: '#aaa', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <FaPalette style={{ color: 'var(--accent-orange)', marginTop: '5px', flexShrink: 0 }} /> {benefit}
                      </li>
                    ))}
                  </ul>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {benefits.slice(4).map((benefit, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '1.2rem', color: '#aaa', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <FaPalette style={{ color: 'var(--accent-orange)', marginTop: '5px', flexShrink: 0 }} /> {benefit}
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
        </div>
      </section>

      {/* Our Design Process */}
      <section className="logo-design-process-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Design Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="logo-design-process-timeline">
            {logoProcess.map((step, idx) => (
              <div key={idx} className="logo-design-step-card">
                <div className="logo-design-step-number">{step.step}</div>
                <div className="logo-design-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="logo-design-tools-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Industries We Serve</h2>
            <div className="title-underline mx-auto"></div>
            <p style={{ color: '#aaa', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our logo design services are ideal for:
            </p>
          </div>
          <div className="logo-design-tools-grid" style={{ justifyContent: 'center' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="logo-design-tool-tag">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="logo-design-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="logo-design-faqs">
            <details className="logo-design-faq-item">
              <summary>Do you create custom logos?</summary>
              <p>Yes. Every logo is designed from scratch to match your brand identity, values, and business goals.</p>
            </details>
            <details className="logo-design-faq-item">
              <summary>What file formats will I receive?</summary>
              <p>You'll receive high-quality files in PNG, JPG, SVG, PDF, AI, and EPS formats, making your logo suitable for both digital and print use.</p>
            </details>
            <details className="logo-design-faq-item">
              <summary>Can you redesign my existing logo?</summary>
              <p>Absolutely. We offer professional logo redesign services to modernize your existing logo while preserving your brand identity.</p>
            </details>
            <details className="logo-design-faq-item">
              <summary>Will my logo work across all platforms?</summary>
              <p>Yes. We design responsive, scalable logos that look great on websites, social media profiles, business cards, packaging, signage, and promotional materials.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="logo-design-cta-section">
        <div className="container">
          <h2 className="logo-design-cta-title">Build a Brand That Gets Noticed</h2>
          <p className="logo-design-cta-desc">
            A professionally designed logo is more than just a graphic—it's the visual identity of your business. Our Professional Logo Design Services help you create a distinctive, memorable, and timeless logo that builds trust, strengthens your brand, and supports long-term business growth.
          </p>
          <Link to="/contact" className="logo-design-cta-btn">
            Create Your Custom Logo <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default LogoDesignPage;
