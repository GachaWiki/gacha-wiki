// Gene-Sys: Adam tier list: kit-based placements, SSR only (updated
// 2026-10-08: the SR tab was dropped so the page rates the premium roster
// only, an element view was added for pursuit-based team building, and
// Fujiwara Arisa was rated now that her art shipped). Two views over the
// same SSR roster: by job (combat style) and by element (pursuit teams).
// Placements are editorial, grounded in each character's skill data in
// characters.js (multipliers, cooldowns, EN costs, buff values). No community
// consensus exists yet, dupes and star upgrades are not factored.
// Rarities come from the gacha tables, not guesswork: joining DrawSingleData
// buckets to DrawMachineChanceTitleData makes group 3 = SR (cr031-cr041 plus
// quest-only Theodore on the same qualification tier) and group 4+ = SSR
// (cr043 and up; Amber and Rachel also appear in an explicit Pick UP SSR
// bucket). SR placements are still kept below: the early-game callout reads
// their rarity badges, and the assessments survive if SRs ever return to the
// page. They simply do not render in the SSR-only list.
// NEW SSR CHARACTERS MUST BE ADDED TO GSA_TIER_PLACEMENTS or they land in C with
// a console warning in dev.

import { gsaCharacters } from './characters.js';
import { GSA_ELEMENT_MATCHUPS, GSA_PURSUIT_CHAINS } from './elements.js';

// Full display names: when two roster units share a name (Belle SR and
// Clumsy Cowgirl Belle SSR), the title is appended so tier cards, combo
// tiles and version cards never show a bare ambiguous name.
const _rosterNameCount = {};
for (const c of gsaCharacters) _rosterNameCount[c.name] = (_rosterNameCount[c.name] || 0) + 1;

export function gsaFullDisplayName(c) {
  if (!c) return '';
  return c.title && (_rosterNameCount[c.name] || 0) > 1 ? `${c.name} (${c.title})` : c.name;
}

// Same tier ladder colors as the majo list so tiers read the same site-wide.
// SSS is RESERVED for a future "broken" unit; it stays empty and hidden until
// one actually ships.
export const GSA_TIERS = [
  { tier: 'SSS', color: '#f87171' },
  { tier: 'SS', color: '#f2c14e' },
  { tier: 'S', color: '#dbb06e' },
  { tier: 'A', color: '#a89bd1' },
  { tier: 'B', color: '#6d93bd' },
  { tier: 'C', color: '#736f85' },
];

const R2 = 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam';

// The game's own rarity badges (Icon_SR / Icon_SSR from the gacha UI bundles).
// No Icon_R has shipped in any pulled bundle yet; R falls back to a text chip.
// When an R badge lands on device, extract it, upload, and add it here.
export const GSA_RARITY_BADGES = {
  SR: `${R2}/Icon_SR.webp`,
  SSR: `${R2}/Icon_SSR.webp`,
};

export function gsaRarityBadge(rarity) {
  return GSA_RARITY_BADGES[rarity] || null;
}

// element-neutral job icons (JobData.jobicon base with element 0)
export const GSA_JOB_SECTIONS = [
  { job: 'Guardian', zh: '防護', icon: `${R2}/guard_0.webp` },
  { job: 'Striker', zh: '突擊', icon: `${R2}/fighters_0.webp` },
  { job: 'Sniper', zh: '狙擊', icon: `${R2}/archer_0.webp` },
  { job: 'Support', zh: '支援', icon: `${R2}/priest_0.webp` },
  { job: 'Breaker', zh: '破壞', icon: `${R2}/master_0.webp` },
];

// Element view sections in element id order, each carrying its status-to-
// pursuit chain so the section header can show what the element's pursuit
// team is built around.
export const GSA_ELEMENT_SECTIONS = Object.entries(GSA_ELEMENT_MATCHUPS)
  .sort((a, b) => a[1].id - b[1].id)
  .map(([name, m]) => ({
    element: name,
    zh: m.zh,
    icon: m.icon,
    chain: GSA_PURSUIT_CHAINS[name],
  }));

