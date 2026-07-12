import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { servicesData } from '../data/servicesData';

const Services = () => {
  return (
    <div className="container" style={styles.services}>
      <h1 className="section-title" style={{ textAlign: 'center' }}>
        Our <span className="highlight">Practice Areas</span>
      </h1>
      <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
        We provide comprehensive legal services across multiple disciplines.
      </p>
      <div style={styles.grid}>
        {servicesData.map(service => (
          <div key={service.id} className="card" style={styles.card}>
            <div style={{
              ...styles.icon,
              backgroundColor: service.color + '20',
              color: service.color
            }}>
              <FontAwesomeIcon icon={['fas', service.icon]} size="2x" />
            </div>
            <h3 style={styles.title}>{service.title}</h3>
            <p style={styles.desc}>{service.shortDesc}</p>
            <div style={styles.subList}>
              {service.subServices.slice(0, 4).map((sub, idx) => (
                <span key={idx} style={styles.subTag}>{sub}</span>
              ))}
              {service.subServices.length > 4 && (
                <span style={{ ...styles.subTag, background: '#D4AF37', color: '#0B2B26' }}>
                  +{service.subServices.length - 4} more
                </span>
              )}
            </div>
            <Link to={`/services/${service.id}`} style={styles.link}>
              View Full Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  services: {
    padding: '40px 0 60px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '28px',
  },
  card: {
    padding: '28px',
    borderTop: '4px solid #D4AF37',
  },
  icon: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  title: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#14213b',
    marginBottom: '8px',
    fontFamily: "'Playfair Display', serif",
  },
  desc: {
    color: '#4A5A55',
    marginBottom: '16px',
    fontSize: '0.95rem',
  },
  subList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginBottom: '16px',
  },
  subTag: {
    background: '#F5F0E1',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.7rem',
    fontWeight: '500',
    color: '#14213b',
  },
  link: {
    color: '#D4AF37',
    fontWeight: '700',
    textDecoration: 'none',
  },
};

export default Services;