// Centralized constants for the entire site
// Single source of truth for site-wide configuration.
// Game identity (id, name, image, theme color, etc.) lives in src/data/games.ts;
// this file no longer holds any game data.

// Site-wide constants
export const SITE = {
  TITLE: 'GachaWiki',
  DESCRIPTION:
    'Comprehensive guides, character builds, tier lists, and game strategies for popular gacha games including Zone Nova, Silver and Blood, Horizon Walker, Stella Sora, Busty Burst, Star Savior, Last Origin, Rebellion Gilgamesh, and more. Complete wiki with character databases, damage mechanics, daily reset timers, and tools.',
  AUTHOR: 'GachaWiki',
  DEFAULT_IMAGE: '/images/about.jpg',
  SOCIAL: {
    GITHUB: 'https://github.com/boring877/gacha-wiki',
    X: 'https://x.com/GachaJunkie888',
    DISCORD: 'https://discord.gg/YdWFddQKR8',
  },
  // Webhooks are handled server-side only for security
} as const;

// Google AdSense config. The loader (Analytics.astro) renders once the client
// ID is set; the header unit (AdSlot.astro) additionally needs a slot ID
// created in the AdSense console (Ads -> By ad unit -> Display ads).
// PUBLIC_ADSENSE_* env vars override the baked defaults.
export const ADSENSE_CLIENT: string =
  import.meta.env.PUBLIC_ADSENSE_CLIENT || 'ca-pub-5642874552102319';
export const ADSENSE_SLOT_HEADER: string =
  import.meta.env.PUBLIC_ADSENSE_SLOT_HEADER || '3435163100';

// Backward compatibility exports
export const SITE_TITLE = SITE.TITLE;
export const SITE_DESCRIPTION = SITE.DESCRIPTION;
