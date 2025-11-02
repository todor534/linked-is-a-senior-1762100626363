import React from 'react';
import { Link } from 'react-router-dom';
import ServicesGrid from '../components/ServicesGrid';
import WorkHighlights from '../components/WorkHighlights';
import ProcessSteps from '../components/ProcessSteps';
import TrustBar from '../components/TrustBar';

const styles: { [k: string]: React.CSSProperties } = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    gap: 48,
  },
  hero: {
    background:
      'radial-gradient(1200px 400px at 50% -200px, rgba(99,102,241,0.08), rgba(99,102,241,0) 60%), linear-gradient(180deg, rgba(17,24,39,0.02), rgba(17,24,39,0))',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '64px 20px',
  },
  heroInner: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: 32,
  },
  heading: {
    fontSize: 40,
    lineHeight: 1.1,
    margin: 0,
    letterSpacing: -0.5,
  },
  subheading: {
    marginTop: 12,
    color: '#4b5563',
    fontSize: 18,
  },
  badgesRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 16,
  },
  badge: {
    fontSize: 12,
    padding: '6px 10px',
    borderRadius: 999,
    border: '1px solid rgba(0,0,0,0.08)',
    background: '#fff',
    color: '#111827',
  },
  heroCard: {
    background: '#fff',
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: 12,
    padding: 20,
    boxShadow: '0 6px 24px rgba(17,24,39,0.06)',
    alignSelf: 'start',
  },
  heroCardTitle: {
    margin: 0,
    fontSize: 18,
  },
  heroList: {
    margin: '12px 0 0',
    paddingLeft: 18,
    color: '#374151',
    lineHeight: 1.6,
  },
  ctas: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    marginTop: 20,
  },
  btnPrimary: {
    background: '#111827',
    color: '#fff',
    padding: '12px 16px',
    borderRadius: 10,
    textDecoration: 'none',
    fontWeight: 600,
    border: '1px solid #111827',
  },
  btnSecondary: {
    background: '#fff',
    color: '#111827',
    padding: '12px 16px',
    borderRadius: 10,
    textDecoration: 'none',
    fontWeight: 600,
    border: '1px solid rgba(0,0,0,0.12)',
  },
  section: {
    padding: '8px 20px 0',
    maxWidth: 1200,
    margin: '0 auto',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 28,
    margin: 0,
    letterSpacing: -0.2,
  },
  sectionSubtitle: {
    color: '#4b5563',
    marginTop: 6,
    fontSize: 16,
  },
  split: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 24,
    marginTop: 8,
  },
  card: {
    background: '#fff',
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: 12,
    padding: 20,
  },
  list: {
    margin: '8px 0 0',
    paddingLeft: 18,
    color: '#374151',
    lineHeight: 1.7,
  },
  tear: {
    height: 1,
    background:
      'linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0.12), rgba(0,0,0,0))',
    margin: '0 auto',
    width: '92%',
  },
  ctaBand: {
    background:
      'linear-gradient(180deg, rgba(99,102,241,0.05), rgba(99,102,241,0.02))',
    borderTop: '1px solid rgba(0,0,0,0.06)',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
  },
  ctaBandInner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '36px 20px',
    display: 'grid',
    gridTemplateColumns: '2fr 1.2fr',
    gap: 20,
    alignItems: 'center',
  },
  ctaBandTitle: {
    margin: 0,
    fontSize: 24,
  },
  ctaBandText: {
    color: '#4b5563',
    marginTop: 6,
  },
  ctaBandActions: {
    justifySelf: 'end',
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
  },
  tinyNote: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 8,
  },
  responsiveOnly: {
    display: 'none',
  },
  '@mediaSmall': {},
};

// Simple responsive adjustments without a CSS file
const useResponsive = () => {
  const [isSmall, setSmall] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 860px)');
    const onChange = () => setSmall(mq.matches);
    onChange();
    mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', onChange) : mq.removeListener(onChange);
    };
  }, []);
  return { isSmall };
};

