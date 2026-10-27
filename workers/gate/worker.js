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

// Personal invite codes: each member fetches their own code at /code by signing in
// with Discord and holding the required server role. The code is derived
// deterministically from their Discord account (always the same for that person),
// recorded in KV (invite:<CODE> -> {discord, email}) and bound to the first email
// that registers with it. MAINTAINER_CODE bootstraps the maintainer account.
const MAINTAINER_EMAIL = 'elfhuyace@gmail.com';
const MAINTAINER_CODE = 'QA4D-4SS4-BQZZ';
// Emails in this set are banned: existing sessions die and re-registration is refused.
const BLOCKED = {};

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
  if (member in BLOCKED) return null;
  return member;
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

function page(opts) {
  const { error = '', notice = '', email = '' } = opts;
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>GachaWiki Members</title><style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#101418;color:#d7dde3;font-family:system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.6;padding:24px}.wrap{max-width:440px;width:100%;text-align:center}h1{font-size:24px;color:#fff;margin:0 0 24px}h1 span{color:#e91e63}h2{font-size:15px;font-weight:600;color:#fff;margin:0 0 12px;text-align:left}.panel{border:1px solid rgba(255,255,255,0.1);border-radius:12px;background:rgba(255,255,255,0.04);padding:28px 26px;margin-bottom:20px;text-align:left}p.err{color:#e91e63;margin:0 0 14px;font-size:14px}p.ok{color:#4caf50;margin:0 0 14px;font-size:14px}input{width:100%;box-sizing:border-box;padding:11px 13px;border:1px solid rgba(255,255,255,0.18);border-radius:8px;background:#0b0e11;color:#fff;font-size:15px;margin-bottom:10px}input[name=code]{letter-spacing:2px;text-transform:uppercase;text-align:center}button{width:100%;padding:11px;border:0;border-radius:8px;background:#e91e63;color:#fff;font-size:15px;font-weight:600;cursor:pointer}.note{font-size:13px;color:#8a97a3;margin-top:4px}a{color:#e91e63}.why{border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:18px 22px;text-align:left;font-size:13px;color:#8a97a3;line-height:1.6}.why strong{color:#aeb8c2}.why h2{font-size:14px;color:#fff;margin:0 0 6px}</style></head><body><div class="wrap"><h1>Gacha<span>Wiki</span> Members</h1>'
    + (error ? '<p class="err">' + esc(error) + '</p>' : '')
    + (notice ? '<p class="ok">' + esc(notice) + '</p>' : '')
    + '<div class="panel"><h2>Sign in</h2><form method="POST" action="/login"><input type="email" name="email" placeholder="Email" value="' + esc(email) + '" autocomplete="email" required><input type="password" name="password" placeholder="Password" autocomplete="current-password" required><button type="submit">Sign in</button></form></div>'
    + '<div class="panel"><h2>Sign up (new members)</h2><form method="POST" action="/register"><input type="email" name="email" placeholder="Email" value="' + esc(email) + '" autocomplete="email" required><input name="code" placeholder="Invite code" autocomplete="off" required><input type="password" name="password" placeholder="Choose a password (8+ characters)" autocomplete="new-password" minlength="8" required><button type="submit">Sign up</button><p class="note">New members need a personal invite code. Get yours with Discord: <a href="/code">get my code</a>. Forgot your password? Enter your email, your code and a new password here.</p><p class="note">Not a member yet? Join our Discord: <a href="https://discord.gg/YdWFddQKR8" target="_blank" rel="noopener">discord.gg/YdWFddQKR8</a></p></form></div>'
    + '<div class="why"><h2>Why is GachaWiki members-only?</h2>The games covered here include artwork and themes intended for a mature audience. To keep the wiki appropriate and to respect regulations in different regions, access is limited to approved members. Accounts are granted personally by the maintainer.</div>'
    + '</div></body></html>';
}

// Personal code derived from a Discord user id: stable forever for that account.
async function deriveCode(secret, discordId) {
  const h = await hmac(secret, 'discord:' + discordId);
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const groups = [];
  for (let g = 0; g < 3; g++) {
    let s = '';
    for (let i = 0; i < 4; i++) s += alphabet[parseInt(h.slice(g * 4 + i, g * 4 + i + 1), 16) % alphabet.length];
    groups.push(s);
  }
  return groups.join('-');
}

const shell = (body) => '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>GachaWiki Members</title><style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#101418;color:#d7dde3;font-family:system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.6;padding:24px}.panel{max-width:480px;width:100%;border:1px solid rgba(255,255,255,0.1);border-radius:12px;background:rgba(255,255,255,0.04);padding:40px 32px;text-align:center}h1{font-size:22px;color:#fff;margin:0 0 6px}h1 span{color:#e91e63}p{font-size:15px;color:#aeb8c2;margin:8px 0 18px}.code{font-size:26px;letter-spacing:3px;color:#fff;background:#0b0e11;border:1px solid rgba(255,255,255,0.18);border-radius:8px;padding:14px;margin:18px 0;font-weight:700}a.btn{display:block;padding:12px;border-radius:8px;background:#5865f2;color:#fff;font-size:15px;font-weight:600;text-decoration:none}a.btn.ghost{background:#1f2937;margin-top:10px}.err{color:#e91e63}.note{font-size:13px;color:#8a97a3;margin-top:16px}</style></head><body><div class="panel">' + body + '</div></body></html>';

