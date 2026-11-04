// Kim Ga-young Build Configuration - Horizon Walker
export const kimGaYoungBuildConfig = {
  damageScaling: 'Ranged ATK + Crit DMG',
  buildStrategyTitle: 'Stealth Assassin Sniper',
  recommendedStigma: {
    zeroDupe: 'Phantom Banquet',
    fullEx5: 'The Four Horsemen',
  },
  buildStrategy: [
    {
      title: 'How she plays',
      description:
        'Kim is a stealth sniper who works through support attacks and stays safe in Stealth. Her two weaknesses, weak base Ranged ATK and low crit rate, are fixed by the team: run her with Ahram, Juha and Mu Yingying (exactly 18 cost), where Ahram buffs her Ranged ATK and shreds Pierce DEF, Juha adds Pierce Boost, and Mu covers her Crit Rate in Stealth and adds +200% Crit DMG. Stack Crit DMG and Ranged ATK, take Phantom Banquet unless you need Four Horsemen crit rate without Mu, and keep her within 3m of Mu for Ambush Cover.',
    },
  ],
  recommendedSubstats: [
    { stat: 'Crit DMG', scale: '6% - 10%', priority: 'Best' },
    { stat: 'Crit DMG', scale: '6% - 10%', priority: 'Best' },
    { stat: 'Ranged ATK', scale: '3% - 5%', priority: 'Best' },
    { stat: 'Crit Rate', scale: '3% - 5%', priority: 'Good Alternative' },
  ],
  traitsType: 'Ranged ATK + Crit DMG',
  traitsMax: 6,
  recommendedTraits: [
    {
      name: 'Final DMG EX (No-Mercy Marksman option)',
      effects: ['Final DMG: +7%', 'Ranged ATK: +10%'],
    },
    {
      name: 'Decisive Master Archer',
      effects: ['Crit DMG: +18%', 'Pierce Boost: +5%'],
    },
    {
      name: 'Deadly Guardian',
      effects: ['Crit DMG: +18%', 'Pierce DEF: +100', 'Slash DEF: +100', 'Crush DEF: +100'],
    },
    {
      name: 'Merciless Fortress',
      effects: ['Crit DMG: +18%', 'All DEF: +80'],
    },
    {
      name: 'Ruthless Sniper',
      effects: ['Ranged ATK: +9%', 'Crit DMG: +10%'],
    },
    {
      name: 'Penetrating Sniper',
      effects: ['Ranged ATK: +9%', 'Pierce Boost: +5%'],
    },
    {
      name: 'Keen Sniper',
      effects: ['Ranged ATK: +9%', 'Crit Rate: +5%'],
    },
    {
      name: 'Dead-Aim Fortress',
      effects: ['Pierce Boost: +9%', 'All DEF: +80'],
    },
    {
      name: 'Ironclad Sniper',
      effects: ['Ranged ATK: +9%', 'All DEF: +80'],
    },
    {
      name: 'Quick-Witted Arbiter',
      effects: ['Crit Rate: +9%', 'Crit DMG: +10%'],
    },
  ],
  traitRecommendation:
    'Mu Yingying\'s Ambush Cover gives +100% Crit Rate while she is in Stealth, so stack Ranged ATK and Crit DMG.',
};
