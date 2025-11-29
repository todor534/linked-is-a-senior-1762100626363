import { type FormEvent, useEffect, useMemo, useRef, useState } from 'react';

type Props = {
  compact?: boolean;
  onSuccess?: () => void;
  presetServices?: string[];
};

type Errors = Partial<Record<keyof FormValues, string>> & { form?: string };

type FormValues = {
  name: string;
  email: string;
  company: string;
  phone: string;
  website: string;
  budget: string;
  timeline: string;
  brief: string;
  referral: string;
  services: string[];
  hp: string; // honeypot
};

type ApiResponse = {
  success?: boolean;
  message?: string;
  errors?: Record<string, string>;
};

const SERVICE_OPTIONS = [
  'AI assistant / automation',
  'Web app / portal',
  'E-commerce',
  'Marketing site',
  'Dashboards & BI',
  '3rd-party integrations',
  'Other',
];

const BUDGET_OPTIONS = ['< $10k', '$10k – $25k', '$25k – $50k', '$50k – $100k', '$100k+'];
const TIMELINE_OPTIONS = ['ASAP', '2–4 weeks', '1–3 months', '3–6 months', 'Exploring'];

const styles = {
  card: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-sm)',
  } as const,
  header: {
    marginBottom: 'var(--space-4)',
  } as const,
  title: {
    margin: 0,
    fontSize: '1.25rem',
    lineHeight: 1.2,
    color: 'var(--heading)',
    fontWeight: 700,
  } as const,
  subtitle: {
    margin: 0,
    marginTop: '6px',
    fontSize: '0.875rem',
    color: 'var(--muted)',
  } as const,
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-4)',
  } as const,
  row: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: 'var(--space-3)',
  },
  field: {
    flex: '1 1 260px',
    minWidth: 220,
  } as const,
  label: {
    display: 'block',
    fontSize: '0.8125rem',
    fontWeight: 600,
    color: 'var(--heading)',
    marginBottom: '6px',
  } as const,
  required: {
    color: 'var(--danger)',
    marginLeft: 4,
  } as const,
  input: {
    width: '100%',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)',
    padding: '10px 12px',
    fontSize: '0.9375rem',
    lineHeight: 1.4,
    color: 'var(--text)',
    outline: 'none',
    background: 'var(--bg)',
  } as const,
  textarea: {
    width: '100%',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)',
    padding: '10px 12px',
    fontSize: '0.9375rem',
    lineHeight: 1.5,
    color: 'var(--text)',
    outline: 'none',
    minHeight: 120,
    resize: 'vertical' as const,
    background: 'var(--bg)',
  } as const,
  help: {
    marginTop: '6px',
    fontSize: '0.75rem',
    color: 'var(--muted)',
  } as const,
  errorText: {
    marginTop: '6px',
    fontSize: '0.75rem',
    color: 'var(--danger)',
  } as const,
  checkboxGroup: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '8px',
  } as const,
  checkboxItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    border: '1px solid var(--border)',
    borderRadius: '999px',
    background: 'var(--surface-2)',
    cursor: 'pointer',
    fontSize: '0.875rem',
    color: 'var(--text)',
    transition: 'all 0.2s ease',
  } as const,
  checkbox: {
    display: 'inline-block',
    width: 16,
    height: 16,
    accentColor: 'var(--primary)',
  } as const,
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-3)',
    marginTop: 'var(--space-2)',
    flexWrap: 'wrap' as const,
  } as const,
  button: {
    appearance: 'none' as const,
    border: 'none',
    borderRadius: 'var(--radius-md)',
    padding: '10px 18px',
    fontSize: '0.9375rem',
    fontWeight: 600,
    background: 'var(--primary)',
    color: '#ffffff',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
  } as const,
  secondaryText: {
    fontSize: '0.8125rem',
    color: 'var(--muted)',
  } as const,
  successBox: {
    background: 'color-mix(in oklab, var(--success), transparent 90%)',
    border: '1px solid color-mix(in oklab, var(--success), transparent 70%)',
    color: 'var(--success)',
    padding: '12px',
    borderRadius: 'var(--radius-md)',
    fontSize: '0.9375rem',
  } as const,
  errorBox: {
    background: 'color-mix(in oklab, var(--danger), transparent 90%)',
    border: '1px solid color-mix(in oklab, var(--danger), transparent 70%)',
    color: 'var(--danger)',
    padding: '12px',
    borderRadius: 'var(--radius-md)',
    fontSize: '0.9375rem',
  } as const,
  charCounter: {
    fontSize: '0.75rem',
    color: 'var(--muted)',
    marginLeft: '8px',
  } as const,
  hiddenHP: {
    position: 'absolute' as const,
    left: '-9999px',
    width: 1,
    height: 1,
    overflow: 'hidden',
  },
};

