import React from 'react';
import { Link } from 'react-router-dom';

const styles: { [k: string]: React.CSSProperties } = {
  page: {
    backgroundColor: '#0b0f1a',
    color: '#e6ecf2',
    minHeight: '100vh',
  },
  section: {
    padding: '64px 0',
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  heroWrap: {
    padding: '96px 0 48px',
  },
  heroInner: {
    textAlign: 'center' as const,
  },
  eyebrow: {
    display: 'inline-block',
    fontSize: '14px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: '#9fb3c8',
    border: '1px solid rgba(159,179,200,0.35)',
    borderRadius: '999px',
    padding: '6px 12px',
    marginBottom: '16px',
  },
  heroTitle: {
    fontSize: '44px',
    lineHeight: 1.12,
    margin: '12px 0 12px',
    fontWeight: 800,
    letterSpacing: '-0.02em',
  },
  heroSub: {
    fontSize: '18px',
    lineHeight: 1.6,
    color: '#c7d2dd',
    maxWidth: '820px',
    margin: '0 auto 28px',
  },
  ctas: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
  },
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    height: '44px',
    borderRadius: '10px',
    padding: '0 16px',
    fontWeight: 600,
    border: '1px solid transparent',
    textDecoration: 'none',
    color: '#0b0f1a',
    background: '#59f',
    boxShadow: '0 6px 16px rgba(85,153,255,0.25)',
  },
  btnSecondary: {
    background: 'transparent',
    color: '#e6ecf2',
    borderColor: 'rgba(159,179,200,0.35)',
  },
  btnTertiary: {
    background: 'rgba(255,255,255,0.06)',
    color: '#e6ecf2',
    borderColor: 'rgba(159,179,200,0.15)',
  },
  trustBar: {
    marginTop: '40px',
    opacity: 0.9,
  },
  trustRow: {
    display: 'flex',
    gap: '28px',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#9fb3c8',
    fontSize: '14px',
  },
  trustLogo: {
    height: '22px',
    width: 'auto',
    display: 'block',
    opacity: 0.9,
    filter: 'grayscale(1) brightness(1.2)',
  },
  split: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '28px',
  },
  splitCol: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(159,179,200,0.15)',
    borderRadius: '14px',
    padding: '20px',
  },
  h2: {
    fontSize: '28px',
    margin: '0 0 12px',
    letterSpacing: '-0.01em',
  },
  p: {
    margin: '0 0 12px',
    color: '#c7d2dd',
    lineHeight: 1.7,
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
    gap: '10px 18px',
    margin: '12px 0 0',
    padding: 0,
    listStyle: 'none',
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    color: '#d9e2ec',
  },
  check: {
    width: '18px',
    height: '18px',
    borderRadius: '4px',
    background: '#59f',
    color: '#0b0f1a',
    display: 'grid',
    placeItems: 'center',
    fontSize: '14px',
    fontWeight: 800,
    flexShrink: 0,
    marginTop: '2px',
  },
  steps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
    gap: '14px',
    marginTop: '12px',
  },
  stepCard: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(159,179,200,0.15)',
    borderRadius: '14px',
    padding: '16px',
    height: '100%',
  },
  stepNum: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg,#59f,#7af)',
    color: '#0b0f1a',
    fontWeight: 800,
    display: 'grid',
    placeItems: 'center',
    marginBottom: '8px',
    fontSize: '14px',
  },
  stepTitle: {
    margin: '4px 0 6px',
    fontWeight: 700,
  },
  workGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
    gap: '18px',
    marginTop: '12px',
  },
  card: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(159,179,200,0.15)',
    borderRadius: '14px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  cardImgWrap: {
    background: 'rgba(255,255,255,0.04)',
    borderBottom: '1px solid rgba(159,179,200,0.12)',
    aspectRatio: '16/9',
    width: '100%',
    overflow: 'hidden',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    display: 'block',
  },
  cardBody: {
    padding: '14px',
  },
  tagRow: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap' as const,
    marginTop: '8px',
  },
  tag: {
    fontSize: '12px',
    color: '#9fb3c8',
    border: '1px solid rgba(159,179,200,0.25)',
    borderRadius: '999px',
    padding: '2px 8px',
  },
  cardActions: {
    marginTop: '10px',
    display: 'flex',
    gap: '10px',
  },
  link: {
    color: '#9cc2ff',
    textDecoration: 'none',
    fontWeight: 600,
  },
  ctaBlock: {
    background: 'linear-gradient(180deg, rgba(85,153,255,0.12), rgba(85,153,255,0.06))',
    border: '1px solid rgba(159,179,200,0.25)',
    borderRadius: '16px',
    padding: '22px',
    textAlign: 'center' as const,
  },
  ctaTitle: {
    margin: '0 0 4px',
    fontSize: '24px',
    letterSpacing: '-0.01em',
  },
  ctaSub: {
    margin: '0 0 14px',
    color: '#c7d2dd',
  },
  // Responsive tweaks using container styles and flexible grids
  // The grids already wrap reasonably; ensure they collapse nicely using maxWidth checks with inline logic where needed
};

