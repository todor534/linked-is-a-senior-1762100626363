/* Lightweight helpers to build consistent HTTP responses for serverless handlers */

export type ApiSuccess<T> = {
  ok: true;
  data: T;
};

export type ApiError = {
  ok: false;
  error: {
    status: number;
    code: string;
    message: string;
    details?: unknown;
  };
};

type HeadersInitLoose = Headers | Record<string, string> | [string, string][];

const DEFAULT_CORS_METHODS = ['GET', 'POST', 'OPTIONS'];
const DEFAULT_CORS_HEADERS = ['Content-Type', 'Authorization'];
const DEFAULT_ORIGIN = '*';

function toHeaders(init?: HeadersInitLoose): Headers {
  if (!init) return new Headers();
  return new Headers(init as HeadersInit);
}

function mergeHeaders(base?: HeadersInitLoose, extra?: HeadersInitLoose): Headers {
  const h = toHeaders(base);
  const e = toHeaders(extra);
  e.forEach((value, key) => h.set(key, value));
  return h;
}

function corsHeaders(options?: {
  origin?: string;
  methods?: string[];
  headers?: string[];
  maxAgeSeconds?: number;
}): Headers {
  const h = new Headers();
  h.set('Access-Control-Allow-Origin', options?.origin ?? DEFAULT_ORIGIN);
  h.set('Access-Control-Allow-Methods', (options?.methods ?? DEFAULT_CORS_METHODS).join(','));
  h.set('Access-Control-Allow-Headers', (options?.headers ?? DEFAULT_CORS_HEADERS).join(','));
  h.set('Access-Control-Max-Age', String(options?.maxAgeSeconds ?? 86400));
  h.set('Vary', 'Origin');
  return h;
}

export function preflight(req: Request, options?: {
  origin?: string;
  methods?: string[];
  headers?: string[];
  maxAgeSeconds?: number;
}): Response | null {
  if (req.method.toUpperCase() !== 'OPTIONS') return null;
  const headers = corsHeaders(options);
  return new Response(null, { status: 204, headers });
}

export function json<T>(
  data: T,
  init?: ResponseInit & { cors?: Parameters<typeof corsHeaders>[0] }
): Response {
  const contentHeaders: HeadersInitLoose = {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  };
  const headers = mergeHeaders(
    contentHeaders,
    mergeHeaders(init?.headers, corsHeaders(init?.cors))
  );
  const { cors: _ignored, ...rest } = init ?? {};
  return new Response(JSON.stringify(data), {
    ...rest,
    headers,
  });
}

export function ok<T>(
  data: T,
  init?: ResponseInit & { cors?: Parameters<typeof corsHeaders>[0] }
): Response {
  return json<ApiSuccess<T>>({ ok: true, data }, { status: 200, ...init });
}

export function created<T>(
  data: T,
  init?: ResponseInit & { cors?: Parameters<typeof corsHeaders>[0] }
): Response {
  return json<ApiSuccess<T>>({ ok: true, data }, { status: 201, ...init });
}

export function noContent(
  init?: ResponseInit & { cors?: Parameters<typeof corsHeaders>[0] }
): Response {
  const headers = mergeHeaders(init?.headers, corsHeaders(init?.cors));
  const { cors: _ignored, ...rest } = init ?? {};
  return new Response(null, { status: 204, headers, ...rest });
}

export function text(
  body: string,
  init?: ResponseInit & { cors?: Parameters<typeof corsHeaders>[0] }
): Response {
  const headers = mergeHeaders(
    { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
    mergeHeaders(init?.headers, corsHeaders(init?.cors))
  );
  const { cors: _ignored, ...rest } = init ?? {};
  return new Response(body, { ...rest, headers });
}

function statusCodeToDefault(status: number): string {
  switch (status) {
    case 400: return 'BAD_REQUEST';
    case 401: return 'UNAUTHORIZED';
    case 403: return 'FORBIDDEN';
    case 404: return 'NOT_FOUND';
    case 405: return 'METHOD_NOT_ALLOWED';
    case 409: return 'CONFLICT';
    case 412: return 'PRECONDITION_FAILED';
    case 422: return 'UNPROCESSABLE_ENTITY';
    case 429: return 'TOO_MANY_REQUESTS';
    case 500: return 'INTERNAL_SERVER_ERROR';
    default: return `HTTP_${status}`;
  }
}

export function error(
  status: number,
  message: string,
  opts?: {
    code?: string;
    details?: unknown;
  },
  init?: ResponseInit & { cors?: Parameters<typeof corsHeaders>[0] }
): Response {
  const payload: ApiError = {
    ok: false,
    error: {
      status,
      code: opts?.code ?? statusCodeToDefault(status),
      message,
      ...(opts?.details !== undefined ? { details: opts.details } : {}),
    },
  };
  return json<ApiError>(payload, { status, ...init });
}

export function badRequest(
  message = 'Invalid request',
  details?: unknown,
  init?: ResponseInit & { cors?: Parameters<typeof corsHeaders>[0] }
): Response {
  return error(400, message, { code: 'BAD_REQUEST', details }, init);
}

export function unauthorized(
  message = 'Unauthorized',
  details?: unknown,
  init?: ResponseInit & { cors?: Parameters<typeof corsHeaders>[0] }
): Response {
  return error(401, message, { code: 'UNAUTHORIZED', details }, init);
}

export function forbidden(
  message = 'Forbidden',
  details?: unknown,
  init?: ResponseInit & { cors?: Parameters<typeof corsHeaders>[0] }
): Response {
  return error(403, message, { code: 'FORBIDDEN', details }, init);
}

export function notFound(
  message = 'Not found',
  details?: unknown,
  init?: ResponseInit & { cors?: Parameters<typeof corsHeaders>[0] }
): Response {
  return error(404, message, { code: 'NOT_FOUND', details }, init);
}

export function methodNotAllowed(
  allowed: string[] = [],
  message = 'Method not allowed',
  init?: ResponseInit & { cors?: Parameters<typeof corsHeaders>[0] }
): Response {
  const headers = mergeHeaders(init?.headers, { Allow: allowed.join(',') });
  return error(405, message, { code: 'METHOD_NOT_ALLOWED' }, { ...init, headers });
}

export function serverError(
  err?: unknown,
  init?: ResponseInit & { cors?: Parameters<typeof corsHeaders>[0] }
): Response {
  const msg = 'An unexpected error occurred';
  const details =
    err instanceof Error
      ? { name: err.name, message: err.message, stack: err.stack }
      : err ?? undefined;
  return error(500, msg, { code: 'INTERNAL_SERVER_ERROR', details }, init);
}