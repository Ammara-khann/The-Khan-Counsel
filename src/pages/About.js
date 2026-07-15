import React from 'react';

const About = () => {
  return (
    <div className="container" style={styles.about}>
      <h1 className="section-title" style={{ textAlign: 'center' }}>
        About <span className="highlight">The Khan Counsel</span>
      </h1>
      <div style={styles.content}>
        <p style={styles.paragraph}>
          We're a full-service law firm based in Pakistan, built around one simple belief: <strong>"Think clearly, act decisively."</strong> No jargon to wade through, no guessing where you stand; just honest advice and a clear path forward, from lawyers who treat your case like it matters, because to us, it does.
        </p>
        <p style={styles.paragraph}>
          At The Khan Counsel, you're not just a case number. You're a person with a real problem, and we're here to solve it; clearly, strategically, and on your side from start to finish.
        </p>
        <p style={styles.paragraph}>
          Our expertise spans Family Law, Civil Litigation, Corporate Law, Immigration & Global Mobility, and Employment Law, providing strategic legal guidance across Pakistan and globally.
        </p>

        <div style={styles.values}>
          <div style={styles.valueCard}>
            <h3>⚖️ Strategic</h3>
            <p>We don't just react, we anticipate and plan.</p>
          </div>
          <div style={styles.valueCard}>
            <h3>✨ Clear</h3>
            <p>We communicate complex legal concepts in plain language.</p>
          </div>
          <div style={styles.valueCard}>
            <h3>🏆 Decisive</h3>
            <p>We act with confidence and precision on your behalf.</p>
          </div>
        </div>

        <div style={styles.follow}>
          <p>Follow us for legal insights and updates:</p>
          <a 
            href="https://www.instagram.com/thekhancounsel/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.instaLink}
            className="insta-link"
          >
            📸 Instagram: @thekhancounsel
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  about: {
    padding: '40px 0 60px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  content: {
    background: '#FFFFFF',
    borderRadius: '20px',
    padding: '36px',
    boxShadow: '0 8px 40px rgba(10, 17, 40, 0.08)',
  },
  paragraph: {
    fontSize: '1.05rem',
    lineHeight: 1.8,
    marginBottom: '20px',
    color: '#1A1A2E',
  },
  values: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
    margin: '30px 0',
  },
  valueCard: {
    background: '#FFF8F0',
    padding: '20px',
    borderRadius: '16px',
    textAlign: 'center',
    borderBottom: '3px solid #C68A1B',
  },
  follow: {
    marginTop: '30px',
    textAlign: 'center',
  },
  instaLink: {
    display: 'inline-block',
    background: '#C68A1B',
    color: '#FFFFFF',
    padding: '12px 24px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },
};

// Hover effect for Instagram link
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  .insta-link:hover {
    background: #B07A16 !important;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(198, 138, 27, 0.3);
  }
`;
document.head.appendChild(styleSheet);

export default About;