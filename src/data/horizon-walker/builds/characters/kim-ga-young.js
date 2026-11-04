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
      title: 'Stealth',
      description:
        'Most of the time Kim is going to be in stealth mode, so you are not in danger of getting hit. You also benefit from stigma and other buffs that scale with stealth. Her main weaknesses are that she is single target and her base Ranged ATK is weak, but both are covered by the team below.',
    },
    {
      title: 'The Ahram + Mu Team',
      description:
        'Run her with Ahram, Juha and Mu Yingying: that is exactly 18 deployment cost. Ahram\'s Assault Formation grants her a huge Ranged ATK bonus and Suppression shreds the target\'s Pierce DEF, Juha adds +24% Pierce Boost and flat Pierce DEF down, and Mu Yingying\'s Ambush Cover gives allies in Stealth up to +100% Crit Rate while Camaraderie adds +200% Crit DMG. In this team her Crit Rate is fully covered while she is in Stealth, so you stack Crit DMG and Ranged ATK instead.',
    },
    {
      title: 'EX Weapon Traits',
      description:
        'Her EX weapon "SS4 Refitted Model" grants bonus stats from specific traits: Efficient (+15 AP at battle start), Competent (+10% Ranged ATK), Methodical (+5% Support ATK DMG). The one you can change is Efficient, it does not provide damage but gives good starting AP. I am not really sure we need to get into her turn even, because her job is doing support attack when someone attacks. So we really do not need AP at all.',
    },
    {
      title: 'Drone Vision Support Role',
      description:
        'With her EX weapon, Drone Vision applies debuffs (-100 All DEF, -100 Evasion). She is the ONLY unit in the game that can reduce Evasion. Her debuff of 100 Evasion is actually quite strong because of how evasion works. All DEF down is not so much though.',
    },
    {
      title: 'Increase Sniping Skill LV',
      description:
        'I do think Support ATK scales with the character normal ATK, and Kim normal ATK is Sniping, so in theory if we increase her normal ATK that will also increase the Support ATK damage.',
    },
    {
      title: 'Two Stigma Choices',
      description:
        'There are two stigma builds for her: Four Horsemen and Phantom Banquet. With Mu Yingying on the team your Crit Rate is already covered by Ambush Cover while she is in Stealth, so Phantom Banquet is the default pick: it is stable and the stealth damage increase fits how she plays. Four Horsemen only makes sense when you run her without Mu and need the extra crit rate, and it needs at least 5 hits to reach full potential.',
    },
  ],
  recommendedSubstats: [
    { stat: 'Crit DMG', scale: '6% - 10%', priority: 'Best' },
    { stat: 'Crit DMG', scale: '6% - 10%', priority: 'Best' },
    { stat: 'Ranged ATK', scale: '3% - 5%', priority: 'Best' },
    { stat: 'Crit Rate', scale: '3% - 5%', priority: 'Good Alternative' },
  ],
  substatsPriority: 'Crit DMG (2 slots) → Ranged ATK → Crit Rate (only without Mu Yingying)',
  traitsType: 'Crit DMG + Ranged ATK + EX Weapon Synergy',
  recommendedTraits: [
    {
      name: 'Competent',
      effects: ['AP Recovery: +2%', 'EX Weapon: +10% Ranged ATK'],
      priority: 'Best',
    },
    {
      name: 'Methodical',
      effects: ['Starting AP: +10', 'AP Recovery: -3%', 'EX Weapon: +5% Support ATK DMG'],
      priority: 'Best',
    },
    {
      name: 'Doom',
      effects: ['Crit DMG: +12%', 'Max HP: -3%'],
      priority: 'Best',
    },
    {
      name: 'Heaven-sent',
      effects: ['Crit Rate: +5%'],
      priority: 'Alternative',
    },
    {
      name: 'Fortunate',
      effects: ['Crit Rate: +4%'],
      priority: 'Alternative',
    },
    {
      name: 'Efficient',
      effects: ['Immaterial DEF: -50', 'AP Recovery: +3%', 'EX Weapon: +15 AP at battle start'],
      priority: 'Alternative',
    },
    {
      name: 'Technical',
      effects: ['Ranged ATK: +3%'],
      priority: 'Best',
    },
    {
      name: 'Professional',
      effects: ['Ranged ATK: +2%', 'Accuracy: +3%'],
      priority: 'Alternative',
    },
    {
      name: 'Barraging',
      effects: ['Ranged ATK: +5%', 'Accuracy: -2%'],
      priority: 'Alternative',
    },
  ],
  traitRecommendation:
    'Competent → Methodical (EX Weapon synergy) → Doom → Technical (Ranged ATK). In the Ahram + Mu team your Crit Rate is covered by Ambush Cover while in Stealth, so stack Crit DMG and Ranged ATK. Keep Heaven-sent or Fortunate only if you run her without Mu Yingying. Efficient is optional as Kim mainly does support attacks and does not need AP.',
};
