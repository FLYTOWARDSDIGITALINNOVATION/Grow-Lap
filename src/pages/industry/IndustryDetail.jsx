import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { industryData } from '../../data/industryData';
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
  FaCamera,
  FaLayerGroup,
  FaBullseye,
  FaChartLine,
  FaRocket,
  FaPlus,
  FaMinus
} from 'react-icons/fa';
import SEO from '../../components/SEO';
import '../services/ServiceDetail.css';

// Import card background images
import card1 from '../../assets/images/card1.webp';
import card2 from '../../assets/images/card2.webp';
import card3 from '../../assets/images/card3.webp';
import card4 from '../../assets/images/card4.webp';
import realEstateBanner from '../../assets/images/real-estate-banner.png';
import realEstateCtaBuilding from '../../assets/images/real-estate-cta-building-isolated.webp';

const cardBgImages = [card1, card2, card3, card4];

// Helper to return relevant icon based on deliverable title
const getSection5Icon = (iconType) => {
  switch (iconType) {
    case 'layers':
      return <FaLayerGroup />;
    case 'camera':
      return <FaCamera />;
    case 'target':
      return <FaBullseye />;
    case 'growth':
      return <FaChartLine />;
    default:
      return <FaSearch />;
  }
};

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
  if (lowerTitle.includes('audience') || lowerTitle.includes('reach') || lowerTitle.includes('wide')) return <FaUsers />;
  if (lowerTitle.includes('target') || lowerTitle.includes('customer')) return <FaBullhorn />;
  if (lowerTitle.includes('cost') || lowerTitle.includes('effective') || lowerTitle.includes('budget')) return <FaStar />;
  
  return <FaLightbulb />;
};


