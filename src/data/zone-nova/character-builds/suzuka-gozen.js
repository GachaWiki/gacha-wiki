// Suzuka Gozen Build - Zone Nova Character Build
// SSR Holy Destroyer - Banner-Stacking Burst
// Editorial content hand-curated 2026-10-27; skill text matches the live character data (Lv.14).

export const suzukagozenBuild = {
    name: "Suzuka Gozen",
    role: "DPS",
    buildType: "Banner-Stacking Burst",
    description: "Suzuka Gozen is a Holy Destroyer who banks stacking banners and cashes them all in on one Ultimate. Every Normal Attack adds [Bow Draw] (Normal Attack cooldown -8% and damage +10% per stack, max 5, permanent), every Skill cast adds [Keen Eye] (Ultimate and Pursue damage +15% per stack, max 3), and her passive stocks [Imperial Bell] (from her own hits on [Tide Mark] enemies) and [Resonance] (from ALLIES hitting [Tide Mark] enemies). Casting [Divine Tidebreaker] with 2 [Resonance] first applies [Mirror Fracture] (Holy Resistance -27.6% for 6 seconds), and with 2 [Imperial Bell] the main hit upgrades from 751.1% to 901.1% ATK plus a 442.2% ATK Holy Pursue splash on every target and everything within 3 meters, with overlapping areas. Her Skill also strips one beneficial buff stack from every enemy hit, and her combo skill converts battle-start ATK (every 400 ATK = +3% damage taken by all enemies, up to 10 times) and Critical Rate (every 15% = +14% Critical Damage, up to 5 times) into team-wide amplification.",
    skillPriority: [
      {
        skill: "Ultimate: Divine Tidebreaker",
        priority: 1,
        level: "Level 14",
        reason: "The payoff: 901.1% ATK to all enemies when cast with 2 [Imperial Bell], plus overlapping 442.2% ATK Pursue splashes and [Mirror Fracture] Holy shred from 2 [Resonance]. Only 3 Energy",
        description: "Energy Cost: 3\nCooldown: 1.0s\nIf the wearer has 2 [Resonance] stacks, consumes both at Ultimate startup and applies [Mirror Fracture] to all enemies for 6 seconds before damage.\nDeals holy damage equal to 751.1% ATK to all enemies. If the wearer has 2 [Imperial Bell] stacks when casting the Ultimate, consumes both at startup and enhances this Ultimate's main damage to holy damage equal to 901.1% ATK, replacing the original main damage.\nFor each enemy hit by the enhanced Ultimate, deals one additional holy Pursue damage equal to 442.2% ATK to that enemy and enemies within 3 m of it. These areas can overlap, allowing the same enemy to take multiple Pursue hits. Pursue damages do not retrigger this effect."
      },
      {
        skill: "Passive: Imperial Bell Kagura",
        priority: 2,
        level: "Level 14",
        reason: "The engine: every hit on a [Tide Mark] enemy banks [Imperial Bell], every ALLY hit banks [Resonance]. Keeping [Tide Mark] on the field is what upgrades the Ultimate",
        description: "At the start of battle, gains 1 [Imperial Bell] stack. When Suzuka hits an enemy with [Tide Mark], gains 1 [Imperial Bell] stack, at most once every 3 seconds.\nWhen another ally hits an enemy with [Tide Mark], Suzuka gains 1 [Resonance] stack, at most once every 3 seconds per ally.\n[Imperial Bell]: Up to 2 stacks, lasts 12 seconds. Gaining another stack refreshes the duration.\n[Resonance]: Up to 2 stacks, lasts 8 seconds. Gaining another stack refreshes the duration.\n[Mirror Fracture]: Reduces holy Resistance by 27.6% for 6 seconds."
      },
      {
        skill: "Auto Skill: Sevenfold Tide Slash",
        priority: 3,
        level: "Level 14",
        reason: "531.1% ATK AoE that applies [Tide Mark] (feeds both passives), adds a [Keen Eye] stack, and removes 1 beneficial buff stack from every enemy hit",
        description: "Cooldown: 6.0s\nDeals holy damage equal to 531.1% ATK to all enemies and applies [Tide Mark] to each enemy hit for 8 seconds. [Tide Mark] does not stack. Also gains 1 [Keen Eye] stack, at most 1 stack per cast.\nAfter the skill hits, removes 1 stack from each beneficial buff on every enemy hit.\n[Keen Eye]: Each stack increases Ultimate and Pursue damage dealt by 15%. Up to 3 stacks, with no duration limit."
      },
      {
        skill: "Normal Attack: Divine Blade Sweep",
        priority: 4,
        level: "Level 14",
        reason: "93.3% ATK to ALL enemies per swing, and every swing permanently stacks [Bow Draw] (cooldown -8%, damage +10%, max 5). It is a real damage skill on her, keep it capped",
        description: "Cooldown: 2.0s\nDeals holy damage equal to 93.3% ATK to all enemies and gains 1 [Bow Draw] stack. Each Normal Attack grants only 1 stack.\n[Bow Draw]: Each stack reduces Normal Attack cooldown by 8% and increases Normal Attack damage dealt by 10%. Up to 5 stacks, with no duration limit. Can be dispelled."
      }
    ],
    recommendedMemoryCards: [
      {
        name: "Let's play with Suzuka",
        effect: "Exclusive card: ATK +60% and all damage +24% at max awaken, plus 24% Defense Penetration when attacking enemies with debuffs or control effects.",
        priority: "Must Have",
        note: "Her signature card. [Tide Mark] and [Mirror Fracture] keep debuffs on the field, so the Defense Penetration line is near-permanent.",
        characterSpecific: true,
        memoryImage: "lets-play-with-suzuka.png",
        memoryStats: {
          hp: "5,040",
          attack: "780",
          defense: "474"
        }
      },
      {
        name: "Night of Blood and Storm",
        effect: "ATK +40%, and after a team Supporter uses an ULT, the wearer's ULT damage increases by 40% for 5 seconds.",
        priority: "Great",
        note: "Pairs perfectly with the Supporter-into-Destroyer rhythm: a Supporter Ultimate right before hers adds 40% Ultimate damage on top of [Halloween Night]-style team buffs.",
        characterSpecific: false,
        memoryImage: "Night-of-Bloody-Storm.png",
        memoryStats: {
          hp: "5,040",
          attack: "780",
          defense: "474"
        }
      },
      {
        name: "A Dream of Peace",
        effect: "ATK +60% and Ultimate damage +50% at max awaken, with Ultimate penetration against enemy defenses.",
        priority: "Good",
        note: "The premium generic Destroyer card: flat amplification on the enhanced Ultimate nuke.",
        characterSpecific: false,
        memoryImage: "a-dream-of-peace.png",
        memoryStats: {
          hp: "5,040",
          attack: "780",
          defense: "474"
        }
      }
    ],
    runes: {
      primary: "Attack % / Holy Attribute Damage %",
      secondary: "Crit Rate %",
      stats: [
        "Attack %",
        "Holy Attribute Damage %"
      ],
      additionalStats: [
        "Crit Rate %",
        "Crit Damage %"
      ],
      buildNote: "Aether is her set: her whole kit deals Holy damage, so the 2-piece (+10% Holy damage) and 4-piece (+1% Holy damage and +0.5% penetration per hit, stacking to 20) ramp during the [Bow Draw] normal-attack spam and peak exactly when the enhanced Ultimate lands. Beth 2-piece adds Critical Rate, which her combo skill converts into Critical Damage (every 15% Crit Rate = +14% Crit Damage, up to 5 times). Her combo skill also converts ATK into enemy damage taken (every 400 ATK = +3%, up to 10 times), so ATK% mains raise both the hits and the amplification.",
      recommendedSets: [
        {
          name: "Aether 4-piece + Beth 2-piece",
          englishName: "Aether 4-piece + Beth 2-piece",
          mainRune: "Aether",
          secondaryRune: "Beth",
          description: "Holy damage stacking engine plus Crit Rate for the combo-skill conversion: the burst set."
        }
      ],
      alternativeSets: [
        {
          name: "Aether 4-piece + Alpha 2-piece",
          englishName: "Aether 4-piece + Alpha 2-piece",
          mainRune: "Aether",
          secondaryRune: "Alpha",
          description: "If Crit Rate is already covered by talents and supports: flat 8% ATK feeds the 400-ATK conversion."
        },
        {
          threeSets: ["Aether", "Beth", "Het"],
          description: "10% Holy damage, 6% Crit Rate and 20% Pursue Damage with no conditions: spreads value across the enhanced hit and its splashes."
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
        description: "ATK% scales every skill and the combo skill's damage-taken conversion (every 400 ATK = +3%)."
      },
      "5": {
        name: "Position 5: Variable Main Stats",
        recommendedStat: "Holy Attribute Damage (%)",
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
        description: "100% of her damage including the Pursue splashes is Holy."
      },
      "6": {
        name: "Position 6: Variable Main Stats",
        recommendedStat: "Attack (%)",
        availableStats: [
          "Attack (%)",
          "HP (%)",
          "Defense (%)"
        ],
        description: "Attack (%) again for the 400-ATK conversion; HP (%) if she keeps getting focused."
      }
    },
    awakenings: {
      priority: "A1 first: the first Ultimate after entering battle costs no energy and she starts with 2 [Imperial Bell], so the fully-enhanced 901.1% Ultimate arrives a full rotation early. A4 is the amplification node (+30% ATK, +30% Critical Damage, -30% enemies' Critical Resistance on entry, and allies feed [Resonance] every 2 seconds instead of 3). A6 adds 25% elemental resistance ignore. A2 extends [Resonance] to 12 seconds and doubles the buff-strip. A3/A5 raise skill levels by 2 and are dupe-gated.",
      keyMilestones: [
        {
          level: 1,
          effect: "The first Ultimate after entering battle costs no energy. At battle start, gains 2 [Imperial Bell] stacks instead of 1.",
          importance: 1,
          importanceLabel: "Very Good"
        },
        {
          level: 2,
          effect: "[Resonance] lasts 12 seconds instead of 8. After [Sevenfold Tide Slash] hits, removes 2 stacks instead of 1 from each beneficial buff on every enemy hit.",
          importance: 2,
          importanceLabel: "Good"
        },
        {
          level: 3,
          effect: "Normal Attack, Skill, Ultimate, and Passive levels each increase by 2.",
          importance: 3,
          importanceLabel: "Mid"
        },
        {
          level: 4,
          effect: "Increases own ATK by 30% and Critical Damage by 30%. On entering battle, reduces all enemies' Critical Resistance by 30% for 5 seconds. Reduces each teammate's cooldown for granting Suzuka [Resonance] from 3 seconds to 2 seconds.",
          importance: 1,
          importanceLabel: "Very Good"
        },
        {
          level: 5,
          effect: "Normal Attack, Skill, Ultimate, and Passive levels each increase by 2.",
          importance: 3,
          importanceLabel: "Mid"
        },
        {
          level: 6,
          effect: "When dealing damage, ignores 25% of the target's elemental resistance.",
          importance: 1,
          importanceLabel: "Very Good"
        }
      ]
    },
    teamSkill: {
      name: "Combo Skill",
      description: "At battle start, increases own ATK by 20%, Critical Rate by 10%, and Holy damage by 15%. For every full 400 ATK, all enemies take 3% more damage (max 10 stacks); for every full 15% Critical Rate, own Critical Damage +14% (max 5 stacks). Requires 2 Heikyo Castle or 2 Holy characters."
    },
    teamSynergy: {
      goodWith: [
        "Mila",
        "Tamamo-no-Mae",
        "Ootakemaru",
        "Brynhild",
        "Morgan Le Fay",
        "Shuten-doji"
      ],
      note: "Her combo skill needs 2 Heikyo Castle or 2 Holy characters: Tamamo-no-Mae, Ootakemaru or Shuten-doji cover Heikyo Castle, while Brynhild and Morgan Le Fay cover Holy. Mila is the rhythm partner: a Supporter Ultimate right before [Divine Tidebreaker] matches both the Supporter-into-Destroyer season rule and her own kit (allies hitting [Tide Mark] enemies is what banks [Resonance])."
    }
  };
