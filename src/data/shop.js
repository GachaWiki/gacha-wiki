// TCG Shop referral configuration and store-link resolution.
// The item catalog lives in shop-items.js. Focus (2026-10): Amazon US links
// only, Weiss Schwarz products only. An empty tag string means the plain
// (non referral) link is used instead.

export const AFFILIATE_IDS = {
  // Amazon Associates tracking id, appended to every Amazon link as ?tag=<id>.
  // Sign up: https://affiliate-program.amazon.com/
  amazonTag: 'gachawiki-20',

  // Separate tag for the Amazon.co.jp program, reserved for future use: Japan
  // runs its own Associates program (format like gachawiki-22). No catalog
  // links use it yet.
  amazonJpTag: '',
};

// Resolve a link to its referral URL when configured, otherwise the plain URL.
// Two link shapes are supported:
//   asin links: { store, asin } -> Amazon US product page with the tag appended.
//   url links: { store, url } -> Amazon US search link with the tag appended.
export function shopLink(link) {
  if (link.asin) {
    const tag = AFFILIATE_IDS.amazonTag;
    return tag ? `https://www.amazon.com/dp/${link.asin}/?tag=${tag}` : `https://www.amazon.com/dp/${link.asin}`;
  }
  if (link.url) {
    const tag = AFFILIATE_IDS.amazonTag;
    if (tag && link.url.startsWith('https://www.amazon.')) {
      return `${link.url}${link.url.includes('?') ? '&' : '?'}tag=${tag}`;
    }
    return link.url;
  }
  return '';
}
