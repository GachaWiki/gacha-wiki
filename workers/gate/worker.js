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
// Discord server + role that unlocks code pickup (bot: GachaWiki, token in DISCORD_BOT_TOKEN secret).
const DISCORD_GUILD = '1534112093752659968';
const WIKI_ROLE = '1564572966421790850';
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

// Small profile chip injected into every page: member name, email, wallet link.
const PROFILE_WIDGET = `<script>(function(){function esc(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}fetch("/whoami").then(function(r){return r.ok?r.json():null}).then(function(d){if(!d||!d.member)return;var email=d.member;var name=email.split("@")[0];var css=document.createElement("style");css.textContent=".gwp-chip{position:fixed;top:12px;right:16px;z-index:2147483000;display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border:1px solid rgba(255,255,255,0.16);border-radius:8px;background:rgba(10,12,16,0.55);font-family:system-ui,-apple-system,Segoe UI,sans-serif;white-space:nowrap;cursor:pointer}.gwp-chip .gwp-name{font-size:12px;font-weight:700;color:#e91e63;letter-spacing:0.3px;max-width:120px;overflow:hidden;text-overflow:ellipsis}.gwp-chip .gwp-caret{font-size:9px;color:#8a97a3}.gwp-menu{position:absolute;top:calc(100% + 8px);right:0;min-width:200px;background:#14181d;border:1px solid rgba(255,255,255,0.16);border-radius:10px;padding:10px 0;font-family:system-ui,-apple-system,Segoe UI,sans-serif;box-shadow:0 6px 18px rgba(0,0,0,0.4)}.gwp-menu .gwp-mi{padding:4px 16px}.gwp-menu .gwp-mname{font-size:13px;font-weight:700;color:#fff}.gwp-menu .gwp-memail{font-size:11px;color:#8a97a3;word-break:break-all}.gwp-menu .gwp-div{height:1px;background:rgba(255,255,255,0.1);margin:8px 0}.gwp-menu a.gwp-out{display:block;padding:8px 16px;font-size:12px;font-weight:600;color:#e91e63;text-decoration:none}@media(max-width:640px){.gwp-chip{display:none}}";document.head.appendChild(css);var host=document.querySelector("header.header-container .game-nav-header-content")||document.querySelector("header.header-container .header-content")||document.querySelector("header.header-container");if(!host)return;var wrap=document.createElement("span");wrap.style.display="inline-flex";wrap.className="gwp-wrap";var chip=document.createElement("span");chip.className="gwp-chip";chip.innerHTML='<span class="gwp-name" title="'+esc(email)+'">'+esc(name)+'</span><span class="gwp-caret">▾</span>';var menu=document.createElement("div");menu.className="gwp-menu";menu.style.display="none";menu.innerHTML='<div class="gwp-mi"><div class="gwp-mname">'+esc(name)+'</div><div class="gwp-memail">'+esc(email)+'</div></div><div class="gwp-div"></div><a class="gwp-out" href="/logout">Sign out</a>';chip.addEventListener("click",function(e){e.stopPropagation();menu.style.display=menu.style.display==="none"?"block":"none"});document.addEventListener("click",function(){menu.style.display="none"});wrap.appendChild(chip);wrap.appendChild(menu);host.appendChild(wrap)})})();</script>`;

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

const codeLanding = shell('<h1>Gacha<span>Wiki</span> Members</h1><p>The easiest way: type <strong>/code</strong> in the <strong>#wiki-access</strong> channel on our Discord. The bot replies with your personal code, visible only to you.</p><p style="margin-bottom:6px">Or use the web form below and the bot will DM it to you:</p><form method="POST" action="/code"><input name="handle" placeholder="Your Discord username" style="width:100%;box-sizing:border-box;padding:11px 13px;border:1px solid rgba(255,255,255,0.18);border-radius:8px;background:#0b0e11;color:#fff;font-size:15px;margin-bottom:10px;text-align:center" required><button type="submit" style="width:100%;padding:11px;border:0;border-radius:8px;background:#5865f2;color:#fff;font-size:15px;font-weight:600;cursor:pointer">Get my code via DM</button></form><p class="note">You need the Wiki Member role on our Discord first.</p><p class="note"><a href="/login">Back to sign in</a></p>');
const codeNotConfigured = shell('<h1>Gacha<span>Wiki</span> Members</h1><p class="err">Code pickup is being set up. Please check back shortly.</p><p class="note"><a href="/login">Back to sign in</a></p>');
const codeNoRole = shell('<h1>Gacha<span>Wiki</span> Members</h1><p class="err">You do not have the Wiki Member role yet.</p><p>Ask the maintainer for the role on our Discord server, then come back here.</p><a class="btn ghost" href="/login">Back to sign in</a>');
const codeTooNew = shell('<h1>Gacha<span>Wiki</span> Members</h1><p class="err">Your Discord account is newer than the minimum age for wiki access.</p><p>Accounts must be at least two years old. This is an anti-abuse rule; talk to the maintainer if you think this is a mistake.</p><a class="btn ghost" href="/login">Back to sign in</a>');
const codeNotFound = shell('<h1>Gacha<span>Wiki</span> Members</h1><p class="err">That Discord username was not found on our server.</p><p>Check the spelling (username, not display name) and try again.</p><a class="btn ghost" href="/code">Try again</a>');
const codeSent = shell('<h1>Check your DMs</h1><p>The GachaWiki bot just sent your personal code to your Discord DMs.</p><p>Use it with your email at the sign up form. If no DM arrives, check your privacy settings (allow DMs from server members) and try again.</p><a class="btn" href="/login">Go to sign up</a>');

