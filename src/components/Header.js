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
    <header className="site-header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo-link">
          <img src="/logo.png" alt="The Khan Counsel" className="logo-img" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link to="/contact" className="cta-btn">
          Book Consultation
        </Link>

        {/* Mobile Hamburger */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Side Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className="mobile-link"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/contact" className="mobile-cta" onClick={() => setIsOpen(false)}>
          Book Consultation
        </Link>
      </div>
    </header>
  );
};

export default Header;