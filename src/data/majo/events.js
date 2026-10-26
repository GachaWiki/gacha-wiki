// MAJO event guide data: patch-note style content for in-game events, plus extracted event art on R2.

const R2 = 'https://img.gachawiki.info';

export const MAJO_EVENTS = [
  {
    slug: 'perfumers-final-destination',
    name: "The Perfumer's Final Destination",
    storyName: "The Perfumer's Final Destination",
    summary:
      'Daphine personal event: story and challenge stages for event tokens, staged event shops and the Lucky Wheel, running alongside the Eternal Contact: Daphine UR banner.',
    start: '2026-10-28T11:00:00+08:00',
    end: '2026-11-18T05:00:00+08:00',
    periodLabel: 'Oct 28 to Nov 18, 2026 (UTC+8)',
    hero: { src: `${R2}/majo/banners/festival-s2.webp`, w: 1200, h: 480 },
    logo: { src: `${R2}/majo/events/festival-s2-logo.webp`, w: 1200, h: 480 },
    officialNotes: [
      'Event period: Oct 28 11:00 to Nov 18 05:00 (UTC+8).',
      'Clear event story stages and challenge stages for Daphine Event Tokens, redeemable at the event shop.',
      'Event Shops open in stages: Shop I from Oct 28, Shop II from Nov 4, Shop III from Nov 11 (schedule revised Oct 8).',
      'Runs alongside Eternal Contact: Daphine (UR), Oct 28 11:00 to Nov 18 05:00, decreasing pity 80 to 70 to 60 with counts carried over between Eternal pools.',
      'Clearing the challenge stage awards the Title: Master Perfumer.',
    ],
    dataNotes: [
      'Daphine (P0021, "Exotic Perfumer") is a UR Healer per client data; her kit ships with this event.',
      'Cosmetics preloaded in client data: Avatar Chibi Daphine, Daphine event token and exchange shop items, and her exclusive avatar and title.',
      'Chapter 8 "Blood of Despair" assets shipped in the same Oct 7 client update as this event.',
    ],
    gallery: [
      { src: `${R2}/majo/banners/ur-pu-4-daphine.webp`, w: 1200, h: 480, caption: 'Eternal Contact: Daphine banner art.' },
      { src: `${R2}/majo/banners/daphine-gacha.webp`, w: 1440, h: 1920, caption: 'Daphine gacha key art.' },
    ],
    sources: [
      { label: 'To All Observers: Downtime Update Announcement and October 10 Events, Oct 5, 2026', url: 'https://majo-x.com/en/news/20261005_majo-witchesnight-announcement/' },
      { label: 'In-game event strings and item texts (game data, Oct 12, 2026 pull)' },
    ],
  },
  {
    slug: 'majo-welfare-committee-october',
    name: 'MAJO Welfare Committee (October)',
    storyName: 'MAJO Welfare Committee',
    summary:
      'Lucky Draw event with Omen Stones featured and doubled Arsenal Domain rewards. One Stamina spent equals one Lucky Draw Ticket while the event runs.',
    start: '2026-10-21T11:00:00+08:00',
    end: '2026-11-04T05:00:00+08:00',
    periodLabel: 'Oct 21 to Nov 4, 2026 (UTC+8)',
    hero: { src: `${R2}/majo/events/bingo-game.webp`, w: 512, h: 205 },
    logo: { src: `${R2}/majo/events/bingo-game-logo.webp`, w: 512, h: 205 },
    officialNotes: [
      'Event period: Oct 21 11:00 to Nov 4 05:00 (UTC+8).',
      'Lucky Draw Tickets come from spending Stamina: 1 Stamina spent = 1 ticket during the event. Omen Stones are featured prizes.',
      'Arsenal Domain rewards are doubled for the duration.',
    ],
    dataNotes: [
      'The bingo-style Lucky Draw board and its reward table are client-side; prize stock is server-side.',
    ],
    gallery: [
      { src: `${R2}/majo/events/bingo-game.webp`, w: 512, h: 205, caption: 'Welfare Committee Lucky Draw event banner.' },
    ],
    sources: [
      { label: 'To All Observers: Downtime Update Announcement and October 10 Events, Oct 5, 2026', url: 'https://majo-x.com/en/news/20261005_majo-witchesnight-announcement/' },
    ],
  },
  {
    slug: 'combat-training-annihilation-battle',
    name: 'Combat Training: Annihilation Battle',
    storyName: 'Combat Training',
    summary:
      'Two combat training battles with combined scores and bonus rewards for eliminating designated targets. Drill Exchange shop runs alongside.',
    start: '2026-10-21T11:00:00+08:00',
    end: '2026-11-04T05:00:00+08:00',
    periodLabel: 'Oct 21 to Nov 4, 2026 (UTC+8)',
    hero: { src: `${R2}/majo/events/combat-training.webp`, w: 512, h: 205 },
    logo: { src: `${R2}/majo/events/combat-training-logo.webp`, w: 512, h: 205 },
    officialNotes: [
      'Event period: Oct 21 11:00 to Nov 4 05:00 (UTC+8).',
      'Two battles, both counting toward one combined score.',
      'Bonus rewards for eliminating designated targets; Combat Training Tickets and the Drill Exchange shop are part of the event.',
    ],
    dataNotes: [
      'Exercise-battle scoring rewards stall-friendly teams; CN players use dual-tank and multi-heal field comps here.',
    ],
    gallery: [
      { src: `${R2}/majo/events/combat-training.webp`, w: 512, h: 205, caption: 'Combat Training event banner.' },
    ],
    sources: [
      { label: 'To All Observers: Downtime Update Announcement and October 10 Events, Oct 5, 2026', url: 'https://majo-x.com/en/news/20261005_majo-witchesnight-announcement/' },
    ],
  },
  {
    slug: 'boss-training-double-prajna-demon',
    name: 'Boss Training: Double Prajna Demon',
    storyName: 'Boss Training',
    summary:
      'Paired-demon raid boss. The two demons show a merged-looking but separately calculated HP bar; focus the red demon first.',
    start: '2026-10-07T11:00:00+08:00',
    end: '2026-10-21T05:00:00+08:00',
    periodLabel: 'Oct 7 to Oct 21, 2026 (UTC+8)',
    hero: { src: `${R2}/majo/events/boss-fight-3.webp`, w: 1200, h: 480 },
    logo: { src: `${R2}/majo/events/boss-fight-logo.webp`, w: 512, h: 205 },
    officialNotes: [
      'Event period: Oct 7 11:00 to Oct 21 05:00 (UTC+8).',
      'Boss Training raid with two demons; rewards follow the standing Boss Training reward frames.',
    ],
    dataNotes: [
      'The HP bars look merged but are calculated separately (CN guide note): focus the red demon first.',
      'Physical teams report the blue demon barely reaches them; the raid favors physical comps this rotation.',
    ],
    gallery: [
      { src: `${R2}/majo/events/boss-fight-3.webp`, w: 1200, h: 480, caption: 'Double Prajna Demon raid banner art.' },
    ],
    sources: [
      { label: 'To All Observers: Downtime Update Announcement and October 10 Events, Oct 5, 2026', url: 'https://majo-x.com/en/news/20261005_majo-witchesnight-announcement/' },
      { label: 'Bilibili guide (CN community research, Oct 2026)' },
    ],
  },
  {
    slug: 'magic-bows-first-hunt',
    name: "Magic Bow's First Hunt",
    storyName: "The Legend of the Magic Bow's First Hunt",
    summary:
      'Event story, repeat challenges and high difficulty stages for event tokens, an event shop and the Lucky Wheel, running alongside the Eternal Contact: Bazhuli banner.',
    start: '2026-09-16T11:00:00+08:00',
    end: '2026-10-07T05:00:00+08:00',
    periodLabel: 'Sep 16 to Oct 7, 2026 (UTC+8)',
    hero: { src: `${R2}/majo/banners/festival-s1.webp`, w: 512, h: 205 },
    logo: { src: `${R2}/majo/events/festival-s1-logo.webp`, w: 512, h: 205 },
    officialNotes: [
      'Event period: Sep 16 11:00 to Oct 7 05:00 (UTC+8).',
      'Clear event story stages, repeat challenges, and high-difficulty stages for event tokens, redeemable at the event shop.',
      'Lucky Wheel Tickets are earned via event stages, with bonus rewards after certain spin counts.',
      'Runs alongside the Eternal Contact: Bazhuli (UR) banner, Sep 16 11:00 to Oct 7 05:00, decreasing pity: first cap 80, second 70, then 60 from the third period onward. Cumulative counts carry over, pity cap resets each period.',
      'A Sep 16 hotfix adjusted the Eternal Contact: Bazhuli step milestone rewards at 30, 60, 150, 180, 240, 300, 400 and 500 draws.',
    ],
    dataNotes: [
      "Story chapter: \"The Legend of the Magic Bow's First Hunt\", Story 1 to 10. Clearing Story 10 completes the event story.",
      'Domain battles: Physical Battle 1 to 15, Magical Battle 1 to 15 and Psychic Battle 1 to 15, 45 repeatable fights in total.',
      "Challenge: High Difficulty 1 to 5. Clearing High Difficulty 5 awards the Title: Magic Bow's First Hunt.",
      'Currency: Bazhuli Event Token, earned from event stages and quests and spent in Event Shop I, II and III. Shop stock is server side, check the in game shop for exact costs.',
      'Lucky Wheel runs on Spin Tickets, and accumulated attempts do not reset during the event.',
      'Quests: ten cumulative deploy stage clear missions, from 40 up to 400 clears.',
      'Cosmetics from this event: Avatar: Chibi Bazhuli and the Full String - Bazhuli lobby background.',
    ],
    gallery: [
      { src: `${R2}/majo/events/bazhuli-bow.webp`, w: 1440, h: 1920, caption: 'Bazhuli with the magic bow, event main screen art.' },
      { src: `${R2}/majo/events/bazhuli-awaken.webp`, w: 1440, h: 1920, caption: 'Bazhuli Awakened lobby art.' },
      { src: `${R2}/majo/events/bazhuli-throne.webp`, w: 622, h: 830, caption: 'Bazhuli lobby art.' },
    ],
    sources: [
      { label: 'September Update Content Overview, Sep 7, 2026', url: 'https://majo-x.com/en/news/20260907_majo-witchesnight-announcement/' },
      { label: 'Sept/16 No-Downtime Update, Sep 15, 2026', url: 'https://majo-x.com/en/news/20260915_majo-witchesnight-announcement/' },
      { label: 'In-game event strings and item texts (game data, Sep 14, 2026 pull)' },
    ],
  },
];

export function getEvent(slug) {
  return MAJO_EVENTS.find((ev) => ev.slug === slug);
}

export function eventStatus(ev, now = Date.now()) {
  const start = new Date(ev.start).getTime();
  const end = new Date(ev.end).getTime();
  if (now < start) return { id: 'upcoming', label: 'Upcoming' };
  if (now > end) return { id: 'ended', label: 'Ended' };
  return { id: 'live', label: 'Live now' };
}
