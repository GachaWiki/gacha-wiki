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

// Tier notes, Horizon Walker style: an optional per-character callout shown
// as a badge on the tier card. type: 'info' or 'warning'; variant marks a
// best-in-class attribute (colors the badge gold and pins a shortTitle chip
// on the card). Keep these for verdicts worth a second glance, not everyone.
export const GSA_TIER_NOTES = {
  'komachi-sayaka': {
    type: 'info',
    variant: 'carry',
    shortTitle: 'Ice Break Finisher',
    title: 'The Ice Break Finisher',
    text: 'She is one of the best damage dealer in game right now, specially for ice team. she can finish the Ice Break pursuit her ultimate is very strong, and with Andou Kana she is totally busted.',
  },
  'hijikata-chizuru': {
    type: 'info',
    variant: 'tank',
    shortTitle: 'Best Tank',
    title: 'The Best Tank',
    text: 'She is one of best tank in game right now, specially for Earth team. she can active the petrify earth status her passive is good too',
  },
  'fujiwara-arisa': {
    type: 'info',
    title: 'F2P friendly, but take time to get fully max her out and she is a good single target damage dealer.',
    text: 'you can get her from the event page which is always available, her ultimate damage is good her ultimate very strong single target, thought it take time to fully max her out.',
  },
  'andou-kana': {
    type: 'info',
    variant: 'Sniper',
    shortTitle: 'Freeze Initiator',
    title: 'Core character for Ice Break pursuit chain',
    text: 'She is p2w you need to spend money to get her but she is quite busted for ice team and her AEO ultimate is very strong.',
  },
  charlotte: {
    type: 'warning',
    title: 'She is quite tanky but she still dont bring much to the team.',
    text: 'Dont worry to much about her any other tank character can do the same job, she just dont have anything make her stand out, Judgment status maybe ~~.',
  },
  liz: {
    type: 'warning',
    title: 'only her ultimate what make her stand out, but her numbers even too low,',
    text: 'no pursuit role, no team buff, no status, she is just a tanky character.',
  },
  danxin: {
    type: 'info',
    title: 'hard to get her but quite tanky.',
    text: 'I mean if you managed to get and fully max her out which would tanks months she would be alright but not totally borken. her shield is borken though',
  },
  amber: {
    type: 'warning',
    title: 'Tank no status.',
    text: 'we can easily max her out she very good early account though she dont bring much like other tank character, she is just a tanky character.',
  },
};

// element-neutral job icons (JobData.jobicon base with element 0)
export const GSA_JOB_SECTIONS = [
  {
    job: 'Guardian',
    zh: '防護',
    icon: `${R2}/guard_0.webp`,
    note: 'Guardians have been underperforming the other jobs in this game. Enemies do not reliably aim their skills and ultimates at the front line: they sometimes target the back line directly, or cast AoE ultimates that hit the whole party, and no amount of tanking absorbs that. On top of that, most Guardian kits are self-only shields with little party value. The exceptions prove the rule: Hijikata Chizuru and Charlotte rank on team-wide buffs and chain initiation, not on being hard to kill.',
    noteZh: '在這款遊戲中，防護整體表現不如其他職業。敵人的技能與奧義並不會穩定瞄準前排：有時直接攻擊後排，有時施放全體奧義，再硬的坦也吸不到這些傷害。此外，多數防護角色的技能組只有自體護盾，對隊伍貢獻有限。例外正好說明規則：土方千鶴與夏洛特靠的是全隊增益與追擊啟動，而不是單純耐打。',
  },
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
  intro: 'Tiers rate late-game power, but progression runs on duplicates: Class Up is tied to duplicate count, and a character cannot Class Up past the duplicates she owns. SR units are far easier to draw and duplicate, which makes them the cheapest units to Class Up and max, so invested SRs power your early progression.',
  picks: [
    { slug: 'theodore', note: 'Exclusive Weapon obtainable, quick SR duplicates' },
    { slug: 'adele', note: 'Exclusive Weapon obtainable, quick SR duplicates' },
    { slug: 'belle', note: 'Exclusive Weapon obtainable, quick SR duplicates' },
    { slug: 'ruby', note: 'SSR: duplicates from a Mission, Exclusive Weapon obtainable' },
  ],
  lastSlot: {
    name: 'Last slot',
    note: 'Your SSR with the most duplicates, or an SR with good duplicates from Missions. Prioritize a damage dealer.',
  },
};

