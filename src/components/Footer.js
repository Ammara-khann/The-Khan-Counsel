import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer style={styles.footer} className="footer-root">
      <div style={styles.container} className="footer-container">
        <div style={styles.grid} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={styles.logoContainer}>
              <span style={styles.logoText}>THE</span>
              <span style={styles.logoTextLarge}>KHAN</span>
              <span style={styles.logoText}>COUNSEL</span>
            </div>
            <p style={styles.tagline}>Think clearly, act decisively.</p>
            <p style={styles.text}>📍 Islamabad, Pakistan</p>
            <p style={styles.text}>📧 thekhancounsel@gmail.com</p>
            <p style={styles.text}>📞 +92 333 7131650</p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 style={styles.heading}>Practice Areas</h4>
            <ul style={styles.list}>
              <li><Link to="/services/family-law" style={styles.link}>Family Law</Link></li>
              <li><Link to="/services/civil-law" style={styles.link}>Civil Litigation</Link></li>
              <li><Link to="/services/corporate-law" style={styles.link}>Corporate Law</Link></li>
              <li><Link to="/services/immigration-law" style={styles.link}>Immigration and Global Mobility</Link></li>
              <li><Link to="/services/employment-law" style={styles.link}>Employment Law</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={styles.heading}>Quick Links</h4>
            <ul style={styles.list}>
              <li><Link to="/" style={styles.link}>Home</Link></li>
              <li><Link to="/services" style={styles.link}>Practice Areas</Link></li>
              <li><Link to="/about" style={styles.link}>About</Link></li>
              <li><Link to="/contact" style={styles.link}>Contact</Link></li>
              <li><Link to="/blogs" style={styles.link}>Insights</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 style={styles.heading}>Connect With Us</h4>
            <div style={styles.social}>
              <a href="https://www.instagram.com/thekhancounsel/" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61592130022555" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
              <a href="#" style={styles.socialIcon}><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
              <a href="https://www.linkedin.com/in/the-khan-counsel-a65327422/" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
            </div>
            <p style={{ ...styles.text, marginTop: '16px', fontSize: '0.85rem' }}>
              © 2026 The Khan Counsel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#14213b',
    color: '#B8C5C0',
    padding: '48px 0 24px',
    marginTop: '60px',
    borderTop: '2px solid #C68A1B',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
    marginBottom: '24px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '4px',
    marginBottom: '4px',
  },
  logoText: {
    fontSize: '0.7rem',
    fontWeight: '400',
    letterSpacing: '3px',
    color: '#B8C5C0',
    fontFamily: 'Inter, sans-serif',
  },
  logoTextLarge: {
    fontSize: '1.4rem',
    fontWeight: '700',
    letterSpacing: '4px',
    color: '#C68A1B',
    fontFamily: 'Cormorant Garamond, serif',
  },
  tagline: {
    fontSize: '0.75rem',
    letterSpacing: '1.5px',
    color: '#C68A1B',
    textTransform: 'uppercase',
    marginBottom: '16px',
    fontFamily: 'Inter, sans-serif',
  },
  text: {
    marginBottom: '4px',
    fontSize: '0.9rem',
    color: '#B8C5C0',
  },
  heading: {
    color: '#F5F0E1',
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '12px',
    fontFamily: "'Inter', sans-serif",
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    color: '#B8C5C0',
    textDecoration: 'none',
    display: 'inline-block',
    marginBottom: '6px',
    fontSize: '0.9rem',
    transition: 'color 0.2s ease',
  },
  social: {
    display: 'flex',
    gap: '16px',
  },
  socialIcon: {
    color: '#F5F0E1',
    transition: 'color 0.2s ease',
  },
};

export default Footer;