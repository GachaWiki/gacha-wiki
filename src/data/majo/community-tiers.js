// Community tier lists for MAJO, shown as extra tabs on the tier-list page so
// readers can compare opinions. Each entry is a faithful snapshot of ONE
// source's own ladder (their labels, their grouping, their gaps), gathered by
// CN/JP/KR community research in October 2026. Slugs resolve against
// characters.js; every roster witch appears exactly once per source (tiered,
// or in notRated with that source's reason).

export const MAJO_COMMUNITY_TIERS = [
  {
    id: 'jp-gamerch',
    tab: 'JP: Gamerch',
    source: 'Gamerch MAJO wiki (aggregate ladder)',
    updated: 'October 3, 2026',
    url: 'https://gamerch.com/majorstudio/1009530',
    intro:
      'The Japanese Gamerch wiki is the only active JP consensus source. Their ladder runs one grade lower than ours at the top (their S is our SS) and values arena units differently: Jenny and Yuhong sit at A, Garana and Carmen at B.',
    notes: [
      'Class leaders per the JP wiki: Lucia (Assault), Alice (Breaker), Isabelle (Guardian), Emily (Support).',
      'Attack-type leaders: Yuhong (Physical), Lucia (Spirit), Bazhuli (Magic).',
      'Editor meta note: the current environment is a Zhijie, Xuanji, Xinzi core plus whichever Assault or Breaker you have raised stars on; healers and Guardians are boss-fight picks in PVP.',
      'JP client skew: Macak and Dayu are not on the JP roster, and the table predates Bellakey\'s Oct 7 release.',
    ],
    tiers: [
      { tier: 'S', slugs: ['bazhuli', 'isabelle', 'lucia', 'emily', 'yun', 'alice', 'xuanji'] },
      { tier: 'A', slugs: ['luoqin', 'zhijie', 'jenny', 'yuhong', 'patra', 'xinzi', 'maro', 'huarui', 'peseshet', 'xini', 'leed', 'tomoe'] },
      { tier: 'B', slugs: ['garana', 'carmen', 'lena', 'lumi', 'grina', 'budi', 'doroa'] },
      { tier: 'C', slugs: ['qing', 'dusan'] },
    ],
    notRated: {
      label: 'Not in the JP table',
      slugs: ['bellakey', 'dayu', 'macak'],
      reason: 'Bellakey released Oct 7 after this table\'s last update (her own JP page rates her S); Macak and Dayu are not on the JP roster.',
    },
  },
  {
    id: 'kr-community',
    tab: 'KR: Community',
    source: 'KR wiki PvE ladder (majoapocalypse.wiki) + DC Inside god-tier post',
    updated: 'October 8 to 11, 2026',
    url: 'https://majoapocalypse.wiki/ko/tier-list/majo-apocalypse-tier-list/',
    intro:
      'The Korean wiki ladder is PvE-only and deliberately conservative: everything released after September sits in a Testing bucket instead of tiers. The DC Inside mini gallery (the real KR hub) runs its own god-tier ladder: Bazhuli, then Yuhong, then Bellakey, then Xinzi.',
    notes: [
      'DC Inside god-tier ladder (Oct 11): Bazhuli > Yuhong > Bellakey > Xinzi, with Bazhuli called irreplaceable and Bellakey "below Bazhuli but more damage than Xinzi".',
      'KR standard team-building: 4 physical, or 3 physical plus 1 mental; the wiki\'s default template team is Carmen + Xuanji + Patra + Maro.',
      'KR Yuhong tip: from the Thousand Contact selector, just take multiple Yuhongs (the dupe-economy pick).',
    ],
    tiers: [
      { tier: 'SS', slugs: ['carmen', 'xuanji', 'maro', 'patra'] },
      { tier: 'S', slugs: ['jenny', 'yuhong', 'garana', 'xinzi', 'peseshet'] },
      { tier: 'A', slugs: ['qing', 'budi', 'tomoe', 'huarui', 'dusan'] },
      { tier: 'B', slugs: ['lumi', 'lena', 'xini', 'leed', 'grina', 'doroa'] },
    ],
    notRated: {
      label: 'Testing / not listed',
      slugs: ['emily', 'bazhuli', 'isabelle', 'bellakey', 'luoqin', 'lucia', 'alice', 'macak', 'dayu', 'yun', 'zhijie'],
      reason: 'The KR wiki refuses to tier post-September releases (Emily, Bazhuli, Luoqin, Lucia, Bellakey land in its Testing bucket; it also re-lists Patra and Lumi there). Macak, Dayu, Yun, Zhijie and Alice are absent from its ladder entirely.',
    },
  },
  {
    id: 'cn-bahamut',
    tab: 'CN: Bahamut',
    source: 'Bahamut all-character analysis (star grades)',
    updated: 'September 30, 2026',
    url: 'https://forum.gamer.com.tw/C.php?bsn=85761&snA=148',
    intro:
      'The Chinese-speaking community grades on stars, not letters. This is the Bahamut all-character analysis thread\'s final revision: only two witches ever reached its top grade, free starter Xinzi alongside paid Zhijie. For October, Bilibili guide-maker chain_-_- publishes the CN video tier list (6-star basis; his Oct 8 edition: physical still rules, Carmen plus Bellakey is the flagged new combo).',
    notes: [
      '5 stars: Zhijie and Xinzi, "the reason dedicated Guardians lose their jobs".',
      'Peseshet is the CN free-to-play healer of choice (SR, the no-spend pick over Maro and Emily).',
      'chain_-_-\'s Oct 8 tier video basis: 6-star strength, overall usage, floating-rule synergy; his pull advice is "pull new units, skip reruns".',
    ],
    tiers: [
      { tier: '5★', slugs: ['zhijie', 'xinzi'] },
      { tier: '4★', slugs: ['yuhong', 'xuanji'] },
      { tier: '3★', slugs: ['carmen', 'jenny', 'isabelle'] },
    ],
    notRated: {
      label: 'Below 3 stars / not covered',
      slugs: ['huarui', 'luoqin', 'alice', 'lena', 'xini', 'leed', 'patra', 'macak', 'tomoe', 'garana', 'dayu', 'qing', 'budi', 'yun', 'maro', 'emily', 'peseshet', 'doroa', 'grina', 'lumi', 'dusan', 'bazhuli', 'bellakey', 'lucia'],
      reason: 'The thread graded the launch-era roster before the September and October waves; September to October witches (Emily, Bazhuli, Luoqin, Lucia, Bellakey) and the remaining launch units were never given a reported star grade.',
    },
  },
];

// Resolve one community list into render-ready rows (cards carry our wiki
// tier for at-a-glance comparison). Unknown slugs resolve to a fallback card.
export function resolveCommunityTiers(list, charactersBySlug, wikiPlacements) {
  const rows = list.tiers.map(row => ({
    tier: row.tier,
    characters: row.slugs
      .map(slug => charactersBySlug[slug])
      .filter(Boolean)
      .map(c => ({ ...c, wikiTier: wikiPlacements[c.slug]?.tier })),
  }));
  const notRated = list.notRated
    ? {
        label: list.notRated.label,
        reason: list.notRated.reason,
        characters: list.notRated.slugs
          .map(slug => charactersBySlug[slug])
          .filter(Boolean)
          .map(c => ({ ...c, wikiTier: wikiPlacements[c.slug]?.tier })),
      }
    : null;
  return { ...list, rows, notRated };
}
