import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const SERVICE_ID = 'service_qxl93c9';
  const ADMIN_TEMPLATE_ID = 'template_tcnyx7f';
  const AUTO_REPLY_TEMPLATE_ID = 'template_s66kwph';
  const PUBLIC_KEY = 'yGgC4_8Cvy6sZGsNX';

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    const adminData = {
      from_name: form.name,
      from_email: form.email,
      service: form.service,
      message: form.message,
      to_email: 'thekhancounsel@gmail.com',
    };

    const autoReplyData = {
      from_name: form.name,
      to_email: form.email,
      service: form.service,
    };

    try {
      // Save the enquiry to Firestore first, so it is never lost
      // even if the email step below fails for any reason.
      await addDoc(collection(db, 'contactSubmissions'), {
        name: form.name,
        email: form.email,
        service: form.service,
        message: form.message,
        createdAt: serverTimestamp(),
      });

      await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, adminData, PUBLIC_KEY);
      await emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, autoReplyData, PUBLIC_KEY);

      setIsLoading(false);
      setStatus('success');
      setForm({ name: '', email: '', service: '', message: '' });
      setTimeout(() => setStatus(null), 6000);
    } catch (err) {
      console.error('Submission Error:', err);
      setIsLoading(false);
      setStatus('error');
      setTimeout(() => setStatus(null), 6000);
    }
  };

  return (
    <div className="container" style={styles.contact}>
      <h1 className="section-title" style={{ textAlign: 'center' }}>
        Book a <span className="highlight">Consultation</span>
      </h1>
      <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 20px' }}>
        Get expert legal advice. We respond within 24 hours.
      </p>

      {status === 'success' && (
        <div style={styles.successBanner}>
          ✅ Thank you! Your message has been sent. We'll get back to you within 24 hours.
        </div>
      )}
      {status === 'error' && (
        <div style={styles.errorBanner}>
          ❌ Something went wrong. Please try again or call us directly.
        </div>
      )}

      <div style={styles.grid} className="contact-grid">
        {/* ===== LEFT SIDE ===== */}
        <div style={styles.info} className="contact-info">
          <div style={styles.infoItem}>
            <strong style={{ color: '#C68A1B' }}>📍 Location</strong>
            <p>Islamabad, Pakistan</p>
          </div>
          <div style={styles.infoItem}>
            <strong style={{ color: '#C68A1B' }}>📧 Email</strong>
            <p><a href="mailto:thekhancounsel@gmail.com">thekhancounsel@gmail.com</a></p>
          </div>
          <div style={styles.infoItem}>
            <strong style={{ color: '#C68A1B' }}>📞 Phone</strong>
            <p><a href="tel:+923001234567">+92 300 1234567</a></p>
          </div>
          <div style={styles.infoItem}>
            <strong style={{ color: '#C68A1B' }}>📸 Instagram</strong>
            <a href="https://www.instagram.com/thisiskhantalks/">@thekhancounsel</a>
          </div>
          <div style={styles.quoteBox}>
            <strong style={{ color: '#C68A1B' }}>⚖️ The Khan Counsel</strong>
            <p>"Think clearly, act decisively."</p>
          </div>
        </div>

        {/* ===== RIGHT SIDE — FORM ===== */}
        <form style={styles.form} className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={form.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            style={styles.input}
          >
            <option value="">Select a Practice Area</option>
            <option value="Family Law">Family Law (Pakistan)</option>
            <option value="Civil Law">Civil Litigation</option>
            <option value="Corporate Law">Corporate & Commercial Law</option>
            <option value="Immigration Law">Immigration & Global Mobility</option>
            <option value="Employment Law">Employment Law</option>
            <option value="Property Law">Property & Real Estate</option>
            <option value="Regulatory Law">Regulatory & Compliance</option>
          </select>
          <textarea
            name="message"
            placeholder="Briefly describe your legal matter..."
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            style={{ ...styles.input, resize: 'vertical' }}
          />
          <button
            type="submit"
            className="btn-primary"
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #C68A1B, #F5B342)',
              color: '#FFFFFF',
            }}
            disabled={isLoading}
          >
            {isLoading ? '⏳ Sending...' : '📨 Send Message'}
          </button>
        </form>
      </div>

      {/* ===== EMERGENCY BANNER ===== */}
      <div style={styles.emergencyBanner}>
        <p>
          ⚡ <strong>Urgent?</strong> Call us directly at{' '}
          <a href="tel:+923001234567" style={{ color: '#C68A1B', fontWeight: '700' }}>
            +92 333 7131650
          </a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  contact: {
    padding: '20px 0 40px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
    gap: '24px',
    marginTop: '16px',
  },
  info: {
    background: '#FFFFFF',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
  },
  infoItem: {
    marginBottom: '16px',
  },
  quoteBox: {
    background: '#0A1128',
    padding: '14px',
    borderRadius: '10px',
    color: '#F5F0E1',
    marginTop: '8px',
  },
  form: {
    background: '#FFFFFF',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
  },
  input: {
    width: '100%',
    padding: '10px 14px',
    marginBottom: '12px',
    border: '1px solid #E8E0CC',
    borderRadius: '10px',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    background: '#FDFCF8',
  },
  successBanner: {
    background: '#E8F5E9',
    color: '#1B5E20',
    padding: '12px 16px',
    borderRadius: '10px',
    marginBottom: '16px',
    borderLeft: '4px solid #4CAF50',
    fontSize: '0.9rem',
  },
  errorBanner: {
    background: '#FFEBEE',
    color: '#B71C1C',
    padding: '12px 16px',
    borderRadius: '10px',
    marginBottom: '16px',
    borderLeft: '4px solid #F44336',
    fontSize: '0.9rem',
  },
  emergencyBanner: {
    background: '#FFF8F0',
    padding: '12px 16px',
    borderRadius: '10px',
    marginTop: '16px',
    textAlign: 'center',
    border: '1px solid #C68A1B',
    fontSize: '0.9rem',
  },
};

// ===== RESPONSIVE =====
const responsiveStyles = `
@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr !important; }
  .contact-info { padding: 16px !important; }
  .contact-form { padding: 16px !important; }
}
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = responsiveStyles;
document.head.appendChild(styleSheet);

export default Contact;