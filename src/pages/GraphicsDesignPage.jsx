import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPenNib, FaShareAlt, FaBullhorn, FaMap, FaBookOpen, FaAddressCard, FaImage, FaBoxOpen, FaUtensils, FaEnvelopeOpenText, FaChartPie, FaDesktop, FaYoutube, FaAd, FaLightbulb, FaCheckCircle, FaPlusCircle, FaPalette , FaPaintBrush, FaLaptopCode} from 'react-icons/fa';
import './GraphicsDesignPage.css';

const GraphicsDesignPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Professional Graphic Design Services | Creative Solutions";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Build a strong and memorable brand with our Professional Graphic Design Services. We create visually compelling designs that help businesses communicate their message.";
  }, []);

  const graphicServices = [
    { title: "Logo Design", icon: <FaPenNib /> },
    { title: "Social Media Post Design", icon: <FaShareAlt /> },
    { title: "Poster & Flyer Design", icon: <FaBullhorn /> },
    { title: "Flex Banner Design", icon: <FaMap /> },
    { title: "Brochure & Catalogue Design", icon: <FaBookOpen /> },
    { title: "Business Card Design", icon: <FaAddressCard /> },
    { title: "Banner & Billboard Design", icon: <FaImage /> },
    { title: "Packaging Design", icon: <FaBoxOpen /> },
    { title: "Menu Design", icon: <FaUtensils /> },
    { title: "Invitation Card Design", icon: <FaEnvelopeOpenText /> },
    { title: "Infographic Design", icon: <FaChartPie /> },
    { title: "Presentation Design", icon: <FaDesktop /> },
    { title: "Thumbnail Design", icon: <FaYoutube /> },
    { title: "YouTube Channel Branding", icon: <FaYoutube /> },
    { title: "Advertisement Creatives", icon: <FaAd /> },
    { title: "Custom Graphic Design Solutions", icon: <FaLightbulb /> },
  ];

  const whatsIncluded = [
    "100% Custom Graphic Designs",
    "Creative & Modern Layouts",
    "Brand-Focused Visual Identity",
    "High-Resolution Graphics",
    "Print-Ready & Digital Files",
    "Multiple File Formats (PNG, JPG, PDF, AI, SVG)",
    "Professional Typography & Color Selection",
    "Unlimited Revisions*",
    "Fast Turnaround Time"
  ];

  const whyChooseUs = [
    "Experienced Graphic Designers",
    "Creative & Unique Concepts",
    "Brand-Centered Design Approach",
    "High-Quality Design Standards",
    "Affordable Pricing",
    "On-Time Project Delivery",
    "Dedicated Customer Support",
    "Designs Optimized for Print & Digital Platforms"
  ];

  const benefits = [
    "Strengthen Your Brand Identity",
    "Increase Customer Engagement",
    "Improve Marketing Campaign Performance",
    "Build Trust and Credibility",
    "Create a Consistent Brand Image",
    "Boost Social Media Reach",
    "Drive More Leads and Sales",
    "Enhance Your Business's Professional Appearance"
  ];

  const graphicsProcess = [
    { step: 1, title: "Understand Goals", desc: "Understand your business goals and design requirements." },
    { step: 2, title: "Research", desc: "Research your industry and target audience." },
    { step: 3, title: "Create Concepts", desc: "Create unique design concepts." },
    { step: 4, title: "Refine Design", desc: "Refine the design based on your feedback." },
    { step: 5, title: "Final Delivery", desc: "Deliver high-quality files ready for print and digital use." }
  ];

  const industries = [
    "Startups & Entrepreneurs", "Small & Medium Businesses", "E-commerce Brands", "Digital Marketing Agencies", "Restaurants & Cafés", "Real Estate Companies", "Educational Institutions", "Healthcare Organizations", "Fashion & Beauty Brands", "Corporate Businesses", "Non-Profit Organizations"
  ];

  return (
    <div className="graphics-design-page-container">
      {/* Hero Section */}
      <section className="graphics-design-hero">
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="/services/video-editing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Video Editing
          </Link>
        </div>
        <div className="container graphics-design-hero-grid">
          <div className="graphics-design-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>GRAPHIC DESIGN SERVICES</p>
            <h1 className="graphics-design-hero-title">Creative Graphic Design Solutions <br/><span>for Your Brand</span></h1>
            <p className="graphics-design-hero-desc">
            Build a strong and memorable brand with our Professional Graphic Design Services. We create visually compelling designs that help businesses communicate their message, attract customers, and stand out in today's competitive market. From social media creatives and marketing materials to branding assets and print designs, our expert designers deliver creative solutions tailored to your business goals.
          </p>
            
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
            Elevate Your Brand Today
          </Link>
          </div>
          <div className="graphics-design-hero-image-wrapper">
            <div className="graphics-design-orbit-container">
              <div className="orbit-ring orbit-ring-1"></div>
              <div className="orbit-ring orbit-ring-2"></div>
              <div className="orbit-ring orbit-ring-3"></div>
              <img src="/Graphic Design.webp" alt="Hero Image" className="hero-orbit-image" />
              <div className="orbit-satellite sat-1">
                <FaPalette />
              </div>
              <div className="orbit-satellite sat-2">
                <FaPaintBrush />
              </div>
              <div className="orbit-satellite sat-3">
                <FaLaptopCode />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Graphic Design Services */}
      <section className="graphics-design-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Graphic Design Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="graphics-design-services-grid">
            {graphicServices.map((service, idx) => (
              <div key={idx} className="graphics-design-service-card">
                <div className="graphics-design-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & Why Choose Us */}
      <section className="graphics-design-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
              <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '1rem', fontStyle: 'italic' }}>*Revision policy depends on the selected package.</p>
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
      <section className="graphics-design-benefits-extra" style={{ padding: '5rem 0', backgroundColor: '#0a0a0c' }}>
        <div className="container">
            <div style={{ backgroundColor: '#121215', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ color: 'var(--accent-orange)', marginBottom: '2rem', fontSize: '2.2rem', textAlign: 'center' }}>Benefits of Professional Graphic Design</h2>
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
      <section className="graphics-design-process-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Design Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="graphics-design-process-timeline">
            {graphicsProcess.map((step, idx) => (
              <div key={idx} className="graphics-design-step-card">
                <div className="graphics-design-step-number">{step.step}</div>
                <div className="graphics-design-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="graphics-design-tools-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Industries We Serve</h2>
            <div className="title-underline mx-auto"></div>
            <p style={{ color: '#aaa', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our graphic design services are ideal for:
            </p>
          </div>
          <div className="graphics-design-tools-grid" style={{ justifyContent: 'center' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="graphics-design-tool-tag">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="graphics-design-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="graphics-design-faqs">
            <details className="graphics-design-faq-item">
              <summary>What graphic design services do you offer?</summary>
              <p>We provide logo design, social media graphics, posters, flyers, brochures, banners, business cards, packaging, presentations, thumbnails, and custom marketing materials.</p>
            </details>
            <details className="graphics-design-faq-item">
              <summary>Can you design graphics for both print and digital platforms?</summary>
              <p>Yes. We create high-quality designs optimized for websites, social media, email campaigns, digital advertising, and professional printing.</p>
            </details>
            <details className="graphics-design-faq-item">
              <summary>Will the designs match my brand identity?</summary>
              <p>Absolutely. Every design is customized using your brand colors, typography, logo, and messaging to ensure consistency across all marketing channels.</p>
            </details>
            <details className="graphics-design-faq-item">
              <summary>What file formats do you provide?</summary>
              <p>We deliver designs in PNG, JPG, PDF, AI, SVG, EPS, and other formats based on your project requirements.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="graphics-design-cta-section">
        <div className="container">
          <h2 className="graphics-design-cta-title">Bring Your Ideas to Life with Creative Design</h2>
          <p className="graphics-design-cta-desc">
            Professional design is essential for building a strong brand and making a lasting impression. Our Professional Graphic Design Services combine creativity, strategy, and innovation to help your business stand out across digital and print platforms.
          </p>
          <p className="graphics-design-cta-desc" style={{ marginTop: '1rem' }}>
            Whether you need branding materials, marketing creatives, social media graphics, or custom promotional designs, our team is ready to create visuals that engage your audience and drive business growth.
          </p>
          <Link to="/contact" className="graphics-design-cta-btn">
            Create Custom Designs Today <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default GraphicsDesignPage;
