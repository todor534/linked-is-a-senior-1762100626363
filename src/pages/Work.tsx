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
    subtitle: 'Context-aware automation and intelligent task routing',
    description:
      'We designed and shipped an AI assistant that transforms internal knowledge into actionable insights. Kaya automates support queries, routes tasks intelligently, and executes operations with secure, audited workflows—reducing response times from hours to seconds.',
    outcomes: [
      'Automated 70%+ of routine support queries with factual, on-brand responses',
      'Secure tool execution with comprehensive audit trails and role-based access',
      'Faster iteration cycles using evaluation frameworks and continuous prompting improvements',
    ],
    roles: ['Product design', 'LLM engineering', 'RAG pipelines', 'Full‑stack web'],
    tags: ['AI', 'RAG', 'Automation', 'Security'],
    image: { src: '@@img_work_kaya@@', alt: 'Kaya AI Business Assistant dashboard' },
    links: [
      { label: 'Book consult', href: '/contact' },
      { label: 'Get quote', href: '/quote' },
    ],
  },
  {
    id: 'cashing-in-on-ai',
    title: 'Cashing in on AI',
    subtitle: 'From research to production AI features',
    description:
      'A strategic initiative to validate, design, and deploy AI-powered features that deliver measurable ROI. We scoped opportunities, built evaluation frameworks, prototyped solutions, and shipped production-ready automations—turning AI hype into bottom-line results.',
    outcomes: [
      'Shipped working prototypes in weeks, not quarters',
      'Automation-first workflows reduced manual effort by 60%',
      'Clear quality gates and evaluation metrics enabled confident rollouts',
    ],
    roles: ['Discovery & strategy', 'MVP development', 'Automation design', 'Evaluation framework'],
    tags: ['AI', 'MVP', 'Automation', 'Strategy'],
    image: { src: '@@img_work_ai_report@@', alt: 'AI initiative metrics and dashboard' },
    links: [
      { label: 'Get quote', href: '/quote' },
      { label: 'Book consult', href: '/contact' },
    ],
  },
  {
    id: 'nancy-dental',
    title: 'Nancy Atanasova Dental Lab',
    subtitle: 'Patient intake and order management reimagined',
    description:
      'We modernized patient intake and case ordering for a dental lab, replacing phone calls and PDFs with a secure web portal. The result: faster turnarounds, fewer errors, and happier patients and staff.',
    outcomes: [
      'Patient intake completion increased 40%, reducing phone volume',
      'Order accuracy improved with structured forms and validation',
      'Non-technical staff can update content without developer intervention',
    ],
    roles: ['Design & UX', 'Frontend development', 'Secure forms', 'CMS integration'],
    tags: ['E‑commerce', 'Client portal', 'Workflow'],
    image: { src: '@@img_work_dental@@', alt: 'Dental lab patient portal interface' },
    links: [
      { label: 'View live site', href: 'https://nancyatanasova.com', external: true },
      { label: 'Get quote', href: '/quote' },
    ],
  },
];

export default function Work() {
  useEffect(() => {
    document.title = 'Selected Work – Linked';
  }, []);

  return (
    <main>
      <section className="hero hero-home" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <span className="hero-kicker">
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--success)',
              boxShadow: '0 0 0 4px color-mix(in oklab, var(--success), transparent 85%)'
            }} />
            Selected Work
          </span>
          <h1 className="hero-title">
            Proven Track Record: Banking-Grade to Startup MVPs
          </h1>
          <p className="hero-subtitle" style={{ margin: '0 auto var(--space-6)' }}>
            We design and ship production software that solves real business problems. From AI assistants to
            patient portals, our work combines the reliability of enterprise engineering with the velocity of a startup.
          </p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-accent btn-lg">
              Book Free Consult
            </Link>
            <Link to="/quote" className="btn btn-secondary btn-lg">
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-lg">
        <div className="container" style={{ maxWidth: '1200px' }}>
          <p className="text-muted text-center" style={{ fontSize: '1.0625rem', maxWidth: '900px', margin: '0 auto var(--space-6)' }}>
            We partner with teams who value clear scopes, fast iteration, automation-first thinking, and senior engineering.
            If it runs in a browser or on the web, we build it.
          </p>
          <div className="notice" style={{ maxWidth: '900px', margin: '0 auto var(--space-10)' }}>
            <strong>Production standards:</strong> Accessibility, security, testing, observability, and performance
            optimization are standard on every project—not add-ons.
          </div>

          <div className="stack-lg">
            {projects.map((p) => (
              <article key={p.id} className="card" style={{ padding: 'var(--space-6)' }}>
                <div className="grid grid-2" style={{ gap: 'var(--space-6)', alignItems: 'start' }}>
                  <div className="work-image" style={{
                    aspectRatio: '16/9',
                    width: '100%',
                    overflow: 'hidden',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)'
                  }}>
                    <img
                      src={p.image.src}
                      alt={p.image.alt}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="stack">
                    <header>
                      <h2 style={{ margin: '0 0 var(--space-2)', fontSize: 'clamp(1.375rem, 2.5vw, 1.75rem)' }}>
                        {p.title}
                      </h2>
                      {p.subtitle && <p className="text-muted" style={{ fontSize: '1.0625rem', margin: 0 }}>{p.subtitle}</p>}
                      {p.tags && p.tags.length > 0 && (
                        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginTop: 'var(--space-2)' }}>
                          {p.tags.map((t) => (
                            <span key={t} className="tag">{t}</span>
                          ))}
                        </div>
                      )}
                    </header>
                    <p className="text-muted">{p.description}</p>
                    {p.outcomes && p.outcomes.length > 0 && (
                      <div>
                        <strong>Key Outcomes:</strong>
                        <ul className="stack-sm" style={{ marginTop: 'var(--space-2)' }}>
                          {p.outcomes.map((o, i) => (
                            <li key={i}>{o}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {p.roles && p.roles.length > 0 && (
                      <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                        {p.roles.map((r) => (
                          <span key={r} className="badge">{r}</span>
                        ))}
                      </div>
                    )}
                    {p.links && p.links.length > 0 && (
                      <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
                        {p.links.map((l, i) =>
                          l.external ? (
                            <a
                              key={i}
                              href={l.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-secondary btn-sm"
                            >
                              {l.label}
                            </a>
                          ) : (
                            <Link key={i} to={l.href} className="btn btn-secondary btn-sm">
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

          <div className="cta" style={{ marginTop: 'var(--space-16)', maxWidth: '900px', margin: 'var(--space-16) auto 0' }}>
            <h2>Have a Project in Mind?</h2>
            <p className="text-muted">
              Let's scope it together. We'll review requirements, outline options, and provide clear timelines and budget estimates.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-accent btn-lg">
                Book Free Consult
              </Link>
              <Link to="/quote" className="btn btn-secondary btn-lg">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}