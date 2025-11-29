import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import WorkHighlights from '../components/WorkHighlights';
import ProcessSteps from '../components/ProcessSteps';
import TrustBar from '../components/TrustBar';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />

      <TrustBar />

      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-kicker">Our Approach</span>
            <h2>Engineering That Delivers Results</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We combine the discipline of enterprise engineering with the velocity of a startup.
              Clear scopes eliminate surprises. Fast iteration keeps momentum. Automation reduces costs and errors.
            </p>
          </div>

          <div className="grid grid-2" style={{ marginTop: 'var(--space-10)' }}>
            <div className="card padded">
              <h3>What Sets Us Apart</h3>
              <ul className="stack">
                <li><strong>Banking-grade delivery:</strong> Credit origination and consumer lending automation experience</li>
                <li><strong>Senior-only team:</strong> No juniors, clearer communication, faster decisions</li>
                <li><strong>Automation-first mindset:</strong> Reduce manual work from day one</li>
                <li><strong>Production-ready standards:</strong> Security, testing, and monitoring included</li>
              </ul>
            </div>

            <div className="card padded">
              <h3>How We Work</h3>
              <div style={{ marginTop: 'var(--space-4)' }}>
                <Process Steps />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid showHeader={true} showCTAs={true} />

      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-kicker">Portfolio</span>
            <h2>Selected Work</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              From AI assistants to patient portals, we ship production software that solves real business problems.
            </p>
          </div>
          <WorkHighlights />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-6)' }}>
            <Link to="/work" className="btn btn-primary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}