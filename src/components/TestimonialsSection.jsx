import React from 'react';
import { FaQuoteLeft, FaPaperPlane } from 'react-icons/fa';
import './TestimonialsSection.css';

const testimonials = [
  {
    name: 'Udhaya',
    role: 'CEO, TechCorp',
    content: 'They completely transformed our digital presence. Our traffic doubled in just 3 months!',
    image: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    name: 'Sarah Smith',
    role: 'Founder, EcoBrand',
    content: 'Incredible ROI. Their targeted ad campaigns brought us high-quality leads we never thought possible.',
    image: 'https://picsum.photos/seed/user2/100/100'
  },
  {
    name: 'Michael Lee',
    role: 'Marketing Director',
    content: 'The most professional agency we have worked with. Transparent reporting and data-driven results.',
    image: 'https://picsum.photos/seed/user3/100/100'
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
          {/* Background Dashed Line & Arrow */}
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

export default TestimonialsSection;
