import React from 'react';
import { Link } from 'react-router-dom';

const styles: { [k: string]: React.CSSProperties } = {
  section: {
    position: 'relative',
    overflow: 'hidden',
    padding: '64px 20px',
    background:
      'radial-gradient(1200px 600px at 90% -20%, rgba(56,189,248,0.12), transparent 60%), radial-gradient(900px 500px at -10% 20%, rgba(99,102,241,0.12), transparent 60%), linear-gradient(180deg, #0b0f15 0%, #0d1117 100%)',
    color: '#e6edf3',
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 32,
    flexWrap: 'wrap',
  },
  left: {
    flex: '1 1 520px',
    minWidth: 300,
  },
  eyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontSize: 12,
    lineHeight: '18px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#9fb3c8',
    background: 'rgba(255,255,255,0.06)',
    padding: '6px 10px',
    borderRadius: 999,
    border: '1px solid rgba(255,255,255,0.08)',
    marginBottom: 14,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: '#22c55e',
    boxShadow: '0 0 0 4px rgba(34,197,94,0.15)',
  },
  title: {
    fontSize: 42,
    lineHeight: 1.1,
    fontWeight: 800,
    margin: 0,
    letterSpacing: '-0.02em',
    color: '#f0f6fc',
  },
  gradientText: {
    background: 'linear-gradient(90deg, #60a5fa 0%, #22d3ee 50%, #34d399 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  },
  subtitle: {
    marginTop: 14,
    color: '#b6c2cf',
    fontSize: 16,
    lineHeight: 1.6,
    maxWidth: 680,
  },
  bullets: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 16,
    marginBottom: 8,
  },
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 12px',
    borderRadius: 999,
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#c6d4e2',
    fontSize: 13,
  },
  ctas: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 22,
  },
  primaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '12px 16px',
    background:
      'linear-gradient(180deg, #22c55e 0%, #16a34a 100%)',
    color: '#0b0f15',
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 14,
    border: '1px solid #16a34a',
    boxShadow:
      '0 8px 20px rgba(22,163,74,0.35), inset 0 1px 0 rgba(255,255,255,0.2)',
    textDecoration: 'none',
  },
  secondaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '12px 16px',
    background: 'rgba(255,255,255,0.06)',
    color: '#e6edf3',
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 14,
    border: '1px solid rgba(255,255,255,0.14)',
    textDecoration: 'none',
    backdropFilter: 'blur(4px)',
  },
  tertiaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '12px 16px',
    color: '#93c5fd',
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 14,
    border: '1px solid rgba(147,197,253,0.3)',
    textDecoration: 'none',
    background: 'rgba(37, 99, 235, 0.1)',
  },
  btnIcon: {
    display: 'inline-flex',
    width: 16,
    height: 16,
  },
  meta: {
    marginTop: 18,
    color: '#9fb3c8',
    fontSize: 13,
  },
  right: {
    flex: '1 1 420px',
    minWidth: 280,
    position: 'relative',
  },
  card: {
    position: 'relative',
    borderRadius: 16,
    border: '1px solid rgba(255,255,255,0.14)',
    background:
      'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))',
    boxShadow:
      '0 8px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)',
    overflow: 'hidden',
  },
  mockToolbar: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 12px',
    borderBottom: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(2,6,12,0.4)',
  },
  dotR: { width: 10, height: 10, borderRadius: 999, background: '#ef4444' },
  dotY: { width: 10, height: 10, borderRadius: 999, background: '#f59e0b' },
  dotG: { width: 10, height: 10, borderRadius: 999, background: '#22c55e' },
  toolbarTitle: {
    marginLeft: 6,
    color: '#9fb3c8',
    fontSize: 12,
  },
  heroImg: {
    display: 'block',
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  ribbon: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: '6px 10px',
    borderRadius: 999,
    background: 'linear-gradient(90deg, rgba(99,102,241,0.25), rgba(56,189,248,0.25))',
    border: '1px solid rgba(255,255,255,0.18)',
    color: '#dbeafe',
    fontSize: 12,
    fontWeight: 600,
    backdropFilter: 'blur(6px)',
  },
};

