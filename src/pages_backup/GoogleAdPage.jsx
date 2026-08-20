import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaSearch, FaImage, FaShoppingCart, FaChartLine, FaYoutube, FaMobileAlt, FaMapMarkerAlt, FaMousePointer, FaKey, FaPen, FaLaptop, FaCode, FaVial, FaMoneyBillWave, FaChartBar, FaCheckCircle } from 'react-icons/fa';
import './GoogleAdPage.css';

const GoogleAdPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Google Ads Services | Professional PPC Management & Google Advertising";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Grow your business with expert Google Ads services. We manage Search, Display, Shopping, YouTube, and Performance Max campaigns to increase traffic, generate leads, and maximize ROI.";
  }, []);

  const googleServices = [
    { title: "Search Ads Campaign Management", icon: <FaSearch /> },
    { title: "Display Ads Campaigns", icon: <FaImage /> },
    { title: "Shopping Ads Management", icon: <FaShoppingCart /> },
    { title: "Performance Max Campaigns", icon: <FaChartLine /> },
    { title: "YouTube Ads Campaigns", icon: <FaYoutube /> },
    { title: "App Promotion Campaigns", icon: <FaMobileAlt /> },
    { title: "Local Services Ads", icon: <FaMapMarkerAlt /> },
    { title: "Remarketing & Retargeting", icon: <FaMousePointer /> },
    { title: "Keyword Research & Planning", icon: <FaKey /> },
    { title: "Ad Copywriting", icon: <FaPen /> },
    { title: "Landing Page Optimization", icon: <FaLaptop /> },
    { title: "Conversion Tracking Setup", icon: <FaCode /> },
    { title: "A/B Testing & Campaign Optimization", icon: <FaVial /> },
    { title: "Bid Strategy Management", icon: <FaMoneyBillWave /> },
    { title: "Monthly Performance Reporting", icon: <FaChartBar /> },
  ];

  const whyChooseUs = [
    "Google Ads Certified Experts",
    "Customized PPC Strategies",
    "High-Intent Keyword Targeting",
    "Optimized Ad Copy & Creatives",
    "Budget-Friendly Campaign Management",
    "Continuous Performance Monitoring",
    "Higher Click-Through Rates (CTR)",
    "Improved Conversion Rates",
    "Transparent Reporting",
    "Dedicated Support & Consultation"
  ];

  const googleProcess = [
    { step: 1, title: "Business & Competitor Analysis", desc: "We analyze your business, target audience, competitors, and marketing objectives to build an effective advertising strategy." },
    { step: 2, title: "Keyword Research", desc: "Our team identifies high-performing keywords with strong search intent to reach potential customers at the right time." },
    { step: 3, title: "Campaign Setup", desc: "We create optimized campaigns with compelling ad copy, relevant keywords, audience targeting, and effective bidding strategies." },
    { step: 4, title: "Conversion Tracking", desc: "We configure Google Analytics 4 (GA4), Google Tag Manager, and Google Ads conversion tracking to accurately measure campaign performance." },
    { step: 5, title: "Campaign Optimization", desc: "We continuously monitor and optimize keywords, bids, ad creatives, and targeting to improve performance and reduce advertising costs." },
    { step: 6, title: "Reporting & Insights", desc: "Receive detailed monthly reports with campaign performance, conversions, cost-per-click (CPC), click-through rate (CTR), and return on ad spend (ROAS)." }
  ];

  const industries = [
    "E-commerce", "Healthcare", "Real Estate", "Education", "Restaurants & Cafés", "Technology", "Finance", "Travel & Tourism", "Fashion & Beauty", "Manufacturing", "Local Businesses", "Startups & Enterprises"
  ];

  const tools = [
    "Google Ads", "Google Analytics 4 (GA4)", "Google Tag Manager", "Google Keyword Planner", "Google Search Console", "Looker Studio", "Google Merchant Center", "Google Trends", "SEMrush", "Ahrefs"
  ];

  return (
    <div className="google-page-container">
      {/* Hero Section */}
      <section className="google-hero">
        
        <div className="container">
          <Link to="/services/digital-marketing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Digital Marketing
          </Link>
        </div>
        <div className="container google-hero-grid">
          
          <div className="google-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>GOOGLE ADS SERVICES</p>
            <h1 className="google-hero-title">Drive Instant Traffic and Increase Conversions with <br/><span>Google Ads</span></h1>
            <p className="google-hero-desc">
              Reach customers exactly when they're searching for your products or services with our Professional Google Ads Services. We create high-performing Google Ads campaigns that increase website traffic, generate qualified leads, and maximize your return on investment (ROI).
            </p>
            <p className="google-hero-desc" style={{ marginBottom: '3rem' }}>
              Whether you're a local business, e-commerce store, or growing enterprise, our certified Google Ads specialists develop customized PPC (Pay-Per-Click) strategies to help you achieve your business goals and stay ahead of the competition.
            </p>
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
              Launch Your Google Ads Campaign Today
            </Link>
          </div>

          <div className="google-hero-image-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#fff', padding: '3rem', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" alt="Google Ads Services" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
            </div>
          </div>

        </div>
      </section>

      {/* Our Google Ads Services */}
      <section className="google-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Google Ads Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="google-services-grid">
            {googleServices.map((service, idx) => (
              <div key={idx} className="google-service-card">
                <div className="google-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Benefits */}
      <section className="google-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Why Choose Our Google Ads Services?</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {whyChooseUs.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: '#ccc', fontSize: '1.1rem' }}>
                    <FaCheckCircle style={{ color: 'var(--accent-orange)' }} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ backgroundColor: '#121215', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <h3 style={{ color: 'var(--accent-orange)', marginBottom: '1.5rem', fontSize: '2rem' }}>The Power of Google Ads</h3>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Google Ads helps your business appear at the top of Google Search results, allowing you to reach customers who are actively looking for your products or services.
              </p>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8' }}>
                With advanced targeting, measurable performance, and flexible budgeting, Google Ads delivers faster results, increases qualified traffic, and improves lead generation and sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Google Ads Process */}
      <section className="google-process-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Google Ads Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="google-process-timeline">
            {googleProcess.map((step, idx) => (
              <div key={idx} className="google-step-card">
                <div className="google-step-number">{step.step}</div>
                <div className="google-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Tools */}
      <section className="google-tools-section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Industries We Serve</h2>
              <div className="title-underline"></div>
              <div className="google-tools-grid">
                {industries.map((ind, idx) => (
                  <div key={idx} className="google-tool-tag">{ind}</div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Google Ads Tools We Use</h2>
              <div className="title-underline"></div>
              <div className="google-tools-grid">
                {tools.map((tool, idx) => (
                  <div key={idx} className="google-tool-tag" style={{ backgroundColor: 'rgba(255, 94, 0, 0.1)', borderColor: 'rgba(255, 94, 0, 0.3)' }}>{tool}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="google-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="google-faqs">
            <details className="google-faq-item">
              <summary>What is Google Ads?</summary>
              <p>Google Ads is Google's online advertising platform that allows businesses to display ads on Google Search, YouTube, Google Display Network, and other partner websites to reach potential customers.</p>
            </details>
            <details className="google-faq-item">
              <summary>How quickly can I see results?</summary>
              <p>Unlike SEO, Google Ads can generate traffic and leads as soon as your campaigns are approved and launched. Performance improves further through ongoing optimization.</p>
            </details>
            <details className="google-faq-item">
              <summary>How much should I spend on Google Ads?</summary>
              <p>Your advertising budget depends on your goals, industry, and competition. We create cost-effective campaigns that maximize your return on investment.</p>
            </details>
            <details className="google-faq-item">
              <summary>Do you provide campaign reports?</summary>
              <p>Yes. We provide detailed monthly reports with insights into clicks, impressions, conversions, cost, and recommendations for continuous improvement.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="google-cta-section">
        <div className="container">
          <h2 className="google-cta-title">Ready to Grow with Google Ads?</h2>
          <p className="google-cta-desc">
            Generate more leads, increase sales, and reach the right audience with our expert Google Ads management services. From keyword research and campaign setup to optimization and reporting, we help your business achieve measurable growth.
          </p>
          <Link to="/contact" className="google-cta-btn">
            Launch Your Google Ads Campaign Today <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default GoogleAdPage;
