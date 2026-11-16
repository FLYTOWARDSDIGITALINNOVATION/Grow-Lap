import React, { useEffect } from 'react';
import './CardPage.css';

const CardPage = () => {
  useEffect(() => {
    document.title = 'Grow Lap – Digital Marketing Agency';
    const originalBodyBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#000';
    return () => {
      document.body.style.backgroundColor = originalBodyBg;
    };
  }, []);

  return (
    <div className="card-page-wrapper">
      <main className="card-container">
        <img
          src="/growlap-card.jpg"
          width="1024"
          height="1536"
          alt="Grow Lap – We Build. We Create. We Grow. Digital marketing agency, Sankarankovil, Tenkasi"
        />
        {/* Invisible tap areas placed over the design */}
        <a
          href="tel:+916383246378"
          aria-label="Call us"
          style={{ left: '4.88%', top: '42.97%', width: '44.43%', height: '7.03%' }}
        />
        <a
          href="https://wa.me/916383246378"
          aria-label="WhatsApp"
          style={{ left: '14.16%', top: '44.01%', width: '6.84%', height: '4.56%' }}
          target="_blank"
          rel="noopener noreferrer"
          className="top"
        />
        <a
          href="mailto:info@growlap.com"
          aria-label="Email us"
          style={{ left: '51.07%', top: '42.97%', width: '43.95%', height: '7.03%' }}
        />
        <a
          href="https://www.instagram.com/growlap_/"
          aria-label="Instagram"
          style={{ left: '4.88%', top: '51.04%', width: '44.43%', height: '6.64%' }}
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="https://www.linkedin.com/company/growlap-digitalmarkeiting-/home/"
          aria-label="LinkedIn"
          style={{ left: '51.07%', top: '51.04%', width: '43.95%', height: '6.64%' }}
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="https://www.youtube.com/@grow_lap"
          aria-label="YouTube"
          style={{ left: '4.88%', top: '58.59%', width: '44.43%', height: '6.38%' }}
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="https://www.growlap.com/"
          aria-label="Website"
          style={{ left: '51.07%', top: '58.59%', width: '43.95%', height: '6.38%' }}
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="https://www.growlap.com/services/digital-marketing"
          aria-label="Digital Marketing"
          style={{ left: '4.59%', top: '69.66%', width: '17.29%', height: '9.31%' }}
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="https://www.growlap.com/services/digital-marketing/seo"
          aria-label="SEO"
          style={{ left: '23.93%', top: '69.66%', width: '16.70%', height: '9.31%' }}
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="https://www.growlap.com/services/digital-marketing/meta-ad"
          aria-label="Meta Ads"
          style={{ left: '42.09%', top: '69.66%', width: '16.60%', height: '9.31%' }}
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="https://www.growlap.com/services/editing"
          aria-label="Creative Editing"
          style={{ left: '60.16%', top: '69.66%', width: '16.60%', height: '9.31%' }}
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="https://www.growlap.com/services/shooting"
          aria-label="Photography and Videography"
          style={{ left: '78.22%', top: '69.66%', width: '17.29%', height: '9.31%' }}
          target="_blank"
          rel="noopener noreferrer"
        />
      </main>
    </div>
  );
};

export default CardPage;
