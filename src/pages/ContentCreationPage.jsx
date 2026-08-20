import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPenNib, FaSearch, FaBlog, FaShareAlt, FaFacebook, FaLinkedin, FaEnvelope, FaShoppingCart, FaBullhorn, FaVideo, FaFilm, FaChartPie, FaStore, FaBookOpen, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import './ContentCreationPage.css';

const ContentCreationPage = () => {
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
    document.title = "Content Creation Services | SEO Content Writing & Digital Content Solutions";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Boost your brand with professional Content Creation services. We provide SEO content writing, website content, blogs, social media content, video scripts, and marketing copy that drive traffic, engagement, and conversions.";
  }, []);

  const contentServices = [
    { title: "Website Content Writing", icon: <FaPenNib /> },
    { title: "SEO Content Writing", icon: <FaSearch /> },
    { title: "Blog & Article Writing", icon: <FaBlog /> },
    { title: "Social Media Content Creation", icon: <FaShareAlt /> },
    { title: "Instagram & Facebook Posts", icon: <FaFacebook /> },
    { title: "LinkedIn Content Writing", icon: <FaLinkedin /> },
    { title: "Email Marketing Content", icon: <FaEnvelope /> },
    { title: "Product Descriptions", icon: <FaShoppingCart /> },
    { title: "Ad Copywriting", icon: <FaBullhorn /> },
    { title: "Video Script Writing", icon: <FaVideo /> },
    { title: "Reel & Short Video Content", icon: <FaFilm /> },
    { title: "Infographic Content", icon: <FaChartPie /> },
    { title: "E-commerce Content", icon: <FaStore /> },
    { title: "Brand Storytelling", icon: <FaBookOpen /> },
    { title: "Content Calendar Planning", icon: <FaCalendarAlt /> },
  ];

  const whyChooseUs = [
    "Creative & Experienced Content Writers",
    "SEO-Optimized Content",
    "Original & Plagiarism-Free Content",
    "Audience-Focused Messaging",
    "Consistent Brand Voice",
    "High-Quality Visual & Written Content",
    "Increased Engagement & Reach",
    "Faster Content Delivery",
    "Customized Content Strategies",
    "Performance-Driven Content Solutions"
  ];

  const contentProcess = [
    { step: 1, title: "Business & Audience Research", desc: "We understand your brand, target audience, competitors, and business goals to create a tailored content strategy." },
    { step: 2, title: "Content Planning", desc: "We develop a content calendar with relevant topics, keywords, and publishing schedules aligned with your marketing objectives." },
    { step: 3, title: "Content Creation", desc: "Our team produces engaging blogs, website copy, social media posts, videos, graphics, and marketing materials designed to capture attention and inspire action." },
    { step: 4, title: "SEO Optimization", desc: "We optimize content with relevant keywords, headings, meta descriptions, internal linking, and readability best practices to improve search engine visibility." },
    { step: 5, title: "Review & Quality Assurance", desc: "Every piece of content is reviewed for grammar, clarity, originality, and brand consistency before publication." },
    { step: 6, title: "Publishing & Performance Analysis", desc: "We assist with publishing your content and monitor its performance to improve engagement, traffic, and conversions." }
  ];

  const industries = [
    "E-commerce", "Healthcare", "Real Estate", "Education", "Technology", "Finance", "Travel & Tourism", "Restaurants & Cafés", "Fashion & Beauty", "Manufacturing", "Startups", "Small & Medium Businesses"
  ];

  const tools = [
    "Canva Pro", "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Adobe After Effects", "CapCut Pro", "Figma", "Grammarly", "ChatGPT", "Google Docs", "Google Trends", "Google Analytics 4 (GA4)"
  ];

  return (
    <div className="content-page-container">
      {/* Hero Section */}
      <section className="content-hero">
        <div className="container" style={{ paddingTop: '2rem' }}>
          <Link to="/services/digital-marketing" style={{ color: 'var(--accent-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>←</span> Back to Digital Marketing
          </Link>
        </div>
        <div className="container content-hero-grid">
<div className="content-hero-content">
            <p className="section-subtitle text-accent" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>CONTENT CREATION SERVICES</p>
            <h1 className="content-hero-title">Create Engaging Content&nbsp;That <br/><span>Connects, Converts, and Grows Your Brand</span></h1>
            <p className="content-hero-desc">
              Capture your audience's attention with our Professional Content Creation Services. We create high-quality, engaging, and SEO-friendly content that helps businesses build brand awareness, increase customer engagement, generate leads, and drive conversions.
            </p>
            <p className="content-hero-desc" style={{ marginBottom: '3rem' }}>
              Whether you need content for your website, social media, blogs, email campaigns, or digital advertising, our creative team delivers compelling content tailored to your brand voice and marketing goals.
            </p>
            <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-block' }}>
              Start Creating Powerful Content Today
            </Link>
          </div>

          <div className="hero-image-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/2.webp" alt="Content Creation Services" style={{ width: '100%', maxWidth: '550px', height: 'auto', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))' }} />
          </div>
        </div>
      </section>

      {/* Our Content Creation Services */}
      <section className="content-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Content Creation Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="content-services-grid">
            {contentServices.map((service, idx) => (
              <div key={idx} className="content-service-card">
                <div className="content-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Benefits */}
      <section className="content-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Why Choose Our Services?</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {whyChooseUs.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: '#ccc', fontSize: '1.1rem' }}>
                    <FaCheckCircle style={{ color: 'var(--accent-orange)' }} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ backgroundColor: '#121215', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <h3 style={{ color: 'var(--accent-orange)', marginBottom: '1.5rem', fontSize: '2rem' }}>The Power of Content Creation</h3>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Professional content creation helps businesses build trust, improve search engine rankings, attract qualified visitors, increase audience engagement, and convert potential customers into loyal clients.
              </p>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8' }}>
                Consistent, valuable content strengthens your online presence and supports long-term digital marketing success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Content Creation Process */}
      <section className="content-process-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Content Creation Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="content-process-timeline">
            {contentProcess.map((step, idx) => (
              <div key={idx} className="content-step-card">
                <div className="content-step-number">{step.step}</div>
                <div className="content-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Tools */}
      <section className="content-tools-section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Industries We Serve</h2>
              <div className="title-underline"></div>
              <div className="content-tools-grid">
                {industries.map((ind, idx) => (
                  <div key={idx} className="content-tool-tag">{ind}</div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Tools We Use</h2>
              <div className="title-underline"></div>
              <div className="content-tools-grid">
                {tools.map((tool, idx) => (
                  <div key={idx} className="content-tool-tag" style={{ backgroundColor: 'rgba(255, 94, 0, 0.1)', borderColor: 'rgba(255, 94, 0, 0.3)' }}>{tool}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="content-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="content-faqs">
            <details className="content-faq-item">
              <summary>What is Content Creation?</summary>
              <p>Content creation is the process of producing valuable, engaging, and informative content such as blogs, website copy, social media posts, videos, graphics, and marketing materials to attract and engage your target audience.</p>
            </details>
            <details className="content-faq-item">
              <summary>Is your content SEO-friendly?</summary>
              <p>Yes. We create SEO-optimized content using strategic keywords, proper headings, meta descriptions, and best practices to improve your website's search engine rankings.</p>
            </details>
            <details className="content-faq-item">
              <summary>Do you create content for social media?</summary>
              <p>Absolutely. We create platform-specific content for Facebook, Instagram, LinkedIn, YouTube, X (Twitter), and other social media channels.</p>
            </details>
            <details className="content-faq-item">
              <summary>How often should I publish content?</summary>
              <p>Publishing frequency depends on your business goals and audience. We recommend maintaining a consistent content schedule to improve visibility, engagement, and long-term growth.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-cta-section">
        <div className="container">
          <h2 className="content-cta-title">Ready to Create Content That Delivers Results?</h2>
          <p className="content-cta-desc">
            Grow your brand with professional content creation that engages your audience, improves search rankings, and drives measurable business growth. Let us create content that tells your story and helps your business stand out online.
          </p>
          <Link to="/contact" className="content-cta-btn">
            Start Creating Powerful Content Today <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ContentCreationPage;
