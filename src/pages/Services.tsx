import React from 'react';
import { Link } from 'react-router-dom';
import ServicesGrid from '../components/ServicesGrid';
import WorkHighlights from '../components/WorkHighlights';
import ProcessSteps from '../components/ProcessSteps';
import TrustBar from '../components/TrustBar';

export default function Services() {
  return (
    <main>
      <section className="hero hero-home">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <span className="hero-kicker">
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--success)',
                boxShadow: '0 0 0 4px color-mix(in oklab, var(--success), transparent 85%)'
              }} />
              Services
            </span>
            <h1 className="hero-title" style={{ marginBottom: 'var(--space-4)' }}>
              Enterprise-Grade Software Development, Delivered at Startup Speed
            </h1>
            <p className="hero-subtitle" style={{ margin: '0 auto var(--space-6)' }}>
              We design and ship production-ready web apps, AI copilots, process automations, and e‑commerce platforms.
              From concept to deployment in weeks, not quarters—with the quality and security of enterprise engineering.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
              <span className="badge">Automation‑first</span>
              <span className="badge">Fast iteration</span>
              <span className="badge">Clear scopes</span>
              <span className="badge">Senior engineering</span>
            </div>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary btn-lg">Book Free Consult</Link>
              <Link to="/quote" className="btn btn-secondary btn-lg">Get Quote</Link>
              <Link to="/work" className="btn btn-ghost btn-lg">View Work</Link>
            </div>
          </div>
        </div>
      </section>

      <div style={{ marginTop: 'var(--space-12)' }}>
        <ServicesGrid showHeader={true} showCTAs={false} />
      </div>

      <TrustBar />

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'var(--space-8)' }}>
            <div className="card padded">
              <h3 style={{ marginTop: 0 }}>What We Build</h3>
              <ul className="stack-sm">
                <li>Client portals with secure login, onboarding, and verification workflows</li>
                <li>AI copilots for teams: knowledge search, document analysis, and intelligent automation</li>
                <li>Marketing sites and high-performance landing pages that convert</li>
                <li>E‑commerce platforms with custom business logic, subscriptions, and fulfillment</li>
                <li>Dashboards, analytics, and internal tools that improve decision-making</li>
                <li>3rd‑party integrations: payments, authentication, CRMs, ERPs, and data pipelines</li>
              </ul>
            </div>
            <div className="card padded">
              <h3 style={{ marginTop: 0 }}>Why Teams Choose Linked</h3>
              <ul className="stack-sm">
                <li><strong>Banking-grade experience:</strong> Delivered credit origination and lending automation in regulated environments</li>
                <li><strong>Clear scopes, transparent pricing:</strong> Fixed quotes and milestone-based billing eliminate budget surprises</li>
                <li><strong>Fast iteration, visible progress:</strong> Weekly demos keep stakeholders aligned</li>
                <li><strong>Automation-first approach:</strong> Reduce manual operations and costs from day one</li>
                <li><strong>Production-ready standards:</strong> Testing, monitoring, and security are non-negotiable</li>
                <li><strong>Senior engineering only:</strong> No juniors means clearer communication and faster execution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-kicker">Portfolio</span>
            <h2>Selected Work</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Real projects, real outcomes. From AI assistants to patient portals, we ship software that solves business problems.
            </p>
          </div>
          <WorkHighlights />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-8)' }}>
            <Link to="/work" className="btn btn-primary">Explore Full Portfolio</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-kicker">Process</span>
            <h2>How We Work</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Lean, collaborative, and focused on shipping working software every week.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 'var(--space-24)' }}>
        <div className="container">
          <div className="cta" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2>Ready to Accelerate Your Roadmap?</h2>
            <p className="text-muted">
              Tell us about your goals. We'll scope clearly, propose a plan, and get you shipping production software
              in weeks—not months.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-accent btn-lg">Book Free Consult</Link>
              <Link to="/quote" className="btn btn-secondary btn-lg">Get Quote</Link>
            </div>
            <p className="text-muted text-center" style={{ fontSize: '0.875rem', marginTop: 'var(--space-6)', marginBottom: 0 }}>
              Prefer email? Reach us via the contact form—we respond within one business day.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}