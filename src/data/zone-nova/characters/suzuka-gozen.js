// Suzuka Gozen - Zone Nova Character Data
// SSR Destroyer from Heikyo Castle faction with Holy element
// Generated from decrypted live master data (2026-10-27); skills at max level (Lv.10)
export const suzukagozenData = {
  name: "Suzuka Gozen",
  image: "Suzuka Gozen.png",
  rarity: 'SSR',
  element: 'Holy',
  class: 'Destroyer',
  role: "DPS",
  faction: "Heikyo Castle",
  stats: {
    hp: "5,040",
    attack: "780",
    defense: "474",
    energyRecovery: '0.25/s',
    critRate: '0%',
    critDmg: '50%',
    maxCritRate: '0%',
    maxCritDmg: '50%',
  },
  maxStats: {
    hp: '7,308',
    attack: '1,129',
    defense: '687',
  },
  talentTree: {
    totals: ["DEF +45%", "HP +45%", "ATK +44.8%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "DEF +10%, HP +10%",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "DEF +15%, HP +15%",
        materials: [{"name": "Canopic Jar", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "DEF +20%, HP +20%",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "ATK +3.2%",
        unlock: "After E1",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 5000,
      },
      {
        node: "N2",
        stat: "ATK +3.2%",
        unlock: "Start",
        materials: [],
        gold: 2500,
      },
      {
        node: "N3",
        stat: "ATK +3.2%",
        unlock: "After N1",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "ATK +3.2%",
        unlock: "After N1",
        materials: [{"name": "Canopic Jar", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Canopic Jar", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Canopic Jar", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Canopic Jar", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "ATK +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Canopic Jar", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_3.png"}],
        gold: 160000,
      },
    ],
    levels: [
      {
        level: 2,
        gold: 2500,
        materials: [],
      },
      {
        level: 3,
        gold: 5000,
        materials: [{"name": "Holy Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Light_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Holy Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Light_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Holy Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Light_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Holy Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Light_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Holy Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Light_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Holy Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Holy Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Holy Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Light_3.png"}, {"name": "Empress Mask", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_2.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },
  skills: {
    normal:     {
      name: "Divine Blade Sweep",
      cooldown: "2.0s",
      description: "Deals holy damage equal to 93.3% ATK to all enemies and gains 1 [Bow Draw] stack. Each Normal Attack grants only 1 stack.\n[Bow Draw]: Each stack reduces Normal Attack cooldown by 8% and increases Normal Attack damage dealt by 10%. Up to 5 stacks, with no duration limit. Can be dispelled.",
      template: "Deals holy damage equal to {0} ATK to all enemies and gains 1 [Bow Draw] stack. Each Normal Attack grants only 1 stack.\n[Bow Draw]: Each stack reduces Normal Attack cooldown by 8% and increases Normal Attack damage dealt by 10%. Up to 5 stacks, with no duration limit. Can be dispelled.",
      levelValues: [["50%"], ["53.3%"], ["56.7%"], ["60%"], ["63.3%"], ["66.7%"], ["70%"], ["73.3%"], ["76.7%"], ["80%"], ["83.3%"], ["86.7%"], ["90%"], ["93.3%"]],
    },
    auto:     {
      name: "Sevenfold Tide Slash",
      cooldown: "6.0s",
      description: "Deals holy damage equal to 531.1% ATK to all enemies and applies [Tide Mark] to each enemy hit for 8 seconds. [Tide Mark] does not stack. Also gains 1 [Keen Eye] stack, at most 1 stack per cast.\nAfter the skill hits, removes 1 stack from each beneficial buff on every enemy hit.\n[Keen Eye]: Each stack increases Ultimate and Pursue damage dealt by 15%. Up to 3 stacks, with no duration limit.",
      template: "Deals holy damage equal to {0} ATK to all enemies and applies [Tide Mark] to each enemy hit for 8 seconds. [Tide Mark] does not stack. Also gains 1 [Keen Eye] stack, at most 1 stack per cast.\nAfter the skill hits, removes 1 stack from each beneficial buff on every enemy hit.\n[Keen Eye]: Each stack increases Ultimate and Pursue damage dealt by 15%. Up to 3 stacks, with no duration limit.",
      levelValues: [["300%"], ["317.8%"], ["335.6%"], ["353.3%"], ["371.1%"], ["388.9%"], ["406.7%"], ["424.4%"], ["442.2%"], ["460%"], ["477.8%"], ["495.6%"], ["513.3%"], ["531.1%"]],
    },
    ultimate:     {
      name: "Divine Tidebreaker",
      energyCost: "3",
      cooldown: "1.0s",
      description: "If the wearer has 2 [Resonance] stacks, consumes both at Ultimate startup and applies [Mirror Fracture] to all enemies for 6 seconds before damage.\nDeals holy damage equal to 751.1% ATK to all enemies. If the wearer has 2 [Imperial Bell] stacks when casting the Ultimate, consumes both at startup and enhances this Ultimate's main damage to holy damage equal to 901.1% ATK, replacing the original main damage.\nFor each enemy hit by the enhanced Ultimate, deals one additional holy Pursue damage equal to 442.2% ATK to that enemy and enemies within 3 m of it. These areas can overlap, allowing the same enemy to take multiple Pursue hits. Pursue damages do not retrigger this effect.",
      template: "If the wearer has 2 [Resonance] stacks, consumes both at Ultimate startup and applies [Mirror Fracture] to all enemies for 6 seconds before damage.\nDeals holy damage equal to {0} ATK to all enemies. If the wearer has 2 [Imperial Bell] stacks when casting the Ultimate, consumes both at startup and enhances this Ultimate's main damage to holy damage equal to {2} ATK, replacing the original main damage.\nFor each enemy hit by the enhanced Ultimate, deals one additional holy Pursue damage equal to {1} ATK to that enemy and enemies within 3 m of it. These areas can overlap, allowing the same enemy to take multiple Pursue hits. Pursue damages do not retrigger this effect.",
      levelValues: [["390%", "240%", "540%"], ["417.8%", "255.6%", "567.8%"], ["445.6%", "271.1%", "595.6%"], ["473.3%", "286.7%", "623.3%"], ["501.1%", "302.2%", "651.1%"], ["528.9%", "317.8%", "678.9%"], ["556.7%", "333.3%", "706.7%"], ["584.4%", "348.9%", "734.4%"], ["612.2%", "364.4%", "762.2%"], ["640%", "380%", "790%"], ["667.8%", "395.6%", "817.8%"], ["695.6%", "411.1%", "845.6%"], ["723.3%", "426.7%", "873.3%"], ["751.1%", "442.2%", "901.1%"]],
    },
    passive:     {
      name: "Imperial Bell Kagura",
      description: "At the start of battle, gains 1 [Imperial Bell] stack. When Suzuka hits an enemy with [Tide Mark], gains 1 [Imperial Bell] stack, at most once every 3 seconds.\nWhen another ally hits an enemy with [Tide Mark], Suzuka gains 1 [Resonance] stack, at most once every 3 seconds per ally.\n[Imperial Bell]: Up to 2 stacks, lasts 12 seconds. Gaining another stack refreshes the duration.\n[Resonance]: Up to 2 stacks, lasts 8 seconds. Gaining another stack refreshes the duration.\n[Mirror Fracture]: Reduces holy Resistance by 27.6% for 6 seconds.",
      template: "At the start of battle, gains 1 [Imperial Bell] stack. When Suzuka hits an enemy with [Tide Mark], gains 1 [Imperial Bell] stack, at most once every 3 seconds.\nWhen another ally hits an enemy with [Tide Mark], Suzuka gains 1 [Resonance] stack, at most once every 3 seconds per ally.\n[Imperial Bell]: Up to 2 stacks, lasts 12 seconds. Gaining another stack refreshes the duration.\n[Resonance]: Up to 2 stacks, lasts 8 seconds. Gaining another stack refreshes the duration.\n[Mirror Fracture]: Reduces holy Resistance by {0} for 6 seconds.",
      levelValues: [["16%"], ["16.9%"], ["17.8%"], ["18.7%"], ["19.6%"], ["20.4%"], ["21.3%"], ["22.2%"], ["23.1%"], ["24%"], ["24.9%"], ["25.8%"], ["26.7%"], ["27.6%"]],
    },
  },
  teamSkill: {
    name: "Amaterasu War Banner",
    description: "At battle start, increases own ATK by 20%, Critical Rate by 10%, and holy damage by 15%.\nAfter including these ATK and Critical Rate bonuses, for every full 400 ATK, increases damage taken by all enemies by 3%, up to 10 times. For every full 15% Critical Rate, increases own Critical Damage by 14%, up to 5 times.\nCalculated once at battle start. These effects last for the entire battle, cannot be dispelled or cleansed, and do not recalculate after later stat changes.",
    requirements: {
      faction: "Heikyo Castle",
      element: "Holy",
      alternativeConditions: "Team contains 2 Heikyo Castle characters or 2 Holy characters",
    },
  },
  awakenings: [
    {
      level: 1,
      effect: "The first Ultimate after entering battle costs no energy. At battle start, gains 2 [Imperial Bell] stacks instead of 1.",
    },
    {
      level: 2,
      effect: "[Resonance] lasts 12 seconds instead of 8.\nAfter [Sevenfold Tide Slash] hits, removes 2 stacks instead of 1 from each beneficial buff on every enemy hit.",
    },
    {
      level: 3,
      effect: "Normal Attack, Skill, Ultimate, and Passive levels each increase by 2.",
    },
    {
      level: 4,
      effect: "Increases own ATK by 30% and Critical Damage by 30%. On entering battle, reduces all enemies' Critical Resistance by 30% for 5 seconds.\nReduces each teammate's cooldown for granting Suzuka [Resonance] from 3 seconds to 2 seconds.",
    },
    {
      level: 5,
      effect: "Normal Attack, Skill, Ultimate, and Passive levels each increase by 2.",
    },
    {
      level: 6,
      effect: "When dealing damage, ignores 25% of the target's elemental resistance.",
    },
  ],
  memoryCard: {
    name: "Let's play with Suzuka",
    image: "Suzuka Gozencard.png",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "The wearer's ATK increases by 30% and all damage dealt increases by 12%.\nWhen attacking an enemy with a debuff or control effect, that attack gains 12% Defense Penetration.",
      "The wearer's ATK increases by 35% and all damage dealt increases by 14%.\nWhen attacking an enemy with a debuff or control effect, that attack gains 15% Defense Penetration.",
      "The wearer's ATK increases by 40% and all damage dealt increases by 16%.\nWhen attacking an enemy with a debuff or control effect, that attack gains 18% Defense Penetration.",
      "The wearer's ATK increases by 50% and all damage dealt increases by 18%.\nWhen attacking an enemy with a debuff or control effect, that attack gains 21% Defense Penetration.",
      "The wearer's ATK increases by 60% and all damage dealt increases by 24%.\nWhen attacking an enemy with a debuff or control effect, that attack gains 24% Defense Penetration.",
    ],
    restriction: "Only effective for Destroyer",
  },
  tags: [
    "Crit Rate",
    "Crit",
    "Energy",
    "Damage Reduction",
    "Buff",
    "Holy Damage",
  ],
};

export const suzukagozenSEO = {
  title: `Suzuka Gozen - Zone Nova Character Guide | GachaWiki`,
  description: `Complete guide for Suzuka Gozen, a SSR Holy Destroyer in Zone Nova. Includes skills, awakenings, the Let's play with Suzuka memory card, and optimal build strategies.`,
};

export default suzukagozenData;