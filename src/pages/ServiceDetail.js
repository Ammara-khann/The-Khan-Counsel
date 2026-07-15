import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h2>Practice area not found</h2>
        <Link to="/services" className="btn-primary">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="container" style={styles.detail}>
      <Link to="/services" style={styles.backLink}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '8px' }} /> Back to all Practice Areas
      </Link>

      <div style={styles.header} className="service-header">
        <div style={{
          ...styles.iconBig,
          backgroundColor: service.color + '20',
          color: service.color
        }}>
          <FontAwesomeIcon icon={['fas', service.icon]} size="3x" />
        </div>
        <div>
          <h1 style={styles.title} className="service-title">{service.title}</h1>
          <p style={styles.category}>The Khan Counsel</p>
        </div>
      </div>

      <div style={styles.content}>
        <p style={styles.longDesc}>{service.longDesc}</p>

        <h3 style={styles.subHeading}>Our Services Under This Practice Area</h3>
        <div style={styles.subGrid}>
          {service.subServices.map((item, idx) => (
            <div key={idx} style={styles.subItem}>
              <FontAwesomeIcon icon={faCheck} style={{ color: '#D4AF37', marginRight: '12px', flexShrink: 0 }} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div style={styles.ctaBox}>
          <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>
            Need assistance with <strong style={{ color: '#D4AF37' }}>{service.title}</strong>?
          </p>
          <p style={{ marginBottom: '16px', color: '#B8C5C0' }}>Book a consultation with our expert team.</p>
          <Link to="/contact" className="btn-primary" style={{ background: '#D4AF37', color: '#0B2B26' }}>
            Contact Us Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  detail: {
    padding: '40px 0 60px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  backLink: {
    color: '#14213b',
    fontWeight: '500',
    textDecoration: 'none',
    display: 'inline-block',
    marginBottom: '24px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    marginBottom: '30px',
  },
  iconBig: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  title: {
    fontSize: '2.4rem',
    fontWeight: '700',
    color: '#14213b',
    fontFamily: "'Playfair Display', serif",
  },
  category: {
    fontSize: '1rem',
    color: '#D4AF37',
    fontWeight: '600',
  },
  content: {
    background: '#FFFFFF',
    borderRadius: '20px',
    padding: '36px',
    boxShadow: '0 8px 40px rgba(11, 43, 38, 0.08)',
  },
  longDesc: {
    fontSize: '1.05rem',
    lineHeight: 1.8,
    marginBottom: '30px',
    color: '#14213b',
  },
  subHeading: {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#14213b',
    marginBottom: '16px',
    borderBottom: '2px solid #D4AF37',
    paddingBottom: '8px',
    display: 'inline-block',
    fontFamily: "'Playfair Display', serif",
  },
  subGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '10px',
    marginBottom: '30px',
  },
  subItem: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '10px 14px',
    background: '#F5F0E1',
    borderRadius: '10px',
    fontSize: '0.9rem',
  },
  ctaBox: {
    background: '#14213b',
    padding: '30px',
    borderRadius: '16px',
    textAlign: 'center',
    color: '#F5F0E1',
    marginTop: '20px',
  },
};

export default ServiceDetail;