function ButtonLink(props: { to: string; children: React.ReactNode; variant?: 'primary' | 'secondary' | 'tertiary'; external?: boolean }) {
  const base = { ...styles.btn };
  if (props.variant === 'secondary') Object.assign(base, styles.btnSecondary);
  if (props.variant === 'tertiary') Object.assign(base, styles.btnTertiary);

  if (props.external) {
    return (
      <a href={props.to} target="_blank" rel="noopener noreferrer" style={base}>
        {props.children}
      </a>
    );
  }
  return (
    <Link to={props.to} style={base}>
      {props.children}
    </Link>
  );
}

export default function Home() {
  const services = [
    'Production-ready web apps',
    'Custom process automations',
    'E‑commerce shops',
    'AI‑powered services',
    'Marketing sites',
    'Client portals with secure login',
    'Order workflows',
    'Dashboards & reporting',
    '3rd‑party integrations',
  ];

  const work = [
    {
      key: 'kaya',
      title: 'Kaya – AI Business Assistant',
      blurb: 'Automates internal Q&A, SOP lookup, draft replies, and daily insight summaries.',
      img: '@@img_kaya_ai_assistant@@',
      tags: ['AI', 'Chat', 'Automation'],
      caseLink: '/work',
    },
    {
      key: 'cashing-in-on-ai',
      title: 'Cashing in on AI',
      blurb: 'Research, content, and prototypes that turn AI into bottom‑line results.',
      img: '@@img_ai_report_case@@',
      tags: ['Strategy', 'R&D', 'Prototyping'],
      caseLink: '/work',
    },
    {
      key: 'nancy-lab',
      title: 'Nancy Atanasova Dental Lab',
      blurb: 'Patient intake, case ordering, and status tracking for a modern dental lab.',
      img: 'https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762099326392-img-nancy-dental-lab.png',
      tags: ['E‑commerce', 'Workflow', 'Portal'],
      caseLink: 'https://nancyatanasova.com',
      external: true,
    },
  ];

  const logos = [
    { alt: 'OpenAI', src: '@@img_logo_openai@@' },
    { alt: 'Stripe', src: '@@img_logo_stripe@@' },
    { alt: 'Shopify', src: '@@img_logo_shopify@@' },
    { alt: 'AWS', src: '@@img_logo_aws@@' },
    { alt: 'Vercel', src: '@@img_logo_vercel@@' },
  ];

  // Responsive fallback: adjust columns counts using inline width checks
  const isNarrow = typeof window !== 'undefined' ? window.innerWidth < 900 : false;
  const isVeryNarrow = typeof window !== 'undefined' ? window.innerWidth < 700 : false;

  const dynamicSplit: React.CSSProperties = isNarrow
    ? { display: 'grid', gridTemplateColumns: '1fr', gap: '18px' }
    : styles.split;

  const dynamicServicesList: React.CSSProperties = isVeryNarrow
    ? { ...styles.list, gridTemplateColumns: '1fr' }
    : styles.list;

  const dynamicSteps: React.CSSProperties = isVeryNarrow
    ? { ...styles.steps, gridTemplateColumns: 'repeat(2, minmax(0,1fr))' }
    : isNarrow
    ? { ...styles.steps, gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }
    : styles.steps;

  const dynamicWork: React.CSSProperties = isVeryNarrow
    ? { ...styles.workGrid, gridTemplateColumns: '1fr' }
    : isNarrow
    ? { ...styles.workGrid, gridTemplateColumns: 'repeat(2, minmax(0,1fr))' }
    : styles.workGrid;

  return (
    <main style={styles.page}>
      <section style={{ ...styles.section, ...styles.heroWrap }}>
        <div style={{ ...styles.container, ...styles.heroInner }}>
          <div style={styles.eyebrow}>Linked — Senior Software & AI</div>
          <h1 style={styles.heroTitle}>We design and ship production‑ready web apps, automations, and AI‑powered services</h1>
          <p style={styles.heroSub}>
            If it runs in a browser or on the web, we build it—marketing sites, client portals with secure login, order workflows,
            dashboards, and 3rd‑party integrations. We’ve delivered banking‑grade solutions for credit origination and consumer lending.
          </p>
          <div style={styles.ctas}>
            <ButtonLink to="/contact">Book a free consult</ButtonLink>
            <ButtonLink to="/quote" variant="secondary">Request a quote</ButtonLink>
            <ButtonLink to="/work" variant="tertiary">View portfolio</ButtonLink>
          </div>

          <div style={{ ...styles.trustBar, ...styles.container }}>
            <div style={styles.trustRow}>
              {logos.map((l) => (
                <span key={l.alt} style={styles.trustItem}>
                  <img src={l.src} alt={l.alt} style={styles.trustLogo} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section} id="services">
        <div style={styles.container}>
          <div style={dynamicSplit}>
            <div style={styles.splitCol}>
              <h2 style={styles.h2}>What we build</h2>
              <p style={styles.p}>Senior engineering across full‑stack web and AI. We design, implement, and ship your roadmap.</p>
              <ul style={dynamicServicesList}>
                {services.map((s) => (
                  <li key={s} style={styles.listItem}>
                    <span style={styles.check}>✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '14px', display: 'flex', gap: '10px', flexWrap: 'wrap' as const }}>
                <ButtonLink to="/services" variant="tertiary">Explore services</ButtonLink>
                <ButtonLink to="/quote" variant="secondary">Get a fixed quote</ButtonLink>
              </div>
            </div>
            <div style={styles.splitCol}>
              <h2 style={styles.h2}>Why clients choose us</h2>
              <p style={styles.p}>
                Clear scopes, fast iteration, automation‑first mindset, and reliable senior engineering. We keep communication crisp and ship on a predictable cadence.
              </p>
              <div style={dynamicSteps}>
                {[
                  { n: '1', t: 'Scope', d: 'Define outcomes, constraints, and acceptance criteria.' },
                  { n: '2', t: 'Prototype', d: 'Clickable flows and technical spikes to de‑risk.' },
                  { n: '3', t: 'Build', d: 'Implementation with CI, tests, and instrumentation.' },
                  { n: '4', t: 'Ship & iterate', d: 'Launch to users and improve based on signal.' },
                ].map((st) => (
                  <div key={st.n} style={styles.stepCard}>
                    <div style={styles.stepNum}>{st.n}</div>
                    <div style={styles.stepTitle}>{st.t}</div>
                    <div style={{ ...styles.p, margin: 0 }}>{st.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section} id="work">
        <div style={styles.container}>
          <h2 style={styles.h2}>Selected work</h2>
          <p style={styles.p}>A few recent projects and case studies.</p>
          <div style={dynamicWork}>
            {work.map((w) => (
              <article key={w.key} style={styles.card}>
                <div style={styles.cardImgWrap}>
                  <img src={w.img} alt={w.title} style={styles.cardImg} />
                </div>
                <div style={styles.cardBody}>
                  <h3 style={{ margin: '0 0 6px', fontSize: '18px' }}>{w.title}</h3>
                  <p style={{ ...styles.p, margin: 0 }}>{w.blurb}</p>
                  <div style={styles.tagRow}>
                    {w.tags.map((t) => (
                      <span key={t} style={styles.tag}>{t}</span>
                    ))}
                  </div>
                  <div style={styles.cardActions}>
                    {w.external ? (
                      <a href={w.caseLink} target="_blank" rel="noopener noreferrer" style={styles.link}>Visit site</a>
                    ) : (
                      <Link to={w.caseLink} style={styles.link}>Case study</Link>
                    )}
                    <Link to="/work" style={{ ...styles.link, color: '#b2d1ff' }}>More projects</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: '18px' }}>
            <ButtonLink to="/work" variant="secondary">View full portfolio</ButtonLink>
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, paddingBottom: '80px' }}>
        <div style={{ ...styles.container, maxWidth: '900px' }}>
          <div style={styles.ctaBlock}>
            <h3 style={styles.ctaTitle}>Have a project in mind?</h3>
            <p style={styles.ctaSub}>Get a senior team on it this week. We’ll scope clearly and start fast.</p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' as const }}>
              <ButtonLink to="/contact">Book a free consult</ButtonLink>
              <ButtonLink to="/quote" variant="secondary">Request a quote</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}