// Ootakemaru - Zone Nova Character Data
// SSR Attacker from Heikyo Castle faction with Ice element
// Generated from decrypted live master data (2026-10-13); skills at max level (Lv.10)
export const ootakemaruData = {
  name: "Ootakemaru",
  image: "Ootakemaru.png",
  rarity: 'SSR',
  element: 'Ice',
  class: 'Attacker',
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
    hp: '7,711',
    attack: '1,305',
    defense: '474',
  },
  talentTree: {
    totals: ["ATK +67.4%", "HP +53%", "Ice DMG +14.4%"],
    enhancementNodes: [
      {
        name: "Enhancement I",
        rank: 2,
        bonus: "ATK +10%, HP +10%",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
        gold: 5000,
      },
      {
        name: "Enhancement II",
        rank: 4,
        bonus: "ATK +15%, HP +15%",
        materials: [{"name": "Dragon Scale", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 20000,
      },
      {
        name: "Enhancement III",
        rank: 6,
        bonus: "ATK +20%, HP +20%",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
        gold: 160000,
      },
    ],
    statNodes: [
      {
        node: "N1",
        stat: "Ice DMG +3.2%",
        unlock: "After E1",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
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
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 10000,
      },
      {
        node: "N4",
        stat: "HP +3.2%",
        unlock: "After N1",
        materials: [{"name": "Dragon Scale", "amount": 1, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 10000,
      },
      {
        node: "N5",
        stat: "ATK +4.8%",
        unlock: "After N2",
        materials: [{"name": "Dragon Scale", "amount": 3, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 20000,
      },
      {
        node: "N6",
        stat: "HP +4.8%",
        unlock: "After N2",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 160000,
      },
      {
        node: "N7",
        stat: "Ice DMG +4.8%",
        unlock: "After E2",
        materials: [{"name": "Dragon Scale", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 45000,
      },
      {
        node: "N8",
        stat: "ATK +4.8%",
        unlock: "After E2",
        materials: [{"name": "Dragon Scale", "amount": 5, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 45000,
      },
      {
        node: "N9",
        stat: "ATK +6.4%",
        unlock: "Lv 80",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
        gold: 160000,
      },
      {
        node: "N10",
        stat: "Ice DMG +6.4%",
        unlock: "Lv 75",
        materials: [{"name": "Dragon Scale", "amount": 10, "icon": "Icon_Talent_Rankup_Rare_6.png"}],
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
        materials: [{"name": "Frost Aether", "amount": 3, "icon": "Icon_Talent_Rankup_Ice_1.png"}],
      },
      {
        level: 4,
        gold: 10000,
        materials: [{"name": "Frost Aetherstone", "amount": 3, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 5,
        gold: 20000,
        materials: [{"name": "Frost Aetherstone", "amount": 5, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 6,
        gold: 30000,
        materials: [{"name": "Frost Aetherstone", "amount": 7, "icon": "Icon_Talent_Rankup_Ice_2.png"}],
      },
      {
        level: 7,
        gold: 45000,
        materials: [{"name": "Frost Aether Lany.", "amount": 3, "icon": "Icon_Talent_Rankup_Ice_3.png"}],
      },
      {
        level: 8,
        gold: 80000,
        materials: [{"name": "Frost Aether Lany.", "amount": 5, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}],
      },
      {
        level: 9,
        gold: 160000,
        materials: [{"name": "Frost Aether Lany.", "amount": 8, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
      {
        level: 10,
        gold: 300000,
        materials: [{"name": "Frost Aether Lany.", "amount": 14, "icon": "Icon_Talent_Rankup_Ice_3.png"}, {"name": "Queen's Amethyst", "amount": 1, "icon": "Icon_Talent_Rankup_Epic_3.png"}, {"name": "The Original Aether", "amount": 1, "icon": "Icon_Talent_Rankup_Special.png"}],
      },
    ],
  },
  skills: {
    normal:     {
      name: "Thin Frost",
      cooldown: "2.0s",
      description: "Deals ice damage equal to 120% of own ATK to the designated enemy unit.",
      template: "Deals ice damage equal to {0} of own ATK to the designated enemy unit.",
      levelValues: [["55%"], ["60%"], ["65%"], ["70%"], ["75%"], ["80%"], ["85%"], ["90%"], ["95%"], ["100%"], ["105%"], ["110%"], ["115%"], ["120%"]],
    },
    auto:     {
      name: "Flow Severance",
      cooldown: "6.0s",
      description: "Inflicts [Flow Severance] on the designated enemy unit, then deals ice damage equal to 353.3% of own ATK.\n[Flow Severance]: Reduces healing and shields received by 150% for 4 seconds. Does not stack; reapplying refreshes the duration.",
      template: "Inflicts [Flow Severance] on the designated enemy unit, then deals ice damage equal to {0} of own ATK.\n[Flow Severance]: Reduces healing and shields received by {1} for {2} seconds. Does not stack; reapplying refreshes the duration.",
      levelValues: [["180%", "150%", "4"], ["193.3%", "150%", "4"], ["206.7%", "150%", "4"], ["220%", "150%", "4"], ["233.3%", "150%", "4"], ["246.7%", "150%", "4"], ["260%", "150%", "4"], ["273.3%", "150%", "4"], ["286.7%", "150%", "4"], ["300%", "150%", "4"], ["313.3%", "150%", "4"], ["326.7%", "150%", "4"], ["340%", "150%", "4"], ["353.3%", "150%", "4"]],
    },
    ultimate:     {
      name: "Moon Mirror: Flash",
      energyCost: "3",
      cooldown: "3.0s",
      description: "Increases own ATK by 95% for 4 seconds when casting begins. Does not stack.\nInflicts [Flow Severance] on the designated enemy unit, then deals ice damage equal to 1050% of own ATK.",
      template: "Increases own ATK by {0} for {1} seconds when casting begins. Does not stack.\nInflicts [Flow Severance] on the designated enemy unit, then deals ice damage equal to {2} of own ATK.",
      levelValues: [["95%", "4", "530%"], ["95%", "4", "570%"], ["95%", "4", "610%"], ["95%", "4", "650%"], ["95%", "4", "690%"], ["95%", "4", "730%"], ["95%", "4", "770%"], ["95%", "4", "810%"], ["95%", "4", "850%"], ["95%", "4", "890%"], ["95%", "4", "930%"], ["95%", "4", "970%"], ["95%", "4", "1010%"], ["95%", "4", "1050%"]],
    },
    passive:     {
      name: "Mirror Blade",
      description: "Increases own DEF Penetration Rate by 39%.\nWhen an enemy unit begins casting an ultimate skill, immediately triggers [Mirror Blade] against the enemy with the highest current DEF on the battlefield, dealing ice Pursue Damage equal to 463.9% of the struck enemy unit's DEF.\nWhen an enemy unit begins a normal attack, skill, or ultimate skill, gains 1 stack of [Mirror Blade Counter]. Every 4 stacks accumulated are consumed to trigger an additional [Mirror Blade], dealing ice Pursue Damage equal to 223.3% of own ATK.\n[Mirror Blade]: The ultimate counter targets the enemy with the highest current DEF; the stack counter targets the enemy with the highest current ATK. Inflicts [Flow Severance], then deals damage.",
      template: "Increases own DEF Penetration Rate by {0}.\nWhen an enemy unit begins casting an ultimate skill, immediately triggers [Mirror Blade] against the enemy with the highest current DEF on the battlefield, dealing ice Pursue Damage equal to {1} of the struck enemy unit's DEF.\nWhen an enemy unit begins a normal attack, skill, or ultimate skill, gains 1 stack of [Mirror Blade Counter]. Every {2} stacks accumulated are consumed to trigger an additional [Mirror Blade], dealing ice Pursue Damage equal to {3} of own ATK.\n[Mirror Blade]: The ultimate counter targets the enemy with the highest current DEF; the stack counter targets the enemy with the highest current ATK. Inflicts [Flow Severance], then deals damage.",
      levelValues: [["39%", "240%", "4", "115%"], ["39%", "257.2%", "4", "123.3%"], ["39%", "274.4%", "4", "131.7%"], ["39%", "291.7%", "4", "140%"], ["39%", "308.9%", "4", "148.3%"], ["39%", "326.1%", "4", "156.7%"], ["39%", "343.3%", "4", "165%"], ["39%", "360.6%", "4", "173.3%"], ["39%", "377.8%", "4", "181.7%"], ["39%", "395%", "4", "190%"], ["39%", "412.2%", "4", "198.3%"], ["39%", "429.4%", "4", "206.7%"], ["39%", "446.7%", "4", "215%"], ["39%", "463.9%", "4", "223.3%"]],
    },
  },
  teamSkill: {
    name: "Combo Skill",
    description: "Increases own ATK by 20%.\nAt the start of battle, increases own Pursue Damage by 5% for every 500 ATK, up to 6 times.",
    requirements: {
      faction: "Heikyo Castle",
      element: "Ice",
      alternativeConditions: "Team contains 2 Heikyo Castle characters or 2 Ice characters",
    },
  },
  awakenings: [
    {
      level: 1,
      effect: "Gains 2 Energy at the start of battle.",
    },
    {
      level: 2,
      effect: "Increases the damage multiplier of [Mirror Blade] by 50%.",
    },
    {
      level: 3,
      effect: "Increases the levels of [Normal Attack], [Skill], [Ultimate Skill], and [Passive] by 2.",
    },
    {
      level: 4,
      effect: "Increases own Max HP by 29%. At the start of battle, reduces own damage taken by 43% for 8 seconds.",
    },
    {
      level: 5,
      effect: "Increases the levels of [Normal Attack], [Skill], [Ultimate Skill], and [Passive] by 2.",
    },
    {
      level: 6,
      effect: "Gains 40% All Resistance Penetration.",
    },
  ],
  memoryCard: {
    name: "Drunk General",
    image: "Ootakemarucard.png",
    stats: {
      hp: "5,040",
      attack: "780",
      defense: "474",
    },
    effects: [  // awakening levels 1-5
      "Increases ATK by 23%.\nIncreases Pursue Damage dealt by the wearer by 27%.\nAfter casting an ultimate skill, the wearer gains a shield equal to 25% of their Max HP. This effect can trigger at most once every 5 seconds.",
      "Increases ATK by 27%.\nIncreases Pursue Damage dealt by the wearer by 31%.\nAfter casting an ultimate skill, the wearer gains a shield equal to 29% of their Max HP. This effect can trigger at most once every 5 seconds.",
      "Increases ATK by 31%.\nIncreases Pursue Damage dealt by the wearer by 36%.\nAfter casting an ultimate skill, the wearer gains a shield equal to 33% of their Max HP. This effect can trigger at most once every 5 seconds.",
      "Increases ATK by 35%.\nIncreases Pursue Damage dealt by the wearer by 40%.\nAfter casting an ultimate skill, the wearer gains a shield equal to 38% of their Max HP. This effect can trigger at most once every 5 seconds.",
      "Increases ATK by 39%.\nIncreases Pursue Damage dealt by the wearer by 45%.\nAfter casting an ultimate skill, the wearer gains a shield equal to 42% of their Max HP. This effect can trigger at most once every 5 seconds.",
    ],
    restriction: "Only effective for Attacker",
  },
  tags: [
    "Shield",
    "Anti-Heal",
    "Energy",
    "Damage Reduction",
    "Ice Damage",
  ],
};

export const ootakemaruSEO = {
  title: `Ootakemaru - Zone Nova Character Guide | GachaWiki`,
  description: `Complete guide for Ootakemaru, a SSR Ice Attacker in Zone Nova. Includes skills, awakenings, the Drunk General memory card, and optimal build strategies.`,
};

export default ootakemaruData;