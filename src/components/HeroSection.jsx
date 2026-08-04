import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaBullhorn, FaCogs, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section section-padding">
      <div className="container hero-container grid-2">
        {/* Left Content */}
        <div className="hero-content">
          <p className="hero-subtitle text-accent">WE BUILD • WE SOLVE • WE GROW</p>
          <h1 className="hero-title">
            Digital Solutions<br />
            That Drive Real<br />
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
            <a href="https://wa.me/917695883647" target="_blank" rel="noopener noreferrer" className="dual-btn-right">
              <FaWhatsapp className="dual-btn-icon" style={{ fontSize: '1.25rem' }} /> WhatsApp
            </a>
          </div>
          
          <div className="hero-stats-mini">
            <div className="avatars">
              {/* Placeholders for avatars */}
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
            </div>
            <p><strong>50+</strong> Happy Clients</p>
          </div>
        </div>

        {/* Right Graphics (Empty for video background layout) */}
        <div className="hero-graphics">
          {/* Removed broken image. Graphics area can be used for other elements or left empty since video is background. */}
        </div>
      </div>
      
      {/* Background Video */}
      <div className="hero-video-bg-container">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/Hero.mp4" type="video/mp4" />
        </video>
        {/* <div className="video-overlay-dark"></div> */}
      </div>
    </section>
  );
};

export default HeroSection;
