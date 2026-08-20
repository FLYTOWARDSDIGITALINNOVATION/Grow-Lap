import React, { useState, useEffect, useRef } from 'react';
import { FaRegSmile, FaRegFileAlt, FaUsers, FaTrophy } from 'react-icons/fa';
import './StatsSection.css';

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

export default StatsSection;