export const GSA_TIER_UPDATED = 'October 13, 2026';

// Early-game callout rendered above the views. The tiers rate end-state
// power; this box explains why low placements still carry your account early.
export const GSA_BEGINNER_NOTE = {
  title: 'Early-game priorities',
  intro: 'Tiers rate late-game power, but progression runs on dupes: the class system is tied to duplicate count, and a character cannot class up past the dupes she owns. SR units are far easier to pull and duplicate, which makes them the cheapest units to class up and max, so invested SRs carry your account early.',
  picks: [
    { slug: 'theodore', note: 'Weapon obtainable, quick SR dupes' },
    { slug: 'adele', note: 'Weapon obtainable, quick SR dupes' },
    { slug: 'belle', note: 'Weapon obtainable, quick SR dupes' },
    { slug: 'ruby', note: 'SSR: dupes from a quest, weapon obtainable' },
  ],
  lastSlot: {
    name: 'Last slot',
    note: 'Your highest-dupe SSR, or an SR with good dupes from missions. Prioritize a DPS.',
  },
};

// Pursuit system callout rendered right after the early-game box. Copy is
// grounded in the game's own combat tips (the EN localization of the
// "what is Pursuit" tip plus the per-element initiator and finisher
// descriptions); the chain table itself comes from elements.js.
export const GSA_PURSUIT_NOTE = {
  title: 'The Pursuit system',
  intro: 'Past the early game, combat is built around Pursuits: bonus attacks that fire when a skill carrying a Pursuit effect hits an enemy suffering the matching status. Every element owns exactly one pair, listed below. The status half comes from initiator skills: Freeze, Petrify and their siblings disable the enemy and interrupt casting while they hold. The pursuit half is the "trigger an Ice Break M Pursuit" line on a skill: land that skill on a Frozen target and a burst of extra damage follows. Pursuits are graded S, M and L, and the higher the grade the harder they hit. The status is consumed when the pursuit fires, so the working core is one initiator keeping the status up while the rest of the team unloads pursuit skills into it.',
  chainsIntro: 'Status, the pursuit it triggers, and what the pursuit does when it fires:',
  footnote: 'This chain is why the element view below exists: pick the element your initiator and your finishers share, keep the +30% / -30% advantage wheel in mind, and build the team around the loop.',
};

