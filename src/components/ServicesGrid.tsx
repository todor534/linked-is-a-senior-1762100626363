import React from 'react';
import { Link } from 'react-router-dom';

// Import services data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { services as importedServices } from '../data/services';

// Fallback default services
const fallbackServices = [
  {
    id: 'web-apps',
    title: 'Production Web Apps',
    description:
      'Transform your workflow with custom web applications that your team will actually use—dashboards, portals, and end-to-end business tools.',
    features: ['React + TypeScript', 'Secure auth', 'Role-based access', 'CI/CD'],
    emoji: '🧩',
  },
  {
    id: 'automation',
    title: 'Process Automation',
    description:
      'Eliminate repetitive work and reduce errors with intelligent automations—from document processing to approval workflows.',
    features: ['Workflow engines', 'Document pipelines', 'APIs & webhooks', 'RPA'],
    emoji: '⚙️',
  },
  {
    id: 'ecommerce',
    title: 'E‑commerce Experiences',
    description:
      'Convert browsers into buyers with high-performing storefronts and seamless checkout experiences—from subscriptions to B2B.',
    features: ['Headless storefronts', 'Checkout flows', 'Payments', 'Analytics'],
    emoji: '🛒',
  },
  {
    id: 'ai-services',
    title: 'AI‑Powered Services',
    description:
      'Ship AI copilots that actually work—from customer support automation to internal knowledge assistants that reduce busywork.',
    features: ['RAG & agents', 'LLM orchestration', 'Safety & evals', 'Observability'],
    emoji: '🤖',
  },
  {
    id: 'portals-dashboards',
    title: 'Client Portals & Dashboards',
    description:
      'Give customers and teams the self-service tools they need—secure portals for document exchange, reporting, and account management.',
    features: ['SSO & MFA', 'Audit trails', 'Exports', 'Access control'],
    emoji: '📊',
  },
  {
    id: 'integrations',
    title: 'Integrations & Data',
    description:
      'Connect your tech stack seamlessly—sync data between CRM, payments, accounting, and custom systems without manual work.',
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

type ServicesGridProps = {
  showHeader?: boolean;
  showCTAs?: boolean;
};

const ServicesGrid: React.FC<ServicesGridProps> = ({ showHeader = true, showCTAs = true }) => {
  const services = normalizeServices(importedServices);

  return (
    <section className="section" aria-labelledby="services-heading">
      <div className="container">
        {showHeader && (
          <div className="section-header text-center">
            <h2 id="services-heading" className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
              What We Build
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Senior engineering for production-grade solutions. We deliver clear scopes, fast iteration,
              and an automation-first mindset that reduces costs and accelerates your roadmap.
            </p>
          </div>
        )}

        <div className="grid grid-3" style={{ marginTop: 'var(--space-8)' }}>
          {services.map((service) => {
            const title = service.title;
            const desc = service.description;
            const features = Array.isArray(service.features) ? service.features : [];
            const emoji = service.emoji || '🔧';
            const qParam = encodeURIComponent(title);

            return (
              <article key={service.id} className="card padded card-hover" aria-label={title}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                  <div className="service-icon" aria-hidden="true">
                    <span style={{ fontSize: '1.25rem' }}>{emoji}</span>
                  </div>
                  <h3 className="service-title">{title}</h3>
                </div>
                <p className="service-desc">{desc}</p>

                {features.length > 0 && (
                  <div className="service-meta">
                    {features.slice(0, 6).map((f, idx) => (
                      <span key={`${service.id}-feat-${idx}`} className="badge">
                        {f}
                      </span>
                    ))}
                  </div>
                )}

                <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
                  <Link
                    to={{ pathname: '/quote', search: `?service=${qParam}` }}
                    className="btn btn-primary btn-sm"
                    aria-label={`Get quote for ${title}`}
                  >
                    Get Quote
                  </Link>
                  <Link
                    to={{ pathname: '/contact', search: `?topic=${qParam}` }}
                    className="btn btn-secondary btn-sm"
                    aria-label={`Discuss ${title}`}
                  >
                    Discuss
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {showCTAs && (
          <>
            <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-8)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/work" className="btn btn-secondary" aria-label="View our work">
                View Our Work
              </Link>
              <Link to="/quote" className="btn btn-primary" aria-label="Request a quote">
                Request Quote
              </Link>
            </div>
            <p className="text-muted text-center" style={{ marginTop: 'var(--space-4)', fontSize: '0.875rem' }}>
              <strong style={{ color: 'var(--heading)' }}>Banking-grade experience:</strong> Delivered credit origination
              and consumer lending automation. Security, testing, and reliability come standard.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;