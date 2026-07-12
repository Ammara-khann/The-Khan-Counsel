import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // ============================================================
  // 🔑 YOUR EMAILJS CREDENTIALS (ONLY ONCE!)
  // ============================================================
  const SERVICE_ID = 'service_qxl93c9';              // From Email Services
  const ADMIN_TEMPLATE_ID = 'template_tcnyx7f';      // Admin template (goes to you)
  const AUTO_REPLY_TEMPLATE_ID = 'template_s66kwph'; // Auto-reply template (goes to user)
  const PUBLIC_KEY = 'yGgC4_8Cvy6sZGsNX';            // From Account → API Keys

  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    // Data for Admin (goes to YOU)
    const adminData = {
      from_name: form.name,
      from_email: form.email,
      service: form.service,
      message: form.message,
       to_email: 'thekhancounsel@gmail.com', 
    };

    // Data for Auto-Reply (goes to USER)
    const autoReplyData = {
      from_name: form.name,
      to_email: form.email,   // User's email address
      service: form.service,
    };

    console.log('📧 Sending Admin Email:', adminData);
    console.log('📧 Sending Auto-Reply:', autoReplyData);

    // 1. Send Admin email (to you)
    emailjs
      .send(SERVICE_ID, ADMIN_TEMPLATE_ID, adminData, PUBLIC_KEY)
      .then((response) => {
        console.log('✅ Admin email sent!', response);
        // 2. Send Auto-Reply (to user)
        return emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, autoReplyData, PUBLIC_KEY);
      })
      .then((response) => {
        console.log('✅ Auto-Reply sent!', response);
        setIsLoading(false);
        setStatus('success');
        setForm({ name: '', email: '', service: '', message: '' });
        setTimeout(() => setStatus(null), 6000);
      })
      .catch((err) => {
        console.error('❌ Error:', err);
        console.error('Status:', err.status);
        console.error('Text:', err.text);
        setIsLoading(false);
        setStatus('error');
        setTimeout(() => setStatus(null), 6000);
      });
  };

  return (
    <div className="container" style={styles.contact}>
      <h1 className="section-title" style={{ textAlign: 'center' }}>
        Book a <span className="highlight">Consultation</span>
      </h1>
      <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 30px' }}>
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

      <div style={styles.grid}>
        {/* LEFT COLUMN - CONTACT INFO */}
        <div style={styles.info}>
          <div style={styles.infoItem}>
            <strong style={{ color: '#C68A1B' }}>📍 Location</strong>
            <p>Islamabad, Pakistan (Virtual consultations worldwide)</p>
          </div>
          <div style={styles.infoItem}>
            <strong style={{ color: '#C68A1B' }}>📧 Email</strong>
            <p><a href="mailto:thekhancounsel@gmail.com">thekhancounsel@gmail.com</a></p>
          </div>
          <div style={styles.infoItem}>
            <strong style={{ color: '#C68A1B' }}>📞 Phone</strong>
            <p><a href="tel:+923337131650">+92 333 7131650</a></p>
          </div>
          <div style={styles.infoItem}>
            <strong style={{ color: '#C68A1B' }}>📸 Instagram</strong>
            <a href="https://www.instagram.com/thekhancounsel/?hl=en">@thekhancounsel</a>
          </div>
          <div style={{ ...styles.infoItem, background: '#0A1128', padding: '16px', borderRadius: '12px', color: '#F8F9FA' }}>
            <strong style={{ color: '#C68A1B' }}>⚖️ The Khan Counsel</strong>
            <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>"Think clearly, act decisively."</p>
          </div>
        </div>

        {/* RIGHT COLUMN - FORM */}
        <form style={styles.form} onSubmit={handleSubmit}>
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
            <option value="Corporate Law">Corporate Law</option>
            <option value="Immigration Law">Immigration & Global Mobility</option>
            <option value="Employment Law">Employment Law</option>
          </select>
          <textarea
            name="message"
            placeholder="Briefly describe your legal matter..."
            rows="5"
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
    </div>
  );
};

const styles = {
  contact: {
    padding: '40px 0 60px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
    gap: '40px',
    marginTop: '20px',
  },
  info: {
    background: '#FFFFFF',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 8px 30px rgba(10, 17, 40, 0.06)',
    border: '1px solid rgba(198, 138, 27, 0.1)',
  },
  infoItem: {
    marginBottom: '24px',
  },
  insta: {
    color: '#C68A1B',
    fontWeight: '600',
    textDecoration: 'none',
  },
  form: {
    background: '#FFFFFF',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 8px 30px rgba(10, 17, 40, 0.06)',
    border: '1px solid rgba(198, 138, 27, 0.1)',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    marginBottom: '16px',
    border: '1px solid #E8E0CC',
    borderRadius: '10px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    background: '#FDFCF8',
    transition: 'border-color 0.2s ease',
  },
  successBanner: {
    background: '#E8F5E9',
    color: '#1B5E20',
    padding: '16px 20px',
    borderRadius: '12px',
    marginBottom: '20px',
    borderLeft: '4px solid #4CAF50',
    fontWeight: '500',
  },
  errorBanner: {
    background: '#FFEBEE',
    color: '#B71C1C',
    padding: '16px 20px',
    borderRadius: '12px',
    marginBottom: '20px',
    borderLeft: '4px solid #F44336',
    fontWeight: '500',
  },
};

export default Contact;