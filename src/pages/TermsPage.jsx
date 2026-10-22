import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  FaHandshake,
  FaBriefcase,
  FaUserCheck,
  FaCreditCard,
  FaCopyright,
  FaChartLine,
  FaShieldAlt,
  FaExclamationTriangle,
  FaFileSignature,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaCalendarAlt,
  FaCheckCircle
} from 'react-icons/fa';
import './TermsPage.css';

const termsData = [
  {
    number: "01",
    title: "Introduction",
    icon: <FaHandshake />,
    content: (
      <>
        Welcome to <strong>GrowLap</strong>! By accessing our website,{' '}
        <a href="https://www.growlap.com/" target="_blank" rel="noopener noreferrer" className="terms-inline-link">
          https://www.growlap.com/
        </a>
        , or using our services, you agree to these Terms & Conditions. These terms explain the responsibilities of GrowLap and its clients when using our website and services.
      </>
    )
  },
  {
    number: "02",
    title: "Services Offered",
    icon: <FaBriefcase />,
    content: (
      <>
        <p className="terms-card-intro">
          GrowLap provides digital marketing and business development services to help businesses scale online, reach their target audience, and build a lasting brand:
        </p>
        <div className="terms-services-chips">
          <span>SEO and Local SEO</span>
          <span>Social Media Marketing</span>
          <span>Google Ads and Meta Ads</span>
          <span>Content Creation</span>
          <span>Digital Advertising</span>
          <span>Web Design</span>
          <span>Professional Shooting</span>
          <span>Video and Reels Editing</span>
        </div>
      </>
    )
  },
  {
    number: "03",
    title: "Client Responsibilities",
    icon: <FaUserCheck />,
    content: (
      <>
        Clients must provide the necessary information, materials, brand assets, approvals and account access required to complete projects on time. Any delay in providing the necessary details or approvals may affect project timelines and delivery schedules.
      </>
    )
  },
  {
    number: "04",
    title: "Payment Terms",
    icon: <FaCreditCard />,
    content: (
      <>
        Clients must pay <strong>50% of the total project cost before work begins</strong>. The remaining <strong>50% is payable upon project completion</strong>. Payments made are non-refundable once work has commenced, except where required by applicable law.
      </>
    )
  },
  {
    number: "05",
    title: "Intellectual Property Rights",
    icon: <FaCopyright />,
    content: (
      <>
        Ownership or usage rights for final deliverables will be transferred to the client after full payment, as agreed in writing. Third party materials, plugins, software, stock footage, fonts or licensed assets remain subject to their respective licences.
      </>
    )
  },
  {
    number: "06",
    title: "Marketing Results",
    icon: <FaChartLine />,
    content: (
      <>
        Grow Lap aims to improve online visibility, engagement and business growth using industry best practices. However, specific keyword rankings, leads, sales volume or advertising ROAS cannot be guaranteed due to dynamic market conditions.
      </>
    )
  },
  {
    number: "07",
    title: "Privacy & Data",
    icon: <FaShieldAlt />,
    content: (
      <>
        Client information and proprietary data will be handled responsibly, kept strictly confidential, and used solely for service delivery in accordance with our Privacy Policy and applicable data protection regulations.
      </>
    )
  },
  {
    number: "08",
    title: "Limitation of Liability",
    icon: <FaExclamationTriangle />,
    content: (
      <>
        GrowLap is not responsible for changes to third-party platforms, algorithm updates, or service interruptions beyond our reasonable control. If your account is suspended, restricted, or your content is removed by third-party platforms such as Google, Meta, Instagram or other service providers, GrowLap cannot be held responsible for these actions. All limitations are subject to applicable law.
      </>
    )
  },
  {
    number: "09",
    title: "Changes to Terms",
    icon: <FaFileSignature />,
    content: (
      <>
        Grow Lap may update these Terms & Conditions when necessary to reflect changes in our business or legal requirements. Updated terms will be published on this page. Clients and visitors are encouraged to review this page periodically.
      </>
    )
  },
  {
    number: "10",
    title: "Contact Us",
    icon: <FaEnvelope />,
    content: (
      <>
        For any questions, clarifications, or feedback regarding these Terms & Conditions, please contact us through our official support channels listed below.
      </>
    )
  }
];

