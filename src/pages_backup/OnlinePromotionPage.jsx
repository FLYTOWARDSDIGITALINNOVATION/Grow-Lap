import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShareAlt, FaGlobe, FaSearch, FaChartLine, FaGoogle, FaBullhorn, FaYoutube, FaEnvelope, FaWhatsapp, FaPenNib, FaUserFriends, FaComments, FaMapMarkerAlt, FaShoppingCart, FaUsers, FaCheckCircle } from 'react-icons/fa';
import './OnlinePromotionPage.css';

const OnlinePromotionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Online Promotion Services | Digital Marketing Solutions to Grow Your Business";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Boost your business with professional online promotion services. Increase brand awareness, drive website traffic, generate leads, and grow sales through SEO, Google Ads, Meta Ads, social media marketing, and more.";
  }, []);

  const onlineServices = [
    { title: "Social Media Promotion", icon: <FaShareAlt /> },
    { title: "Website Promotion", icon: <FaGlobe /> },
    { title: "Search Engine Marketing (SEM)", icon: <FaSearch /> },
    { title: "Search Engine Optimization (SEO)", icon: <FaChartLine /> },
    { title: "Google Ads Campaigns", icon: <FaGoogle /> },
    { title: "Meta Ads (Facebook & Instagram)", icon: <FaBullhorn /> },
    { title: "YouTube Marketing", icon: <FaYoutube /> },
    { title: "Email Marketing", icon: <FaEnvelope /> },
    { title: "WhatsApp Marketing", icon: <FaWhatsapp /> },
    { title: "Content Marketing", icon: <FaPenNib /> },
    { title: "Influencer Marketing", icon: <FaUserFriends /> },
    { title: "Online Reputation Management", icon: <FaComments /> },
    { title: "Local Business Promotion", icon: <FaMapMarkerAlt /> },
    { title: "E-commerce Promotion", icon: <FaShoppingCart /> },
    { title: "Lead Generation Campaigns", icon: <FaUsers /> },
  ];

  const whyChooseUs = [
    "Customized Digital Marketing Strategies",
    "Multi-Platform Brand Promotion",
    "Targeted Audience Reach",
    "Increased Website Traffic",
    "Higher Lead Generation",
    "Improved Brand Visibility",
    "Data-Driven Campaign Optimization",
    "Cost-Effective Marketing Solutions",
    "Transparent Performance Reporting",
    "Dedicated Marketing Experts"
  ];

  const onlineProcess = [
    { step: 1, title: "Business Analysis", desc: "We understand your business goals, target audience, and competitors to create a tailored promotion strategy." },
    { step: 2, title: "Strategy Development", desc: "Our team develops a customized online marketing plan using the best channels for your business." },
    { step: 3, title: "Campaign Creation", desc: "We create engaging content, eye-catching creatives, and optimized campaigns to attract your ideal customers." },
    { step: 4, title: "Promotion & Distribution", desc: "Your campaigns are launched across search engines, social media platforms, email, and other digital channels to maximize reach." },
    { step: 5, title: "Performance Optimization", desc: "We monitor campaign performance, analyze key metrics, and optimize strategies to improve results and reduce costs." },
    { step: 6, title: "Reporting & Growth", desc: "Receive detailed performance reports with actionable insights to support continuous business growth." }
  ];

  const industries = [
    "E-commerce", "Healthcare", "Real Estate", "Education", "Restaurants & Cafés", "Fashion & Beauty", "Travel & Tourism", "Technology", "Finance", "Manufacturing", "Startups", "Small & Medium Businesses"
  ];

  const tools = [
    "Google Analytics 4 (GA4)", "Google Search Console", "Google Ads", "Meta Ads Manager", "Canva Pro", "Adobe Photoshop", "Adobe Premiere Pro", "Mailchimp", "Google Tag Manager", "Looker Studio", "SEMrush", "Ahrefs"
  ];

  return (
    <div className="online-page-container">
      {/* Hero Section */}
      <section className="online-hero">
        
        <div className="container">
          <Link to="/services/digital-marketing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Digital Marketing
          </Link>
        </div>
        <div className="container online-hero-grid">
          
          <div className="online-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>ONLINE PROMOTION SERVICES</p>
            <h1 className="online-hero-title">Grow Your Brand with <br/><span>Powerful Online Promotion</span></h1>
            <p className="online-hero-desc">
              Expand your online presence and connect with your target audience through our Professional Online Promotion Services. We help businesses increase brand awareness, drive website traffic, generate quality leads, and boost sales using effective digital marketing strategies across multiple online platforms.
            </p>
            <p className="online-hero-desc" style={{ marginBottom: '3rem' }}>
              Whether you're launching a new business, promoting a product, or scaling an established brand, our customized online promotion solutions are designed to deliver measurable results and long-term growth.
            </p>
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
              Start Promoting Your Business Today
            </Link>
          </div>

          <div className="online-hero-image-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#fff', padding: '3rem', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
              <img src="/promotion-and-planning-icon-concept-vector.jpg" alt="Online Promotion Services" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
            </div>
          </div>

        </div>
      </section>

      {/* Our Online Promotion Services */}
      <section className="online-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Online Promotion Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="online-services-grid">
            {onlineServices.map((service, idx) => (
              <div key={idx} className="online-service-card">
                <div className="online-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Benefits */}
      <section className="online-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Why Choose Our Online Promotion Services?</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {whyChooseUs.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: '#ccc', fontSize: '1.1rem' }}>
                    <FaCheckCircle style={{ color: 'var(--accent-orange)' }} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ backgroundColor: '#121215', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <h3 style={{ color: 'var(--accent-orange)', marginBottom: '1.5rem', fontSize: '2rem' }}>The Power of Online Promotion</h3>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Online promotion helps your business reach a wider audience, build brand credibility, increase website traffic, generate qualified leads, and improve customer engagement.
              </p>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8' }}>
                With targeted marketing campaigns and measurable performance, you can achieve sustainable growth while maximizing your marketing investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Online Promotion Process */}
      <section className="online-process-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Online Promotion Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="online-process-timeline">
            {onlineProcess.map((step, idx) => (
              <div key={idx} className="online-step-card">
                <div className="online-step-number">{step.step}</div>
                <div className="online-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Tools */}
      <section className="online-tools-section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Industries We Serve</h2>
              <div className="title-underline"></div>
              <div className="online-tools-grid">
                {industries.map((ind, idx) => (
                  <div key={idx} className="online-tool-tag">{ind}</div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Tools We Use</h2>
              <div className="title-underline"></div>
              <div className="online-tools-grid">
                {tools.map((tool, idx) => (
                  <div key={idx} className="online-tool-tag" style={{ backgroundColor: 'rgba(255, 94, 0, 0.1)', borderColor: 'rgba(255, 94, 0, 0.3)' }}>{tool}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="online-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="online-faqs">
            <details className="online-faq-item">
              <summary>What are Online Promotion Services?</summary>
              <p>Online promotion services use digital channels such as search engines, social media, email, and paid advertising to increase your brand's visibility, attract customers, and grow your business.</p>
            </details>
            <details className="online-faq-item">
              <summary>Which platforms do you promote on?</summary>
              <p>We promote businesses across Google, Facebook, Instagram, YouTube, LinkedIn, WhatsApp, email, and other relevant online platforms based on your goals.</p>
            </details>
            <details className="online-faq-item">
              <summary>Can online promotion help generate leads?</summary>
              <p>Yes. Our targeted campaigns are designed to reach the right audience, increase engagement, and generate high-quality leads and conversions.</p>
            </details>
            <details className="online-faq-item">
              <summary>Do you provide performance reports?</summary>
              <p>Yes. We provide regular reports with key metrics such as website traffic, impressions, clicks, leads, conversions, and campaign performance.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="online-cta-section">
        <div className="container">
          <h2 className="online-cta-title">Ready to Promote Your Business Online?</h2>
          <p className="online-cta-desc">
            Take your business to the next level with our professional online promotion services. We create data-driven marketing campaigns that increase visibility, attract new customers, and deliver measurable results.
          </p>
          <Link to="/contact" className="online-cta-btn">
            Start Promoting Your Business Today <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default OnlinePromotionPage;
