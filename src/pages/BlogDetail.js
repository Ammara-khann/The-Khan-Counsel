import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h2>Blog post not found</h2>
        <Link to="/blogs" className="btn-primary">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="container" style={styles.detail}>
      <Link to="/blogs" style={styles.backLink}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '8px' }} /> Back to all Insights
      </Link>

      <div style={styles.header}>
        <span style={styles.category}>{blog.category}</span>
        <h1 style={styles.title}>{blog.title}</h1>
        <div style={styles.meta}>
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>
      </div>

      <div style={styles.content}>
        {blog.fullContent.map((line, index) => {
          const isBullet = line.trim().startsWith('•');
          const isEmpty = line.trim() === '';
          const hasHtml = line.includes('<strong>') || line.includes('<em>') || line.includes('<br>');
          
          // If line has HTML tags, render with dangerouslySetInnerHTML
          if (hasHtml) {
            return (
              <p 
                key={index} 
                style={{
                  ...styles.paragraph,
                  marginBottom: isEmpty ? '8px' : '4px',
                }}
                dangerouslySetInnerHTML={{ __html: line }}
              />
            );
          }
          
          // Regular text
          return (
            <p 
              key={index} 
              style={{
                ...styles.paragraph,
                ...(isBullet ? styles.bulletPoint : {}),
                marginBottom: isEmpty ? '8px' : '4px',
              }}
            >
              {line}
            </p>
          );
        })}
        
        <div style={styles.ctaBox}>
          <p style={styles.ctaText}>
            <strong>Inspired by this article?</strong> Book a consultation with our expert team.
          </p>
          <Link to="/contact" className="btn-primary">Contact Us Now</Link>
        </div>
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
    fullContent: [
      'Every year, more women graduate from Pakistan\'s law schools and step into courtrooms, corporate legal departments, and public service. Their presence is no longer an exception; it is an expectation.',
      '',
      'Yet when we look at who leads our profession, a different picture emerges.',
      '',
      'Leadership in Pakistan\'s legal system remains overwhelmingly male. According to the Law and Justice Commission of Pakistan, women make up only a small fraction of judges in the superior judiciary, despite increasing participation across the profession.',
      '',
      'This is not a reflection of merit.',
      '',
      'It is a reflection of structure.',
      '',
      'The challenge is not getting women into the profession, it is ensuring they stay, grow, and lead. Many female lawyers continue to face barriers that rarely appear in official policies:',
      '• Limited mentorship opportunities',
      '• Fewer opportunities for high-profile litigation',
      '• Safety concerns around court environments',
      '• Exclusion from influential professional networks',
      '• Constant pressure of balancing professional and family responsibilities',
      '',
      'Pakistan has witnessed remarkable milestones, including the appointment of the country\'s first woman to the Supreme Court. These achievements deserve celebration. But individual success stories should not be mistaken for systemic equality.',
      '',
      'One woman reaching the top does not mean the ladder has become accessible for everyone.',
      '',
      'The legal profession prides itself on fairness and justice. Those principles should begin within our own institutions. Law firms, bar associations, and judicial appointment processes must move beyond celebrating diversity in numbers and start creating pathways to leadership through transparent promotions, active sponsorship, and equal access to opportunities.',
      '',
      'The women who came before us did not ask for special treatment. They asked for a fair chance.',
      '',
      'The next generation should not have to spend its energy proving that women belong in positions of authority. Their energy should be spent strengthening Pakistan\'s justice system.',
      '',
      'Because the future of the legal profession will not be measured by how many women enter the courtroom.',
      '',
      'It will be measured by how many are trusted to lead it.',
    ],
  },
  {
    id: 'uae-data-protection-pdpl',
    title: 'Why UAE Business Visa Advisors Should Be Talking About Data Protection Too',
    category: 'Corporate & Compliance',
    date: 'July 2026',
    readTime: '5 min read',
    excerpt: 'When someone approaches for a UAE business visa, investor visa, or mainland company setup, they\'re usually focused on getting their business established. But setting up a company is about much more than visas and paperwork.',
    fullContent: [
      'When someone approaches for a UAE business visa, investor visa, or mainland company setup, they\'re usually focused on getting their business established. But setting up a company is about much more than visas and paperwork.',
      '',
      'From the moment a business starts operating, it begins collecting personal information. This could include employee records, customer details, HR documents linked to visa sponsorship, or even AI-powered software that processes sensitive data. In other words, every new business also becomes responsible for protecting that data.',
      '',
      'For a long time, many businesses viewed the UAE\'s Personal Data Protection Law (PDPL) as something to deal with later because there wasn\'t a dedicated authority actively overseeing it.',
      '',
      'That has now changed.',
      '',
      '<strong>A New Regulator Means PDPL Is Becoming a Real Priority</strong>',
      '',
      'The UAE has recently established a new Federal Authority for Artificial Intelligence and Data. This authority brings together AI regulation, data governance, and digital government under one organisation that reports directly to the Cabinet.',
      '',
      'More importantly for businesses, it gives the UAE Personal Data Protection Law (PDPL) a clear regulator for the first time. That means businesses setting up in the UAE should start treating data protection as part of their business setup; not something to think about years later.',
      '',
      '<strong>What Is the PDPL?</strong>',
      '',
      'The UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) is the main data protection law for businesses operating in mainland UAE.',
      '',
      'It applies to businesses that process personal data belonging to people in the UAE, even if the company itself is based elsewhere. It works separately from the data protection rules already in place in the DIFC and ADGM free zones.',
      '',
      'In simple terms, businesses need to:',
      '• Have a valid legal reason for collecting and using personal data, such as customer consent, fulfilling a contract, or meeting a legal requirement.',
      '• Respect people\'s rights by allowing them to access, correct, or request deletion of their personal information, and object to certain uses like marketing.',
      '• Protect personal data when it is transferred outside the UAE by following approved safeguards.',
      '• Report certain data breaches to the regulator and, in some cases, to affected individuals within the required time frames.',
      '• Carry out Data Protection Impact Assessments (DPIAs) before high-risk activities, especially when using AI or handling sensitive personal data.',
      '• Understand that serious breaches can result in fines of up to AED 5 million.',
      '',
      'The law has existed for several years, but the appointment of a dedicated authority signals that enforcement is likely to become much more active.',
      '',
      '<strong>Why This Matters for Business Visa and Company Setup Clients</strong>',
      '',
      '<strong>1. Data protection should be part of company formation.</strong>',
      'Starting a business usually involves setting up licences, employment contracts, payroll, HR systems, and internal processes. Adding PDPL compliance at this stage is much easier and less expensive than trying to fix gaps after the business has been running for years.',
      '',
      '<strong>2. Employee and visa records contain personal data.</strong>',
      'Business owners handling visa applications, employee onboarding, sponsorship documents, and HR records are already processing personal data every day.',
      'If that information is shared between offices in different countries, those transfers may also fall under the PDPL. Immigration compliance and data protection often go hand in hand.',
      '',
      '<strong>3. Good documentation is already part of the process.</strong>',
      'Business setup consultants are experienced in preparing accurate documentation, policies, and compliance records. The same structured approach can help businesses create consent records, data protection policies, breach procedures, and DPIA documentation required under the PDPL.',
      'In both immigration and data protection, good paperwork is often the strongest evidence of compliance.',
      '',
      '<strong>4. Businesses want one trusted advisor.</strong>',
      'Today\'s entrepreneurs don\'t just want help getting a visa or registering a company. They want guidance on how to operate their business correctly from day one.',
      'As the UAE continues to strengthen its regulatory framework, clients increasingly value advisors who understand business setup, immigration, and the key compliance requirements that come with running a company.',
      '',
      '<strong>The Bottom Line</strong>',
      '',
      'Helping someone establish a business in the UAE now means more than securing the right visa or company licence. It also means helping them understand their responsibilities around personal data so they can build a business that is compliant, well-prepared, and ready for future growth.',
      '',
      'As PDPL enforcement moves into focus, businesses that prepare early will be in a much stronger position than those waiting until compliance becomes a problem.',
    ],
  },
];

