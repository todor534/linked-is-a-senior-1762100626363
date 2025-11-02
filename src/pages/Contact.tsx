import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const styles: { [k: string]: React.CSSProperties } = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#0b0f1a',
    color: '#e8ecf1',
  },
  headerWrap: {
    padding: '72px 20px 24px',
    background:
      'radial-gradient(1200px 400px at 50% -40px, rgba(80,140,255,0.15), transparent 60%)',
  },
  container: {
    width: '100%',
    maxWidth: 1120,
    margin: '0 auto',
  },
  breadcrumb: {
    color: '#9fb4d1',
    fontSize: 13,
    letterSpacing: '0.02em',
    marginBottom: 12,
  },
  titleRow: {
    display: 'flex',
    gap: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 36,
    fontWeight: 700,
    lineHeight: 1.15,
    margin: 0,
    letterSpacing: '-0.01em',
  },
  subtitle: {
    marginTop: 12,
    color: '#c7d4e7',
    fontSize: 16,
    maxWidth: 740,
  },
  ctas: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    marginTop: 16,
  },
  ctaPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '12px 16px',
    background:
      'linear-gradient(180deg, #3b82f6 0%, #2563eb 60%, #1d4ed8 100%)',
    color: '#fff',
    fontWeight: 600,
    borderRadius: 10,
    textDecoration: 'none',
    border: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '0 8px 24px rgba(37, 99, 235, 0.35), inset 0 1px 0 rgba(255,255,255,0.2)',
  },
  ctaSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '12px 16px',
    background: 'rgba(255,255,255,0.04)',
    color: '#e8ecf1',
    fontWeight: 600,
    borderRadius: 10,
    textDecoration: 'none',
    border: '1px solid rgba(255,255,255,0.1)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
  },
  contentWrap: {
    padding: '12px 20px 64px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 24,
    alignItems: 'start',
  },
  leftCol: {
    display: 'grid',
    gap: 16,
  },
  highlightCard: {
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
    borderRadius: 14,
    padding: 18,
    backdropFilter: 'blur(6px)',
  },
  highlightTitle: {
    margin: 0,
    fontSize: 16,
    fontWeight: 700,
  },
  highlightList: {
    margin: '10px 0 0',
    paddingLeft: 18,
    color: '#c7d4e7',
    lineHeight: 1.6,
    fontSize: 14,
  },
  caseRow: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 12,
    marginTop: 8,
  },
  caseItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: 10,
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(255,255,255,0.03)',
  },
  caseImg: {
    width: 44,
    height: 44,
    borderRadius: 8,
    objectFit: 'cover',
    border: '1px solid rgba(255,255,255,0.08)',
    backgroundColor: '#0b0f1a',
  },
  caseTextWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  caseTitle: {
    fontSize: 14,
    fontWeight: 700,
    margin: 0,
  },
  caseMeta: {
    fontSize: 13,
    color: '#9fb4d1',
    margin: 0,
  },
  viewWorkLink: {
    marginTop: 10,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    color: '#93c5fd',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: 14,
  },
  aside: {
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 14,
    overflow: 'hidden',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
  },
  asideImg: {
    width: '100%',
    height: 160,
    objectFit: 'cover',
    display: 'block',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    backgroundColor: '#0b0f1a',
  },
  asideBody: {
    padding: 16,
  },
  asideTitle: {
    margin: '0 0 8px',
    fontSize: 16,
    fontWeight: 700,
  },
  asideText: {
    margin: 0,
    color: '#c7d4e7',
    fontSize: 14,
    lineHeight: 1.6,
  },
  formWrap: {
    marginTop: 24,
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 16,
    padding: 16,
    background:
      'linear-gradient(180deg, rgba(10, 16, 30, 0.9), rgba(10, 16, 30, 0.8))',
    boxShadow: '0 8px 30px rgba(0,0,0,0.35)',
  },
  formHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 8,
  },
  formTitle: {
    margin: 0,
    fontSize: 18,
    fontWeight: 800,
    letterSpacing: '-0.01em',
  },
  formHint: {
    margin: 0,
    color: '#9fb4d1',
    fontSize: 13,
  },
  badgesRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
  },
  badge: {
    padding: '6px 10px',
    borderRadius: 999,
    border: '1px solid rgba(255,255,255,0.12)',
    color: '#c7d4e7',
    fontSize: 12,
    background: 'rgba(255,255,255,0.03)',
  },
};

