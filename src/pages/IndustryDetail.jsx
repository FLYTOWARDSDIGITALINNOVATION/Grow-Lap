import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { industryData } from '../data/industryData';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaArrowRight, 
  FaPaperPlane, 
  FaPhoneAlt,
  FaSearch,
  FaBullhorn,
  FaVideo,
  FaLaptopCode,
  FaShareAlt,
  FaShoppingCart,
  FaLightbulb,
  FaMapMarkerAlt,
  FaCar,
  FaMotorcycle,
  FaMobileAlt,
  FaPenNib,
  FaStar,
  FaUsers,
  FaAd,
  FaCamera
} from 'react-icons/fa';
import ProcessSection from '../components/ProcessSection';
import './ServiceDetail.css';

// Import card background images
import card1 from '../assets/images/card1.webp';
import card2 from '../assets/images/card2.webp';
import card3 from '../assets/images/card3.webp';
import card4 from '../assets/images/card4.webp';

const cardBgImages = [card1, card2, card3, card4];

// Helper to return relevant icon based on deliverable title
const getDeliverableIcon = (title) => {
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes('car')) return <FaCar />;
  if (lowerTitle.includes('bike') || lowerTitle.includes('motorcycle')) return <FaMotorcycle />;
  if (lowerTitle.includes('mobile') || lowerTitle.includes('phone') || lowerTitle.includes('smartphone')) return <FaMobileAlt />;
  if (lowerTitle.includes('seo') || lowerTitle.includes('search') || lowerTitle.includes('optimization') || lowerTitle.includes('ranking')) return <FaSearch />;
  if (lowerTitle.includes('ads') || lowerTitle.includes('ad ') || lowerTitle.includes('campaign') || lowerTitle.includes('ppc') || lowerTitle.includes('lead') || lowerTitle.includes('google ads')) return <FaBullhorn />;
  if (lowerTitle.includes('video') || lowerTitle.includes('shoot') || lowerTitle.includes('photography') || lowerTitle.includes('walkthrough') || lowerTitle.includes('production') || lowerTitle.includes('reels') || lowerTitle.includes('shorts') || lowerTitle.includes('media') || lowerTitle.includes('camera')) return <FaVideo />;
  if (lowerTitle.includes('ecommerce') || lowerTitle.includes('e-commerce') || lowerTitle.includes('shop') || lowerTitle.includes('store') || lowerTitle.includes('retail') || lowerTitle.includes('sales')) return <FaShoppingCart />;
  if (lowerTitle.includes('landing') || lowerTitle.includes('web') || lowerTitle.includes('portal') || lowerTitle.includes('code') || lowerTitle.includes('dev')) return <FaLaptopCode />;
  if (lowerTitle.includes('social') || lowerTitle.includes('linkedin') || lowerTitle.includes('instagram') || lowerTitle.includes('facebook') || lowerTitle.includes('whatsapp') || lowerTitle.includes('profile') || lowerTitle.includes('orm') || lowerTitle.includes('reputation') || lowerTitle.includes('reviews') || lowerTitle.includes('branding')) return <FaShareAlt />;
  
  return <FaLightbulb />;
};


