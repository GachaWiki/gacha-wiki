// Busty Burst Summon Recommendations
// Skip/Summon advice for banners, one terse line per reason

export const summonRecommendations = [
  {
    bannerId: 'banner-entwined-with-the-wind',
    character: 'Lin',
    characterSlug: 'lin',
    bannerType: 'Event Summon',
    startDate: '2026-10-27',
    endDate: '2026-11-03',
    verdict: 'skip',
    reasons: [
      'She joins the "Tower of Trials Summon" pool after the banner: a future Tower event can drop her again, or exchange 200 pity.',
      'SS tier wind attacker, but her team buffs need 3+ wind allies: outside mono-wind she is a plain single-target hitter.',
      'The Sun and the Moon (SSS duo) is the better crystal spend before Nov 3.',
    ],
  },
  {
    bannerId: 'banner-the-sun-and-the-moon',
    character: 'Bernadette & Adrienne',
    characterSlug: 'bernadette',
    bannerType: 'Event Summon',
    startDate: '2026-10-20',
    endDate: '2026-11-03',
    verdict: 'summon',
    reasons: [
      'Both SSS supports that fit physical and magic teams alike.',
      'Bernadette covers physical: crit, hit damage, enemy DEF down, chance to stun. Adrienne covers magic: enemy M.DEF down, chance to sleep.',
      'Shared Accuracy UP, Max HP, MP recovery after ally ultimates, stacking ATK after their own.',
      'Two rate-up SSRs on one 14-day banner.',
    ],
  },
  {
    bannerId: 'banner-paladin-introduction-diana',
    character: 'Diana & Zilka',
    characterSlug: 'diana',
    bannerType: 'Paladin Introduction',
    startDate: '2026-05-05',
    endDate: '2026-05-19',
    verdict: 'consider',
    reasons: [
      'Zilka: highest damage ultimate in the game (2170% +1000 at rank 5).',
      'Diana: strong single-target physical with Silence and Physical DEF down on ult.',
      'Sarka, the SR on this banner, is free from the event.',
      'Half-anniversary was right around the corner at the time.',
    ],
  },
  {
    bannerId: 'magdalena-2108',
    character: 'Magdalena',
    characterSlug: 'magdalena',
    bannerType: 'Seasonal Banner',
    startDate: '2026-04-28',
    endDate: '2026-05-05',
    verdict: 'skip',
    reasons: [
      'Magic wind tank, but wind teams run physical: her buffs mesh with nothing.',
      'Fine kit (hit-based healing shield, dual ATK debuff, dispel on ult), no must-have.',
      'Half-anniversary was about a month out.',
    ],
  },
  {
    bannerId: 'banner-paladin-introduction-trish',
    character: 'Trish',
    characterSlug: 'trish',
    bannerType: 'Paladin Introduction',
    startDate: '2026-04-21',
    endDate: '2026-05-05',
    verdict: 'summon',
    reasons: [
      'Best Hit-Based Damage buff in the game (35% +400, scaling to 940 at Lv90).',
      'Ultimate gives +35% Physical and Magic ATK for 12 seconds: works in any team.',
      'Lycorys and Katisha add nothing here: Katisha is free from the event.',
    ],
  },
];

export const VERDICT_STYLES = {
  skip: { color: '#e74c3c', label: 'Skip' },
  summon: { color: '#2ecc71', label: 'Summon' },
  consider: { color: '#f39c12', label: 'Consider' },
};
