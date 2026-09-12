import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaSearch, FaChartLine, FaCogs, FaRocket, FaGlobe, FaBullhorn, 
  FaMobileAlt, FaBuilding, FaStore, FaBriefcase, FaGraduationCap, 
  FaHospital, FaUtensils, FaPlane, FaPiggyBank, FaLaptop, 
  FaTshirt, FaIndustry, FaAngleDoubleRight, FaArrowRight,
  FaSpider, FaWrench, FaTachometerAlt, FaGoogle, FaHome, FaChartBar, 
  FaLink, FaMapMarkerAlt, FaShoppingCart, FaFileAlt, FaPen, FaCalendarAlt, 
  FaCheckCircle, FaImage, FaCode
} from 'react-icons/fa';
import './SeoPage.css';

const SeoPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-show');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.seo-faq-item').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SEO Services | Search Engine Optimization Company for Higher Google Rankings";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Improve your Google rankings with our professional SEO services. We offer keyword research, on-page SEO, technical SEO, local SEO, link building, and content optimization to grow your organic traffic and generate more leads.";
  }, []);

  const seoServices = [
    { title: "Website SEO Audit", badge: "Find Issues", icon: <FaSearch /> },
    { title: "Keyword Research & Strategy", badge: "Target Audience", icon: <FaChartLine /> },
    { title: "On-Page SEO Optimization", badge: "Optimize Pages", icon: <FaChartBar /> },
    { title: "Technical SEO", badge: "Backend Fixes", icon: <FaCogs /> },
    { title: "Off-Page SEO & Link Building", badge: "Build Authority", icon: <FaLink /> },
    { title: "Local SEO", badge: "Local Reach", icon: <FaMapMarkerAlt /> },
  ];

  const whyChooseUs = [
    "Customized SEO strategies for your business",
    "White-hat SEO techniques",
    "Experienced SEO specialists",
    "Data-driven keyword research",
    "Improved search engine rankings",
    "Increased organic website traffic",
    "Better user experience and site performance",
    "Transparent reporting and measurable results",
    "Long-term SEO growth strategies",
    "Dedicated support and consultation"
  ];

  const seoProcess = [
    { step: 1, title: "Website Audit", desc: "We analyze your website to identify technical issues, content gaps, and optimization opportunities." },
    { step: 2, title: "Keyword Research", desc: "We find high-value keywords your target audience is searching for to maximize visibility." },
    { step: 3, title: "On-Page Optimization", desc: "We optimize titles, meta descriptions, headings, URLs, images, and content for better search engine performance." },
    { step: 4, title: "Technical SEO", desc: "We improve website speed, mobile responsiveness, crawlability, indexing, structured data, and Core Web Vitals." },
    { step: 5, title: "Content Optimization", desc: "We create and optimize high-quality, SEO-friendly content that attracts users and search engines." },
    { step: 6, title: "Link Building", desc: "We strengthen your website's authority through ethical, high-quality backlink strategies." },
    { step: 7, title: "Performance Monitoring", desc: "We continuously track rankings, traffic, conversions, and user behavior to refine your SEO strategy." }
  ];

  const industries = [
    { name: "E-commerce", icon: <FaShoppingCart /> },
    { name: "Healthcare", icon: <FaHospital /> },
    { name: "Real Estate", icon: <FaHome /> },
    { name: "Education", icon: <FaGraduationCap /> },
    { name: "Restaurants & Cafés", icon: <FaUtensils /> },
    { name: "Travel & Tourism", icon: <FaPlane /> },
    { name: "Finance", icon: <FaPiggyBank /> },
    { name: "Technology", icon: <FaLaptop /> },
    { name: "Fashion & Beauty", icon: <FaTshirt /> },
    { name: "Manufacturing", icon: <FaIndustry /> },
    { name: "Local Businesses", icon: <FaStore /> },
    { name: "Digital Marketing Agencies", icon: <FaBullhorn /> }
  ];

  const tools = [
    { name: "Google Search Console", icon: <FaGoogle /> },
    { name: "Google Analytics 4 (GA4)", icon: <FaChartLine /> },
    { name: "Google Keyword Planner", icon: <FaSearch /> },
    { name: "Google Trends", icon: <FaChartBar /> },
    { name: "Ahrefs", icon: <FaAngleDoubleRight /> },
    { name: "SEMrush", icon: <FaRocket /> },
    { name: "Screaming Frog SEO Spider", icon: <FaSpider /> },
    { name: "Moz Pro", icon: <FaWrench /> },
    { name: "Ubersuggest", icon: <FaSearch /> },
    { name: "PageSpeed Insights", icon: <FaTachometerAlt /> },
    { name: "GTmetrix", icon: <FaTachometerAlt /> },
    { name: "Bing Webmaster Tools", icon: <FaSearch /> },
    { name: "Rank Math SEO", icon: <FaCogs /> },
    { name: "Yoast SEO", icon: <FaCogs /> }
  ];

  return (
    <div className="seo-page-container">
      {/* Hero Section */}
      <section className="seo-hero">
        <div className="container">
          <Link to="/services/digital-marketing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', position: 'relative', zIndex: 2 }}>
            <span>←</span> Back to Digital Marketing
          </Link>
          <div className="seo-hero-grid">
<div className="seo-hero-content">
              <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>SEO – SEARCH ENGINE OPTIMIZATION SERVICES</p>
              <h1 className="seo-hero-title">
                Grow Your Business <br />
                with <br />
                <span>Professional SEO Services</span>
              </h1>
              
              <p className="seo-hero-desc">
                Increase your online visibility and attract high-quality traffic with our SEO (Search Engine Optimization) Services. We help businesses improve their search engine rankings, reach the right audience, and generate more leads through proven, data-driven SEO strategies.
              </p>
            
              <p className="seo-hero-desc">
                Whether you're a startup, local business, or established brand, our SEO experts create customized optimization plans that improve your website's performance on Google and other major search engines.
              </p>
              <Link to="/contact" className="btn-primary seo-hero-cta-btn">
                Get Your Free SEO Consultation
              </Link>
            </div>

          <div className="hero-image-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/seo-hero-assets.webp" alt="SEO Services Laptop" style={{ width: '100%', maxWidth: '550px', height: 'auto', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))' }} />
          </div>
        </div>
        </div>
      </section>

      {/* Our SEO Services */}
      <section className="seo-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our SEO Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          {/* Checkerboard Grid Layout */}
          <div className="seo-new-grid">
            {seoServices.map((service, idx) => (
              <div key={idx} className="seo-grid-card">
                <div className="seo-grid-card-top">
                  <div className="seo-grid-icon-wrapper">
                    {service.icon}
                  </div>
                  <h4 className="seo-grid-title">{service.title}</h4>
                </div>
                <div className="seo-grid-badge">
                  {service.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Benefits */}
      <section className="seo-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient glow backgrounds */}
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255, 94, 0, 0.08) 0%, transparent 70%)', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255, 94, 0, 0.05) 0%, transparent 70%)', zIndex: 0 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="seo-benefits-grid">
            <div className="seo-benefits-left">
              <h2 className="seo-benefits-title">Why Choose Our SEO Services?</h2>
              <div className="seo-benefits-list">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="seo-benefits-item">
                    <div className="seo-benefits-icon">
                      <FaCheckCircle />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="seo-benefits-right">
              <div className="seo-value-card">
                <h3 className="seo-value-title">The True Value Of SEO</h3>
                <p className="seo-value-desc">
                  Professional SEO helps your business rank higher in search results, increase organic traffic, improve brand credibility, and generate qualified leads. 
                </p>
                <div className="seo-value-divider"></div>
                <p className="seo-value-desc">
                  A well-optimized website delivers a better user experience, higher conversion rates, and sustainable long-term growth without relying solely on paid advertising.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our SEO Process */}
      <section className="seo-process-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Proven SEO Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="seo-process-timeline">
            {seoProcess.map((step, idx) => (
              <div key={idx} className="seo-step-card">
                <div className="seo-step-number">{step.step}</div>
                <div className="seo-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Tools */}
      {/* Industries & Tools - Infographic Layout */}
      <section className="seo-tools-section tree-bg-section" style={{ 
          backgroundImage: 'url(/tree-bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '8rem 0',
          position: 'relative',
          backgroundColor: 'var(--bg-dark)'
        }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* Center Digital Marketing Circle */}
          <div className="tree-center-node">
            <div className="tree-center-content">
              <span>DIGITAL<br/>MARKETING</span>
            </div>
          </div>

          <div className="tree-branches-container">
            {/* Left Branch - Industries */}
            <div className="tree-branch tree-branch-left">
              <div className="tree-branch-header">
                <FaStore className="tree-header-icon" />
                <h3>INDUSTRIES <span style={{color: 'var(--accent-orange)'}}>WE SERVE</span></h3>
              </div>
              <div className="tree-grid tree-grid-left">
                {industries.map((item, idx) => (
                  <div key={idx} className={`tree-node-item ${idx % 2 === 0 ? 'node-left' : 'node-right'}`}>
                    <span className="tree-node-icon">{item.icon}</span>
                    <span className="tree-node-text">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Branch - Tools */}
            <div className="tree-branch tree-branch-right">
              <div className="tree-branch-header">
                <FaChartLine className="tree-header-icon" />
                <h3>SEO TOOLS <span style={{color: 'var(--accent-orange)'}}>WE USE</span></h3>
              </div>
              <div className="tree-grid tree-grid-right">
                {tools.map((item, idx) => (
                  <div key={idx} className={`tree-node-item tools-node ${idx % 2 === 0 ? 'node-left' : 'node-right'}`}>
                    <span className="tree-node-icon">{item.icon}</span>
                    <span className="tree-node-text">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="seo-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="seo-faqs">
            <details className="seo-faq-item">
              <summary>What is SEO?</summary>
              <p>SEO (Search Engine Optimization) is the process of improving your website's visibility on search engines like Google to attract more organic traffic.</p>
            </details>
            <details className="seo-faq-item">
              <summary>How long does SEO take?</summary>
              <p>SEO is a long-term strategy. While some improvements can be seen within a few weeks, significant results typically take several months depending on your industry and competition.</p>
            </details>
            <details className="seo-faq-item">
              <summary>Do you use safe SEO practices?</summary>
              <p>Yes. We follow Google's recommended white-hat SEO techniques to achieve sustainable, long-term rankings.</p>
            </details>
            <details className="seo-faq-item">
              <summary>Will SEO help increase sales?</summary>
              <p>Yes. By attracting relevant visitors who are actively searching for your products or services, SEO can improve lead generation, conversions, and overall business growth.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="seo-cta-section">
        <div className="container">
          <h2 className="seo-cta-title">Ready to Rank Higher on Google?</h2>
          <p className="seo-cta-desc">
            Boost your online presence with our expert SEO services. From technical optimization and keyword research to content strategy and link building, we help your business achieve sustainable growth through higher search engine rankings.
          </p>
          <Link to="/contact" className="seo-cta-btn">
            Get Your Free SEO Consultation <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default SeoPage;
