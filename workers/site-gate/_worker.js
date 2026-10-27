// GachaWiki member gate: login = approved email + personal invite code from the maintainer.
// No external services. Registry below maps email -> invite code; sessions are signed cookies.
// The gacha-wiki.pages.dev address redirects to the canonical domain (see fetch below).

const SESSION_COOKIE = 'gw_session';
const SESSION_DAYS = 30;
const GW_SECRET = '99791092dd9ccebce53026770db4fddd470f62c2116685faf8d060e46e76f65c';
// email -> invite code (maintainer hands these out personally, one per member)
const GW_MEMBERS = { "elfhuyace@gmail.com": "QA4D-4SS4-BQZZ" };

const enc = new TextEncoder();

async function hmac(secret, data) {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, '0')).join('');
}

function parseCookies(request) {
  const out = {};
  const raw = request.headers.get('Cookie') || '';
  for (const part of raw.split(';')) {
    const i = part.indexOf('=');
    if (i > 0) out[part.slice(0, i).trim()] = decodeURIComponent(part.slice(i + 1).trim());
  }
  return out;
}

async function sessionMember(request) {
  const v = parseCookies(request)[SESSION_COOKIE];
  if (!v) return null;
  const dot = v.lastIndexOf('.');
  if (dot <= 0) return null;
  const payload = v.slice(0, dot);
  const sig = v.slice(dot + 1);
  const expect = await hmac(GW_SECRET, payload);
  if (sig.length !== expect.length) return null;
  let diff = 0;
  for (let i = 0; i < expect.length; i++) diff |= sig.charCodeAt(i) ^ expect.charCodeAt(i);
  if (diff !== 0) return null;
  const colon = payload.lastIndexOf(':');
  if (colon <= 0) return null;
  const member = payload.slice(0, colon).toLowerCase();
  const exp = Number(payload.slice(colon + 1));
  if (!exp || Date.now() > exp) return null;
  if (!(member in GW_MEMBERS)) return null;
  return member;
}

function loginPage(error, next) {
  const safeNext = next && next.startsWith('/') && !next.startsWith('//') ? next : '/';
  const msg = error
    ? '<p class="err">Email and code do not match. Check with the maintainer.</p>'
    : '<p>Sign in with your email and the personal access code given to you by the maintainer.</p>';
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>GachaWiki Members</title><style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#101418;color:#d7dde3;font-family:system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.6;padding:24px}.panel{max-width:440px;width:100%;border:1px solid rgba(255,255,255,0.1);border-radius:12px;background:rgba(255,255,255,0.04);padding:40px 32px;text-align:center}h1{font-size:22px;color:#fff;margin:0 0 6px}h1 span{color:#e91e63}p{font-size:15px;color:#aeb8c2;margin:8px 0 20px}p.err{color:#e91e63}input{width:100%;box-sizing:border-box;padding:12px 14px;border:1px solid rgba(255,255,255,0.18);border-radius:8px;background:#0b0e11;color:#fff;font-size:16px;margin-bottom:12px;text-align:center}input[name=code]{letter-spacing:2px;text-transform:uppercase}button{width:100%;margin-top:4px;padding:12px;border:0;border-radius:8px;background:#e91e63;color:#fff;font-size:15px;font-weight:600;cursor:pointer}.note{font-size:13px;color:#8a97a3;margin-top:22px}</style></head><body><div class="panel"><h1>Gacha<span>Wiki</span> Members</h1>' + msg + '<form method="POST" action="/login"><input type="email" name="email" placeholder="YOUR EMAIL" autocomplete="email" required><input name="code" placeholder="ACCESS CODE" autocomplete="off" required><input type="hidden" name="next" value="' + safeNext.replace(/"/g, '&quot;') + '"><button type="submit">Sign in</button></form><p class="note">Access is personal. Codes are given by the maintainer.</p></div></body></html>';
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname.endsWith('.pages.dev')) {
      return Response.redirect('https://gachawiki.info' + url.pathname + url.search, 301);
    }

    if (url.pathname === '/login') {
      if (request.method === 'POST') {
        const form = await request.formData();
        const email = String(form.get('email') || '').trim().toLowerCase();
        const code = String(form.get('code') || '').trim().toUpperCase();
        const nextRaw = String(form.get('next') || '/');
        const next = nextRaw.startsWith('/') && !nextRaw.startsWith('//') ? nextRaw : '/';
        if (!email || !code || GW_MEMBERS[email] !== code) {
          return new Response(loginPage(true, next), { status: 401, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
        }
        const exp = Date.now() + SESSION_DAYS * 86400000;
        const payload = email + ':' + exp;
        const sig = await hmac(GW_SECRET, payload);
        const cookie = SESSION_COOKIE + '=' + encodeURIComponent(payload + '.' + sig) + '; Path=/; Max-Age=' + (SESSION_DAYS * 86400) + '; HttpOnly; Secure; SameSite=Lax; Domain=.gachawiki.info';
        return new Response(null, { status: 303, headers: { 'Location': next, 'Set-Cookie': cookie, 'Cache-Control': 'no-store' } });
      }
      const next = url.searchParams.get('next') || '/';
      return new Response(loginPage(false, next), { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
    }

    const member = await sessionMember(request);
    if (!member) {
      const next = url.pathname === '/' ? '/' : url.pathname + url.search;
      return new Response(null, { status: 302, headers: { 'Location': '/login?next=' + encodeURIComponent(next), 'Cache-Control': 'no-store' } });
    }

    return env.ASSETS.fetch(request);
  },
};
