import { handle as handleQuote } from '../server/handlers/quote';

function buildCorsHeaders(origin: string | null): Headers {
  const headers = new Headers();
  if (origin) {
    headers.set('Access-Control-Allow-Origin', origin);
    headers.set('Vary', 'Origin');
  } else {
    headers.set('Access-Control-Allow-Origin', '*');
  }
  headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  headers.set('Access-Control-Allow-Credentials', 'true');
  return headers;
}

async function withCors(request: Request): Promise<Response> {
  const origin = request.headers.get('Origin');

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: buildCorsHeaders(origin) });
  }

  try {
    const res = await handleQuote(request);
    const headers = new Headers(res.headers);
    const cors = buildCorsHeaders(origin);
    cors.forEach((v, k) => headers.set(k, v));
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
  } catch (err) {
    const headers = buildCorsHeaders(origin);
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers,
    });
  }
}

// Cloudflare Pages Functions style
export async function onRequest(context: { request: Request }): Promise<Response> {
  return withCors(context.request);
}
export async function onRequestPost(context: { request: Request }): Promise<Response> {
  return withCors(context.request);
}
export async function onRequestOptions(context: { request: Request }): Promise<Response> {
  return withCors(context.request);
}

// Cloudflare Workers style
export default {
  async fetch(request: Request): Promise<Response> {
    return withCors(request);
  },
};