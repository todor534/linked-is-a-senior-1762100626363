import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id?: string;
  className?: string;
};

const colors = {
  bgDark: '#0b1220',
  bgDarker: '#09101a',
  text: '#e5e7eb',
  textDim: '#cbd5e1',
  accent: '#60a5fa',
  primary: '#22c55e',
  primaryDark: '#16a34a',
  secondary: '#111827',
  border: '#1f2937',
  link: '#93c5fd',
};

const styles: { [k: string]: React.CSSProperties } = {
  section: {
    background: `linear-gradient(180deg, #0f172a 0%, ${colors.bgDark} 100%)`,
    color: colors.text,
    padding: '64px 16px',
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: 32,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  content: {
    flex: '1 1 520px',
    minWidth: 280,
  },
  badgeRow: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  pill: {
    background: 'rgba(96,165,250,0.15)',
    color: colors.accent,
    border: `1px solid rgba(96,165,250,0.3)`,
    padding: '6px 10px',
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 0.2,
    textTransform: 'uppercase',
  },
  badge: {
    background: 'rgba(34,197,94,0.12)',
    color: colors.text,
    border: `1px solid rgba(34,197,94,0.35)`,
    padding: '6px 10px',
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 0.2,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 40,
    lineHeight: 1.15,
    margin: '8px 0 12px',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    background: 'linear-gradient(90deg, #ffffff 0%, #cbd5e1 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 1.6,
    color: colors.textDim,
    margin: '0 0 16px',
    maxWidth: 720,
  },
  highlights: {
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
    margin: '0 0 24px',
  },
  highlight: {
    background: colors.secondary,
    color: colors.textDim,
    border: `1px solid ${colors.border}`,
    padding: '8px 12px',
    borderRadius: 10,
    fontSize: 13,
  },
  ctas: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    marginTop: 8,
    marginBottom: 14,
  },
  buttonBase: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '12px 16px',
    borderRadius: 12,
    border: '1px solid transparent',
    fontWeight: 700,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'transform 120ms ease',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
  },
  primaryButton: {
    background: `linear-gradient(180deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
    color: '#06130a',
    borderColor: 'rgba(0,0,0,0.2)',
    boxShadow: '0 8px 24px rgba(34,197,94,0.2)',
  },
  secondaryButton: {
    background: 'transparent',
    color: colors.text,
    borderColor: colors.border,
    boxShadow: 'none',
  },
  tertiaryLink: {
    background: 'transparent',
    color: colors.link,
    borderColor: 'transparent',
    paddingLeft: 8,
    paddingRight: 8,
  },
  note: {
    fontSize: 13,
    color: colors.textDim,
    marginTop: 6,
  },
  noteLink: {
    color: colors.link,
    textDecoration: 'none',
  },
  media: {
    flex: '1 1 420px',
    minWidth: 260,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediaCard: {
    background: colors.bgDarker,
    border: `1px solid ${colors.border}`,
    borderRadius: 16,
    padding: 12,
    width: '100%',
    maxWidth: 520,
    boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: 12,
    border: `1px solid ${colors.border}`,
  },
  icon: {
    width: 18,
    height: 18,
  },
};

const RightArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" style={styles.icon} aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Calendar = () => (
  <svg viewBox="0 0 24 24" fill="none" style={styles.icon} aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Quote = () => (
  <svg viewBox="0 0 24 24" fill="none" style={styles.icon} aria-hidden="true">
    <path d="M7 7h10a2 2 0 0 1 2 2v8l-4-3H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function CTASection({ id, className }: Props) {
  return (
    <section id={id} className={className} aria-label="Call to action" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.badgeRow}>
            <span style={styles.pill}>Senior Web & AI Studio</span>
            <span style={styles.badge}>Banking-grade delivery</span>
          </div>

          <h2 style={styles.title}>Ship production-ready web & AI solutions—fast.</h2>
          <p style={styles.subtitle}>
            We design and build web apps, custom process automations, e‑commerce shops, client portals with secure login, order workflows, dashboards, and AI‑powered services. Clear scopes, fast iteration, automation‑first, and reliable senior engineering.
          </p>

          <div style={styles.highlights}>
            <span style={styles.highlight}>Client portals</span>
            <span style={styles.highlight}>E‑commerce</span>
            <span style={styles.highlight}>Automations</span>
            <span style={styles.highlight}>AI assistants</span>
            <span style={styles.highlight}>3rd‑party integrations</span>
            <span style={styles.highlight}>Dashboards</span>
          </div>

          <div style={styles.ctas}>
            <Link to="/contact#book" style={{ ...styles.buttonBase, ...styles.primaryButton }} aria-label="Book a free consult">
              <Calendar />
              Book a free consult
            </Link>
            <Link to="/quote" style={{ ...styles.buttonBase, ...styles.secondaryButton }} aria-label="Request a quote">
              <Quote />
              Request a quote
            </Link>
            <Link to="/work" style={{ ...styles.buttonBase, ...styles.tertiaryLink }} aria-label="View portfolio">
              View portfolio
              <RightArrow />
            </Link>
          </div>

          <p style={styles.note}>
            Selected work: <Link to="/work" style={styles.noteLink}>Kaya – AI Business Assistant</Link>,{' '}
            <a href="https://cashinginonai.com" target="_blank" rel="noopener noreferrer" style={styles.noteLink}>Cashing in on AI</a>,{' '}
            <a href="https://nancyatanasova.com" target="_blank" rel="noopener noreferrer" style={styles.noteLink}>Nancy Atanasova Dental Lab</a>.
          </p>
        </div>

        <div style={styles.media}>
          <div style={styles.mediaCard} aria-hidden="true">
            <img
              src="https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762099456248-img-cta-showcase.png"
              alt="Preview of Linked’s recent web apps, portals, and AI assistants"
              style={styles.image}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}