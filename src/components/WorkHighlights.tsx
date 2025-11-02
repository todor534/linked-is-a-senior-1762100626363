import React from 'react';
import { Link } from 'react-router-dom';

type WorkItem = {
  title: string;
  description: string;
  image: string;
  href?: string;
  tags?: string[];
  year?: string | number;
  highlight?: string;
};

type Props = {
  title?: string;
  subtitle?: string;
  items?: WorkItem[];
  limit?: number;
  showCTA?: boolean;
};

const defaultItems: WorkItem[] = [
  {
    title: 'Kaya — AI Business Assistant',
    description:
      'A production-ready AI assistant that automates support, research, and internal ops. Secure, auditable, and tuned to company workflows.',
    image: 'https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762099246241-img-kaya-hero.png',
    href: '/work',
    tags: ['AI agents', 'RAG', 'Automation', 'Web app'],
    year: '2024',
    highlight: 'Deployed to real teams with measurable ROI',
  },
  {
    title: 'Cashing in on AI',
    description:
      'A suite of practical AI-powered tools and content that help operators capture value quickly—prompt systems, data pipelines, and lightweight UIs.',
    image: 'https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762099290311-img-cashing-in-on-ai.png',
    href: '/work',
    tags: ['AI', 'Tooling', 'Data', 'Ops'],
    year: '2024',
    highlight: 'From idea to shipped tools in weeks',
  },
  {
    title: 'Nancy Atanasova Dental Lab',
    description:
      'Marketing site and secure portal with patient intake and ordering. Streamlined case management and order workflows.',
    image: 'https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762099326392-img-nancy-dental-lab.png',
    href: 'https://nancyatanasova.com',
    tags: ['E‑commerce', 'Portal', 'Workflow', 'Payments'],
    year: '2023',
    highlight: 'Automated intake and order routing',
  },
];

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: '64px 16px',
    maxWidth: 1200,
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    marginBottom: 24,
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#6b7280',
    fontWeight: 600,
  },
  title: {
    fontSize: 32,
    lineHeight: 1.2,
    margin: 0,
    color: '#111827',
  },
  subtitle: {
    margin: 0,
    color: '#374151',
    fontSize: 16,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: 16,
  },
  card: {
    gridColumn: 'span 12',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #e5e7eb',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
    transition: 'transform 200ms ease, box-shadow 200ms ease',
  },
  cardHoverable: {
    cursor: 'pointer',
  },
  mediaWrap: {
    width: '100%',
    aspectRatio: '16 / 9',
    backgroundColor: '#f3f4f6',
    position: 'relative',
  },
  media: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  content: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  rowTop: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: '#6b7280',
    fontSize: 12,
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '2px 8px',
    borderRadius: 999,
    backgroundColor: '#eef2ff',
    color: '#4338ca',
    fontSize: 11,
    fontWeight: 600,
  },
  h3: {
    margin: '4px 0',
    fontSize: 20,
    color: '#111827',
  },
  desc: {
    margin: 0,
    color: '#374151',
    fontSize: 14,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  tag: {
    fontSize: 12,
    color: '#374151',
    backgroundColor: '#f3f4f6',
    padding: '4px 8px',
    borderRadius: 8,
  },
  footerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  linkText: {
    color: '#2563eb',
    textDecoration: 'none',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
  },
  arrow: {
    transition: 'transform 200ms ease',
  },
  ctas: {
    marginTop: 24,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
  },
  buttonPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 16px',
    borderRadius: 10,
    backgroundColor: '#111827',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: 14,
  },
  buttonSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 16px',
    borderRadius: 10,
    backgroundColor: '#f3f4f6',
    color: '#111827',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: 14,
    border: '1px solid #e5e7eb',
  },
  // Responsive adjustments via simple column spans
  // Consumers can wrap this component in responsive containers if needed.
};

function isExternal(href?: string) {
  return !!href && /^https?:\/\//i.test(href);
}

function CardWrapper({
  href,
  children,
  ariaLabel,
}: {
  href?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  if (!href) return <div>{children}</div>;
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} style={{ textDecoration: 'none' }}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} aria-label={ariaLabel} style={{ textDecoration: 'none' }}>
      {children}
    </Link>
  );
}

export default function WorkHighlights({
  title = 'Selected work',
  subtitle = 'Banking-grade engineering, AI-first automation, and production-ready web apps.',
  items = defaultItems,
  limit = 3,
  showCTA = true,
}: Props) {
  const list = items.slice(0, limit);

  return (
    <section style={styles.section} aria-labelledby="work-highlights-heading">
      <header style={styles.header}>
        <span style={styles.eyebrow}>What we ship</span>
        <h2 id="work-highlights-heading" style={styles.title}>{title}</h2>
        {subtitle ? <p style={styles.subtitle}>{subtitle}</p> : null}
      </header>

      <div style={styles.grid}>
        {list.map((item, idx) => (
          <div
            key={`${item.title}-${idx}`}
            style={{
              ...styles.card,
              ...(item.href ? styles.cardHoverable : {}),
              // Simple responsive: first item spans full; others also full. Consumers can place in columns externally.
              gridColumn: 'span 12',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 18px rgba(0,0,0,0.08)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'none';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 2px rgba(0,0,0,0.04)';
            }}
          >
            <CardWrapper href={item.href} ariaLabel={`Open ${item.title}`}>
              <div style={styles.mediaWrap}>
                <img
                  src={item.image || 'https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762099366367-img-placeholder.png'}
                  alt={item.title}
                  style={styles.media}
                  loading="lazy"
                />
              </div>
              <div style={styles.content}>
                <div style={styles.rowTop}>
                  {item.year ? <span>{item.year}</span> : null}
                  {item.highlight ? <span style={styles.badge}>{item.highlight}</span> : null}
                </div>
                <h3 style={styles.h3}>{item.title}</h3>
                <p style={styles.desc}>{item.description}</p>
                {item.tags && item.tags.length > 0 ? (
                  <div style={styles.tags}>
                    {item.tags.map((t) => (
                      <span key={t} style={styles.tag}>{t}</span>
                    ))}
                  </div>
                ) : null}
                {item.href ? (
                  <div style={styles.footerRow}>
                    <span style={styles.linkText}>
                      View case
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={styles.arrow} aria-hidden="true">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                ) : null}
              </div>
            </CardWrapper>
          </div>
        ))}
      </div>

      {showCTA ? (
        <div style={styles.ctas} aria-label="Primary actions">
          <Link to="/contact" style={styles.buttonPrimary}>Book a free consult</Link>
          <Link to="/quote" style={styles.buttonSecondary}>Request a quote</Link>
          <Link to="/work" style={styles.buttonSecondary}>View portfolio</Link>
        </div>
      ) : null}
    </section>
  );
}