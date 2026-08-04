import React, { useState, useEffect } from 'react';
import './CurtainReveal.css';

const CurtainReveal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Open the curtain shortly after mounting (gives time to read the text)
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 1200); 

    // Completely remove the curtain from DOM after animation completes
    const removeTimer = setTimeout(() => {
      setIsRemoved(true);
    }, 3500); 

    return () => {
      clearTimeout(openTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (isRemoved) return null;

  return (
    <div className={`curtain-container ${isOpen ? 'open' : ''}`}>
      <div className="curtain-panel curtain-left"></div>
      <div className="curtain-panel curtain-right"></div>
      
      <div className={`curtain-content ${isOpen ? 'fade-out' : ''}`}>
        <h1 className="grand-title">
          <span className="text-white">Fly Towards</span>
          <br/>
          <span className="text-orange">DIGITAL MARKETING</span>
        </h1>
      </div>
    </div>
  );
};

export default CurtainReveal;