export default function Services() {
  const { isSmall } = useResponsive();

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={{ ...styles.container, paddingBottom: 48 }}>
          <div style={{ ...styles.heroInner, gridTemplateColumns: isSmall ? '1fr' : styles.heroInner.gridTemplateColumns }}>
            <div>
              <h1 style={styles.heading}>Senior software and AI development services</h1>
              <p style={styles.subheading}>
                We design and ship production-ready web apps, process automations, e‑commerce, and AI‑powered services.
                If it runs in a browser or on the web, we build it—marketing sites, secure client portals, order workflows,
                dashboards, and 3rd‑party integrations.
              </p>
              <div style={styles.badgesRow}>
                <span style={styles.badge}>Automation‑first</span>
                <span style={styles.badge}>Fast iteration</span>
                <span style={styles.badge}>Clear scopes</span>
                <span style={styles.badge}>Senior engineering</span>
              </div>
              <div style={styles.ctas}>
                <Link to="/contact" style={styles.btnPrimary}>Book a free consult</Link>
                <Link to="/quote" style={styles.btnSecondary}>Request a quote</Link>
                <Link to="/work" style={styles.btnSecondary}>View portfolio</Link>
              </div>
            </div>
            <aside style={styles.heroCard}>
              <h3 style={styles.heroCardTitle}>What we deliver</h3>
              <ul style={styles.heroList}>
                <li>Production web apps and portals with secure login</li>
                <li>AI assistants, search, and automation workflows</li>
                <li>E‑commerce and subscription billing</li>
                <li>Dashboards and data integrations</li>
                <li>Banking‑grade solutions experience</li>
              </ul>
              <p style={styles.tinyNote}>
                Selected work: Kaya – AI Business Assistant, Cashing in on AI, and Nancy Atanasova Dental Lab (patient intake and ordering).
              </p>
            </aside>
          </div>
        </div>
      </section>

      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <div>
            <h2 style={styles.sectionTitle}>Services</h2>
            <p style={styles.sectionSubtitle}>End‑to‑end delivery—from scoping and UX to deployment, monitoring, and iteration.</p>
          </div>
          {!isSmall && (
            <div>
              <Link to="/quote" style={styles.btnSecondary}>Get a tailored estimate</Link>
            </div>
          )}
        </div>
        <ServicesGrid />
      </div>

      <div style={styles.tear} />

      <div style={styles.section}>
        <div style={styles.split}>
          <div style={styles.card}>
            <h3 style={{ margin: 0, fontSize: 18 }}>What we build</h3>
            <ul style={styles.list}>
              <li>Client portals, onboarding, verification, and order workflows</li>
              <li>AI copilots for teams: knowledge search, document Q&A, and agents</li>
              <li>Marketing sites and high‑performance landing pages</li>
              <li>E‑commerce stores with custom logic, subscriptions, and fulfillment</li>
              <li>Dashboards, analytics, and internal tooling</li>
              <li>3rd‑party and data integrations (payments, auth, CRMs, ERPs)</li>
            </ul>
          </div>
          <div style={styles.card}>
            <h3 style={{ margin: 0, fontSize: 18 }}>Why clients choose Linked</h3>
            <ul style={styles.list}>
              <li>Clear scopes and proactive, senior communication</li>
              <li>Fast iteration with visible progress every week</li>
              <li>Automation‑first mindset to reduce manual ops and cost</li>
              <li>Battle‑tested engineering and deployment practices</li>
              <li>Banking‑grade delivery experience in lending automation</li>
              <li>Long‑term reliability and maintainability baked in</li>
            </ul>
          </div>
        </div>
      </div>

      <TrustBar />

      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <div>
            <h2 style={styles.sectionTitle}>Selected work</h2>
            <p style={styles.sectionSubtitle}>A snapshot of outcomes we’ve delivered across AI, automation, and web apps.</p>
          </div>
          {!isSmall && <Link to="/work" style={styles.btnSecondary}>Explore portfolio</Link>}
        </div>
        <WorkHighlights />
      </div>

      <div style={styles.tear} />

      <div style={styles.section}>
        <div style={{ ...styles.sectionHeader, marginBottom: 0 }}>
          <div>
            <h2 style={styles.sectionTitle}>How we work</h2>
            <p style={styles.sectionSubtitle}>Lean, collaborative, and focused on shipping real value quickly.</p>
          </div>
        </div>
        <div style={{ marginTop: 8 }}>
          <ProcessSteps />
        </div>
      </div>

      <section style={styles.ctaBand}>
        <div
          style={{
            ...styles.ctaBandInner,
            gridTemplateColumns: isSmall ? '1fr' : styles.ctaBandInner.gridTemplateColumns,
          }}
        >
          <div>
            <h3 style={styles.ctaBandTitle}>Ready to accelerate your roadmap?</h3>
            <p style={styles.ctaBandText}>
              Tell us about your goals. We’ll scope clearly, propose a plan, and get you shipping in days—not months.
            </p>
          </div>
          <div style={{ ...styles.ctaBandActions, justifySelf: isSmall ? 'start' : 'end' }}>
            <Link to="/contact" style={styles.btnPrimary}>Book a free consult</Link>
            <Link to="/quote" style={styles.btnSecondary}>Request a quote</Link>
            <Link to="/work" style={styles.btnSecondary}>View portfolio</Link>
          </div>
        </div>
      </section>

      <div style={{ ...styles.section, paddingBottom: 48 }}>
        <p style={{ ...styles.tinyNote, textAlign: 'center' }}>
          Prefer email? Reach us via the contact form—attach specs, timelines, or references and we’ll respond promptly.
        </p>
      </div>
    </main>
  );
}