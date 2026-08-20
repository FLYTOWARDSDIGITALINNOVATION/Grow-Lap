import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUserShield, FaLock, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import './AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isForgotView, setIsForgotView] = useState(false);
  const [isResetLinkView, setIsResetLinkView] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [resetMessage, setResetMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we came from a reset link
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('reset') === 'true') {
      setIsResetLinkView(true);
    }
  }, [location]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    // Check localStorage for a changed password, default to 'udhaya@123'
    const savedPassword = localStorage.getItem('fly_admin_password') || 'udhaya@123';
    
    if (email === 'udhayabanu2005@gmail.com' && password === savedPassword) {
      localStorage.setItem('fly_admin_token', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleSaveNewPassword = (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    localStorage.setItem('fly_admin_password', newPassword);
    setResetMessage('Password changed successfully! You can now login.');
    setIsResetLinkView(false);
    navigate('/admin'); // Remove query params
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    const resetLink = window.location.origin + '/admin?reset=true';

    // Actual API call to send email via FormSubmit
    fetch('https://formsubmit.co/ajax/udhayabanu2005@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `Password Reset Link - ${new Date().toLocaleString()}`,
        message: `You requested a password reset. Click the link below to change your password:\n\n${resetLink}`,
        requested_email: email
      })
    })
    .then(response => response.json())
    .then(data => {
      setResetMessage('Password reset link sent! Check your email.');
    })
    .catch(err => {
      setError('Failed to send email. Please try again later.');
    });
  };

  return (
    <div className="admin-login-wrapper">
      {/* Background Split for Contrast Effect */}
      <div className="admin-bg-left"></div>
      <div className="admin-bg-right"></div>

      <div className="admin-split-card">
        
        {/* Left Side: Form */}
        <div className="admin-form-side">
          <div className="admin-login-header">
            <h2>
              {isResetLinkView ? 'Create New Password' : (isForgotView ? 'Reset Password' : 'Admin Login')}
            </h2>
            <p>
              {isResetLinkView ? 'Enter your new secure password below.' : (isForgotView ? 'Enter your email to receive a reset link.' : 'Welcome back! Please login to your account.')}
            </p>
          </div>

          {error && <div className="admin-error-msg">{error}</div>}
          {resetMessage && <div className="admin-success-msg">{resetMessage}</div>}

          {isResetLinkView ? (
            <form onSubmit={handleSaveNewPassword} className="admin-login-form">
              <div className="admin-form-group">
                <label>New Password</label>
                <div className="admin-password-wrapper">
                  <input 
                    type={showNewPassword ? "text" : "password"} 
                    placeholder="Enter new password" 
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required 
                    className="admin-pill-input"
                  />
                  <span 
                    className="admin-password-toggle" 
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              <div className="admin-submit-wrapper">
                <button type="submit" className="admin-btn-pill">
                  Change Password
                </button>
              </div>
            </form>
          ) : isForgotView ? (
            <form onSubmit={handleResetPassword} className="admin-login-form">
              <div className="admin-form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  placeholder="admin@flydigital.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className="admin-pill-input"
                />
              </div>

              <div className="admin-submit-wrapper">
                <button type="submit" className="admin-btn-pill">
                  Send Reset Link
                </button>
              </div>
              <div className="admin-back-link">
                <span onClick={() => { setIsForgotView(false); setResetMessage(''); setError(''); }}>Back to Login</span>
              </div>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="admin-login-form">
              <div className="admin-form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  placeholder="admin@flydigital.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className="admin-pill-input"
                />
              </div>

              <div className="admin-form-group">
                <label>Password</label>
                <div className="admin-password-wrapper">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                    className="admin-pill-input"
                  />
                  <span 
                    className="admin-password-toggle" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              <div className="admin-forgot-link">
                <span onClick={() => { setIsForgotView(true); setError(''); }}>Forgot Password?</span>
              </div>

              <div className="admin-submit-wrapper">
                <button type="submit" className="admin-btn-pill">
                  Secure Login
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Side: Image/Branding */}
        <div className="admin-image-side">
          <div className="admin-image-overlay"></div>
          <div className="admin-brand-content">
            <h1 className="admin-brand-logo">FLY TOWARDS</h1>
            <p className="admin-brand-slogan">Digital Innovation</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminLogin;