// slug -> { tier, rarity, reason }
export const GSA_TIER_PLACEMENTS = {
  'kurosawa-shion': { tier: 'SS', rarity: 'SSR', reason: 'The energy battery. Her loop refills 4.5 team EN every 6 seconds, her ultimate grants the whole party EN Gain Up 45% for 24s, and her active stacks up to 15% party Basic Damage three times. Every ultimate in the team comes online faster with her on the field.' },
  'jessica': { tier: 'SS', rarity: 'SSR', reason: 'Best defensive support: a 795% party shield on an 8s cooldown, constant top-up healing on her loop and passive, and an ultimate that cleanses all debuffs and applies a 1285% party shield.' },
  'ogino-rui': { tier: 'SS', rarity: 'SSR', reason: 'Highest raw damage in the roster: 850% combined rotation, a permanent self Physical DMG Up 20% and Crit 18% loop, self-healing, and a five-hit 170% ultimate.' },
  'victoria': { tier: 'SS', rarity: 'SSR', reason: 'Amplifier and carry in one: her loop grants Crit DMG Up 40% to the two highest-ATK allies, and her ultimate brings EN Gain 45%, a 425% strike to up to 3 targets and a Petrify finisher.' },
  'lin-lan': { tier: 'SS', rarity: 'SR', reason: 'The Guardian partner: 1785% shields on a 10s cooldown, a loop that cuts basic attack damage taken by 35%, and a 3700% ultimate shield. Rating assumes you run a Guardian, which you should.' },
  'adele': { tier: 'S', rarity: 'SR', reason: 'Best SR damage dealer: a 660% ultimate, a self Attack Up 20% and ACC loop, plus Burn and Wind ATK Down utility. Strong enough that dupes are a bonus, not a requirement. Early-game cornerstone: SR dupes class her up fast and her weapon is obtainable.' },
  'yulia': { tier: 'S', rarity: 'SR', reason: 'Dark nuker: a 615% single-target ultimate with Dark Res Down follow-up, Light ATK Down debuffs for the mirror matchup, and Evasion uptime for survivability.' },
  'thalia': { tier: 'S', rarity: 'SR', reason: 'Boss-killer: everything targets the highest-ATK enemy, her loop shreds their Basic Damage by 20%, a passive proc gives her Basic Damage Up 40%, and the ultimate adds Knockdown.' },
  'milena': { tier: 'S', rarity: 'SSR', reason: 'A ten-hit 800% ultimate on a single target, Knockdown and Petrify control, and a passive that shreds Guardian-type blocks. An SSR whose dupes are still worth the investment.' },
  'hijikata-chizuru': { tier: 'S', rarity: 'SSR', reason: 'The best tank: Physical damage taken cut 20%, EN Gain 25% for the team, a Petrify on a 4s loop and a five-hit AoE ultimate with 35% Petrify rate. Deals real damage while holding the line.' },
  'vera': { tier: 'A', rarity: 'SR', reason: 'Textbook Guardian: a two-hit 400% stun active, a regeneration loop, Block 30% on the ultimate and passive self-healing. Dependable, if unexciting next to Hijikata Chizuru.' },
  'takajou-ranka': { tier: 'S', rarity: 'SR', reason: 'A Guardian that carries: a 466% self-heal loop, a five-hit forward-area ultimate and Silence utility. Lets you keep the tank slot without giving up damage.' },
  'elena': { tier: 'S', rarity: 'SSR', reason: 'Fire-team engine: her loop grants EN Gain 40% and Skill Damage 12%, and her ultimate hits all targets for 250% while shredding Fire Res 10% for 12s. Pairs with any Burn source.' },
  'shiraishi-ai': { tier: 'S', rarity: 'SSR', reason: 'Nuclear numbers (832% rotation, a four-hit 208% ultimate) but nearly all of it prioritizes Support-type enemies and cuts their healing. A PvP and anti-healer weapon first, general DPS second.' },
  'andou-kana': { tier: 'S', rarity: 'SSR', reason: 'Freeze is hard CC and her kit is built on it: Freeze on a nine-hit active and a five-hit all-targets ultimate with wide forward coverage. As a pair with Komachi Sayaka she is the SS Ice Break combo (see the Combo Collective tab): Kana freezes, Sayaka converts every frozen target into grade-L pursuits. S on her own, the enabler half of the roster’s best pairing.' },
  'sugimoto-arina': { tier: 'A', rarity: 'SSR', reason: 'Honest healer: 630% heals to the two lowest-HP allies, a full-party 1000% heal ultimate and Stun Res attached. Jessica simply does more for the same slot.' },
  'aira': { tier: 'A', rarity: 'SR', reason: 'Solid Light Striker with a Judgment passive stun combo and a defensive ultimate. Mid multipliers keep her out of the top ranks, nothing to fault otherwise.' },
  'amelie': { tier: 'A', rarity: 'SSR', reason: 'AoE specialist: the ultimate hits all targets five times and Bleed uptime is reliable, but her loop buffs random allies and her single-target numbers trail the SR damage queens.' },
  'komachi-sayaka': { tier: 'SS', rarity: 'SSR', reason: 'The Ice Break carry and the strongest pursuit trigger on the roster with a Freeze feeder: a six-hit forward-area ultimate (330% per target) that applies Water Res Down 10% and Skill Damage Taken +15% before the grade-L Ice Break proc, a separate damage channel. Every successful Ice Break stacks +8% Water ATK (3 stacks awakened) plus party Physical DMG +10%, and her awakened Talent jumps from 3x40% to 3x100% per target. Both S-tier Freeze enablers (Andou Kana, Leng Zhen with Freeze Hit Rate Up) feed her cheaply. SS with a Freeze enabler, closer to A solo.' },
  'ojima-erina': { tier: 'A', rarity: 'SSR', reason: 'Reliable 345% rotation Sniper with a clean three-hit ultimate. No team buffs, no weaknesses, no drama.' },
  'li-mu': { tier: 'A', rarity: 'SSR', reason: 'A steady 360% Striker with a four-hit ultimate and Crit chance procs. Perfectly playable, outshone by the SSR carry tier.' },
  'danxin': { tier: 'A', rarity: 'SSR', reason: 'A Striker that tanks: a 2145% self-shield on the active, Energy damage taken cut 10%, and an ultimate that cuts basic attack damage taken 40%. Great in content that hits hard.' },
  'annabelle': { tier: 'A', rarity: 'SSR', reason: 'Light nuker with a seven-hit forward-area ultimate, a Light Res Down loop and ATK SPD Down control. Solid and unremarkable in equal measure.' },
  'chloe': { tier: 'A', rarity: 'SSR', reason: 'Her thirteen-hit 585% ultimate is sneaky good, and the self-inflicted Pain cost is manageable behind any healing support.' },
  'charlotte': { tier: 'A', rarity: 'SSR', reason: 'Shield-tank hybrid: Block procs on her active, a nine-hit ultimate that applies a 2900% shield on hit, and passive self-shielding. Fine wherever a second Guardian fits.' },
  'mudia': { tier: 'A', rarity: 'SR', reason: 'Lifesteal Guardian: heals on her active, on hits and on every ultimate strike, bleeds on loop, and buffs her own Max HP. Hard to kill, moderate damage.' },
  'amber': { tier: 'A', rarity: 'SSR', reason: 'The self-sufficient tank: 1920% loop shields, self-cleanse with a 1000% heal, Max HP stacking and a reflecting 2900% ultimate shield. Needs no support to hold the line.' },
  'liz': { tier: 'A', rarity: 'SSR', reason: 'Half tank, half support: a 960% party-wide shield ultimate with Fire ATK Down 10% attached, self-sustain on loop and stacking ATK SPD when hit.' },
  'rachel': { tier: 'A', rarity: 'SSR', reason: 'Utility Breaker: her loop interrupts enemy skills from range, the ultimate is a line nuke with a conditional execute, and kills debuff enemy Snipers and Breakers by 15%.' },
  'katya': { tier: 'A', rarity: 'SR', reason: 'Freeze-and-punish support: multi-hit forward-area attacks that trigger Ice Break pursuits on frozen targets, plus ACC Down and Water ATK self-buffs. Wants freeze partners.' },
  'lin-lin': { tier: 'A', rarity: 'SSR', reason: 'Fire debuffer and cleanup crew: Fire Res Down 8%, Burn on loop, Crit Chance cuts, and everything aims at the lowest-HP target. The executioner slot for fire teams.' },
  'ruby': { tier: 'A', rarity: 'SSR', reason: 'Wildcard: 900% combined damage and an Electrocute-focused ultimate with 30% hit rate up, but on a Support frame whose ATK scaling could not be verified from the tables. Promising, unproven. The cheap SSR: quest dupes and an obtainable weapon make her the easiest premium unit to actually build.' },
  'theodore': { tier: 'B', rarity: 'SR', reason: 'The protagonist starter: functional Fire shred and a serviceable eight-hit ultimate, but every limited unit outclasses him. He is free, be kind. Early on he is a core build anyway: his weapon is obtainable and SR dupes come quickly.' },
  'denice': { tier: 'B', rarity: 'SR', reason: 'A fifteen-hit ultimate sounds fun until you see Random targeting. The Petrify-synergy active is real, the base multipliers are not.' },
  'ruo-lan': { tier: 'B', rarity: 'SSR', reason: 'All value is locked behind Earth allies: Earth ATK Up 20%, shields and damage procs for Earth teams only. Off-element she is a plain Sniper.' },
  'bernardo': { tier: 'B', rarity: 'SSR', reason: 'Support numbers too small to matter (a 5% Damage Up loop) and a Petrify chance that is Medium at best. The attitude is carrying the kit.' },
  'belle': { tier: 'B', rarity: 'SR', reason: 'A healer on a Sniper frame whose numbers lose to Jessica and Sugimoto Arina at every line. The Evasion quirks do not save the slot. Early on she is a real pick: her weapon is obtainable and SR dupes let you fully max her while your SSRs are still class-starved.' },
  'belle-clumsy-cowgirl': { tier: 'B', rarity: 'SSR', reason: 'Physical Spread support with tiny heals and a five-hit all-targets ultimate. Fun, forgettable.' },
  'connie': { tier: 'B', rarity: 'SSR', reason: 'An anti-healer: her loop and active aim at the lowest-HP targets and stack Healing Down with Healing Received Down 25%, and the awakened passive gives the whole team ATK SPD Up 23%. The ultimate\u0027s Abyss pursuit needs the Ebon status, which nobody on the roster applies yet. Real PvP utility, modest raw numbers.' },
  'qing-yin': { tier: 'S', rarity: 'SSR', reason: 'CC-and-burst Breaker: a 6s loop that stuns at Extremely High chance, an 827% double-strike ultimate with Attack Up 15% and ATK SPD Up 30% attached, and Wind Res Down 12% shredding. Every line prioritizes Electrocuted targets, so she wants Li Mu or Ruby applying Shock, and the awakened passives spread Crit Chance 14% and Energy DMG Up 6% to the team.' },
  'leng-zhen': { tier: 'S', rarity: 'SSR', reason: 'A second energy battery with Freeze attached: her active injects +2 team EN per hit (+2.5 awakened, on her normal attack too), the loop lands three Freeze M rolls every 6s, and the ultimate is a 900% three-hit with Freeze Hit Rate Up 35% and a freeze on every strike. Awakened passive adds party Skill Damage Up 12.5%. Random targeting keeps the numbers unfocused, but Freeze feeds the Ice Break core.' },
  'fujiwara-arisa': { tier: 'S', rarity: 'SSR', reason: 'Single-target Fire carry and the SSR Burn initiator: a 435% three-hit talent, a nine-hit 900% ultimate that stuns and applies Burn M, and Burn S on her auto loop. Fire teams run her to keep Burn up so the Detonate carriers (Elena, Theodore) can pursue.' },
};

