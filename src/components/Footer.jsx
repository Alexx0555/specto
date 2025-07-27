import React from 'react';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Spectov</h3>
            <p className="footer-tagline">
              Reimagining reality through advanced AR technology. 
              Experience the future of augmented reality with Spectov Air.
            </p>
          </div>
          <div className="footer-links-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#specs">Specifications</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>📧 contact@spectov.com</p>
            <p>📞 +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Spectov Inc. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
