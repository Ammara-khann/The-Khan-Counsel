import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { servicesData } from '../data/servicesData';
import './Home.css';

const Home = () => {
  const featured = servicesData.slice(0, 6);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section style={styles.hero}>
        <div className="container home-hero-inner">
          <div className="home-hero-left">
            <h1 className="home-hero-title">
              Think Clearly.<br />
              <span style={{ color: '#C68A1B' }}>Act Decisively.</span>
            </h1>
            <p style={styles.heroSub}>
              Strategic legal guidance across immigration, family, civil, corporate, and commercial matters.
            </p>
            <div style={styles.heroBtns} className="home-hero-btns">
              <Link to="/services" className="btn-primary">Explore Practice Areas</Link>
              <Link to="/contact" className="btn-outline">Book Consultation</Link>
            </div>
          </div>
          <div className="home-hero-right">
            <span style={styles.heroEmoji} className="home-hero-emoji">⚖️</span>
          </div>
        </div>
      </section>

      {/* ===== PRACTICE AREAS ===== */}
      <section className="container" style={styles.section}>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Our <span className="highlight">Practice Areas</span>
        </h2>
        <p className="section-subtitle" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          Comprehensive legal services tailored to your needs.
        </p>
        <div className="home-services-grid">
          {featured.map(service => (
            <Link to={`/services/${service.id}`} key={service.id} style={styles.cardLink}>
              <div className="card" style={styles.card}>
                <div style={{ ...styles.icon, color: service.color }}>
                  <FontAwesomeIcon icon={['fas', service.icon]} size="2x" />
                </div>
                <h3 style={styles.cardTitle}>{service.title}</h3>
                <p style={styles.cardDesc}>{service.shortDesc}</p>
                <span style={styles.cardArrow}>
                  Learn More <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section style={styles.why}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Why <span className="highlight">The Khan Counsel?</span>
          </h2>
          <div className="home-why-grid">
            <div style={styles.whyItem}>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#C68A1B' }} />
              Strategic &amp; Proactive
            </div>
            <div style={styles.whyItem}>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#C68A1B' }} />
              Practical Legal Advice
            </div>
            <div style={styles.whyItem}>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#C68A1B' }} />
              Clear Communication
            </div>
            <div style={styles.whyItem}>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#C68A1B' }} />
              Outcome-Focused
            </div>
            <div style={styles.whyItem}>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#C68A1B' }} />
              Client‑Centered Approach
            </div>
            <div style={styles.whyItem}>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#C68A1B' }} />
              Transparent &amp; Honest
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="container" style={styles.cta}>
        <div className="home-cta-inner">
          <h2 style={styles.ctaTitle}>Ready to resolve your legal matters?</h2>
          <p style={styles.ctaSub}>Book a consultation with our expert team today.</p>
          <Link to="/contact" className="btn-primary" style={{ background: '#C68A1B', color: '#FFFFFF' }}>
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

const styles = {
  // ===== HERO =====
  hero: {
    background: '#FFFFFF',
    padding: '60px 0',
    borderBottom: '1px solid #E8E8E8',
  },
  heroSub: {
    fontSize: '1.1rem',
    color: '#6B7A8E',
    maxWidth: '500px',
    marginBottom: '28px',
  },
  heroBtns: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  heroEmoji: {
    fontSize: '8rem',
    opacity: 1.05,
  },

  // ===== PRACTICE AREAS =====
  section: {
    backgroundColor: '#FFF8F0',
    padding: '60px 0',
  },
  cardLink: {
    textDecoration: 'none',
  },
  card: {
    borderTop: '3px solid #C68A1B',
    textAlign: 'left',
    height: '100%',
    padding: '34px',
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
  },
  icon: {
    fontSize: '1.8rem',
    marginBottom: '12px',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#1A1A2E',
    marginBottom: '6px',
  },
  cardDesc: {
    fontSize: '0.95rem',
    color: '#6B7A8E',
    marginBottom: '12px',
  },
  cardArrow: {
    color: '#C68A1B',
    fontWeight: '600',
    fontSize: '0.9rem',
  },

  // ===== WHY US =====
  why: {
    background: '#F5F5F5',
    padding: '60px 0',
  },
  whyItem: {
    background: '#FFFFFF',
    padding: '16px 20px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '0.95rem',
    fontWeight: '500',
    color: '#1A1A2E',
    boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
  },

  // ===== CTA =====
  cta: {
    padding: '60px 0',
  },
  ctaTitle: {
    fontSize: '2rem',
    fontFamily: 'Georgia, serif',
    marginBottom: '8px',
  },
  ctaSub: {
    fontSize: '1.05rem',
    color: '#B8C5C0',
    marginBottom: '24px',
  },
};

export default Home;