const IndustryDetail = () => {
  const { industrySlug, showroomType } = useParams();
  const actualSlug = showroomType ? `showrooms-${showroomType}` : industrySlug;
  const industry = industryData[actualSlug];
  const [activeFaq, setActiveFaq] = useState(0);

  // Scroll to top when mounted or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [industrySlug, showroomType]);

  if (!industry) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center', minHeight: '60vh', backgroundColor: 'var(--bg-dark)', color: '#fff' }}>
        <h2>Industry not found</h2>
        <Link to="/industry" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>Back to Industries</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-container">
      
      {/* Modern Lead Gen Hero Section */}
      <section className="sd-hero">
        <div className="container sd-hero-grid">
          
          <div className="sd-hero-content">
            {showroomType ? (
              <Link to="/industry/showrooms" className="sd-breadcrumb">
                <FaArrowLeft /> Back to Showrooms
              </Link>
            ) : (
              <Link to="/industry" className="sd-breadcrumb">
                <FaArrowLeft /> Back to Industries
              </Link>
            )}
            <h1 className="sd-hero-title">
              {industry.title.split(' & ').map((part, i) => (
                <React.Fragment key={i}>
                  {i > 0 && ' & '}
                  <span style={i === 1 ? { color: 'var(--accent-orange)' } : {}}>{part}</span>
                </React.Fragment>
              ))}
            </h1>
            <p className="sd-hero-desc" style={{ marginBottom: '2rem' }}>
              <strong>{industry.subtitle}</strong>
            </p>
            <p className="sd-hero-desc">
              {industry.description}
            </p>
            
            {/* Custom Metrics/Stats Row */}
            <div style={{ 
              display: 'flex', 
              gap: '2.5rem', 
              margin: '2.5rem 0',
              padding: '1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px'
            }}>
              {industry.stats.map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--accent-orange)' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.3rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="sd-hero-buttons">
              <Link to="/contact" className="btn-primary sd-btn" style={{ padding: '12px 24px' }}>
                <FaPaperPlane /> Get Started
              </Link>
              <div className="sd-btn-or">OR</div>
              <a href="tel:+917695883647" className="btn-secondary sd-btn" style={{ padding: '12px 24px' }}>
                <FaPhoneAlt /> Call Now
              </a>
            </div>
          </div>
          
          <div className="sd-hero-form-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src={industry.image} 
              alt={industry.title} 
              style={{
                width: '100%',
                maxHeight: '450px',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255, 94, 0, 0.2)'
              }}
            />
          </div>

        </div>
      </section>

      {/* Showroom Verticals Section (Only on main Showrooms page) */}
      {industrySlug === 'showrooms' && !showroomType && (
        <section className="showroom-parallax-section">
          {/* Sticky Background Header */}
          <div className="showroom-sticky-header">
            <div className="container">
              <h4 style={{ color: 'var(--accent-orange)', fontSize: '1.2rem', marginBottom: '10px', fontWeight: '700', letterSpacing: '1.5px' }}>CHOOSE YOUR INDUSTRY</h4>
              <h2 style={{ fontSize: '3rem', color: '#fff', marginBottom: '1.5rem', fontStyle: 'italic', fontWeight: '800' }}>Explore Showroom Verticals</h2>
              <p style={{ color: '#ccc', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>Select your specific showroom segment to view tailored digital marketing & production strategies.</p>
            </div>
          </div>

          {/* Scrolling Content Overlay */}
          <div className="showroom-scrolling-content">
            <div className="container">
              <div className="showroom-verticals-grid">
                {/* Card 1: Car Showroom */}
                <Link 
                  to="/industry/showrooms/car" 
                  className="sd-premium-card has-bg" 
                  style={{ 
                    textDecoration: 'none',
                    '--card-bg': `url(${cardBgImages[0]})`
                  }}
                >
                  <div className="sd-card-number">01</div>
                  <div className="sd-card-icon-container">
                    <FaCar />
                  </div>
                  <div className="sd-premium-card-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', zIndex: 2 }}>
                    <div>
                      <h3 className="sd-card-title" style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.8rem' }}>Car Showroom</h3>
                      <p className="sd-card-desc" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: 0 }}>
                        Drive test bookings, generate premium purchase leads, and showcase vehicle models with cinematic video walkthroughs.
                      </p>
                    </div>
                    <span style={{ color: 'var(--accent-orange)', fontWeight: '700', marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      View Strategy &rarr;
                    </span>
                  </div>
                </Link>

                {/* Card 2: Bike Showroom */}
                <Link 
                  to="/industry/showrooms/bike" 
                  className="sd-premium-card has-bg" 
                  style={{ 
                    textDecoration: 'none',
                    '--card-bg': `url(${cardBgImages[1]})`
                  }}
                >
                  <div className="sd-card-number">02</div>
                  <div className="sd-card-icon-container">
                    <FaMotorcycle />
                  </div>
                  <div className="sd-premium-card-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', zIndex: 2 }}>
                    <div>
                      <h3 className="sd-card-title" style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.8rem' }}>Bike Showroom</h3>
                      <p className="sd-card-desc" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: 0 }}>
                        Promote test rides, showcase performance exhaust notes on reels, and run hyper-local finance & EMI campaigns.
                      </p>
                    </div>
                    <span style={{ color: 'var(--accent-orange)', fontWeight: '700', marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      View Strategy &rarr;
                    </span>
                  </div>
                </Link>

                {/* Card 3: Mobile Showroom */}
                <Link 
                  to="/industry/showrooms/mobile" 
                  className="sd-premium-card has-bg" 
                  style={{ 
                    textDecoration: 'none',
                    '--card-bg': `url(${cardBgImages[2]})`
                  }}
                >
                  <div className="sd-card-number">03</div>
                  <div className="sd-card-icon-container">
                    <FaMobileAlt />
                  </div>
                  <div className="sd-premium-card-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', zIndex: 2 }}>
                    <div>
                      <h3 className="sd-card-title" style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.8rem' }}>Mobile Showroom</h3>
                      <p className="sd-card-desc" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: 0 }}>
                        Promote new smartphone launches, drive retail exchange campaigns, and run local map coupon ads to beat online stores.
                      </p>
                    </div>
                    <span style={{ color: 'var(--accent-orange)', fontWeight: '700', marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      View Strategy &rarr;
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Sub-Services Grid Section (Deliverables) */}
      <section className="sd-subservices-section">
        <div className="container">
          <div className="sd-section-header">
            <h4 style={{ color: 'var(--accent-orange)', fontSize: '1.2rem', marginBottom: '10px', fontWeight: '700', letterSpacing: '1.5px' }}>OUR SOLUTIONS</h4>
            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', fontStyle: 'italic', fontWeight: '800' }}>Custom Deliverables For Your Brand</h2>
            <p style={{ color: '#ccc', fontSize: '1.1rem' }}>We design and execute custom creative and advertising workflows built for conversion.</p>
          </div>
          
          <div className="id-grid">
            {industry.deliverables.map((item, i) => {
              const bgImg = cardBgImages[i % cardBgImages.length];
              
              return (
                <div 
                  key={i} 
                  className={`sd-premium-card ${bgImg ? 'has-bg' : ''}`}
                  style={bgImg ? { '--card-bg': `url(${bgImg})` } : {}}
                >
                  <div className="sd-card-number">0{i + 1}</div>
                  <div className="sd-card-icon-container">
                    {getDeliverableIcon(item.title)}
                  </div>
                  <div className="sd-premium-card-content">
                    <h3 className="sd-card-title">{item.title}</h3>
                    <p className="sd-card-desc" style={{ marginBottom: 0 }}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Custom Details (if present) */}
      {(industry.whyChoose || industry.whoWeWorkWith || industry.seoProcess || industry.customProcess) && (
        <section className="sd-seo-details-section" style={{ padding: '5rem 0', backgroundColor: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid rgba(255, 255, 255, 0.03)', borderBottom: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
              
              {industry.whyChoose && (
                <div className="seo-detail-block">
                  <h3 style={{ color: 'var(--accent-orange)', marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: '800' }}>{industry.whyChooseTitle || 'Why Choose Us?'}</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {industry.whyChoose.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                        <FaCheckCircle style={{ color: 'var(--accent-orange)', flexShrink: 0, marginTop: '4px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {industry.whoWeWorkWith && (
                <div className="seo-detail-block">
                  <h3 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: '800' }}>{industry.whoWeWorkWithTitle || 'Who We Work With'}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {industry.whoWeWorkWith.map((item, idx) => (
                      <span key={idx} style={{ 
                        padding: '8px 16px', 
                        backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                        border: '1px solid rgba(255, 255, 255, 0.05)', 
                        borderRadius: '20px', 
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)'
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {(industry.seoProcess || industry.customProcess) && (
                <div className="seo-detail-block">
                  <h3 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: '800' }}>{industry.customProcessTitle || 'Our Process'}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {(industry.seoProcess || industry.customProcess).map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div style={{ 
                          width: '28px', 
                          height: '28px', 
                          borderRadius: '50%', 
                          backgroundColor: 'var(--accent-orange)', 
                          color: '#fff', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontSize: '0.85rem', 
                          fontWeight: 'bold',
                          flexShrink: 0
                        }}>
                          {idx + 1}
                        </div>
                        <span style={{ color: 'var(--text-muted)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      <div style={{ paddingBottom: '3rem' }}>
        <ProcessSection />
      </div>

      {/* FAQ Accordion Section */}
      <section className="sd-overview-section">
        <div className="container sd-overview-grid">
          
          <div className="sd-overview-left">
            <h2 className="sd-overview-title" style={{ lineHeight: '1.2' }}>
              Why Choose Fly Towards <br/><span style={{ color: 'var(--accent-orange)' }}>For {industry.title.split(' & ')[0]}</span>?
            </h2>
            
            {industry.benefits ? (
              <div style={{ marginTop: '2rem' }}>
                {industry.benefits.map((benefit, i) => (
                  <p key={i} className="sd-overview-text" style={{ marginBottom: '1.2rem', lineHeight: '1.7' }}>
                    {benefit}
                  </p>
                ))}
              </div>
            ) : (
              <>
                <p className="sd-overview-text" style={{ marginTop: '2rem' }}>
                  We don't believe in one-size-fits-all strategies. The <strong>{industry.title.toLowerCase()}</strong> sector requires distinct brand positioning, high-quality media assets, and precise marketing channels to truly thrive.
                </p>
                
                <p className="sd-overview-text" style={{ marginTop: '1.5rem' }}>
                  With in-house photographers, drone operators, creative writers, and ad strategists, we control the entire pipeline to guarantee consistency, quality, and measurable business growth.
                </p>
              </>
            )}
            
            <p style={{ marginTop: '2.5rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
              Have custom requirements? Call us at <span style={{ color: 'var(--accent-orange)' }}>+91 76958 83647</span> to talk to an expert!
            </p>
          </div>

          <div className="sd-faq-right">
            <h2 className="sd-overview-title" style={{ fontStyle: 'italic', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
            <div className="sd-faq-list">
              {industry.faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`sd-faq-item ${activeFaq === index ? 'active' : ''}`}
                  onClick={() => setActiveFaq(index === activeFaq ? null : index)}
                >
                  <div className="sd-faq-header">
                    <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: '600' }}>{faq.question}</h4>
                    <div className="sd-faq-icon">{activeFaq === index ? '-' : '+'}</div>
                  </div>
                  {activeFaq === index && (
                    <div className="sd-faq-body">
                      <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.7' }}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Conversion CTA Block */}
      <div className="container">
        <div className="sd-cta">
          <h2>Ready to dominate the {industry.title.split(' & ')[0]} market?</h2>
          <p>
            Contact our dedicated industry growth team today to set up a personalized discovery call and get a free audit.
          </p>
          <Link to="/contact" className="sd-cta-btn">
            Request a Free Proposal <FaArrowRight />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default IndustryDetail;