const placementOf = slug =>
  GSA_TIER_PLACEMENTS[slug] || {
    tier: 'C',
    rarity: null,
    reason: 'No written assessment yet. Defaulted to C.',
  };

// SSR-only list (2026-10-08): the SR tab was dropped. SR placements above
// stay for the early-game callout and possible future re-inclusion, but only
// SSR units render here. Unplaced SSR characters default to C (the dev
// warning below flags them).
//
// RELEASE GATE: only units with pulled icon art are listed. This game
// preloads future kits and draw-table buckets into the client before the
// server enables them, and a unit's art bundle only downloads once it is
// actually encounterable in game, so "has art" = "released". Artless units
// (qing-yin, leng-zhen, elena, victoria, connie as of the October 8 data
// pull) stay off the list and return automatically once their bundles are
// pulled and uploaded.
const isReleased = c => Boolean(c.icon);
const isSSR = c => (placementOf(c.slug).rarity || 'SSR') === 'SSR';

const releasedSSR = gsaCharacters.filter(c => isReleased(c) && isSSR(c));

// One section's members bucketed into tier rows, name-sorted inside a row.
const tierRows = members => GSA_TIERS
  .map(({ tier, color }) => ({
    tier,
    color,
    characters: members
      .filter(c => placementOf(c.slug).tier === tier)
      .map(c => ({ ...c, placement: placementOf(c.slug) }))
      .sort((a, b) => a.name.localeCompare(b.name)),
  }))
  .filter(t => t.characters.length > 0);

