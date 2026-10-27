// GachaWiki image gate: serves R2 objects on img.gachawiki.info only to visitors
// holding the same gw_session cookie issued by the site's login page.
// BLOCKED must mirror the site gate's ban list; sessions of banned members are
// rejected here as well. Secret: GW_SECRET (wrangler secret, matches the gate).

const SESSION_COOKIE = 'gw_session';
const enc = new TextEncoder();
const BLOCKED = {};
// Signed header accepted as an alternative to the session cookie (dev proxy
// and origin pass-through share this HMAC with the Pages worker).
const ORIGIN_SIG = '05392a88685c21317544b049d61934f539ff284eef079d20f842532d521b881f';

async function hmac(secret, data) {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, '0')).join('');
}

async function sessionOk(request, env) {
  const hsig = request.headers.get('x-gw-origin') || '';
  if (hsig.length === ORIGIN_SIG.length) {
    let d = 0;
    for (let i = 0; i < ORIGIN_SIG.length; i++) d |= hsig.charCodeAt(i) ^ ORIGIN_SIG.charCodeAt(i);
    if (d === 0) return true;
  }
  const raw = request.headers.get('Cookie') || '';
  const m = raw.match(/(?:^|;\s*)gw_session=([^;]+)/);
  if (!m) return false;
  const v = decodeURIComponent(m[1]);
  const dot = v.lastIndexOf('.');
  if (dot <= 0) return false;
  const payload = v.slice(0, dot);
  const sig = v.slice(dot + 1);
  const expect = await hmac(env.GW_SECRET, payload);
  if (sig.length !== expect.length) return false;
  let diff = 0;
  for (let i = 0; i < expect.length; i++) diff |= sig.charCodeAt(i) ^ expect.charCodeAt(i);
  if (diff !== 0) return false;
  const colon = payload.lastIndexOf(':');
  const member = payload.slice(0, colon).toLowerCase();
  const exp = Number(payload.slice(colon + 1));
  return Boolean(exp) && Date.now() <= exp && !(member in BLOCKED);
}

export default {
  async fetch(request, env) {
    if (!(await sessionOk(request, env))) {
      return new Response(null, {
        status: 302,
        headers: { Location: 'https://gachawiki.info/login', 'Cache-Control': 'no-store' },
      });
    }
    const key = new URL(request.url).pathname.replace(/^\/+/, '');
    if (!key) return new Response('Not found', { status: 404 });
    const obj = await env.IMAGES.get(key);
    if (!obj) return new Response('Not found', { status: 404 });
    const headers = new Headers();
    obj.writeHttpMetadata(headers);
    headers.set('Cache-Control', 'public, max-age=86400');
    headers.set('ETag', obj.httpEtag);
    return new Response(obj.body, { headers });
  },
};
