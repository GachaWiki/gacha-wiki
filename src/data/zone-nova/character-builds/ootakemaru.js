// Ootakemaru Build - Zone Nova Character Build
// SSR Ice Attacker - Anti-Sustain Punisher
// Editorial content hand-curated 2026-10-13; skill text matches the live character data (Lv.14).

export const ootakemaruBuild = {
    name: "Ootakemaru",
    role: "DPS",
    buildType: "Anti-Sustain Punisher",
    description: "Ootakemaru is a punish Attacker who profits every time the enemy acts: her passive [Mirror Blade] instantly counterattacks the highest-DEF enemy whenever an enemy begins casting an Ultimate (463.9% of that enemy's own DEF as Ice Pursue Damage, so tanks get hit hardest), and every 4 enemy actions trigger a bonus 223.3% ATK pursuit on the highest-ATK enemy. Both counters apply [Flow Severance], which cuts healing and shields received by 150% for 4 seconds: a full anti-sustain lock on top of her Skill and Ultimate applying the same debuff. Her Ultimate [Moon Mirror: Flash] raises her own ATK by 95% as the cast begins and then strikes for 1050% of own ATK, and her combo skill converts ATK into Pursue Damage at battle start (+5% per 500 ATK, up to 6 stacks). Against healers, shielders and ult-reliant bosses she removes the recovery layer while punishing everything they do.",
    skillPriority: [
      {
        skill: "Ultimate: Moon Mirror: Flash",
        priority: 1,
        level: "Level 14",
        reason: "The nuke: +95% ATK for 4s as the cast begins, then 1050% of own ATK to the designated enemy plus [Flow Severance]. Only 3 Energy, so it cycles fast",
        description: "Energy Cost: 3\nCooldown: 3.0s\nIncreases own ATK by 95% for 4 seconds when casting begins. Does not stack.\nInflicts [Flow Severance] on the designated enemy unit, then deals ice damage equal to 1050% of own ATK."
      },
      {
        skill: "Passive: Mirror Blade",
        priority: 2,
        level: "Level 14",
        reason: "The engine: instant 463.9%-of-DEF counter on every enemy Ultimate cast, a 223.3% ATK pursuit every 4 enemy actions, and both apply [Flow Severance]. Unlike most passives, its numbers DO scale with level (240% to 463.9%)",
        description: "Increases own DEF Penetration Rate by 39%.\nWhen an enemy unit begins casting an ultimate skill, immediately triggers [Mirror Blade] against the enemy with the highest current DEF on the battlefield, dealing ice Pursue Damage equal to 463.9% of the struck enemy unit's DEF.\nWhen an enemy unit begins a normal attack, skill, or ultimate skill, gains 1 stack of [Mirror Blade Counter]. Every 4 stacks accumulated are consumed to trigger an additional [Mirror Blade], dealing ice Pursue Damage equal to 223.3% of own ATK.\n[Mirror Blade]: The ultimate counter targets the enemy with the highest current DEF; the stack counter targets the enemy with the highest current ATK. Inflicts [Flow Severance], then deals damage."
      },
      {
        skill: "Auto Skill: Flow Severance",
        priority: 3,
        level: "Level 14",
        reason: "353.3% ATK to the designated enemy plus the [Flow Severance] debuff (healing and shields received -150% for 4s). Use it to open the anti-sustain lock on demand",
        description: "Cooldown: 6.0s\nInflicts [Flow Severance] on the designated enemy unit, then deals ice damage equal to 353.3% of own ATK.\n[Flow Severance]: Reduces healing and shields received by 150% for 4 seconds. Does not stack; reapplying refreshes the duration."
      },
      {
        skill: "Normal Attack: Thin Frost",
        priority: 4,
        level: "Level 14",
        reason: "120% ATK filler; every enemy action is already feeding the [Mirror Blade Counter] stacks. Keep it at cap, lowest priority",
        description: "Cooldown: 2.0s\nDeals ice damage equal to 120% of own ATK to the designated enemy unit."
      }
    ],
    recommendedMemoryCards: [
      {
        name: "Drunk General",
        effect: "Exclusive card: ATK +39%, Pursue Damage +45%, and after casting an ultimate skill the wearer gains a shield equal to 42% of their Max HP (max once every 5 seconds).",
        priority: "Must Have",
        note: "Her signature card. Every [Mirror Blade] counter is Pursue Damage, so the +45% Pursue line multiplies her entire punish loop.",
        characterSpecific: true,
        memoryImage: "drunk-general.png",
        memoryStats: {
          hp: "5,040",
          attack: "780",
          defense: "474"
        }
      },
      {
        name: "The Knight and the Fuzzy",
        effect: "ATK +40%. Enemies hit by the Ultimate gain [Frontline Edict] for 7s. Targets within 3m also gain [Enhanced Frontline Edict]. [Frontline Edict]: DEF -12.5%. Energy Gain Efficiency -10%. [Enhanced Frontline Edict]: DEF -45%. Energy Gain Efficiency -30%.",
        priority: "Great",
        note: "Best non-exclusive option: DEF shred feeds the DEF-based ultimate counter.",
        characterSpecific: false,
        memoryImage: "the-knight-and-the-fuzzy.png",
        memoryStats: {
          hp: "6,000",
          attack: "600",
          defense: "600"
        }
      },
      {
        name: "A perfect makeup look?",
        effect: "Attack power increased by 40%. When a Ultimate Skill deals damage, the target takes 36% more damage and receives 40% less healing for 5 seconds.",
        priority: "Good",
        note: "Ultimate amplification option that stacks more anti-heal onto [Flow Severance].",
        characterSpecific: false,
        memoryImage: "Ibaraki-dojicard.jpg",
        memoryStats: {
          hp: "6,000",
          attack: "600",
          defense: "600"
        }
      }
    ],
    runes: {
      primary: "Attack % / Ice Attribute Damage %",
      secondary: "HP %",
      stats: [
        "Attack %",
        "Ice Attribute Damage %"
      ],
      additionalStats: [
        "HP %",
        "Crit Rate %"
      ],
      buildNote: "Every [Mirror Blade] trigger is Pursue Damage, so Het is made for her: 2-piece +20% Pursue Damage, 4-piece +15% Crit Rate for 10s after any pursuit (effectively permanent). Kryos 2-piece adds Frost damage directly. Her combo skill converts every 500 ATK into +5% Pursue Damage (up to 6 stacks), so ATK% pieces raise both the hits and the Pursue multiplier, and the ultimate counter scales off the TARGET's DEF with 39% DEF Penetration of her own.",
      recommendedSets: [
        {
          name: "Het 4-piece + Kryos 2-piece",
          englishName: "Het 4-piece + Kryos 2-piece",
          mainRune: "Het",
          secondaryRune: "Kryos",
          description: "Pursue amplification on every counter plus flat Frost damage: the punish-loop set."
        }
      ],
      alternativeSets: [
        {
          name: "Kryos 4-piece + Alpha 2-piece",
          englishName: "Kryos 4-piece + Alpha 2-piece",
          mainRune: "Kryos",
          secondaryRune: "Alpha",
          description: "If her Normal Attack cooldown is reduced (supports, haste buffs): up to +20% Frost damage and +18% Crit Damage from the Kryos 4-piece."
        },
        {
          threeSets: ["Het", "Kryos", "Alpha"],
          description: "20% Pursue Damage, 10% Frost damage and 16% ATK with no conditions."
        }
      ]
    },
    mainStatsByPosition: {
      "1": {
        name: "Position 1: Fixed Main Stat",
        stat: "HP (Flat Value)",
        description: "Always HP - no other options",
        isFixed: true
      },
      "2": {
        name: "Position 2: Fixed Main Stat",
        stat: "Attack (Flat Value)",
        description: "Always Attack - no other options",
        isFixed: true
      },
      "3": {
        name: "Position 3: Fixed Main Stat",
        stat: "Defense (Flat Value)",
        description: "Always Defense - no other options",
        isFixed: true
      },
      "4": {
        name: "Position 4: Variable Main Stats",
        recommendedStat: "Attack (%)",
        availableStats: [
          "Healing Effectiveness (%)",
          "Critical Rate (%)",
          "Critical Damage (%)",
          "Attack Penetration (%)",
          "Attack (%)",
          "HP (%)",
          "Defense (%)"
        ],
        description: "ATK% scales every skill and her combo skill's Pursue Damage conversion (every 500 ATK = +5%)."
      },
      "5": {
        name: "Position 5: Variable Main Stats",
        recommendedStat: "Ice Attribute Damage (%)",
        availableStats: [
          "Wind Attribute Damage (%)",
          "Fire Attribute Damage (%)",
          "Ice Attribute Damage (%)",
          "Holy Attribute Damage (%)",
          "Chaos Attribute Damage (%)",
          "Attack (%)",
          "HP (%)",
          "Defense (%)"
        ],
        description: "100% of her damage including all [Mirror Blade] pursuits is Ice."
      },
      "6": {
        name: "Position 6: Variable Main Stats",
        recommendedStat: "Attack (%)",
        availableStats: [
          "Attack (%)",
          "HP (%)",
          "Defense (%)"
        ]
      }
    },
    awakenings: {
      priority: "A1 first: she enters the battle with 2 Energy, so the 3-cost Ultimate arrives one enemy action earlier and starts the [Flow Severance] pressure. A6 is the amplification node (40% All Resistance Penetration on a kit that already carries 39% DEF Pen). A2 boosts every [Mirror Blade] counter by 50%. A4 adds survival (+29% Max HP and 43% damage reduction for the first 8s). A3/A5 raise skill levels by 2 and are dupe-gated.",
      keyMilestones: [
        {
          level: 1,
          effect: "Gains 2 Energy at the start of battle.",
          importance: 1,
          importanceLabel: "Very Good"
        },
        {
          level: 2,
          effect: "Increases the damage multiplier of [Mirror Blade] by 50%.",
          importance: 1,
          importanceLabel: "Very Good"
        },
        {
          level: 3,
          effect: "Increases the levels of [Normal Attack], [Skill], [Ultimate Skill], and [Passive] by 2.",
          importance: 3,
          importanceLabel: "Mid"
        },
        {
          level: 4,
          effect: "Increases own Max HP by 29%. At the start of battle, reduces own damage taken by 43% for 8 seconds.",
          importance: 2,
          importanceLabel: "Good"
        },
        {
          level: 5,
          effect: "Increases the levels of [Normal Attack], [Skill], [Ultimate Skill], and [Passive] by 2.",
          importance: 3,
          importanceLabel: "Mid"
        },
        {
          level: 6,
          effect: "Gains 40% All Resistance Penetration.",
          importance: 1,
          importanceLabel: "Very Good"
        }
      ]
    },
    teamSkill: {
      name: "Combo Skill",
      description: "Increases own ATK by 20%. At the start of battle, increases own Pursue Damage by 5% for every 500 ATK, up to 6 times. Requires 2 Heikyo Castle or 2 Ice characters."
    },
    teamSynergy: {
      goodWith: [
        "Shuten-doji",
        "Fenrir",
        "Poseidon",
        "Keller",
        "Freya",
        "Snow Girl"
      ],
      note: "Her combo skill needs 2 Heikyo Castle or 2 Ice: pair her with Shuten-doji or Snow Girl (Heikyo Castle), or Poseidon, Keller, Freya or Fenrir (Ice). Fenrir stacks her own anti-shield and Energy denial on top of [Flow Severance] for a total recovery lockout, Poseidon holds the frontline while the counters pile up, and Shuten-doji brings the Heikyo Castle pairing plus heavy damage of her own."
    }
  };
