// GachaWiki gate: invite-code registration + own-password sign-in.
// First visit: member registers with the personal invite code from the maintainer
// and chooses their own password. Later visits: email + password.
// Forgot password: re-enter email + invite code + a new password.
// Storage: KV namespace MEMBERS (member:<email> -> {salt, hash}).
// Sessions: signed cookie gw_session = email:exp.hmac, shared with the img gate.

const SESSION_COOKIE = 'gw_session';
const SESSION_DAYS = 30;
const GW_SECRET_ENV = null; // secret GW_SECRET is set via wrangler secret
const enc = new TextEncoder();

// invite registry: email -> personal invite code from the maintainer (mirrored in img-gate)
const INVITES = { "elfhuyace@gmail.com": "QA4D-4SS4-BQZZ" };

async function hmac(secret, data) {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, '0')).join('');
}

const hex = (buf) => Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('');

async function passwordHash(password, saltHex) {
  const salt = new Uint8Array(saltHex.match(/../g).map((h) => parseInt(h, 16)));
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' }, key, 256);
  return hex(bits);
}

function cookieValue(request) {
  const raw = request.headers.get('Cookie') || '';
  const m = raw.match(/(?:^|;\s*)gw_session=([^;]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

async function sessionMember(request, secret) {
  const v = cookieValue(request);
  if (!v) return null;
  const dot = v.lastIndexOf('.');
  if (dot <= 0) return null;
  const payload = v.slice(0, dot);
  const sig = v.slice(dot + 1);
  const expect = await hmac(secret, payload);
  if (sig.length !== expect.length) return null;
  let diff = 0;
  for (let i = 0; i < expect.length; i++) diff |= sig.charCodeAt(i) ^ expect.charCodeAt(i);
  if (diff !== 0) return null;
  const colon = payload.lastIndexOf(':');
  if (colon <= 0) return null;
  const member = payload.slice(0, colon).toLowerCase();
  const exp = Number(payload.slice(colon + 1));
  if (!exp || Date.now() > exp) return null;
  if (!(member in INVITES)) return null;
  return member;
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

function page(opts) {
  const { error = '', notice = '', email = '' } = opts;
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>GachaWiki Members</title><style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#101418;color:#d7dde3;font-family:system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.6;padding:24px}.wrap{max-width:440px;width:100%;text-align:center}h1{font-size:24px;color:#fff;margin:0 0 24px}h1 span{color:#e91e63}h2{font-size:15px;font-weight:600;color:#fff;margin:0 0 12px;text-align:left}.panel{border:1px solid rgba(255,255,255,0.1);border-radius:12px;background:rgba(255,255,255,0.04);padding:28px 26px;margin-bottom:20px;text-align:left}p.err{color:#e91e63;margin:0 0 14px;font-size:14px}p.ok{color:#4caf50;margin:0 0 14px;font-size:14px}input{width:100%;box-sizing:border-box;padding:11px 13px;border:1px solid rgba(255,255,255,0.18);border-radius:8px;background:#0b0e11;color:#fff;font-size:15px;margin-bottom:10px}input[name=code]{letter-spacing:2px;text-transform:uppercase;text-align:center}button{width:100%;padding:11px;border:0;border-radius:8px;background:#e91e63;color:#fff;font-size:15px;font-weight:600;cursor:pointer}.note{font-size:13px;color:#8a97a3;margin-top:4px}a{color:#e91e63}.why{border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:18px 22px;text-align:left;font-size:13px;color:#8a97a3;line-height:1.6}.why strong{color:#aeb8c2}.why h2{font-size:14px;color:#fff;margin:0 0 6px}</style></head><body><div class="wrap"><h1>Gacha<span>Wiki</span> Members</h1>'
    + (error ? '<p class="err">' + esc(error) + '</p>' : '')
    + (notice ? '<p class="ok">' + esc(notice) + '</p>' : '')
    + '<div class="panel"><h2>Sign in</h2><form method="POST" action="/login"><input type="email" name="email" placeholder="Email" value="' + esc(email) + '" autocomplete="email" required><input type="password" name="password" placeholder="Password" autocomplete="current-password" required><button type="submit">Sign in</button></form></div>'
    + '<div class="panel"><h2>Sign up (new members)</h2><form method="POST" action="/register"><input type="email" name="email" placeholder="Email" value="' + esc(email) + '" autocomplete="email" required><input name="code" placeholder="Invite code" autocomplete="off" required><input type="password" name="password" placeholder="Choose a password (8+ characters)" autocomplete="new-password" minlength="8" required><button type="submit">Sign up</button><p class="note">New members need an invite code. Forgot your password? Enter your email, invite code and a new password here.</p><p class="note">No invite code yet? Join our Discord: <a href="https://discord.gg/YdWFddQKR8" target="_blank" rel="noopener">discord.gg/YdWFddQKR8</a></p></form></div>'
    + '<div class="why"><h2>Why is GachaWiki members-only?</h2>This wiki covers games with adult (18+) content. Public access would expose that content to minors, and regulations in many countries require adult content to be age-restricted. GachaWiki is therefore members-only: every account is approved personally by the maintainer, and access can be revoked at any time.</div>'
    + '</div></body></html>';
}

async function tooManyFails(env, email) {
  const v = await env.MEMBERS.get('fail:' + email);
  return v && Number(v) >= 6;
}

async function recordFail(env, email) {
  const v = Number((await env.MEMBERS.get('fail:' + email)) || 0);
  await env.MEMBERS.put('fail:' + email, String(v + 1), { expirationTtl: 600 });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const secret = env.GW_SECRET;

    if (url.pathname === '/login' || url.pathname === '/register') {
      if (request.method !== 'POST') {
        return new Response(page({}), { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
      }
      const form = await request.formData();
      const email = String(form.get('email') || '').trim().toLowerCase();
      const password = String(form.get('password') || '');
      const code = String(form.get('code') || '').trim().toUpperCase();
      const isRegister = url.pathname === '/register';

      if (!email || !password || (isRegister && !code)) {
        return new Response(page({ error: 'Please fill in all fields.', email }), { status: 400, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
      }
      if (await tooManyFails(env, email)) {
        return new Response(page({ error: 'Too many attempts. Please wait about 10 minutes and try again.', email }), { status: 429, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
      }

      if (isRegister) {
        if (INVITES[email] !== code) {
          await recordFail(env, email);
          return new Response(page({ error: 'That invite code is not valid for this email. Check with the maintainer.', email }), { status: 401, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
        }
        if (password.length < 8) {
          return new Response(page({ error: 'Password must be at least 8 characters.', email }), { status: 400, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
        }
        const salt = hex(crypto.getRandomValues(new Uint8Array(16)));
        const hash = await passwordHash(password, salt);
        await env.MEMBERS.put('member:' + email, JSON.stringify({ salt, hash, updated: Date.now() }));
      } else {
        const rec = await env.MEMBERS.get('member:' + email);
        if (!rec) {
          return new Response(page({ error: 'No password set yet. Use your invite code below to create one.', email }), { status: 401, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
        }
        const { salt, hash } = JSON.parse(rec);
        if ((await passwordHash(password, salt)) !== hash) {
          await recordFail(env, email);
          return new Response(page({ error: 'Wrong email or password.', email }), { status: 401, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
        }
      }

      await env.MEMBERS.delete('fail:' + email);
      const exp = Date.now() + SESSION_DAYS * 86400000;
      const payload = email + ':' + exp;
      const sig = await hmac(secret, payload);
      const cookie = SESSION_COOKIE + '=' + encodeURIComponent(payload + '.' + sig) + '; Path=/; Max-Age=' + (SESSION_DAYS * 86400) + '; HttpOnly; Secure; SameSite=Lax; Domain=.gachawiki.info';
      const next = String(form.get('next') || '/');
      const safeNext = next.startsWith('/') && !next.startsWith('//') ? next : '/';
      return new Response(null, { status: 303, headers: { 'Location': safeNext, 'Set-Cookie': cookie, 'Cache-Control': 'no-store' } });
    }

    const member = await sessionMember(request, secret);
    if (!member) {
      const next = url.pathname === '/' ? '/' : url.pathname + url.search;
      return new Response(null, { status: 302, headers: { 'Location': '/login?next=' + encodeURIComponent(next), 'Cache-Control': 'no-store' } });
    }

    // Pass authorized requests to the Pages origin with a signed header the
    // Pages worker requires, so direct pages.dev visits cannot bypass the gate.
    const originSig = await hmac(secret, 'gw-origin');
    const originUrl = 'https://gacha-wiki.pages.dev' + url.pathname + url.search;
    const originHeaders = new Headers(request.headers);
    originHeaders.set('x-gw-origin', originSig);
    const originResp = await fetch(originUrl, {
      method: request.method,
      headers: originHeaders,
      body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body,
      redirect: 'manual',
    });
    const respHeaders = new Headers(originResp.headers);
    respHeaders.delete('set-cookie');
    return new Response(originResp.body, { status: originResp.status, headers: respHeaders });
  },
};