export default function Hero() {
  return (
    <section style={styles.section} aria-label="Linked — Senior Software & AI Development Studio">
      <div style={styles.container}>
        <div style={styles.wrap}>
          <div style={styles.left}>
            <div style={styles.eyebrow}>
              <span style={styles.dot} aria-hidden="true" />
              Senior software & AI development studio
            </div>
            <h1 style={styles.title}>
              We design, automate, and ship
              {' '}
              <span style={styles.gradientText}>production‑ready</span>
              {' '}
              web apps and AI services.
            </h1>
            <p style={styles.subtitle}>
              If it runs in a browser or on the web, we build it—marketing sites, secure client portals,
              dashboards, order workflows, process automations, and 3rd‑party integrations.
              Delivered banking‑grade solutions for consumer lending.
            </p>

            <div style={styles.bullets} aria-label="Why clients choose us">
              <span style={styles.pill}>Clear scopes</span>
              <span style={styles.pill}>Fast iteration</span>
              <span style={styles.pill}>Automation‑first</span>
              <span style={styles.pill}>Senior engineering</span>
            </div>

            <div style={styles.ctas}>
              <Link to="/contact?type=consult" style={styles.primaryBtn}>
                Book a free consult
                <span style={styles.btnIcon} aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.75 3.75a.75.75 0 0 1 .75-.75h4.75a.75.75 0 0 1 .75.75v4.75a.75.75 0 0 1-1.5 0V5.56l-8.22 8.22a.75.75 0 0 1-1.06-1.06l8.22-8.22h-2.94a.75.75 0 0 1-.75-.75z" />
                  </svg>
                </span>
              </Link>
              <Link to="/quote" style={styles.secondaryBtn}>
                Request a quote
                <span style={styles.btnIcon} aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 3.5A1.5 1.5 0 0 1 5.5 2h9A1.5 1.5 0 0 1 16 3.5V15a1 1 0 0 1-1 1H6.414a1 1 0 0 1-.707-.293l-2.414-2.414A1 1 0 0 1 3 12.586V3.5zM6 5h8v2H6V5zm0 4h8v2H6V9zm0 4h5v2H6v-2z" />
                  </svg>
                </span>
              </Link>
              <Link to="/work" style={styles.tertiaryBtn}>
                View portfolio
                <span style={styles.btnIcon} aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 4.75A1.75 1.75 0 0 1 4.75 3h10.5A1.75 1.75 0 0 1 17 4.75v10.5A1.75 1.75 0 0 1 15.25 17H4.75A1.75 1.75 0 0 1 3 15.25V4.75zM5 5.5v9h10v-9H5zm1.75 7.25 2.5-3.125a1 1 0 0 1 1.5-.083l1.26 1.26.99-1.155a1 1 0 0 1 1.5 1.32l-1.75 2.043a1 1 0 0 1-1.51.05l-1.23-1.23-2.04 2.55a1 1 0 0 1-1.53-1.2z" />
                  </svg>
                </span>
              </Link>
            </div>

            <div style={styles.meta}>
              Selected work: Kaya — AI Business Assistant • Cashing in on AI • Nancy Atanasova Dental Lab
            </div>
          </div>

          <div style={styles.right} aria-hidden="true">
            <div style={styles.card}>
              <div style={styles.mockToolbar}>
                <span style={styles.dotR} />
                <span style={styles.dotY} />
                <span style={styles.dotG} />
                <span style={styles.toolbarTitle}>Live preview — dashboard + automation</span>
              </div>
              <img
                src="https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762100279742-img-hero-dashboard.png"
                alt="Preview of a clean web dashboard with AI-assisted automations"
                style={styles.heroImg}
                loading="eager"
                decoding="async"
              />
              <div style={styles.ribbon}>Banking‑grade. Production‑ready.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}