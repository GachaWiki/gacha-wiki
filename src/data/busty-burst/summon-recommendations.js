// Busty Burst Summon Recommendations
// Skip/Summon advice for active banners with reasoning

export const summonRecommendations = [
  {
    bannerId: 'banner-the-sun-and-the-moon',
    character: 'Bernadette & Adrienne',
    characterSlug: 'bernadette',
    bannerType: 'Event Summon',
    startDate: '2026-10-20',
    endDate: '2026-11-03',
    verdict: 'summon',
    summary: 'Pull for the singer duo. Both are SSS tier support units and both work on physical and magic teams: Bernadette covers the physical side, Adrienne covers the magic side, and their shared Accuracy UP, Max HP and stacking ATK buffs fit anywhere.',
    reasons: [
      {
        title: 'SSS Tier Support Units',
        text: 'Both placed SSS on our tier list. Back-row supports who pump crit, hit-based damage and accuracy while shredding enemy defense and block, exactly what every damage dealer wants.',
      },
      {
        title: 'Physical And Magic Coverage In One Banner',
        text: 'Bernadette raises physical crit and hit-based physical damage and drops enemy physical defense with a chance to stun. Adrienne is the magic counterpart, dropping enemy magic defense with a chance to sleep. Whichever team type you run, this banner has your support.',
      },
      {
        title: 'Team-Wide Utility That Fits Anywhere',
        text: 'Both bring Accuracy UP, Max HP passives, MP recovery after ally ultimates, and stacking ATK buffs after their own ultimate (physical for Bernadette, magic for Adrienne). The pair works on both physical and magic teams.',
      },
      {
        title: 'Two SSR Pickups On A 14-Day Banner',
        text: 'A dual pickup banner like Bridal Blessing, running Oct 20 to Nov 3. Two rate-up SSR supports for one banner is strong value for any account.',
      },
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
    summary: 'Zilka has the highest damage ultimate multiplier in the game at 2170% +1000. Diana is a strong physical attacker with Silence on ult. Sarka is free from the event. Worth considering if you need physical DPS.',
    reasons: [
      {
        title: 'Zilka: Highest Damage Ult in Game',
        text: 'Zilka\'s rank 5 ultimate hits for 2170% +1000, the highest damage multiplier of any non-healing ultimate. Combined with her self-buff skill, she can output massive burst damage.',
      },
      {
        title: 'Diana: Solid Physical DPS',
        text: 'Diana brings strong single-target physical damage with Silence and Physical DEF down on her ultimate, making her great for boss content.',
      },
      {
        title: 'Sarka Is Free',
        text: 'Sarka is the SR unit on this banner and you get her for free from the event. She also brings Physical DEF down on skill, decent for an SR.',
      },
      {
        title: 'Half Anniversary Is Coming Soon',
        text: 'Half-anniversary is right around the corner. Expect limited units, free pulls, and big rewards. Consider carefully before spending heavily here.',
      },
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
    summary: 'She\'s a cool Magic Wind Tank and pretty unique, but Wind is a physical element right now so she doesn\'t really fit anywhere. Plus half-anniv is coming in about a month. Save.',
    reasons: [
      {
        title: 'Wind Doesn\'t Need Magic',
        text: 'Wind teams are all physical. Her Magic ATK buffs and DEF debuffs just don\'t mesh with the rest of the Wind roster. She\'s kind of on her own island.',
      },
      {
        title: 'Half Anniversary Is Coming',
        text: 'We\'re about a month out from half-anniversary. That means limited units, free pulls, and probably something you\'ll actually want. Don\'t blow your stash here.',
      },
      {
        title: 'Decent Kit, No Must-Have',
        text: 'Hit-Based Healing Shield, dual ATK debuff, Dispel on her ult -- it\'s fine. Not bad. Just nothing that makes you go "I need her right now." You can skip this one comfortably.',
      },
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
    summary: 'Pull for Trish. Best Hit-Based Damage buff in the game and her ultimate gives +35% Physical and Magic ATK for 12 seconds, works in any team.',
    reasons: [
      {
        title: 'Best Hit-Based Damage Buff',
        text: 'Her Hit-Based Physical Damage UP (35%+400, scaling to 940 at Lv90) is the strongest in the game. It makes any physical carry hit way harder.',
      },
      {
        title: 'Ultimate Buffs Both ATK Types',
        text: 'Her ultimate gives +35% Physical ATK and +35% Magic ATK for 12 seconds. She works in any team, physical or magic.',
      },
      {
        title: 'Lycorys and Katisha Are Not Worth It',
        text: 'Lycorys\' poison is underwhelming and Katisha is free from the event. Only Trish makes this banner worth pulling on.',
      },
    ],
  },
];

export const VERDICT_STYLES = {
  skip: { color: '#e74c3c', label: 'Skip' },
  summon: { color: '#2ecc71', label: 'Summon' },
  consider: { color: '#f39c12', label: 'Consider' },
};