const IndustryDetail = () => {
  const { industrySlug, showroomType } = useParams();
  const actualSlug = showroomType ? `showrooms-${showroomType}` : industrySlug;
  const industry = industryData[actualSlug];
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeStrategyTab, setActiveStrategyTab] = useState(0);

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
      <SEO 
        title={industry.seo?.title || `${industry.title} | Industry Solutions - Grow Lap`}
        description={industry.seo?.description || industry.subtitle || `${industry.title} digital marketing solutions provided by Grow Lap.`}
        keywords={industry.seo?.keywords || `${industry.title}, industry digital marketing, Grow Lap`}
        robots={industry.seo?.robots || "index, follow"}
        canonical={industry.seo?.canonical || `https://www.growlap.com/industry/${actualSlug}`}
        ogImage={industry.seo?.ogImage || "https://www.growlap.com/real-estate-banner.png"}
        ogImageAlt={industry.seo?.ogImageAlt || "Real Estate"}
        siteName={industry.seo?.siteName || "GrowLap"}
        schema={industry.seo?.schema}
      />
      
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
            {industry.kicker && (
              <p className="section-subtitle text-accent" style={{ letterSpacing: '2px', fontWeight: 700, marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                {industry.kicker}
              </p>
            )}
            <h1 className="sd-hero-title">
              {industry.h1 ? (
                typeof industry.h1 === 'string' && industry.h1.includes('Reach More Buyers') ? (
                  <>
                    Digital Marketing for Real Estate to <span style={{ color: 'var(--accent-orange)' }}>Reach More Buyers</span>
                  </>
                ) : (
                  industry.h1
                )
              ) : (
                industry.title.split(' & ').map((part, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && ' & '}
                    <span style={i === 1 ? { color: 'var(--accent-orange)' } : {}}>{part}</span>
                  </React.Fragment>
                ))
              )}
            </h1>
            {industry.subtitle ? (
              <p className="sd-hero-desc" style={{ marginBottom: '1.5rem' }}>
                <strong>{industry.subtitle}</strong>
              </p>
            ) : null}
            <p className="sd-hero-desc">
              {industry.description}
            </p>
            
            {/* Custom Metrics/Stats Row */}
            <div className="sd-stats-row">
              {industry.stats.map((stat, i) => (
                <div key={i} className="sd-stat-box">
                  <div className="sd-stat-val">{stat.value}</div>
                  <div className="sd-stat-lbl">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="sd-hero-buttons">
              <Link to="/contact" className="btn-primary sd-btn" style={{ padding: '12px 24px' }}>
                <FaPaperPlane /> {industry.ctaText || 'Get Started'}
              </Link>
              <div className="sd-btn-or">OR</div>
              <a href="tel:+917695883647" className="btn-secondary sd-btn" style={{ padding: '12px 24px' }}>
                <FaPhoneAlt /> Call Now
              </a>
            </div>
          </div>
          
          <div className="sd-hero-form-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '560px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.7), 0 0 35px rgba(255, 94, 0, 0.15)',
              border: '1px solid rgba(255, 94, 0, 0.25)',
              background: 'linear-gradient(145deg, #12151b, #0b0d11)'
            }}>
              <img 
                src={industry.image} 
                alt={industry.title} 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: What Is Digital Marketing (Overview Section) */}
      {industry.section2 && (
        <section className="industry-overview-section">
          <div className="container">
            <div className="industry-overview-grid">
              
              {/* Text Side (Left) */}
              <div className="industry-overview-text">
                <p className="section-subtitle text-accent">
                  {industry.section2.kicker || 'REAL ESTATE DIGITAL MARKETING'}
                </p>
                <h2 className="industry-overview-title">
                  {industry.section2.title.includes('Real Estate') ? (
                    <>
                      What Is Digital Marketing for <span className="text-accent">Real Estate?</span>
                    </>
                  ) : (
                    industry.section2.title
                  )}
                </h2>

                {industry.section2.quote && (
                  <div className="industry-quote-box">
                    <p>"{industry.section2.quote}"</p>
                  </div>
                )}

                {industry.section2.paragraphs && industry.section2.paragraphs.map((para, i) => (
                  <p key={i} className="industry-overview-p">
                    {para}
                  </p>
                ))}
              </div>

              {/* Visual Side (Right) */}
              <div className="industry-overview-visual">
                <div className="industry-overview-img-wrapper">
                  <img 
                    src={industry.section2.image || '/about-creative-team-4.jpg'} 
                    alt={industry.section2.title} 
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

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
            <h4 style={{ color: 'var(--accent-orange)', fontSize: '1.2rem', marginBottom: '10px', fontWeight: '700', letterSpacing: '1.5px' }}>
              {industry.section3?.kicker || 'OUR SOLUTIONS'}
            </h4>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#fff', marginBottom: '1rem', fontWeight: '800' }}>
              {industry.section3?.title ? (
                industry.section3.title.includes('Real Estate') ? (
                  <>
                    Why Is Digital Marketing Important for <span style={{ color: 'var(--accent-orange)' }}>Real Estate?</span>
                  </>
                ) : (
                  industry.section3.title
                )
              ) : (
                'Custom Deliverables For Your Brand'
              )}
            </h2>
            <p style={{ color: '#ccc', fontSize: '1.1rem', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7' }}>
              {industry.section3?.description || 'We design and execute custom creative and advertising workflows built for conversion.'}
            </p>
          </div>
          
          <div className="id-grid">
            {(industry.section3?.items || industry.deliverables).map((item, i) => {
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

          {/* Section 3 CTA Button */}
          {industry.section3?.cta && (
            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <Link 
                to="/contact" 
                className="btn-primary sd-btn" 
                style={{ 
                  padding: '14px 34px', 
                  fontSize: '1.05rem', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '10px',
                  boxShadow: '0 10px 30px rgba(255, 94, 0, 0.3)'
                }}
              >
                <FaPaperPlane /> {industry.section3.cta}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Section 4: Key Digital Marketing Strategies - Interactive Tabs Model */}
      {industry.section4 && (
        <section className="industry-strategies-section">
          <div className="container">
            {/* Header */}
            <div className="sd-section-header" style={{ maxWidth: '850px', margin: '0 auto 2.5rem auto', textAlign: 'center' }}>
              {industry.section4.kicker && (
                <p className="section-subtitle text-accent" style={{ letterSpacing: '2px', fontWeight: 700, marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                  {industry.section4.kicker}
                </p>
              )}
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#fff', marginBottom: '1.2rem', fontWeight: '800' }}>
                {industry.section4.title.includes('Real Estate') ? (
                  <>
                    Key Digital Marketing Strategies for <span style={{ color: 'var(--accent-orange)' }}>Real Estate</span>
                  </>
                ) : (
                  industry.section4.title
                )}
              </h2>
              {industry.section4.introParagraphs && industry.section4.introParagraphs.map((para, i) => (
                <p key={i} style={{ color: '#ccc', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: i === 0 ? '0.6rem' : 0 }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Horizontal Tabs Navigation */}
            <div className="strategy-tabs-nav">
              {industry.section4.strategies.map((strat, idx) => {
                const shortTitle = strat.title
                  .replace(' for Real Estate Websites', '')
                  .replace(' for Real Estate', '');
                
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`strategy-tab-btn ${activeStrategyTab === idx ? 'active' : ''}`}
                    onClick={() => setActiveStrategyTab(idx)}
                  >
                    <span className="tab-num">{strat.num}</span>
                    <span className="tab-label">{shortTitle}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Strategy Display Box */}
            {(() => {
              const currentStrat = industry.section4.strategies[activeStrategyTab] || industry.section4.strategies[0];
              if (!currentStrat) return null;

              return (
                <div className="strategy-tab-box">
                  {/* Left Column: Visual Banner */}
                  <div className="strategy-tab-visual">
                    <img 
                      src={currentStrat.image} 
                      alt={currentStrat.title} 
                      className="strategy-tab-img"
                    />
                    <div className="strategy-tab-badge">STRATEGY {currentStrat.num}</div>
                  </div>

                  {/* Right Column: Content Body */}
                  <div className="strategy-tab-content">
                    <div className="strategy-tab-kicker">STRATEGY {currentStrat.num}</div>
                    <h3 className="strategy-tab-title">{currentStrat.title}</h3>

                    {currentStrat.intro && (
                      <p className="strategy-tab-intro">{currentStrat.intro}</p>
                    )}

                    {currentStrat.example && (
                      <div className="strategy-tab-example">
                        <p>{currentStrat.example}</p>
                      </div>
                    )}

                    {currentStrat.listTitle && (
                      <h4 className="strategy-tab-list-title">{currentStrat.listTitle}</h4>
                    )}

                    {currentStrat.bullets && currentStrat.bullets.length > 0 && (
                      <ul className="strategy-tab-bullets">
                        {currentStrat.bullets.map((b, bIdx) => (
                          <li key={bIdx} dangerouslySetInnerHTML={{ __html: b }} />
                        ))}
                      </ul>
                    )}

                    {currentStrat.closingNote && (
                      <p className="strategy-tab-closing-note">{currentStrat.closingNote}</p>
                    )}
                  </div>
                </div>
              );
            })()}

            {/* Section 4 Bottom CTA */}
            {industry.section4.cta && (
              <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                <Link 
                  to="/contact" 
                  className="btn-primary sd-btn" 
                  style={{ 
                    padding: '14px 34px', 
                    fontSize: '1.05rem', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '10px',
                    boxShadow: '0 10px 30px rgba(255, 94, 0, 0.35)'
                  }}
                >
                  <FaPaperPlane /> {industry.section4.cta}
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Section 5: Why Choose Grow Lap (Reference Process Grid Model) */}
      {industry.section5 && (
        <section className="industry-why-section">
          <div className="container">
            {/* Header */}
            <div className="sd-section-header" style={{ maxWidth: '850px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
              {industry.section5.kicker && (
                <p className="section-subtitle text-accent" style={{ letterSpacing: '2px', fontWeight: 700, marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                  {industry.section5.kicker}
                </p>
              )}
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#fff', marginBottom: '1.2rem', fontWeight: '800' }}>
                Why Choose Grow Lap as Your Digital Marketing Company for <span style={{ color: 'var(--accent-orange)' }}>Real Estate?</span>
              </h2>
              {industry.section5.intro && (
                <p style={{ color: '#ccc', fontSize: '1.05rem', lineHeight: '1.7', margin: '0 auto' }}>
                  {industry.section5.intro}
                </p>
              )}
            </div>

            {/* 2x2 Grid matching reference image */}
            <div className="industry-why-grid">
              {industry.section5.items.map((item, index) => (
                <div key={index} className="industry-why-card">
                  {/* Left Side: Icon & Step Tag */}
                  <div className="industry-why-card-left">
                    <div className="industry-why-icon-circle">
                      {getSection5Icon(item.iconType)}
                    </div>
                    <span className="industry-why-step-tag">{item.tag || `STEP ${item.id}`}</span>
                  </div>

                  {/* Right Side: Title & Description */}
                  <div className="industry-why-card-right">
                    <h3 className="industry-why-card-title">{item.title}</h3>
                    <p className="industry-why-card-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing Note Box */}
            {industry.section5.closingNote && (
              <div className="industry-why-closing-box">
                <p>{industry.section5.closingNote}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Section 6: Step-by-Step Guide (Balanced 2-Column Grid) */}
      {industry.section6 && (
        <section className="industry-guide-section">
          <div className="container">
            {/* Header: Centered & Full Width */}
            <div className="sd-section-header" style={{ maxWidth: '850px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
              {industry.section6.kicker && (
                <p className="section-subtitle text-accent" style={{ letterSpacing: '2px', fontWeight: 700, marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                  {industry.section6.kicker}
                </p>
              )}
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#fff', marginBottom: '1.2rem', fontWeight: '800' }}>
                How to Use Digital Marketing for <span style={{ color: 'var(--accent-orange)' }}>Real Estate:</span> A Step-by-Step Guide
              </h2>
              {industry.section6.intro && (
                <p style={{ color: '#ccc', fontSize: '1.05rem', lineHeight: '1.7', margin: '0 auto' }}>
                  {industry.section6.intro}
                </p>
              )}
            </div>

            {/* Balanced 2-Column Grid: 7 Steps + 1 Actionable CTA Card */}
            <div className="industry-guide-balanced-grid">
              {industry.section6.steps.map((st, i) => (
                <div key={i} className="industry-guide-step-item">
                  <div className="guide-step-top">
                    <div className="guide-step-icon-wrap">
                      {st.iconType === 'target' && <FaBullseye />}
                      {st.iconType === 'users' && <FaUsers />}
                      {st.iconType === 'camera' && <FaCamera />}
                      {st.iconType === 'web' && <FaLaptopCode />}
                      {st.iconType === 'bullhorn' && <FaBullhorn />}
                      {st.iconType === 'phone' && <FaPhoneAlt />}
                      {st.iconType === 'chart' && <FaChartLine />}
                    </div>
                    <span className="guide-step-number-pill">STEP 0{i + 1}</span>
                  </div>
                  <h3 className="guide-step-title">{st.title}</h3>
                  <p className="guide-step-desc">{st.desc}</p>
                </div>
              ))}

              {/* 8th Slot: High-Conversion CTA Action Card */}
              <div className="industry-guide-cta-card">
                <div className="guide-cta-top">
                  <span className="guide-cta-badge">
                    <FaRocket /> {industry.section6.sidebarCard?.badge || 'PROPERTY GROWTH ENGINE'}
                  </span>
                </div>
                <h3 className="guide-cta-title">
                  {industry.section6.sidebarCard?.title || 'Ready to Put This Guide into Action?'}
                </h3>
                <p className="guide-cta-desc">
                  {industry.section6.sidebarCard?.desc || 'Our real estate marketing experts manage everything for you — from property shoots and SEO to Meta & Google Ads campaigns.'}
                </p>
                <Link 
                  to="/contact" 
                  className="btn-primary sd-btn guide-cta-btn"
                >
                  <FaPaperPlane /> {industry.section6.sidebarCard?.ctaText || 'Get Started with Grow Lap'}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 7: Ready to Reach More Property Buyers? (Reference Horizontal Banner) */}
      {industry.section7 && (
        <section className="industry-cta-banner-section">
          <div className="container">
            <div className="industry-cta-banner-box">
              <div className="industry-cta-banner-content">
                <h2 className="industry-cta-banner-title">
                  {industry.section7.title} <br />
                  <span style={{ color: 'var(--accent-orange)' }}>{industry.section7.highlightText}</span>
                </h2>
                <p className="industry-cta-banner-desc">
                  {industry.section7.desc}
                </p>
                <Link to={industry.section7.ctaLink || '/contact'} className="industry-cta-banner-btn">
                  <span>{industry.section7.ctaText || 'Get Started with Grow Lap'}</span>
                  <FaArrowRight />
                </Link>
              </div>
              <div className="industry-cta-banner-visual">
                <img 
                  src={realEstateCtaBuilding} 
                  alt="Ready to Reach More Property Buyers" 
                  className="industry-cta-banner-img"
                />
              </div>
            </div>
          </div>
        </section>
      )}

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
      <div style={{ paddingBottom: '1rem' }}>
      </div>

      {/* FAQ Accordion Section */}
      {industry.section5 ? (
        <section className="industry-faq-centered-section">
          <div className="container">
            {/* Centered Header */}
            <div className="industry-faq-header">
              <p className="section-subtitle text-accent" style={{ letterSpacing: '2px', fontWeight: 700, marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                GOT QUESTIONS?
              </p>
              <h2 className="industry-faq-title">
                Frequently Asked <span style={{ color: 'var(--accent-orange)' }}>Questions (FAQs)</span>
              </h2>
              <p className="industry-faq-desc">
                Here are answers to the most common questions about digital marketing, property listings, and online promotion for real estate businesses.
              </p>
            </div>

            {/* Centered Accordion List */}
            <div className="industry-faq-accordion-wrap">
              {industry.faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`industry-faq-card ${activeFaq === index ? 'active' : ''}`}
                  onClick={() => setActiveFaq(index === activeFaq ? null : index)}
                >
                  <div className="industry-faq-card-header">
                    <span className="industry-faq-num-pill">0{index + 1}</span>
                    <h3 className="industry-faq-q-text">{faq.question.replace(/^\d+\.\s*/, '')}</h3>
                    <div className="industry-faq-icon-btn">
                      {activeFaq === index ? <FaMinus /> : <FaPlus />}
                    </div>
                  </div>
                  {activeFaq === index && (
                    <div className="industry-faq-card-body">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Centered Bottom Contact Bar */}
            <div className="industry-faq-contact-bar">
              <div className="faq-contact-left">
                <h4>Have more questions or custom requirements?</h4>
                <p>Talk directly with our real estate digital marketing specialists to get personalized advice.</p>
              </div>
              <div className="faq-contact-right">
                <a href="tel:+917695883647" className="faq-call-pill">
                  <FaPhoneAlt /> +91 76958 83647
                </a>
                <Link to="/contact" className="btn-primary sd-btn faq-quote-btn">
                  <FaPaperPlane /> Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="sd-overview-section">
          <div className="container sd-overview-grid">
            <div className="sd-overview-left">
              <h2 className="sd-overview-title" style={{ lineHeight: '1.2' }}>
                Why Choose Grow Lap <br/><span style={{ color: 'var(--accent-orange)' }}>For {industry.title.split(' & ')[0]}</span>?
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
              <h2 className="sd-overview-title" style={{ marginBottom: '2rem' }}>
                Frequently Asked <span style={{ color: 'var(--accent-orange)' }}>Questions (FAQs)</span>
              </h2>
              <div className="sd-faq-list">
                {industry.faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`sd-faq-item ${activeFaq === index ? 'active' : ''}`}
                    onClick={() => setActiveFaq(index === activeFaq ? null : index)}
                  >
                    <div className="sd-faq-header">
                      <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: '600' }}>{faq.question}</h4>
                      <div className="sd-faq-icon">{activeFaq === index ? '−' : '+'}</div>
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
      )}

      {/* Conversion CTA Block */}
      {!industry.section7 && (
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
      )}

    </div>
  );
};

export default IndustryDetail;
