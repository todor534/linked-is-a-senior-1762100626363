import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuoteForm from '../components/QuoteForm';

const styles: Record<string, React.CSSProperties> = {
  page: {
    background: '#0b0d12',
    color: '#e6e9ef',
    minHeight: '100vh',
  },
  container: {
    maxWidth: 1160,
    margin: '0 auto',
    padding: '48px 20px 80px',
  },
  headerWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 28,
    flexWrap: 'wrap',
    marginBottom: 28,
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#8aa1ff',
    fontWeight: 700,
  },
  title: {
    fontSize: 40,
    lineHeight: 1.15,
    margin: '8px 0 12px',
    fontWeight: 800,
  },
  lead: {
    fontSize: 18,
    lineHeight: 1.6,
    color: '#c7cfdb',
    margin: 0,
  },
  hero: {
    display: 'flex',
    gap: 32,
    alignItems: 'stretch',
    flexWrap: 'wrap',
    marginTop: 28,
  },
  colForm: {
    flex: '1 1 520px',
    minWidth: 320,
  },
  colAside: {
    flex: '1 1 360px',
    minWidth: 280,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  card: {
    background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 16,
    boxShadow: '0 10px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
    padding: 20,
  },
  cardDense: {
    background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 16,
    boxShadow: '0 10px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
    padding: 16,
  },
  asideBlock: {
    display: 'flex',
    gap: 14,
    alignItems: 'flex-start',
  },
  asideIconWrap: {
    flex: '0 0 36px',
    height: 36,
    width: 36,
    borderRadius: 8,
    background: 'rgba(138,161,255,0.12)',
    border: '1px solid rgba(138,161,255,0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#8aa1ff',
    fontWeight: 800,
    fontSize: 16,
  },
  asideTitle: {
    margin: 0,
    fontSize: 16,
    fontWeight: 700,
  },
  asideText: {
    margin: '6px 0 0',
    fontSize: 14,
    color: '#c7cfdb',
    lineHeight: 1.6,
  },
  list: {
    margin: '10px 0 0',
    paddingLeft: 18,
    color: '#c7cfdb',
    fontSize: 14,
    lineHeight: 1.7,
  },
  ctas: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    marginTop: 16,
  },
  primaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 16px',
    borderRadius: 10,
    background: 'linear-gradient(180deg, #6ea3ff, #4a7aff)',
    color: '#0b0d12',
    fontWeight: 800,
    fontSize: 14,
    textDecoration: 'none',
    border: '1px solid rgba(255,255,255,0.12)',
    boxShadow: '0 6px 18px rgba(52,101,255,0.35)',
  },
  ghostBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 16px',
    borderRadius: 10,
    background: 'transparent',
    color: '#c7cfdb',
    fontWeight: 700,
    fontSize: 14,
    textDecoration: 'none',
    border: '1px solid rgba(255,255,255,0.14)',
  },
  badgeRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    flexWrap: 'wrap',
    marginTop: 8,
  },
  badge: {
    fontSize: 12,
    color: '#a7b4c9',
    padding: '6px 10px',
    borderRadius: 999,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  heroMedia: {
    width: '100%',
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,0.08)',
  },
  small: {
    fontSize: 12,
    color: '#9aacbf',
    marginTop: 8,
  },
};

export default function Quote() {
  useEffect(() => {
    document.title = 'Request a Quote • Linked Studio';
  }, []);

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <div style={styles.headerWrap}>
          <div style={{ flex: '1 1 auto', minWidth: 260 }}>
            <div style={styles.eyebrow}>Request a quote</div>
            <h1 style={styles.title}>Senior web & AI engineering, on-demand</h1>
            <p style={styles.lead}>
              Tell us what you need—web apps, automations, e‑commerce, or AI services.
              We deliver clear scopes, fast iteration, and production-grade results.
            </p>
            <div style={styles.ctas}>
              <a href="#quote-form" style={styles.primaryBtn}>Request a quote</a>
              <Link to="/work" style={styles.ghostBtn}>View portfolio</Link>
              <Link to="/contact" style={styles.ghostBtn}>Book a free consult</Link>
            </div>
            <div style={styles.badgeRow}>
              <span style={styles.badge}>Banking‑grade delivery</span>
              <span style={styles.badge}>Automation‑first mindset</span>
              <span style={styles.badge}>Secure client portals</span>
              <span style={styles.badge}>3rd‑party integrations</span>
            </div>
          </div>
          <div style={{ flex: '0 1 380px', minWidth: 260 }}>
            <img
              src="@@img_quote_hero@@"
              alt="Product mockups and dashboards"
              style={styles.heroMedia}
              loading="lazy"
            />
            <div style={styles.small}>
              Selected: Kaya (AI business assistant), credit origination workflows, and Nancy Atanasova Dental Lab.
            </div>
          </div>
        </div>

        <section style={styles.hero}>
          <div style={styles.colForm}>
            <div id="quote-form" style={styles.card}>
              <QuoteForm />
            </div>
          </div>

          <aside style={styles.colAside}>
            <div style={styles.cardDense}>
              <div style={styles.asideBlock}>
                <div style={styles.asideIconWrap}>1</div>
                <div>
                  <h3 style={styles.asideTitle}>Discovery → Scope</h3>
                  <p style={styles.asideText}>
                    Share goals, users, and constraints. We translate this into a clear scope, milestones,
                    and acceptance criteria so you know exactly what you’ll get.
                  </p>
                </div>
              </div>
              <div style={styles.asideBlock}>
                <div style={styles.asideIconWrap}>2</div>
                <div>
                  <h3 style={styles.asideTitle}>Build → Iterate</h3>
                  <p style={styles.asideText}>
                    Short cycles with working software in each iteration. We automate wherever possible—CI/CD,
                    data flows, and ops—so delivery is fast and stable.
                  </p>
                </div>
              </div>
              <div style={styles.asideBlock}>
                <div style={styles.asideIconWrap}>3</div>
                <div>
                  <h3 style={styles.asideTitle}>Launch → Support</h3>
                  <p style={styles.asideText}>
                    Production-ready deployments, training, and post-launch support. We can continue on retainer
                    for improvements or hand off cleanly to your team.
                  </p>
                </div>
              </div>
            </div>

            <div style={styles.cardDense}>
              <h3 style={styles.asideTitle}>What we build</h3>
              <ul style={styles.list}>
                <li>Web apps and secure client portals</li>
                <li>Custom process automations and integrations</li>
                <li>E‑commerce stores and order workflows</li>
                <li>AI assistants, data pipelines, and internal tools</li>
                <li>Dashboards, reporting, and admin consoles</li>
              </ul>
            </div>

            <div style={styles.cardDense}>
              <h3 style={styles.asideTitle}>Timelines & budgets</h3>
              <ul style={styles.list}>
                <li>Discovery & scoping: 2–5 days</li>
                <li>MVPs: 2–6 weeks; Full builds: 6–12+ weeks</li>
                <li>Pricing: fixed per scope or sprint‑based</li>
                <li>Includes CI/CD, QA, and documentation</li>
              </ul>
            </div>

            <div style={styles.cardDense}>
              <h3 style={styles.asideTitle}>Recent highlights</h3>
              <ul style={styles.list}>
                <li>Credit origination and automation for consumer lending</li>
                <li>Kaya — AI business assistant</li>
                <li>Nancy Atanasova Dental Lab — patient intake & ordering</li>
              </ul>
              <div style={styles.ctas}>
                <Link to="/work" style={styles.ghostBtn}>See case studies</Link>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}