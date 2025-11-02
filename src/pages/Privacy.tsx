import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const styles: { [k: string]: React.CSSProperties } = {
  main: {
    maxWidth: 920,
    margin: '0 auto',
    padding: '56px 20px 96px',
    lineHeight: 1.7,
    color: '#0f172a',
  },
  header: {
    marginBottom: 28,
  },
  title: {
    fontSize: 36,
    fontWeight: 800,
    margin: 0,
    letterSpacing: -0.2,
  },
  updated: {
    marginTop: 8,
    color: '#64748b',
    fontSize: 14,
  },
  lead: {
    marginTop: 16,
    fontSize: 18,
    color: '#334155',
  },
  toc: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 8,
    margin: '20px 0 36px',
  },
  tocLink: {
    display: 'block',
    padding: '8px 10px',
    borderRadius: 8,
    background: '#f1f5f9',
    color: '#0f172a',
    textDecoration: 'none',
    fontSize: 14,
  },
  section: {
    margin: '24px 0 0',
    paddingTop: 8,
  },
  h2: {
    fontSize: 22,
    fontWeight: 700,
    margin: '8px 0 8px',
  },
  h3: {
    fontSize: 18,
    fontWeight: 700,
    margin: '8px 0 8px',
  },
  p: {
    margin: '8px 0',
  },
  ul: {
    margin: '8px 0 8px 20px',
    padding: 0,
  },
  li: {
    margin: '6px 0',
  },
  small: {
    fontSize: 13,
    color: '#475569',
  },
  code: {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: 6,
    padding: '1px 6px',
    fontSize: 13,
  },
  link: {
    color: '#0ea5e9',
    textDecoration: 'none',
  },
  hr: {
    border: 0,
    borderTop: '1px solid #e2e8f0',
    margin: '24px 0',
  },
  footerNav: {
    marginTop: 28,
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
  },
  notice: {
    marginTop: 12,
    padding: '10px 12px',
    background: '#fff7ed',
    border: '1px solid #fed7aa',
    color: '#9a3412',
    borderRadius: 8,
    fontSize: 14,
  },
};

const lastUpdated = 'January 2, 2025';

