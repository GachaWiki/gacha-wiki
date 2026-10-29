// Gene-Sys: Adam banner history, built from the decrypted DrawMachineData /
// DrawMachineGroupData / DrawMachineRoleBannerData / InGameBannerData /
// ActivityMissionTimeData tables (Patch pulls 2026-10-13 and 2026-10-27,
// D:/GeneSysAdam), cross-checked against the official site notices and the X
// accounts (@GeneSysAdamEN / @GeneSysAdamJP). Banner schedules run
// server-side: entries carry the data wave they appeared in, not exact hours.
// Banner art (Draw_Bg_*) is the game's own drawcard bundle art on R2; banners
// whose art has not shipped to the client (or is R18, like the Black Gold
// Hunter panel and the Milena solo panel) use the official event art or the
// featured strip instead.
import { gsaCharacters } from './characters.js';

const bySlug = Object.fromEntries(gsaCharacters.map(c => [c.slug, c]));

const R2 = 'https://k2b1c5ab57ed98e51.gachawiki.info/gene-sys-adam';

export const GSA_BANNERS_UPDATED = 'October 27, 2026';

// status: live (running now) | ended (observed running, since superseded) |
// beta (ran in the Sep 17 beta window) | scheduled (machines configured in
// the client tables but not observed running yet)
export const GSA_BANNERS = [
  {
    slug: 'black-gold-hunter',
    name: 'Black Gold Hunter: Cowgirl Belle',
    nameZh: '黑金獵人 - 乳牛貝兒',
    kind: 'Event Ticket Recruit',
    status: 'live',
    since: 'Live again since October 13, 2026, running to November 3, 06:59 (UTC+8)',
    featured: ['belle-clumsy-cowgirl'],
    pity: 120,
    eventToken: 'Warrant Gems and Gold Bars',
    training: ['Belle'],
    image: `${R2}/X_BGH_Event.webp`,
    note: 'The Black Gold Hunter event returned on October 13 (official period on the @GeneSysAdamJP account): event stages drop Warrant Gems that open the eight black-market vaults, each vault paying from a uniform-probability reward table, while paid and free Gold Bars feed the event training bonus. Ticket lanes cover Cowgirl Belle and Rookie Maid Sugimoto Arina, and the gem machine carries a 120-pull guarantee. The client pulled its banner art panel (Draw_Bg_23) on October 13; the panel art itself stays off the wiki, so the card uses the official event art. Login gifts run alongside.',
  },
  {
    slug: 'lunar-splendor',
    name: 'Lunar Splendor of the Pleasure District',
    nameZh: '繁華遊廓的月之華',
    kind: 'Dual Rate-Up',
    status: 'live',
    since: 'Official launch, September 22 to November 3, 2026',
    featured: ['komachi-sayaka', 'hijikata-chizuru'],
    pity: 120,
    eventToken: 'Moonflower Crest',
    training: ['Komachi Sayaka', 'Hijikata Chizuru'],
    image: `${R2}/News_3520.webp`,
    note: 'The official-launch limited banner: a 120-pull featured guarantee, an ECoin ticket lane, and an exchange shop stocking Moonflower Naginata and Footwear components for Hijikata Chizuru. Card art is the official event notice from genesys-adam.com; the in-game art panels stay off the wiki. Dates from the same official notice.',
  },
  {
    slug: 'heavens-door-jessica',
    name: "Heaven's Door: Jessica",
    nameZh: '天堂之門 - 潔西卡',
    kind: 'Limited Recruit',
    status: 'live',
    since: 'Live in the October 27, 2026 wave (debut machine ran in the September 17 beta)',
    featured: ['jessica'],
    pity: 120,
    eventToken: "Heaven's Door summon letters",
    training: ['Jessica'],
    image: `${R2}/Draw_Bg_36.webp`,
    note: "The Heaven's Door special missions returned with the October 27 wave and the client pulled the Jessica banner panel (Draw_Bg_36) the same day, confirming the machine live. A 120-pull featured guarantee on the limited lane; the September 17 official notice first introduced the ticket recruit during the non-wipe beta. The Connie phase sits behind this one in the activity pipeline.",
  },
  {
    slug: 'milena-rate-up',
    name: 'Milena Rate-Up',
    nameZh: '指定召募 - 米蓮娜',
    kind: 'Solo Rate-Up',
    status: 'live',
    since: 'Observed live in the October 27, 2026 wave',
    featured: ['milena'],
    pity: 100,
    eventToken: null,
    training: [],
    image: null,
    note: 'The solo rate-up rotation moved on to Milena: the client pulled her banner panel (Draw_Bg_30) and tab icon with the October 27 wave. The panel art itself stays off the wiki, so the card shows the featured strip. Same deal as every solo: SSR rate x2, a Designated Seal per pull and a 100-pull featured guarantee.',
  },
  {
    slug: 'heavens-door-connie',
    name: "Heaven's Door: Connie",
    nameZh: '天堂之門 - 昆妮',
    kind: 'Ticket Recruit',
    status: 'scheduled',
    since: 'Configured in the client tables, not yet observed live',
    featured: ['connie'],
    pity: null,
    eventToken: "Heaven's Door summon letters",
    training: ['Connie'],
    image: null,
    note: "Second Heaven's Door recruit (art Draw_Bg_46), sitting behind the Jessica phase that went live on October 27. Connie's skill data only completed in the September 22 tables; her rating on the wiki was rescored then.",
  },
  {
    slug: 'war-and-music',
    name: 'War & Music',
    nameZh: '戰爭與音樂',
    kind: 'Dual Rate-Up',
    status: 'scheduled',
    since: 'Configured in the client tables, not yet observed live',
    featured: ['elena', 'victoria'],
    pity: 120,
    eventToken: 'Phantom Emblem',
    training: ['Elena', 'Victoria'],
    image: null,
    note: 'Dual limited banner for Elena and Victoria (art panels Draw_Bg_34_1 and _34_2) with the Collect Phantom Emblems event. The October 27 wave preloaded the banner text and shipped Elena\'s portrait to the client, so the wave is visibly next in line; both featured kits were reworked in the October tables while waiting in the wings.',
  },
  {
    slug: 'lingering-echoes',
    name: 'Lingering Echoes',
    nameZh: '音行自鳴',
    kind: 'Dual Rate-Up',
    status: 'scheduled',
    since: 'Configured in the client tables, not yet observed live',
    featured: ['qing-yin', 'leng-zhen'],
    pity: 120,
    eventToken: 'Gagaku Emblem',
    training: ['Qing Yin', 'Leng Zhen'],
    image: null,
    note: 'The next new-character wave: dual limited banner for Qing Yin and Leng Zhen (art panels Draw_Bg_40_1 and _40_2) with the Collect Gagaku Emblems event. The October 27 wave preloaded its banner text; both kits already ship complete in the tables.',
  },
  {
    slug: 'downloads-celebration',
    name: '1.5M Downloads Celebration',
    nameZh: '150萬下載紀念',
    kind: 'Special Recruit',
    status: 'scheduled',
    since: 'Configured in the October 27, 2026 tables',
    featured: [],
    pity: null,
    eventToken: '[1.5M Downloads] Celebration Certificate',
    training: [],
    image: null,
    note: 'The 1.5M Downloads celebration arrived in the October 27 wave: two special machines over a twelve-SSR pool (Ruo Lan, Milena, Ogino Rui, Lin Lin, Sugimoto Arina, Liz, Amelie, Li Mu, Kurosawa Shion, Chloe, Charlotte, Annabelle) with a guaranteed SSR on the tenth pull, a Celebration Certificate token that is reclaimed when the event ends, and celebration login gifts. The featured list is the pool, not a rate-up pair.',
  },
  {
    slug: 'solo-rotation-queue',
    name: 'Solo Rate-Up Queue',
    nameZh: '指定召募 - 後續',
    kind: 'Solo Rate-Up',
    status: 'scheduled',
    since: 'Configured in the client tables, not yet observed live',
    featured: ['lin-lin', 'annabelle', 'li-mu'],
    pity: 100,
    eventToken: null,
    training: [],
    image: null,
    note: 'Three more solo machines are configured behind the event rotation: Lin Lin, Annabelle (her tab icon has already shipped to the client) and the newly added Li Mu machine from the October 27 wave, all on the same 100-pull featured guarantee. The Advanced Summon pool also flipped from Permanent to Limited status in the October 27 tables.',
  },
  {
    slug: 'ogino-rui-rate-up',
    name: 'Ogino Rui Rate-Up',
    nameZh: '指定召募 - 荻野瑠衣',
    kind: 'Solo Rate-Up',
    status: 'ended',
    since: 'September 29 to October 13, 2026',
    featured: ['ogino-rui'],
    pity: 100,
    eventToken: null,
    training: [],
    image: null,
    note: 'Solo banner from the September 29 maintenance until the October 13 wave took the summon screen for the Black Gold Hunter re-run (the panels are plain backdrop art, so the card shows the featured strip instead). SSR rate x2, a Designated Seal per pull and a 100-pull featured guarantee.',
  },
  {
    slug: 'sugimoto-arina-rate-up',
    name: 'Sugimoto Arina Rate-Up',
    nameZh: '指定召募 - 杉本有菜',
    kind: 'Solo Rate-Up',
    status: 'ended',
    since: 'September 29 to October 13, 2026',
    featured: ['sugimoto-arina'],
    pity: 100,
    eventToken: null,
    training: [],
    image: null,
    note: 'Ran alongside the Rui rate-up for the same two weeks. Same deal as every solo: SSR rate x2, Designated Seal per pull, 100-pull featured guarantee.',
  },
];

export function gsaBannerChar(slug) {
  return bySlug[slug] || null;
}
