import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

const styles: Record<string, CSSProperties> = {
  footer: {
    backgroundColor: '#0b0d12',
    color: '#e6e8ee',
    padding: '56px 20px 24px',
    borderTop: '1px solid rgba(255,255,255,0.08)',
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  top: {
    display: 'flex',
    gap: 32,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  brand: {
    flex: '1 1 320px',
    minWidth: 260,
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  logoMarkWrap: {
    width: 36,
    height: 36,
    borderRadius: 8,
    background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
    display: 'grid',
    placeItems: 'center',
    boxShadow: '0 4px 16px rgba(79,70,229,0.4)',
  },
  logoMark: {
    width: 20,
    height: 20,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: 0.2,
  },
  tagline: {
    color: '#b6bdc7',
    lineHeight: 1.6,
    marginTop: 6,
    maxWidth: 640,
  },
  ctas: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 14,
  },
  buttonPrimary: {
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    border: '1px solid rgba(255,255,255,0.12)',
    padding: '10px 14px',
    borderRadius: 10,
    fontWeight: 600,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    boxShadow: '0 6px 20px rgba(79,70,229,0.35)',
  },
  buttonSecondary: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    color: '#e6e8ee',
    border: '1px solid rgba(255,255,255,0.16)',
    padding: '10px 14px',
    borderRadius: 10,
    fontWeight: 600,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    backdropFilter: 'blur(4px)',
  },
  cols: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 40,
    marginTop: 28,
  },
  col: {
    minWidth: 180,
    flex: '1 1 160px',
  },
  heading: {
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#9aa3af',
    marginBottom: 12,
    fontWeight: 700,
  },
  linkList: {
    display: 'grid',
    gap: 8,
  },
  link: {
    color: '#e6e8ee',
    textDecoration: 'none',
    opacity: 0.92,
  },
  note: {
    color: '#94a3b8',
    fontSize: 13,
    marginTop: 10,
    lineHeight: 1.5,
  },
  bottom: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingTop: 16,
    borderTop: '1px solid rgba(255,255,255,0.08)',
  },
  copy: {
    color: '#9aa3af',
    fontSize: 13,
  },
  social: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  socialLink: {
    width: 36,
    height: 36,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    color: '#e6e8ee',
    textDecoration: 'none',
  },
  icon: {
    width: 18,
    height: 18,
    display: 'block',
  },
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.top}>
          <div style={styles.brand}>
            <div style={styles.logoRow}>
              <div style={styles.logoMarkWrap} aria-hidden="true">
                <svg viewBox="0 0 24 24" style={styles.logoMark}>
                  <path
                    d="M7 5h10a2 2 0 0 1 2 2v10h-3V9H7V5z"
                    fill="#ffffff"
                    opacity="0.9"
                  />
                  <path
                    d="M5 9h10a2 2 0 0 1 2 2v8H9a4 4 0 0 1-4-4V9z"
                    fill="#ffffff"
                    opacity="0.7"
                  />
                </svg>
              </div>
              <div style={styles.logoText}>Linked — Senior Software & AI</div>
            </div>
            <p style={styles.tagline}>
              We design and ship production-ready web apps, custom process automations,
              e‑commerce shops, and AI-powered services. From marketing sites and secure
              client portals to order workflows, dashboards, and 3rd‑party integrations.
              Proven on banking‑grade deliveries.
            </p>
            <div style={styles.ctas}>
              <Link to="/contact?type=consult" style={styles.buttonPrimary} aria-label="Book a free consult">
                <CalendarIcon />
                <span>Book a free consult</span>
              </Link>
              <Link to="/quote" style={styles.buttonSecondary} aria-label="Request a quote">
                <QuoteIcon />
                <span>Request a quote</span>
              </Link>
              <Link to="/work" style={styles.buttonSecondary} aria-label="View portfolio">
                <WorkIcon />
                <span>View portfolio</span>
              </Link>
            </div>
          </div>

          <nav style={styles.cols} aria-label="Footer navigation">
            <div style={styles.col}>
              <div style={styles.heading}>Explore</div>
              <div style={styles.linkList}>
                <Link to="/services" style={styles.link}>Services</Link>
                <Link to="/work" style={styles.link}>Selected work</Link>
                <Link to="/about" style={styles.link}>About</Link>
                <Link to="/contact" style={styles.link}>Contact</Link>
              </div>
            </div>
            <div style={styles.col}>
              <div style={styles.heading}>Why clients choose us</div>
              <div style={styles.linkList}>
                <span style={styles.link as CSSProperties}>Clear scopes</span>
                <span style={styles.link as CSSProperties}>Fast iteration</span>
                <span style={styles.link as CSSProperties}>Automation-first mindset</span>
                <span style={styles.link as CSSProperties}>Reliable senior engineering</span>
              </div>
            </div>
            <div style={styles.col}>
              <div style={styles.heading}>Legal</div>
              <div style={styles.linkList}>
                <Link to="/privacy" style={styles.link}>Privacy policy</Link>
              </div>
              <p style={styles.note}>
                Banking-grade solutions delivered: credit origination and business-process
                automation for consumer lending.
              </p>
            </div>
          </nav>
        </div>

        <div style={styles.bottom}>
          <div style={styles.copy}>
            © {year} Linked. All rights reserved.
          </div>
          <div style={styles.social}>
            <a href="#" style={styles.socialLink} aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="#" style={styles.socialLink} aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="#" style={styles.socialLink} aria-label="X (Twitter)">
              <XIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" style={styles.icon} aria-hidden="true" focusable="false">
      <path fill="#ffffff" opacity="0.95" d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v3H3V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1zM3 10h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8zm5 3a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H8zm4 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12zm4 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H16z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" style={styles.icon} aria-hidden="true" focusable="false">
      <path fill="#e6e8ee" d="M7.2 6C5.4 6 4 7.4 4 9.2V14c0 1.8 1.4 3.2 3.2 3.2H10v-5.6H7.2V9.2H10V6H7.2zm9.6 0C15 6 13.6 7.4 13.6 9.2V14c0 1.8 1.4 3.2 3.2 3.2h2.8v-5.6h-2.8V9.2H19.6V6h-2.8z" />
    </svg>
  );
}

