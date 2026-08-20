import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { FaArrowLeft, FaPaperPlane, FaPhoneAlt, FaCheckCircle, FaBuilding, FaHeartbeat, FaShoppingCart, FaGraduationCap, FaLaptopCode, FaUtensils, FaChartLine, FaCar, FaSearch, FaChartBar, FaCogs, FaLink, FaMapMarkerAlt, FaFileAlt, FaStar, FaRocket, FaArrowRight, FaHubspot, FaMailchimp, FaUsers, FaBriefcase, FaTrophy } from 'react-icons/fa';
import { SiGoogleanalytics, SiMeta, SiSemrush } from 'react-icons/si';
import './SubServiceDetail.css';

const SubServiceDetail = () => {
  const { categorySlug, subServiceSlug } = useParams();
  
  const parentService = servicesData.find(s => s.slug === categorySlug);
  const subService = parentService?.benefits.find(b => b.slug === subServiceSlug);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    // Add unique timestamp to prevent threading
    const timestamp = new Date().toLocaleString();
    formData.append('_subject', `New Lead Inquiry - ${subService.title} - ${timestamp}`);
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    fetch('https://formsubmit.co/ajax/growlapmarketing@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      form.reset();
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    })
    .catch(error => {
      console.error('Submission failed', error);
      alert('Failed to send message. Please try again later.');
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Intersection Observer for Slide-in Animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const animatedElements = document.querySelectorAll('.ssd-slide-in-target');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [categorySlug, subServiceSlug]);
  if (!parentService || !subService) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center', minHeight: '60vh', backgroundColor: 'var(--bg-dark)', color: '#fff' }}>
        <h2>Service not found</h2>
        <Link to="/services" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="subservice-page-container">
      {/* Hero Section */}
      <section 
        className={subService.advancedHero ? "ssd-hero-advanced" : "ssd-hero"} 
        style={(!subService.advancedHero && !subService.heroVideo && subService.heroBg !== 'none') ? { backgroundImage: `url(${subService.image})`, backgroundPosition: 'center', backgroundSize: 'cover' } : {}}
      >
        {subService.heroVideo && !subService.advancedHero && (
          <video 
            className="ssd-hero-video-bg"
            src={subService.heroVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
        )}
        
        {subService.advancedHero ? (
          <div className="container ssd-advanced-layout">
            <div className="ssd-adv-text-side">
              <Link to={`/services/${categorySlug}`} className="ssd-adv-back">
                <FaArrowLeft /> Back to {parentService.title}
              </Link>
              
              {/* Top Badge */}
              <div className="ssd-adv-badge">
                <FaStar className="ssd-adv-star" /> {subService.advancedHero.badge}
              </div>
              
              {/* Title */}
              <h1 className="ssd-adv-title">
                {subService.advancedHero.titlePrefix} <br/>
                <span className="ssd-adv-orange">{subService.advancedHero.titleOrange}</span> <br/>
                {subService.advancedHero.titleSuffix}
              </h1>
              
              {/* Description */}
              <p className="ssd-adv-desc">{subService.advancedHero.desc}</p>
              

              
              {/* Buttons */}
              <div className="ssd-adv-buttons">
                <Link to="/contact" className="ssd-adv-btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  {subService.advancedHero.cta1} <FaArrowRight style={{ marginLeft: '8px' }} />
                </Link>
                <Link to="/services" className="ssd-adv-btn-outline" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  {subService.advancedHero.cta2} <FaArrowRight style={{ marginLeft: '8px' }} />
                </Link>
              </div>
              
              {/* Bottom Text */}
              <div className="ssd-adv-bottom">
                <FaRocket className="ssd-adv-rocket" /> {subService.advancedHero.bottomText}
              </div>
            </div>
            
            <div className="ssd-adv-image-side">
              <img src="/seo-hero-assets.webp" alt="SEO 3D Assets" className="ssd-adv-graphic-side" />
            </div>
          </div>
        ) : (
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <Link to={`/services/${categorySlug}`} className="ssd-breadcrumb">
              <FaArrowLeft /> Back to {parentService.title}
            </Link>
            <h1 className="ssd-hero-title">
              Professional <span style={{ color: 'var(--accent-orange)' }}>{subService.title}</span> Services
            </h1>
            <p className="ssd-hero-desc">
              {subService.desc} Elevate your business with our tailored solutions designed for maximum impact and ROI.
            </p>
          </div>
        )}
      </section>

      {/* Main Content Section */}
      <section className="ssd-content-section">
        <div className="container ssd-grid-layout">
          
          <div className="ssd-left-content">
            <h2>Why Choose Our {subService.title} Services?</h2>
            <p>
              In today's competitive landscape, having a strategic approach to <strong>{subService.title.toLowerCase()}</strong> is crucial. We don't just execute tasks; we build comprehensive strategies that align with your broader business goals.
            </p>
            <p>
              Our team of experts utilizes the latest tools and industry best practices to ensure that your investment yields the highest possible returns. Whether you're looking to increase brand awareness, generate high-quality leads, or boost sales, our solutions are customized to meet your specific needs.
            </p>

            {subService.video && (
              <div className="ssd-video-wrapper" style={{ marginTop: '2rem', marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                <video 
                  src={subService.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  style={{ width: '100%', display: 'block' }}
                />
              </div>
            )}
            
            <div className="ssd-features">
              <div className="ssd-feature-item">
                <FaCheckCircle className="ssd-feature-icon" />
                <div>
                  <h4>Tailored Strategy</h4>
                  <p>Customized approaches that fit your unique business model.</p>
                </div>
              </div>
              <div className="ssd-feature-item">
                <FaCheckCircle className="ssd-feature-icon" />
                <div>
                  <h4>Expert Execution</h4>
                  <p>Delivered by a team of seasoned professionals.</p>
                </div>
              </div>
              <div className="ssd-feature-item">
                <FaCheckCircle className="ssd-feature-icon" />
                <div>
                  <h4>Data-Driven Results</h4>
                  <p>Continuous optimization based on real-time analytics.</p>
                </div>
              </div>
            </div>


            {/* Added Content: Metrics Banner */}
            <div className="ssd-metrics-banner" style={{ marginTop: '4rem', display: 'flex', gap: '2rem', backgroundColor: 'rgba(255, 94, 0, 0.1)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255, 94, 0, 0.2)' }}>
              <div className="ssd-metric">
                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>98%</h3>
                <p style={{ margin: 0, fontWeight: '600', color: '#fff' }}>Client Satisfaction</p>
              </div>
              <div className="ssd-metric">
                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>3X</h3>
                <p style={{ margin: 0, fontWeight: '600', color: '#fff' }}>Average ROI Increase</p>
              </div>
              <div className="ssd-metric">
                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>24/7</h3>
                <p style={{ margin: 0, fontWeight: '600', color: '#fff' }}>Performance Monitoring</p>
              </div>
            </div>
            

          </div>

          {/* Lead Generation Form */}
          <div className="ssd-right-sidebar">
            <div className="ssd-lead-form">
              <h3>Get Started Today</h3>
              <p>Fill out the form below and our team will get back to you with a custom proposal.</p>
              
              <form onSubmit={handleFormSubmit}>
                <div className="ssd-form-group">
                  <input type="text" name="Full Name" placeholder="Full Name*" required />
                </div>
                <div className="ssd-form-group">
                  <input type="text" name="CompanyName" placeholder="Company Name*" required />
                </div>
                <div className="ssd-form-group">
                  <input type="tel" name="Phone Number" placeholder="Phone Number*" required />
                </div>
                <div className="ssd-form-group">
                  <textarea name="Project Requirements" placeholder="Tell us about your project requirements*" rows="4" required></textarea>
                </div>
                <button type="submit" className="ssd-submit-btn">
                  <FaPaperPlane /> Request a Free Consultation
                </button>
                {isSubmitted && (
                  <div style={{ marginTop: '15px', padding: '10px', backgroundColor: 'rgba(40, 167, 69, 0.1)', color: '#28a745', border: '1px solid #28a745', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold' }}>
                    Request sent successfully! We'll contact you soon.
                  </div>
                )}
              </form>
              
              <div className="ssd-or-call">
                <p>Or speak directly to an expert:</p>
                <a href="tel:+917695883647" className="ssd-call-btn">
                  <FaPhoneAlt /> +91 76958 83647
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="ssd-tools-section">
        <div className="container">
          <div className="ssd-tools-header">
            <h2>Technologies <span className="highlight">We Use</span></h2>
            <div className="ssd-tools-divider"></div>
            <p>We leverage industry-leading tools and platforms to deliver unmatched results for your campaigns.</p>
          </div>
        </div>
        
        {/* Infinite Marquee Model */}
        <div className="ssd-tech-marquee-wrapper">
          <div className="ssd-tech-marquee">
            {[1, 2].map((loopIndex) => (
              <div className="ssd-tech-marquee-track" key={loopIndex}>
                <div className="ssd-tech-pill">
                  <div className="ssd-tech-pill-icon" style={{ backgroundColor: 'rgba(249, 171, 0, 0.1)' }}>
                    <SiGoogleanalytics style={{ color: '#F9AB00' }} />
                  </div>
                  <div className="ssd-tech-pill-text">Google Analytics</div>
                </div>
                <div className="ssd-tech-pill">
                  <div className="ssd-tech-pill-icon" style={{ backgroundColor: 'rgba(6, 104, 225, 0.1)' }}>
                    <SiMeta style={{ color: '#0668E1' }} />
                  </div>
                  <div className="ssd-tech-pill-text">Meta Business Suite</div>
                </div>
                <div className="ssd-tech-pill">
                  <div className="ssd-tech-pill-icon" style={{ backgroundColor: 'rgba(255, 74, 0, 0.1)' }}>
                    <SiSemrush style={{ color: '#FF4A00' }} />
                  </div>
                  <div className="ssd-tech-pill-text">SEMrush</div>
                </div>
                <div className="ssd-tech-pill">
                  <div className="ssd-tech-pill-icon" style={{ backgroundColor: 'rgba(255, 122, 89, 0.1)' }}>
                    <FaHubspot style={{ color: '#FF7A59' }} />
                  </div>
                  <div className="ssd-tech-pill-text">HubSpot</div>
                </div>
                <div className="ssd-tech-pill">
                  <div className="ssd-tech-pill-icon" style={{ backgroundColor: 'rgba(255, 152, 0, 0.1)' }}>
                    <FaChartLine style={{ color: '#FF9800' }} />
                  </div>
                  <div className="ssd-tech-pill-text">Ahrefs</div>
                </div>
                <div className="ssd-tech-pill">
                  <div className="ssd-tech-pill-icon" style={{ backgroundColor: 'rgba(255, 224, 27, 0.1)' }}>
                    <FaMailchimp style={{ color: '#FFE01B' }} />
                  </div>
                  <div className="ssd-tech-pill-text">Mailchimp</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Added Content: Comprehensive Service Breakdown */}
      <section className="ssd-breakdown-section" style={{ padding: '6rem 0', backgroundColor: '#08080a' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>What's Included in Our {subService.title} Service?</h2>
            <p style={{ color: '#aaa', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>A holistic approach to ensure every aspect of your campaign is optimized for peak performance.</p>
          </div>
          
          <div className="ssd-breakdown-grid">
            <div className="ssd-breakdown-card ssd-slide-in-target">
              <div className="ssd-bd-icon">01</div>
              <h3>In-Depth Audience Research</h3>
              <p>We analyze market trends, competitor strategies, and consumer behavior to pinpoint your exact ideal customer profile.</p>
            </div>
            <div className="ssd-breakdown-card ssd-slide-in-target">
              <div className="ssd-bd-icon">02</div>
              <h3>Strategic Planning & Ideation</h3>
              <p>Developing a robust roadmap tailored to your specific business objectives, ensuring alignment with your overall brand vision.</p>
            </div>
            <div className="ssd-breakdown-card">
              <div className="ssd-bd-icon">03</div>
              <h3>Compelling Copy & Creatives</h3>
              <p>Our creative team crafts engaging text and visuals designed to capture attention, evoke emotion, and drive immediate action.</p>
            </div>
            <div className="ssd-breakdown-card">
              <div className="ssd-bd-icon">04</div>
              <h3>Advanced Tracking Setup</h3>
              <p>Implementation of precise tracking pixels, conversion tags, and analytics dashboards so every click is accounted for.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Added Content: Why You Need This Now */}
      <section className="ssd-why-now-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)' }}>
        <div className="container ssd-why-now-layout">
          <div className="ssd-why-now-text">
            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1.5rem' }}>Why Your Business Needs {subService.title} Right Now</h2>
            <p style={{ color: '#ccc', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              The digital landscape is evolving faster than ever. Relying on outdated methods means you are actively losing market share to competitors who are leveraging modern strategies. 
            </p>
            <p style={{ color: '#ccc', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              By investing in a professional <strong>{subService.title.toLowerCase()}</strong> strategy today, you are building a scalable asset that generates consistent, predictable revenue. Don't wait until your competitors dominate the space—seize the opportunity to become the industry leader.
            </p>
            <ul className="ssd-why-list">
              <li><FaCheckCircle /> Immediate increase in brand visibility</li>
              <li><FaCheckCircle /> Direct access to high-intent audiences</li>
              <li><FaCheckCircle /> Measurable ROI with data-backed decisions</li>
              <li><FaCheckCircle /> Long-term sustainable growth pipeline</li>
            </ul>
          </div>
          <div className="ssd-why-now-image">
            <div className="ssd-image-placeholder">
              <div className="ssd-pulse-circle"></div>
              <h3>Accelerate Your Growth</h3>
              <p>Stop leaving money on the table.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Added Content: 90-Day Growth Roadmap */}
      <section className="ssd-roadmap-section" style={{ padding: '5rem 0', backgroundColor: '#121215', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>Your 90-Day Growth Roadmap</h2>
            <p style={{ color: '#aaa', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
              We don't just run campaigns; we build growth engines. Here is exactly what you can expect when you partner with us over the first three months.
            </p>
          </div>
          
          <div className="ssd-roadmap-grid">
            <div className="ssd-roadmap-card ssd-slide-in-target">
              <div className="ssd-roadmap-month">Month 1</div>
              <h3>Foundation & Testing</h3>
              <p>We lay the groundwork for success. This involves deep audience research, setting up pixel tracking, configuring analytics, and launching initial A/B tests across various creatives and copies.</p>
              <ul className="ssd-rm-list">
                <li>• Comprehensive Audit</li>
                <li>• Analytics & Tracking Setup</li>
                <li>• Initial Campaign Launch</li>
              </ul>
            </div>
            
            <div className="ssd-roadmap-card ssd-slide-in-target">
              <div className="ssd-roadmap-month">Month 2</div>
              <h3>Optimization & Scaling</h3>
              <p>With data flowing in, we identify the winning formulas. We aggressively cut underperforming assets and reallocate your budget to the highest-converting audiences and creatives.</p>
              <ul className="ssd-rm-list">
                <li>• Eliminating Wasted Ad Spend</li>
                <li>• Scaling Winning Creatives</li>
                <li>• Lowering Cost Per Acquisition</li>
              </ul>
            </div>
            
            <div className="ssd-roadmap-card ssd-slide-in-target">
              <div className="ssd-roadmap-month">Month 3</div>
              <h3>Maximum ROI & Expansion</h3>
              <p>Your campaigns are now highly optimized. We focus on maximizing your Return on Ad Spend (ROAS), introducing advanced retargeting funnels, and exploring new avenues for scale.</p>
              <ul className="ssd-rm-list">
                <li>• Advanced Retargeting Funnels</li>
                <li>• Lookalike Audience Expansion</li>
                <li>• Predictable Revenue Generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Added Content: Industries We Transform */}
      <section className="ssd-industries-section" style={{ padding: '5rem 0', backgroundColor: '#0c0c0e', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '1rem' }}>Industries We Transform</h2>
            <p style={{ color: '#aaa', fontSize: '1.1rem' }}>We have specialized experience delivering {subService.title} solutions across diverse sectors.</p>
          </div>
          <div className="ssd-industries-grid-new">
            <div className="ssd-ind-card">
              <h4>Real Estate</h4>
              <p>Generate high-quality property leads, boost open house attendance, and build trust with targeted campaigns tailored for buyers and sellers.</p>
            </div>
            <div className="ssd-ind-card">
              <h4>Healthcare</h4>
              <p>Connect with patients effectively while maintaining compliance. We enhance your online reputation and drive appointments for your clinic or hospital.</p>
            </div>
            <div className="ssd-ind-card">
              <h4>E-Commerce</h4>
              <p>Maximize your online sales and reduce cart abandonment with data-driven strategies, dynamic retargeting, and optimized product funnels.</p>
            </div>
            <div className="ssd-ind-card">
              <h4>Education</h4>
              <p>Increase student enrollments and promote courses with campaigns targeting the right demographics across social and search platforms.</p>
            </div>
            <div className="ssd-ind-card">
              <h4>Technology</h4>
              <p>Generate high-value B2B leads, establish industry authority, and promote your SaaS or tech products to key decision-makers.</p>
            </div>
            <div className="ssd-ind-card">
              <h4>Hospitality</h4>
              <p>Drive direct bookings, increase footfall to your restaurants, and build loyal customer bases through visually engaging digital storytelling.</p>
            </div>
            <div className="ssd-ind-card">
              <h4>Finance</h4>
              <p>Build credibility and acquire high-net-worth clients with secure, compliant, and highly targeted financial marketing strategies.</p>
            </div>
            <div className="ssd-ind-card">
              <h4>Automotive</h4>
              <p>Drive foot traffic to dealerships and increase test drive bookings with hyper-local targeting and compelling promotional offers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width FAQs Section */}
      <section className="ssd-faq-full-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark)', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
            <p style={{ color: '#aaa', fontSize: '1.1rem' }}>Got questions about our {subService.title} services? We have answers.</p>
          </div>
          
          <div className="ssd-faqs">
            <details className="ssd-faq-item-collapsible ssd-slide-in-target">
              <summary>How long does it take to see results?</summary>
              <p>Results depend on various factors including your industry, budget, and current baseline. However, our targeted strategies are designed to show measurable improvements within the first 30 to 60 days of campaign launch.</p>
            </details>
            <details className="ssd-faq-item-collapsible ssd-slide-in-target">
              <summary>Do you offer customized packages?</summary>
              <p>Absolutely. We understand that no two businesses are alike. We offer fully bespoke solutions tailored specifically to your unique goals and budget constraints.</p>
            </details>
            <details className="ssd-faq-item-collapsible ssd-slide-in-target">
              <summary>How do you measure success and ROI?</summary>
              <p>We use advanced analytics and tracking tools to monitor every campaign. You will receive detailed monthly reports showing exact metrics, including lead volume, conversion rates, and overall ROI.</p>
            </details>
            <details className="ssd-faq-item-collapsible ssd-slide-in-target">
              <summary>Can I scale my services up or down?</summary>
              <p>Yes, our flexible approach allows you to scale your investment based on performance and seasonal business needs. We are here to support your growth at every stage.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Added Content: Full-Width Process Timeline */}
      <section className="ssd-process-full-section" style={{ padding: '6rem 0', backgroundColor: '#08080a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>Our Proven Process</h2>
            <p style={{ color: '#aaa', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>We believe in a transparent, step-by-step approach to guarantee the success of your {subService.title} campaigns.</p>
          </div>
          
          <div className="ssd-process-grid-timeline">
            <div className="ssd-pt-step ssd-slide-in-target">
              <div className="ssd-pt-number">01</div>
              <h4>Discovery & Analysis</h4>
              <p>We start by deeply understanding your brand, target audience, and current market position to identify the best opportunities.</p>
            </div>
            
            <div className="ssd-pt-step ssd-slide-in-target">
              <div className="ssd-pt-number">02</div>
              <h4>Strategy Development</h4>
              <p>Our experts craft a customized, data-backed strategy specifically designed to achieve your desired outcomes and maximize ROI.</p>
            </div>
            
            <div className="ssd-pt-step ssd-slide-in-target">
              <div className="ssd-pt-number">03</div>
              <h4>Execution & Implementation</h4>
              <p>We deploy the strategy using industry-leading tools, ensuring every detail is executed flawlessly for maximum impact.</p>
            </div>
            
            <div className="ssd-pt-step ssd-slide-in-target">
              <div className="ssd-pt-number">04</div>
              <h4>Monitoring & Optimization</h4>
              <p>We continuously monitor performance metrics and A/B test variations to refine the campaign and scale your results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Premium CTA Section */}
      <section className="ssd-premium-cta">
        <div className="ssd-cta-bg-glow"></div>
        <div className="ssd-cta-dots left"></div>
        <div className="ssd-cta-dots right"></div>
        
        <div className="container ssd-cta-container">
          <div className="ssd-cta-badge">
            <span className="line"></span>
            <FaRocket className="icon" /> LET'S GROW TOGETHER
            <span className="line"></span>
          </div>
          
          <h2 className="ssd-cta-title">
            Ready to Transform&nbsp;Your <br/>
            <span className="highlight">{subService.title}</span> <span className="highlight">Results?</span>
          </h2>
          
          <p className="ssd-cta-desc">
            Stop leaving money on the table. Elevate your brand, generate quality leads, and dominate your industry with our proven {subService.title.toLowerCase()} strategies tailored for massive business growth.
          </p>
          
          <div className="ssd-cta-actions" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="ssd-btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '15px 30px', borderRadius: '8px', fontWeight: 'bold' }}>
              <FaChartLine className="btn-icon" style={{ marginRight: '8px' }} /> Get Free Audit <FaArrowRight className="btn-arrow" style={{ marginLeft: '8px' }} />
            </Link>
            <Link to="/services" className="ssd-btn-outline" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '15px 30px', borderRadius: '8px', fontWeight: 'bold', border: '1px solid rgba(255,255,255,0.2)' }}>
              View Our Services <FaArrowRight className="btn-arrow" style={{ marginLeft: '8px' }} />
            </Link>
          </div>
          
          <div className="ssd-cta-trust">
            <FaCheckCircle className="trust-icon" /> No Obligation &nbsp;•&nbsp; 100% Free &nbsp;•&nbsp; Get Actionable Insights Today!
          </div>
          
          <div className="ssd-cta-stats-box">
            <div className="stat-item">
              <div className="stat-icon-wrapper"><FaUsers /></div>
              <div className="stat-text">
                <h4>50+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper"><FaBriefcase /></div>
              <div className="stat-text">
                <h4>25+</h4>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper"><FaUsers /></div>
              <div className="stat-text">
                <h4>10+</h4>
                <p>Team Members</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper"><FaTrophy /></div>
              <div className="stat-text">
                <h4>1+</h4>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubServiceDetail;
