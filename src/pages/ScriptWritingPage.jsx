import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPenNib, FaYoutube, FaInstagram, FaFacebook, FaBuilding, FaBookOpen, FaShoppingCart, FaLightbulb, FaGraduationCap, FaMicrophoneAlt, FaFileAudio, FaComments, FaCheckCircle } from 'react-icons/fa';
import './ScriptWritingPage.css';

const ScriptWritingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Professional Script Writing Services | Creative Scripts for Marketing & Video Content";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Transform your ideas into compelling stories with our professional Script Writing services. We create SEO-friendly scripts for YouTube, social media, advertisements, corporate videos, explainer videos, and promotional campaigns.";
  }, []);

  const scriptServices = [
    { title: "Commercial & Advertisement Scripts", icon: <FaPenNib /> },
    { title: "YouTube Video Scripts", icon: <FaYoutube /> },
    { title: "Instagram Reels & Shorts Scripts", icon: <FaInstagram /> },
    { title: "Facebook Video Scripts", icon: <FaFacebook /> },
    { title: "Corporate Video Scripts", icon: <FaBuilding /> },
    { title: "Brand Storytelling Scripts", icon: <FaBookOpen /> },
    { title: "Product Promotion Scripts", icon: <FaShoppingCart /> },
    { title: "Explainer Video Scripts", icon: <FaLightbulb /> },
    { title: "Educational & Training Scripts", icon: <FaGraduationCap /> },
    { title: "Event & Presentation Scripts", icon: <FaMicrophoneAlt /> },
    { title: "Podcast Scripts", icon: <FaFileAudio /> },
    { title: "Interview Scripts", icon: <FaComments /> },
    { title: "Voice-Over Scripts", icon: <FaMicrophoneAlt /> },
    { title: "Video Sales Letter (VSL) Scripts", icon: <FaShoppingCart /> },
    { title: "Social Media Campaign Scripts", icon: <FaPenNib /> },
  ];

  const whyChooseUs = [
    "Experienced Creative Script Writers",
    "Customized Scripts for Every Industry",
    "SEO-Friendly Video Content",
    "Engaging & Persuasive Storytelling",
    "Audience-Centric Messaging",
    "Brand-Focused Content",
    "Clear Call-to-Action (CTA)",
    "Fast Turnaround Time",
    "Original & Plagiarism-Free Scripts",
    "High-Quality Content That Drives Results"
  ];

  const scriptProcess = [
    { step: 1, title: "Understanding Your Goals", desc: "We learn about your business, target audience, campaign objectives, and preferred style." },
    { step: 2, title: "Research & Planning", desc: "Our writers research your industry, competitors, and audience to create relevant and impactful scripts." },
    { step: 3, title: "Script Development", desc: "We craft a structured script with a strong opening, engaging storyline, persuasive messaging, and a compelling call to action." },
    { step: 4, title: "Review & Refinement", desc: "We refine the script for clarity, tone, pacing, and brand consistency while incorporating your feedback." },
    { step: 5, title: "Final Delivery", desc: "Receive a polished, ready-to-use script optimized for your chosen platform and audience." }
  ];

  const industries = [
    "Digital Marketing Agencies", "E-commerce Businesses", "Healthcare", "Education", "Real Estate", "Technology", "Finance", "Restaurants & Hospitality", "Travel & Tourism", "Fashion & Beauty", "Startups", "Corporate Organizations"
  ];

  const tools = [
    "Google Docs", "Microsoft Word", "Notion", "Grammarly", "ChatGPT", "Canva Pro", "Adobe Premiere Pro", "Adobe After Effects", "Final Draft", "Celtx"
  ];

  return (
    <div className="script-page-container">
      {/* Hero Section */}
      <section className="script-hero">
        <div className="container">
          <p className="section-subtitle text-accent" style={{ marginBottom: '1rem' }}>SCRIPT WRITING SERVICES</p>
          <h1 className="script-hero-title">Professional Script Writing Services That <br/><span>Bring Your Ideas to Life</span></h1>
          <p className="script-hero-desc">
            Turn your ideas into compelling stories with our Professional Script Writing Services. We create engaging, creative, and audience-focused scripts for businesses, brands, content creators, and marketing campaigns.
          </p>
          <p className="script-hero-desc" style={{ marginBottom: '3rem' }}>
            Whether you need scripts for advertisements, YouTube videos, social media reels, corporate videos, or promotional content, our expert writers craft scripts that capture attention, communicate your message, and inspire action.
          </p>
          <Link to="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem' }}>
            Get Your Custom Script Today
          </Link>
        </div>
      </section>

      {/* Our Script Writing Services */}
      <section className="script-services-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Script Writing Services</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="script-services-grid">
            {scriptServices.map((service, idx) => (
              <div key={idx} className="script-service-card">
                <div className="script-service-icon">{service.icon}</div>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Benefits */}
      <section className="script-benefits-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
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
              <h3 style={{ color: 'var(--accent-orange)', marginBottom: '1.5rem', fontSize: '2rem' }}>The Power of Script Writing</h3>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                A professionally written script improves communication, captures audience attention, increases viewer retention, and strengthens your brand message.
              </p>
              <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8' }}>
                High-quality scripts help create engaging videos, successful marketing campaigns, and memorable customer experiences that lead to higher conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Script Writing Process */}
      <section className="script-process-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Our Script Writing Process</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="script-process-timeline">
            {scriptProcess.map((step, idx) => (
              <div key={idx} className="script-step-card">
                <div className="script-step-number">{step.step}</div>
                <div className="script-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Tools */}
      <section className="script-tools-section">
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Industries We Serve</h2>
              <div className="title-underline"></div>
              <div className="script-tools-grid">
                {industries.map((ind, idx) => (
                  <div key={idx} className="script-tool-tag">{ind}</div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Tools We Use</h2>
              <div className="title-underline"></div>
              <div className="script-tools-grid">
                {tools.map((tool, idx) => (
                  <div key={idx} className="script-tool-tag" style={{ backgroundColor: 'rgba(255, 94, 0, 0.1)', borderColor: 'rgba(255, 94, 0, 0.3)' }}>{tool}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="script-faq-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="script-faqs">
            <details className="script-faq-item">
              <summary>What types of scripts do you write?</summary>
              <p>We write scripts for advertisements, YouTube videos, social media reels, corporate presentations, explainer videos, podcasts, product promotions, and many other content formats.</p>
            </details>
            <details className="script-faq-item">
              <summary>Can you write scripts for short-form videos?</summary>
              <p>Yes. We specialize in writing engaging scripts for Instagram Reels, YouTube Shorts, Facebook Reels, and TikTok videos that capture attention within the first few seconds.</p>
            </details>
            <details className="script-faq-item">
              <summary>Are your scripts SEO-friendly?</summary>
              <p>Yes. Our scripts are written using relevant keywords, audience-focused messaging, and content strategies that support your overall digital marketing and video SEO goals.</p>
            </details>
            <details className="script-faq-item">
              <summary>Can you write scripts for my specific industry?</summary>
              <p>Absolutely. We create customized scripts tailored to your business, industry, target audience, and marketing objectives.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="script-cta-section">
        <div className="container">
          <h2 className="script-cta-title">Ready to Create Engaging Scripts?</h2>
          <p className="script-cta-desc">
            Bring your ideas to life with professionally written scripts that captivate your audience and strengthen your brand. Whether it's for marketing, education, entertainment, or business communication, we deliver scripts that inspire action and drive results.
          </p>
          <Link to="/contact" className="script-cta-btn">
            Get Your Custom Script Today <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ScriptWritingPage;
