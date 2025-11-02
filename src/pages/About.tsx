import React from 'react';
import { Link } from 'react-router-dom';

const styles: { [k: string]: React.CSSProperties } = {
  page: {
    maxWidth: 1160,
    margin: '0 auto',
    padding: '48px 20px 96px',
  },
  kicker: {
    display: 'inline-block',
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    fontWeight: 600,
    opacity: 0.75,
    marginBottom: 8,
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
    flexWrap: 'wrap',
    marginBottom: 40,
  },
  heroCopy: {
    flex: '1 1 420px',
    minWidth: 280,
  },
  h1: {
    fontSize: 40,
    lineHeight: 1.15,
    margin: '4px 0 12px',
    fontWeight: 800,
    letterSpacing: -0.3,
  },
  lead: {
    fontSize: 18,
    lineHeight: 1.6,
    opacity: 0.9,
    marginBottom: 20,
  },
  ctas: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
  },
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 16px',
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 14,
    textDecoration: 'none',
    transition: 'transform 0.06s ease',
    border: '1px solid rgba(120,120,120,0.2)',
  },
  btnPrimary: {
    background: '#0C67F4',
    color: '#fff',
    border: '1px solid #0C67F4',
  },
  btnSecondary: {
    background: 'transparent',
    color: 'inherit',
  },
  heroMedia: {
    flex: '1 1 420px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 280,
  },
  heroImg: {
    width: '100%',
    maxWidth: 520,
    height: 'auto',
    borderRadius: 14,
    border: '1px solid rgba(120,120,120,0.2)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 16,
    marginTop: 28,
  },
  statCard: {
    border: '1px solid rgba(120,120,120,0.2)',
    borderRadius: 12,
    padding: 16,
  },
  statLabel: {
    fontSize: 12,
    opacity: 0.7,
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 700,
  },
  section: {
    marginTop: 56,
  },
  h2: {
    fontSize: 28,
    lineHeight: 1.25,
    margin: '0 0 12px',
    fontWeight: 800,
    letterSpacing: -0.2,
  },
  paragraph: {
    fontSize: 16,
    opacity: 0.9,
    maxWidth: 860,
    lineHeight: 1.65,
    margin: '8px 0 0',
  },
  list: {
    margin: '10px 0 0',
    paddingLeft: 18,
    lineHeight: 1.7,
  },
  workGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: 16,
    marginTop: 12,
  },
  workCard: {
    border: '1px solid rgba(120,120,120,0.2)',
    borderRadius: 12,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  workThumb: {
    width: '100%',
    height: 160,
    objectFit: 'cover',
  },
  workBody: {
    padding: 14,
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    flex: 1,
  },
  workTitle: {
    fontWeight: 700,
    fontSize: 16,
    margin: 0,
  },
  workMeta: {
    fontSize: 13,
    opacity: 0.75,
  },
  linkInline: {
    color: '#0C67F4',
    textDecoration: 'none',
    fontWeight: 600,
  },
  footerCTA: {
    marginTop: 48,
    borderTop: '1px solid rgba(120,120,120,0.2)',
    paddingTop: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    flexWrap: 'wrap',
  },
  footerCTAText: {
    flex: '1 1 420px',
    minWidth: 280,
  },
};