export default function Privacy() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Privacy Policy • Linked';
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') || '';
    const desc =
      'How Linked collects, uses, and protects your information across our website, forms, and AI-powered services. Your privacy, secured by design.';
    if (meta) meta.setAttribute('content', desc);
    return () => {
      document.title = prevTitle;
      if (meta) meta.setAttribute('content', prevDesc);
    };
  }, []);

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.updated}>Last updated: {lastUpdated}</p>
        <p style={styles.lead}>
          Linked is a senior software & AI development studio. We design and ship production‑ready web apps, automations,
          e‑commerce shops, and AI‑powered services. This policy explains what we collect, why we collect it, and how you can
          exercise your privacy rights.
        </p>
        <div role="note" aria-label="Summary" style={styles.notice}>
          Summary: We collect only what we need to run our site, respond to your requests, deliver work, and improve our services.
          We don’t sell personal information. You control your data and can contact us anytime to access or delete it.
        </div>
      </header>

      <nav aria-label="On this page" style={styles.toc}>
        <a href="#scope" style={styles.tocLink}>Scope & Who We Are</a>
        <a href="#data-we-collect" style={styles.tocLink}>Data We Collect</a>
        <a href="#how-we-use" style={styles.tocLink}>How We Use Data</a>
        <a href="#legal-bases" style={styles.tocLink}>Legal Bases</a>
        <a href="#cookies" style={styles.tocLink}>Cookies</a>
        <a href="#ai-processing" style={styles.tocLink}>AI Processing</a>
        <a href="#retention" style={styles.tocLink}>Data Retention</a>
        <a href="#sharing" style={styles.tocLink}>Sharing</a>
        <a href="#transfers" style={styles.tocLink}>International Transfers</a>
        <a href="#your-rights" style={styles.tocLink}>Your Rights</a>
        <a href="#security" style={styles.tocLink}>Security</a>
        <a href="#children" style={styles.tocLink}>Children</a>
        <a href="#changes" style={styles.tocLink}>Changes</a>
        <a href="#contact" style={styles.tocLink}>Contact</a>
      </nav>

      <section id="scope" style={styles.section}>
        <h2 style={styles.h2}>1) Scope & Who We Are</h2>
        <p style={styles.p}>
          This Privacy Policy applies to our website and services available through it, including forms such as
          <span> </span>
          <Link to="/contact" style={styles.link}>Contact</Link>,{' '}
          <Link to="/quote" style={styles.link}>Request a quote</Link>, and any booking or demo request flows. It also covers
          our AI‑powered features and tools we make available from time to time.
        </p>
        <p style={styles.p}>
          Controller: Linked (the “Studio”, “we”, “us”). If you have questions about this policy or how we handle your data,
          email us at <a href="mailto:privacy@linked.studio" style={styles.link}>privacy@linked.studio</a>.
        </p>
      </section>

      <section id="data-we-collect" style={styles.section}>
        <h2 style={styles.h2}>2) Data We Collect</h2>

        <h3 style={styles.h3}>a) Information you provide</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Contact and identification details (name, email, phone, company, role).</li>
          <li style={styles.li}>Project information and requirements shared in forms or during consultations.</li>
          <li style={styles.li}>Scheduling preferences and availability for calls or demos.</li>
          <li style={styles.li}>Files or links you upload or share for scope/estimation.</li>
        </ul>

        <h3 style={styles.h3}>b) Information we collect automatically</h3>
        <p style={styles.p}>
          We may log basic technical data for reliability, security, and analytics:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Device and browser type/version, operating system, language, screen size.</li>
          <li style={styles.li}>IP address (or truncated IP), general location at the city/region level.</li>
          <li style={styles.li}>Pages viewed, referring URL, session duration, and interactions.</li>
          <li style={styles.li}>Error diagnostics and performance telemetry.</li>
        </ul>

        <h3 style={styles.h3}>c) Information from third parties</h3>
        <p style={styles.p}>
          If you schedule with us or interact via third‑party tools (e.g., analytics, email, scheduling, or CRM vendors),
          we may receive data from those providers to coordinate communication and service delivery.
        </p>

        <p style={styles.small}>
          Forms on this site may submit to endpoints like <span style={styles.code}>/api/booking</span> and{' '}
          <span style={styles.code}>/api/quote</span>, which process your submissions and forward them securely to our internal
          systems.
        </p>
      </section>

      <section id="how-we-use" style={styles.section}>
        <h2 style={styles.h2}>3) How We Use Data</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Respond to inquiries, provide quotes, and schedule consultations.</li>
          <li style={styles.li}>Plan, deliver, and support our services and projects.</li>
          <li style={styles.li}>Operate, secure, debug, and improve our website and infrastructure.</li>
          <li style={styles.li}>Personalize content, measure performance, and understand usage.</li>
          <li style={styles.li}>Send updates about services or portfolio, subject to your preferences and applicable law.</li>
          <li style={styles.li}>Comply with legal obligations and enforce our agreements.</li>
        </ul>
      </section>

      <section id="legal-bases" style={styles.section}>
        <h2 style={styles.h2}>4) Legal Bases (EEA/UK)</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Contract</strong> – when processing is necessary to respond to your request or deliver services.</li>
          <li style={styles.li}><strong>Legitimate interests</strong> – to operate, secure, and improve our services in a way that respects your privacy.</li>
          <li style={styles.li}><strong>Consent</strong> – for optional analytics/marketing or where required.</li>
          <li style={styles.li}><strong>Legal obligation</strong> – to meet record‑keeping, tax, or regulatory requirements.</li>
        </ul>
      </section>

      <section id="cookies" style={styles.section}>
        <h2 style={styles.h2}>5) Cookies and Similar Technologies</h2>
        <p style={styles.p}>
          We may use cookies or similar technologies to keep the site secure, remember preferences, and understand usage.
          Where required, we present controls so you can accept, reject, or customize optional cookies. You can also control
          cookies in your browser settings, noting this may impact site functionality.
        </p>
      </section>

      <section id="ai-processing" style={styles.section}>
        <h2 style={styles.h2}>6) AI‑Related Processing</h2>
        <p style={styles.p}>
          Some features, demos, or services may use third‑party AI providers (e.g., large language model APIs) to process
          content you submit. We aim to minimize personal data sent to AI systems and may perform redaction or masking where
          appropriate. Unless explicitly stated, your inputs are used only to provide the requested functionality and are not
          used by us to train public models.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Do not submit sensitive personal data unless we explicitly request it for a signed engagement.</li>
          <li style={styles.li}>We select vendors that act as processors and commit to confidentiality and security.</li>
          <li style={styles.li}>We retain AI inputs/outputs only as needed to provide the feature, debug, or fulfill your request.</li>
        </ul>
      </section>

      <section id="retention" style={styles.section}>
        <h2 style={styles.h2}>7) Data Retention</h2>
        <p style={styles.p}>
          We keep personal data only as long as necessary for the purposes described above:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Inquiry and quote records: typically up to 24 months from last interaction.</li>
          <li style={styles.li}>Contract and billing records: retained per legal and tax requirements.</li>
          <li style={styles.li}>Security and diagnostic logs: typically 30–180 days, unless needed longer for investigations.</li>
        </ul>
        <p style={styles.p}>
          We will delete or anonymize data once it is no longer needed, unless we are legally required to keep it.
        </p>
      </section>

      <section id="sharing" style={styles.section}>
        <h2 style={styles.h2}>8) How We Share Information</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Service providers</strong> processing data on our behalf (hosting, email, analytics, scheduling, CRM, payment).</li>
          <li style={styles.li}><strong>Business transfers</strong> in connection with a merger, acquisition, or asset sale.</li>
          <li style={styles.li}><strong>Legal and safety</strong> to comply with laws, enforce agreements, or protect rights and security.</li>
        </ul>
        <p style={styles.p}>
          We do not sell personal information. We do not share it with third parties for their independent marketing without your consent.
        </p>
      </section>

      <section id="transfers" style={styles.section}>
        <h2 style={styles.h2}>9) International Data Transfers</h2>
        <p style={styles.p}>
          If data is transferred outside your country (including transfers from the EEA/UK to other jurisdictions), we rely on
          appropriate safeguards such as Standard Contractual Clauses and implement additional protections where required.
        </p>
      </section>

      <section id="your-rights" style={styles.section}>
        <h2 style={styles.h2}>10) Your Privacy Rights</h2>
        <h3 style={styles.h3}>EEA/UK</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Access, correct, or delete your personal data.</li>
          <li style={styles.li}>Object to or restrict certain processing.</li>
          <li style={styles.li}>Data portability and the right to withdraw consent at any time.</li>
          <li style={styles.li}>Lodge a complaint with your local supervisory authority.</li>
        </ul>
        <h3 style={styles.h3}>California (CCPA/CPRA)</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Know, access, and delete personal information.</li>
          <li style={styles.li}>Correct inaccuracies and limit use of sensitive personal information.</li>
          <li style={styles.li}>Opt‑out of sale or sharing of personal information. We do not sell personal information.</li>
          <li style={styles.li}>No discrimination for exercising your rights.</li>
        </ul>
        <p style={styles.p}>
          To exercise rights, email <a href="mailto:privacy@linked.studio" style={styles.link}>privacy@linked.studio</a>. We may
          need to verify your identity and, where applicable, your authority to make the request.
        </p>
      </section>

      <section id="security" style={styles.section}>
        <h2 style={styles.h2}>11) Security</h2>
        <p style={styles.p}>
          We use technical and organizational measures designed to protect personal data against unauthorized access, loss, or misuse.
          No method of transmission or storage is 100% secure, so we cannot guarantee absolute security, but we aim to apply industry
          best practices and least‑privilege access.
        </p>
      </section>

      <section id="children" style={styles.section}>
        <h2 style={styles.h2}>12) Children’s Privacy</h2>
        <p style={styles.p}>
          Our site and services are not directed to children under 16, and we do not knowingly collect personal data from them.
          If you believe a child has provided us personal data, contact us and we will take appropriate steps to remove it.
        </p>
      </section>

      <section id="changes" style={styles.section}>
        <h2 style={styles.h2}>13) Changes to This Policy</h2>
        <p style={styles.p}>
          We may update this policy to reflect changes to our practices or for legal, technical, or operational reasons. We will
          update the “Last updated” date at the top and, where appropriate, provide additional notice.
        </p>
      </section>

      <section id="contact" style={styles.section}>
        <h2 style={styles.h2}>14) Contact Us</h2>
        <p style={styles.p}>
          Questions about this policy or your data? Contact us at{' '}
          <a href="mailto:privacy@linked.studio" style={styles.link}>privacy@linked.studio</a>.
        </p>
        <hr style={styles.hr} />
        <div style={styles.footerNav} aria-label="Explore">
          <Link to="/quote" style={styles.link}>Request a quote</Link>
          <Link to="/contact" style={styles.link}>Book a free consult</Link>
          <Link to="/work" style={styles.link}>View portfolio</Link>
          <Link to="/services" style={styles.link}>Services</Link>
          <Link to="/" style={styles.link}>Home</Link>
        </div>
      </section>
    </main>
  );
}