// Pursuit system callout rendered right after the early-game box. Copy is
// grounded in the game's own combat tips (the EN localization of the
// "what is Pursuit" tip plus the per-element initiator and finisher
// descriptions); the chain table itself comes from elements.js.
export const GSA_PURSUIT_NOTE = {
  title: 'The Pursuit system',
  intro: 'Past the early game, combat is built around Pursuits: additional damage that triggers when a skill carrying a Pursuit effect hits an enemy suffering the matching status. Every element owns exactly one pair, listed below. The status half comes from Initiator skills: Freeze, Petrify and their siblings disable the target and interrupt Casting while they hold. The pursuit half is the "trigger an Ice Break M Pursuit" line on a skill: land that skill on a Frozen target and additional damage follows. Pursuits are graded S, M and L, and the higher the grade the harder they hit. The status is consumed when the pursuit triggers, so the working core is one Initiator keeping the status up while the rest of the team triggers their Pursuits into it.',
  chainsIntro: 'Status, the pursuit it triggers, and what the pursuit does when it triggers:',
  footnote: 'This chain is why the element view below exists: pick the element your Initiator and your Finishers share, keep the +30% / -30% element advantage in mind, and build the team around the chain.',
};

// slug -> { tier, rarity, reason }
export const GSA_TIER_PLACEMENTS = {
  'kurosawa-shion': { tier: 'SS', rarity: 'SSR', reason: 'The EN supplier. Her Auto Skill increases the party’s EN by 4.5 every 6 seconds, her Ultimate grants the whole party EN Gain Up 45% for 24s, and her Talent Skill stacks party Basic Damage Up 15% up to three times. Every Ultimate in the team comes online faster with her on the field.' },
  'jessica': { tier: 'SS', rarity: 'SSR', reason: 'Best defensive support: a 795% Shield to all party members on an 8s cooldown, continuous healing on her Auto Skill and passives, and an Ultimate that Cleanses debuffs from all party members and applies a 1285% Shield.' },
  'ogino-rui': { tier: 'SS', rarity: 'SSR', reason: 'Highest raw damage of any character: 850% in combined multipliers, a permanent self Physical DMG Up 20% and Crit Chance Up 18% on her Auto Skill, HP recovery on hit, and a five-hit 170% Ultimate.' },
  'lin-lan': { tier: 'SS', rarity: 'SR', reason: 'The Guardian partner: 1785% Shields on a 10s cooldown, an Auto Skill that lowers Basic Attack damage taken by 35%, and a 3700% Ultimate Shield. Rating assumes you run a Guardian, which you should.' },
  'adele': { tier: 'S', rarity: 'SR', reason: 'Best SR damage dealer: a 660% Ultimate, a self Attack Up 20% and ACC Up Auto Skill, plus Burn and Wind ATK Down utility. Strong enough that duplicates are a bonus, not a requirement. Early-game cornerstone: SR duplicates Class Up fast and her Exclusive Weapon is obtainable.' },
  'yulia': { tier: 'S', rarity: 'SR', reason: 'Heavy single-target Dark damage: a 615% single-target Ultimate with a Dark Res Down follow-up, Light ATK Down against Light Type enemies, and Evasion Up for survivability.' },
  'thalia': { tier: 'S', rarity: 'SR', reason: 'Built for bosses: everything she has targets the highest ATK enemy, her Auto Skill inflicts Basic Damage Down 20% on them, a passive grants her Basic Damage Up 40%, and the Ultimate adds Knockdown.' },
  'milena': { tier: 'S', rarity: 'SSR', reason: 'A ten-hit 800% single-target Ultimate, Knockdown and Petrify control, and a passive that stacks DMG Block Down on Guardian Type targets. An SSR whose duplicates are still worth the investment.' },
  'hijikata-chizuru': { tier: 'SS', rarity: 'SSR', reason: 'The best tank in the game, and it is not close: Physical Damage Taken Decreased 20% plus Water Res Up on a 4s loop, EN Gain Up 35% keeping the team casting, a self restore on every hit (34%), and after Class Up the whole party gains ATK SPD Up 12% and Physical PEN RES Up 10%. She also initiates the Earth chain, inflicting Petrify M on both her Auto Skill and her five-hit Ultimate with Petrify Hit Rate Up 35%. Tanks, sustains, buffs and feeds Pursuits at once; Charlotte cannot match this.' },
  'vera': { tier: 'A', rarity: 'SR', reason: 'Textbook Guardian: a two-hit 400% Stun on her Talent Skill, Regeneration on her Auto Skill, Block Up 30% on the Ultimate and passive HP recovery. Dependable, if unexciting next to Hijikata Chizuru.' },
  'takajou-ranka': { tier: 'S', rarity: 'SR', reason: 'A Guardian that deals damage: an Auto Skill that restores 466% HP to self, a five-hit forward-area Ultimate and Silence utility. Lets you keep the Guardian slot without giving up damage.' },
  'shiraishi-ai': { tier: 'S', rarity: 'SSR', reason: 'Huge numbers (832% in combined multipliers, a four-hit 208% Ultimate) but nearly all of it prioritizes Support Type targets and cuts their healing. A PVP and anti-healing weapon first, a general damage dealer second.' },
  'andou-kana': { tier: 'S', rarity: 'SSR', reason: 'Freeze disables the target and her skills are built on it: Freeze on a nine-hit Talent Skill and a five-hit all-targets Ultimate with wide forward coverage. With Komachi Sayaka she forms the SS Ice Break pair (see the Combo Collective tab): Kana freezes, Sayaka converts every Frozen target into Ice Break L Pursuits. A solid S on her own, and the Initiator half of the game’s best pairing.' },
  'sugimoto-arina': { tier: 'A', rarity: 'SSR', reason: 'A straightforward healer: restores 630% HP to the two lowest HP allies, an Ultimate that restores 1000% HP to all party members, and Stun Res Up attached. Jessica simply does more for the same slot.' },
  'aira': { tier: 'A', rarity: 'SR', reason: 'Solid Light Striker with a Judgment passive stun combo and a defensive ultimate. Mid multipliers keep her out of the top ranks, nothing to fault otherwise.' },
  'amelie': { tier: 'A', rarity: 'SSR', reason: 'All-target specialist: the Ultimate hits all targets five times and Bleed uptime is reliable, but her Auto Skill buffs Random allies and her single-target numbers trail the SR damage leaders.' },
  'komachi-sayaka': { tier: 'SS', rarity: 'SSR', reason: 'The Ice Break Finisher and the strongest Pursuit Finisher in the game when Freeze is kept up: a six-hit forward-area Ultimate (330% per target) that inflicts Water Res Down 10% and Skill Damage Taken Increased 15% before triggering the Ice Break L Pursuit, a separate damage channel. Every successful Ice Break Pursuit stacks Water ATK Up 8% (3 stacks after Class Up) plus party Physical DMG Up 10%, and her Talent Skill jumps from 3x40% to 3x100% per target after Class Up. SS on her own, and SSS-tier with Andou Kana supplying Freeze.' },
  'danxin': { tier: 'A', rarity: 'SSR', reason: 'A Guardian with Striker-grade growth (rate 1.5), so she scales like a DPS while tanking: a 2145% self-shield on the active, Energy damage taken cut 10%, and an ultimate that cuts basic attack damage taken 40%. PvP arena exchange unit, not a summon. Great in content that hits hard.' },
  'ojima-erina': { tier: 'A', rarity: 'SSR', reason: 'A reliable Sniper with 345% across her Basic Attack and Talent Skill and a clean three-hit Ultimate. No team buffs, no weaknesses, no drama.' },
  'bernardo': { tier: 'B', rarity: 'SSR', reason: 'Support numbers too small to matter (a 5% Damage Up Auto Skill) and a Petrify chance that is Medium at best. The attitude is carrying the skills. Arena exchange unit, not a summon.' },
  'li-mu': { tier: 'S', rarity: 'SSR', reason: 'His real value is team amplification: after Class Up the whole party gains Crit DMG Up 12% AND Wind ATK Up 7%, stacking two strong buffs on one roster slot. He is also the main Electrocute Initiator, rolling Electrocute M on every hit of a six-hit Auto Skill with an Electrocute Hit Rate Up 30% rider on his Ultimate, plus Knockdown on the finisher. The 360% three-target Ultimate is modest, and the Overload chain has no released Finisher yet, but the day one ships he becomes its fuel. S now, SSS-potential pairing later.' },
  'annabelle': { tier: 'A', rarity: 'SSR', reason: 'AoE Light damage with control: a seven-hit two-target Ultimate that also lands Dark ATK Down 20% and ATK SPD Down 30%, Light Res Down 5% on her Auto Skill, and party Block Penetration Up 6% after Class Up. The 385% total is modest for an SSR and she has no pursuit role, but the layered debuffs make Light teams hit harder.' },
  'chloe': { tier: 'A', rarity: 'SSR', reason: 'Her thirteen-hit 585% Ultimate is better than it looks, and the self-inflicted Pain cost is manageable behind any healing support.' },
  'charlotte': { tier: 'S', rarity: 'SSR', reason: 'A niche S rather than a power pick: her Passive 2 after Class Up grants the whole party Dark Res Up 7% for Light into Dark matchups, and her Ultimate makes her one of only two characters who can inflict Judgment, feeding Sanction Pursuits for any Light Finisher. Her own output is middling (a nine-hit 34% per-hit Ultimate behind big self Shields). The game is young and better Light units will ship, so raise her only as far as current content demands.' },
  'mudia': { tier: 'A', rarity: 'SR', reason: 'A Guardian with HP recovery: restores HP on her Talent Skill, on basic attack hits and on every Ultimate strike, inflicts Bleed on her Auto Skill, and grants herself Max HP Up. Hard to kill, moderate damage.' },
  'amber': { tier: 'A', rarity: 'SSR', reason: 'The tankiest wall on the roster: a 1920% Shield on her Auto Skill, a 1000% self restore with Cleanse, Max HP Up 10%, and a 2900% Ultimate Shield with Phy Damage Reflect 40%. She holds any line without support; her limits are that everything but the Class Up Max HP Up 10% is self-only, her Passive 1 Amplify grants a literal 0% in the current data, and she has no pursuit role at all.' },
  'liz': { tier: 'B', rarity: 'SSR', reason: 'Not bad, just outmatched: the party-wide 960% Ultimate Shield (10s, Fire Res Up 10% while it holds) is thin for an Ultimate slot and one hard hit strips most of it, her passives after Class Up amount to party Fire Res Up 5% and Block Up 7%, and she inflicts no Initiator status at all, so she contributes nothing to the Pursuit system. Serviceable as an early Water Guardian, first to bench when something better arrives.' },
  'rachel': { tier: 'A', rarity: 'SSR', reason: 'Utility Breaker: her Auto Skill prioritizes furthest targets and Interrupts their skills, the Ultimate is a straight-line strike that triggers a Sanction L Pursuit on targets with the Judgment status, and kills inflict Damage Decrease 15% on enemy Sniper and Breaker Type targets.' },
  'katya': { tier: 'A', rarity: 'SR', reason: 'Freeze support: multi-hit forward-area attacks that trigger Ice Break Pursuits on Frozen targets, plus ACC Down and Water ATK Up self-buffs. Wants Freeze Initiators.' },
  'lin-lin': { tier: 'A', rarity: 'SSR', reason: 'Fire debuffer and clean-up: Fire Res Down 8%, Burn on her Auto Skill, Crit Chance Down, and everything aims at the lowest HP target. Mops up for Fire Type teams.' },
  'ruby': { tier: 'A', rarity: 'SSR', reason: 'Wild card: 900% combined damage and an Ultimate with Electrocute Hit Rate Up 30%, but on a Support whose ATK scaling could not be verified from the tables. Promising, unproven. The cheap SSR: Mission duplicates and an obtainable Exclusive Weapon make her the easiest premium unit to actually build.' },
  'theodore': { tier: 'B', rarity: 'SR', reason: 'The protagonist starter: functional Fire Res Down and a serviceable eight-hit Ultimate, but every limited unit outclasses him. He is free, be kind. Early on he is a core pick anyway: his Exclusive Weapon is obtainable and SR duplicates come quickly.' },
  'denice': { tier: 'B', rarity: 'SR', reason: 'A fifteen-hit Ultimate sounds fun until you see Random targeting. The Petrify synergy on her Talent Skill is real, the base multipliers are not.' },
  'ruo-lan': { tier: 'B', rarity: 'SSR', reason: 'All value is locked behind Earth Type allies: Earth ATK Up 20%, Shields and damage triggers for Earth Type teams only. For every other element she is a plain Sniper.' },
  'belle': { tier: 'B', rarity: 'SR', reason: 'A healer on a Sniper class whose numbers lose to Jessica and Sugimoto Arina at every line. The Evasion Up quirks do not save the slot. Early on she is a real pick: her Exclusive Weapon is obtainable and SR duplicates let you fully max her while your SSRs are still raising their Class.' },
  'belle-clumsy-cowgirl': { tier: 'A', rarity: 'SSR', reason: 'The self-sufficient Shatter Initiator: she applies her own Petrify before her five-hit all-targets Ultimate, so she triggers Stone Shatter pursuits without any feeder, on top of spread damage and small party heals. Weaknesses are real (spread damage splits, no party buffs), but she is the only unit who runs the Earth chain entirely alone.' },
  'fujiwara-arisa': { tier: 'SS', rarity: 'SSR', reason: 'Tied for the hardest single hit in the game: a nine-hit 900% single-target Ultimate that ends in a Stun and Burn M, backed by a 435% to 585% Talent Skill and Burn S on her Auto Skill. She is also the premium Burn Initiator, keeping the Fire status up so Theodore can Detonate. Raw ceiling plus chain value; the only thing she lacks is team amplification.' },
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
// actually encounterable in game, so "has art" = "released". Artless units stay
// off the list. Since 2026-10-15 the five artless entries of that pull
// (qing-yin, leng-zhen, elena, victoria, connie) are removed from the
// published roster entirely per user confirmation that artless = unreleased;
// re-add them from roster.json the day their art ships.
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
    }]).map(section => {
      const { job, zh, icon } = section;
      const tiers = tierRows(releasedSSR.filter(c => (c.job ? c.job.name : 'Unclassified') === job));
      return tiers.length ? { key: job, title: job, zh, icon, note: section.note, tiers } : null;
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
    enablers: ['andou-kana'],
    triggers: ['komachi-sayaka', 'katya'],
    note: 'The headline pairing. Kana stacks Freeze on her nine-hit Talent Skill; Sayaka converts every Frozen target into Ice Break L Pursuits after her own Water Res Down and Skill Damage Taken Increased debuffs, stacking Water ATK Up 8% on each trigger. Rated SSS as a pair; Sayaka is still SS alone.',
    noteZh: '招牌組合。小町憐奈以九段天賦技疊加冰凍；咲香先上水屬性抗性降低與技能傷害承受增加，再把冰凍目標轉為破冰L追擊，每次觸發疊加8%水屬性攻擊。成對評價SSS；單獨使用咲香仍有SS。',
  },
  {
    slug: 'storm-overload',
    name: 'Storm Overload',
    nameZh: '風暴超載',
    element: 'Wind',
    chain: 'Electrocute > Overload',
    chainZh: '觸電 > 超載',
    enablers: ['ruby', 'li-mu'],
    triggers: [],
    note: 'Ruby and Li Mu keep Electrocute on the enemy (both also carry Electrocute Hit Rate Up), but no released unit carries an Overload Finisher yet, so the chain cannot fire in the live game. Overload also inflicts Silence when it triggers, which will make the future Finisher worth waiting for.',
    noteZh: '露比與李沐維持觸電（兩人皆帶觸電命中率提升），但目前沒有已實裝角色帶有超載終結技，此鏈暫時無法發動。超載發動時會附加沉默，未來的終結技角色值得等待。',
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
    note: 'Aira (a launch SR everyone has) applies Judgment S on her Talent Skill and Charlotte adds it on her Ultimate after Class Up; Rachel strikes from range with Sanction L on hit. Sanction lowers the target’s Physical RES and Energy RES, amplifying the whole team while it is up.',
    noteZh: '艾拉（人人都有的開服SR）在天賦技附加審判S，夏洛特於升階後的奧義再補上；瑞秋從遠處以制裁L收頭。制裁同時降低目標的物理與能量抗性，生效期間放大全隊輸出。',
  },
  {
    slug: 'stone-shatter',
    name: 'Stone Shatter',
    nameZh: '碎石共鳴',
    element: 'Earth',
    chain: 'Petrify > Shatter',
    chainZh: '石化 > 碎石',
    enablers: ['milena', 'hijikata-chizuru', 'bernardo'],
    triggers: ['denice', 'belle-clumsy-cowgirl'],
    note: 'The largest group: three Petrify Initiators supply two Shatter Finishers. Cowgirl Belle is the self-sufficient version, inflicting her own Petrify before the Ultimate; Shatter also lowers the target’s elemental RES except Light and Dark, so it amplifies the follow-up damage of the whole team.',
    noteZh: '人數最多的一鏈：三名石化啟動技角色供應兩名碎石終結技角色。迷糊乳牛-貝兒為自足版本，奧義前自行附上石化；碎石另會降低目標的元素抗性（光闇除外），放大全隊後續傷害。',
  },
  {
    slug: 'blaze-detonate',
    name: 'Blaze Detonate',
    nameZh: '烈焰引爆',
    element: 'Fire',
    chain: 'Burn > Detonate',
    chainZh: '燃燒 > 引爆',
    enablers: ['adele', 'lin-lin', 'fujiwara-arisa', 'danxin'],
    triggers: ['theodore'],
    note: 'Burn is the easiest status to keep up (four Initiators) and the Finisher is Theodore, the free Mission SR: Detonate S on his Talent Skill keeps a steady Pursuit stream on any content.',
    noteZh: '燃燒是最易維持的狀態（四名啟動技角色），終結技角色是任務免費SR西奧多：天賦技的引爆S穩定輸出追擊。',
  },
  {
    slug: 'ebon-abyss',
    name: 'Ebon Abyss',
    nameZh: '漆黑暗淵',
    element: 'Dark',
    chain: 'Ebon > Abyss',
    chainZh: '漆黑 > 深淵',
    enablers: ['yulia'],
    triggers: [],
    note: 'The thinnest chain: Yulia is the only Ebon Initiator, and no released unit carries an Abyss Finisher yet, so the chain cannot fire in the live game. Abyss prevents the target from being healed for a period when it triggers, the strongest Pursuit side effect against healing-reliant teams once a Finisher arrives.',
    noteZh: '最單薄的鏈：優莉雅是唯一的漆黑啟動技角色，且目前沒有已實裝角色帶有深淵終結技，此鏈暫時無法發動。深淵發動時使目標一段時間無法被治療，待終結技角色實裝後將是對續戰隊最強的追擊副作用。',
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