// ===== STYLES =====
const styles = {
  detail: {
    padding: '40px 0 60px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  backLink: {
    color: '#0A1128',
    fontWeight: '500',
    textDecoration: 'none',
    display: 'inline-block',
    marginBottom: '24px',
  },
  header: {
    marginBottom: '30px',
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
  },
  title: {
    fontSize: '2.2rem',
    fontWeight: '700',
    color: '#0A1128',
    marginBottom: '12px',
    fontFamily: 'Georgia, serif',
    lineHeight: 1.2,
  },
  meta: {
    display: 'flex',
    gap: '10px',
    fontSize: '0.9rem',
    color: '#6B7A8E',
  },
  content: {
    background: '#FFFFFF',
    borderRadius: '16px',
    padding: '36px',
    boxShadow: '0 8px 30px rgba(10, 17, 40, 0.06)',
  },
  paragraph: {
    fontSize: '1.05rem',
    lineHeight: 1.9,
    color: '#1A1A2E',
    marginBottom: '4px',
    fontFamily: 'Inter, sans-serif',
  },
  bulletPoint: {
    paddingLeft: '24px',
    fontSize: '1rem',
    color: '#1A1A2E',
  },
  ctaBox: {
    marginTop: '30px',
    padding: '24px',
    background: '#FFF8F0',
    borderRadius: '12px',
    textAlign: 'center',
    borderTop: '3px solid #C68A1B',
  },
  ctaText: {
    fontSize: '1.05rem',
    marginBottom: '16px',
    color: '#1A1A2E',
  },
};

export default BlogDetail;