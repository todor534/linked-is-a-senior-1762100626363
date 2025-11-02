import React from 'react';
import { Link } from 'react-router-dom';

type Step = {
  title: string;
  description: string;
  note?: string;
};

type ProcessStepsProps = {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  steps?: Step[];
  className?: string;
};

const defaultSteps: Step[] = [
  {
    title: 'Discovery & Fit Call',
    description:
      'A 30–45 minute conversation to clarify goals, constraints, users, and success metrics. We map risks and the fastest path to value.',
    note: 'Output: shared understanding, initial options, next steps.',
  },
  {
    title: 'Scope & Proposal',
    description:
      'We define clear deliverables, timeline, and budget. Choose a fixed-scope build or an agile iteration plan with milestones.',
    note: 'Output: statement of work, timeline, pricing.',
  },
  {
    title: 'Architecture & UX',
    description:
      'We design system architecture, data flows, security boundaries, and key user journeys. Wireframes or low‑fi mockups align the team.',
    note: 'Output: architecture doc, flows, UX wireframes.',
  },
  {
    title: 'Prototype to De‑risk',
    description:
      'We build a focused prototype or proof‑of‑concept to validate critical assumptions—AI prompts, integrations, or core UX.',
    note: 'Output: working prototype and learnings.',
  },
  {
    title: 'Build',
    description:
      'Production implementation: frontend, backend/APIs, auth, roles, and data. We ship in small increments for rapid feedback.',
    note: 'Output: versioned app with CI/CD.',
  },
  {
    title: 'Integrations & Automation',
    description:
      'We connect third‑party services (payments, CRMs, analytics) and add automations to remove manual steps and reduce costs.',
    note: 'Output: integrated workflows and bots.',
  },
  {
    title: 'QA, Security & UAT',
    description:
      'We test functionality, performance, accessibility, and security. You perform user acceptance testing with staging data.',
    note: 'Output: test results and acceptance sign‑off.',
  },
  {
    title: 'Launch',
    description:
      'Zero‑downtime deploy with monitoring, logging, and alerts. We provide training, runbooks, and rollback plans.',
    note: 'Output: live app, docs, and handover.',
  },
  {
    title: 'Measure & Iterate',
    description:
      'We track KPIs and user behavior to prioritize improvements. Optionally retain us for enhancements and ongoing support.',
    note: 'Output: iteration backlog and growth plan.',
  },
];

const styles: Record<string, React.CSSProperties> = {
  section: {
    width: '100%',
    background: '#f6f8fb',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '72px 20px',
  },
  innerCompact: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '40px 16px',
  },
  headerWrap: {
    maxWidth: 900,
    margin: '0 auto 32px auto',
    textAlign: 'center',
  },
  subtitle: {
    display: 'inline-block',
    fontSize: 14,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    color: '#3b82f6',
    fontWeight: 700,
    marginBottom: 8,
  },
  title: {
    fontSize: 36,
    lineHeight: 1.2,
    color: '#0f172a',
    margin: '0 0 12px 0',
    fontWeight: 800,
  },
  description: {
    fontSize: 18,
    lineHeight: 1.6,
    color: '#334155',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gap: 16,
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    marginTop: 28,
  },
  card: {
    background: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: 12,
    padding: 20,
    minHeight: 170,
    boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -12,
    left: -12,
    width: 36,
    height: 36,
    borderRadius: 18,
    background: '#111827',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
  },
  cardTitle: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: 700,
    color: '#0f172a',
  },
  cardDesc: {
    margin: 0,
    fontSize: 15,
    lineHeight: 1.6,
    color: '#334155',
    flexGrow: 1,
  },
  cardNote: {
    marginTop: 12,
    fontSize: 13,
    color: '#64748b',
  },
  ctas: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 28,
  },
  ctaPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 16px',
    borderRadius: 10,
    background: '#2563eb',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: 15,
    border: '1px solid #1d4ed8',
  },
  ctaSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 16px',
    borderRadius: 10,
    background: '#ffffff',
    color: '#0f172a',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: 15,
    border: '1px solid #e5e7eb',
  },
  ctaTertiary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 16px',
    borderRadius: 10,
    background: '#0ea5e9',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: 15,
    border: '1px solid #0284c7',
  },
};

const ProcessSteps: React.FC<ProcessStepsProps> = ({
  title = 'How we deliver — fast and safely',
  subtitle = 'Process',
  compact = false,
  steps = defaultSteps,
  className,
}) => {
  return (
    <section
      aria-label="Our delivery process"
      style={styles.section}
      className={className}
    >
      <div style={compact ? styles.innerCompact : styles.inner}>
        <div style={styles.headerWrap}>
          <div style={styles.subtitle}>{subtitle}</div>
          <h2 style={styles.title}>{title}</h2>
          <p style={styles.description}>
            Clear scopes, fast iteration, and automation-first engineering. From discovery
            to launch, we ship production-ready web apps and AI services with senior rigor.
          </p>
        </div>

        <div style={styles.grid}>
          {steps.map((step, idx) => (
            <div key={idx} style={styles.card}>
              <div aria-hidden="true" style={styles.badge}>
                {idx + 1}
              </div>
              <div style={styles.cardTitle}>{step.title}</div>
              <p style={styles.cardDesc}>{step.description}</p>
              {step.note ? <div style={styles.cardNote}>{step.note}</div> : null}
            </div>
          ))}
        </div>

        <div style={styles.ctas}>
          <Link to="/contact" style={styles.ctaPrimary}>
            Book a free consult
          </Link>
          <Link to="/quote" style={styles.ctaSecondary}>
            Request a quote
          </Link>
          <Link to="/work" style={styles.ctaTertiary}>
            View portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;