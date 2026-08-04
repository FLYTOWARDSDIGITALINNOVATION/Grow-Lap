import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBullhorn, FaStore, FaCalendarAlt, FaRocket, FaTags, FaBuilding, FaMap, FaVoteYea, FaGraduationCap, FaGift, FaUtensils, FaHome, FaCheckCircle, FaPlusCircle, FaImage , FaExpand, FaPaintBrush, FaPrint} from 'react-icons/fa';
import './FlexDesignPage.css';

const FlexDesignPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Professional Flex Banner Design Services | Stand Out";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Promote your business with Professional Flex Banner Design Services. We design creative, high-resolution flex banners for businesses, events, and promotions.";
  }, []);

  const flexServices = [
    { title: "Business Flex Banner Design", icon: <FaBullhorn /> },
    { title: "Shop Opening & Store Promotion Banners", icon: <FaStore /> },
    { title: "Event & Festival Flex Banners", icon: <FaCalendarAlt /> },
    { title: "Product Launch Banners", icon: <FaRocket /> },
    { title: "Sale & Discount Flex Designs", icon: <FaTags /> },
    { title: "Corporate & Office Banners", icon: <FaBuilding /> },
    { title: "Exhibition & Trade Show Banners", icon: <FaMap /> },
    { title: "Political Campaign Banners", icon: <FaVoteYea /> },
    { title: "Educational & Awareness Banners", icon: <FaGraduationCap /> },
    { title: "Birthday, Wedding & Celebration Flex Designs", icon: <FaGift /> },
    { title: "Restaurant & Café Promotional Banners", icon: <FaUtensils /> },
    { title: "Real Estate Flex Banner Design", icon: <FaHome /> },
  ];

  const whatsIncluded = [
    "100% Custom Banner Design",
    "High-Resolution Print-Ready Files",
    "Creative Layout & Professional Typography",
    "Brand Colors & Logo Integration",
    "Premium Graphics & Visual Elements",
    "Large Format Print Optimization",
    "Multiple Size Variations",
    "JPG, PNG & PDF File Formats",
    "Fast Revisions & Final Delivery"
  ];

  const whyChooseUs = [
    "Experienced Graphic Designers",
    "Creative & Modern Designs",
    "Customized for Your Brand",
    "High-Quality Print-Ready Output",
    "Quick Turnaround Time",
    "Affordable Pricing",
    "Attention-Grabbing Visuals",
    "Dedicated Customer Support"
  ];

  const benefits = [
    "Increase Brand Visibility",
    "Attract More Customers",
    "Promote Products & Services Effectively",
    "Enhance Outdoor Advertising",
    "Build Brand Recognition",
    "Improve Event & Campaign Promotions",
    "Create a Strong First Impression"
  ];

  const flexProcess = [
    { step: 1, title: "Understand Requirements", desc: "Understand your business goals and banner requirements." },
    { step: 2, title: "Collect Assets", desc: "Collect your logo, branding, images, and content." },
    { step: 3, title: "Custom Design", desc: "Design a custom flex banner that aligns with your brand." },
    { step: 4, title: "Revise Design", desc: "Revise the design based on your feedback." },
    { step: 5, title: "Final Delivery", desc: "Deliver high-quality, print-ready files for production." }
  ];

  const industries = [
    "Retail Stores", "Small & Medium Businesses", "Restaurants & Cafés", "Educational Institutions", "Healthcare Organizations", "Real Estate Companies", "Event Management Agencies", "Digital Marketing Agencies", "Fitness Centers & Gyms", "Corporate Businesses", "Political & Community Campaigns"
  ];

  return (
    <div className="flex-design-page-container">
      {/* Hero Section */}
      <section className="flex-design-hero">
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="/services/video-editing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Video Editing
          </Link>
        </div>
        <div className="container flex-design-hero-grid">
          <div className="flex-design-hero-image-wrapper">
            <div className="flex-design-orbit-container">
              <div className="orbit-ring orbit-ring-1"></div>
              <div className="orbit-ring orbit-ring-2"></div>
              <div className="orbit-ring orbit-ring-3"></div>
              <img src="/flex.webp" alt="Hero Image" className="hero-orbit-image" />
              <div className="orbit-satellite sat-1">
                <FaExpand />
              </div>
              <div className="orbit-satellite sat-2">
                <FaPaintBrush />
              </div>
              <div className="orbit-satellite sat-3">
                <FaPrint />
              </div>
            </div>
          </div>
          <div className="flex-design-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>FLEX BANNER DESIGN SERVICES</p>
            <h1 className="flex-design-hero-title">Create Impactful Flex Banner Designs <br/><span>for Your Business</span></h1>
            <p className="flex-design-hero-desc">
            Promote your business with Professional Flex Banner Design Services that capture attention and communicate your message effectively. We design creative, high-resolution flex banners for businesses, events, exhibitions, retail stores, political campaigns, and promotional activities.
          </p>
            
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
            Get Your Banner Designed
          </Link>
          </div>
        </div>
      </section>

      {/* Our Flex Banner Design Services */}
      <section className="flex-design-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Flex Banner Design Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="flex-design-services-grid">
            {flexServices.map((service, idx) => (
              <div key={idx} className="flex-design-service-card">
                <div className="flex-design-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & Why Choose Us */}
      <section className="flex-design-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
      <section className="flex-design-benefits-extra" style={{ padding: '5rem 0', backgroundColor: '#0a0a0c' }}>
        <div className="container">
            <div style={{ backgroundColor: '#121215', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ color: 'var(--accent-orange)', marginBottom: '2rem', fontSize: '2.2rem', textAlign: 'center' }}>Benefits of Professional Flex Banner Design</h2>
              <div className="grid-2" style={{ gap: '2rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {benefits.slice(0, 4).map((benefit, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '1.2rem', color: '#aaa', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <FaImage style={{ color: 'var(--accent-orange)', marginTop: '5px', flexShrink: 0 }} /> {benefit}
                      </li>
                    ))}
                  </ul>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {benefits.slice(4).map((benefit, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '1.2rem', color: '#aaa', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <FaImage style={{ color: 'var(--accent-orange)', marginTop: '5px', flexShrink: 0 }} /> {benefit}
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
        </div>
      </section>

      {/* Our Design Process */}
      <section className="flex-design-process-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Design Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="flex-design-process-timeline">
            {flexProcess.map((step, idx) => (
              <div key={idx} className="flex-design-step-card">
                <div className="flex-design-step-number">{step.step}</div>
                <div className="flex-design-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="flex-design-tools-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Industries We Serve</h2>
            <div className="title-underline mx-auto"></div>
            <p style={{ color: '#aaa', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our flex banner design services are ideal for:
            </p>
          </div>
          <div className="flex-design-tools-grid" style={{ justifyContent: 'center' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="flex-design-tool-tag">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="flex-design-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="flex-design-faqs">
            <details className="flex-design-faq-item">
              <summary>What types of flex banners do you design?</summary>
              <p>We design business promotion banners, event banners, shop opening banners, sale banners, exhibition displays, political banners, educational banners, and custom flex banners for any occasion.</p>
            </details>
            <details className="flex-design-faq-item">
              <summary>Can you create banners in custom sizes?</summary>
              <p>Yes. We design flex banners in any size based on your printing requirements, from small promotional banners to large outdoor hoardings.</p>
            </details>
            <details className="flex-design-faq-item">
              <summary>Will the banner match my brand identity?</summary>
              <p>Absolutely. We use your logo, brand colors, fonts, and messaging to create a professional and consistent design.</p>
            </details>
            <details className="flex-design-faq-item">
              <summary>What file formats will I receive?</summary>
              <p>We provide high-resolution print-ready files in PDF, JPG, PNG, and other formats as required by your printing partner.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex-design-cta-section">
        <div className="container">
          <h2 className="flex-design-cta-title">Promote Your Business with Stunning Flex Banners</h2>
          <p className="flex-design-cta-desc">
            A professionally designed flex banner is a powerful marketing tool that helps your business attract attention and communicate your message clearly. Our Professional Flex Banner Design Services deliver creative, high-quality, and print-ready designs that make your promotions more effective and memorable.
          </p>
          <Link to="/contact" className="flex-design-cta-btn">
            Get Your Banner Designed <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default FlexDesignPage;
