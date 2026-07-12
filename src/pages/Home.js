import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { servicesData } from '../data/servicesData';

const Home = () => {
  const featured = servicesData.slice(0, 6);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section style={styles.hero}>
        <div className="container" style={styles.heroInner}>
          <div style={styles.heroLeft}>
            <h1 style={styles.heroTitle}>
              Think Clearly.<br />
              <span style={{ color: '#C68A1B' }}>Act Decisively.</span>
            </h1>
            <p style={styles.heroSub}>
              Strategic legal guidance across immigration, family, civil, corporate, and commercial matters.
            </p>
            <div style={styles.heroBtns}>
              <Link to="/services" className="btn-primary">Explore Practice Areas</Link>
              <Link to="/contact" className="btn-outline">Book Consultation</Link>
            </div>
          </div>
          <div style={styles.heroRight}>
            <span style={styles.heroEmoji}>⚖️</span>
          </div>
        </div>
      </section>

      {/* ===== PRACTICE AREAS ===== */}
      <section className="container" style={styles.section}>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Our <span className="highlight">Practice Areas</span>
        </h2>
        <p className="section-subtitle" style={{ textAlign: 'center' }}>
          Comprehensive legal services tailored to your needs.
        </p>
        <div style={styles.grid}>
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
          <div style={styles.whyGrid}>
            <div style={styles.whyItem}>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#C68A1B' }} /> 
              Strategic & Proactive
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
              Transparent & Honest
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="container" style={styles.cta}>
        <div style={styles.ctaInner}>
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
  hero: {
    background: '#FFFFFF',
    padding: '60px 0',
    borderBottom: '1px solid #E8E8E8',
  },
  heroInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  heroLeft: {
    flex: 1,
    minWidth: '280px',
  },
  heroTitle: {
    fontSize: '3.2rem',
    fontWeight: '700',
    color: '#1A1A2E',
    fontFamily: 'Georgia, serif',
    lineHeight: 1.1,
    marginBottom: '16px',
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
  heroRight: {
    flex: 1,
    minWidth: '200px',
    textAlign: 'center',
  },
  heroEmoji: {
    fontSize: '8rem',
    opacity: 1.05,
  },
  section: {
    backgroundColor: '#FFF8F0',
    padding: '60px 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '30px',
  },
  cardLink: {
    textDecoration: 'none',
  },
  card: {
    borderTop: '3px solid #C68A1B',
    textAlign: 'left',
    height: '100%',
    padding: '28px',
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
  why: {
    background: '#F5F5F5',
    padding: '60px 0',
  },
  whyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    maxWidth: '900px',
    margin: '0 auto',
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
  cta: {
    padding: '60px 0',
  },
  ctaInner: {
    background: '#1A1A2E',
    padding: '50px',
    borderRadius: '16px',
    textAlign: 'center',
    color: '#FFFFFF',
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

// ===== RESPONSIVE =====
const responsiveStyles = `
@media (max-width: 992px) {
  .hero-title { font-size: 2.8rem !important; }
  .hero-emoji { font-size: 5rem !important; }
  .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.2rem !important; }
  .hero-sub { font-size: 1rem !important; }
  .hero-right { display: none !important; }
  .hero-left { min-width: 100% !important; text-align: center !important; }
  .hero-btns { flex-direction: column !important; align-items: center !important; }
  .hero-btns .btn-primary, .hero-btns .btn-outline { width: 100% !important; text-align: center !important; }
  .why-grid { grid-template-columns: 1fr !important; max-width: 100% !important; }
  .grid { grid-template-columns: 1fr !important; gap: 20px !important; }
  .card { padding: 20px !important; }
  .cta-inner { padding: 30px 20px !important; }
  .cta-title { font-size: 1.5rem !important; }
}

@media (max-width: 480px) {
  .hero-title { font-size: 1.8rem !important; }
  .section { padding: 40px 0 !important; }
  .why { padding: 40px 0 !important; }
  .cta { padding: 40px 0 !important; }
}
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = responsiveStyles;
document.head.appendChild(styleSheet);

export default Home;