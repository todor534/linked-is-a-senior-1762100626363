import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero" aria-label="Linked — Your Senior Engineering Partner for Web & AI Products">
      <div className="container">
        <div className="hero-content">
          <div className="hero-kicker">
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--success)',
              boxShadow: '0 0 0 4px color-mix(in oklab, var(--success), transparent 85%)'
            }} aria-hidden="true" />
            Senior software & AI development studio
          </div>
          <h1 className="hero-title">
            Transform Your Ambitious Ideas Into{' '}
            <span style={{
              background: 'linear-gradient(90deg, #60a5fa 0%, #22d3ee 50%, #34d399 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}>
              Production-Ready
            </span>{' '}
            Software
          </h1>
          <p className="hero-subtitle">
            From concept to deployment in weeks, not months. We design and ship secure web apps, AI copilots,
            e-commerce platforms, and custom automations. Trusted by teams who demand banking-grade reliability
            with startup speed.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-3)',
            marginTop: 'var(--space-4)',
            marginBottom: 'var(--space-2)'
          }}>
            <span className="badge">Clear scopes</span>
            <span className="badge">Fast iteration</span>
            <span className="badge">Automation‑first</span>
            <span className="badge">Senior engineering</span>
          </div>

          <div className="hero-ctas">
            <Link to="/contact?type=consult" className="btn btn-accent btn-lg">
              Book Free Consult
              <span style={{ display: 'inline-flex', width: '16px', height: '16px' }} aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.75 3.75a.75.75 0 0 1 .75-.75h4.75a.75.75 0 0 1 .75.75v4.75a.75.75 0 0 1-1.5 0V5.56l-8.22 8.22a.75.75 0 0 1-1.06-1.06l8.22-8.22h-2.94a.75.75 0 0 1-.75-.75z" />
                </svg>
              </span>
            </Link>
            <Link to="/quote" className="btn btn-secondary btn-lg">
              Get Quote
              <span style={{ display: 'inline-flex', width: '16px', height: '16px' }} aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M4 3.5A1.5 1.5 0 0 1 5.5 2h9A1.5 1.5 0 0 1 16 3.5V15a1 1 0 0 1-1 1H6.414a1 1 0 0 1-.707-.293l-2.414-2.414A1 1 0 0 1 3 12.586V3.5zM6 5h8v2H6V5zm0 4h8v2H6V9zm0 4h5v2H6v-2z" />
                </svg>
              </span>
            </Link>
            <Link to="/work" className="btn btn-ghost btn-lg">
              View Work
              <span style={{ display: 'inline-flex', width: '16px', height: '16px' }} aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 4.75A1.75 1.75 0 0 1 4.75 3h10.5A1.75 1.75 0 0 1 17 4.75v10.5A1.75 1.75 0 0 1 15.25 17H4.75A1.75 1.75 0 0 1 3 15.25V4.75zM5 5.5v9h10v-9H5zm1.75 7.25 2.5-3.125a1 1 0 0 1 1.5-.083l1.26 1.26.99-1.155a1 1 0 0 1 1.5 1.32l-1.75 2.043a1 1 0 0 1-1.51.05l-1.23-1.23-2.04 2.55a1 1 0 0 1-1.53-1.2z" />
                </svg>
              </span>
            </Link>
          </div>

          <div style={{
            marginTop: 'var(--space-5)',
            color: 'var(--muted)',
            fontSize: '0.875rem'
          }}>
            <strong style={{ color: 'var(--heading)' }}>Banking-grade experience:</strong> Credit origination •
            Consumer lending automation • Enterprise workflows
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            padding: '6px 10px',
            borderRadius: '999px',
            background: 'linear-gradient(90deg, color-mix(in oklab, var(--primary), transparent 75%), color-mix(in oklab, var(--accent), transparent 75%))',
            border: '1px solid color-mix(in oklab, var(--border), var(--primary) 20%)',
            color: 'var(--heading)',
            fontSize: '0.75rem',
            fontWeight: 600,
            backdropFilter: 'blur(6px)',
          }}>
            Production-ready. Banking-grade.
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 12px',
            borderBottom: '1px solid var(--border)',
            background: 'color-mix(in oklab, var(--bg-elev), black 40%)',
          }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '999px', background: 'var(--danger)' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '999px', background: 'var(--warning)' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '999px', background: 'var(--success)' }} />

          </div>
          <img
            src="https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762100279742-img-hero-dashboard.png"
            alt="Preview of a modern web dashboard with AI-assisted automations"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}