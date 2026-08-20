import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCamera, FaShoppingCart, FaStore, FaMagic, FaPalette, FaUser, FaHeart, FaHome, FaImages, FaWrench, FaShareAlt, FaCopy, FaCheckCircle, FaPlusCircle, FaImage , FaCameraRetro} from 'react-icons/fa';
import './PhotoEditingPage.css';

const PhotoEditingPage = () => {
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
    document.title = "Professional Photo Editing Services | Enhance Every Image";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Transform your photos into stunning, high-quality visuals with our Professional Photo Editing Services. We deliver expertly edited images that capture attention.";
  }, []);

  const photoServices = [
    { title: "Portrait Photo Editing", icon: <FaUser /> },
    { title: "Product Photo Editing", icon: <FaShoppingCart /> },
    { title: "E-commerce Image Editing", icon: <FaStore /> },
    { title: "Background Removal & Replacement", icon: <FaMagic /> },
    { title: "Color Correction & Color Grading", icon: <FaPalette /> },
    { title: "Skin Retouching & Beauty Editing", icon: <FaCamera /> },
    { title: "Wedding & Event Photo Editing", icon: <FaHeart /> },
    { title: "Real Estate Photo Enhancement", icon: <FaHome /> },
    { title: "Image Restoration & Repair", icon: <FaWrench /> },
    { title: "Photo Manipulation & Creative Editing", icon: <FaImages /> },
    { title: "Social Media Image Editing", icon: <FaShareAlt /> },
    { title: "Batch Photo Editing", icon: <FaCopy /> },
  ];

  const whatsIncluded = [
    "Professional Color Correction",
    "Exposure & Lighting Enhancement",
    "Skin Retouching & Blemish Removal",
    "Object & Background Removal",
    "Image Cropping & Resizing",
    "Shadow & Reflection Enhancement",
    "Sharpness & Noise Reduction",
    "Advanced Photo Retouching",
    "High-Resolution Image Export",
    "Web & Print-Ready Formats"
  ];

  const whyChooseUs = [
    "Experienced Professional Editors",
    "High-Quality Image Enhancement",
    "Fast Turnaround Time",
    "Affordable Pricing",
    "Customized Editing to Match Your Brand",
    "Consistent Quality Across All Images",
    "Secure & Confidential File Handling",
    "Dedicated Customer Support"
  ];

  const benefits = [
    "Improve Brand Image",
    "Increase Product Sales",
    "Create Eye-Catching Marketing Materials",
    "Enhance Social Media Engagement",
    "Deliver High-Quality Visual Content",
    "Save Time with Expert Editing",
    "Build Customer Trust with Professional Images"
  ];

  const photoProcess = [
    { step: 1, title: "Upload Photos", desc: "Upload your photos." },
    { step: 2, title: "Share Requirements", desc: "Share your editing requirements and style preferences." },
    { step: 3, title: "Expert Editing", desc: "Our experts professionally edit and enhance your images." },
    { step: 4, title: "Quality Review", desc: "We review every detail to ensure premium quality." },
    { step: 5, title: "Final Delivery", desc: "Receive high-resolution, ready-to-use edited photos." }
  ];

  const industries = [
    "E-commerce Stores", "Professional Photographers", "Fashion & Beauty Brands", "Real Estate Companies", "Restaurants & Cafés", "Digital Marketing Agencies", "Travel & Hospitality Businesses", "Corporate Organizations", "Influencers & Content Creators", "Educational Institutions"
  ];

  return (
    <div className="photo-editing-page-container">
      {/* Hero Section */}
      <section className="photo-editing-hero">
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="/services/video-editing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Video Editing
          </Link>
        </div>
        <div className="container photo-editing-hero-grid">
<div className="photo-editing-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>PHOTO EDITING SERVICES</p>
            <h1 className="photo-editing-hero-title">Enhance Every Image&nbsp;with <br/><span>Professional Photo Editing</span></h1>
            <p className="photo-editing-hero-desc">
            Transform your photos into stunning, high-quality visuals with our Professional Photo Editing Services. Whether you're a business, photographer, e-commerce brand, real estate agency, or content creator, we deliver expertly edited images that capture attention and leave a lasting impression.
          </p>
            
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
            Transform Your Photos Today
          </Link>
          </div>

          <div className="hero-image-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/photo editing.webp" alt="Hero Image" style={{ width: '100%', maxWidth: '550px', height: 'auto', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))' }} />
          </div>
        </div>
      </section>

      {/* Our Photo Editing Services */}
      <section className="photo-editing-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Photo Editing Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="photo-editing-services-grid">
            {photoServices.map((service, idx) => (
              <div key={idx} className="photo-editing-service-card">
                <div className="photo-editing-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & Why Choose Us */}
      <section className="photo-editing-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
      <section className="photo-editing-benefits-extra" style={{ padding: '5rem 0', backgroundColor: '#0a0a0c' }}>
        <div className="container">
            <div style={{ backgroundColor: '#121215', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ color: 'var(--accent-orange)', marginBottom: '2rem', fontSize: '2.2rem', textAlign: 'center' }}>Benefits of Professional Photo Editing</h2>
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

      {/* Our Editing Process */}
      <section className="photo-editing-process-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Editing Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="photo-editing-process-timeline">
            {photoProcess.map((step, idx) => (
              <div key={idx} className="photo-editing-step-card">
                <div className="photo-editing-step-number">{step.step}</div>
                <div className="photo-editing-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="photo-editing-tools-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Industries We Serve</h2>
            <div className="title-underline mx-auto"></div>
            <p style={{ color: '#aaa', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our photo editing services are ideal for:
            </p>
          </div>
          <div className="photo-editing-tools-grid" style={{ justifyContent: 'center' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="photo-editing-tool-tag">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="photo-editing-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="photo-editing-faqs">
            <details className="photo-editing-faq-item">
              <summary>What types of photos do you edit?</summary>
              <p>We edit portraits, product photos, wedding photos, event images, real estate photos, fashion photography, social media images, and commercial photography.</p>
            </details>
            <details className="photo-editing-faq-item">
              <summary>Can you remove or replace backgrounds?</summary>
              <p>Yes. We provide professional background removal and replacement services for product photos, portraits, and marketing images.</p>
            </details>
            <details className="photo-editing-faq-item">
              <summary>Do you edit images for e-commerce websites?</summary>
              <p>Absolutely. We optimize product images for Amazon, Shopify, WooCommerce, Flipkart, Etsy, and other online marketplaces.</p>
            </details>
            <details className="photo-editing-faq-item">
              <summary>What file formats do you deliver?</summary>
              <p>We deliver edited images in JPEG, PNG, TIFF, PSD (on request), and other formats based on your requirements.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="photo-editing-cta-section">
        <div className="container">
          <h2 className="photo-editing-cta-title">Bring Your Photos to Life</h2>
          <p className="photo-editing-cta-desc">
            Professional images create a powerful first impression. Our Professional Photo Editing Services help you enhance image quality, strengthen your brand identity, and attract more customers with visually stunning photographs.
          </p>
          <Link to="/contact" className="photo-editing-cta-btn">
            Enhance Your Photos Now <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default PhotoEditingPage;
