import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPaperPlane, FaWhatsapp, FaRegSmile, FaRegFileAlt, FaUsers, FaTrophy,
  FaChartLine, FaEye, FaUserTie, FaCog, FaCheckCircle, FaSearch,
  FaBullseye, FaRocket, FaQuoteLeft, FaGlobe, FaArrowRight, FaArrowLeft, FaCheck,
  FaEnvelope, FaPhoneAlt, FaRegCalendarAlt, FaCalendarAlt, FaRegClock,
  FaChevronDown, FaChevronLeft, FaChevronRight
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
          <p className="hero-subtitle text-accent">WE SHOOT • WE EDIT • WE GROWTH</p>
          <h1 className="hero-title">
            <span>Grow Lap –</span><br />
            <span className="text-accent">Digital Marketing Company</span>
          </h1>
          <p className="hero-description">
            We are a data driven digital marketing company focused on improving your online visibility, generating quality leads and helping your business achieve sustainable growth.
          </p>
          <div className="hero-btn-wrapper">
            <Link to="/contact" className="hero-cta-btn">
              <FaPaperPlane className="hero-btn-icon" /> Talk to Our Experts
            </Link>
          </div>
        </div>

        <div className="hero-graphics"></div>
      </div>
      
      <div className="hero-video-bg-container">
        <img src="/hero-bg.webp" alt="Grow Lap Digital Marketing" className="hero-bg-img" />
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
  { icon: <FaGlobe />, value: 3, suffix: '+', label: 'Global Service' }
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
const categoriesData = [
  {
    id: '01',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'We offer SEO, social media marketing, paid advertising, content marketing, and other digital solutions to help your brand get noticed, reach more customers, generate quality leads, and grow your business.',
    subServices: ['SEO', 'Meta ads', 'Google ads', 'Social media Marketing', 'Email Marketing'],
    cta: 'Make Your Brand Stand Out.',
    image: '/pexels-markus-winkler-1430818-4604639.webp'
  },
  {
    id: '02',
    slug: 'editing',
    title: 'Editing',
    description: 'We turn your photos and videos into polished, engaging content that looks professional, grabs attention, and helps your brand tell its story.',
    subServices: ['Video Editing', 'Reels Editing', 'Logo Design', 'Poster Design', 'Photo Editing'],
    cta: 'Ready to Grow? Let’s Talk to Our Experts.',
    image: '/photo-1574717024653-61fd2cf4d44d.webp'
  },
  {
    id: '03',
    slug: 'shooting',
    title: 'Shooting',
    description: 'We create high quality photos and videos for businesses, products, social media and promotional campaigns helping you present your brand in a more engaging way.',
    subServices: ['DSLR Camera Shoot', 'Product Shoot', 'Drone Shoot', 'Reel Shoot', 'Podcast Shoot'],
    cta: 'Ready to Create? Let’s Get Started.',
    image: '/service_shoots_new.webp'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-subtitle text-accent">WHAT WE DO</p>
          <h2 className="section-title">Our Categories</h2>
          <div className="section-line"></div>
          <p className="section-header-desc">
            At Grow Lap, a trusted Digital Marketing Company, we combine digital marketing, creative editing, professional photography, and videography to help businesses reach the right audience, strengthen their online presence, and achieve real results through smart campaigns and engaging content.
          </p>
        </div>
        
        <div className="services-stacked-container">
          {categoriesData.map((category, index) => (
            <div 
              key={index} 
              className="category-stacked-card"
              style={{ 
                top: `105px`, 
                zIndex: index + 1,
                marginBottom: index < categoriesData.length - 1 ? '80px' : '0px'
              }}
            >
              <div className="csc-image-box">
                <img src={category.image} alt={category.title} loading="eager" decoding="async" />
              </div>
              <div className="csc-content-box">
                <span className="csc-number">{category.id} — CATEGORY</span>
                <h3>{category.title}</h3>
                <p className="csc-desc">{category.description}</p>

                <div className="csc-subservices">
                  {category.subServices.map((sub, i) => (
                    <span key={i} className="csc-sub-badge">{sub}</span>
                  ))}
                </div>

                <Link to={`/services/${category.slug}`} className="csc-cta-btn">
                  {category.cta} <span className="arrow">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   4. WHY DIFFERENT SECTION COMPONENT
   ========================================================================== */
const reasons = [
  { 
    icon: <FaChartLine />, 
    title: 'Data-Driven Decisions', 
    description: "We use real data to see what’s working and what needs to improve so we can make smarter decisions and focus on strategies that deliver real results." 
  },
  { 
    icon: <FaEye />, 
    title: 'Complete Transparency', 
    description: "We believe in keeping everything clear and straightforward. You’ll always know what we’re working on, how your campaigns are performing, and where your marketing budget is being spent." 
  },
  { 
    icon: <FaUserTie />, 
    title: 'Experienced Team', 
    description: "Our team brings practical experience and creative ideas to every project. We take the time to understand your challenges and work with you to find the right solutions." 
  },
  { 
    icon: <FaCog />, 
    title: 'Made for Your Business', 
    description: "Every business is different, so we don't use the same approach for everyone. We create marketing plans based on your business, audience, goals and budget." 
  }
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
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 1rem 0' }}>Why Choose Grow Lap as Your Digital Marketing Company?</h2>
            <div className="section-line" style={{ margin: '0 0 2.5rem 0' }}></div>
            
            <p className="why-intro">
              We believe good marketing is more than just likes, views, and traffic. It’s about understanding your business, connecting with the right people and helping you achieve real growth.
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
              <img src="/why-we-are-different.webp" alt="Why Choose Grow Lap as Your Digital Marketing Company" className="why-image" />
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

        <div className={`industry-img-grid ${limit ? 'home-industry-grid' : ''}`}>
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
  { 
    id: '01', 
    icon: <FaSearch />, 
    title: 'Discovery & Research', 
    description: 'We start by learning about your business, your customers, your competitors and your current online presence helping us understand where you are and where you want to go.' 
  },
  { 
    id: '02', 
    icon: <FaBullseye />, 
    title: 'Strategic Planning', 
    description: 'Once we understand your business we create a clear plan. We decide which marketing channels to use, what type of content to create and how we can reach your target audience effectively.' 
  },
  { 
    id: '03', 
    icon: <FaRocket />, 
    title: 'Campaign Execution', 
    description: 'Now we put the plan into action. Our team creates content, manages campaigns, runs ads, improves your online presence and handles the digital activities needed to move your business forward.' 
  },
  { 
    id: '04', 
    icon: <FaChartLine />, 
    title: 'Optimization & Growth', 
    description: 'We regularly check the results to see what is working and what needs to change. We improve our campaigns, try new ideas, and make adjustments to get better results and support your business growth.' 
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="modern-process-section section-padding">
      <div className="container">
        <div className="process-header text-center" style={{ marginBottom: '4rem' }}>
          <h4 className="section-subtitle text-accent">HOW WE WORK</h4>
          <h2 className="section-title">Our <span className="text-accent">Process</span></h2>
          <p className="has-subtitle" style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-muted)' }}>
            We keep our process simple. First, we understand your business. Then, we plan, execute and improve our work based on the results.
          </p>
        </div>

        <div className="weboin-process-grid">
          {processSteps.map((step, index) => (
            <div key={index} className="weboin-card">
              <div className="weboin-card-left">
                <div className="weboin-icon-circle">{step.icon}</div>
                <span className="weboin-step-tag">STEP {step.id}</span>
              </div>
              <div className="weboin-card-right">
                <h3 className="weboin-card-title">{step.title}</h3>
                <p className="weboin-card-desc">{step.description}</p>
              </div>
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
  { 
    name: "Eve’s Era", 
    role: "", 
    content: "Working with Grow Lap has been a great experience. Their creative shoots, video editing, and Instagram marketing have helped us present our brand in a fresh and engaging way. Now they also handle our SEO to improve our online visibility. We love their creative ideas, ongoing support and dedication!", 
    image: 'https://picsum.photos/seed/evesera/100/100' 
  },
  { 
    name: "EToSM Technology", 
    role: "", 
    content: "Grow Lap helped us with our website design and SEO. Their team understood our requirements and worked with us to improve our website and online presence. We appreciate their clear communication and support.", 
    image: 'https://picsum.photos/seed/etosm/100/100' 
  },
  { 
    name: "High Grip Socks", 
    role: "", 
    content: "We were looking for support with our digital marketing, and Grow Lap has been a helpful partner. Their team brings fresh ideas and helps us showcase our brand online. It's been a positive experience working with them.", 
    image: 'https://picsum.photos/seed/highgrip/100/100' 
  }
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
                    {testimonial.role && <p>{testimonial.role}</p>}
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
   8. LETS TALK SECTION COMPONENT (MULTI-STEP INTERACTIVE FORM)
   ========================================================================== */
const industriesList = [
  'Real Estate',
  'Construction',
  'Manufacturing',
  'Automobile',
  'Academies',
  'Retail Shops',
  'Furniture Stores',
  'Jewelry Shops',
  'Others'
];

const servicesList = [
  'Digital Marketing',
  'SEO',
  'Meta Ads',
  'Google Ads',
  'Shooting and Editing',
  'Others'
];

const challengesList = [
  'Low Google Rankings',
  'Low Website Traffic',
  'Fewer Leads',
  'Low Sales',
  'Poor Engagement',
  'Low Brand Awareness',
  'Weak Online Visibility',
  'High Ad Costs',
  'Low Conversions',
  'Poor Social Media Reach',
  'Others'
];

const LetsTalkSection = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    industry: '',
    industryOther: '',
    services: [],
    challenges: [],
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    agreeTerms: false,
    receiveUpdates: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Step 5 Interactive Date & Time Picker states
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [calendarDate, setCalendarDate] = useState(() => new Date());
  const datePickerRef = useRef(null);
  const timePickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (datePickerRef.current && !datePickerRef.current.contains(e.target)) {
        setShowDatePicker(false);
      }
      if (timePickerRef.current && !timePickerRef.current.contains(e.target)) {
        setShowTimePicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = (e) => {
    e.stopPropagation();
    setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1));
  };

  const handleNextMonth = (e) => {
    e.stopPropagation();
    setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1));
  };

  const handleSelectDate = (day) => {
    const month = monthNames[calendarDate.getMonth()];
    const year = calendarDate.getFullYear();
    const formatted = `${day} ${month.slice(0, 3)} ${year}`;
    setFormData(prev => ({ ...prev, preferredDate: formatted }));
    setShowDatePicker(false);
    setErrorMsg('');
  };

  const timeSlots = [
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM'
  ];

  const handleSelectTime = (time) => {
    setFormData(prev => ({ ...prev, preferredTime: time }));
    setShowTimePicker(false);
    setErrorMsg('');
  };

  const handleNextFromStep1 = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name to get started.');
      return;
    }
    setErrorMsg('');
    setStep(2);
  };

  const handleNextFromStep2 = () => {
    if (!formData.industry) {
      setErrorMsg('Please select your industry to proceed.');
      return;
    }
    setErrorMsg('');
    setStep(3);
  };

  const toggleService = (item) => {
    setFormData(prev => {
      const exists = prev.services.includes(item);
      return {
        ...prev,
        services: exists ? prev.services.filter(s => s !== item) : [...prev.services, item]
      };
    });
    setErrorMsg('');
  };

  const handleNextFromStep3 = () => {
    if (formData.services.length === 0) {
      setErrorMsg('Please select at least one service.');
      return;
    }
    setErrorMsg('');
    setStep(4);
  };

  const toggleChallenge = (item) => {
    setFormData(prev => {
      const exists = prev.challenges.includes(item);
      return {
        ...prev,
        challenges: exists ? prev.challenges.filter(c => c !== item) : [...prev.challenges, item]
      };
    });
    setErrorMsg('');
  };

  const handleNextFromStep4 = () => {
    if (formData.challenges.length === 0) {
      setErrorMsg('Please select at least one challenge.');
      return;
    }
    setErrorMsg('');
    setStep(5);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter both your email address and Phone Number.');
      return;
    }
    if (!formData.agreeTerms) {
      setErrorMsg('Please accept the Terms & Conditions and Privacy Policy before submitting.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    const submissionData = new FormData();
    submissionData.append('_subject', `New Lead Enquiry from ${formData.name} - Grow Lap Form`);
    submissionData.append('_captcha', 'false');
    submissionData.append('_template', 'table');
    submissionData.append('Name', formData.name);
    submissionData.append('Industry', formData.industry === 'Others' && formData.industryOther ? `Others: ${formData.industryOther}` : formData.industry);
    submissionData.append('Selected Services', formData.services.join(', '));
    submissionData.append('Business Challenges', formData.challenges.join(', '));
    submissionData.append('Email Address', formData.email);
    submissionData.append('Phone Number', formData.phone);
    if (formData.preferredDate) {
      submissionData.append('Preferred Date', formData.preferredDate);
    }
    if (formData.preferredTime) {
      submissionData.append('Preferred Time', formData.preferredTime);
    }
    submissionData.append('Agreed to Terms', formData.agreeTerms ? 'Yes' : 'No');
    submissionData.append('Marketing Updates', formData.receiveUpdates ? 'Yes' : 'No');

    fetch('https://formsubmit.co/ajax/growlapmarketing@gmail.com', {
      method: 'POST',
      body: submissionData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(() => {
      setIsSubmitting(false);
      setStep(6);
    })
    .catch(error => {
      console.error('Submission failed', error);
      setIsSubmitting(false);
      setStep(6);
    });
  };

  return (
    <section id="contact" className="lets-talk-section">
      <div className="lets-talk-bg-pattern"></div>
      <div className="container lets-talk-container">
        
        {/* Left Column */}
        <div className="lets-talk-text">
          <h2 className="lets-talk-heading-new">
            Got a Business Challenge? <br />
            <span className="text-orange">Let’s Solve It Together.</span>
          </h2>
          <p className="lets-talk-desc-new">
            Tell us what you need, and we’ll help you find the right way forward.
          </p>
          
          <div className="lets-talk-brand-callout">
            <span className="text-white">Let's</span> <span className="text-orange">Talk!</span>
          </div>

          <div className="lets-talk-progress-tracker">
            <span className="step-tracker-label">
              {step <= 5 ? `Step ${step} of 5` : 'Enquiry Sent'}
            </span>
            <div className="step-tracker-bar">
              <div 
                className="step-tracker-fill" 
                style={{ width: `${step === 6 ? 100 : (step / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Right Column: Multi-step interactive card */}
        <div className="lets-talk-form-container multi-step-card">
          {step <= 5 && (
            <div className="stepper-progress-row">
              {[1, 2, 3, 4, 5].map((s, idx) => (
                <React.Fragment key={s}>
                  <div className={`stepper-node ${step === s ? 'active' : step > s ? 'completed' : ''}`}>
                    {s}
                  </div>
                  {idx < 4 && (
                    <div className={`stepper-connector ${step > s ? 'completed' : ''}`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          {errorMsg && (
            <div className="form-error-banner">{errorMsg}</div>
          )}

          {/* STEP 1: Your Name */}
          {step === 1 && (
            <form onSubmit={handleNextFromStep1} className="step-panel animate-fade">
              <div className="step-badge">Step 1 – Your Name</div>
              <h3 className="step-title">Enter Your Name</h3>
              <p className="step-desc">Please enter your name to get started.</p>
              
              <div className="form-group" style={{ margin: '1.5rem 0' }}>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    setErrorMsg('');
                  }}
                  placeholder="Enter Your Name"
                  className="step-input-large"
                  autoFocus
                  required
                />
              </div>

              <div className="step-btn-group">
                <button type="submit" className="step-next-btn">
                  Next Page <FaArrowRight />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Welcome to Grow Lap */}
          {step === 2 && (
            <div className="step-panel animate-fade">
              <div className="step-badge">Step 2 – Welcome to Grow Lap</div>
              <h3 className="step-title">
                Hi, <span className="text-orange">{formData.name || 'Client'}</span>! Welcome to Grow Lap.
              </h3>
              <p className="step-desc">How can we help your business grow?</p>
              
              <div className="step-subheading">Industries We Help Grow</div>
              <div className="options-grid">
                {industriesList.map((ind, i) => (
                  <button 
                    key={i} 
                    type="button"
                    className={`option-chip ${formData.industry === ind ? 'active' : ''}`}
                    onClick={() => {
                      setFormData({ ...formData, industry: ind });
                      setErrorMsg('');
                    }}
                  >
                    {formData.industry === ind && <FaCheck className="chip-check" />}
                    <span>{ind}</span>
                  </button>
                ))}
              </div>

              {formData.industry === 'Others' && (
                <div className="form-group" style={{ marginTop: '1rem' }}>
                  <input 
                    type="text"
                    placeholder="Please specify your industry"
                    value={formData.industryOther}
                    onChange={(e) => setFormData({ ...formData, industryOther: e.target.value })}
                    className="step-input-large"
                  />
                </div>
              )}

              <div className="step-btn-group dual-btn">
                <button type="button" className="step-back-btn" onClick={() => setStep(1)}>
                  <FaArrowLeft /> Back
                </button>
                <button type="button" className="step-next-btn" onClick={handleNextFromStep2}>
                  Next Page <FaArrowRight />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Kindly Select Our Services */}
          {step === 3 && (
            <div className="step-panel animate-fade">
              <div className="step-badge">Step 3 – Kindly Select Our Services</div>
              <h3 className="step-title">Which services are you looking for?</h3>
              <p className="step-desc">Select all that apply to your business goals.</p>

              <div className="options-grid">
                {servicesList.map((srv, i) => {
                  const isSelected = formData.services.includes(srv);
                  return (
                    <button 
                      key={i} 
                      type="button"
                      className={`option-chip ${isSelected ? 'active' : ''}`}
                      onClick={() => toggleService(srv)}
                    >
                      {isSelected && <FaCheck className="chip-check" />}
                      <span>{srv}</span>
                    </button>
                  );
                })}
              </div>

              <div className="step-btn-group dual-btn">
                <button type="button" className="step-back-btn" onClick={() => setStep(2)}>
                  <FaArrowLeft /> Back
                </button>
                <button type="button" className="step-next-btn" onClick={handleNextFromStep3}>
                  Next Page <FaArrowRight />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Your Challenges, Our Solutions */}
          {step === 4 && (
            <div className="step-panel animate-fade">
              <div className="step-badge">Step 4 – Your Challenges, Our Solutions</div>
              <h3 className="step-title">What challenges is your business facing?</h3>
              <p className="step-desc">Tell us what you want to improve.</p>

              <div className="options-grid">
                {challengesList.map((ch, i) => {
                  const isSelected = formData.challenges.includes(ch);
                  return (
                    <button 
                      key={i} 
                      type="button"
                      className={`option-chip ${isSelected ? 'active' : ''}`}
                      onClick={() => toggleChallenge(ch)}
                    >
                      {isSelected && <FaCheck className="chip-check" />}
                      <span>{ch}</span>
                    </button>
                  );
                })}
              </div>

              <div className="step-btn-group dual-btn">
                <button type="button" className="step-back-btn" onClick={() => setStep(3)}>
                  <FaArrowLeft /> Back
                </button>
                <button type="button" className="step-next-btn" onClick={handleNextFromStep4}>
                  Next Page <FaArrowRight />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Your Contact Details */}
          {step === 5 && (
            <form onSubmit={handleSubmit} className="step-panel step5-panel animate-fade">
              <span className="step5-counter-tag">Step 5 of 5</span>
              <h3 className="step5-heading">
                Your <span className="text-orange">Contact Details</span>
              </h3>
              <p className="step5-subheading-text">
                Share your details and choose a convenient time to discuss your business needs with our team.
              </p>

              {/* Email Address with left icon */}
              <div className="step5-input-container">
                <FaEnvelope className="step5-icon-left" />
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    setErrorMsg('');
                  }}
                  placeholder="Email Address"
                  className="step5-input-field"
                  required
                />
              </div>

              {/* Phone Number with left icon */}
              <div className="step5-input-container">
                <FaPhoneAlt className="step5-icon-left" />
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    setErrorMsg('');
                  }}
                  placeholder="Phone Number"
                  className="step5-input-field"
                  required
                />
              </div>

              {/* Preferred Date & Time Selection (Optional) */}
              <div className="step5-datetime-section">
                <label className="step5-section-label">Select Preferred Date & Time (Optional)</label>
                <div className="step5-datetime-grid">
                  {/* Preferred Date Box */}
                  <div className="step5-picker-relative" ref={datePickerRef}>
                    <div 
                      className={`step5-custom-picker-box ${showDatePicker ? 'focused' : ''} ${formData.preferredDate ? 'has-value' : ''}`}
                      onClick={() => {
                        setShowDatePicker(!showDatePicker);
                        setShowTimePicker(false);
                      }}
                    >
                      <FaRegCalendarAlt className="step5-picker-icon" />
                      <div className="step5-picker-texts">
                        <span className="step5-picker-sublabel">Preferred Date</span>
                        <span className="step5-picker-value">{formData.preferredDate || 'Select date'}</span>
                      </div>
                      <FaCalendarAlt className="step5-picker-arrow-icon" />
                    </div>

                    {/* Interactive Calendar Dropdown (matches mockup) */}
                    {showDatePicker && (
                      <div className="step5-calendar-popup animate-fade">
                        <div className="calendar-header-nav">
                          <button type="button" onClick={handlePrevMonth} className="calendar-nav-btn">
                            <FaChevronLeft />
                          </button>
                          <span className="calendar-month-title">
                            {monthNames[calendarDate.getMonth()]} {calendarDate.getFullYear()}
                          </span>
                          <button type="button" onClick={handleNextMonth} className="calendar-nav-btn">
                            <FaChevronRight />
                          </button>
                        </div>

                        <div className="calendar-days-week-row">
                          <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                        </div>

                        <div className="calendar-days-grid">
                          {Array.from({ length: getFirstDayOfMonth(calendarDate.getFullYear(), calendarDate.getMonth()) }).map((_, i) => (
                            <div key={`empty-${i}`} className="calendar-day-cell empty"></div>
                          ))}
                          {Array.from({ length: getDaysInMonth(calendarDate.getFullYear(), calendarDate.getMonth()) }).map((_, i) => {
                            const d = i + 1;
                            const isSelected = formData.preferredDate.startsWith(`${d} `) && formData.preferredDate.includes(calendarDate.getFullYear().toString());
                            return (
                              <button
                                key={`day-${d}`}
                                type="button"
                                className={`calendar-day-cell ${isSelected ? 'selected' : ''}`}
                                onClick={() => handleSelectDate(d)}
                              >
                                {d}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Preferred Time Box */}
                  <div className="step5-picker-relative" ref={timePickerRef}>
                    <div 
                      className={`step5-custom-picker-box ${showTimePicker ? 'focused' : ''} ${formData.preferredTime ? 'has-value' : ''}`}
                      onClick={() => {
                        setShowTimePicker(!showTimePicker);
                        setShowDatePicker(false);
                      }}
                    >
                      <FaRegClock className="step5-picker-icon" />
                      <div className="step5-picker-texts">
                        <span className="step5-picker-sublabel">Preferred Time</span>
                        <span className="step5-picker-value">{formData.preferredTime || 'Select time'}</span>
                      </div>
                      <FaChevronDown className="step5-picker-arrow-icon" />
                    </div>

                    {/* Interactive Time Dropdown */}
                    {showTimePicker && (
                      <div className="step5-time-popup animate-fade">
                        <div className="time-slots-list">
                          {timeSlots.map((slot, index) => (
                            <button
                              key={index}
                              type="button"
                              className={`time-slot-btn ${formData.preferredTime === slot ? 'active' : ''}`}
                              onClick={() => handleSelectTime(slot)}
                            >
                              <FaRegClock style={{ fontSize: '0.85rem', marginRight: '6px' }} />
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Terms and Privacy Checkboxes */}
              <div className="step5-terms-group">
                <label className="step5-checkbox-wrapper">
                  <input 
                    type="checkbox" 
                    checked={formData.agreeTerms}
                    onChange={(e) => {
                      setFormData({ ...formData, agreeTerms: e.target.checked });
                      setErrorMsg('');
                    }}
                    required
                  />
                  <span>
                    I agree to the <span className="orange-highlight-link">Terms and Conditions</span> and <span className="orange-highlight-link">Privacy Policy</span>
                  </span>
                </label>

                <label className="step5-checkbox-wrapper">
                  <input 
                    type="checkbox" 
                    checked={formData.receiveUpdates}
                    onChange={(e) => {
                      setFormData({ ...formData, receiveUpdates: e.target.checked });
                    }}
                  />
                  <span>I'd like to receive marketing updates from Grow Lap (Optional)</span>
                </label>
              </div>

              {/* Submit CTA Button & Back Option */}
              <div className="step5-actions-row">
                <button type="submit" className="step5-cta-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : (
                    <>
                      <span>Submit Enquiry</span> <FaArrowRight />
                    </>
                  )}
                </button>
                <button type="button" className="step5-back-button" onClick={() => setStep(4)} disabled={isSubmitting}>
                  <FaArrowLeft /> Back
                </button>
              </div>
            </form>
          )}

          {/* FINAL PAGE – Thank You! */}
          {step === 6 && (
            <div className="step-panel final-thankyou-panel animate-fade">
              <div className="success-icon-badge">
                <FaCheckCircle />
              </div>
              <h3 className="thankyou-title">Thank You for Choosing Grow Lap!</h3>
              <p className="thankyou-desc">
                We've received your details. Our team looks forward to connecting with you at your selected date and time to discuss your business needs and how Grow Lap can help you grow your brand.
              </p>
              <div className="thankyou-highlight">
                Let's Grow Your Business Together!
              </div>

              <button 
                type="button" 
                className="step-restart-btn"
                onClick={() => {
                  setFormData({
                    name: '',
                    industry: '',
                    industryOther: '',
                    services: [],
                    challenges: [],
                    email: '',
                    phone: '',
                    preferredDate: '',
                    preferredTime: '',
                    agreeTerms: false,
                    receiveUpdates: false
                  });
                  setStep(1);
                }}
              >
                Send Another Enquiry
              </button>
            </div>
          )}

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
      <IndustrySection limit={4} />
      <ProcessSection />
      <TestimonialsSection />
      <LetsTalkSection />
    </div>
  );
};

export default HomePage;
