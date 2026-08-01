import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCamera, FaBriefcase, FaShoppingBag, FaCalendarAlt, FaHeart, FaBirthdayCake, FaTshirt, FaUtensils, FaHome, FaTree, FaShareAlt, FaVideo, FaCheckCircle, FaPlusCircle, FaCameraRetro } from 'react-icons/fa';
import './DslrShootPage.css';

const DslrShootPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Professional DSLR Camera Shoot Services | Capture Every Moment";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Create lasting memories and powerful visual content with our Professional DSLR Camera Shoot Services. We provide high-quality DSLR photography and videography.";
  }, []);

  const dslrServices = [
    { title: "Corporate Photography & Videography", icon: <FaBriefcase /> },
    { title: "Product Photography", icon: <FaShoppingBag /> },
    { title: "Brand & Commercial Shoots", icon: <FaCamera /> },
    { title: "Event Photography & Videography", icon: <FaCalendarAlt /> },
    { title: "Wedding & Engagement Shoots", icon: <FaHeart /> },
    { title: "Birthday & Special Occasion Coverage", icon: <FaBirthdayCake /> },
    { title: "Fashion & Portfolio Photography", icon: <FaTshirt /> },
    { title: "Food Photography", icon: <FaUtensils /> },
    { title: "Real Estate Photography", icon: <FaHome /> },
    { title: "Indoor & Outdoor Photo Shoots", icon: <FaTree /> },
    { title: "Social Media Content Creation", icon: <FaShareAlt /> },
    { title: "Promotional Video Shoots", icon: <FaVideo /> },
  ];

  const whatsIncluded = [
    "Professional DSLR Camera Coverage",
    "High-Resolution Photos & Videos",
    "Creative Composition & Lighting",
    "Indoor & Outdoor Shooting",
    "Cinematic Camera Angles",
    "Professional Photo & Video Editing",
    "Color Correction & Retouching",
    "Social Media Optimized Content",
    "HD, Full HD & 4K Delivery",
    "Digital File Delivery"
  ];

  const whyChooseUs = [
    "Experienced Professional Photographers",
    "High-End DSLR Equipment",
    "Creative & Cinematic Approach",
    "High-Quality Image & Video Output",
    "Fast Turnaround Time",
    "Affordable Pricing",
    "Customized Photography Packages",
    "Dedicated Customer Support"
  ];

  const benefits = [
    "Showcase Your Brand Professionally",
    "Capture High-Quality Images & Videos",
    "Improve Social Media Engagement",
    "Enhance Marketing Campaigns",
    "Build Customer Trust",
    "Preserve Special Moments Beautifully",
    "Create Premium Visual Content for Your Business"
  ];

  const dslrProcess = [
    { step: 1, title: "Understand Needs", desc: "Understand your photography or videography requirements." },
    { step: 2, title: "Plan the Shoot", desc: "Plan the shoot location, style, and schedule." },
    { step: 3, title: "Capture the Moment", desc: "Capture professional photos and videos using DSLR equipment." },
    { step: 4, title: "Post-Production", desc: "Edit and enhance every image and video." },
    { step: 5, title: "Final Delivery", desc: "Deliver high-quality files ready for print, websites, and social media." }
  ];

  const industries = [
    "Businesses & Startups", "E-commerce Brands", "Restaurants & Cafés", "Fashion & Beauty Brands", "Real Estate Companies", "Educational Institutions", "Event Management Companies", "Corporate Organizations", "Influencers & Content Creators", "Wedding & Event Clients"
  ];

  return (
    <div className="dslr-shoot-page-container">
      {/* Hero Section */}
      <section className="dslr-shoot-hero">
        <div className="container">
          <p className="section-subtitle text-accent" style={{ marginBottom: '1rem' }}>DSLR SHOOT SERVICES</p>
          <h1 className="dslr-shoot-hero-title">Capture Every Moment with Stunning <br/><span>DSLR Photography & Videography</span></h1>
          <p className="dslr-shoot-hero-desc">
            Create lasting memories and powerful visual content with our Professional DSLR Camera Shoot Services. We provide high-quality DSLR photography and videography for businesses, brands, events, and individuals. Whether you need a corporate shoot, product photography, wedding coverage, promotional videos, or social media content, our experienced team delivers sharp, creative, and professionally edited visuals that make an impact.
          </p>
          <p className="dslr-shoot-hero-desc" style={{ marginBottom: '3rem' }}>
            Using advanced DSLR cameras, professional lighting, and creative composition, we ensure every shot reflects your brand, story, and vision.
          </p>
          <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem' }}>
            Book Your Shoot Today
          </Link>
        </div>
      </section>

      {/* Our DSLR Camera Shoot Services */}
      <section className="dslr-shoot-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our DSLR Camera Shoot Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="dslr-shoot-services-grid">
            {dslrServices.map((service, idx) => (
              <div key={idx} className="dslr-shoot-service-card">
                <div className="dslr-shoot-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & Why Choose Us */}
      <section className="dslr-shoot-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
      <section className="dslr-shoot-benefits-extra" style={{ padding: '5rem 0', backgroundColor: '#0a0a0c' }}>
        <div className="container">
            <div style={{ backgroundColor: '#121215', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ color: 'var(--accent-orange)', marginBottom: '2rem', fontSize: '2.2rem', textAlign: 'center' }}>Benefits of Professional DSLR Photography</h2>
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
      <section className="dslr-shoot-process-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Shooting Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="dslr-shoot-process-timeline">
            {dslrProcess.map((step, idx) => (
              <div key={idx} className="dslr-shoot-step-card">
                <div className="dslr-shoot-step-number">{step.step}</div>
                <div className="dslr-shoot-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="dslr-shoot-tools-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Industries We Serve</h2>
            <div className="title-underline mx-auto"></div>
            <p style={{ color: '#aaa', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our DSLR camera shoot services are ideal for:
            </p>
          </div>
          <div className="dslr-shoot-tools-grid" style={{ justifyContent: 'center' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="dslr-shoot-tool-tag">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="dslr-shoot-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="dslr-shoot-faqs">
            <details className="dslr-shoot-faq-item">
              <summary>What types of DSLR shoots do you offer?</summary>
              <p>We provide product photography, corporate shoots, events, weddings, commercial shoots, food photography, real estate photography, fashion shoots, and promotional video production.</p>
            </details>
            <details className="dslr-shoot-faq-item">
              <summary>Do you provide both photography and videography?</summary>
              <p>Yes. We offer professional DSLR photography and videography services, including cinematic video production and post-production editing.</p>
            </details>
            <details className="dslr-shoot-faq-item">
              <summary>Will the photos and videos be edited?</summary>
              <p>Absolutely. Every project includes professional editing, color correction, retouching, and optimization to ensure the best possible quality.</p>
            </details>
            <details className="dslr-shoot-faq-item">
              <summary>What formats will I receive?</summary>
              <p>We deliver high-resolution images in JPG or PNG and videos in MP4 or other requested formats, optimized for websites, social media, and print.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dslr-shoot-cta-section">
        <div className="container">
          <h2 className="dslr-shoot-cta-title">Capture Moments That Leave a Lasting Impression</h2>
          <p className="dslr-shoot-cta-desc">
            High-quality visuals are essential for building a strong brand and preserving life's most important moments. Our Professional DSLR Camera Shoot Services combine creativity, technical expertise, and professional editing to deliver stunning photography and videography tailored to your needs.
          </p>
          <p className="dslr-shoot-cta-desc" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
            Contact us today to book your DSLR camera shoot and create exceptional visual content that inspires, engages, and delivers results.
          </p>
          <Link to="/contact" className="dslr-shoot-cta-btn" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Book Your Shoot Now <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default DslrShootPage;