const codeLanding = shell('<h1>Gacha<span>Wiki</span> Members</h1><p>Sign in with Discord to get your personal invite code.</p><a class="btn" href="/code/start">Continue with Discord</a><p class="note">You need the member role on our Discord server first.</p><p class="note"><a href="/login">Back to sign in</a></p>');
const codeNotConfigured = shell('<h1>Gacha<span>Wiki</span> Members</h1><p class="err">Code pickup is being set up. Please check back shortly.</p><p class="note"><a href="/login">Back to sign in</a></p>');
const codeNoRole = shell('<h1>Gacha<span>Wiki</span> Members</h1><p class="err">You do not have the member role yet.</p><p>Ask for the role in our Discord server, then come back here.</p><a class="btn ghost" href="/login">Back to sign in</a>');

function codeSuccess(code) {
  return shell('<h1>Your personal code</h1><div class="code">' + code + '</div><p>This code is yours alone and never changes. Use it once to sign up (or to reset your password) with your email at the sign in page.</p><a class="btn" href="/login">Go to sign up</a><p class="note">Do not share this code: it is linked to you.</p>');
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
        if (email in BLOCKED) {
          return new Response(page({ error: 'Access for this account has been revoked by the maintainer.', email }), { status: 403, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
        }
        // valid codes: the maintainer bootstrap pair, or a personal code fetched at /code
        let invite = null;
        if (code === MAINTAINER_CODE && email === MAINTAINER_EMAIL) {
          invite = { maintainer: true };
        } else {
          const rec = await env.MEMBERS.get('invite:' + code);
          if (rec) {
            invite = JSON.parse(rec);
            if (invite.email && invite.email !== email) {
              return new Response(page({ error: 'This code belongs to another account. Fetch your own code with Discord below.', email }), { status: 401, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
            }
          }
        }
        if (!invite) {
          await recordFail(env, email);
          return new Response(page({ error: 'That invite code is not valid. Fetch your personal code with Discord below.', email }), { status: 401, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
        }
        if (password.length < 8) {
          return new Response(page({ error: 'Password must be at least 8 characters.', email }), { status: 400, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
        }
        if (!invite.maintainer && !invite.email) {
          invite.email = email;
          await env.MEMBERS.put('invite:' + code, JSON.stringify(invite));
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

    // ---- personal code pickup via Discord ----
    if (url.pathname === '/code' || url.pathname === '/code/' || url.pathname === '/code/start' || url.pathname === '/code/callback') {
      const clientId = env.DISCORD_CLIENT_ID;
      const clientSecret = env.DISCORD_CLIENT_SECRET;
      const guildId = env.DISCORD_GUILD_ID;
      const roleId = env.DISCORD_ROLE_ID;
      const redirectUri = 'https://gachawiki.info/code/callback';
      if (!clientId || !clientSecret || !guildId || !roleId) {
        return new Response(codeNotConfigured, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
      }
      if (url.pathname === '/code/start') {
        const state = hex(crypto.getRandomValues(new Uint8Array(16)));
        const authorize = 'https://discord.com/oauth2/authorize?client_id=' + encodeURIComponent(clientId)
          + '&response_type=code&redirect_uri=' + encodeURIComponent(redirectUri)
          + '&scope=' + encodeURIComponent('identify guilds.members.read') + '&state=' + state;
        return new Response(null, { status: 302, headers: { Location: authorize, 'Set-Cookie': 'gw_oauth=' + state + '; Path=/code; Max-Age=600; HttpOnly; Secure; SameSite=Lax', 'Cache-Control': 'no-store' } });
      }
      if (url.pathname === '/code/callback') {
        const state = url.searchParams.get('state') || '';
        const oauthCode = url.searchParams.get('code') || '';
        const cookieState = (request.headers.get('Cookie') || '').match(/gw_oauth=([a-f0-9]+)/);
        if (!oauthCode || !state || !cookieState || cookieState[1] !== state) {
          return Response.redirect('https://gachawiki.info/code/start', 302);
        }
        const tokenResp = await fetch('https://discord.com/api/oauth2/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ client_id: clientId, client_secret: clientSecret, grant_type: 'authorization_code', code: oauthCode, redirect_uri: redirectUri }),
        });
        if (!tokenResp.ok) return new Response(codeNotConfigured, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
        const token = (await tokenResp.json()).access_token;
        const authHeaders = { Authorization: 'Bearer ' + token };
        const meResp = await fetch('https://discord.com/api/users/@me', { headers: authHeaders });
        if (!meResp.ok) return new Response(codeNotConfigured, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
        const me = await meResp.json();
        const memberResp = await fetch('https://discord.com/api/users/@me/guilds/' + guildId + '/member', { headers: authHeaders });
        if (!memberResp.ok) return new Response(codeNoRole, { status: 403, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
        const member = await memberResp.json();
        if (!Array.isArray(member.roles) || !member.roles.includes(roleId)) {
          return new Response(codeNoRole, { status: 403, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
        }
        const code = await deriveCode(secret, me.id);
        const key = 'invite:' + code;
        const existing = await env.MEMBERS.get(key);
        const rec = existing ? JSON.parse(existing) : { discord: me.id, discord_name: me.username, email: null, created: Date.now() };
        rec.discord = me.id;
        await env.MEMBERS.put(key, JSON.stringify(rec));
        return new Response(codeSuccess(code), { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
      }
      return new Response(codeLanding, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
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
