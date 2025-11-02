import type { } from 'node-fetch'; // no-op type import for environments that provide Fetch API

type BookingPayload = {
  name: string;
  email: string;
  company?: string;
  website?: string;
  message: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  timezone?: string;
  preferredSlots?: string[];
  source?: string;
  // Honeypot fields (ignored by real users; used for spam detection)
  hp_field?: string;
  _hp?: string;
};

type BookingRecord = BookingPayload & {
  id: string;
  receivedAt: string;
  ip?: string;
  userAgent?: string | null;
};

export async function handle(req: Request): Promise<Response> {
  if (req.method === 'OPTIONS') {
    return respond(null, 204, { Allow: 'POST, OPTIONS' });
  }

  if (req.method !== 'POST') {
    return respond(
      { error: 'Method Not Allowed', allowed: ['POST'] },
      405,
      { Allow: 'POST' }
    );
  }

  let data: unknown;
  try {
    data = await req.json();
  } catch {
    return respond({ error: 'Invalid JSON body' }, 400);
  }

  const payload = coercePayload(data);

  // Honeypot spam check
  if (hasSpamIndicators(payload)) {
    // Pretend success to avoid tipping off bots
    return respond(
      {
        status: 'ok',
        message: 'Thanks! We will be in touch shortly.',
        id: cryptoRandomId(),
      },
      201
    );
  }

  const errors = validatePayload(payload);
  if (errors.length) {
    return respond({ error: 'Validation failed', details: errors }, 400);
  }

  const record: BookingRecord = {
    ...filterAllowed(payload),
    id: cryptoRandomId(),
    receivedAt: new Date().toISOString(),
    ip: getIp(req),
    userAgent: req.headers.get('user-agent'),
  };

  // Simulate processing (e.g., email, CRM, queue). Replace with real integration as needed.
  try {
    // eslint-disable-next-line no-console
    console.log('[booking] new consult request', safeLogRecord(record));
  } catch {
    // logging should not fail the request
  }

  return respond(
    {
      status: 'ok',
      message:
        "Thanks! You've been queued for a free consult. We'll reply within 1 business day.",
      id: record.id,
    },
    201
  );
}

function respond(body: unknown, status = 200, extraHeaders?: Record<string, string>): Response {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json; charset=utf-8',
    ...extraHeaders,
  };
  if (body === null) {
    return new Response(null, { status, headers });
  }
  return new Response(JSON.stringify(body), { status, headers });
}

function coercePayload(data: unknown): BookingPayload {
  const obj = (typeof data === 'object' && data !== null ? data : {}) as Record<string, unknown>;

  const preferredSlots = Array.isArray(obj.preferredSlots)
    ? obj.preferredSlots.map((v) => String(v)).slice(0, 10)
    : typeof obj.preferredSlots === 'string'
    ? String(obj.preferredSlots)
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .slice(0, 10)
    : undefined;

  return {
    name: str(obj.name),
    email: str(obj.email),
    company: optionalStr(obj.company),
    website: optionalStr(obj.website),
    message: str(obj.message),
    projectType: optionalStr(obj.projectType),
    budget: optionalStr(obj.budget),
    timeline: optionalStr(obj.timeline),
    timezone: optionalStr(obj.timezone),
    preferredSlots,
    source: optionalStr(obj.source),
    // honeypots
    hp_field: optionalStr(obj.hp_field),
    _hp: optionalStr(obj._hp),
  };
}

function validatePayload(p: BookingPayload): string[] {
  const errors: string[] = [];

  if (!p.name || p.name.length < 2) {
    errors.push('name must be at least 2 characters');
  }
  if (!p.email || !isEmail(p.email)) {
    errors.push('email must be a valid email');
  }
  if (!p.message || p.message.length < 10) {
    errors.push('message must be at least 10 characters');
  }

  // Length caps to protect downstream systems
  if (p.name && p.name.length > 100) errors.push('name is too long');
  if (p.company && p.company.length > 120) errors.push('company is too long');
  if (p.website && p.website.length > 200) errors.push('website is too long');
  if (p.message && p.message.length > 4000) errors.push('message is too long');

  // Basic URL check if provided
  if (p.website && !looksLikeUrl(p.website)) {
    errors.push('website must be a valid URL');
  }

  // Very basic content spam checks
  const blob = `${p.name} ${p.company ?? ''} ${p.message}`.toLowerCase();
  if (/(viagra|cialis|porn|casino|loan\s*approval)/.test(blob)) {
    errors.push('message content flagged');
  }

  return errors;
}

function hasSpamIndicators(p: BookingPayload): boolean {
  // Honeypot fields should be empty
  if (p.hp_field || p._hp) return true;

  // If website field looks like a generic spam link without message context
  if (p.website && !p.message) return true;

  // Oversized fields often indicate abuse
  if (p.message && p.message.length > 8000) return true;

  return false;
}

function filterAllowed(p: BookingPayload): BookingPayload {
  // Keep only whitelisted fields to avoid storing unexpected data
  return {
    name: p.name,
    email: p.email,
    company: p.company,
    website: p.website,
    message: p.message,
    projectType: p.projectType,
    budget: p.budget,
    timeline: p.timeline,
    timezone: p.timezone,
    preferredSlots: p.preferredSlots,
    source: p.source,
  };
}

function str(v: unknown): string {
  return typeof v === 'string' ? v.trim() : '';
}

function optionalStr(v: unknown): string | undefined {
  const s = str(v);
  return s ? s : undefined;
}

function isEmail(v: string): boolean {
  // RFC 5322-lite
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

function looksLikeUrl(v: string): boolean {
  try {
    // Accept plain domains and http(s) URLs
    if (/^[a-zA-Z][a-zA-Z0-9+\-.]*:/.test(v)) {
      const u = new URL(v);
      return u.protocol === 'http:' || u.protocol === 'https:';
    }
    // Try to coerce missing scheme
    const u = new URL(`https://${v}`);
    return !!u.hostname && u.hostname.includes('.');
  } catch {
    return false;
  }
}

function cryptoRandomId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    // @ts-expect-error - randomUUID exists in modern runtimes
    return crypto.randomUUID();
  }
  return 'id_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function getIp(req: Request): string | undefined {
  const h = req.headers;
  const xff = h.get('x-forwarded-for') || h.get('x-real-ip') || h.get('cf-connecting-ip');
  if (xff) {
    const parts = xff.split(',').map((s) => s.trim());
    return parts[0] || undefined;
  }
  // Not reliably available in serverless Fetch API
  return undefined;
}

function safeLogRecord(record: BookingRecord) {
  const redactedEmail = record.email.replace(/(.{2}).+(@.+)/, (_m, a, b) => `${a}***${b}`);
  return {
    ...record,
    email: redactedEmail,
    message: truncate(record.message, 500),
  };
}

function truncate(s: string, max: number): string {
  return s.length > max ? s.slice(0, max) + '…' : s;
}