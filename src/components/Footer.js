import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link to="/">
              <img src="/logo.png" alt="The Khan Counsel" className="footer-logo" />
            </Link>
            <p className="footer-tagline">Think clearly, act decisively.</p>
            <p className="footer-text">📍 Islamabad, Pakistan</p>
            <p className="footer-text">📧 thekhancounsel@gmail.com</p>
            <p className="footer-text">📞 +92 300 1234567</p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="footer-heading">Practice Areas</h4>
            <Link to="/services/family-law" className="footer-link">Family Law</Link><br />
            <Link to="/services/civil-law" className="footer-link">Civil Litigation</Link><br />
            <Link to="/services/corporate-law" className="footer-link">Corporate Law</Link><br />
            <Link to="/services/immigration-law" className="footer-link">Immigration</Link><br />
            <Link to="/services/employment-law" className="footer-link">Employment Law</Link><br />
            <Link to="/services/property-law" className="footer-link">Property & Real Estate</Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <Link to="/" className="footer-link">Home</Link><br />
            <Link to="/services" className="footer-link">Practice Areas</Link><br />
            <Link to="/about" className="footer-link">About</Link><br />
            <Link to="/founder" className="footer-link">Founder</Link><br />
            <Link to="/blogs" className="footer-link">Insights</Link><br />
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>

          {/* Social */}
          <div>
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="footer-social">
              <a href="https://www.instagram.com/thisiskhantalks/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
            <p className="footer-copyright" style={{ marginTop: '16px' }}>
              © 2026 The Khan Counsel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;