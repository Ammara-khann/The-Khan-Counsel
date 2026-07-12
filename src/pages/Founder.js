import React from 'react';
import { Link } from 'react-router-dom';

const Founder = () => {
  return (
    <div className="container" style={styles.founder}>
      <h1 className="section-title" style={{ textAlign: 'center' }}>
        Founder's <span className="highlight">Dossier</span>
      </h1>

      <div style={styles.card}>
        {/* ===== HEADER WITH IMAGE ===== */}
        <div style={styles.header}>
          <div style={styles.avatar}>
            <img 
              src="/Aisha tkc.jpg" 
              alt="Aisha Khan - Founder" 
              style={styles.avatarImage}
            />
          </div>
          <div style={styles.info}>
            <h2 style={styles.name}>Aisha Khan</h2>
            <p style={styles.designation}>
              FOUNDER — ADVOCATE | Immigration Lawyer
            </p>
          </div>
        </div>

        {/* ===== CONTENT ===== */}
        <div style={styles.content}>
          <p style={styles.bio}>
            Aisha Khan founded The Khan Counsel on a simple conviction: that good legal advice should be clear, current, and genuinely useful; not buried in jargon or delayed by guesswork.
          </p>
          <p style={styles.bio}>
            A law graduate of <strong>Quaid-e-Azam University, Islamabad (LL.B, 2022)</strong>. Her career has taken her across immigration law, civil litigation, corporate matters, and family law, giving her a practitioner's grasp of how the law actually works in practice, not just on paper.
          </p>
          <p style={styles.bio}>
            Before founding the firm, Aisha built her expertise handling business immigration cases, including UAE expansion routes, Innovator Founder Visas, and UK Expansion Worker applications and supported sensitive, high-stakes cases for the Domestic Abuse Alliance UK, where strict procedural precision and genuine care for the client went hand in hand. She has since drafted and overseen more than 500 court bundles, always with the same attention to both the legal detail and the human being on the other side of it.
          </p>
          <p style={styles.bio} className="closing">
            <strong>That dual grounding rigorous legal research paired with clear, client-focused communication is the foundation The Khan Counsel is built on.</strong>
          </p>
        </div>

        {/* ===== STATS ===== */}
        <div style={styles.stats}>
          <div style={styles.stat}>
            <span style={styles.statNumber}>500+</span>
            <span style={styles.statLabel}>Court Bundles</span>
          </div>
          <div style={styles.stat}>
            <span style={styles.statNumber}>2022</span>
            <span style={styles.statLabel}>LL.B Graduate</span>
          </div>
          <div style={styles.stat}>
            <span style={styles.statNumber}>5+</span>
            <span style={styles.statLabel}>Practice Areas</span>
          </div>
        </div>
      </div>

      {/* ===== BACK LINK ===== */}
      <div style={styles.backLink}>
        <Link to="/about" style={styles.backBtn}>← Back to About</Link>
      </div>
    </div>
  );
};

// ===== STYLES =====
const styles = {
  founder: {
    padding: '40px 0 60px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  card: {
    background: '#FFFFFF',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 8px 40px rgba(10, 17, 40, 0.08)',
    borderTop: '4px solid #C68A1B',
  },
  // ===== HEADER =====
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    marginBottom: '28px',
    paddingBottom: '24px',
    borderBottom: '1px solid #F0EDE8',
  },
  avatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
    border: '4px solid #C68A1B',
    boxShadow: '0 4px 20px rgba(198, 138, 27, 0.2)',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#0A1128',
    fontFamily: 'Georgia, serif',
    marginBottom: '4px',
  },
  designation: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#C68A1B',
    letterSpacing: '0.5px',
  },
  // ===== CONTENT =====
  content: {
    marginBottom: '28px',
  },
  bio: {
    fontSize: '1.05rem',
    lineHeight: 1.8,
    color: '#1A1A2E',
    marginBottom: '16px',
    textAlign: 'justify',
  },
  // ===== STATS =====
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '16px',
    paddingTop: '24px',
    borderTop: '1px solid #F0EDE8',
  },
  stat: {
    textAlign: 'center',
    background: '#FFF8F0',
    padding: '16px',
    borderRadius: '12px',
  },
  statNumber: {
    display: 'block',
    fontSize: '2rem',
    fontWeight: '700',
    color: '#C68A1B',
    fontFamily: 'Georgia, serif',
  },
  statLabel: {
    fontSize: '0.8rem',
    color: '#6B7A8E',
    fontWeight: '500',
  },
  // ===== BACK LINK =====
  backLink: {
    marginTop: '24px',
    textAlign: 'center',
  },
  backBtn: {
    color: '#C68A1B',
    fontWeight: '600',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease',
  },
};

// ===== RESPONSIVE =====
const responsiveStyles = `
@media (max-width: 768px) {
  .founder-header { flex-direction: column; text-align: center; }
  .founder-avatar { width: 100px; height: 100px; }
  .founder-name { font-size: 1.6rem; }
  .founder-stats { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 480px) {
  .founder-card { padding: 20px; }
  .founder-stats { grid-template-columns: 1fr; }
  .founder-avatar { width: 80px; height: 80px; }
}
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = responsiveStyles;
document.head.appendChild(styleSheet);

export default Founder;