const About: React.FC = () => {
  return (
    <main style={styles.page}>
      <div style={styles.hero}>
        <div style={styles.heroCopy}>
          <span style={styles.kicker}>About Linked</span>
          <h1 style={styles.h1}>Senior software and AI development studio</h1>
          <p style={styles.lead}>
            We design and ship production‑ready web apps, custom process automations, e‑commerce shops, and AI‑powered services.
            If it runs in a browser or on the web, we build it—marketing sites, secure client portals, order workflows,
            dashboards, and seamless 3rd‑party integrations.
          </p>
          <div style={styles.ctas}>
            <Link to="/contact" style={{ ...styles.btn, ...styles.btnSecondary }} aria-label="Book a free consult">
              Book a free consult
            </Link>
            <Link to="/quote" style={{ ...styles.btn, ...styles.btnPrimary }} aria-label="Request a quote">
              Request a quote
            </Link>
            <Link to="/work" style={{ ...styles.btn, ...styles.btnSecondary }} aria-label="View portfolio">
              View portfolio
            </Link>
          </div>
          <div style={styles.stats}>
            <div style={styles.statCard}>
              <div style={styles.statLabel}>Track record</div>
              <div style={styles.statValue}>Banking‑grade solutions delivered</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statLabel}>Engineering</div>
              <div style={styles.statValue}>Senior‑only team, fast iteration</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statLabel}>Approach</div>
              <div style={styles.statValue}>Automation‑first, production‑ready</div>
            </div>
          </div>
        </div>
        <div style={styles.heroMedia}>
          <img
            src="@@img_about_hero@@"
            alt="Linked studio — building web apps and AI services"
            loading="lazy"
            style={styles.heroImg}
          />
        </div>
      </div>

      <section style={styles.section}>
        <h2 style={styles.h2}>Why clients choose us</h2>
        <p style={styles.paragraph}>
          Clear scopes, rapid feedback loops, and reliable delivery. We partner with founders and teams that need
          working software in weeks—not months—and want a senior crew that anticipates edge cases and automates the boring parts.
        </p>
        <ul style={styles.list}>
          <li>Production‑ready from day one: testing, observability, and deployment included</li>
          <li>Automation‑first mindset that reduces manual ops and human error</li>
          <li>Clear scopes and weekly iterations with demoable progress</li>
          <li>Secure by default: authentication, authorization, and data privacy baked in</li>
          <li>Reliable senior engineering with pragmatic architecture decisions</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Selected work</h2>
        <p style={styles.paragraph}>
          We’ve delivered banking‑grade credit origination and business‑process automation for consumer lending, and shipped products end‑to‑end for
          startups and established businesses alike. Explore more in our {' '}
          <Link to="/work" style={styles.linkInline}>portfolio</Link>.
        </p>

        <div style={styles.workGrid}>
          <article style={styles.workCard}>
            <img
              src="@@img_work_kaya@@"
              alt="Kaya — AI Business Assistant"
              loading="lazy"
              style={styles.workThumb}
            />
            <div style={styles.workBody}>
              <h3 style={styles.workTitle}>Kaya — AI Business Assistant</h3>
              <p style={styles.workMeta}>
                AI copilots for operations: intake, routing, task automation, and knowledge search with human‑in‑the‑loop.
              </p>
              <Link to="/work" style={styles.linkInline} aria-label="View Kaya case study">
                View case study →
              </Link>
            </div>
          </article>

          <article style={styles.workCard}>
            <img
              src="@@img_work_cashing_in_on_ai@@"
              alt="Cashing in on AI"
              loading="lazy"
              style={styles.workThumb}
            />
            <div style={styles.workBody}>
              <h3 style={styles.workTitle}>Cashing in on AI</h3>
              <p style={styles.workMeta}>
                Strategy to shipped: experiments, prompting systems, evaluation, and integration into existing workflows.
              </p>
              <Link to="/work" style={styles.linkInline} aria-label="View Cashing in on AI case study">
                View case study →
              </Link>
            </div>
          </article>

          <article style={styles.workCard}>
            <img
              src="@@img_work_nancy_atanasova_lab@@"
              alt="Nancy Atanasova Dental Lab website and ordering system"
              loading="lazy"
              style={styles.workThumb}
            />
            <div style={styles.workBody}>
              <h3 style={styles.workTitle}>Nancy Atanasova Dental Lab</h3>
              <p style={styles.workMeta}>
                Marketing site with patient intake and ordering workflow. Live at{' '}
                <a href="https://nancyatanasova.com" target="_blank" rel="noopener noreferrer" style={styles.linkInline}>
                  nancyatanasova.com
                </a>.
              </p>
              <Link to="/work" style={styles.linkInline} aria-label="View dental lab project">
                View project →
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>How we work</h2>
        <p style={styles.paragraph}>
          We start with a focused scope and a short discovery to map user journeys and system constraints.
          Then we iterate in tight loops—scoping, building, and shipping real increments weekly.
          You get predictable progress, fewer surprises, and a partner who cares about outcomes.
        </p>
        <ul style={styles.list}>
          <li>Discovery and scope: align on goals, constraints, and success metrics</li>
          <li>Implementation sprints: ship increments weekly with demo and feedback</li>
          <li>Automation and integrations: connect your tools and reduce manual steps</li>
          <li>Hardening: auth, audit, testing, and monitoring before go‑live</li>
          <li>Handover or ongoing partnership: docs, training, and support</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Team</h2>
        <p style={styles.paragraph}>
          Senior software and AI engineers with a background in product, DevOps, and data. We’ve built and operated systems
          in regulated environments and high‑throughput products. We keep teams lean and communication direct.
        </p>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', marginTop: 12 }}>
          <img
            src="@@img_team_group@@"
            alt="Linked team"
            loading="lazy"
            style={{ width: '100%', maxWidth: 520, height: 'auto', borderRadius: 12, border: '1px solid rgba(120,120,120,0.2)' }}
          />
          <img
            src="@@img_team_workspace@@"
            alt="Workspace"
            loading="lazy"
            style={{ width: '100%', maxWidth: 360, height: 'auto', borderRadius: 12, border: '1px solid rgba(120,120,120,0.2)' }}
          />
        </div>
      </section>

      <div style={styles.footerCTA}>
        <div style={styles.footerCTAText}>
          <h2 style={styles.h2}>Have a project in mind?</h2>
          <p style={styles.paragraph}>
            Let’s scope it together and get you a clear timeline and price. We can start with a free consult or jump straight to a quote.
          </p>
        </div>
        <div style={styles.ctas}>
          <Link to="/contact" style={{ ...styles.btn, ...styles.btnSecondary }} aria-label="Book a free consult">
            Book a free consult
          </Link>
          <Link to="/quote" style={{ ...styles.btn, ...styles.btnPrimary }} aria-label="Request a quote">
            Request a quote
          </Link>
          <Link to="/work" style={{ ...styles.btn, ...styles.btnSecondary }} aria-label="View portfolio">
            View portfolio
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;