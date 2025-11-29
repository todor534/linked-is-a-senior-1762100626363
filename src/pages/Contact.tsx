import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <header className="hero" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-8)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1120px' }}>
          <div style={{ color: 'var(--muted)', fontSize: '0.8125rem', letterSpacing: '0.02em', marginBottom: 'var(--space-3)' }}>
            Home / Contact
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-8)', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 420px', minWidth: '280px' }}>
              <h1 className="hero-title" style={{ marginBottom: 'var(--space-4)' }}>
                Start Your Project This Week
              </h1>
              <p className="hero-subtitle">
                Linked is your senior engineering partner for web apps, AI copilots, and custom automations.
                We scope clearly, iterate fast, and ship production software—with the quality of enterprise
                engineering and the speed your business demands.
              </p>
              <div className="hero-ctas" style={{ marginTop: 'var(--space-5)' }}>
                <a href="#contact-form" className="btn btn-accent btn-lg">
                  Book Free Consult
                </a>
                <Link to="/quote" className="btn btn-secondary btn-lg">
                  Get Quote
                </Link>
                <Link to="/work" className="btn btn-ghost btn-lg">
                  View Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container" style={{ maxWidth: '1120px' }}>
          <div className="grid grid-2" style={{ gap: 'var(--space-8)', alignItems: 'start' }}>
            <div className="stack">
              <div className="card padded">
                <h3 style={{ marginTop: 0, fontSize: '1.125rem' }}>What We Build</h3>
                <ul className="stack-sm text-muted" style={{ fontSize: '0.9375rem' }}>
                  <li>Web apps, secure client portals, and custom order workflows</li>
                  <li>E‑commerce platforms with tailored business logic and automations</li>
                  <li>AI assistants, copilots, and intelligent process automation</li>
                  <li>Dashboards, analytics tools, and third-party integrations</li>
                </ul>
              </div>

              <div className="card padded">
                <h3 style={{ marginTop: 0, fontSize: '1.125rem' }}>Why Teams Choose Us</h3>
                <ul className="stack-sm text-muted" style={{ fontSize: '0.9375rem' }}>
                  <li><strong style={{ color: 'var(--heading)' }}>Banking-grade experience:</strong> Credit origination and lending automation</li>
                  <li><strong style={{ color: 'var(--heading)' }}>Clear scopes:</strong> Transparent milestones eliminate budget surprises</li>
                  <li><strong style={{ color: 'var(--heading)' }}>Fast iteration:</strong> Weekly demos with tangible progress</li>
                  <li><strong style={{ color: 'var(--heading)' }}>Automation-first:</strong> Reduce manual work and operational costs</li>
                </ul>
              </div>

              <div className="card padded">
                <h3 style={{ marginTop: 0, fontSize: '1.125rem' }}>Selected Work</h3>
                <div className="stack-sm">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    padding: 'var(--space-2)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border)',
                    background: 'color-mix(in oklab, var(--surface-2), transparent 30%)'
                  }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0
                    }}>
                      🤖
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--heading)' }}>
                        Kaya — AI Business Assistant
                      </div>
                      <div className="text-muted" style={{ fontSize: '0.8125rem' }}>
                        AI copilots and task automation
                      </div>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    padding: 'var(--space-2)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border)',
                    background: 'color-mix(in oklab, var(--surface-2), transparent 30%)'
                  }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0
                    }}>
                      ⚡
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--heading)' }}>
                        Cashing in on AI
                      </div>
                      <div className="text-muted" style={{ fontSize: '0.8125rem' }}>
                        Strategy, prototypes, and production AI
                      </div>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    padding: 'var(--space-2)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border)',
                    background: 'color-mix(in oklab, var(--surface-2), transparent 30%)'
                  }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0
                    }}>
                      🦷
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--heading)' }}>
                        Nancy Atanasova Dental Lab
                      </div>
                      <div className="text-muted" style={{ fontSize: '0.8125rem' }}>
                        Patient portal and order management
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/work" style={{
                  marginTop: 'var(--space-3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  color: 'var(--primary)',
                  fontWeight: 600,
                  fontSize: '0.9375rem'
                }}>
                  <span>Explore Full Portfolio</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="card" style={{ overflow: 'hidden' }}>
                <div style={{
                  width: '100%',
                  height: '160px',
                  background: 'linear-gradient(135deg, color-mix(in oklab, var(--primary), transparent 80%), color-mix(in oklab, var(--accent), transparent 80%))',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem'
                }}>
                  🏦
                </div>
                <div style={{ padding: 'var(--space-4)' }}>
                  <h4 style={{ margin: '0 0 var(--space-2)', fontSize: '1.125rem' }}>Banking‑Grade Experience</h4>
                  <p className="text-muted" style={{ fontSize: '0.9375rem', margin: 0, lineHeight: 1.6 }}>
                    We've delivered credit origination and consumer lending automation in regulated environments.
                    Security, reliability, and clear communication are non-negotiable.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div
                className="card"
                id="contact-form"
                style={{
                  padding: 'var(--space-6)',
                  background: 'linear-gradient(180deg, color-mix(in oklab, var(--bg-elev), transparent 10%), color-mix(in oklab, var(--bg-elev), transparent 20%))',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>
                  <h2 style={{ margin: 0, fontSize: '1.375rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
                    Tell Us About Your Project
                  </h2>
                  <p className="text-muted" style={{ fontSize: '0.8125rem', margin: 0 }}>
                    Response time: {'<'} 1 business day
                  </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <span className="badge">Web apps</span>
                  <span className="badge">E‑commerce</span>
                  <span className="badge">AI copilots</span>
                  <span className="badge">Automations</span>
                  <span className="badge">Integrations</span>
                </div>
                <ContactForm />
              </div>

              <div style={{ marginTop: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <Link to="/quote" className="btn btn-primary">
                  Request Quote
                </Link>
                <Link to="/work" className="btn btn-secondary">
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}