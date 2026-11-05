// Manually pinned ticker items, shown FIRST in the site-wide news ticker
// (before the auto-generated wiki updates that come from git history via
// src/utils/ticker-updates.ts). Newest first. Each entry: date label, game
// or site section, short text (no dashes, colons and commas only), and the
// page the item links to. Use this only for things git commits can't
// express, like shop promos; regular wiki updates belong in git, not here.
// An entry with a `code` object ALSO renders as the fixed CODE chip next to
// the Latest chip: isNew tag + game label + code panel (flip through multiple
// codes if the same game has several) + expiry. Entries from MORE GAMES each
// get their own chip; the Erolabs variant of a code belongs in the panels
// array or the hover text, not as extra clutter on the chip.
export const tickerItems = [
  {
    date: 'Now',
    game: 'Horizon Walker',
    text: 'Active coupon code 26HAPPYHW, Erolabs: 26HAPPYHWE, until Nov 30',
    href: '/guides/horizon-walker/redeem-codes/',
    isCode: true,
    code: { label: 'Horizon Walker', panels: ['26HAPPYHW'], until: 'until Nov 30', isNew: true },
  },
  {
    date: 'Now',
    game: 'Brown Dust 2',
    text: 'Active monthly code 2026BD2NOV, redeem until November 30, 14:59 UTC',
    href: '/guides/brown-dust-2/redeem-codes/',
    isCode: true,
    code: { label: 'Brown Dust 2', panels: ['2026BD2NOV'], until: 'until Nov 30', isNew: false },
  },
  {
    date: 'Sep 22',
    game: 'Shop',
    text: 'GODDESS OF VICTORY: NIKKE Vol.2 for Weiss Schwarz, English edition Sep 25, Japanese and Korean out now',
    href: '/shop/',
  },
];
