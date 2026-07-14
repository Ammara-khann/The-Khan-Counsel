import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Practice Areas' },
    { path: '/about', label: 'About' },
    { path: '/founder', label: 'Founder' },
    { path: '/blogs', label: 'Insights' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo */}
        <Link to="/" style={styles.logoLink}>
          <img src="/logo.png" alt="The Khan Counsel" style={styles.logo} />
        </Link>

        {/* Desktop Nav */}
        <nav style={styles.nav}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                ...styles.navLink,
                ...(location.pathname === link.path ? styles.active : {}),
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <Link to="/contact" style={styles.ctaBtn}>
          Book Consultation
        </Link>

        {/* Mobile Hamburger */}
        <button style={styles.mobileBtn} onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Side Menu */}
      {isOpen && (
        <div style={styles.mobileMenu}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" style={styles.mobileCta} onClick={() => setIsOpen(false)}>
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    background: '#0A1128',
    padding: '12px 0',
    borderBottom: '2px solid #C68A1B',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logo: {
    height: '45px',
    width: 'auto',
    objectFit: 'contain',
  },
  nav: {
    display: 'flex',
    gap: '28px',
    alignItems: 'center',
  },
  navLink: {
    color: '#F5F0E1',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '500',
    padding: '4px 0',
    borderBottom: '2px solid transparent',
    transition: 'all 0.2s',
  },
  active: {
    borderBottomColor: '#C68A1B',
    color: '#C68A1B',
  },
  ctaBtn: {
    background: '#C68A1B',
    color: '#FFFFFF',
    padding: '10px 24px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: '600',
    transition: 'all 0.2s',
  },
  mobileBtn: {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#F5F0E1',
  },
  mobileMenu: {
    display: 'none',
    flexDirection: 'column',
    padding: '20px 24px 30px',
    background: '#0A1128',
    borderTop: '1px solid rgba(198, 138, 27, 0.2)',
  },
  mobileLink: {
    color: '#F5F0E1',
    textDecoration: 'none',
    padding: '12px 0',
    fontSize: '1.1rem',
    fontWeight: '500',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  mobileCta: {
    background: '#C68A1B',
    color: '#FFFFFF',
    padding: '12px 24px',
    borderRadius: '30px',
    textDecoration: 'none',
    textAlign: 'center',
    fontWeight: '600',
    marginTop: '16px',
  },
};

// ===== RESPONSIVE =====
const responsiveStyles = `
@media (max-width: 992px) {
  .desktop-nav { display: none !important; }
  .cta-btn { display: none !important; }
  .mobile-btn { display: block !important; }
  .mobile-menu { display: flex !important; }
}
@media (max-width: 480px) {
  .logo { height: 35px !important; }
  .container { padding: 0 12px !important; }
  .mobile-menu { padding: 16px 16px 24px !important; }
  .mobile-link { font-size: 1rem !important; padding: 10px 0 !important; }
}
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = responsiveStyles;
document.head.appendChild(styleSheet);

export default Header;