// Two views over the same SSR roster: by job (combat style) and by element
// (pursuit teams, each header showing the element's status-to-pursuit chain).
// The reasons stay here in the data file, they are not rendered on the page,
// matching the majo list.
export const GSA_TIER_VIEWS = [
  {
    view: 'job',
    label: 'By Job',
    sections: GSA_JOB_SECTIONS.concat([{
      // characters with no job data yet would land here
      job: 'Unclassified',
      zh: '未分類',
    }]).map(({ job, zh, icon }) => {
      const tiers = tierRows(releasedSSR.filter(c => (c.job ? c.job.name : 'Unclassified') === job));
      return tiers.length ? { key: job, title: job, zh, icon, tiers } : null;
    }).filter(Boolean),
  },
  {
    view: 'element',
    label: 'By Element',
    sections: GSA_ELEMENT_SECTIONS.concat([{
      // characters with no element data yet would land here
      element: 'Unclassified',
      zh: '未分類',
    }]).map(section => {
      const tiers = tierRows(releasedSSR.filter(c => (c.element ? c.element.name : 'Unclassified') === section.element));
      return tiers.length ? { ...section, key: section.element, title: section.element, tiers } : null;
    }).filter(Boolean),
  },
];

// Combo Collective: the pursuit-chain pairings, one card per element family.
// Enablers apply the status, triggers fire the pursuit on final hits against
// statused targets (the pursuit is a separate damage channel with its own
// resistance stat). Members come from pursuit-roles.js; notes are editorial.
export const GSA_COMBOS = [
  {
    slug: 'lunar-ice-break',
    name: 'Lunar Ice Break',
    nameZh: '月華破冰',
    element: 'Water',
    chain: 'Freeze > Ice Break',
    chainZh: '冰凍 > 破冰',
    featured: true,
    enablers: ['andou-kana', 'leng-zhen'],
    triggers: ['komachi-sayaka', 'katya'],
    note: 'The headline pairing. Kana stacks Freeze on nine-hit rotations and Leng Zhen adds Freeze M with a Freeze Hit Rate Up rider while charging the team 2 EN per hit; Sayaka converts every frozen target into grade-L Ice Break pursuits after her own Water Res Down and Skill Damage Taken debuffs, stacking +8% Water ATK on each proc. Rated SS as a pair; Sayaka drops toward A without a Freeze feeder.',
    noteZh: '招牌組合。小町憐奈以九段循環疊加冰凍，冷鴆補上冰凍M與冰凍命中率提升並為全隊充能；咲香先上水屬性抗性降低與技能傷害承受增加，再把冰凍目標轉為最高等級的破冰L追擊，每次觸發疊加8%水屬性攻擊。成對評價SS；沒有冰凍賦予者時咲香降至A附近。',
  },
  {
    slug: 'storm-overload',
    name: 'Storm Overload',
    nameZh: '風暴超載',
    element: 'Wind',
    chain: 'Electrocute > Overload',
    chainZh: '觸電 > 超載',
    enablers: ['ruby', 'li-mu'],
    triggers: ['qing-yin'],
    note: 'Ruby and Li Mu keep Electrocute on the enemy (both also carry Electrocute Hit Rate Up riders); Qing Yin’s whole kit prioritizes Electrocuted targets and triggers Overload M/L pursuits, with extra kit lines that only work against shocked enemies. Overload also inflicts Silence when it fires.',
    noteZh: '露比與李沐維持觸電（兩人皆帶觸電命中率提升），清音的整組技能以觸電目標優先並觸發超載M/L追擊，另有多條僅對觸電目標生效的效果。超載發動時還會附加沉默。',
  },
  {
    slug: 'verdict-sanction',
    name: 'Verdict Sanction',
    nameZh: '審判制裁',
    element: 'Light',
    chain: 'Judgment > Sanction',
    chainZh: '審判 > 制裁',
    enablers: ['aira', 'charlotte'],
    triggers: ['rachel'],
    note: 'Aira (a launch SR everyone has) applies Judgment S on her Talent and Charlotte adds it on her awakened ultimate; Rachel snipes from the back row with Sanction L on hit. Sanction lowers both Physical and Energy RES, amplifying the whole team while it is up.',
    noteZh: '艾拉（人人都有的開服SR）在天賦附加審判S，夏洛特於覺醒奧義再補上；瑞秋從後排以制裁L收頭。制裁同時降低物理與能量抗性，生效期間放大全隊輸出。',
  },
  {
    slug: 'stone-shatter',
    name: 'Stone Shatter',
    nameZh: '碎石共鳴',
    element: 'Earth',
    chain: 'Petrify > Shatter',
    chainZh: '石化 > 碎石',
    enablers: ['milena', 'hijikata-chizuru', 'victoria', 'bernardo'],
    triggers: ['denice', 'belle-clumsy-cowgirl'],
    note: 'The deepest bench: four Petrify appliers feed two Shatter triggers. Cowgirl Belle is the self-sufficient version, applying her own Petrify before the ultimate; Shatter also lowers the target’s elemental RES, so it amplifies the follow-up damage of the whole team.',
    noteZh: '板凳最深的一鏈：四名石化賦予者餵養兩名碎石觸發者。迷糊乳牛-貝兒為自足版本，奧義前自行附上石化；碎石另會降低目標屬性抗性，放大全隊後續傷害。',
  },
  {
    slug: 'blaze-detonate',
    name: 'Blaze Detonate',
    nameZh: '烈焰引爆',
    element: 'Fire',
    chain: 'Burn > Detonate',
    chainZh: '燃燒 > 引爆',
    enablers: ['adele', 'lin-lin', 'fujiwara-arisa', 'elena', 'danxin'],
    triggers: ['theodore'],
    note: 'Burn is the easiest status to keep up (five appliers) but the only trigger is Theodore, the free quest SR: Detonate S on his basic loops keeps a steady pursuit stream on any content. Elena’s October rework made her a Burn enabler with on-Burning-condition buffs instead of a trigger.',
    noteZh: '燃燒是最易維持的狀態（五名賦予者），但觸發者僅有任務免費SR西奧多：普攻循環的引爆S穩定輸出追擊。伊蓮娜十月的改版使她從觸發者轉為燃燒賦予者，附帶對燃燒目標的增傷條件。',
  },
  {
    slug: 'ebon-abyss',
    name: 'Ebon Abyss',
    nameZh: '漆黑暗淵',
    element: 'Dark',
    chain: 'Ebon > Abyss',
    chainZh: '漆黑 > 深淵',
    enablers: ['yulia'],
    triggers: ['connie'],
    note: 'The thinnest chain: Yulia is the only Ebon applier, feeding Connie’s Abyss L. Abyss blocks healing when it fires, the strongest pursuit side effect against sustain teams, but the single-feeder dependency makes it fragile.',
    noteZh: '最單薄的鏈：優莉雅是唯一的漆黑賦予者，餵養昆妮的深淵L。深淵發動時阻斷治療，是對續戰隊最強的追擊副作用，但依賴單一賦予者，較為脆弱。',
  },
];

export const gsaTierSsrCount = releasedSSR.length;

if (import.meta.env.DEV) {
  const unplaced = releasedSSR.filter(c => !GSA_TIER_PLACEMENTS[c.slug]);
  if (unplaced.length) {
    console.warn('[gsa-tier-list] SSR characters without a placement (rendered as C):', unplaced.map(c => c.slug));
  }
  const artless = gsaCharacters.filter(c => !isReleased(c));
  if (artless.length) {
    console.warn('[gsa-tier-list] artless units skipped as not yet released:', artless.map(c => c.slug));
  }
}
