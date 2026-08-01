import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaVideo, FaMobileAlt, FaBuilding, FaStore, FaTshirt, FaUtensils, FaHome, FaFilm, FaCalendarAlt, FaUserTie, FaShareAlt, FaChartLine, FaCheckCircle, FaPlusCircle, FaCameraRetro } from 'react-icons/fa';
import './ReelsShootPage.css';

const ReelsShootPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Professional Reels Shoot Services | Scroll-Stopping Reels";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Boost your online presence with our Professional Reels Shoot Services. We create high-quality, engaging, and trend-driven reels that help businesses attract more views.";
  }, []);

  const reelsServices = [
    { title: "Instagram Reels Production", icon: <FaMobileAlt /> },
    { title: "Facebook Reels Creation", icon: <FaShareAlt /> },
    { title: "YouTube Shorts Filming", icon: <FaVideo /> },
    { title: "TikTok Video Production", icon: <FaFilm /> },
    { title: "Business Promotional Reels", icon: <FaBuilding /> },
    { title: "Product Showcase Reels", icon: <FaStore /> },
    { title: "Brand Story Reels", icon: <FaChartLine /> },
    { title: "Behind-the-Scenes Videos", icon: <FaVideo /> },
    { title: "Lifestyle & Fashion Reels", icon: <FaTshirt /> },
    { title: "Food & Restaurant Reels", icon: <FaUtensils /> },
    { title: "Real Estate Reels", icon: <FaHome /> },
    { title: "Event Highlight Reels", icon: <FaCalendarAlt /> },
    { title: "Personal Branding Reels", icon: <FaUserTie /> },
    { title: "Corporate Reels", icon: <FaBuilding /> },
    { title: "Social Media Campaign Videos", icon: <FaShareAlt /> },
  ];

  const whatsIncluded = [
    "Professional Mobile or DSLR Video Shoot",
    "Creative Content Planning",
    "Trend-Based Reels Strategy",
    "Cinematic Camera Angles",
    "Professional Lighting Setup",
    "High-Quality Audio Recording",
    "Smooth Transitions & Motion Effects",
    "Color Grading & Video Enhancement",
    "Captions & Animated Text",
    "Background Music & Sound Effects",
    "HD, Full HD & 4K Video Delivery"
  ];

  const whyChooseUs = [
    "Experienced Content Creators",
    "Creative & Trend-Focused Videos",
    "Platform-Optimized Content",
    "Fast Turnaround Time",
    "High-Quality Visual Production",
    "Affordable Packages",
    "Customized Brand Storytelling",
    "Dedicated Customer Support"
  ];

  const benefits = [
    "Increase Brand Awareness",
    "Boost Social Media Engagement",
    "Reach More Potential Customers",
    "Improve Audience Retention",
    "Increase Website Traffic",
    "Generate More Leads & Sales",
    "Build a Strong Personal or Business Brand",
    "Stay Consistent with High-Quality Content"
  ];

  const reelsProcess = [
    { step: 1, title: "Understand Brand", desc: "Understand your brand and campaign goals." },
    { step: 2, title: "Creative Planning", desc: "Plan creative concepts and shooting locations." },
    { step: 3, title: "Capture Footage", desc: "Capture professional footage using DSLR or premium mobile cameras." },
    { step: 4, title: "Video Editing", desc: "Edit with trending transitions, captions, music, and effects." },
    { step: 5, title: "Final Delivery", desc: "Deliver ready-to-publish reels optimized for social media." }
  ];

  const industries = [
    "Startups & Small Businesses", "Digital Marketing Agencies", "E-commerce Brands", "Restaurants & Cafés", "Fashion & Beauty Brands", "Real Estate Companies", "Fitness Centers & Gyms", "Educational Institutions", "Healthcare Providers", "Influencers & Content Creators", "Corporate Businesses"
  ];

  return (
    <div className="reels-shoot-page-container">
      {/* Hero Section */}
      <section className="reels-shoot-hero">
        <div className="container">
          <p className="section-subtitle text-accent" style={{ marginBottom: '1rem' }}>REELS SHOOT SERVICES</p>
          <h1 className="reels-shoot-hero-title">Create Scroll-Stopping Reels That <br/><span>Grow Your Brand</span></h1>
          <p className="reels-shoot-hero-desc">
            Boost your online presence with our Professional Reels Shoot Services. We create high-quality, engaging, and trend-driven Instagram Reels, Facebook Reels, YouTube Shorts, and TikTok videos that help businesses, brands, and creators attract more views, followers, and customers. Our team combines creative storytelling, professional filming, and expert editing to produce short-form videos that capture attention and inspire action.
          </p>
          <p className="reels-shoot-hero-desc" style={{ marginBottom: '3rem' }}>
            Whether you're promoting a product, showcasing your services, or building a personal brand, we create reels that are optimized for maximum engagement across social media platforms.
          </p>
          <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem' }}>
            Book Your Reels Shoot
          </Link>
        </div>
      </section>

      {/* Our Reels Shoot Services */}
      <section className="reels-shoot-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Reels Shoot Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="reels-shoot-services-grid">
            {reelsServices.map((service, idx) => (
              <div key={idx} className="reels-shoot-service-card">
                <div className="reels-shoot-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & Why Choose Us */}
      <section className="reels-shoot-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
      <section className="reels-shoot-benefits-extra" style={{ padding: '5rem 0', backgroundColor: '#0a0a0c' }}>
        <div className="container">
            <div style={{ backgroundColor: '#121215', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ color: 'var(--accent-orange)', marginBottom: '2rem', fontSize: '2.2rem', textAlign: 'center' }}>Benefits of Professional Reels</h2>
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
      <section className="reels-shoot-process-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Reels Production Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="reels-shoot-process-timeline">
            {reelsProcess.map((step, idx) => (
              <div key={idx} className="reels-shoot-step-card">
                <div className="reels-shoot-step-number">{step.step}</div>
                <div className="reels-shoot-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="reels-shoot-tools-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Industries We Serve</h2>
            <div className="title-underline mx-auto"></div>
            <p style={{ color: '#aaa', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our reels shoot services are perfect for:
            </p>
          </div>
          <div className="reels-shoot-tools-grid" style={{ justifyContent: 'center' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="reels-shoot-tool-tag">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="reels-shoot-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="reels-shoot-faqs">
            <details className="reels-shoot-faq-item">
              <summary>Which platforms do you create reels for?</summary>
              <p>We create reels optimized for Instagram, Facebook, YouTube Shorts, TikTok, LinkedIn, and other social media platforms.</p>
            </details>
            <details className="reels-shoot-faq-item">
              <summary>Do you provide both shooting and editing?</summary>
              <p>Yes. We handle the complete process, including concept planning, video shooting, professional editing, captions, music, and final delivery.</p>
            </details>
            <details className="reels-shoot-faq-item">
              <summary>Can you create reels for businesses and personal brands?</summary>
              <p>Absolutely. We produce engaging reels for businesses, entrepreneurs, influencers, creators, and corporate organizations.</p>
            </details>
            <details className="reels-shoot-faq-item">
              <summary>What quality will the videos be delivered in?</summary>
              <p>We deliver videos in HD, Full HD, and 4K (where applicable), optimized for social media and digital marketing.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="reels-shoot-cta-section">
        <div className="container">
          <h2 className="reels-shoot-cta-title">Grow Your Brand with High-Impact Reels</h2>
          <p className="reels-shoot-cta-desc">
            Short-form videos are one of the most effective ways to connect with your audience and grow your brand online. Our Professional Reels Shoot Services combine creative production, strategic storytelling, and professional editing to create engaging content that drives views, engagement, and conversions.
          </p>
          <p className="reels-shoot-cta-desc" style={{ marginTop: '1rem' }}>
            Whether you're launching a new product, promoting your services, or building a strong social media presence, our team is ready to create reels that make your brand stand out.
          </p>
          <p className="reels-shoot-cta-desc" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
            Contact us today to book your professional reels shoot and create captivating content that delivers real business results.
          </p>
          <Link to="/contact" className="reels-shoot-cta-btn" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Book Your Shoot Now <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ReelsShootPage;
