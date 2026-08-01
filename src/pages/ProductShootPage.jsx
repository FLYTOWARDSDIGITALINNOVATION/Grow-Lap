import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCamera, FaShoppingBag, FaStore, FaTshirt, FaGem, FaUtensils, FaMobileAlt, FaImage, FaVideo, FaCheckCircle, FaPlusCircle, FaCameraRetro } from 'react-icons/fa';
import './ProductShootPage.css';

const ProductShootPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Professional Product Shoot Services | Showcase Your Products";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Make your products stand out with our Professional Product Shoot Services. High-quality product images are essential for attracting customers and increasing sales.";
  }, []);

  const productServices = [
    { title: "E-commerce Product Photography", icon: <FaShoppingBag /> },
    { title: "Amazon & Shopify Product Shoots", icon: <FaStore /> },
    { title: "Lifestyle Product Photography", icon: <FaCamera /> },
    { title: "White Background Product Photography", icon: <FaImage /> },
    { title: "Creative Product Photography", icon: <FaCameraRetro /> },
    { title: "360° Product Photography", icon: <FaStore /> },
    { title: "Product Commercial Video Shoots", icon: <FaVideo /> },
    { title: "Fashion & Apparel Photography", icon: <FaTshirt /> },
    { title: "Jewelry Product Photography", icon: <FaGem /> },
    { title: "Food & Beverage Product Photography", icon: <FaUtensils /> },
    { title: "Cosmetic & Beauty Product Shoots", icon: <FaCamera /> },
    { title: "Electronics Product Photography", icon: <FaMobileAlt /> },
  ];

  const whatsIncluded = [
    "Professional DSLR & Mirrorless Camera Shoot",
    "Studio & Lifestyle Photography",
    "Creative Lighting Setup",
    "Multiple Product Angles",
    "High-Resolution Images",
    "Background Removal & Replacement",
    "Color Correction & Image Retouching",
    "Product Video Recording",
    "Web & Print-Ready Files",
    "HD & 4K Video Delivery"
  ];

  const whyChooseUs = [
    "Experienced Product Photographers",
    "Creative Styling & Composition",
    "High-Quality Studio Equipment",
    "Fast Turnaround Time",
    "Affordable Pricing",
    "Brand-Focused Visual Content",
    "E-commerce Optimized Images",
    "Dedicated Customer Support"
  ];

  const benefits = [
    "Increase Online Sales",
    "Build Customer Trust",
    "Improve Product Presentation",
    "Enhance Brand Identity",
    "Boost Social Media Engagement",
    "Increase Click-Through Rates",
    "Create High-Converting Marketing Campaigns",
    "Strengthen Your E-commerce Store"
  ];

  const productProcess = [
    { step: 1, title: "Share Details", desc: "Share your product details and goals." },
    { step: 2, title: "Plan the Shoot", desc: "Plan the shoot style, background, and lighting." },
    { step: 3, title: "Capture Products", desc: "Capture professional product photos and videos." },
    { step: 4, title: "Post-Production", desc: "Edit and enhance every image for premium quality." },
    { step: 5, title: "Final Delivery", desc: "Deliver ready-to-use files optimized for web, social media, and print." }
  ];

  const industries = [
    "E-commerce Brands", "Amazon & Shopify Sellers", "Fashion & Apparel Brands", "Beauty & Cosmetic Companies", "Food & Beverage Businesses", "Electronics & Gadget Brands", "Jewelry Stores", "Furniture & Home Décor Brands", "Health & Wellness Products", "Startups & Small Businesses"
  ];

  return (
    <div className="product-shoot-page-container">
      {/* Hero Section */}
      <section className="product-shoot-hero">
        <div className="container">
          <p className="section-subtitle text-accent" style={{ marginBottom: '1rem' }}>PRODUCT SHOOT SERVICES</p>
          <h1 className="product-shoot-hero-title">Showcase Your Products with Stunning <br/><span>Professional Photography</span></h1>
          <p className="product-shoot-hero-desc">
            Make your products stand out with our Professional Product Shoot Services. High-quality product images are essential for attracting customers, building trust, and increasing sales. Our experienced photographers create visually appealing product photos and videos that highlight every detail, making your brand look professional across e-commerce platforms, websites, social media, and marketing campaigns.
          </p>
          <p className="product-shoot-hero-desc" style={{ marginBottom: '3rem' }}>
            Whether you're launching a new product or updating your online store, we deliver premium product photography tailored to your brand.
          </p>
          <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem' }}>
            Book Your Shoot Today
          </Link>
        </div>
      </section>

      {/* Our Product Shoot Services */}
      <section className="product-shoot-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Product Shoot Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="product-shoot-services-grid">
            {productServices.map((service, idx) => (
              <div key={idx} className="product-shoot-service-card">
                <div className="product-shoot-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & Why Choose Us */}
      <section className="product-shoot-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
      <section className="product-shoot-benefits-extra" style={{ padding: '5rem 0', backgroundColor: '#0a0a0c' }}>
        <div className="container">
            <div style={{ backgroundColor: '#121215', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ color: 'var(--accent-orange)', marginBottom: '2rem', fontSize: '2.2rem', textAlign: 'center' }}>Benefits of Professional Product Photography</h2>
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
      <section className="product-shoot-process-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Product Shoot Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="product-shoot-process-timeline">
            {productProcess.map((step, idx) => (
              <div key={idx} className="product-shoot-step-card">
                <div className="product-shoot-step-number">{step.step}</div>
                <div className="product-shoot-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="product-shoot-tools-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Industries We Serve</h2>
            <div className="title-underline mx-auto"></div>
            <p style={{ color: '#aaa', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our product shoot services are ideal for:
            </p>
          </div>
          <div className="product-shoot-tools-grid" style={{ justifyContent: 'center' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="product-shoot-tool-tag">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="product-shoot-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="product-shoot-faqs">
            <details className="product-shoot-faq-item">
              <summary>What types of products do you photograph?</summary>
              <p>We photograph fashion, cosmetics, electronics, food, jewelry, furniture, home décor, lifestyle products, and many other consumer goods.</p>
            </details>
            <details className="product-shoot-faq-item">
              <summary>Can you create product videos?</summary>
              <p>Yes. We offer professional product videos, promotional clips, 360° product showcases, and short-form content for websites and social media.</p>
            </details>
            <details className="product-shoot-faq-item">
              <summary>Are the images optimized for e-commerce platforms?</summary>
              <p>Absolutely. We provide images optimized for Amazon, Shopify, WooCommerce, Flipkart, Etsy, and other online marketplaces.</p>
            </details>
            <details className="product-shoot-faq-item">
              <summary>What file formats will I receive?</summary>
              <p>We deliver high-resolution images in JPG, PNG, and TIFF, along with videos in MP4 and other requested formats suitable for digital and print use.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-shoot-cta-section">
        <div className="container">
          <h2 className="product-shoot-cta-title">Showcase Your Products with Confidence</h2>
          <p className="product-shoot-cta-desc">
            Professional product photography is one of the most effective ways to increase customer confidence and drive sales. Our Professional Product Shoot Services combine creative photography, expert editing, and premium-quality visuals to help your products stand out in a competitive marketplace.
          </p>
          <p className="product-shoot-cta-desc" style={{ marginTop: '1rem' }}>
            Whether you need images for your website, online store, social media, or advertising campaigns, our team is ready to create compelling product visuals that elevate your brand and boost conversions.
          </p>
          <p className="product-shoot-cta-desc" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
            Contact us today to book your professional product shoot and showcase your products with stunning, sales-driven photography.
          </p>
          <Link to="/contact" className="product-shoot-cta-btn" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Book Your Shoot Now <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ProductShootPage;
