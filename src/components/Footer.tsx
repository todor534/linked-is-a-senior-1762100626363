import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-grid">
            <div className="footer-brand">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span className="brand-logo" aria-hidden="true" />
                <div style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.01em', color: 'var(--heading)' }}>
                  Linked
                </div>
              </div>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6, marginTop: '6px', maxWidth: '640px' }}>
                Your senior engineering partner for production-ready web apps, AI copilots, and custom automations.
                We turn ambitious ideas into shipped software—with the reliability of enterprise engineering and
                the speed of a startup.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '14px' }}>
                <Link to="/contact?type=consult" className="btn btn-primary btn-sm">
                  <CalendarIcon />
                  <span>Book Free Consult</span>
                </Link>
                <Link to="/quote" className="btn btn-secondary btn-sm">
                  <QuoteIcon />
                  <span>Get Quote</span>
                </Link>
                <Link to="/work" className="btn btn-secondary btn-sm">
                  <WorkIcon />
                  <span>View Work</span>
                </Link>
              </div>
            </div>

            <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginTop: '28px' }} aria-label="Footer navigation">
              <div className="footer-col">
                <h4>Explore</h4>
                <ul className="footer-links">
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/work">Selected Work</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Why Teams Choose Us</h4>
                <ul className="footer-links">
                  <li><span style={{ color: 'var(--muted)' }}>Banking-grade delivery experience</span></li>
                  <li><span style={{ color: 'var(--muted)' }}>Senior-only engineering team</span></li>
                  <li><span style={{ color: 'var(--muted)' }}>Clear scopes, fast iteration</span></li>
                  <li><span style={{ color: 'var(--muted)' }}>Automation-first approach</span></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Legal</h4>
                <ul className="footer-links">
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                </ul>
                <p style={{ color: 'var(--muted)', fontSize: '0.8125rem', marginTop: '10px', lineHeight: 1.5 }}>
                  Trusted for credit origination and consumer lending automation. Security and reliability come first.
                </p>
              </div>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <div style={{ color: 'var(--muted)', fontSize: '0.9375rem' }}>
            © {year} Linked. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href="#"
              style={{
                width: '36px',
                height: '36px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-sm)',
                background: 'color-mix(in oklab, var(--surface-2), transparent 30%)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                textDecoration: 'none',
              }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="#"
              style={{
                width: '36px',
                height: '36px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-sm)',
                background: 'color-mix(in oklab, var(--surface-2), transparent 30%)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                textDecoration: 'none',
              }}
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="#"
              style={{
                width: '36px',
                height: '36px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-sm)',
                background: 'color-mix(in oklab, var(--surface-2), transparent 30%)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                textDecoration: 'none',
              }}
              aria-label="X (Twitter)"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function CalendarIcon() {
  const iconStyle: CSSProperties = { width: '18px', height: '18px', display: 'block' };
  return (
    <svg viewBox="0 0 24 24" style={iconStyle} aria-hidden="true" focusable="false">
      <path fill="currentColor" opacity="0.95" d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v3H3V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1zM3 10h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8zm5 3a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H8zm4 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12zm4 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H16z" />
    </svg>
  );
}

function QuoteIcon() {
  const iconStyle: CSSProperties = { width: '18px', height: '18px', display: 'block' };
  return (
    <svg viewBox="0 0 24 24" style={iconStyle} aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M7.2 6C5.4 6 4 7.4 4 9.2V14c0 1.8 1.4 3.2 3.2 3.2H10v-5.6H7.2V9.2H10V6H7.2zm9.6 0C15 6 13.6 7.4 13.6 9.2V14c0 1.8 1.4 3.2 3.2 3.2h2.8v-5.6h-2.8V9.2H19.6V6h-2.8z" />
    </svg>
  );
}

function WorkIcon() {
  const iconStyle: CSSProperties = { width: '18px', height: '18px', display: 'block' };
  return (
    <svg viewBox="0 0 24 24" style={iconStyle} aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M10 4h4a2 2 0 0 1 2 2v2h3a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a1 1 0 0 1 1-1h3V6a2 2 0 0 1 2-2zm4 4V6h-4v2h4z" />
    </svg>
  );
}

function LinkedInIcon() {
  const iconStyle: CSSProperties = { width: '18px', height: '18px', display: 'block' };
  return (
    <svg viewBox="0 0 24 24" style={iconStyle} aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M6.94 7.5H3.88V20h3.06V7.5zM5.41 6.2c.98 0 1.77-.8 1.77-1.78 0-.97-.79-1.77-1.77-1.77-.98 0-1.78.8-1.78 1.77 0 .98.8 1.78 1.78 1.78zM20.12 20v-6.95c0-3.71-1.98-5.44-4.62-5.44-2.13 0-3.08 1.17-3.61 1.99h.03V7.5H8.86c.04.99 0 12.5 0 12.5h3.06v-6.98c0-.37.03-.75.14-1.02.31-.75 1.01-1.53 2.19-1.53 1.55 0 2.17 1.16 2.17 2.85V20h3.7z" />
    </svg>
  );
}

function GitHubIcon() {
  const iconStyle: CSSProperties = { width: '18px', height: '18px', display: 'block' };
  return (
    <svg viewBox="0 0 24 24" style={iconStyle} aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.85 9.71.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.79.62-3.38-1.37-3.38-1.37-.45-1.17-1.12-1.48-1.12-1.48-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.58 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.23-.26-4.58-1.14-4.58-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.74 0 0 .85-.28 2.8 1.05A9.39 9.39 0 0 1 12 7.63c.86 0 1.73.12 2.54.35 1.94-1.33 2.79-1.05 2.79-1.05.55 1.42.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.81-4.59 5.07.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.58.69.48A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function XIcon() {
  const iconStyle: CSSProperties = { width: '18px', height: '18px', display: 'block' };
  return (
    <svg viewBox="0 0 24 24" style={iconStyle} aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M18.5 3h-3.1l-3.2 4.3L8.2 3H3l6.2 8.5L3.2 21h3.1l3.5-4.7 4.2 5.7H21l-6.3-8.6L18.5 3zm-2.1 15.8-7-9.5 1.2-1.7 7 9.5-1.2 1.7z" />
    </svg>
  );
}