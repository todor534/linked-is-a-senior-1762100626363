import { randomUUID } from 'crypto';

type AnyDict = Record<string, any>;

type QuotePayload = {
  name: string;
  email: string;
  company?: string;
  website?: string;
  phone?: string;
  budget?: string;
  timeline?: string;
  projectType?: string;
  services?: string[];
  goals?: string;
  details?: string;
  source?: string;
};

type ValidationResult =
  | { ok: true; data: QuotePayload }
  | { ok: false; errors: Record<string, string> };

type ForwardOutcome = {
  target: string;
  ok: boolean;
  status?: number;
  error?: string;
};

const ALLOWED_METHODS = 'POST, OPTIONS';
const ALLOWED_HEADERS = 'content-type, x-requested-with';

export async function handle(req: Request): Promise<Response> {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: buildCorsHeaders(req) });
  }

  if (req.method !== 'POST') {
    return json(
      { ok: false, message: 'Method not allowed' },
      { status: 405, headers: buildCorsHeaders(req) }
    );
  }

  try {
    const body = await parseBody(req);
    const validation = validateQuoteInput(body);

    if (!validation.ok) {
      return json(
        {
          ok: false,
          message: 'Invalid input',
          errors: validation.errors,
        },
        { status: 400, headers: buildCorsHeaders(req) }
      );
    }

    const data = validation.data;
    const id = makeQuoteId();
    const now = new Date().toISOString();

    // Meta
    const headers = Object.fromEntries(req.headers.entries());
    const origin = req.headers.get('origin') || undefined;
    const referer = req.headers.get('referer') || undefined;
    const userAgent = req.headers.get('user-agent') || undefined;
    const ip =
      req.headers.get('x-forwarded-for') ||
      req.headers.get('cf-connecting-ip') ||
      req.headers.get('x-real-ip') ||
      undefined;

    const envelope = {
      id,
      receivedAt: now,
      type: 'quote',
      source: data.source || guessSourceFromReferer(referer),
      meta: {
        origin,
        referer,
        userAgent,
        ip,
        headers,
      },
      payload: data,
    };

    const forwards = await forward(envelope);

    return json(
      {
        ok: true,
        id,
        message: 'Thanks — your request was received. We’ll get back within 1 business day.',
        forwarded: forwards,
      },
      { status: 200, headers: buildCorsHeaders(req) }
    );
  } catch (err: any) {
    return json(
      {
        ok: false,
        message: 'Unexpected server error',
        error: processError(err),
      },
      { status: 500, headers: buildCorsHeaders(req) }
    );
  }
}

function buildCorsHeaders(req: Request): Headers {
  const h = new Headers();
  const origin = req.headers.get('origin') || '*';
  h.set('access-control-allow-origin', origin);
  h.set('vary', 'Origin');
  h.set('access-control-allow-methods', ALLOWED_METHODS);
  h.set('access-control-allow-headers', ALLOWED_HEADERS);
  h.set('access-control-max-age', '86400');
  return h;
}

function json(data: any, init?: ResponseInit): Response {
  const headers = new Headers(init?.headers);
  headers.set('content-type', 'application/json; charset=utf-8');
  return new Response(JSON.stringify(data), { ...init, headers });
}

async function parseBody(req: Request): Promise<AnyDict> {
  const ctype = req.headers.get('content-type') || '';
  if (ctype.includes('application/json')) {
    const json = await req.json().catch(() => ({}));
    return normalizeInput(json || {});
  }
  if (ctype.includes('application/x-www-form-urlencoded') || ctype.includes('multipart/form-data')) {
    const fd = await req.formData();
    const obj: AnyDict = {};
    for (const [key, value] of fd.entries()) {
      if (obj[key] !== undefined) {
        // promote to array
        if (Array.isArray(obj[key])) {
          (obj[key] as any[]).push(value);
        } else {
          obj[key] = [obj[key], value];
        }
      } else {
        obj[key] = value;
      }
    }
    return normalizeInput(obj);
  }
  // Fallback: try JSON, else empty
  try {
    const text = await req.text();
    if (text) {
      try {
        return normalizeInput(JSON.parse(text));
      } catch {
        return {};
      }
    }
  } catch {
    // ignore
  }
  return {};
}

