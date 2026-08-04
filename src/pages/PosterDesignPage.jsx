import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBullhorn, FaCalendarAlt, FaRocket, FaShareAlt, FaBuilding, FaTags, FaUtensils, FaGraduationCap, FaHeartbeat, FaHome, FaFilm, FaPenNib, FaCheckCircle, FaPlusCircle, FaImage , FaPalette, FaPrint} from 'react-icons/fa';
import './PosterDesignPage.css';

const PosterDesignPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Professional Poster Design Services | Elevate Your Brand";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Make a lasting impression with our Professional Poster Design Services. We create visually stunning, creative, and high-impact posters that effectively promote your business.";
  }, []);

  const posterServices = [
    { title: "Business Promotional Posters", icon: <FaBullhorn /> },
    { title: "Event & Festival Poster Design", icon: <FaCalendarAlt /> },
    { title: "Product Launch Posters", icon: <FaRocket /> },
    { title: "Social Media Poster Design", icon: <FaShareAlt /> },
    { title: "Corporate & Brand Posters", icon: <FaBuilding /> },
    { title: "Sale & Offer Posters", icon: <FaTags /> },
    { title: "Restaurant & Café Posters", icon: <FaUtensils /> },
    { title: "Educational & Training Posters", icon: <FaGraduationCap /> },
    { title: "Healthcare & Awareness Posters", icon: <FaHeartbeat /> },
    { title: "Real Estate Marketing Posters", icon: <FaHome /> },
    { title: "Movie & Entertainment Posters", icon: <FaFilm /> },
    { title: "Custom Poster Design", icon: <FaPenNib /> },
  ];

  const whatsIncluded = [
    "100% Custom Poster Design",
    "Creative Layout & Visual Composition",
    "Brand-Aligned Colors & Typography",
    "High-Quality Graphics & Icons",
    "Print-Ready & Digital Formats",
    "Social Media Optimized Sizes",
    "High-Resolution Files",
    "Multiple File Formats (JPG, PNG, PDF)",
    "Fast Revisions & Final Delivery"
  ];

  const whyChooseUs = [
    "Professional Graphic Designers",
    "Unique & Creative Designs",
    "Customized for Your Brand",
    "Fast Turnaround Time",
    "High-Resolution Print Quality",
    "Affordable Pricing",
    "Marketing-Focused Visuals",
    "Dedicated Customer Support"
  ];

  const benefits = [
    "Increase Brand Visibility",
    "Attract More Customers",
    "Promote Products & Services Effectively",
    "Boost Event Attendance",
    "Improve Marketing Campaign Performance",
    "Deliver Clear & Engaging Messages",
    "Build a Strong Brand Identity"
  ];

  const posterProcess = [
    { step: 1, title: "Understand Goals", desc: "Understand your business goals and design requirements." },
    { step: 2, title: "Gather Assets", desc: "Gather your branding elements, content, and images." },
    { step: 3, title: "Concept Creation", desc: "Create a custom poster concept." },
    { step: 4, title: "Refine Design", desc: "Refine the design based on your feedback." },
    { step: 5, title: "Final Delivery", desc: "Deliver high-quality files ready for print and digital use." }
  ];

  const industries = [
    "Startups & Small Businesses", "Digital Marketing Agencies", "Retail & E-commerce Brands", "Restaurants & Cafés", "Educational Institutions", "Healthcare Organizations", "Real Estate Companies", "Event Management Companies", "Fitness Centers & Gyms", "Fashion & Beauty Brands", "Corporate Businesses"
  ];

  return (
    <div className="poster-design-page-container">
      {/* Hero Section */}
      <section className="poster-design-hero">
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="/services/video-editing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Video Editing
          </Link>
        </div>
        <div className="container poster-design-hero-grid">
          <div className="poster-design-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>POSTER DESIGN SERVICES</p>
            <h1 className="poster-design-hero-title">Eye-Catching Poster Designs That <br/><span>Elevate Your Brand</span></h1>
            <p className="poster-design-hero-desc">
            Make a lasting impression with our Professional Poster Design Services. We create visually stunning, creative, and high-impact posters that effectively promote your business, event, product, or campaign. Whether you need posters for print or digital platforms, our custom designs are crafted to capture attention, communicate your message, and inspire action.
          </p>
            
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
            Get Your Custom Poster Today
          </Link>
          </div>
          <div className="poster-design-hero-image-wrapper">
            <div className="poster-design-orbit-container">
              <div className="orbit-ring orbit-ring-1"></div>
              <div className="orbit-ring orbit-ring-2"></div>
              <div className="orbit-ring orbit-ring-3"></div>
              <img src="/poster.webp" alt="Hero Image" className="hero-orbit-image" />
              <div className="orbit-satellite sat-1">
                <FaImage />
              </div>
              <div className="orbit-satellite sat-2">
                <FaPalette />
              </div>
              <div className="orbit-satellite sat-3">
                <FaPrint />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Poster Design Services */}
      <section className="poster-design-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Poster Design Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="poster-design-services-grid">
            {posterServices.map((service, idx) => (
              <div key={idx} className="poster-design-service-card">
                <div className="poster-design-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & Why Choose Us */}
      <section className="poster-design-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
      <section className="poster-design-benefits-extra" style={{ padding: '5rem 0', backgroundColor: '#0a0a0c' }}>
        <div className="container">
            <div style={{ backgroundColor: '#121215', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ color: 'var(--accent-orange)', marginBottom: '2rem', fontSize: '2.2rem', textAlign: 'center' }}>Benefits of Professional Poster Design</h2>
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
      <section className="poster-design-process-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Design Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="poster-design-process-timeline">
            {posterProcess.map((step, idx) => (
              <div key={idx} className="poster-design-step-card">
                <div className="poster-design-step-number">{step.step}</div>
                <div className="poster-design-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="poster-design-tools-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Industries We Serve</h2>
            <div className="title-underline mx-auto"></div>
            <p style={{ color: '#aaa', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our poster design services are perfect for:
            </p>
          </div>
          <div className="poster-design-tools-grid" style={{ justifyContent: 'center' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="poster-design-tool-tag">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="poster-design-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="poster-design-faqs">
            <details className="poster-design-faq-item">
              <summary>What types of posters do you design?</summary>
              <p>We design promotional posters, event posters, business advertisements, product launch posters, restaurant menus, educational posters, awareness campaigns, and social media posters.</p>
            </details>
            <details className="poster-design-faq-item">
              <summary>Can you design posters for both print and digital use?</summary>
              <p>Yes. We create posters optimized for high-quality printing as well as digital platforms such as websites, Instagram, Facebook, LinkedIn, and WhatsApp.</p>
            </details>
            <details className="poster-design-faq-item">
              <summary>Will the design match my brand identity?</summary>
              <p>Absolutely. Every poster is customized using your brand colors, fonts, logo, and messaging to maintain a consistent brand image.</p>
            </details>
            <details className="poster-design-faq-item">
              <summary>What file formats will I receive?</summary>
              <p>We provide posters in JPG, PNG, PDF, and other formats based on your project requirements.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="poster-design-cta-section">
        <div className="container">
          <h2 className="poster-design-cta-title">Promote Your Brand with Stunning Poster Designs</h2>
          <p className="poster-design-cta-desc">
            A professionally designed poster can capture attention, communicate your message, and drive results. Our Professional Poster Design Services help businesses create impactful marketing materials that engage audiences and strengthen brand recognition.
          </p>
          <Link to="/contact" className="poster-design-cta-btn">
            Create Custom Posters Today <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default PosterDesignPage;
