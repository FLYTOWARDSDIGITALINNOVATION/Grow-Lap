import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaRocket, FaLightbulb, FaCheckCircle, FaSearch, FaHashtag, FaAd, 
  FaLaptopCode, FaPaintBrush, FaVideo, FaCamera, FaMicrophone, FaEnvelope, 
  FaWhatsapp, FaTrophy, FaUsers, FaChartLine, FaStore, FaHospital, 
  FaGraduationCap, FaHome, FaUtensils, FaPlane, FaPiggyBank, FaIndustry,
  FaBullseye, FaAngleDoubleRight, FaArrowRight, FaPenNib, FaBuilding
} from 'react-icons/fa';
import './AboutPage.css';
import './SeoPage.css'; // For SEO FAQ styles
import '../components/HubAndSpoke.css'; // For the What We Do Hub and Spoke design

// Local Image Imports for Bento Box Grid
import schoolImg from '../assets/images/school.webp';
import hospitalImg from '../assets/images/hospital.webp';
import realEstateImg from '../assets/images/real-estate.webp';
import restaurantImg from '../assets/images/restaurant.webp';
import boutiqueImg from '../assets/images/boutique.webp';
import manufacturingImg from '../assets/images/manufacturing.webp';
import financeImg from '../assets/images/finance-service.webp';
import retailImg from '../assets/images/retail-shop.webp';
import resortsImg from '../assets/images/resorts.webp';
import card1Img from '../assets/images/card1.webp';
import card2Img from '../assets/images/card2.webp';
import card3Img from '../assets/images/card3.webp';
import card4Img from '../assets/images/card4.webp';