export default function QuoteForm({ compact = false, onSuccess, presetServices = [] }: Props) {
  const initialServices = useMemo(() => {
    const set = new Set<string>(presetServices.filter((s) => SERVICE_OPTIONS.includes(s)));
    return Array.from(set);
  }, [presetServices]);

  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    budget: '',
    timeline: '',
    brief: '',
    referral: '',
    services: initialServices,
    hp: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const submitBtnRef = useRef<HTMLButtonElement | null>(null);
  const successRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // merge preset services only on mount or change
    setValues((prev) => {
      const set = new Set([...prev.services, ...initialServices].filter((s) => SERVICE_OPTIONS.includes(s)));
      return { ...prev, services: Array.from(set) };
    });
  }, [initialServices]);

  function handleInputChange<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const { [key]: _, ...rest } = prev;
        return rest;
      });
    }
  }

  function toggleService(svc: string) {
    setValues((prev) => {
      const exists = prev.services.includes(svc);
      const next = exists ? prev.services.filter((s) => s !== svc) : [...prev.services, svc];
      return { ...prev, services: next };
    });
    if (errors.services) {
      setErrors((prev) => {
        const { services: _s, ...rest } = prev;
        return rest;
      });
    }
  }

  function validate(v: FormValues): Errors {
    const e: Errors = {};
    if (!v.name.trim()) e.name = 'Please enter your name';
    if (!v.email.trim()) e.email = 'Please enter an email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Please enter a valid email';
    if (!v.services.length) e.services = 'Select at least one service';
    if (!v.brief.trim() || v.brief.trim().length < 20) e.brief = 'Tell us a bit more (20+ characters)';
    if (v.website && !isLikelyUrl(v.website)) e.website = 'Please enter a valid URL (include https://)';
    if (v.phone && !/^[\d\-\+\s\(\)\.]{7,}$/.test(v.phone.trim())) e.phone = 'Please enter a valid phone';
    return e;
  }

  function isLikelyUrl(url: string) {
    try {
      const u = new URL(url);
      return !!u.protocol && !!u.host;
    } catch {
      return false;
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerMessage(null);

    // Honeypot
    if (values.hp) {
      setStatus('success');
      setServerMessage('Thanks! We will be in touch shortly.');
      return;
    }

    const e1 = validate(values);
    if (Object.keys(e1).length) {
      setErrors(e1);
      setStatus('error');
      setServerMessage('Please fix the highlighted fields.');
      // focus first error
      const firstKey = Object.keys(e1)[0] as keyof FormValues;
      const el = document.querySelector<HTMLInputElement | HTMLTextAreaElement>(`[name="${firstKey}"]`);
      if (el) el.focus();
      return;
    }

    setStatus('loading');

    const composedMessage =
      `Project brief:\n${values.brief.trim()}\n\n` +
      `Services: ${values.services.join(', ') || 'Not specified'}\n` +
      `Budget: ${values.budget || 'Not specified'}\n` +
      `Timeline: ${values.timeline || 'Not specified'}\n` +
      `Company: ${values.company || '—'}\n` +
      `Website: ${values.website || '—'}\n` +
      `Phone: ${values.phone || '—'}\n` +
      `Referral: ${values.referral || '—'}\n` +
      `Page: ${typeof window !== 'undefined' ? window.location.href : ''}`;

    const payload = {
      name: values.name,
      email: values.email,
      company: values.company,
      phone: values.phone,
      website: values.website,
      services: values.services,
      budget: values.budget,
      timeline: values.timeline,
      brief: values.brief,
      referral: values.referral,
      message: composedMessage,
      page: typeof window !== 'undefined' ? window.location.href : '',
      source: 'site-quote-form',
    };

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data: ApiResponse | undefined = await safeParseJSON(res);
      if (!res.ok) {
        const msg = (data && (data.message || data.errors && Object.values(data.errors)[0])) || 'An error occurred. Please try again.';
        setStatus('error');
        setServerMessage(msg);
        if (data && data.errors) {
          setErrors((prev) => ({ ...prev, ...data.errors }));
        }
        return;
      }

      if (data && data.errors && Object.keys(data.errors).length) {
        setErrors((prev) => ({ ...prev, ...data.errors }));
        setStatus('error');
        setServerMessage(data.message || 'Please review the highlighted fields.');
        return;
      }

      setStatus('success');
      setServerMessage(data?.message || 'Thanks! We will be in touch within 1 business day.');
      successRef.current?.focus();
      if (onSuccess) onSuccess();

      // optionally reset, but keep email/name to allow follow-up
      setValues((prev) => ({
        ...prev,
        services: initialServices,
        budget: '',
        timeline: '',
        brief: '',
        referral: '',
      }));
      setErrors({});
    } catch (err) {
      setStatus('error');
      setServerMessage('Network error. Please try again or email us.');
    } finally {
      // no-op
    }
  }

  return (
    <div style={{ ...styles.card, padding: compact ? 16 : 24 }}>
      <div style={styles.header}>
        <h3 style={styles.title}>Request a quote</h3>
        <p style={styles.subtitle}>Clear scopes. Fast iteration. Senior engineering.</p>
      </div>

      {status === 'success' && serverMessage ? (
        <div
          style={styles.successBox}
          role="status"
          aria-live="polite"
          tabIndex={-1}
          ref={successRef}
        >
          {serverMessage}
        </div>
      ) : null}

      {status === 'error' && serverMessage ? (
        <div style={styles.errorBox} role="alert" aria-live="assertive">
          {serverMessage}
        </div>
      ) : null}

      <form style={styles.form} onSubmit={handleSubmit} noValidate>
        {/* Honeypot */}
        <div aria-hidden="true" style={styles.hiddenHP}>
          <label>
            Do not fill this field
            <input
              type="text"
              name="hp"
              tabIndex={-1}
              autoComplete="off"
              value={values.hp}
              onChange={(e) => handleInputChange('hp', e.target.value)}
            />
          </label>
        </div>

        <div style={styles.row}>
          <div style={styles.field}>
            <label htmlFor="name" style={styles.label}>
              Your name <span style={styles.required}>*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jane Doe"
              value={values.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              style={{
                ...styles.input,
                borderColor: errors.name ? 'var(--danger)' : (styles.input as any).borderColor,
              }}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'err-name' : undefined}
              required
            />
            {errors.name ? <div id="err-name" style={styles.errorText}>{errors.name}</div> : null}
          </div>

          <div style={styles.field}>
            <label htmlFor="email" style={styles.label}>
              Work email <span style={styles.required}>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jane@company.com"
              value={values.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              style={{
                ...styles.input,
                borderColor: errors.email ? 'var(--danger)' : (styles.input as any).borderColor,
              }}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'err-email' : undefined}
              required
            />
            {errors.email ? <div id="err-email" style={styles.errorText}>{errors.email}</div> : null}
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.field}>
            <label htmlFor="company" style={styles.label}>Company</label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Acme Inc."
              value={values.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label htmlFor="website" style={styles.label}>Company website</label>
            <input
              id="website"
              name="website"
              type="url"
              placeholder="https://example.com"
              value={values.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              style={{
                ...styles.input,
                borderColor: errors.website ? 'var(--danger)' : (styles.input as any).borderColor,
              }}
              aria-invalid={!!errors.website}
              aria-describedby={errors.website ? 'err-website' : undefined}
            />
            {errors.website ? <div id="err-website" style={styles.errorText}>{errors.website}</div> : null}
          </div>
          <div style={styles.field}>
            <label htmlFor="phone" style={styles.label}>Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 555 123 4567"
              value={values.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              style={{
                ...styles.input,
                borderColor: errors.phone ? 'var(--danger)' : (styles.input as any).borderColor,
              }}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'err-phone' : undefined}
            />
            {errors.phone ? <div id="err-phone" style={styles.errorText}>{errors.phone}</div> : null}
          </div>
        </div>

        <div>
          <label style={styles.label}>
            What do you need? <span style={styles.required}>*</span>
          </label>
          <div style={styles.checkboxGroup} role="group" aria-label="Services">
            {SERVICE_OPTIONS.map((svc) => {
              const selected = values.services.includes(svc);
              return (
                <label
                  key={svc}
                  style={{
                    ...styles.checkboxItem,
                    borderColor: selected ? 'var(--primary)' : (styles.checkboxItem as any).borderColor,
                    background: selected ? 'var(--primary)' : (styles.checkboxItem as any).background,
                    color: selected ? '#ffffff' : 'var(--text)',
                  }}
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={svc}
                    checked={selected}
                    onChange={() => toggleService(svc)}
                    style={styles.checkbox}
                    aria-checked={selected}
                  />
                  <span>{svc}</span>
                </label>
              );
            })}
          </div>
          {errors.services ? <div style={styles.errorText}>{errors.services}</div> : <div style={styles.help}>Select all that apply</div>}
        </div>

        <div style={styles.row}>
          <div style={styles.field}>
            <label htmlFor="budget" style={styles.label}>Estimated budget</label>
            <select
              id="budget"
              name="budget"
              value={values.budget}
              onChange={(e) => handleInputChange('budget', e.target.value)}
              style={styles.input as any}
            >
              <option value="">Select a range</option>
              {BUDGET_OPTIONS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div style={styles.field}>
            <label htmlFor="timeline" style={styles.label}>Timeline</label>
            <select
              id="timeline"
              name="timeline"
              value={values.timeline}
              onChange={(e) => handleInputChange('timeline', e.target.value)}
              style={styles.input as any}
            >
              <option value="">Select a timeline</option>
              {TIMELINE_OPTIONS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div style={styles.field}>
            <label htmlFor="referral" style={styles.label}>How did you hear about us?</label>
            <input
              id="referral"
              name="referral"
              type="text"
              placeholder="Referral, LinkedIn, Google, etc."
              value={values.referral}
              onChange={(e) => handleInputChange('referral', e.target.value)}
              style={styles.input}
            />
          </div>
        </div>

        <div>
          <label htmlFor="brief" style={styles.label}>
            Project brief <span style={styles.required}>*</span>
          </label>
          <textarea
            id="brief"
            name="brief"
            placeholder="Tell us about your goals, users, scope, and any relevant context..."
            value={values.brief}
            onChange={(e) => handleInputChange('brief', e.target.value)}
            style={{
              ...styles.textarea,
              borderColor: errors.brief ? 'var(--danger)' : (styles.textarea as any).borderColor,
            }}
            aria-invalid={!!errors.brief}
            aria-describedby={errors.brief ? 'err-brief' : 'brief-help'}
          />
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            {errors.brief ? (
              <div id="err-brief" style={styles.errorText}>{errors.brief}</div>
            ) : (
              <div id="brief-help" style={styles.help}>The more detail, the better. We reply within 1 business day.</div>
            )}
            <div style={styles.charCounter}>{values.brief.trim().length} chars</div>
          </div>
        </div>

        <div style={styles.actions}>
          <button
            ref={submitBtnRef}
            type="submit"
            style={{
              ...styles.button,
              opacity: status === 'loading' ? 0.8 : 1,
              cursor: status === 'loading' ? 'progress' : 'pointer',
            }}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending…' : 'Request a quote'}
          </button>
          <span style={styles.secondaryText}>
            Prefer to chat? Book a free consult from our calendar.
          </span>
        </div>
      </form>
    </div>
  );
}

async function safeParseJSON(res: Response): Promise<ApiResponse | undefined> {
  try {
    return (await res.json()) as ApiResponse;
  } catch {
    return undefined;
  }
}