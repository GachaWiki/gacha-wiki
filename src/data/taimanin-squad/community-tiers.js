// Community tier lists for Taimanin Squad, transcribed from the JP and TW
// communities. Names stored as our wiki's English display names so entries
// resolve to character pages via characters.js. Only communities that still
// maintain a public list are included; Korean and Chinese communities have
// no maintained text tier list as of 2026-10-30 (KR: Arca.live discussion
// only; CN: video guides only; the EN Reddit community shares this wiki's
// own list). Re-verify after each game update: Altema updates its ranking
// every few weeks (last checked 2026-10-30).

export const COMMUNITY_TIER_LISTS = [
  {
    id: 'altema',
    tabLabel: 'Altema (JP)',
    community: 'JP',
    source: 'Altema',
    title: 'Altema Reroll Ranking',
    language: 'Japanese',
    updated: '2026-10-15',
    url: 'https://altema.jp/taimaninsquad/risemara',
    note: 'Reroll (リセマラ) ranking from Altema, the most actively maintained community list. Updated twice in October. Halloween units not yet rated.',
    tierColorMap: { SS: '#FFD700', S: '#C084FC', A: '#34D399' },
    tiers: [
      { tier: 'SS', characters: ['Mizuki Yukikaze', 'Kamimura Maika', 'Akiyama Rinko', 'Koukawa Asuka'] },
      { tier: 'S', characters: ['Mizuki Shiranui', 'Kousaka Shizuru', 'Fuuma Saika', 'Shinganji Kurenai'] },
      { tier: 'A', characters: ['Igawa Sakura', 'Snake Lady', 'Aina Winchester', 'Ingrid', 'Felicia', 'Amamiya Shisui', 'Rakshasa', 'Hoshino Mitsuki', 'Yuri Hisui', 'Furfur', 'Mirabell Bell'] },
    ],
  },
  {
    id: 'gamerch',
    tabLabel: 'Gamerch (JP)',
    community: 'JP',
    source: 'Gamerch',
    title: 'Gamerch Reroll Ranking',
    language: 'Japanese',
    updated: '2026-05-07',
    url: 'https://gamerch.com/taimaninsquad/955897',
    note: 'Reroll ranking from the Gamerch wiki. Last updated in May 2026, so it predates the summer and later waves.',
    tierColorMap: { SS: '#FFD700', S: '#C084FC', A: '#34D399', B: '#9CA3AF' },
    tiers: [
      { tier: 'SS', characters: ['Kamimura Maika', 'Mizuki Yukikaze'] },
      { tier: 'S', characters: ['Igawa Asagi', 'Igawa Sakura', 'Edwin Black', 'Su Jinglei', 'Fuuma Tokiko'] },
      { tier: 'A', characters: ['Rakshasa', 'Fuuma Saika', 'Felicia', 'Kousaka Shizuru', 'Ingrid', 'Oboro', 'Shinganji Kurenai', 'Koukawa Asuka', 'Mizuki Shiranui'] },
      { tier: 'B', characters: ['Yatsu Murasaki', 'Nanase Mai', 'Amamiya Shisui', 'Aina Winchester', 'Onisaki Kirara'] },
    ],
  },
  {
    id: 'bahamut',
    tabLabel: 'Bahamut (TW)',
    community: 'TW',
    source: 'Bahamut (巴哈姆特)',
    title: 'Bahamut Attacker Ranking',
    language: 'Traditional Chinese',
    updated: '2026-01-17',
    url: 'https://forum.gamer.com.tw/C.php?bsn=84391&snA=3',
    note: 'Story-pushing attacker ranking from the Bahamut board, written during the January beta and not updated since. Ranks gacha attackers only; defenders, healers and farmable units are excluded.',
    tierColorMap: { T0: '#FFD700', 'T0.5': '#C084FC', T1: '#60A5FA', T2: '#34D399' },
    tiers: [
      { tier: 'T0', characters: ['Kamimura Maika'] },
      { tier: 'T0.5', characters: ['Mizuki Yukikaze'] },
      { tier: 'T1', characters: ['Fuuma Saika', 'Rakshasa', 'Koukawa Asuka'] },
      { tier: 'T2', characters: ['Shinganji Kurenai'] },
    ],
  },
];
