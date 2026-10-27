// Mila Build - Zone Nova Character Build
// SSR Chaos Supporter - Candy Mana Engine
// Editorial content hand-curated 2026-10-27; skill text matches the live character data (Lv.14).

export const milaBuild = {
    name: "Mila",
    role: "Supporter",
    buildType: "Candy Mana Engine",
    description: "Mila is a Chaos Supporter who turns a marked enemy into a team-wide engine. [Candy Master] (applied at battle start to the highest-ATK enemy, then re-applied by her Skill and Ultimate) makes that enemy DEF -23.6% and damage taken +21.6% while it lasts. Every ally attack against a marked enemy heals the attacker 4.9% Max HP, grants [Begged Candy] (+8.3% damage and +4.9% mana recovery per stack, max 4), and banks a [Candy Bag] on Mila; at 8 bags she triggers [Full Load]: team mana +1, ATK +83.3%, and Ultimate damage +41.7% for 5 seconds (mana recovery limited to 3 times per battle). Her Ultimate [A hundred ghosts travel together] deals 588.9% ATK chaos damage to all enemies, marks everything for 8 seconds, grants 4 instant bags, and gives the whole team [Halloween Night] (Ultimate damage +78.3%, all resistance penetration +18.1% for 6 seconds). [Trick or Treat] additionally shields any ally struck by a marked enemy for 11.8% of Mila's Max HP. Her combo skill gives all allies Max HP +15%, Ultimate damage +15% and received shields +20%, amplified by 50% for every 1,300 ATK Mila has at battle start (up to +150% extra).",
    skillPriority: [
      {
        skill: "Ultimate: A hundred ghosts travel together, begging for candy from house to house!",
        priority: 1,
        level: "Level 14",
        reason: "588.9% ATK AoE that marks EVERY enemy for 8 seconds, refills 4 [Candy Bag] and hands the team [Halloween Night] (+78.3% Ultimate damage, +18.1% all penetration). Only 3 Energy",
        description: "Energy Cost: 3\nCooldown: 3.0s\nDeals 588.9% attack power chaos damage to all enemies, inflicting the [Candy Master] buff for 8 seconds.\nImmediately gains 4 stacks of [Candy Bag]. The entire team gains [Halloween Night] for 6 seconds: Ultimate skill damage increased by 78.3%, all resistance penetration increased by 18.1%. Buffs of the same name cannot be stacked; repeated acquisition refreshes the duration."
      },
      {
        skill: "Passive: The candy bag is full!",
        priority: 2,
        level: "Level 14",
        reason: "The engine: allies hitting marked enemies heal, stack [Begged Candy], and fill her [Candy Bag] toward [Full Load] (team mana +1, ATK +83.3%, Ultimate damage +41.7%). [Trick or Treat] converts enemy hits into 11.8% Max HP shields",
        description: "When an ally attacks an enemy with [Candy Master], the attacker heals for 4.9% of their own Max HP, gains 1 [Begged Candy] for 10s, and Mila gains 1 [Candy Bag]. Once every 2s per ally; hitting multiple marked enemies with one attack still triggers once.\nEach [Begged Candy] grants damage dealt +8.3% and mana recovery speed +4.9%, up to 4 stacks.\nAt 8 [Candy Bag] stacks, consumes 8 to trigger [Full Load]: team mana +1, ATK +83.3%, Ultimate damage +41.7% for 5s. Once every 6s. Mana recovery is limited to 3 times per battle; subsequent activations still consume candy and grant the damage buffs.\n[Trick or Treat]: When an enemy with [Candy Master] hits an ally, that ally gains a shield equal to 11.8% of Mila's Max HP after that hit's damage is resolved. Once every 6s per ally. Also triggers when the hit deals 0 damage."
      },
      {
        skill: "Auto Skill: I'm asking you for candy tonight!",
        priority: 3,
        level: "Level 14",
        reason: "466.7% ATK nuke on the highest-ATK enemy with a refreshed [Candy Master] (DEF -23.6%, damage taken +21.6%). It removes the scariest unit's tankiness on demand",
        description: "Cooldown: 8.0s\nDeals 466.7% attack power chaos damage to the enemy with the highest attack power, and inflicts the [Candy Master] debuff for 10 seconds: Defense reduced by 23.6%, damage taken increased by 21.6%.\nAt the start of battle, automatically inflicts the [Candy Master] debuff on the enemy with the highest attack power for 8 seconds. The debuff cannot be stacked; repeated use refreshes the duration."
      },
      {
        skill: "Normal Attack: Pumpkin knocks on the door",
        priority: 4,
        level: "Level 14",
        reason: "120% ATK single-target filler. Cheap attacks still feed nothing extra by themselves; keep it capped last",
        description: "Cooldown: 2.0s\nDeals chaos damage equal to 120% ATK to the nearest enemy."
      }
    ],
    recommendedMemoryCards: [
      {
        name: "Spooky Soup",
        effect: "Exclusive card: Max HP +40% at max awaken, and when the wearer hits an enemy with a debuff using a skill or ultimate, the entire team gains Sweet Aftertaste: damage +24%, Ultimate damage +20%, and a shield equal to 20% of the wearer's Max HP.",
        priority: "Must Have",
        note: "Her signature card, and it self-triggers: [Candy Master] is always on the field, so every Skill and Ultimate hands the team the Sweet Aftertaste proc and another shield layer.",
        characterSpecific: true,
        memoryImage: "spooky-soup.png",
        memoryStats: {
          hp: "6,000",
          attack: "600",
          defense: "600"
        }
      },
      {
        name: "Bath Time",
        effect: "Increases the ATK and DEF of all allies by 32%, and each time the wearer uses a skill, the Max HP of all allies increases.",
        priority: "Great",
        note: "Front-loads team stats on a unit that casts constantly; the Max HP rider stacks with [Trick or Treat] shielding.",
        characterSpecific: false,
        memoryImage: "Sharincard.png",
        memoryStats: {
          hp: "6,000",
          attack: "600",
          defense: "600"
        }
      },
      {
        name: "Awkward Appearance",
        effect: "At the start of battle, all allied characters' damage increases by 40%, with Normal Attack damage additionally increased.",
        priority: "Good",
        note: "Battle-start team damage amp: lands before the first [Full Load] window.",
        characterSpecific: false,
        memoryImage: "Athenacard.jpg",
        memoryStats: {
          hp: "6,000",
          attack: "600",
          defense: "600"
        }
      }
    ],
    runes: {
      primary: "Attack %",
      secondary: "HP %",
      stats: [
        "Attack %"
      ],
      additionalStats: [
        "HP %",
        "Defense %"
      ],
      buildNote: "Harmonia was made for her: the 4-piece gives +50% ATK that decays 5% every 5 seconds, but her combo skill snapshots ATK at battle start (every 1,300 ATK = +50% of the base team bonuses, up to +150% extra), so the decay never touches the snapshot, and the Supporter rider transfers 10% of current ATK to the strongest ally at battle start anyway. [Trick or Treat] shields scale off her Max HP, which is what the HP% secondaries are for. Alpha 2-piece adds flat ATK on top.",
      recommendedSets: [
        {
          name: "Harmonia 4-piece + Alpha 2-piece",
          englishName: "Harmonia 4-piece + Alpha 2-piece",
          mainRune: "Harmonia",
          secondaryRune: "Alpha",
          description: "+58% battle-start ATK for the combo-skill snapshot plus the 10% ATK transfer: the team-amp set."
        }
      ],
      alternativeSets: [
        {
          name: "Harmonia 4-piece + Zane 2-piece",
          englishName: "Harmonia 4-piece + Zane 2-piece",
          mainRune: "Harmonia",
          secondaryRune: "Zane",
          description: "If she is taking hits: 8% HP raises every [Trick or Treat] shield and the Max HP line of her combo skill."
        },
        {
          threeSets: ["Harmonia", "Alpha", "Zane"],
          description: "16% ATK and 8% HP with no conditions: split between the snapshot and shield weight."
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
        description: "ATK% feeds the battle-start combo-skill snapshot (every 1,300 ATK = +50% of the base team bonuses)."
      },
      "5": {
        name: "Position 5: Variable Main Stats",
        recommendedStat: "Chaos Attribute Damage (%)",
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
        description: "Her Skill and Ultimate deal real chaos damage (466.7% / 588.9% ATK); HP (%) here is fine for a pure support build."
      },
      "6": {
        name: "Position 6: Variable Main Stats",
        recommendedStat: "HP (%)",
        availableStats: [
          "Attack (%)",
          "HP (%)",
          "Defense (%)"
        ],
        description: "HP% makes every [Trick or Treat] shield and the Max HP line bigger."
      }
    },
    awakenings: {
      priority: "A1 first: [Candy Master] is applied to ALL enemies for 8 seconds at battle start and she opens with 4 [Candy Bag], so the whole team is earning [Begged Candy] from the first hit and [Full Load] arrives a cycle early. A6 is the team-amp node ([Halloween Night] 6 to 8 seconds, [Full Load] ATK +83.3% to +90% at the final rank wording aside, Ultimate damage +41.7% to +45%). A4 nearly doubles the [Trick or Treat] shields (6%/10% to 10%/16%). A2 adds a 5th [Begged Candy] stack. A3/A5 raise skill levels by 2 and are dupe-gated.",
      keyMilestones: [
        {
          level: 1,
          effect: "At the start of battle, apply the [Candy Master] debuff to all enemies for 8 seconds, and Mila gains 4 stacks of [Candy Bag]. Once per battle.",
          importance: 1,
          importanceLabel: "Very Good"
        },
        {
          level: 2,
          effect: "[Begged Candy] max stacks increase from 4 to 5, and passive healing restores an additional 1% of the attacker's Max HP.",
          importance: 2,
          importanceLabel: "Good"
        },
        {
          level: 3,
          effect: "[Normal Attack], [Skill], [Ultimate] and [Passive] levels and level caps +2.",
          importance: 3,
          importanceLabel: "Mid"
        },
        {
          level: 4,
          effect: "[Trick or Treat] shield multiplier increased from 6%/10% to 10%/16%; per-ally trigger interval reduced from 6 seconds to 5 seconds.",
          importance: 2,
          importanceLabel: "Good"
        },
        {
          level: 5,
          effect: "[Normal Attack], [Skill], [Ultimate] and [Passive] levels and level caps +2.",
          importance: 3,
          importanceLabel: "Mid"
        },
        {
          level: 6,
          effect: "[Halloween Night] duration extended from 6 to 8 seconds, and the [Full Load] attack power boost rises to 90% with Ultimate damage +45% for 6 seconds. Energy recovery limit stays 3 times per battle.",
          importance: 1,
          importanceLabel: "Very Good"
        }
      ]
    },
    teamSkill: {
      name: "Combo Skill",
      description: "All allies gain Max HP +15%, Ultimate damage +15%, and received shield amount +20%. For every 1,300 ATK Mila has at battle start, these bonuses increase by 50% of their base values, up to an additional 150%. Requires 2 Safir or 2 Chaos characters."
    },
    teamSynergy: {
      goodWith: [
        "Suzuka Gozen",
        "Erika",
        "Veronica",
        "Hela",
        "Fenrir",
        "Shanna"
      ],
      note: "Her combo skill needs 2 Safir or 2 Chaos characters: Erika, Veronica or Shanna cover Safir, Hela covers Chaos. Suzuka Gozen is the showcase partner: [Candy Master] keeps debuffs on the field for Suzuka's card and [Mirror Fracture], allies swarming marked enemies bank [Resonance], and a Supporter Ultimate into [Divine Tidebreaker] is the season's flagship combo. Fenrir's denial and Mila's marks stack pressure on the highest-ATK enemy."
    }
  };
