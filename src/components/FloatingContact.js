import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';  // ← Fixed import

const FloatingContact = () => {
  return (
    <div style={styles.floating}>
      <a href="tel:+923337131650" style={styles.callBtn} title="Call Now">
        <FontAwesomeIcon icon={faPhone} size="lg" />
      </a>
      <a href="https://wa.me/923337131650" target="_blank" rel="noopener noreferrer" style={styles.whatsappBtn} title="WhatsApp">
        <FontAwesomeIcon icon={faWhatsapp} size="lg" />  
      </a>
    </div>
  );
};

const styles = {
  floating: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    zIndex: 999,
  },
  callBtn: {
    background: 'linear-gradient(135deg, #C68A1B, #F5B342)',
    color: '#fff',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 25px rgba(198, 138, 27, 0.4)',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  },
  whatsappBtn: {
    background: '#25D366',
    color: '#fff',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  },
};

export default FloatingContact;