import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Blogs = () => {
  return (
    <div className="container" style={styles.blogs}>
      <div style={styles.header}>
        <div>
          <h1 className="section-title" style={{ marginBottom: '4px' }}>
            Legal <span className="highlight">Insights</span>
          </h1>
          <p style={{ color: '#6B7A8E', fontSize: '1.1rem' }}>
            Expert commentary, legal updates, and practical advice from The Khan Counsel.
          </p>
        </div>
      </div>

      <div style={styles.grid}>
        {blogs.map((blog, index) => (
          <div key={index} className="card" style={styles.blogCard}>
            <span style={styles.category}>{blog.category}</span>
            <h2 style={styles.title}>{blog.title}</h2>
            <p style={styles.excerpt}>{blog.excerpt}</p>
            <div style={styles.meta}>
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>
            <Link to={`/blogs/${blog.id}`} style={styles.readMore}>
              Read Full Article <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// ===== BLOG DATA =====
const blogs = [
  {
    id: 'women-in-pakistan-legal-profession',
    title: "Pakistan's Legal Profession Has Opened Its Doors to Women. Why Are So Few Leading It?",
    category: 'Legal Commentary',
    date: 'July 2026',
    readTime: '4 min read',
    excerpt: 'Every year, more women graduate from Pakistan\'s law schools and step into courtrooms, corporate legal departments, and public service. Their presence is no longer an exception; it is an expectation. Yet when we look at who leads our profession, a different picture emerges.',
  },
  {
    id: 'uae-data-protection-pdpl',
    title: 'Why UAE Business Visa Advisors Should Be Talking About Data Protection Too',
    category: 'Corporate & Compliance',
    date: 'July 2026',
    readTime: '5 min read',
    excerpt: 'When someone approaches for a UAE business visa, investor visa, or mainland company setup, they\'re usually focused on getting their business established. But setting up a company is about much more than visas and paperwork.',
  },
];

// ===== STYLES =====
const styles = {
  blogs: {
    padding: '40px 0 60px',
  },
  header: {
    marginBottom: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
    gap: '30px',
    justifyContent: 'center',      // ← ADDED (grid ko center karega)
    alignItems: 'stretch',         // ← ADDED (cards ko stretch karega)
  },
  blogCard: {
    width: '100%',        // ← Full width
    height: '420px', 
    padding: '32px 28px',
    borderTop: '4px solid #C68A1B',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // ← ADDED (content ko spread karega)                // ← FIXED HEIGHT
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    transition: 'all 0.3s ease',
    textAlign: 'left',             // ← ADDED (text left aligned)
  },
  category: {
    display: 'inline-block',
    background: '#F5F0E1',
    color: '#0A1128',
    padding: '2px 14px',
    borderRadius: '20px',
    fontSize: '0.7rem',
    fontWeight: '600',
    letterSpacing: '0.5px',
    marginBottom: '12px',
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#0A1128',
    marginBottom: '12px',
    fontFamily: 'Georgia, serif',
    lineHeight: 1.3,
    flexShrink: 0,
  },
  excerpt: {
    fontSize: '0.95rem',
    color: '#3D4A5C',
    lineHeight: 1.7,
    marginBottom: '16px',
    flex: 1,
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 6,
    WebkitBoxOrient: 'vertical',
  },
  meta: {
    display: 'flex',
    gap: '10px',
    fontSize: '0.8rem',
    color: '#6B7A8E',
    marginBottom: '16px',
    flexShrink: 0,
  },
  readMore: {
    color: '#C68A1B',
    fontWeight: '600',
    textDecoration: 'none',
    fontSize: '0.95rem',
    flexShrink: 0,
    transition: 'color 0.3s ease',
  },
};

export default Blogs;