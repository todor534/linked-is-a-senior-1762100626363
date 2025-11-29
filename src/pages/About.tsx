import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="page-narrow" style={{ padding: 'var(--space-16) var(--space-6) var(--space-24)' }}>
      <div className="stack-lg">
        <header>
          <span className="section-kicker">About Linked</span>
          <h1>Your Senior Engineering Partner for Web & AI Products</h1>
          <p className="text-muted" style={{ fontSize: '1.125rem', lineHeight: 1.6, maxWidth: '900px' }}>
            We design and ship production-ready web apps, AI copilots, custom automations, and e-commerce platforms.
            If it runs in a browser or on the web, we build it—with the rigor of enterprise engineering and the
            speed your business demands.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--space-5)' }}>
            <Link to="/contact" className="btn btn-secondary" aria-label="Book a free consult">
              Book Free Consult
            </Link>
            <Link to="/quote" className="btn btn-primary" aria-label="Request a quote">
              Get Quote
            </Link>
            <Link to="/work" className="btn btn-ghost" aria-label="View portfolio">
              View Work
            </Link>
          </div>

          <div className="grid grid-3" style={{ marginTop: 'var(--space-8)' }}>
            <div className="card padded">
              <div className="section-kicker">Track Record</div>
              <div style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--heading)' }}>
                Banking‑grade solutions delivered
              </div>
            </div>
            <div className="card padded">
              <div className="section-kicker">Engineering</div>
              <div style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--heading)' }}>
                Senior‑only team, fast iteration
              </div>
            </div>
            <div className="card padded">
              <div className="section-kicker">Approach</div>
              <div style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--heading)' }}>
                Automation‑first, production‑ready
              </div>
            </div>
          </div>
        </header>

        <section>
          <h2>Why Teams Choose Linked</h2>
          <p className="text-muted" style={{ maxWidth: '860px' }}>
            We partner with founders and product teams who need working software in weeks—not quarters—and want
            senior engineers who anticipate edge cases, automate repetitive work, and ship production-grade code.
          </p>
          <ul className="stack" style={{ marginTop: 'var(--space-4)' }}>
            <li><strong>Production-ready from day one:</strong> Testing, observability, security, and deployment pipelines included</li>
            <li><strong>Automation-first mindset:</strong> Eliminate manual operations and human error before they become problems</li>
            <li><strong>Clear scopes, visible progress:</strong> Weekly iterations with demoable increments and transparent communication</li>
            <li><strong>Secure by default:</strong> Authentication, authorization, audit trails, and data privacy baked in</li>
            <li><strong>Banking-grade experience:</strong> Delivered credit origination and consumer lending automation in regulated environments</li>
          </ul>
        </section>

        <section>
          <h2>Selected Work</h2>
          <p className="text-muted" style={{ maxWidth: '900px' }}>
            We've delivered banking-grade solutions for consumer lending and shipped products end-to-end for
            startups and established businesses alike. Explore more in our{' '}
            <Link to="/work" style={{ color: 'var(--primary)', fontWeight: 600 }}>portfolio</Link>.
          </p>

          <div className="grid grid-3" style={{ marginTop: 'var(--space-6)' }}>
            <article className="card">
              <div style={{ aspectRatio: '16/9', width: '100%', overflow: 'hidden', borderRadius: 'var(--radius-md) var(--radius-md) 0 0', background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                <img
                  src="@@img_work_kaya@@"
                  alt="Kaya — AI Business Assistant"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ padding: 'var(--space-4)' }}>
                <h3 style={{ margin: '0 0 var(--space-2)', fontSize: '1.125rem' }}>Kaya — AI Business Assistant</h3>
                <p className="text-muted" style={{ fontSize: '0.875rem', margin: 0 }}>
                  AI copilots for operations: automated Q&A, task routing, and knowledge search with human oversight.
                </p>
                <Link to="/work" className="link-pill" style={{ marginTop: 'var(--space-3)' }}>
                  View case study →
                </Link>
              </div>
            </article>

            <article className="card">
              <div style={{ aspectRatio: '16/9', width: '100%', overflow: 'hidden', borderRadius: 'var(--radius-md) var(--radius-md) 0 0', background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                <img
                  src="@@img_work_cashing_in_on_ai@@"
                  alt="Cashing in on AI"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ padding: 'var(--space-4)' }}>
                <h3 style={{ margin: '0 0 var(--space-2)', fontSize: '1.125rem' }}>Cashing in on AI</h3>
                <p className="text-muted" style={{ fontSize: '0.875rem', margin: 0 }}>
                  From strategy to production: experiments, evaluation frameworks, and integration into existing workflows.
                </p>
                <Link to="/work" className="link-pill" style={{ marginTop: 'var(--space-3)' }}>
                  View case study →
                </Link>
              </div>
            </article>

            <article className="card">
              <div style={{ aspectRatio: '16/9', width: '100%', overflow: 'hidden', borderRadius: 'var(--radius-md) var(--radius-md) 0 0', background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                <img
                  src="@@img_work_nancy_atanasova_lab@@"
                  alt="Nancy Atanasova Dental Lab"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ padding: 'var(--space-4)' }}>
                <h3 style={{ margin: '0 0 var(--space-2)', fontSize: '1.125rem' }}>Nancy Atanasova Dental Lab</h3>
                <p className="text-muted" style={{ fontSize: '0.875rem', margin: 0 }}>
                  Patient intake and ordering workflow. Live at{' '}
                  <a href="https://nancyatanasova.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
                    nancyatanasova.com
                  </a>.
                </p>
                <Link to="/work" className="link-pill" style={{ marginTop: 'var(--space-3)' }}>
                  View project →
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section>
          <h2>How We Work</h2>
          <p className="text-muted" style={{ maxWidth: '860px' }}>
            We start with a focused scope and short discovery to map user journeys and system constraints.
            Then we iterate in tight loops—planning, building, and shipping real increments weekly.
            You get predictable progress, fewer surprises, and a partner who cares about outcomes.
          </p>
          <ul className="stack" style={{ marginTop: 'var(--space-4)' }}>
            <li><strong>Discovery & scope:</strong> Align on goals, constraints, success metrics, and acceptance criteria</li>
            <li><strong>Implementation sprints:</strong> Ship working increments weekly with demos and immediate feedback</li>
            <li><strong>Automation & integrations:</strong> Connect your tools and eliminate manual steps from day one</li>
            <li><strong>Hardening & launch:</strong> Authentication, audit logging, testing, and monitoring before go-live</li>
            <li><strong>Handover or partnership:</strong> Comprehensive documentation, team training, and ongoing support options</li>
          </ul>
        </section>

        <section>
          <h2>The Team</h2>
          <p className="text-muted" style={{ maxWidth: '860px' }}>
            Senior software and AI engineers with backgrounds in product, DevOps, and data systems. We've built
            and operated high-throughput products in regulated industries. We keep teams lean and communication
            direct—no account managers, just engineers who understand your goals.
          </p>
        </section>

        <div className="cta" style={{ marginTop: 'var(--space-16)' }}>
          <h2>Ready to Ship Faster?</h2>
          <p className="text-muted">
            Let's scope your project together. We'll provide a clear timeline, transparent pricing, and a plan
            to get you from idea to production.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Book Free Consult
            </Link>
            <Link to="/quote" className="btn btn-secondary">
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}