import React from 'react';
import { Link } from 'react-router-dom';

type CSS = React.CSSProperties;

// Import services data but keep it flexible to avoid tight coupling to its shape
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { services as importedServices } from '../data/services';

// Fallback default services if data file is empty or missing fields
const fallbackServices = [
  {
    id: 'web-apps',
    title: 'Production Web Apps',
    description:
      'Design, build, and ship robust apps that run in the browser—dashboards, portals, and end-to-end workflows.',
    features: ['React + TypeScript', 'Secure auth', 'Role-based access', 'CI/CD'],
    emoji: '🧩',
  },
  {
    id: 'automation',
    title: 'Process Automation',
    description:
      'Eliminate manual tasks with custom automations—forms, approvals, notifications, and data syncs.',
    features: ['Workflow engines', 'Document pipelines', 'APIs & webhooks', 'RPA'],
    emoji: '⚙️',
  },
  {
    id: 'ecommerce',
    title: 'E‑commerce Experiences',
    description:
      'High-converting storefronts and order flows—from subscriptions to B2B portals and fulfillment.',
    features: ['Headless storefronts', 'Checkout flows', 'Payments', 'Analytics'],
    emoji: '🛒',
  },
  {
    id: 'ai-services',
    title: 'AI‑Powered Services',
    description:
      'Ship AI copilots and assistants that streamline operations and deliver better customer experiences.',
    features: ['RAG & agents', 'LLM orchestration', 'Safety & evals', 'Observability'],
    emoji: '🤖',
  },
  {
    id: 'portals-dashboards',
    title: 'Client Portals & Dashboards',
    description:
      'Secure portals for customers and teams—file exchange, forms, reporting, and self‑service tools.',
    features: ['SSO & MFA', 'Audit trails', 'Exports', 'Access control'],
    emoji: '📊',
  },
  {
    id: 'integrations',
    title: 'Integrations & Data',
    description:
      'Connect SaaS and internal systems—CRM, banking, payments, accounting, and custom APIs.',
    features: ['REST/GraphQL', 'ETL pipelines', '3rd‑party APIs', 'Webhooks'],
    emoji: '🔌',
  },
];

function normalizeServices(raw: unknown): Array<{
  id: string;
  title: string;
  description: string;
  features: string[];
  emoji?: string;
}> {
  if (!Array.isArray(raw)) return fallbackServices;
  const normalized = raw.map((s, idx) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const item = s as any;
    const id =
      String(item.id || item.key || item.slug || item.title || item.name || `service-${idx}`)
        .toLowerCase()
        .replace(/\s+/g, '-');
    const title = String(item.title || item.name || item.label || 'Service');
    const description = String(
      item.description || item.summary || item.subtitle || 'Custom-built to your requirements.'
    );
    const features: string[] = Array.isArray(item.features)
      ? item.features
      : Array.isArray(item.tags)
      ? item.tags
      : Array.isArray(item.items)
      ? item.items
      : [];
    const emoji: string | undefined = item.emoji || item.icon || undefined;
    return {
      id,
      title,
      description,
      features: features.filter((f) => typeof f === 'string').slice(0, 6),
      emoji,
    };
  });

  return normalized.length ? normalized : fallbackServices;
}

const styles: Record<string, CSS> = {
  section: {
    padding: '64px 0',
    backgroundColor: '#ffffff',
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 20px',
  },
  header: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 28,
  },
  title: {
    margin: 0,
    fontSize: 28,
    lineHeight: 1.2,
    fontWeight: 700,
    color: '#0f172a',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    margin: 0,
    fontSize: 16,
    lineHeight: 1.6,
    color: '#334155',
    maxWidth: 720,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: 20,
  },
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    boxShadow: '0 1px 2px rgba(15, 23, 42, 0.06)',
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#eff6ff',
    color: '#1d4ed8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 700,
    flexShrink: 0,
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  cardTitle: {
    margin: 0,
    fontSize: 18,
    lineHeight: 1.3,
    fontWeight: 700,
    color: '#0f172a',
    letterSpacing: '-0.01em',
  },
  cardDesc: {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.6,
    color: '#475569',
    flexGrow: 0,
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: '4px 0 0 0',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
  },
  featureItem: {
    fontSize: 12,
    lineHeight: 1,
    color: '#0f172a',
    backgroundColor: '#f8fafc',
    border: '1px solid #eef2f7',
    borderRadius: 999,
    padding: '8px 10px',
    whiteSpace: 'nowrap',
  },
  cardActions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 'auto',
  },
  buttonBase: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    textDecoration: 'none',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'transform 120ms ease',
    border: '1px solid transparent',
    lineHeight: '20px',
    padding: '10px 14px',
  },
  buttonPrimary: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
    borderColor: '#2563eb',
  },
  buttonOutline: {
    backgroundColor: '#ffffff',
    color: '#1f2937',
    borderColor: '#e5e7eb',
  },
  footerCtas: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallNote: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 6,
    textAlign: 'center',
  },
};

type ServicesGridProps = {
  showHeader?: boolean;
  showCTAs?: boolean;
};

const ServicesGrid: React.FC<ServicesGridProps> = ({ showHeader = true, showCTAs = true }) => {
  const services = normalizeServices(importedServices);

  return (
    <section style={styles.section} aria-labelledby="services-heading">
      <div style={styles.container}>
        {showHeader && (
          <div style={styles.header}>
            <h2 id="services-heading" style={styles.title}>
              What we build
            </h2>
            <p style={styles.subtitle}>
              Senior engineering for production-grade web apps, automations, e‑commerce, and AI.
              Clear scopes, fast iteration, and an automation‑first mindset.
            </p>
          </div>
        )}

        <div style={styles.grid}>
          {services.map((service) => {
            const title = service.title;
            const desc = service.description;
            const features = Array.isArray(service.features) ? service.features : [];
            const emoji = service.emoji || '🔧';
            const qParam = encodeURIComponent(title);

            return (
              <article key={service.id} style={styles.card} aria-label={title}>
                <div style={styles.cardHeader}>
                  <div style={styles.iconWrap} aria-hidden="true">
                    <span>{emoji}</span>
                  </div>
                  <h3 style={styles.cardTitle}>{title}</h3>
                </div>
                <p style={styles.cardDesc}>{desc}</p>

                {features.length > 0 && (
                  <ul style={styles.featureList} aria-label="Capabilities">
                    {features.slice(0, 6).map((f, idx) => (
                      <li key={`${service.id}-feat-${idx}`} style={styles.featureItem}>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <div style={styles.cardActions}>
                  <Link
                    to={{ pathname: '/quote', search: `?service=${qParam}` }}
                    style={{ ...styles.buttonBase, ...styles.buttonPrimary }}
                    aria-label={`Request a quote for ${title}`}
                  >
                    Request a quote
                  </Link>
                  <Link
                    to={{ pathname: '/contact', search: `?topic=${qParam}` }}
                    style={{ ...styles.buttonBase, ...styles.buttonOutline }}
                    aria-label={`Book a free consult about ${title}`}
                  >
                    Book a free consult
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {showCTAs && (
          <>
            <div style={styles.footerCtas}>
              <Link
                to="/work"
                style={{ ...styles.buttonBase, ...styles.buttonOutline }}
                aria-label="View portfolio"
              >
                View portfolio
              </Link>
              <Link
                to="/quote"
                style={{ ...styles.buttonBase, ...styles.buttonPrimary }}
                aria-label="Request a quote"
              >
                Request a quote
              </Link>
            </div>
            <p style={styles.smallNote}>
              Banking-grade experience: delivered credit origination and business-process automation for consumer lending.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;