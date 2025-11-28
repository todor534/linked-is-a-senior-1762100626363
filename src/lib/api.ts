import { version } from '../../package.json';

export type UnknownRecord = Record<string, unknown>;

export type ApiSuccess<T> = {
  ok: true;
  status: number;
  data: T;
  message?: string;
  headers?: Headers;
};

export type ApiError = {
  ok: false;
  status: number;
  error: string;
  details?: unknown;
  headers?: Headers;
};

export type ApiResult<T> = ApiSuccess<T> | ApiError;

export type BookingRequest = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  message?: string;
  budget?: string;
  timeline?: string;
  source?: string;
  [key: string]: unknown;
};

export type BookingResponse = {
  id: string;
  received: boolean;
  message?: string;
};

export type QuoteRequest = {
  name: string;
  email: string;
  projectType?: string;
  scope?: string;
  budget?: string;
  timeline?: string;
  website?: string;
  message?: string;
  [key: string]: unknown;
};

export type QuoteResponse = {
  id: string;
  received: boolean;
  message?: string;
};

const API_PREFIX = '/api';
const DEFAULT_TIMEOUT_MS = 20000;

function joinPath(a: string, b: string) {
  if (!a) return b;
  if (!b) return a;
  const aslash = a.endsWith('/');
  const bslash = b.startsWith('/');
  if (aslash && bslash) return a + b.slice(1);
  if (!aslash && !bslash) return a + '/' + b;
  return a + b;
}

function isProbablyJSON(res: Response) {
  const ct = res.headers.get('content-type') || '';
  return ct.includes('application/json') || ct.includes('+json');
}

function normalizeErrorMessage(err: unknown): string {
  if (typeof err === 'string') return err;
  if (err && typeof err === 'object') {
    const anyErr = err as any;
    if (typeof anyErr.message === 'string') return anyErr.message;
    try {
      return JSON.stringify(err);
    } catch {
      // ignore
    }
  }
  return 'Unexpected error';
}

async function parseResponse<T>(res: Response): Promise<ApiResult<T>> {
  const status = res.status;
  const headers = res.headers;

  if (status === 204) {
    // No content
    return { ok: true, status, data: undefined as unknown as T, headers };
  }

  let body: any = undefined;

  if (isProbablyJSON(res)) {
    try {
      body = await res.json();
    } catch {
      body = undefined;
    }
  } else {
    try {
      body = await res.text();
    } catch {
      body = undefined;
    }
  }

  // If HTTP status is not ok, try to pull error details
  if (!res.ok) {
    const error =
      (body && typeof body === 'object' && (body.error || body.message)) ||
      (typeof body === 'string' && body) ||
      res.statusText ||
      `Request failed with status ${status}`;
    return { ok: false, status, error: String(error), details: body, headers };
  }

  // HTTP ok; if server uses { ok, data } envelope, unwrap it
  if (body && typeof body === 'object' && 'ok' in body) {
    const anyBody = body as any;
    if (anyBody.ok === false) {
      const error = anyBody.error || anyBody.message || 'Unknown error';
      return { ok: false, status, error: String(error), details: anyBody, headers };
    }
    if ('data' in anyBody) {
      return { ok: true, status, data: anyBody.data as T, message: anyBody.message, headers };
    }
  }

  // Otherwise, treat parsed body as the data
  return { ok: true, status, data: body as T, headers };
}

type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD';
  headers?: HeadersInit;
  query?: Record<string, string | number | boolean | undefined | null>;
  body?: unknown;
  timeoutMs?: number;
  signal?: AbortSignal;
};

function toQueryString(query?: RequestOptions['query']) {
  if (!query) return '';
  const params = new URLSearchParams();
  Object.entries(query).forEach(([k, v]) => {
    if (v === undefined || v === null) return;
    params.append(k, String(v));
  });
  const s = params.toString();
  return s ? `?${s}` : '';
}

export async function request<T>(
  path: string,
  opts: RequestOptions = {}
): Promise<ApiResult<T>> {
  const url = joinPath(API_PREFIX, path) + toQueryString(opts.query);
  const method = opts.method || 'GET';

  const headers: HeadersInit = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Client-App': 'linked-site',
    'X-Client-Version': version || '0.0.0',
    ...opts.headers,
  };

  const controller = new AbortController();
  const signals: AbortSignal[] = [];
  if (opts.signal) signals.push(opts.signal);
  signals.push(controller.signal);

  const timeout = setTimeout(() => controller.abort(), opts.timeoutMs ?? DEFAULT_TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      method,
      headers,
      body: method === 'GET' || method === 'HEAD' ? undefined : JSON.stringify(opts.body ?? {}),
      signal: mergeSignals(signals),
      credentials: 'same-origin',
      keepalive: method === 'POST' || method === 'PUT' || method === 'PATCH',
    });
    return await parseResponse<T>(res);
  } catch (err) {
    const message = normalizeErrorMessage(err);
    // If aborted by timeout
    const isAbort =
      (err instanceof DOMException && err.name === 'AbortError') ||
      (typeof (err as any)?.name === 'string' && (err as any).name === 'AbortError');
    return {
      ok: false,
      status: isAbort ? 0 : -1,
      error: isAbort ? 'Request timed out' : message,
      details: err,
    };
  } finally {
    clearTimeout(timeout);
  }
}

function mergeSignals(signals: AbortSignal[]): AbortSignal | undefined {
  const valid = signals.filter(Boolean) as AbortSignal[];
  if (valid.length === 0) return undefined;
  if (valid.length === 1) return valid[0];
  const ctrl = new AbortController();
  const onAbort = () => ctrl.abort();
  valid.forEach((s) => {
    if (s.aborted) ctrl.abort();
    else s.addEventListener('abort', onAbort, { once: true });
  });
  return ctrl.signal;
}

export async function postJson<TReq extends UnknownRecord, TRes>(
  path: string,
  payload: TReq,
  opts: Omit<RequestOptions, 'method' | 'body'> = {}
): Promise<ApiResult<TRes>> {
  return request<TRes>(path, { ...opts, method: 'POST', body: payload });
}

export async function submitBooking(
  payload: BookingRequest,
  opts: Omit<RequestOptions, 'method' | 'body'> = {}
): Promise<ApiResult<BookingResponse>> {
  return postJson<BookingRequest, BookingResponse>('/booking', payload, opts);
}

export async function submitQuote(
  payload: QuoteRequest,
  opts: Omit<RequestOptions, 'method' | 'body'> = {}
): Promise<ApiResult<QuoteResponse>> {
  return postJson<QuoteRequest, QuoteResponse>('/quote', payload, opts);
}

const api = {
  request,
  postJson,
  submitBooking,
  submitQuote,
};

export default api;