const AboutPage = () => {
  const [isMissionVisible, setIsMissionVisible] = useState(false);
  const [isWhoWeAreVisible, setIsWhoWeAreVisible] = useState(false);
  const [isFaqVisible, setIsFaqVisible] = useState(false);
  const missionRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | Fly Towards Digital Innovation";
  }, []);

  useEffect(() => {
    const observerOptions = { threshold: 0.2, rootMargin: '0px 0px -50px 0px' };

    const missionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsMissionVisible(true);
    }, observerOptions);

    const whoWeAreObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsWhoWeAreVisible(true);
    }, observerOptions);

    const faqObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsFaqVisible(true);
    }, observerOptions);

    if (missionRef.current) missionObserver.observe(missionRef.current);
    if (whoWeAreRef.current) whoWeAreObserver.observe(whoWeAreRef.current);
    if (faqRef.current) faqObserver.observe(faqRef.current);

    return () => {
      missionObserver.disconnect();
      whoWeAreObserver.disconnect();
      faqObserver.disconnect();
    };
  }, []);

  const whatWeDo = [
    { title: "Search Engine Optimization (SEO)", icon: <FaSearch /> },
    { title: "Social Media Marketing (SMM)", icon: <FaHashtag /> },
    { title: "Google Ads & Pay-Per-Click (PPC)", icon: <FaAd /> },
    { title: "Meta Ads (Facebook & Instagram)", icon: <FaAd /> },
    { title: "Website Design & Development", icon: <FaLaptopCode /> },
    { title: "Branding & Graphic Design", icon: <FaPaintBrush /> },
    { title: "Logo Design", icon: <FaPenNib /> },
    { title: "Poster & Flex Banner Design", icon: <FaPaintBrush /> },
    { title: "Professional Video Editing", icon: <FaVideo /> },
    { title: "Reels Editing & Content Creation", icon: <FaVideo /> },
    { title: "Animation & Motion Graphics", icon: <FaVideo /> },
    { title: "Product Photography & Videography", icon: <FaCamera /> },
    { title: "DSLR Camera Shoots", icon: <FaCamera /> },
    { title: "Drone Photography & Videography", icon: <FaCamera /> },
    { title: "Podcast Production", icon: <FaMicrophone /> },
    { title: "Personal Branding", icon: <FaUsers /> },
    { title: "Content Marketing", icon: <FaPenNib /> },
    { title: "Email Marketing", icon: <FaEnvelope /> },
    { title: "WhatsApp Marketing", icon: <FaWhatsapp /> }
  ];

  const whyChooseUs = [
    "Experienced Digital Marketing Experts",
    "Customized Marketing Strategies",
    "Creative & Innovative Solutions",
    "Transparent Communication",
    "Data-Driven Campaigns",
    "Affordable Pricing",
    "On-Time Project Delivery",
    "Dedicated Customer Support",
    "Proven Results Across Multiple Industries"
  ];

  const ourProcess = [
    { step: 1, title: "Discover", desc: "We understand your business, goals, competitors, and target audience." },
    { step: 2, title: "Strategize", desc: "Our experts create a customized digital marketing and branding strategy tailored to your business objectives." },
    { step: 3, title: "Create", desc: "We design engaging content, develop creative assets, and build high-performing marketing campaigns." },
    { step: 4, title: "Launch", desc: "We execute campaigns across the most effective digital platforms to maximize reach and engagement." },
    { step: 5, title: "Optimize", desc: "We continuously monitor performance, analyze data, and optimize campaigns to improve results and maximize ROI." }
  ];

  const industries = [
    "E-commerce", "Healthcare", "Education", "Real Estate", 
    "Restaurants & Cafés", "Fashion & Beauty", "Technology", 
    "Manufacturing", "Travel & Tourism", "Finance", 
    "Corporate Businesses", "Startups & Entrepreneurs"
  ];

  return (
    <div className="about-page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-dark)' }}>
      
      {/* 1. Hero / Intro Section */}
      <div className="container" style={{ paddingBottom: '3rem' }}>
        <div className="grid-2 about-hero-grid" style={{ alignItems: 'center', gap: '2rem' }}>
          <div className="about-hero-text">
            <p className="section-subtitle text-accent" style={{ margin: 0, marginBottom: '1rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800' }}>ABOUT US</p>
            <h1 className="about-hero-title">
              Your Trusted Digital Marketing & <br className="hide-mobile" />
              <span className="text-accent">Creative Growth Partner</span>
            </h1>
            <p className="about-hero-desc">
              Welcome to <strong>Grow Lap</strong>, where creativity meets strategy. We are a results-driven <strong>Digital Marketing Agency</strong> dedicated to helping businesses grow their online presence, generate quality leads, and increase sales through innovative marketing solutions.
            </p>
            <p className="about-hero-desc">
              Our team of digital marketers, designers, photographers, videographers, and content creators work together to build powerful brand experiences that connect with your audience. Whether you're a startup, small business, or established enterprise, we provide customized digital marketing strategies designed to achieve measurable success.
            </p>
          </div>
          <div className="about-hero-image-wrapper" style={{ position: 'relative', textAlign: 'center' }}>
            <img src="/about-hero-new.webp" alt="About Us" className="about-hero-image" style={{ width: '85%', maxWidth: '450px', position: 'relative', zIndex: 2, mixBlendMode: 'lighten', margin: '0 auto' }} />
          </div>
        </div>
      </div>

      {/* 2. Who We Are - Bento Box Model */}
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
          
          {/* Text Side (Left) */}
          <div className="about-who-text">
            <p className="section-subtitle text-accent" style={{ margin: 0, marginBottom: '1rem', fontSize: '1.1rem', letterSpacing: '2px', fontWeight: '700' }}>WHO WE ARE</p>
            <h2 className="about-who-title" style={{ marginTop: 0, marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Passionate&nbsp;About <br/><span style={{ color: 'var(--accent-orange)' }}>Your Growth</span>
            </h2>
            
            <div style={{ paddingLeft: '1rem', borderLeft: '4px solid var(--accent-orange)', marginBottom: '1.5rem', background: 'linear-gradient(90deg, rgba(255, 94, 0, 0.05) 0%, transparent 100%)', padding: '1rem 1rem 1rem 1.2rem', borderRadius: '0 8px 8px 0' }}>
              <p style={{ fontSize: '1.05rem', color: '#fff', margin: 0, lineHeight: '1.6', fontStyle: 'italic', fontWeight: '500' }}>
                "We don't just execute campaigns; we architect digital growth."
              </p>
            </div>
            
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: '1.7' }}>
              We are passionate about helping businesses thrive in the digital world. By combining creativity, technology, and data-driven marketing, we deliver solutions that strengthen your brand and maximize your return on investment (ROI).
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
              From building engaging websites to creating viral social media campaigns, we focus on delivering results that help your business grow faster and smarter.
            </p>
          </div>

          {/* Image Grid Side (Right) */}
          <div className="about-who-image-grid">
             {/* Decorative Background Blob */}
             <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'var(--accent-orange)', filter: 'blur(100px)', opacity: 0.15, zIndex: 0 }}></div>
             <img src="/about-who-we-are.webp" alt="Team" className="about-who-img-main" />
             <img src="/bg-team.webp" alt="Collaboration" className="about-who-img-sub" />
             <img src="/bg-projects.webp" alt="Success" className="about-who-img-sub" />
          </div>

        </div>
      </div>

      {/* 3. Mission & Vision */}
      <div style={{ backgroundColor: 'var(--bg-dark)', padding: '5rem 0' }}>
        <div ref={missionRef} className="container grid-2" style={{ gap: '3rem', overflow: 'hidden' }}>
          <div className={`mission-vision-card ${isMissionVisible ? 'about-slide-in-left' : 'about-hidden-left'}`} style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.75)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '3rem', 
            borderRadius: '15px', 
            border: '1px solid rgba(255, 94, 0, 0.3)', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)' 
          }}>
            <FaRocket style={{ fontSize: '3rem', color: 'var(--accent-orange)', marginBottom: '1.5rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
            <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>Our Mission</h3>
            <p style={{ color: '#ffffff', fontSize: '1.1rem', lineHeight: '1.6', textShadow: '0 2px 4px rgba(0,0,0,0.8)', fontWeight: '500' }}>
              Our mission is to empower businesses with innovative digital marketing and creative services that increase visibility, build customer trust, and drive sustainable business growth.
            </p>
          </div>
          <div className={`mission-vision-card ${isMissionVisible ? 'about-slide-in-right' : 'about-hidden-right'}`} style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.75)), url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '3rem', 
            borderRadius: '15px', 
            border: '1px solid rgba(255, 94, 0, 0.3)', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)' 
          }}>
            <FaLightbulb style={{ fontSize: '3rem', color: 'var(--accent-orange)', marginBottom: '1.5rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
            <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>Our Vision</h3>
            <p style={{ color: '#ffffff', fontSize: '1.1rem', lineHeight: '1.6', textShadow: '0 2px 4px rgba(0,0,0,0.8)', fontWeight: '500' }}>
              To become a leading digital marketing agency recognized for creativity, innovation, customer satisfaction, and measurable marketing success.
            </p>
          </div>
        </div>
      </div>

      {/* 4. What We Do (Hub and Spoke Design) */}
      <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="has-header text-center" style={{ marginBottom: '4rem' }}>
          <p className="section-subtitle text-accent" style={{ margin: 0 }}>OUR SERVICES</p>
          <h2 className="has-title" style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>What We Do</h2>
          <p className="has-subtitle" style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '1rem auto 0' }}>We offer complete digital marketing and creative solutions tailored for your brand.</p>
        </div>

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
      </div>

      {/* 5. Why Choose Us - Sticky List Model (No Image, Original Content) */}
      <div style={{ backgroundColor: 'var(--bg-dark)', padding: '8rem 0', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="why-sticky-grid">
            
            {/* Sticky Left Column */}
            <div style={{ position: 'sticky', top: '120px' }}>
              <p className="section-subtitle text-accent" style={{ margin: 0, letterSpacing: '2px', fontWeight: 'bold' }}>THE FLY TOWARDS DIFFERENCE</p>
              <h2 style={{ fontSize: '4rem', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Why<br/>Choose Us?</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '400px' }}>
                We combine creativity, technology, and data to deliver exceptional digital experiences that elevate your brand and drive measurable growth.
              </p>
            </div>

            {/* Scrolling Right Column (List) */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {whyChooseUs.map((reason, idx) => (
                <div key={idx} className="why-row-item" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  padding: '2.5rem 0', 
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-orange)', width: '60px', flexShrink: 0, opacity: 0.8 }}>
                    0{idx + 1}
                  </div>
                  <h4 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '600', color: '#fff', flexGrow: 1, transition: 'color 0.3s ease' }}>
                    {reason}
                  </h4>
                  <div className="why-row-icon" style={{ color: 'var(--accent-orange)', fontSize: '1.5rem', opacity: 0, transform: 'translateX(-20px)', transition: 'all 0.3s ease' }}>
                    <FaArrowRight />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* 6. Our Process */}
      <div className="container" style={{ padding: '5rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-subtitle text-accent" style={{ margin: 0 }}>HOW WE WORK</p>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Our Process</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          {ourProcess.map((step, idx) => (
            <div key={idx} className="process-box" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-orange)' }}>
              <div style={{ fontSize: '3rem', fontWeight: '900', color: 'rgba(255,94,0,0.2)', lineHeight: '1' }}>
                0{step.step}
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-orange)' }}>{step.title}</h3>
                <p style={{ color: '#ffffff', margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Industries We Serve - Bento Box Grid Model */}
      <div style={{ backgroundColor: 'var(--bg-dark)', padding: '8rem 0', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <p className="section-subtitle text-accent" style={{ margin: 0, letterSpacing: '2px', fontWeight: 'bold' }}>WHO WE HELP</p>
            <h2 style={{ fontSize: '3.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>Industries We Serve</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>We provide tailored digital marketing strategies that drive growth for businesses across various sectors.</p>
          </div>
          
          <div className="bento-grid">
            {[
              { name: "E-commerce", icon: <FaStore />, type: 'large', img: retailImg, desc: "Boost online sales and maximize conversions with targeted product campaigns and CRO." },
              { name: "Healthcare", icon: <FaHospital />, type: '', img: hospitalImg, desc: "HIPAA-compliant marketing to build patient trust and grow your practice." },
              { name: "Education", icon: <FaGraduationCap />, type: '', img: schoolImg, desc: "Drive student enrollments and enhance your institution's online presence." },
              { name: "Real Estate", icon: <FaHome />, type: 'tall', img: realEstateImg, desc: "Generate high-quality leads and showcase properties to the right buyers." },
              { name: "Restaurants", icon: <FaUtensils />, type: '', img: restaurantImg, desc: "Fill your tables and increase online orders with local SEO and social media." },
              { name: "Fashion", icon: <FaTrophy />, type: 'wide', img: boutiqueImg, desc: "Build a highly engaged audience and drive brand loyalty with stunning visual campaigns." },
              { name: "Technology", icon: <FaLaptopCode />, type: 'large', img: card2Img, desc: "Market innovative software and SaaS products to B2B and B2C audiences." },
              { name: "Manufacturing", icon: <FaIndustry />, type: '', img: manufacturingImg, desc: "Generate qualified B2B leads and establish industry authority." },
              { name: "Travel & Tourism", icon: <FaPlane />, type: 'tall', img: resortsImg, desc: "Attract more tourists and increase bookings with captivating destination marketing." },
              { name: "Finance", icon: <FaPiggyBank />, type: '', img: financeImg, desc: "Build authority and trust with data-driven marketing for financial services." },
              { name: "Corporate", icon: <FaBuilding />, type: 'wide', img: card3Img, desc: "Enhance your corporate identity and streamline your B2B lead generation." },
              { name: "Startups", icon: <FaRocket />, type: '', img: card4Img, desc: "Scale rapidly with growth-hacking strategies tailored for new ventures." }
            ].map((item, idx) => (
              <div className={`bento-flip-container ${item.type}`} key={idx}>
                <div className="bento-flip-inner">
                  {/* Front Side */}
                  <div className="bento-flip-front" style={{ backgroundImage: `url(${item.img})` }}>
                    <div className="bento-icon">{item.icon}</div>
                    <h4 className="bento-title">{item.name}</h4>
                  </div>
                  {/* Back Side */}
                  <div className="bento-flip-back">
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 8. Why Digital Marketing Matters */}
      <div style={{ backgroundColor: 'var(--accent-orange)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container why-marketing-grid">
          {/* Left Image */}
          <div className="why-marketing-img-container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
             <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400" alt="Digital Marketing Graph" className="why-marketing-image" style={{ transform: 'rotate(-5deg)' }} />
          </div>

          {/* Center Content */}
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', marginBottom: '1.5rem', color: '#fff', fontFamily: '"Outfit", sans-serif', fontWeight: '800' }}>Why Digital Marketing Matters</h2>
            <p style={{ fontSize: 'clamp(0.95rem, 3.5vw, 1.25rem)', color: '#fff', margin: '0 auto', lineHeight: '1.7', fontWeight: '500', fontStyle: 'italic' }}>
              "Digital marketing helps businesses reach the right audience, build brand awareness, generate qualified leads, and increase revenue. With the right strategy, your business can stay ahead of the competition and achieve long-term online success."
            </p>
          </div>

          {/* Right Image */}
          <div className="why-marketing-img-container" style={{ display: 'flex', justifyContent: 'flex-start' }}>
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400" alt="Data Analytics" className="why-marketing-image" style={{ transform: 'rotate(5deg)' }} />
          </div>
        </div>
      </div>

      {/* 9. FAQ Section */}
      <div style={{ backgroundColor: 'var(--bg-dark)', padding: '5rem 0' }} ref={faqRef}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Frequently Asked Questions</h2>
          </div>
          <div className="seo-faqs" style={{ maxWidth: '800px', margin: '0 auto', overflow: 'hidden' }}>
            {/* Box 1 - Left */}
            <details className={`seo-faq-item slide-transition ${isFaqVisible ? 'slide-in-active' : 'slide-hidden-left'}`} style={{ transitionDelay: '0.1s' }}>
              <summary>What industries do you work with?</summary>
              <p>We work with startups, local businesses, e-commerce brands, educational institutions, healthcare providers, real estate companies, restaurants, and enterprises across multiple industries.</p>
            </details>
            {/* Box 2 - Right */}
            <details className={`seo-faq-item slide-transition ${isFaqVisible ? 'slide-in-active' : 'slide-hidden-right'}`} style={{ transitionDelay: '0.2s' }}>
              <summary>Do you offer customized digital marketing packages?</summary>
              <p>Yes. Every business has unique goals, so we create personalized marketing strategies and service packages based on your budget and objectives.</p>
            </details>
            {/* Box 3 - Left */}
            <details className={`seo-faq-item slide-transition ${isFaqVisible ? 'slide-in-active' : 'slide-hidden-left'}`} style={{ transitionDelay: '0.3s' }}>
              <summary>How long does it take to see results?</summary>
              <p>The timeline depends on the service. SEO typically delivers long-term results, while paid advertising and social media campaigns can generate traffic and leads much more quickly.</p>
            </details>
            {/* Box 4 - Right */}
            <details className={`seo-faq-item slide-transition ${isFaqVisible ? 'slide-in-active' : 'slide-hidden-right'}`} style={{ transitionDelay: '0.4s' }}>
              <summary>Do you provide creative services along with marketing?</summary>
              <p>Absolutely. We offer graphic design, branding, logo design, video editing, photography, animation, content creation, and other creative services to support your marketing efforts.</p>
            </details>
          </div>
        </div>
      </div>

      {/* 10. CTA Section - Cinematic Parallax Model */}
      <div className="cta-cinematic-section">
        <div className="cta-cinematic-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h2 className="cta-cinematic-heading" style={{ fontSize: '3.5rem' }}>Let's Grow Your Business Together</h2>
          
          <p className="cta-cinematic-paragraph" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: '400', fontFamily: 'Inter, sans-serif' }}>
            At <strong>Grow Lap</strong>, we believe every business deserves a strong digital presence. Our mission is to help you attract more customers, build a trusted brand, and achieve sustainable growth through innovative digital marketing and creative solutions.
          </p>
          
          <p className="cta-cinematic-paragraph" style={{ fontSize: '1.2rem', marginBottom: '2.5rem', fontWeight: '400', fontFamily: 'Inter, sans-serif' }}>
            Whether you're looking to improve your search engine rankings, run high-performing advertising campaigns, create engaging content, or build a memorable brand identity, our team is ready to help.
          </p>
          
          <p className="cta-cinematic-paragraph" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2.5rem', color: '#fff' }}>
            Contact us today and let's transform your ideas into measurable digital success.
          </p>
          
          <Link to="/contact" className="btn-primary cta-cinematic-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            Get a Free Consultation <FaArrowRight />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
