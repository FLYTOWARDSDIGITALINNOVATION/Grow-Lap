import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import IndustrySection from '../components/IndustrySection';
import ProcessSection from '../components/ProcessSection';
import WhyDifferentSection from '../components/WhyDifferentSection';
import BlogSection from '../components/BlogSection';
import TestimonialsSection from '../components/TestimonialsSection';
import LetsTalkSection from '../components/LetsTalkSection';

const HomePage = () => {
  return (
    <div className="capitalize-content">
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
