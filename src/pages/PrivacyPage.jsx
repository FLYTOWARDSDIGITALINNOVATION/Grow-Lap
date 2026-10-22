import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  FaUserShield,
  FaIdCard,
  FaCogs,
  FaCookieBite,
  FaShareAlt,
  FaLock,
  FaBalanceScale,
  FaFileSignature,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaCalendarAlt,
  FaShieldAlt,
  FaCheckCircle
} from 'react-icons/fa';
import './PrivacyPage.css';

const privacyData = [
  {
    number: "01",
    title: "Introduction & Scope",
    icon: <FaUserShield />,
    content: (
      <>
        At <strong>GrowLap</strong> (<a href="https://www.growlap.com/" target="_blank" rel="noopener noreferrer" className="privacy-inline-link">https://www.growlap.com/</a>), we deeply value your privacy. This policy explains what information we collect when you visit our website, explore our digital marketing services, or contact us, and how we handle, use, and protect your data responsibly.
      </>
    )
  },
  {
    number: "02",
    title: "Information We Collect",
    icon: <FaIdCard />,
    content: (
      <>
        <p className="privacy-card-intro">
          When you contact GrowLap, request a consultation, or submit an enquiry through our forms, we may collect the following details:
        </p>
        <div className="privacy-chips-grid">
          <span>Full Name</span>
          <span>Business Name</span>
          <span>Email Address</span>
          <span>Phone / WhatsApp Number</span>
          <span>Website URL</span>
          <span>Targeted Services &amp; Project Requirements</span>
        </div>
      </>
    )
  },
  {
    number: "03",
    title: "How We Use Your Information",
    icon: <FaCogs />,
    content: (
      <>
        <p className="privacy-card-intro">
          We use the information we collect strictly for legitimate business and client service purposes, including:
        </p>
        <div className="privacy-points-list">
          <div className="privacy-point-item">
            <span className="privacy-point-bullet"></span>
            <span>Responding promptly to your questions and consultation inquiries.</span>
          </div>
          <div className="privacy-point-item">
            <span className="privacy-point-bullet"></span>
            <span>Understanding your specific business goals and industry requirements.</span>
          </div>
          <div className="privacy-point-item">
            <span className="privacy-point-bullet"></span>
            <span>Delivering tailored digital marketing, web design, shooting, and video editing services.</span>
          </div>
          <div className="privacy-point-item">
            <span className="privacy-point-bullet"></span>
            <span>Managing projects, contracts, deliverables, and client communications.</span>
          </div>
          <div className="privacy-point-item">
            <span className="privacy-point-bullet"></span>
            <span>Continuously improving our website performance, user experience, and agency solutions.</span>
          </div>
        </div>
      </>
    )
  },
  {
    number: "04",
    title: "Cookies & Tracking",
    icon: <FaCookieBite />,
    content: (
      <>
        Our website may use cookies and similar technologies to analyze web traffic trends, remember user preferences, and enhance your overall browsing experience. You can choose to accept, decline, or disable cookies at any time through your browser settings.
      </>
    )
  },
  {
    number: "05",
    title: "Third-Party Services",
    icon: <FaShareAlt />,
    content: (
      <>
        <p className="privacy-card-intro">
          We may utilize trusted third-party analytics and advertising tools to analyze site performance and run targeted ad campaigns:
        </p>
        <div className="privacy-chips-grid">
          <span>Google Analytics</span>
          <span>Google Ads</span>
          <span>Meta Pixel &amp; Ads Manager</span>
        </div>
        <p style={{ marginTop: '12px' }}>
          These external platforms collect and process data in accordance with their respective privacy policies and security standards.
        </p>
      </>
    )
  },
  {
    number: "06",
    title: "Data Protection & Security",
    icon: <FaLock />,
    content: (
      <>
        We implement reasonable administrative, technical, and physical safeguards to keep your personal information secure. Our protocols are designed to prevent unauthorized access, alteration, accidental loss, misuse, or unlawful disclosure of your data.
      </>
    )
  },
  {
    number: "07",
    title: "Your Privacy Rights",
    icon: <FaBalanceScale />,
    content: (
      <>
        You have full control over your personal data. You may contact us at any time to request access to the information we hold about you, request corrections to outdated details, or ask us to delete your personal data, subject to applicable statutory laws and record retention requirements.
      </>
    )
  },
  {
    number: "08",
    title: "Changes to This Policy",
    icon: <FaFileSignature />,
    content: (
      <>
        GrowLap may update this Privacy Policy periodically to reflect technological updates, operational adjustments, or changing legal standards. Any revisions will be published directly on this page with an updated revision date.
      </>
    )
  },
  {
    number: "09",
    title: "Contact Us",
    icon: <FaEnvelope />,
    content: (
      <>
        If you have any questions, concerns, or requests regarding this Privacy Policy or how your personal information is handled, please get in touch with our team using the contact channels below.
      </>
    )
  }
];

const PrivacyPage = () => {
  return (
    <div className="privacy-page">
      <SEO
        title="Privacy Policy | Grow Lap"
        description="Learn how Grow Lap collects, protects, and manages your personal information. Read our complete Privacy Policy covering data security, cookies, and your privacy rights."
        keywords="Privacy Policy, Grow Lap privacy, data protection, privacy rights, cookies policy"
        canonical="https://www.growlap.com/privacy"
        robots="index,follow"
        ogImageAlt="Grow Lap Privacy Policy"
      />

      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="privacy-hero-glow"></div>
        <div className="container privacy-hero-container">
          <div className="privacy-hero-content">
            <div className="privacy-badge">
              <span className="privacy-badge-dot"></span>
              PRIVACY &amp; SECURITY
            </div>
            <h1 className="privacy-title">
              Privacy <span className="privacy-title-gradient">Policy</span>
            </h1>
            <p className="privacy-subtitle">
              Learn how we collect, safeguard, and manage your personal information with full transparency.
            </p>
            <div className="privacy-date-pill">
              <FaCalendarAlt className="privacy-date-icon" />
              <span>Last updated: October 13, 2026</span>
            </div>
          </div>

          <div className="privacy-hero-visual">
            <div className="privacy-doc-wrapper">
              <div className="privacy-doc-sheet">
                <div className="privacy-doc-header">
                  <div className="privacy-doc-stamp">
                    <FaCheckCircle />
                  </div>
                  <div className="privacy-doc-heading">
                    <span className="privacy-doc-heading-title">Data Privacy &amp;</span>
                    <span className="privacy-doc-heading-sub">Protection</span>
                  </div>
                </div>
                <div className="privacy-doc-lines">
                  <div className="privacy-doc-line long"></div>
                  <div className="privacy-doc-line mid"></div>
                  <div className="privacy-doc-line full"></div>
                  <div className="privacy-doc-line mid"></div>
                  <div className="privacy-doc-line short"></div>
                </div>
                <div className="privacy-doc-signature">
                  <div className="privacy-doc-sign-line"></div>
                  <span className="privacy-doc-sign-badge">Secure Protocol</span>
                </div>
              </div>

              {/* Glowing Shield Badge */}
              <div className="privacy-floating-shield">
                <FaShieldAlt className="privacy-shield-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Privacy Grid Section */}
      <section className="privacy-content-section">
        <div className="container">
          <div className="privacy-grid">
            {privacyData.map((item) => (
              <div key={item.number} className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-card-icon-wrap">
                    {item.icon}
                  </div>
                  <div className="privacy-card-number">{item.number}</div>
                </div>
                <h2 className="privacy-card-title">{item.title}</h2>
                <div className="privacy-card-text">
                  {item.content}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Full-Width Contact Bar */}
          <div className="privacy-contact-bar">
            <div className="privacy-contact-col">
              <div className="privacy-contact-icon">
                <FaGlobe />
              </div>
              <div className="privacy-contact-info">
                <span className="privacy-contact-label">Website</span>
                <a
                  href="https://www.growlap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-contact-value"
                >
                  www.growlap.com
                </a>
              </div>
            </div>

            <div className="privacy-contact-col">
              <div className="privacy-contact-icon">
                <FaEnvelope />
              </div>
              <div className="privacy-contact-info">
                <span className="privacy-contact-label">Email</span>
                <a
                  href="mailto:growlapmarketing@gmail.com"
                  className="privacy-contact-value"
                >
                  growlapmarketing@gmail.com
                </a>
              </div>
            </div>

            <div className="privacy-contact-col">
              <div className="privacy-contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="privacy-contact-info">
                <span className="privacy-contact-label">Address</span>
                <span className="privacy-contact-value">
                  Sankarankovil, TamilNadu, India
                </span>
              </div>
            </div>

            <div className="privacy-contact-col">
              <div className="privacy-contact-icon">
                <FaPhoneAlt />
              </div>
              <div className="privacy-contact-info">
                <span className="privacy-contact-label">Mobile</span>
                <a
                  href="tel:+916383246378"
                  className="privacy-contact-value"
                >
                  +91-6383246378
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
