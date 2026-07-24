import React, { useState, useEffect, useRef } from 'react';
import { FaRegSmile, FaRegFileAlt, FaUsers, FaTrophy } from 'react-icons/fa';
import './StatsSection.css';

const stats = [
  { icon: <FaRegSmile />, value: 50, suffix: '+', label: 'Happy Clients' },
  { icon: <FaRegFileAlt />, value: 25, suffix: '+', label: 'Projects Completed' },
  { icon: <FaUsers />, value: 10, suffix: '+', label: 'Team Members' },
  { icon: <FaTrophy />, value: 1, suffix: '+', label: 'Years of Experience' }
];

const AnimatedCounter = ({ endValue, suffix }) => {
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

  return <h3 ref={counterRef}>{count}{suffix}</h3>;
};

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon text-accent">{stat.icon}</div>
              <div className="stat-info">
                <AnimatedCounter endValue={stat.value} suffix={stat.suffix} />
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