function normalizeInput(input: AnyDict): AnyDict {
  const out: AnyDict = {};
  for (const [k, v] of Object.entries(input)) {
    const key = k.trim();
    if (typeof v === 'string') {
      out[key] = v.trim();
    } else if (Array.isArray(v)) {
      out[key] = v.map((x) => (typeof x === 'string' ? x.trim() : x));
    } else {
      out[key] = v;
    }
  }

  // Normalize services if comma-separated or JSON stringified
  if (typeof out.services === 'string') {
    const raw = out.services as string;
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        out.services = parsed.map((s) => String(s).trim()).filter(Boolean);
      } else {
        out.services = splitCsv(raw);
      }
    } catch {
      out.services = splitCsv(raw);
    }
  }

  // Coerce numeric-like budget into string
  if (typeof out.budget === 'number') {
    out.budget = String(out.budget);
  }

  return out;
}

function splitCsv(s: string): string[] {
  return s
    .split(',')
    .map((x) => x.trim())
    .filter(Boolean);
}

function validateQuoteInput(body: AnyDict): ValidationResult {
  const errors: Record<string, string> = {};

  const name = asTrimmed(body.name);
  const email = asTrimmed(body.email);
  const company = asOptionalTrimmed(body.company);
  const website = asOptionalTrimmed(body.website);
  const phone = asOptionalTrimmed(body.phone);
  const budget = asOptionalTrimmed(body.budget);
  const timeline = asOptionalTrimmed(body.timeline);
  const projectType = asOptionalTrimmed(body.projectType);
  const goals = asOptionalTrimmed(body.goals);
  const details = asOptionalTrimmed(body.details);
  let services: string[] | undefined = undefined;

  if (Array.isArray(body.services)) {
    services = (body.services as any[])
      .map((s) => String(s).trim())
      .filter(Boolean)
      .slice(0, 20);
  }

  if (!name) {
    errors.name = 'Name is required';
  } else if (name.length < 2) {
    errors.name = 'Please enter your full name';
  }

  if (!email) {
    errors.email = 'Email is required';
  } else if (!isEmail(email)) {
    errors.email = 'Enter a valid email address';
  }

  if (website && !isLikelyUrl(website)) {
    errors.website = 'Enter a valid URL (include protocol, e.g., https://...)';
  }

  // Require at least some description
  const desc = [details, goals].filter(Boolean).join(' ').trim();
  if (!desc || desc.length < 10) {
    errors.details = 'Tell us a bit about your project (at least 10 characters)';
  }

  // At least one of projectType or services
  if (!projectType && (!services || services.length === 0)) {
    errors.projectType = 'Select a project type or services';
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  const data: QuotePayload = {
    name,
    email,
    company: company || undefined,
    website: website || undefined,
    phone: phone || undefined,
    budget: budget || undefined,
    timeline: timeline || undefined,
    projectType: projectType || undefined,
    services,
    goals: goals || undefined,
    details: details || undefined,
    source: asOptionalTrimmed(body.source),
  };

  return { ok: true, data };
}

function asTrimmed(v: any): string {
  if (typeof v === 'string') return v.trim();
  if (v == null) return '';
  return String(v).trim();
}

function asOptionalTrimmed(v: any): string | undefined {
  if (v == null) return undefined;
  const s = String(v).trim();
  return s ? s : undefined;
}

function isEmail(s: string): boolean {
  // Reasonable email pattern, not overly strict
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
}

function isLikelyUrl(s: string): boolean {
  if (!/^https?:\/\//i.test(s)) return false;
  try {
    new URL(s);
    return true;
  } catch {
    return false;
  }
}

function guessSourceFromReferer(referer?: string): string | undefined {
  if (!referer) return undefined;
  try {
    const url = new URL(referer);
    return url.pathname || '/';
  } catch {
    return referer;
  }
}

function makeQuoteId(): string {
  // Prefer UUID if available
  try {
    const id = randomUUID();
    return `q_${id}`;
  } catch {
    const ts = Date.now().toString(36);
    const rand = Math.random().toString(36).slice(2, 8);
    return `q_${ts}_${rand}`;
  }
}

function processError(err: any): string {
  if (!err) return 'Unknown error';
  if (typeof err === 'string') return err;
  if (err.message) return String(err.message);
  try {
    return JSON.stringify(err);
  } catch {
    return String(err);
  }
}

function getEnv(name: string): string | undefined {
  const env = (globalThis as any)?.process?.env || {};
  return env[name] || env[`VITE_${name}`];
}

async function forward(envelope: AnyDict): Promise<ForwardOutcome[]> {
  const outcomes: ForwardOutcome[] = [];
  const targets: { name: string; url?: string | undefined; kind: 'json' | 'slack' | 'discord' }[] = [
    { name: 'QUOTE_WEBHOOK_URL', url: getEnv('QUOTE_WEBHOOK_URL'), kind: 'json' },
    { name: 'SLACK_WEBHOOK_URL', url: getEnv('SLACK_WEBHOOK_URL'), kind: 'slack' },
    { name: 'DISCORD_WEBHOOK_URL', url: getEnv('DISCORD_WEBHOOK_URL'), kind: 'discord' },
  ];

  const active = targets.filter((t) => t.url);
  if (active.length === 0) {
    // No forwarding configured; treat as success (dev mode)
    return outcomes;
  }

  const textSummary = formatHumanSummary(envelope);

  await Promise.all(
    active.map(async (t) => {
      try {
        let res: Response;
        if (t.kind === 'json') {
          res = await fetch(t.url!, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(envelope),
          });
        } else if (t.kind === 'slack') {
          res = await fetch(t.url!, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ text: textSummary }),
          });
        } else {
          // discord
          res = await fetch(t.url!, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ content: textSummary }),
          });
        }

        outcomes.push({
          target: t.name,
          ok: res.ok,
          status: res.status,
          error: res.ok ? undefined : `HTTP ${res.status}`,
        });
      } catch (e: any) {
        outcomes.push({
          target: t.name,
          ok: false,
          error: processError(e),
        });
      }
    })
  );

  return outcomes;
}