const TermsPage = () => {
  return (
    <div className="terms-page">
      <SEO
        title="Terms & Conditions | Grow Lap"
        description="Explore the Terms & Conditions of Grow Lap. Learn about our service agreements, client responsibilities, payment policies, intellectual property, and limitations."
        keywords="Terms & Conditions, Grow Lap terms, digital marketing terms of service, payment policy, Grow Lap agreement"
        canonical="https://www.growlap.com/terms"
        robots="index,follow"
        ogImageAlt="Grow Lap Terms & Conditions"
      />

      {/* Hero Section */}
      <section className="terms-hero">
        <div className="terms-hero-glow"></div>
        <div className="container terms-hero-container">
          <div className="terms-hero-content">
            <div className="terms-badge">
              <span className="terms-badge-dot"></span>
              LEGAL INFORMATION
            </div>
            <h1 className="terms-title">
              Terms & <span className="terms-title-gradient">Conditions</span>
            </h1>
            <p className="terms-subtitle">
              Please read our terms before using our website or services.
            </p>
            <div className="terms-date-pill">
              <FaCalendarAlt className="terms-date-icon" />
              <span>Last updated: October 13, 2026</span>
            </div>
          </div>

          <div className="terms-hero-visual">
            <div className="terms-doc-wrapper">
              <div className="terms-doc-sheet">
                <div className="terms-doc-header">
                  <div className="terms-doc-stamp">
                    <FaCheckCircle />
                  </div>
                  <div className="terms-doc-heading">
                    <span className="terms-doc-heading-title">Terms &amp;</span>
                    <span className="terms-doc-heading-sub">Conditions</span>
                  </div>
                </div>
                <div className="terms-doc-lines">
                  <div className="terms-doc-line long"></div>
                  <div className="terms-doc-line mid"></div>
                  <div className="terms-doc-line full"></div>
                  <div className="terms-doc-line mid"></div>
                  <div className="terms-doc-line short"></div>
                </div>
                <div className="terms-doc-signature">
                  <div className="terms-doc-sign-line"></div>
                  <span className="terms-doc-sign-badge">Official Document</span>
                </div>
              </div>

              {/* Glowing Shield Badge */}
              <div className="terms-floating-shield">
                <FaShieldAlt className="terms-shield-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Terms Grid Section */}
      <section className="terms-content-section">
        <div className="container">
          <div className="terms-grid">
            {termsData.map((item) => (
              <div key={item.number} className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-card-icon-wrap">
                    {item.icon}
                  </div>
                  <div className="terms-card-number">{item.number}</div>
                </div>
                <h2 className="terms-card-title">{item.title}</h2>
                <div className="terms-card-text">
                  {item.content}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Full-Width Contact Bar */}
          <div className="terms-contact-bar">
            <div className="terms-contact-col">
              <div className="terms-contact-icon">
                <FaGlobe />
              </div>
              <div className="terms-contact-info">
                <span className="terms-contact-label">Website</span>
                <a
                  href="https://www.growlap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terms-contact-value"
                >
                  www.growlap.com
                </a>
              </div>
            </div>

            <div className="terms-contact-col">
              <div className="terms-contact-icon">
                <FaEnvelope />
              </div>
              <div className="terms-contact-info">
                <span className="terms-contact-label">Email</span>
                <a
                  href="mailto:growlapmarketing@gmail.com"
                  className="terms-contact-value"
                >
                  growlapmarketing@gmail.com
                </a>
              </div>
            </div>

            <div className="terms-contact-col">
              <div className="terms-contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="terms-contact-info">
                <span className="terms-contact-label">Address</span>
                <span className="terms-contact-value">
                  Sankarankovil, TamilNadu, India
                </span>
              </div>
            </div>

            <div className="terms-contact-col">
              <div className="terms-contact-icon">
                <FaPhoneAlt />
              </div>
              <div className="terms-contact-info">
                <span className="terms-contact-label">Mobile</span>
                <a
                  href="tel:+916383246378"
                  className="terms-contact-value"
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

export default TermsPage;
