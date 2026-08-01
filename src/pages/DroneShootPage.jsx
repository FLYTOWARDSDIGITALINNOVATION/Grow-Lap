import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHelicopter, FaVideo, FaHome, FaHardHat, FaHotel, FaRing, FaPlane, FaIndustry, FaSeedling, FaBriefcase, FaMapMarkedAlt, FaShareAlt, FaCheckCircle, FaPlusCircle, FaCameraRetro } from 'react-icons/fa';
import './DroneShootPage.css';

const DroneShootPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Professional Drone Shoot Services | Stunning Aerial Views";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Take your visuals to new heights with our Professional Drone Shoot Services. We provide high-quality aerial photography and cinematic drone videography.";
  }, []);

  const droneServices = [
    { title: "Aerial Photography", icon: <FaHelicopter /> },
    { title: "Drone Videography", icon: <FaVideo /> },
    { title: "Real Estate Drone Shoots", icon: <FaHome /> },
    { title: "Construction Site Monitoring", icon: <FaHardHat /> },
    { title: "Resort & Hotel Drone Photography", icon: <FaHotel /> },
    { title: "Event & Wedding Drone Coverage", icon: <FaRing /> },
    { title: "Tourism & Travel Drone Videos", icon: <FaPlane /> },
    { title: "Industrial & Commercial Drone Shoots", icon: <FaIndustry /> },
    { title: "Agricultural Drone Photography", icon: <FaSeedling /> },
    { title: "Corporate Promotional Videos", icon: <FaBriefcase /> },
    { title: "Land & Property Survey Shoots", icon: <FaMapMarkedAlt /> },
    { title: "Social Media Drone Content", icon: <FaShareAlt /> },
  ];

  const whatsIncluded = [
    "Professional Drone Photography & Videography",
    "Ultra HD, 4K & High-Resolution Footage",
    "Cinematic Aerial Camera Movements",
    "Professional Color Correction & Grading",
    "Smooth Stabilized Video Recording",
    "Creative Video Editing",
    "Royalty-Free Background Music",
    "Social Media & Website Optimized Videos",
    "Multiple File Formats",
    "Fast Digital Delivery"
  ];

  const whyChooseUs = [
    "Licensed & Experienced Drone Operators*",
    "Advanced Drone Equipment",
    "High-Quality Aerial Footage",
    "Creative Cinematic Shots",
    "Fast Turnaround Time",
    "Affordable Pricing",
    "Customized Shooting Plans",
    "Dedicated Customer Support"
  ];

  const benefits = [
    "Showcase Your Business from a Unique Perspective",
    "Create Eye-Catching Marketing Content",
    "Enhance Property & Real Estate Listings",
    "Improve Brand Visibility",
    "Capture Large Events Beautifully",
    "Produce High-Impact Promotional Videos",
    "Increase Audience Engagement Across Digital Platforms"
  ];

  const droneProcess = [
    { step: 1, title: "Understand Goals", desc: "Understand your project goals and shooting requirements." },
    { step: 2, title: "Plan & Prepare", desc: "Plan the location, flight path, and creative concept." },
    { step: 3, title: "Capture Footage", desc: "Capture high-quality aerial photos and videos using professional drones." },
    { step: 4, title: "Post-Production", desc: "Edit and enhance the footage with cinematic effects." },
    { step: 5, title: "Final Delivery", desc: "Deliver ready-to-use content for websites, social media, advertising, and presentations." }
  ];

  const industries = [
    "Real Estate Companies", "Construction & Infrastructure Firms", "Hotels & Resorts", "Tourism & Travel Agencies", "Event Management Companies", "Wedding Planners", "Agriculture & Farming Businesses", "Manufacturing Industries", "Corporate Organizations", "Digital Marketing Agencies"
  ];

  return (
    <div className="drone-shoot-page-container">
      {/* Hero Section */}
      <section className="drone-shoot-hero">
        <div className="container">
          <p className="section-subtitle text-accent" style={{ marginBottom: '1rem' }}>DRONE SHOOT SERVICES</p>
          <h1 className="drone-shoot-hero-title">Capture Stunning Aerial Views with <br/><span>Professional Drone Photography & Videography</span></h1>
          <p className="drone-shoot-hero-desc">
            Take your visuals to new heights with our Professional Drone Shoot Services. We provide high-quality aerial photography and cinematic drone videography for businesses, events, real estate, construction, tourism, and marketing campaigns. Using advanced drone technology, we capture breathtaking perspectives that help your brand stand out and leave a lasting impression.
          </p>
          <p className="drone-shoot-hero-desc" style={{ marginBottom: '3rem' }}>
            Whether you need aerial footage for a commercial project, event coverage, or promotional video, our experienced drone operators deliver stunning visuals with precision and creativity.
          </p>
          <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem' }}>
            Book Your Aerial Shoot
          </Link>
        </div>
      </section>

      {/* Our Drone Shoot Services */}
      <section className="drone-shoot-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Drone Shoot Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="drone-shoot-services-grid">
            {droneServices.map((service, idx) => (
              <div key={idx} className="drone-shoot-service-card">
                <div className="drone-shoot-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & Why Choose Us */}
      <section className="drone-shoot-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
              <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '1rem', fontStyle: 'italic' }}>*Drone operations are conducted in accordance with applicable local laws and regulations.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="drone-shoot-benefits-extra" style={{ padding: '5rem 0', backgroundColor: '#0a0a0c' }}>
        <div className="container">
            <div style={{ backgroundColor: '#121215', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ color: 'var(--accent-orange)', marginBottom: '2rem', fontSize: '2.2rem', textAlign: 'center' }}>Benefits of Professional Drone Photography</h2>
              <div className="grid-2" style={{ gap: '2rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {benefits.slice(0, 4).map((benefit, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '1.2rem', color: '#aaa', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <FaHelicopter style={{ color: 'var(--accent-orange)', marginTop: '5px', flexShrink: 0 }} /> {benefit}
                      </li>
                    ))}
                  </ul>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {benefits.slice(4).map((benefit, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '1.2rem', color: '#aaa', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <FaHelicopter style={{ color: 'var(--accent-orange)', marginTop: '5px', flexShrink: 0 }} /> {benefit}
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
        </div>
      </section>

      {/* Our Shooting Process */}
      <section className="drone-shoot-process-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Drone Shoot Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="drone-shoot-process-timeline">
            {droneProcess.map((step, idx) => (
              <div key={idx} className="drone-shoot-step-card">
                <div className="drone-shoot-step-number">{step.step}</div>
                <div className="drone-shoot-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="drone-shoot-tools-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Industries We Serve</h2>
            <div className="title-underline mx-auto"></div>
            <p style={{ color: '#aaa', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our drone shoot services are ideal for:
            </p>
          </div>
          <div className="drone-shoot-tools-grid" style={{ justifyContent: 'center' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="drone-shoot-tool-tag">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="drone-shoot-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="drone-shoot-faqs">
            <details className="drone-shoot-faq-item">
              <summary>What types of drone shoots do you offer?</summary>
              <p>We provide aerial photography, drone videography, real estate shoots, construction monitoring, wedding coverage, tourism videos, promotional content, and commercial drone services.</p>
            </details>
            <details className="drone-shoot-faq-item">
              <summary>Is drone shooting safe and legal?</summary>
              <p>Yes. We follow applicable aviation regulations and safety guidelines, and we operate only where drone flights are permitted.</p>
            </details>
            <details className="drone-shoot-faq-item">
              <summary>Can you edit the drone footage?</summary>
              <p>Absolutely. Every drone project includes professional video editing, color grading, stabilization, transitions, and music to create a polished final video.</p>
            </details>
            <details className="drone-shoot-faq-item">
              <summary>What file formats will I receive?</summary>
              <p>We deliver high-resolution photos in JPG or PNG and videos in MP4 or other requested formats, optimized for websites, social media, presentations, and advertising.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="drone-shoot-cta-section">
        <div className="container">
          <h2 className="drone-shoot-cta-title">Elevate Your Brand with Stunning Aerial Content</h2>
          <p className="drone-shoot-cta-desc">
            Aerial visuals provide a powerful way to showcase your business, property, event, or destination. Our Professional Drone Shoot Services combine advanced drone technology, creative storytelling, and expert editing to deliver cinematic content that captures attention and drives engagement.
          </p>
          <p className="drone-shoot-cta-desc" style={{ marginTop: '1rem' }}>
            Whether you need breathtaking aerial photography or professional drone videography, we're ready to create visuals that help your brand rise above the competition.
          </p>
          <p className="drone-shoot-cta-desc" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
            Contact us today to book your professional drone shoot and capture extraordinary aerial content that delivers lasting impact.
          </p>
          <Link to="/contact" className="drone-shoot-cta-btn" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Book Your Shoot Now <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default DroneShootPage;