const Contact: React.FC = () => {
  return (
    <main style={styles.page}>
      <header style={styles.headerWrap}>
        <div style={styles.container}>
          <div style={styles.breadcrumb}>Home / Contact</div>
          <div style={styles.titleRow}>
            <div>
              <h1 style={styles.title}>Let’s build your next web or AI product</h1>
              <p style={styles.subtitle}>
                Linked is a senior software and AI development studio. We scope clearly, iterate fast,
                and automate wherever possible. From secure portals and e‑commerce to AI copilots,
                dashboards, and complex workflows—we ship production‑ready software.
              </p>
              <div style={styles.ctas}>
                <a href="#contact-form" style={styles.ctaPrimary} aria-label="Book a free consult">
                  <span>Book a free consult</span>
                </a>
                <Link to="/quote" style={styles.ctaSecondary} aria-label="Request a quote">
                  <span>Request a quote</span>
                </Link>
                <Link to="/work" style={styles.ctaSecondary} aria-label="View portfolio">
                  <span>View portfolio</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section style={styles.contentWrap}>
        <div style={{ ...styles.container }}>
          <div style={styles.grid}>
            <div style={styles.leftCol}>
              <div style={styles.highlightCard}>
                <h3 style={styles.highlightTitle}>What we build</h3>
                <ul style={styles.highlightList}>
                  <li>Web apps, portals with secure login, and order workflows</li>
                  <li>E‑commerce shops with custom automations</li>
                  <li>AI assistants, copilots, and process automation</li>
                  <li>Dashboards, integrations, and internal tools</li>
                </ul>
              </div>

              <div style={styles.highlightCard}>
                <h3 style={styles.highlightTitle}>Why teams hire us</h3>
                <ul style={styles.highlightList}>
                  <li>Clear scopes and transparent milestones</li>
                  <li>Fast iteration with senior engineering</li>
                  <li>Automation‑first mindset to reduce toil</li>
                  <li>Banking‑grade delivery experience</li>
                </ul>
              </div>

              <div style={styles.highlightCard}>
                <h3 style={styles.highlightTitle}>Selected work</h3>
                <div style={styles.caseRow}>
                  <div style={styles.caseItem}>
                    <img
                      src="@@img_kaya_thumb@@"
                      alt="Kaya – AI Business Assistant"
                      style={styles.caseImg}
                      loading="lazy"
                    />
                    <div style={styles.caseTextWrap}>
                      <p style={styles.caseTitle}>Kaya – AI Business Assistant</p>
                      <p style={styles.caseMeta}>AI copilots and task automation</p>
                    </div>
                  </div>
                  <div style={styles.caseItem}>
                    <img
                      src="@@img_cia_thumb@@"
                      alt="Cashing in on AI"
                      style={styles.caseImg}
                      loading="lazy"
                    />
                    <div style={styles.caseTextWrap}>
                      <p style={styles.caseTitle}>Cashing in on AI</p>
                      <p style={styles.caseMeta}>Strategy, experiments, and content</p>
                    </div>
                  </div>
                  <div style={styles.caseItem}>
                    <img
                      src="@@img_nancy_thumb@@"
                      alt="Nancy Atanasova Dental Lab"
                      style={styles.caseImg}
                      loading="lazy"
                    />
                    <div style={styles.caseTextWrap}>
                      <p style={styles.caseTitle}>Nancy Atanasova Dental Lab</p>
                      <p style={styles.caseMeta}>Patient intake and ordering portal</p>
                    </div>
                  </div>
                </div>
                <Link to="/work" style={styles.viewWorkLink}>
                  <span>Explore full portfolio</span>
                  <span aria-hidden>→</span>
                </Link>
              </div>

              <div style={styles.aside}>
                <img
                  src="@@img_contact_banner@@"
                  alt="Senior engineers collaborating"
                  style={styles.asideImg}
                  loading="lazy"
                />
                <div style={styles.asideBody}>
                  <h4 style={styles.asideTitle}>Banking‑grade experience</h4>
                  <p style={styles.asideText}>
                    We’ve delivered credit origination and business‑process automation for
                    consumer lending. Security, reliability, and clarity come first.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div style={styles.formWrap} id="contact-form">
                <div style={styles.formHeader}>
                  <h2 style={styles.formTitle}>Tell us about your project</h2>
                  <p style={styles.formHint}>Average reply time: under 1 business day</p>
                </div>
                <div style={styles.badgesRow}>
                  <span style={styles.badge}>Web apps</span>
                  <span style={styles.badge}>E‑commerce</span>
                  <span style={styles.badge}>AI copilots</span>
                  <span style={styles.badge}>Automations</span>
                  <span style={styles.badge}>Integrations</span>
                </div>
                <div style={{ marginTop: 12 }}>
                  <ContactForm />
                </div>
              </div>

              <div style={{ marginTop: 16, display: 'grid', gap: 12 }}>
                <Link to="/quote" style={styles.ctaPrimary} aria-label="Request a quote">
                  <span>Request a quote</span>
                </Link>
                <Link to="/work" style={styles.ctaSecondary} aria-label="View portfolio">
                  <span>View portfolio</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;