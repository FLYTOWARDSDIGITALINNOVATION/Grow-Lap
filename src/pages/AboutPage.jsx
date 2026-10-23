import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPaperPlane, FaArrowRight, FaRegSmile, FaRegFileAlt, FaUsers, FaGlobe,
  FaSearch, FaHashtag, FaLaptopCode, FaVideo, FaCamera, FaMicrophone, FaBullseye,
  FaUserTie, FaLightbulb, FaComments, FaChartLine, FaTag, FaRegClock, FaHeadset, 
  FaTrophy, FaRocket, FaEye, FaCompass, FaCheckCircle
} from 'react-icons/fa';
import SEO from '../components/SEO';
import './AboutPage.css';

const AboutPage = () => {
  const [isFaqVisible, setIsFaqVisible] = useState(false);
  const faqRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsFaqVisible(true);
      },
      { threshold: 0.15 }
    );

    if (faqRef.current) observer.observe(faqRef.current);
    return () => observer.disconnect();
  }, []);

  // Section 2: Stats
  const stats = [
    { value: '25+', label: 'Happy Clients', icon: <FaRegSmile /> },
    { value: '25+', label: 'Projects Completed', icon: <FaRegFileAlt /> },
    { value: '10+', label: 'Team Members', icon: <FaUsers /> },
    { value: '3+', label: 'Global Services', icon: <FaGlobe /> }
  ];

  // Section 4: Why Choose Grow Lap (9 Core Features)
  const whyFeatures = [
    {
      title: 'Experienced Digital Marketing Experts',
      desc: 'Skilled professionals who understand what works and how to get results.',
      icon: <FaUserTie />
    },
    {
      title: 'Customized Marketing Strategies',
      desc: 'Plans built around your goals, audience, and industry.',
      icon: <FaBullseye />
    },
    {
      title: 'Creative & Innovative Solutions',
      desc: 'Fresh ideas and creative content that help your brand stand out.',
      icon: <FaLightbulb />
    },
    {
      title: 'Transparent Communication',
      desc: 'Clear updates, honest discussions, and no hidden surprises.',
      icon: <FaComments />
    },
    {
      title: 'Data-Driven Campaigns',
      desc: 'Real insights, better decisions, stronger results.',
      icon: <FaChartLine />
    },
    {
      title: 'Affordable Pricing',
      desc: 'Quality services that fit your budget and give you value.',
      icon: <FaTag />
    },
    {
      title: 'On-Time Project Delivery',
      desc: 'We respect your time and keep your projects on track.',
      icon: <FaRegClock />
    },
    {
      title: 'Dedicated Customer Support',
      desc: 'A team that’s always here to help you.',
      icon: <FaHeadset />
    },
    {
      title: 'Proven Results Across Multiple Industries',
      desc: 'Experience working with businesses from different sectors and sizes.',
      icon: <FaTrophy />
    }
  ];

  // Section 6: How We Work (5-Step Process)
  const processSteps = [
    {
      step: '01',
      title: 'Discover',
      desc: 'We understand your business, goals, competitors, and target audience.'
    },
    {
      step: '02',
      title: 'Strategize',
      desc: 'Our experts create a customized digital marketing and branding strategy tailored to your business objectives.'
    },
    {
      step: '03',
      title: 'Create',
      desc: 'We design engaging content, develop creative assets, and build high-performing marketing campaigns.'
    },
    {
      step: '04',
      title: 'Launch',
      desc: 'We execute campaigns across the most effective digital platforms to maximize reach and engagement.'
    },
    {
      step: '05',
      title: 'Optimize',
      desc: 'We continuously monitor performance, analyze data, and optimize campaigns to improve results and maximize ROI.'
    }
  ];

  return (
    <div className="about-page-wrapper">
      <SEO 
        title="About Us | The Story Behind GrowLap"
        description="Get to know Grow Lap, where we help businesses grow through digital marketing, professional shoots, and creative editing to build a strong brand."
        keywords="about us, about us grow lap, grow lap about us"
        canonical="https://www.growlap.com/about"
        ogImage="https://www.growlap.com/Grow%20Lap.webp"
        ogImageAlt="Grow Lap About Us"
        robots="index,follow"
      />

      {/* ==========================================================================
          SECTION 1: HERO SECTION
          ========================================================================== */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-hero-text">
              <p className="section-subtitle text-accent">ABOUT GROW LAP</p>
              <h1 className="about-hero-title">
                We Build Brands. <br className="hide-mobile" />
                We Create Impact. <br />
                <span className="text-accent">We Drive Growth.</span>
              </h1>
              <p className="about-hero-desc">
                At <strong>Grow Lap</strong>, we help businesses grow through digital marketing, creative content, and professional production. We bring your ideas to life and help your brand reach more people and make your business stand out online.
              </p>
              <div className="about-hero-btn-group">
                <Link to="/contact" className="btn-primary">
                  <FaPaperPlane className="btn-icon" /> Let's Work Together
                </Link>
                <a href="#who-we-are" className="btn-secondary">
                  Explore Our Story &darr;
                </a>
              </div>
            </div>

            <div className="about-hero-visual-wrapper">
              <div className="about-hero-glow"></div>
              <div className="about-hero-img-frame">
                <img 
                  src="/about-hero-funnel.png" 
                  alt="Grow Lap Digital Marketing & Growth Funnel" 
                  className="about-hero-visual-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 2: WHO WE ARE
          ========================================================================== */}
      <section id="who-we-are" className="about-who-section section-padding">
        <div className="container">
          <div className="about-who-grid">
            {/* Text Side (Left) */}
            <div className="about-who-text">
              <p className="section-subtitle text-accent">WHO WE ARE</p>
              <h2 className="about-who-title">
                One Team for Marketing, <br />
                <span className="text-accent">Creativity, and Growth</span>
              </h2>

              <div className="about-quote-box">
                <p>
                  "We don't just execute campaigns; we architect digital growth."
                </p>
              </div>

              <p className="about-who-p">
                Grow Lap is a digital marketing company that helps businesses connect with the right people and build a strong online presence.
              </p>
              <p className="about-who-p">
                From SEO and digital advertising to professional photoshoots and video editing, we bring everything together to help your brand get noticed and make a lasting impression.
              </p>
              <p className="about-who-p">
                We get to know your business, understand what you need, and help you reach more people. From marketing your services to creating photos and videos, we show people what your brand is all about.
              </p>
            </div>

            {/* Visual Images Side (Right) */}
            <div className="about-who-visuals">
              <div className="about-who-img-container">
                <img src="/about-creative-team-4.jpg" alt="Grow Lap Team Collaboration" className="about-who-img-main" />
                <div className="about-who-sub-images">
                  <img src="/bg-team.webp" alt="Creative Production" className="about-who-img-sub" />
                  <img src="/bg-projects.webp" alt="Client Success" className="about-who-img-sub" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="about-stats-container">
            <div className="about-stats-grid">
              {stats.map((item, idx) => (
                <div key={idx} className="about-stat-card">
                  <div className="about-stat-icon">{item.icon}</div>
                  <div className="about-stat-value">{item.value}</div>
                  <div className="about-stat-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: WHAT WE DO (Hub & Spoke Architecture)
          ========================================================================== */}
      <section className="about-what-we-do-section section-padding">
        <div className="container">
          <div className="has-header text-center" style={{ marginBottom: '4rem' }}>
            <p className="section-subtitle text-accent">WHAT WE DO</p>
            <h2 className="has-title" style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>
              Everything Your Brand Needs to Grow
            </h2>
            <p className="has-subtitle" style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '1rem auto 0' }}>
              From reaching more people online to creating content that makes your brand stand out, we bring marketing and creativity together under one roof.
            </p>
          </div>

          {/* Hub & Spoke Layout */}
          <div className="has-layout">
            {/* Left Column - Spokes */}
            <div className="has-col has-col-left">
              <div className="has-spoke has-spoke-left">
                <div className="has-spoke-border"></div>
                <div className="has-spoke-icon-wrapper">
                  <div className="has-spoke-icon"><FaSearch /></div>
                </div>
                <div className="has-spoke-content">
                  <h4>Search & Paid Ads</h4>
                  <p>Search Engine Optimization (SEO), Google Ads & PPC, Meta Ads (Facebook & Instagram).</p>
                </div>
                <div className="has-connection has-conn-left-1"></div>
              </div>

              <div className="has-spoke has-spoke-left">
                <div className="has-spoke-border"></div>
                <div className="has-spoke-icon-wrapper">
                  <div className="has-spoke-icon"><FaHashtag /></div>
                </div>
                <div className="has-spoke-content">
                  <h4>Social & Marketing</h4>
                  <p>Social Media Marketing (SMM), Content Marketing, Email Marketing, and WhatsApp Marketing.</p>
                </div>
                <div className="has-connection has-conn-left-2"></div>
              </div>

              <div className="has-spoke has-spoke-left">
                <div className="has-spoke-border"></div>
                <div className="has-spoke-icon-wrapper">
                  <div className="has-spoke-icon"><FaLaptopCode /></div>
                </div>
                <div className="has-spoke-content">
                  <h4>Web & Brand Identity</h4>
                  <p>Website Design & Development, Branding & Graphic Design, and Logo Design.</p>
                </div>
                <div className="has-connection has-conn-left-3"></div>
              </div>
            </div>

            {/* Center Hub */}
            <div className="has-col has-col-center">
              <div className="has-hub">
                <div className="has-hub-dashed"></div>
                <div className="has-hub-inner">
                  <FaBullseye className="has-hub-icon" />
                  <h3>Digital Solutions</h3>
                  <h3 className="has-hub-accent">That Deliver</h3>
                  <h3>Results</h3>
                  <div className="has-hub-dot"></div>
                </div>
              </div>
            </div>

            {/* Right Column - Spokes */}
            <div className="has-col has-col-right">
              <div className="has-spoke has-spoke-right">
                <div className="has-spoke-border"></div>
                <div className="has-connection has-conn-right-1"></div>
                <div className="has-spoke-icon-wrapper">
                  <div className="has-spoke-icon"><FaVideo /></div>
                </div>
                <div className="has-spoke-content">
                  <h4>Video & Animation</h4>
                  <p>Professional Video Editing, Reels Editing & Content Creation, Animation & Motion Graphics.</p>
                </div>
              </div>

              <div className="has-spoke has-spoke-right">
                <div className="has-spoke-border"></div>
                <div className="has-connection has-conn-right-2"></div>
                <div className="has-spoke-icon-wrapper">
                  <div className="has-spoke-icon"><FaCamera /></div>
                </div>
                <div className="has-spoke-content">
                  <h4>Photography & Shoots</h4>
                  <p>Product Photography & Videography, DSLR Camera Shoots, Drone Photography & Videography.</p>
                </div>
              </div>

              <div className="has-spoke has-spoke-right">
                <div className="has-spoke-border"></div>
                <div className="has-connection has-conn-right-3"></div>
                <div className="has-spoke-icon-wrapper">
                  <div className="has-spoke-icon"><FaMicrophone /></div>
                </div>
                <div className="has-spoke-content">
                  <h4>Creative Services</h4>
                  <p>Podcast Production, Personal Branding, and Poster & Flex Banner Design.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '3.5rem' }}>
            <Link to="/services" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
              Explore Our Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 4: WHY CHOOSE GROW LAP?
          ========================================================================== */}
      <section className="about-why-growlap-section section-padding">
        <div className="container">
          {/* Top Heading + Banner Visual */}
          <div className="why-growlap-header-grid">
            <div className="why-growlap-header-text">
              <p className="section-subtitle text-accent">WHY CHOOSE GROW LAP</p>
              <h2 className="why-growlap-title">
                Good Ideas Matter. <br />
                <span className="text-accent">The Right Execution Makes the Difference.</span>
              </h2>
              <p className="why-growlap-desc">
                We understand that every business has different goals. Our approach combines clear planning, creative thinking, and consistent communication to help you make the most of your marketing efforts.
              </p>
            </div>

            <div className="why-growlap-banner-visual">
              <div className="why-growlap-banner-card">
                <img 
                  src="/service_shoots_new.webp" 
                  alt="Grow Lap Studio & Creative Space" 
                  className="why-growlap-banner-img"
                />
                <div className="why-banner-tag-overlay">
                  <span>Strategy • Marketing • Creative • Growth</span>
                </div>
              </div>
            </div>
          </div>

          {/* 9 Features Grid (3x3) */}
          <div className="why-cards-grid">
            {whyFeatures.map((item, idx) => (
              <div key={idx} className="why-card-item">
                <div className="why-card-top-row">
                  <div className="why-card-icon-box">
                    {item.icon}
                  </div>
                  <h3 className="why-card-title">{item.title}</h3>
                </div>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 5: OUR MISSION & VISION
          ========================================================================== */}
      <section className="about-mission-section section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <p className="section-subtitle text-accent">OUR MISSION & VISION</p>
            <h2 className="section-title">Driven by Purpose. Built for What's Next.</h2>
            <div className="section-line"></div>
          </div>

          <div className="mission-vision-grid">
            {/* Mission Card */}
            <div className="mission-card-new">
              <div className="mission-card-glow"></div>
              <div className="mission-card-header">
                <div className="mission-icon-circle">
                  <FaRocket className="mission-svg-icon" />
                </div>
                <h3>Our Mission</h3>
              </div>
              <p className="mission-card-body">
                Our mission is to help businesses get noticed, reach the right people, and grow through marketing and creative work that suits their needs. We empower businesses with practical digital marketing strategies and creative content that connects with people and builds lasting brand value.
              </p>
            </div>

            {/* Vision Card */}
            <div className="mission-card-new">
              <div className="mission-card-glow"></div>
              <div className="mission-card-header">
                <div className="mission-icon-circle">
                  <FaEye className="mission-svg-icon" />
                </div>
                <h3>Our Vision</h3>
              </div>
              <p className="mission-card-body">
                Our vision is to become a digital marketing company that businesses trust for fresh ideas, quality work, and support they can count on. We strive to be a trusted growth partner by bringing marketing, technology, and creativity together to create meaningful, measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 6: HOW WE WORK (Our Process)
          ========================================================================== */}
      <section className="about-process-section section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <p className="section-subtitle text-accent">HOW WE WORK</p>
            <h2 className="section-title">From Your Ideas to a Clear Growth Plan</h2>
            <div className="section-line"></div>
            <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '1rem auto 0', fontSize: '1.05rem' }}>
              We follow a straightforward process to understand your needs, get the work done, and improve along the way.
            </p>
          </div>

          <div className="about-process-list">
            {processSteps.map((step, idx) => (
              <div key={idx} className="about-process-step-box">
                <div className="about-process-number">{step.step}</div>
                <div className="about-process-content">
                  <h3 className="about-process-step-title">{step.title}</h3>
                  <p className="about-process-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 7: FINAL CALL TO ACTION
          ========================================================================== */}
      <section className="about-final-cta-section section-padding">
        <div className="container text-center">
          <p className="section-subtitle text-accent" style={{ marginBottom: '0.8rem' }}>
            YOUR NEXT CHAPTER STARTS HERE
          </p>
          <h2 className="about-final-cta-heading">
            Let's Turn Your Ideas into <span className="text-accent">Growth.</span>
          </h2>
          <p className="about-final-cta-desc">
            Looking to improve your online presence, reach the right customers, or create content that represents your brand? Let's talk about your business and find the right way forward together.
          </p>
          <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '16px 36px', fontSize: '1.1rem' }}>
            Contact Us <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 8: FAQ SECTION
          ========================================================================== */}
      <section className="about-faq-section section-padding" ref={faqRef}>
        <div className="container">
          <div className="section-header text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3.5rem' }}>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="section-line" style={{ width: '60px', height: '3px', backgroundColor: 'var(--accent-orange)', margin: '1rem auto 0 auto', borderRadius: '2px' }}></div>
          </div>
          <div className="about-faqs-container">
            {/* Box 1 */}
            <details className={`about-faq-item ${isFaqVisible ? 'animate-show' : ''}`}>
              <summary>What industries do you work with?</summary>
              <p>We work with startups, local businesses, e-commerce brands, educational institutions, healthcare providers, real estate companies, restaurants, and enterprises across multiple industries.</p>
            </details>
            {/* Box 2 */}
            <details className={`about-faq-item ${isFaqVisible ? 'animate-show' : ''}`}>
              <summary>Do you offer customized digital marketing packages?</summary>
              <p>Yes. Every business has unique goals, so we create personalized marketing strategies and service packages based on your budget and objectives.</p>
            </details>
            {/* Box 3 */}
            <details className={`about-faq-item ${isFaqVisible ? 'animate-show' : ''}`}>
              <summary>How long does it take to see results?</summary>
              <p>The timeline depends on the service. SEO typically delivers long-term results, while paid advertising and social media campaigns can generate traffic and leads much more quickly.</p>
            </details>
            {/* Box 4 */}
            <details className={`about-faq-item ${isFaqVisible ? 'animate-show' : ''}`}>
              <summary>Do you provide creative services along with marketing?</summary>
              <p>Absolutely. We offer graphic design, branding, logo design, video editing, photography, animation, content creation, and other creative services to support your marketing efforts.</p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;