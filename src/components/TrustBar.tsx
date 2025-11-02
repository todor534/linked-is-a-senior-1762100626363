import React from 'react';
import { Link } from 'react-router-dom';

type Logo = {
  src: string;
  alt: string;
  href?: string;
};

const logos: Logo[] = [
  { src: '@@img_logo_kaya@@', alt: 'Kaya — AI Business Assistant', href: '/work' },
  { src: '@@img_logo_cioa@@', alt: 'Cashing in on AI — Education and Insights', href: '/work' },
  { src: '@@img_logo_nancy@@', alt: 'Nancy Atanasova Dental Lab', href: 'https://nancyatanasova.com' },
  { src: '@@img_logo_openai@@', alt: 'OpenAI Partner Integrations', href: 'https://openai.com' },
  { src: '@@img_logo_stripe@@', alt: 'Stripe Payments & Billing Integrations', href: 'https://stripe.com' },
  { src: '@@img_logo_aws@@', alt: 'AWS Cloud & Serverless on AWS', href: 'https://aws.amazon.com' },
];

const styles: { [k: string]: React.CSSProperties } = {
  wrap: {
    background: '#ffffff',
    border: '1px solid #e9edf3',
    borderRadius: 12,
    padding: '14px 16px',
    boxShadow: '0 1px 2px rgba(16, 24, 40, 0.04)',
  },
  inner: {
    maxWidth: 1152,
    margin: '0 auto',
  },
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'space-between',
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  kicker: {
    margin: 0,
    fontSize: 14,
    color: '#475569',
    letterSpacing: 0.2,
    fontWeight: 500,
  },
  ctaLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    textDecoration: 'none',
    color: '#0b5dff',
    fontWeight: 600,
    fontSize: 14,
    padding: '6px 10px',
    borderRadius: 8,
    background: 'rgba(11,93,255,0.06)',
    border: '1px solid rgba(11,93,255,0.18)',
  },
  logoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: 12,
    alignItems: 'center',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    padding: '8px 10px',
    borderRadius: 10,
    textDecoration: 'none',
    background: '#fafbfe',
    border: '1px solid #eff3f9',
  },
  logoImg: {
    maxWidth: '100%',
    maxHeight: 28,
    objectFit: 'contain',
    filter: 'grayscale(100%) opacity(0.7)',
  },
  badges: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
    marginTop: 12,
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '6px 10px',
    borderRadius: 999,
    background: '#f2f6fb',
    border: '1px solid #e7edf6',
    color: '#334155',
    fontSize: 12,
    fontWeight: 500,
    whiteSpace: 'nowrap',
  },
  badgeIcon: {
    fontSize: 14,
    lineHeight: 1,
  },
};

function isInternal(href?: string) {
  return !!href && href.startsWith('/');
}

export default function TrustBar(): JSX.Element {
  return (
    <section aria-label="Client trust and technology partners" style={styles.wrap}>
      <div style={styles.inner}>
        <div style={styles.headerRow}>
          <p style={styles.kicker}>
            Trusted by teams shipping regulated and AI‑powered products
          </p>
          <Link to="/work" style={styles.ctaLink} aria-label="View portfolio">
            View portfolio →
          </Link>
        </div>

        <div style={styles.logoGrid}>
          {logos.map((l) => {
            const img = <img src={l.src} alt={l.alt} style={styles.logoImg} loading="lazy" />;
            if (isInternal(l.href)) {
              return (
                <Link key={l.alt} to={l.href!} style={styles.logoLink} aria-label={l.alt}>
                  {img}
                </Link>
              );
            }
            return (
              <a
                key={l.alt}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.logoLink}
                aria-label={l.alt}
              >
                {img}
              </a>
            );
          })}
        </div>

        <div style={styles.badges}>
          <div style={styles.badge}>
            <span style={styles.badgeIcon}>★★★★★</span>
            <span>Average 5.0 client feedback</span>
          </div>
          <div style={styles.badge}>
            <span style={styles.badgeIcon}>🛡️</span>
            <span>Banking‑grade delivery</span>
          </div>
          <div style={styles.badge}>
            <span style={styles.badgeIcon}>⚡</span>
            <span>Automation‑first mindset</span>
          </div>
          <div style={styles.badge}>
            <span style={styles.badgeIcon}>👩‍💻</span>
            <span>100% senior engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}