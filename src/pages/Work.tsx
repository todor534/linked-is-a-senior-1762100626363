import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  outcomes?: string[];
  roles?: string[];
  tags?: string[];
  image: { src: string; alt: string };
  links?: { label: string; href: string; external?: boolean }[];
};

const projects: Project[] = [
  {
    id: 'kaya',
    title: 'Kaya – AI Business Assistant',
    subtitle: 'Context-aware answers, workflows, and integrations',
    description:
      'We designed and shipped an AI assistant that connects to internal knowledge, tools, and workflows. Kaya turns messy knowledge bases and SOPs into practical, on-brand answers, and executes routine tasks via secure actions.',
    outcomes: [
      'Automated support and internal Q&A with factual grounding',
      'Secure tool use with audit trails and role-based access',
      'Faster iteration cycles using evaluation harnesses and prompts',
    ],
    roles: ['Product design', 'LLM engineering', 'RAG pipelines', 'Full‑stack web'],
    tags: ['AI', 'RAG', 'Automation', 'Actions', 'Security'],
    image: { src: '@@img_work_kaya@@', alt: 'Kaya AI Business Assistant UI preview' },
    links: [
      { label: 'Book a free consult', href: '/contact' },
      { label: 'Request a quote', href: '/quote' },
    ],
  },
  {
    id: 'cashing-in-on-ai',
    title: 'Cashing in on AI',
    subtitle: 'From idea to working product',
    description:
      'A rapid initiative to validate, design, and deploy AI-powered features that drive measurable business value. We scoped opportunities, built internal tools and automations, and delivered a production-ready web experience.',
    outcomes: [
      'Weeks to working demo, not months',
      'Automation-first flows that reduce manual effort',
      'Clear quality gates, evals, and rollback plans',
    ],
    roles: ['Discovery', 'MVP build', 'Automation', 'Eval framework'],
    tags: ['AI', 'MVP', 'Automation', 'Web app'],
    image: { src: '@@img_work_ai_report@@', alt: 'AI initiative dashboard and metrics' },
    links: [
      { label: 'Request a quote', href: '/quote' },
      { label: 'Book a free consult', href: '/contact' },
    ],
  },
  {
    id: 'nancy-dental',
    title: 'Nancy Atanasova Dental Lab',
    subtitle: 'Patient intake and ordering on the web',
    description:
      'We modernized intake and ordering for a dental lab, enabling patients and clinics to submit cases and track orders online. Secure forms, status updates, and a streamlined back-office flow reduced friction for everyone.',
    outcomes: [
      'Patient intake completion up, emails and calls down',
      'Order accuracy improved with structured data',
      'Simple CMS updates for non-technical staff',
    ],
    roles: ['Design', 'Frontend', 'Secure forms', '3rd‑party integrations'],
    tags: ['E‑commerce', 'Client portal', 'Workflow', 'Security'],
    image: { src: '@@img_work_dental@@', alt: 'Dental lab intake and ordering interface' },
    links: [
      { label: 'View live site', href: 'https://nancyatanasova.com', external: true },
      { label: 'Request a quote', href: '/quote' },
    ],
  },
];

const styles: Record<string, React.CSSProperties> = {
  page: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    minHeight: '100dvh',
    color: '#0f172a',
    background: '#ffffff',
  },
  section: {
    padding: '64px 20px',
  },
  hero: {
    padding: '96px 20px 24px',
    background:
      'radial-gradient(1000px 400px at 20% 0%, rgba(59,130,246,0.08), transparent 60%), radial-gradient(800px 400px at 80% 0%, rgba(16,185,129,0.08), transparent 60%)',
    borderBottom: '1px solid #e5e7eb',
  },
  heroInner: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  eyebrow: {
    fontSize: 14,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#6b7280',
    marginBottom: 8,
  },
  title: {
    fontSize: 'clamp(28px, 3.6vw, 44px)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    margin: 0,
    color: '#0f172a',
  },
  subtitle: {
    marginTop: 12,
    fontSize: 'clamp(16px, 2vw, 20px)',
    color: '#334155',
    maxWidth: 900,
    lineHeight: 1.55,
  },
  ctaRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 20,
  },
  ctaPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '12px 16px',
    borderRadius: 10,
    border: '1px solid #2563eb',
    background: '#2563eb',
    color: '#ffffff',
    fontWeight: 600,
    textDecoration: 'none',
  },
  ctaSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '12px 16px',
    borderRadius: 10,
    border: '1px solid #cbd5e1',
    background: '#ffffff',
    color: '#0f172a',
    fontWeight: 600,
    textDecoration: 'none',
  },
  gridWrap: {
    padding: '32px 20px 80px',
  },
  gridInner: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  intro: {
    marginBottom: 24,
    color: '#475569',
    maxWidth: 900,
    lineHeight: 1.6,
    fontSize: 16,
  },
  trustNote: {
    padding: '12px 14px',
    border: '1px solid #e5e7eb',
    borderRadius: 12,
    background: '#f8fafc',
    color: '#0f172a',
    fontSize: 14,
    marginBottom: 28,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: 20,
  },
  card: {
    gridColumn: 'span 12',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 16,
    padding: 16,
    borderRadius: 16,
    border: '1px solid #e5e7eb',
    background: '#ffffff',
  },
  cardInner: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 16,
  },
  media: {
    width: '100%',
    aspectRatio: '16 / 9',
    overflow: 'hidden',
    borderRadius: 12,
    background: '#f1f5f9',
    border: '1px solid #e5e7eb',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  cardTitle: {
    margin: 0,
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: '-0.01em',
    color: '#0f172a',
  },
  cardSub: {
    margin: 0,
    fontSize: 16,
    color: '#475569',
  },
  chipRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
  chip: {
    fontSize: 12,
    color: '#0f172a',
    background: '#f1f5f9',
    border: '1px solid #e2e8f0',
    padding: '6px 10px',
    borderRadius: 999,
  },
  body: {
    color: '#334155',
    lineHeight: 1.65,
  },
  list: {
    margin: '8px 0 0 18px',
    color: '#0f172a',
  },
  metaRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
  },
  meta: {
    fontSize: 12,
    color: '#475569',
    background: '#f8fafc',
    border: '1px solid #e5e7eb',
    padding: '6px 10px',
    borderRadius: 8,
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
  },
  actionLink: {
    textDecoration: 'none',
    color: '#2563eb',
    fontWeight: 600,
    border: '1px solid #bfdbfe',
    background: '#eff6ff',
    padding: '8px 12px',
    borderRadius: 10,
  },
  callout: {
    marginTop: 48,
    padding: 20,
    borderRadius: 16,
    border: '1px solid #e5e7eb',
    background:
      'linear-gradient(180deg, rgba(59,130,246,0.06), rgba(59,130,246,0.0) 60%)',
  },
  calloutRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    flexWrap: 'wrap',
  },
  calloutText: {
    fontSize: 18,
    color: '#0f172a',
    margin: 0,
  },
  calloutActions: {
    display: 'flex',
    gap: 10,
  },
  small: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 6,
  },
  // Responsive overrides
  '@media(min-width: 800px)': {},
};

