// Central R2 image CDN configuration
// All game images served from Cloudflare R2 to stay under CF Pages file limit
export const R2_BASE = 'https://img.gachawiki.info';

/**
 * Build an R2 image URL for a game asset.
 * @param game - game key (e.g. 'zone-nova', 'make-drama')
 * @param path - image path within the game (e.g. 'characters/Penny.png')
 * @returns full R2 URL
 */
export function r2Url(game, path) {
  return `${R2_BASE}/${game}/${path}`;
}
