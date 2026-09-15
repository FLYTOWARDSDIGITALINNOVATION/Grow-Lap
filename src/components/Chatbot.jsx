import React, { useState, useEffect, useRef } from 'react';
import { FaCommentDots, FaTimes, FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Welcome to Grow Lap. How can we help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text) => {
    if (!text.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      
      const lowerText = text.toLowerCase();
      let botResponse = "Thank you for your message! Please leave your email or phone number, and our team will get back to you shortly.";
      
      if (lowerText.includes('service') || lowerText.includes('what do you do')) {
        botResponse = "We offer a wide range of Digital Marketing, Video Editing, and Shoot services. Would you like to speak to an expert?";
      } else if (lowerText.includes('price') || lowerText.includes('cost')) {
        botResponse = "Our pricing is customized based on your specific needs. Please leave your contact details for a free quote.";
      } else if (lowerText.includes('@') || lowerText.match(/\d{10}/)) {
        botResponse = "Thanks for sharing your contact details! We will reach out to you very soon.";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 1000);
  };

  const handleOptionClick = (optionText) => {
    handleSend(optionText);
  };

  return (
    <div className="chatbot-container">
      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <FaRobot />
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#fff' }}>Grow Lap Support</h4>
              <span style={{ fontSize: '0.8rem', color: '#4ade80' }}>Online</span>
            </div>
          </div>
          <button className="chatbot-close-btn" onClick={toggleChat} aria-label="Close chat">
            <FaTimes />
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chatbot-message-wrapper ${msg.sender === 'user' ? 'user' : 'bot'}`}>
              {msg.sender === 'bot' && <div className="message-icon bot-icon"><FaRobot /></div>}
              <div className={`chatbot-message ${msg.sender}`}>
                {msg.text}
              </div>
              {msg.sender === 'user' && <div className="message-icon user-icon"><FaUser /></div>}
            </div>
          ))}
          
          {isTyping && (
            <div className="chatbot-message-wrapper bot">
              <div className="message-icon bot-icon"><FaRobot /></div>
              <div className="chatbot-message bot typing-indicator">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}

          {/* Quick Options - Only show if the last message was the welcome message */}
          {messages.length === 1 && !isTyping && (
            <div className="chatbot-options">
              <button onClick={() => handleOptionClick('Tell me about your services')}>Our Services</button>
              <button onClick={() => handleOptionClick('How much does it cost?')}>Pricing</button>
              <button onClick={() => handleOptionClick('I want to talk to a human')}>Contact Support</button>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input-area">
          <input 
            type="text" 
            placeholder="Type your message..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend(inputValue)}
          />
          <button className="chatbot-send-btn" onClick={() => handleSend(inputValue)}>
            <FaPaperPlane />
          </button>
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button 
        className={`chatbot-toggle-btn ${isOpen ? 'hidden' : ''}`} 
        onClick={toggleChat}
        aria-label="Open chat"
      >
        <FaCommentDots />
      </button>
    </div>
  );
};

export default Chatbot;
