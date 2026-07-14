import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link to="/" style={styles.logoLink}>
              <img src="/logo.png" alt="The Khan Counsel" style={styles.logoImage} />
            </Link>
            <p style={styles.tagline}>Think clearly, act decisively.</p>
            <p style={styles.text}>📍 Islamabad, Pakistan</p>
            <p style={styles.text}>📧 thekhancounsel@gmail.com</p>
            <p style={styles.text}>📞 +92 300 1234567</p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 style={styles.heading}>Practice Areas</h4>
            <Link to="/services/family-law" style={styles.link}>Family Law</Link><br />
            <Link to="/services/civil-law" style={styles.link}>Civil Litigation</Link><br />
            <Link to="/services/corporate-law" style={styles.link}>Corporate Law</Link><br />
            <Link to="/services/immigration-law" style={styles.link}>Immigration</Link><br />
            <Link to="/services/employment-law" style={styles.link}>Employment Law</Link><br />
            <Link to="/services/property-law" style={styles.link}>Property & Real Estate</Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={styles.heading}>Quick Links</h4>
            <Link to="/" style={styles.link}>Home</Link><br />
            <Link to="/services" style={styles.link}>Practice Areas</Link><br />
            <Link to="/about" style={styles.link}>About</Link><br />
            <Link to="/founder" style={styles.link}>Founder</Link><br />
            <Link to="/blogs" style={styles.link}>Insights</Link><br />
            <Link to="/contact" style={styles.link}>Contact</Link>
          </div>

          {/* Social */}
          <div>
            <h4 style={styles.heading}>Connect With Us</h4>
            <div style={styles.social}>
              <a href="https://www.instagram.com/thisiskhantalks/" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" style={styles.socialIcon}><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
              <a href="#" style={styles.socialIcon}><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
              <a href="#" style={styles.socialIcon}><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
            </div>
            <p style={{ ...styles.text, marginTop: '16px', fontSize: '0.8rem' }}>
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
    background: '#0A1128',
    color: '#B8C5C0',
    padding: '48px 0 24px',
    marginTop: '40px',
    borderTop: '3px solid #C68A1B',
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
  logoLink: {
    display: 'inline-block',
    textDecoration: 'none',
  },
  logoImage: {
    height: '45px',
    width: 'auto',
    objectFit: 'contain',
    marginBottom: '8px',
  },
  tagline: {
    fontSize: '0.7rem',
    letterSpacing: '1.5px',
    color: '#C68A1B',
    textTransform: 'uppercase',
    marginBottom: '16px',
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