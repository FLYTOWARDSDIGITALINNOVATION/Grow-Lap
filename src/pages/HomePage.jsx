import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPaperPlane, FaWhatsapp, FaRegSmile, FaRegFileAlt, FaUsers, FaTrophy,
  FaChartLine, FaEye, FaUserTie, FaCog, FaCheckCircle, FaSearch,
  FaBullseye, FaRocket, FaQuoteLeft
} from 'react-icons/fa';
import SEO from '../components/SEO';
import { servicesData } from '../data/servicesData';
import { industries } from '../data/industries';
import './HomePage.css';

/* ==========================================================================
   1. HERO SECTION COMPONENT
   ========================================================================== */
const HeroSection = () => {
  return (
    <section id="home" className="hero-section section-padding">
      <div className="container hero-container grid-2">
        <div className="hero-content">
          <p className="hero-subtitle text-accent">WE BUILD • WE SOLVE • WE GROW</p>
          <h1 className="hero-title">
            <span>Digital Solutions</span><br />
            <span>That Drive Real</span><br />
            <span className="text-accent">Business Growth</span>
          </h1>
          <p className="hero-description">
            We are a digital innovation agency helping businesses transform ideas into powerful digital products and experiences.
          </p>
          <div className="hero-dual-btn">
            <Link to="/contact" className="dual-btn-left">
              <FaPaperPlane className="dual-btn-icon" /> Contact
            </Link>
            <div className="dual-btn-or">OR</div>
            <a href="https://wa.me/916383246378" target="_blank" rel="noopener noreferrer" className="dual-btn-right">
              <FaWhatsapp className="dual-btn-icon" style={{ fontSize: '1.25rem' }} /> WhatsApp
            </a>
          </div>
          
          <div className="hero-stats-mini">
            <div className="avatars">
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
            </div>
            <p><strong>25+</strong> Happy Clients</p>
          </div>
        </div>

        <div className="hero-graphics"></div>
      </div>
      
      <div className="hero-video-bg-container">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/Hero.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

/* ==========================================================================
   2. STATS SECTION COMPONENT
   ========================================================================== */
const stats = [
  { icon: <FaRegSmile />, value: 25, suffix: '+', label: 'Happy Clients' },
  { icon: <FaRegFileAlt />, value: 25, suffix: '+', label: 'Projects Completed' },
  { icon: <FaUsers />, value: 10, suffix: '+', label: 'Team Members' },
  { icon: <FaTrophy />, value: 'One', suffix: '+', label: 'Years of Experience' }
];

const AnimatedCounter = ({ endValue }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp = null;
          const duration = 2000;

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            
            setCount(Math.floor(easeOutProgress * endValue));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [endValue, hasAnimated]);

  return <span ref={counterRef}>{count}</span>;
};

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <div className="stat-number-wrapper">
                {typeof stat.value === 'number' ? (
                  <AnimatedCounter endValue={stat.value} />
                ) : (
                  <span>{stat.value}</span>
                )}
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   3. SERVICES SECTION COMPONENT
   ========================================================================== */
const ServiceCard3D = ({ service, index }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: x * 10, y: y * -10 }); 
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <Link 
      to={`/services/${service.slug}`} 
      className="service-sticky-link"
      style={{ top: `calc(120px + ${index * 30}px)` }}
    >
      <div 
        className="service-stacked-card tilt-card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) ${isHovering ? 'translateZ(20px)' : 'translateZ(0)'}`,
          transition: isHovering ? 'transform 0.1s ease-out, box-shadow 0.1s ease-out' : 'transform 0.5s ease-out, box-shadow 0.5s ease-out',
          boxShadow: isHovering ? `0 30px 60px rgba(0,0,0,0.6), ${-tilt.x}px ${tilt.y}px 25px rgba(255, 107, 0, 0.15)` : ''
        }}
      >
        <div className="ssc-image-box" style={{ transform: isHovering ? 'translateZ(40px)' : 'translateZ(0)', transition: 'transform 0.3s ease-out' }}>
          <img src={service.image} alt={service.title} />
        </div>
        <div className="ssc-content-box" style={{ transform: isHovering ? 'translateZ(30px)' : 'translateZ(0)', transition: 'transform 0.3s ease-out' }}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <span className="ssc-explore">Explore Category &rarr;</span>
        </div>
      </div>
    </Link>
  );
};