async function dmCode(botToken, discordId, code) {
  const chResp = await fetch('https://discord.com/api/v10/users/@me/channels', {
    method: 'POST',
    headers: { Authorization: 'Bot ' + botToken, 'Content-Type': 'application/json' },
    body: JSON.stringify({ recipient_id: discordId }),
  });
  if (!chResp.ok) return false;
  const channelId = (await chResp.json()).id;
  const msgResp = await fetch('https://discord.com/api/v10/channels/' + channelId + '/messages', {
    method: 'POST',
    headers: { Authorization: 'Bot ' + botToken, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: 'Your GachaWiki personal code: **' + code + '**\nIt never changes and is linked to your Discord account. Use it with your email at https://gachawiki.info to sign up or to reset your password. Do not share this code.',
    }),
  });
  return msgResp.ok;
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

    // ---- personal code pickup: username in, bot DM out ----
    if (url.pathname === '/code' || url.pathname === '/code/') {
      const botToken = env.DISCORD_BOT_TOKEN;
      if (!botToken) {
        return new Response(codeNotConfigured, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
      }
      if (request.method !== 'POST') {
        return new Response(codeLanding, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
      }
      const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
      const tries = Number((await env.MEMBERS.get('codeip:' + ip)) || 0);
      if (tries >= 10) {
        return new Response(codeNotFound, { status: 429, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
      }
      await env.MEMBERS.put('codeip:' + ip, String(tries + 1), { expirationTtl: 600 });

      const form = await request.formData();
      const handle = String(form.get('handle') || '').trim().toLowerCase();
      if (!handle) {
        return new Response(codeLanding, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
      }
      const searchResp = await fetch('https://discord.com/api/v10/guilds/' + DISCORD_GUILD + '/members/search?query=' + encodeURIComponent(handle) + '&limit=10', {
        headers: { Authorization: 'Bot ' + botToken },
      });
      if (!searchResp.ok) {
        return new Response(codeNotFound, { status: 404, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
      }
      const found = await searchResp.json();
      const match = (Array.isArray(found) ? found : []).find((m) => (m.user && m.user.username || '').toLowerCase() === handle || (m.nick || '').toLowerCase() === handle);
      if (!match) {
        return new Response(codeNotFound, { status: 404, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
      }
      if (!Array.isArray(match.roles) || !match.roles.includes(WIKI_ROLE)) {
        return new Response(codeNoRole, { status: 403, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
      }
      // snowflake IDs encode the account creation time; require a minimum age
      const accountAge = Date.now() - (Number(BigInt(match.user.id) >> 22n) + 1420070400000);
      if (accountAge < 2 * 366 * 86400000) {
        return new Response(codeTooNew, { status: 403, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
      }
      const code = await deriveCode(secret, match.user.id);
      const key = 'invite:' + code;
      const existing = await env.MEMBERS.get(key);
      const rec = existing ? JSON.parse(existing) : { discord: match.user.id, discord_name: match.user.username, email: null, created: Date.now() };
      rec.discord = match.user.id;
      rec.discord_name = match.user.username;
      await env.MEMBERS.put(key, JSON.stringify(rec));
      const dmOk = await dmCode(botToken, match.user.id, code);
      if (!dmOk) {
        return new Response(codeNotFound, { status: 502, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
      }
      return new Response(codeSent, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
    }

    if (url.pathname === '/logout') {
      return new Response(null, { status: 302, headers: {
        'Location': '/login',
        'Set-Cookie': SESSION_COOKIE + '=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax; Domain=.gachawiki.info',
        'Cache-Control': 'no-store',
      } });
    }

    if (url.pathname === '/whoami') {
      const m = await sessionMember(request, secret);
      return new Response(JSON.stringify({ member: m }), {
        status: m ? 200 : 401,
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      });
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
    originHeaders.delete('accept-encoding');
    const originResp = await fetch(originUrl, {
      method: request.method,
      headers: originHeaders,
      body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body,
      redirect: 'manual',
    });
    const respHeaders = new Headers(originResp.headers);
    respHeaders.delete('set-cookie');
    const ct = respHeaders.get('content-type') || '';
    if (request.method === 'GET' && originResp.status === 200 && ct.includes('text/html')) {
      let html = await originResp.text();
      respHeaders.delete('content-length');
      respHeaders.delete('content-encoding');
      respHeaders.delete('etag');
      respHeaders.set('cache-control', 'no-store');
      html = html.includes('</body>') ? html.replace('</body>', PROFILE_WIDGET + '</body>') : html + PROFILE_WIDGET;
      return new Response(html, { status: 200, headers: respHeaders });
    }
    return new Response(originResp.body, { status: originResp.status, headers: respHeaders });
  },
};