function WorkIcon() {
  return (
    <svg viewBox="0 0 24 24" style={styles.icon} aria-hidden="true" focusable="false">
      <path fill="#e6e8ee" d="M10 4h4a2 2 0 0 1 2 2v2h3a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a1 1 0 0 1 1-1h3V6a2 2 0 0 1 2-2zm4 4V6h-4v2h4z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" style={styles.icon} aria-hidden="true" focusable="false">
      <path fill="#e6e8ee" d="M6.94 7.5H3.88V20h3.06V7.5zM5.41 6.2c.98 0 1.77-.8 1.77-1.78 0-.97-.79-1.77-1.77-1.77-.98 0-1.78.8-1.78 1.77 0 .98.8 1.78 1.78 1.78zM20.12 20v-6.95c0-3.71-1.98-5.44-4.62-5.44-2.13 0-3.08 1.17-3.61 1.99h.03V7.5H8.86c.04.99 0 12.5 0 12.5h3.06v-6.98c0-.37.03-.75.14-1.02.31-.75 1.01-1.53 2.19-1.53 1.55 0 2.17 1.16 2.17 2.85V20h3.7z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" style={styles.icon} aria-hidden="true" focusable="false">
      <path fill="#e6e8ee" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.85 9.71.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.79.62-3.38-1.37-3.38-1.37-.45-1.17-1.12-1.48-1.12-1.48-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.58 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.23-.26-4.58-1.14-4.58-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.74 0 0 .85-.28 2.8 1.05A9.39 9.39 0 0 1 12 7.63c.86 0 1.73.12 2.54.35 1.94-1.33 2.79-1.05 2.79-1.05.55 1.42.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.81-4.59 5.07.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.58.69.48A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" style={styles.icon} aria-hidden="true" focusable="false">
      <path fill="#e6e8ee" d="M18.5 3h-3.1l-3.2 4.3L8.2 3H3l6.2 8.5L3.2 21h3.1l3.5-4.7 4.2 5.7H21l-6.3-8.6L18.5 3zm-2.1 15.8-7-9.5 1.2-1.7 7 9.5-1.2 1.7z" />
    </svg>
  );
}