const ServicesSection = ({ limit }) => {
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-subtitle text-accent">WHAT WE DO</p>
          <h2 className="section-title">Our Categories</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="services-stacked-container">
          {displayedServices.map((service, index) => (
            <ServiceCard3D key={index} service={service} index={index} />
          ))}
        </div>

        {limit && (
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn-primary">View All Categories &rarr;</Link>
          </div>
        )}
      </div>
    </section>
  );
};

/* ==========================================================================
   4. WHY DIFFERENT SECTION COMPONENT
   ========================================================================== */
const reasons = [
  { icon: <FaChartLine />, title: 'Data-Driven Strategies', description: "Every campaign is backed by deep analytics, ensuring maximum ROI." },
  { icon: <FaEye />, title: 'Transparent Reporting', description: "Clear, easy-to-understand reports showing exactly where your budget goes." },
  { icon: <FaUserTie />, title: 'Dedicated Expert Team', description: "Work directly with seasoned specialists invested in your success." },
  { icon: <FaCog />, title: 'Tailored Solutions', description: "Custom digital solutions aligned with your unique business goals." }
];

const WhyDifferentSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="why-different-section section-padding">
      <div className="container">
        <div className="why-different-layout">
          <div className={`why-content-side ${isVisible ? 'slide-in-left' : 'hidden-left'}`}>
            <p className="section-subtitle text-accent">OUR EDGE</p>
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 1rem 0' }}>Why We Are Different</h2>
            <div className="section-line" style={{ margin: '0 0 2.5rem 0' }}></div>
            
            <p className="why-intro">
              In a sea of generic agencies, we stand out by prioritizing tangible results over vanity metrics. 
              Here is what makes partnering with us a game-changer for your business.
            </p>

            <div className="why-list">
              {reasons.map((reason, index) => (
                <div key={index} className="why-list-item">
                  <div className="why-list-icon">{reason.icon}</div>
                  <div className="why-list-text">
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`why-image-side ${isVisible ? 'slide-in-right' : 'hidden-right'}`}>
            <div className="why-image-wrapper">
              <img src="home page growth.webp" alt="Why We Are Different" className="why-image" />
              <div className="why-image-overlay">
                <div className="why-stat">
                  <h4>One</h4>
                  <p>Year Experience</p>
                </div>
                <div className="why-stat">
                  <h4>100%</h4>
                  <p>Client Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   5. INDUSTRY SECTION COMPONENT
   ========================================================================== */
const IndustrySection = ({ limit }) => {
  const displayedIndustries = limit ? industries.slice(0, limit) : industries;

  return (
    <section id="industry" className="industry-section section-padding">
      <div className="container">
        {limit && (
          <div className="section-header text-center">
            <p className="section-subtitle text-accent">WHO WE SERVE</p>
            <h2 className="section-title">Industries We Dominate</h2>
            <div className="section-line"></div>
          </div>
        )}

        <div className="industry-img-grid">
          {displayedIndustries.map((item, index) => (
            <div key={index} className="industry-img-card">
              <div className="industry-card-img" style={{ backgroundImage: `url(${item.image})` }}></div>
              <div className="industry-card-body">
                <span className="industry-card-tag">{item.tag}</span>
                <h3 className="industry-card-title">{item.name}</h3>
                <ul className="industry-card-lines">
                  {item.lines.map((line, i) => (
                    <li key={i} className="industry-line-item">
                      <FaCheckCircle className="industry-line-icon" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <Link to={`/industry/${item.slug}`} className="industry-explore-link">
                  Explore Service &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/industry" className="btn-primary">View All Industries &rarr;</Link>
          </div>
        )}
      </div>
    </section>
  );
};

/* ==========================================================================
   6. PROCESS SECTION COMPONENT
   ========================================================================== */
const processSteps = [
  { id: '01', icon: <FaSearch style={{ color: '#00d2ff' }} />, title: 'Discovery & Research', description: 'We start by diving deep into your brand, your audience, and the competitive landscape to uncover hidden opportunities.' },
  { id: '02', icon: <FaBullseye style={{ color: '#ff4b4b' }} />, title: 'Strategic Planning', description: 'Crafting a customized, data-backed roadmap tailored to your specific goals and market positioning.' },
  { id: '03', icon: <FaRocket style={{ color: '#ff9800' }} />, title: 'Campaign Execution', description: 'Deploying targeted campaigns across optimal channels with precision, creative flair, and strategic alignment.' },
  { id: '04', icon: <FaChartLine style={{ color: '#4caf50' }} />, title: 'Optimization & Growth', description: 'Continuously monitoring performance metrics and optimizing your campaigns to ensure sustainable business growth.' }
];

const ProcessSection = () => {
  return (
    <section id="process" className="modern-process-section section-padding">
      <div className="container">
        <div className="process-header text-center" style={{ marginBottom: '4rem' }}>
          <h4 className="section-subtitle text-accent">How We Work</h4>
          <h2 className="section-title">Our <span className="text-accent">Process</span></h2>
          <p className="has-subtitle" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
            A proven, step-by-step approach to turning your vision into measurable digital success.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div key={index} className="process-card-modern">
              <div className="process-step-number">{step.id}</div>
              <div className="process-icon-modern">{step.icon}</div>
              <h3 className="process-card-title">{step.title}</h3>
              <p className="process-card-desc">{step.description}</p>
              
              {index < processSteps.length - 1 && (
                <div className="process-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   7. TESTIMONIALS SECTION COMPONENT
   ========================================================================== */
const testimonials = [
  { name: 'Thara', role: 'CEO, TechCorp', content: 'They completely transformed our digital presence. Our traffic doubled in just 3 months!', image: 'https://picsum.photos/seed/user1/100/100' },
  { name: 'Sarah Smith', role: 'Founder, EcoBrand', content: 'Incredible ROI. Their targeted ad campaigns brought us high-quality leads we never thought possible.', image: 'https://picsum.photos/seed/user2/100/100' },
  { name: 'Michael Lee', role: 'Marketing Director', content: 'The most professional agency we have worked with. Transparent reporting and data-driven results.', image: 'https://picsum.photos/seed/user3/100/100' }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-process-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-subtitle text-accent">CLIENT FEEDBACK</p>
          <h2 className="section-title">What They Say</h2>
          <div className="section-line"></div>
        </div>

        <div className="testimonials-process-container">
          <div className="testimonials-process-line"></div>
          <div className="testimonials-process-line-diagonal">
            <FaPaperPlane className="testimonials-process-arrow" />
          </div>

          <div className="testimonials-process-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonials-process-card ${index % 2 !== 0 ? 'card-down' : ''}`}>
                <div className="testimonials-step-number"><FaQuoteLeft /></div>
                <p className="testimonials-card-desc">"{testimonial.content}"</p>
                
                <div className="testimonials-author">
                  <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   8. LETS TALK SECTION COMPONENT
   ========================================================================== */
const LetsTalkSection = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(event.target);

    fetch('https://formsubmit.co/ajax/growlapmarketing@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(() => {
      setResult("Message sent successfully!");
      event.target.reset();
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    })
    .catch(error => {
      console.error('Submission failed', error);
      setResult("Failed to send message. Please try again.");
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    });
  };

  return (
    <section className="lets-talk-section">
      <div className="lets-talk-bg-pattern"></div>
      <div className="container lets-talk-container">
        <div className="lets-talk-text">
          <h1>
            <span className="text-white">Let's</span><br/>
            <span className="text-orange">Talk!</span>
          </h1>
        </div>
        
        <div className="lets-talk-form-container">
          <form className="lets-talk-form" onSubmit={onSubmit}>
            <input type="hidden" name="_subject" value="New Contact Form Submission - Home Page (Let's Talk)" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="Your Email Address" required />
            </div>
            
            <div className="form-group">
              <label>Company</label>
              <input type="text" name="company" placeholder="Your Company Name" required />
            </div>
            
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Write your message" rows="4" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
            
            {result && (
              <p className="form-result-message" style={{ color: result.includes('Success') ? '#4caf50' : '#ff9800', marginTop: '1rem', textAlign: 'center' }}>
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   MAIN HOMEPAGE COMPONENT
   ========================================================================== */
const HomePage = () => {
  return (
    <div className="capitalize-content">
      <SEO 
        title="Grow Lap | Digital Marketing & Creative Agency"
        description="Grow Lap is a top-tier Digital Marketing Agency offering high-ROI SEO, Meta Ads, Graphic Design, Video Editing, and Branding services."
        keywords="digital marketing agency, SEO services, Meta Ads, video editing, branding, Grow Lap"
      />
      <HeroSection />
      <StatsSection />
      <ServicesSection limit={6} />
      <WhyDifferentSection />
      <IndustrySection limit={5} />
      <ProcessSection />
      <TestimonialsSection />
      <LetsTalkSection />
    </div>
  );
};

export default HomePage;
