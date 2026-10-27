// Pages origin worker: serves assets only to the gate worker's signed subrequests.
// Direct visits to gacha-wiki.pages.dev (or any pages.dev address) redirect to the
// canonical gated domain, so there is no ungated backdoor.
const ORIGIN_SIG = '05392a88685c21317544b049d61934f539ff284eef079d20f842532d521b881f';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname.endsWith('.pages.dev')) {
      const sig = request.headers.get('x-gw-origin') || '';
      if (sig.length !== ORIGIN_SIG.length || !timingEqual(sig, ORIGIN_SIG)) {
        return Response.redirect('https://gachawiki.info' + url.pathname + url.search, 301);
      }
    }
    return env.ASSETS.fetch(request);
  },
};

function timingEqual(a, b) {
  let diff = 0;
  for (let i = 0; i < b.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
