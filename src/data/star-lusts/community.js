// Community & meta snapshots for Star Lusts, gathered from TW/JP/CN/EN community
// research on 2026-11-09 (see community-research.md for the full sweep).
// Same principle as majo/community-tiers.js: each entry is a FAITHFUL snapshot of
// one source's own labels and groupings — we do not invent tiers they didn't write.
// `slugHint` marks the roster slug we believe a community alias refers to (verified
// against characters.js names); missing/null = unresolved alias, kept as the source
// wrote it. No tier-list page consumes this yet — data first, UI later.

export const STAR_LUSTS_COMMUNITY_META = {
  serverNote:
    'Server split matters: the DMM/FANZA version (JP, since Feb 2024) runs separate servers from Global, and DMM has no rerolls; the Global app rerolls with a guaranteed SSR after the tutorial. 仮想演算 (Virtual Operation) is a mixed CH/EN/JP server.',
};

export const STAR_LUSTS_COMMUNITY_SOURCES = [
  {
    id: 'jp-wagashi',
    tab: 'JP: wagashi (note)',
    language: 'JP',
    source: 'note.com/wagashi_yuzuhai — attacker & supporter recommendation articles',
    updated: 'May 8, 2026 (info roundup updated 2026-09-22; author still active Nov 2026)',
    url: 'https://note.com/wagashi_yuzuhai/n/n7e5f77175864',
    credentials:
      'Strategy Arena best rank 2 (S26), top-10 ×16 through S30; Virtual Operation best 47 (S2), top-100 ×7.',
    intro:
      'The only deep and current JP source. No formal S→F ladder — per-element attacker picks plus a supporter breakdown, anchored by real competitive usage. Their rule of thumb: top scores need at least one barrage AND one laser attacker per element, because jammer bosses negate one bullet type.',
    groups: [
      {
        label: 'Attackers — Star',
        names: [
          { name: 'ミア (UR)', note: 'Strongest overall ("surpasses the star barrage slot"); sig weapon + poison gear + drone', slugHint: null },
          { name: 'シャチ', note: 'Star laser; strong but needs UR+2 dupes; ~80% of Mia', slugHint: 'allee-winter' },
          { name: '化け猫ナナ', note: 'Permanent laser, cheap dupes, poor cost-performance', slugHint: 'nana' },
          { name: '低レアミア', note: 'Low-rarity Mia; used once as Arena S12 second DPS', slugHint: 'mia' },
        ],
      },
      {
        label: 'Attackers — Void',
        names: [
          { name: '悪夢アイリー', note: 'Dominant; top-13 Virtual Calc S5 all UR+5 (~213k)', slugHint: 'allee-winter-6' },
          { name: 'イブリース (laser)', note: 'Sig gear +50% ATK under 70% energy; SP is barrage → jammer-vulnerable', slugHint: null },
          { name: 'Machi', note: 'Sea-hare field attacks 5×/sec; no crits/status inside field', slugHint: 'machi' },
          { name: '初期キャラ (Void laser)', note: 'Homing missiles + chance heal; poison carries; shines in 浄化の試練II', slugHint: null },
        ],
      },
      {
        label: 'Attackers — Physical',
        names: [
          { name: 'アイニー', note: 'Top physical pick; "simple and very usable" piercing laser', slugHint: 'annee-winter' },
          { name: '嫁アイニー', note: 'Self-sufficient 2nd physical DPS; big gap vs アイニー', slugHint: null },
          { name: 'マギー', note: 'Manual spirit gauge; Arena S13 (partly due to material scarcity)', slugHint: 'maycea' },
        ],
      },
      {
        label: 'Attackers — Ether / Ectoplasm',
        names: [
          { name: 'エーテル attacker', note: 'Essentially the only ether attacker (laser)', slugHint: null },
          { name: 'エクト burn laser', note: 'ATK+20% at 60% energy, burn+20% at 80%; preferred over ジェイ for simplicity', slugHint: null },
          { name: '純白モード barrage', note: 'SP auto-tracking via mandatory sig gear; comparable to Mia', slugHint: null },
        ],
      },
      {
        label: 'Supporters — multi-effect (their top picks)',
        names: [
          { name: 'アグネス', note: '"最強サポーター": enemy 虚弱 +50% dmg taken AND ally crit +35% in one field; needs sig weapon', slugHint: 'agnes' },
          { name: 'イーネス', note: 'Back-row auto-attacks; crits give party +5% crit, enemy crit-weak +20% crit dmg', slugHint: null },
          { name: '花嫁ヒルダ', note: 'Attack-speed +40 field; SP doubles it (+50 speed, +60% final dmg); "unconditionally strong"', slugHint: null },
          { name: 'コニー', note: 'Energy-regen field; UR+2 required; SP = instant +40 energy for all', slugHint: 'connie' },
        ],
      },
      {
        label: 'Supporters — other roles',
        names: [
          { name: '化け猫ナナ', note: '虚弱 10% always, up to 85% with sig gear; auto-tracking', slugHint: 'nana' },
          { name: 'はなりん', note: 'Back-row barrage + physical field + starfish summon', slugHint: 'hanarin' },
          { name: '祈光 character', note: 'ATK+20%, crit+40%, barrage summon; Ether so no weak element', slugHint: null },
        ],
      },
    ],
    notes: [
      'Buff math per the author: ATK buffs additive, damage-taken-up multiplicative; ATK-up supporters deprioritized ("multiplicative buffs win"); no crits on special attacks.',
      'Author is Japanese-only and writes because "Japanese info is way too scarce" for this game.',
    ],
  },
  {
    id: 'jp-tcg-bloglife',
    tab: 'JP: TCG-bloglife (FANZA)',
    language: 'JP',
    source: 'tcg-bloglife.com reroll & character review series (FANZA/DMM version)',
    updated: 'March 2024',
    url: 'https://www.tcg-bloglife.com/entry/2024/03/07/%E3%80%90star_lusts%E3%80%91%E3%83%AA%E3%82%BB%E3%83%9E%E3%83%A9%E5%BD%93%E3%81%9F%E3%82%8A%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E3%81%A8%E7%8B%99%E3%81%86%E3%81%B9%E3%81%8D%E3%81%8A%E3%81%99',
    intro:
      'Dated FANZA-version reroll article: no S→F ladder, one flat ★SSR roster list (22 SSRs incl. costumes) with element picks — physical = polar bear, dark = coral, light = orca. Notes the FANZA version has no app release and no redraw gacha, so rerolling is effectively impossible there.',
    groups: [
      {
        label: 'Element picks (their only ranking)',
        names: [
          { name: 'シロクマ (物理)', slugHint: 'annee-winter' },
          { name: 'サンゴ (dark)', slugHint: 'astraea' },
          { name: 'シャチ (light)', slugHint: 'allee-winter' },
        ],
      },
    ],
    notes: [
      'Their "攻略wikiと海外翻訳情報まとめ" article contains zero external sources — skip it.',
      'JP gift codes are distributed on official X @StarLusts_JP; TW-server codes (e.g. ECSTATICDBF, expired 2025-06) do NOT work on JP.',
    ],
  },
  {
    id: 'cn-9game',
    tab: 'CN: 9Game / cd6 comps',
    language: 'CN',
    source: '9Game 《星欲少女》进阶攻略+强度榜 (author 魏虎娃, cross-posted on cd6.com)',
    updated: 'November 2023',
    url: 'https://www.9game.cn/news/9397199.html',
    intro:
      'The CN community\'s de-facto "tier list" — despite the title there is no formal ladder, only team compositions as an implicit strength proxy. Frozen in Nov 2023: predates UR and costume powercreep, so treat as history, not meta.',
    groups: [
      {
        label: '老大队 (top team)',
        names: [
          { name: '白熊', slugHint: 'annee-winter' },
          { name: '虎鲸', slugHint: 'allee-winter' },
          { name: '珊瑚', slugHint: 'astraea' },
        ],
        note: 'Pick 2 of 3; gear 腐+毒+毒',
      },
      {
        label: '三色队 (first top comp)',
        names: [
          { name: '白熊', slugHint: 'annee-winter' },
          { name: '虎鲸', slugHint: 'allee-winter' },
          { name: '菜鸟 (Rookie)', slugHint: null },
        ],
        note: '腐+毒+毒; weak vs physical',
      },
      {
        label: '老二队',
        names: [
          { name: '企鹅', slugHint: 'mandy' },
          { name: '地狱犬', slugHint: 'hilda' },
          { name: '腔棘鱼', slugHint: 'maycea' },
        ],
        note: 'Pick 2 of 3; 腔棘鱼 shines after 超常解放b',
      },
      {
        label: '如SSR队 / 虚空杀手队',
        names: [
          { name: '夜兔', slugHint: 'digi' },
          { name: '水母', slugHint: null },
          { name: '毒蝎', slugHint: 'jeanine' },
          { name: '日光', slugHint: null },
        ],
        note: '虚空杀手队 = 虎鲸+毒蝎+日光(+专武), 毒+毒+回能, counters void bosses',
      },
      {
        label: 'Substitutions',
        names: [
          { name: '秘书 < 地狱犬', slugHint: 'mia-2' },
          { name: '菜鸟 = 珊瑚', slugHint: null },
          { name: '毒蝎 = 虎鲸', slugHint: 'jeanine' },
          { name: '艳阳+专武 ≈ UR珊瑚, else ≈ 水母', slugHint: 'agnes-3' },
        ],
      },
    ],
    notes: [
      'Gear meta: first poison set, then a second; corruption for 白熊/八爪/企鹅; 白精灵 and 强袭 are the universal 子机 (drones); avoid 神火 drone with fire sets, 恶鬼 with poison sets.',
      'Beginner guide (Dec 2023) "国家队": 原皮虎鲸 (Stellergy main DPS) + 白熊 (healer, 10s invincibility ult) + 海兔 (Void main DPS — collab-limited, no longer obtainable).',
      'GameKee hosts a 星欲少女 wiki behind QQ login/verification; Bilibili carries the video guides.',
    ],
  },
  {
    id: 'en-chaptercheats',
    tab: 'EN: ChapterCheats',
    language: 'EN',
    source: 'ChapterCheats hero guide (by AuronXXX)',
    updated: 'September 28, 2023',
    url: 'https://www.chaptercheats.com/cheat/android/629112/star-lusts/hint/192314',
    intro:
      'The closest thing to an EN tier list — a launch-era priority ordering, three years stale. Keep as a historical snapshot only.',
    groups: [
      {
        label: 'SSR (their priority order)',
        names: [
          { name: 'Killer Whaler', slugHint: 'allee-winter' },
          { name: 'Coral', slugHint: 'astraea' },
          { name: 'White Bear', slugHint: 'annee-winter' },
          { name: 'Night Rabbit', slugHint: 'digi' },
          { name: 'Cerberus', slugHint: 'hilda' },
        ],
      },
      {
        label: 'SR (their priority order)',
        names: [
          { name: 'Silver Owl Xiao', slugHint: 'mia' },
          { name: 'Unicorn', slugHint: 'agnes' },
          { name: 'Suzuno', slugHint: null },
        ],
      },
    ],
    notes: [
      'EN community beyond this: a r/gachagaming reroll thread (guaranteed SSR after tutorial, players report up to 5 SSRs) and Steam discussions. No dedicated EN wiki exists.',
    ],
  },
  {
    id: 'tw-official',
    tab: 'TW: official only',
    language: 'TW',
    source: 'starlusts.com/zh-tw + FB @StarLusts + Bahamut',
    updated: 'November 2026 (sweep)',
    url: 'https://starlusts.com/zh-tw',
    intro:
      'No TW fan community found — one Bahamut creation post (Oct 2023) is all. TW players are served by the official zh-tw site (starlusts.tw redirects there), the official Facebook, and TW-server gift codes. CN sources double as the de-facto zh-TW reading material.',
    groups: [],
  },
];
