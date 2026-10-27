// Cloudflare Access (email login) protects gachawiki.info, www, and img.
// This worker only closes the gacha-wiki.pages.dev backdoor by redirecting it
// to the canonical domain; everything else passes through to the static assets.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname.endsWith('.pages.dev')) {
      return Response.redirect('https://gachawiki.info' + url.pathname + url.search, 301);
    }
    return env.ASSETS.fetch(request);
  },
};