export default function Work() {
  useEffect(() => {
    document.title = 'Selected Work – Linked';
  }, []);

  return (
    <main style={styles.page}>
      <section style={styles.hero} aria-labelledby="work-hero-title">
        <div style={styles.heroInner}>
          <div style={styles.eyebrow}>Selected work</div>
          <h1 id="work-hero-title" style={styles.title}>
            Real products. Real outcomes.
          </h1>
          <p style={styles.subtitle}>
            We design and ship production‑ready web apps, automations, e‑commerce, and AI‑powered services.
            Banking‑grade experience includes credit origination and business‑process automation for consumer lending.
          </p>
          <div style={styles.ctaRow}>
            <Link to="/contact" style={styles.ctaPrimary} aria-label="Book a free consult">
              Book a free consult
            </Link>
            <Link to="/quote" style={styles.ctaSecondary} aria-label="Request a quote">
              Request a quote
            </Link>
          </div>
        </div>
      </section>

      <section style={styles.gridWrap}>
        <div style={styles.gridInner}>
          <p style={styles.intro}>
            Why teams choose us: clear scopes, fast iteration, automation‑first mindset, and reliable senior engineering.
            If it runs in a browser or on the web, we build it—marketing sites, client portals, order workflows,
            dashboards, and third‑party integrations.
          </p>
          <div role="note" style={styles.trustNote}>
            Built for production: accessibility, performance budgets, observability, and secure data handling are standard.
          </div>

          <div style={styles.grid} aria-label="Case studies">
            {projects.map((p) => (
              <article key={p.id} style={styles.card} aria-labelledby={`${p.id}-title`}>
                <div style={styles.cardInner}>
                  <div style={styles.media}>
                    <img src={p.image.src} alt={p.image.alt} style={styles.img} />
                  </div>
                  <header style={styles.cardHeader}>
                    <h2 id={`${p.id}-title`} style={styles.cardTitle}>
                      {p.title}
                    </h2>
                    {p.subtitle && <p style={styles.cardSub}>{p.subtitle}</p>}
                    {p.tags && p.tags.length > 0 && (
                      <div style={styles.chipRow} aria-label="Tags">
                        {p.tags.map((t) => (
                          <span key={t} style={styles.chip}>
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </header>
                  <div style={styles.body}>
                    <p>{p.description}</p>
                    {p.outcomes && p.outcomes.length > 0 && (
                      <ul style={styles.list}>
                        {p.outcomes.map((o, i) => (
                          <li key={i}>{o}</li>
                        ))}
                      </ul>
                    )}
                    {p.roles && p.roles.length > 0 && (
                      <div style={styles.metaRow}>
                        {p.roles.map((r) => (
                          <span key={r} style={styles.meta}>
                            {r}
                          </span>
                        ))}
                      </div>
                    )}
                    {p.links && p.links.length > 0 && (
                      <div style={styles.actions}>
                        {p.links.map((l, i) =>
                          l.external ? (
                            <a
                              key={i}
                              href={l.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={styles.actionLink}
                            >
                              {l.label}
                            </a>
                          ) : (
                            <Link key={i} to={l.href} style={styles.actionLink}>
                              {l.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={styles.callout} aria-label="Get started">
            <div style={styles.calloutRow}>
              <div>
                <p style={styles.calloutText}>Have a project in mind? Let’s scope it together.</p>
                <p style={styles.small}>
                  We’ll review requirements, outline options, and provide timelines and budget ranges.
                </p>
              </div>
              <div style={styles.calloutActions}>
                <Link to="/contact" style={styles.ctaPrimary}>
                  Book a free consult
                </Link>
                <Link to="/quote" style={styles.ctaSecondary}>
                  Request a quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}