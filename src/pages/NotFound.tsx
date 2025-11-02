import React from 'react';
import { Link } from 'react-router-dom';

const styles: { [k: string]: React.CSSProperties } = {
  page: {
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '56px 16px',
    backgroundColor: '#0b0c10',
    color: '#e8eaed',
  },
  container: {
    width: '100%',
    maxWidth: 920,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 32,
    alignItems: 'center',
  },
  card: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 16,
    padding: 28,
    boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#9aa0a6',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 999,
    padding: '6px 12px',
    marginBottom: 16,
  },
  badgeDot: {
    width: 8,
    height: 8,
    background: '#ef4444',
    borderRadius: '50%',
    boxShadow: '0 0 0 3px rgba(239,68,68,0.12)',
  },
  title: {
    fontSize: 40,
    lineHeight: 1.1,
    margin: '0 0 10px',
    fontWeight: 800,
    letterSpacing: -0.5,
  },
  highlight: {
    color: '#60a5fa',
  },
  subtitle: {
    fontSize: 16,
    color: '#cbd5e1',
    margin: '0 0 22px',
    maxWidth: 720,
  },
  list: {
    margin: '0 0 20px',
    paddingLeft: 18,
    color: '#aab0b6',
    fontSize: 14,
    lineHeight: 1.6,
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 10,
  },
  buttonPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 16px',
    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
    color: '#ffffff',
    borderRadius: 10,
    fontWeight: 700,
    textDecoration: 'none',
    border: '1px solid rgba(255,255,255,0.12)',
    boxShadow: '0 8px 20px rgba(37,99,235,0.35)',
  },
  buttonSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 16px',
    background: 'rgba(255,255,255,0.04)',
    color: '#e5e7eb',
    borderRadius: 10,
    fontWeight: 700,
    textDecoration: 'none',
    border: '1px solid rgba(255,255,255,0.12)',
  },
  smallLinks: {
    marginTop: 14,
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    fontSize: 14,
  },
  smallLink: {
    color: '#9aa0a6',
    textDecoration: 'underline',
  },
  media: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrap: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 16,
    padding: 16,
    width: '100%',
    maxWidth: 520,
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: 12,
  },
  grid: {
    display: 'grid',
    gap: 32,
    gridTemplateColumns: '1fr',
  },
  note: {
    marginTop: 18,
    fontSize: 13,
    color: '#9aa0a6',
  },
  code: {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 6,
    padding: '2px 6px',
    color: '#cbd5e1',
  },
  // Responsive tweaks
  '@media-small': {},
};

const NotFound: React.FC = () => {
  return (
    <main style={styles.page} aria-labelledby="nf-title">
      <div style={{ ...styles.container }}>
        <div style={styles.grid as React.CSSProperties}>
          <section style={styles.card} aria-label="Page not found">
            <div style={styles.badge}>
              <span style={styles.badgeDot} aria-hidden="true" />
              <span>404 Not Found</span>
            </div>
            <h1 id="nf-title" style={styles.title}>
              The page you’re looking for has moved or doesn’t exist.
              {' '}
              <span style={styles.highlight}>Let’s get you back on track.</span>
            </h1>
            <p style={styles.subtitle}>
              Linked builds production-ready web apps, process automations, e‑commerce, and AI services.
              If it runs in a browser or on the web, we build it—secure client portals, workflows, dashboards, and more.
            </p>
            <ul style={styles.list}>
              <li>Banking-grade engineering with clear scopes and fast iteration.</li>
              <li>Automation-first mindset and reliable senior developers.</li>
              <li>Selected work: Kaya – AI Business Assistant, Cashing in on AI, Nancy Atanasova Dental Lab.</li>
            </ul>
            <div style={styles.actions}>
              <Link to="/contact" style={styles.buttonPrimary} aria-label="Book a free consult">
                Book a free consult
              </Link>
              <Link to="/quote" style={styles.buttonSecondary} aria-label="Request a quote">
                Request a quote
              </Link>
              <Link to="/work" style={styles.buttonSecondary} aria-label="View portfolio">
                View portfolio
              </Link>
            </div>
            <div style={styles.smallLinks}>
              <Link to="/" style={styles.smallLink}>Go to homepage</Link>
              <Link to="/services" style={styles.smallLink}>Explore services</Link>
              <Link to="/contact" style={styles.smallLink}>Report a broken link</Link>
            </div>
            <p style={styles.note}>
              Error code: <span style={styles.code}>404</span>
            </p>
          </section>

          <div style={styles.media}>
            <div style={styles.imageWrap}>
              <img
                src="@@img_404_illustration@@"
                alt="Abstract 404 illustration"
                style={styles.image}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;