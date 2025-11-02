import React, { useMemo, useState } from 'react';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

type ContactFormProps = {
  submitLabel?: string;
  successTitle?: string;
  successMessage?: string;
  compact?: boolean;
  context?: string;
  onSuccess?: () => void;
};

type FormDataShape = {
  name: string;
  email: string;
  company?: string;
  website?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
  consent: boolean;
  // spam honeypot
  companyFax?: string;
};

const defaultValues: FormDataShape = {
  name: '',
  email: '',
  company: '',
  website: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: '',
  consent: true,
  companyFax: '',
};

const projectTypes = [
  'Web application',
  'Process automation',
  'E-commerce',
  'AI-powered service',
  'Marketing site',
  '3rd-party integrations',
  'Other',
];

const budgets = [
  'Undisclosed',
  '< $10k',
  '$10k – $25k',
  '$25k – $50k',
  '$50k – $100k',
  '$100k+',
];

const timelines = ['ASAP', '2–4 weeks', '1–3 months', 'Flexible'];

function getUTM() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'ref'].forEach((k) => {
    const v = params.get(k);
    if (v) utm[k] = v;
  });
  return utm;
}

export default function ContactForm({
  submitLabel = 'Send message',
  successTitle = 'Thanks — we’ll be in touch shortly.',
  successMessage = 'We typically respond within 1 business day. Want to see our work while you wait?',
  compact = false,
  context,
  onSuccess,
}: ContactFormProps) {
  const [data, setData] = useState<FormDataShape>({ ...defaultValues });
  const [errors, setErrors] = useState<Partial<Record<keyof FormDataShape, string>>>({});
  const [status, setStatus] = useState<SubmitState>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const isDisabled = status === 'submitting';

  const colStyle = useMemo(() => (compact ? styles.colFull : styles.colHalf), [compact]);

  function validate(input: FormDataShape) {
    const e: Partial<Record<keyof FormDataShape, string>> = {};
    if (!input.name.trim()) e.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) e.email = 'Please enter a valid email';
    if (!input.message.trim()) e.message = 'Please add a short message';
    if (!input.consent) e.consent = 'Please accept the privacy notice';
    return e;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setServerError(null);

    // Honeypot check
    if (data.companyFax && data.companyFax.trim().length > 0) {
      return; // silently drop bots
    }

    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setStatus('submitting');
    try {
      const payload = {
        ...data,
        consent: data.consent ? 'true' : 'false',
        meta: {
          path: typeof window !== 'undefined' ? window.location.pathname : '',
          context: context || 'contact',
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
          ...getUTM(),
        },
      };

      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(text || `Request failed (${res.status})`);
      }

      setStatus('success');
      setData({ ...defaultValues });
      if (onSuccess) onSuccess();
    } catch (err: any) {
      setStatus('error');
      setServerError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      // keep status if success or error
      if (status !== 'success' && status !== 'error') setStatus('idle');
    }
  }

  function handleChange<K extends keyof FormDataShape>(key: K, value: FormDataShape[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  if (status === 'success') {
    return (
      <div style={styles.successWrap} aria-live="polite">
        <div style={styles.successCard}>
          <div style={styles.successIcon} aria-hidden="true">✓</div>
          <h3 style={styles.successTitle}>{successTitle}</h3>
          <p style={styles.successText}>{successMessage}</p>
          <div style={styles.successActions}>
            <a href="/work" style={styles.secondaryButton}>View portfolio</a>
            <a href="/quote" style={styles.ghostButton}>Request a quote</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form} noValidate>
      <div style={styles.header}>
        <h3 style={styles.title}>Tell us about your project</h3>
        <p style={styles.subtitle}>Clear scopes, fast iteration, automation-first. We’ll reply within 1 business day.</p>
      </div>

      {serverError && (
        <div role="alert" style={styles.alert}>
          {serverError}
        </div>
      )}

      <div style={styles.row}>
        <div style={colStyle}>
          <label style={styles.label}>
            <span>Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Jane Doe"
              value={data.name}
              onChange={(e) => handleChange('name', e.target.value)}
              style={{ ...styles.input, ...(errors.name ? styles.inputError : null) }}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'error-name' : undefined}
              disabled={isDisabled}
              required
            />
          </label>
          {errors.name && (
            <div id="error-name" style={styles.errorText}>{errors.name}</div>
          )}
        </div>
        <div style={colStyle}>
          <label style={styles.label}>
            <span>Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="jane@company.com"
              value={data.email}
              onChange={(e) => handleChange('email', e.target.value)}
              style={{ ...styles.input, ...(errors.email ? styles.inputError : null) }}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'error-email' : undefined}
              disabled={isDisabled}
              required
            />
          </label>
          {errors.email && (
            <div id="error-email" style={styles.errorText}>{errors.email}</div>
          )}
        </div>
      </div>

      <div style={styles.row}>
        <div style={colStyle}>
          <label style={styles.label}>
            <span>Company (optional)</span>
            <input
              type="text"
              name="company"
              placeholder="Acme Inc."
              value={data.company}
              onChange={(e) => handleChange('company', e.target.value)}
              style={styles.input}
              disabled={isDisabled}
            />
          </label>
        </div>
        <div style={colStyle}>
          <label style={styles.label}>
            <span>Website (optional)</span>
            <input
              type="url"
              name="website"
              placeholder="https://example.com"
              value={data.website}
              onChange={(e) => handleChange('website', e.target.value)}
              style={styles.input}
              disabled={isDisabled}
            />
          </label>
        </div>
      </div>

      <div style={styles.row}>
        <div style={colStyle}>
          <label style={styles.label}>
            <span>Project type</span>
            <select
              name="projectType"
              value={data.projectType}
              onChange={(e) => handleChange('projectType', e.target.value)}
              style={styles.select}
              disabled={isDisabled}
            >
              <option value="">Select...</option>
              {projectTypes.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </label>
        </div>
        <div style={colStyle}>
          <div style={{ display: 'flex', gap: 12 }}>
            <label style={{ ...styles.label, flex: 1 }}>
              <span>Budget</span>
              <select
                name="budget"
                value={data.budget}
                onChange={(e) => handleChange('budget', e.target.value)}
                style={styles.select}
                disabled={isDisabled}
              >
                <option value="">Select...</option>
                {budgets.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </label>
            <label style={{ ...styles.label, flex: 1 }}>
              <span>Timeline</span>
              <select
                name="timeline"
                value={data.timeline}
                onChange={(e) => handleChange('timeline', e.target.value)}
                style={styles.select}
                disabled={isDisabled}
              >
                <option value="">Select...</option>
                {timelines.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>

      <label style={styles.label}>
        <span>How can we help?</span>
        <textarea
          name="message"
          placeholder="Share a brief about your goals, scope, and any links or docs."
          value={data.message}
          onChange={(e) => handleChange('message', e.target.value)}
          style={{ ...styles.textarea, ...(errors.message ? styles.inputError : null) }}
          rows={6}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'error-message' : undefined}
          disabled={isDisabled}
          required
        />
      </label>
      {errors.message && (
        <div id="error-message" style={styles.errorText}>{errors.message}</div>
      )}

      {/* Honeypot field */}
      <div style={styles.honeypot} aria-hidden="true">
        <label>
          Do not fill this out
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={data.companyFax}
            onChange={(e) => handleChange('companyFax', e.target.value)}
          />
        </label>
      </div>

      <div style={styles.footerRow}>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={data.consent}
            onChange={(e) => handleChange('consent', e.target.checked)}
            disabled={isDisabled}
          />
          <span style={styles.checkboxText}>
            I agree to be contacted and to the processing of my information as described in the privacy policy.
          </span>
        </label>
        {errors.consent && <div style={styles.errorText}>{errors.consent}</div>}

        <div style={styles.actions}>
          <button
            type="submit"
            disabled={isDisabled}
            style={{ ...styles.button, ...(isDisabled ? styles.buttonDisabled : null) }}
          >
            {status === 'submitting' ? 'Sending…' : submitLabel}
          </button>
          <a href="/work" style={styles.linkButton}>View portfolio</a>
        </div>
      </div>
    </form>
  );
}

const styles: Record<string, React.CSSProperties> = {
  form: {
    width: '100%',
    maxWidth: 920,
    margin: '0 auto',
    background: 'linear-gradient(180deg, rgba(250,250,252,1) 0%, rgba(245,246,248,1) 100%)',
    border: '1px solid #E8E9EE',
    boxShadow: '0 10px 30px rgba(16, 24, 40, 0.06)',
    borderRadius: 16,
    padding: 24,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    margin: 0,
    fontSize: 22,
    lineHeight: 1.3,
    fontWeight: 700,
    color: '#0B1220',
  },
  subtitle: {
    margin: '6px 0 0 0',
    fontSize: 14,
    color: '#4B5563',
  },
  row: {
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    marginTop: 16,
  },
  colHalf: {
    flex: '1 1 280px',
    minWidth: 260,
  },
  colFull: {
    flex: '1 1 100%',
    minWidth: '100%',
  },
  label: {
    display: 'block',
    color: '#111827',
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    border: '1px solid #D1D5DB',
    padding: '8px 12px',
    fontSize: 14,
    outline: 'none',
    backgroundColor: '#fff',
  },
  select: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    border: '1px solid #D1D5DB',
    padding: '8px 12px',
    fontSize: 14,
    outline: 'none',
    backgroundColor: '#fff',
    appearance: 'none',
    backgroundImage:
      'linear-gradient(45deg, transparent 50%, #6B7280 50%), linear-gradient(135deg, #6B7280 50%, transparent 50%), linear-gradient(to right, #fff, #fff)',
    backgroundPosition: 'calc(100% - 18px) 16px, calc(100% - 12px) 16px, 0 0',
    backgroundSize: '6px 6px, 6px 6px, 100% 100%',
    backgroundRepeat: 'no-repeat',
  },
  textarea: {
    width: '100%',
    borderRadius: 10,
    border: '1px solid #D1D5DB',
    padding: '10px 12px',
    fontSize: 14,
    outline: 'none',
    backgroundColor: '#fff',
    resize: 'vertical',
    minHeight: 120,
  },
  inputError: {
    borderColor: '#DC2626',
    boxShadow: '0 0 0 3px rgba(220, 38, 38, 0.08)',
  },
  footerRow: {
    marginTop: 18,
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
    fontSize: 13,
    color: '#374151',
  },
  checkboxText: {
    lineHeight: 1.4,
  },
  actions: {
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    marginTop: 14,
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#111827',
    color: '#fff',
    border: '1px solid #111827',
    borderRadius: 10,
    padding: '10px 16px',
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 120ms ease',
  },
  buttonDisabled: {
    opacity: 0.65,
    cursor: 'not-allowed',
  },
  linkButton: {
    textDecoration: 'none',
    color: '#111827',
    fontSize: 14,
    fontWeight: 600,
    padding: '10px 14px',
    borderRadius: 10,
    border: '1px solid #D1D5DB',
    backgroundColor: '#fff',
  },
  alert: {
    backgroundColor: '#FEF2F2',
    color: '#991B1B',
    border: '1px solid #FECACA',
    padding: '10px 12px',
    borderRadius: 10,
    fontSize: 14,
    marginTop: 8,
  },
  errorText: {
    color: '#B91C1C',
    fontSize: 12,
    marginTop: 6,
  },
  honeypot: {
    position: 'absolute',
    left: '-10000px',
    top: 'auto',
    width: 1,
    height: 1,
    overflow: 'hidden',
  },
  successWrap: {
    width: '100%',
    maxWidth: 680,
    margin: '0 auto',
    borderRadius: 16,
    border: '1px solid #E8E9EE',
    background: '#ffffff',
    padding: 24,
    boxShadow: '0 10px 30px rgba(16, 24, 40, 0.06)',
  },
  successCard: {
    textAlign: 'center' as const,
  },
  successIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 999,
    background: '#DCFCE7',
    color: '#166534',
    fontWeight: 800,
    marginBottom: 8,
    fontSize: 20,
  },
  successTitle: {
    margin: '6px 0',
    fontSize: 20,
    color: '#0B1220',
  },
  successText: {
    margin: '0 0 12px 0',
    color: '#4B5563',
    fontSize: 14,
  },
  successActions: {
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
  },
  secondaryButton: {
    textDecoration: 'none',
    backgroundColor: '#111827',
    color: '#fff',
    border: '1px solid #111827',
    borderRadius: 10,
    padding: '10px 16px',
    fontSize: 14,
    fontWeight: 600,
  },
  ghostButton: {
    textDecoration: 'none',
    color: '#111827',
    fontSize: 14,
    fontWeight: 600,
    padding: '10px 14px',
    borderRadius: 10,
    border: '1px solid #D1D5DB',
    backgroundColor: '#fff',
  },
};