function formatHumanSummary(envelope: AnyDict): string {
  const p: QuotePayload = envelope.payload || {};
  const lines: string[] = [];
  lines.push(`New Quote Request — ${envelope.id}`);
  lines.push(`When: ${envelope.receivedAt}`);
  lines.push(`Name: ${p.name}`);
  lines.push(`Email: ${p.email}`);
  if (p.company) lines.push(`Company: ${p.company}`);
  if (p.phone) lines.push(`Phone: ${p.phone}`);
  if (p.website) lines.push(`Website: ${p.website}`);
  if (p.projectType) lines.push(`Project Type: ${p.projectType}`);
  if (p.services?.length) lines.push(`Services: ${p.services.join(', ')}`);
  if (p.budget) lines.push(`Budget: ${p.budget}`);
  if (p.timeline) lines.push(`Timeline: ${p.timeline}`);
  if (p.goals) lines.push(`Goals: ${truncate(p.goals, 500)}`);
  if (p.details) lines.push(`Details: ${truncate(p.details, 1000)}`);
  if (envelope?.meta?.referer) lines.push(`Referer: ${envelope.meta.referer}`);
  if (envelope?.meta?.ip) lines.push(`IP: ${envelope.meta.ip}`);
  return lines.join('\n');
}

function truncate(s: string, max: number): string {
  if (s.length <= max) return s;
  return s.slice(0, max - 1) + '…';
}