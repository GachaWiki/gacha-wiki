// Nahema Build - Zone Nova Character Build
// SSR Fire Tank - Covenant Flame Anti-Heal Wall
// Editorial content hand-curated 2026-11-10; skill text matches the live character data (Lv.14).

export const nahemaBuild = {
    name: "Nahema",
    role: "Tank",
    buildType: "Covenant Flame Anti-Heal Wall",
    description: "Nahema is a Fire Tank who scales entirely off Defense and turns enemy healing into your team's fuel. Her passive opens the battle by handing every ally 3 stacks of [Covenant Flame] (damage taken -53% while held, each stack cuts the incoming attack's Defense Penetration by 35.3%, and every new stack shields the holder for 7.1% of their Max HP). Whenever an enemy RECEIVES healing or a new enemy enters, all allies replenish a stack: against healer teams the buff never falls off. Her Skill refills everyone to 3 stacks while dealing 328.9% DEF, and her Ultimate (DEF +100% team-wide, [Blazing Oath] makes the damage reduction 132% stronger and stops stacks being consumed) adds a 530% DEF frontal nuke. While any enemy has Immortality or Tenacity, allies holding [Covenant Flame] revive with 1 HP up to 3 times each per battle.",
    skillPriority: [
      {
        skill: "Passive: Covenant of Rebellion",
        priority: 1,
        level: "Level 14",
        reason: "The whole kit: opening 3 stacks for every ally, replenish on enemy heals, and the revive ceiling against Immortality/Tenacity bosses. Damage reduction scales from 27% to 53% with level",
        description: "Increases own Defense by 72%. At the start of battle, all allies gain 3 stacks of [Covenant Flame].\nWhen an enemy receives healing or a new enemy enters battle, replenishes 1 stack of [Covenant Flame] for all allies. Each of these two triggers can activate up to once every 3 seconds. Healing at full HP can also trigger this effect.\n\n[Covenant Flame]: Up to 3 stacks, lasting 10 seconds.\nWhile held, reduces damage taken by 53%, regardless of stack count. Each stack reduces the incoming attack's Defense Penetration Rate by 35.3%.\nEach newly added stack grants the holder a shield equal to 7.1% of their own Max HP. At max stacks, only the duration is refreshed.\nConsumes 1 stack after taking a hit, up to once every 1.5 seconds per ally.\n\nWhile any enemy has Immortality or Tenacity, an ally holding [Covenant Flame] revives with 1 HP upon death, retains their existing [Covenant Flame], and gains [Rekindled Embers] for 5 seconds. Up to 3 times per ally per battle.\n[Rekindled Embers]: Increases Neutralize Rate by 100% and Neutralize Damage Reduction by 100%. Taking hits does not consume [Covenant Flame].\n\n[Neutralize]: Chance to reduce DMG taken by 30%. Critical DMG ignores Neutralize."
      },
      {
        skill: "Ultimate: Wildfire of Rebellion",
        priority: 2,
        level: "Level 14",
        reason: "Team DEF +100% plus [Blazing Oath]: damage reduction becomes 132% of base and stacks stop being consumed for 4 seconds. The 530% DEF nuke grows to 530% at max rank. Only 3 Energy",
        description: "Energy Cost: 3\nCooldown: 4.0s\nIncreases all allies' Defense by 100% and grants [Blazing Oath] for 4 seconds.\nDeals fire damage equal to 530% of own Defense to enemies in an area in front.\n[Blazing Oath]: [Covenant Flame]'s damage reduction becomes 132% of its original value, and taking hits does not consume stacks."
      },
      {
        skill: "Auto Skill: Let the Show Begin",
        priority: 3,
        level: "Level 14",
        reason: "Refills EVERY ally to 3 stacks on a 6-second cooldown and deals 328.9% DEF on top: the upkeep button that keeps the wall up between triggers",
        description: "Cooldown: 6.0s\nReplenishes all allies' [Covenant Flame] to 3 stacks.\nDeals fire damage equal to 328.9% of own Defense to the targeted enemy."
      },
      {
        skill: "Normal Attack: Rebel Flame Slash",
        priority: 4,
        level: "Level 14",
        reason: "117.8% DEF single-target filler; cap it last",
        description: "Cooldown: 2.0s\nDeals fire damage equal to 117.8% of own Defense to the targeted enemy."
      }
    ],
    recommendedMemoryCards: [
      {
        name: "Crimson Invitation",
        effect: "Exclusive card: Defense +57% and Max HP +26% at max awaken. When an enemy receives healing, the wearer gains a shield equal to 71% of own Defense (3-second shared cooldown, also triggers at full HP).",
        priority: "Must Have",
        note: "Her signature card mirrors the passive: against sustain teams every enemy heal becomes a 71% DEF shield on her.",
        characterSpecific: true,
        memoryImage: "crimson-invitation.png",
        memoryStats: {
          hp: "6,600",
          attack: "480",
          defense: "690"
        }
      },
      {
        name: "Suspect in the Night",
        effect: "Increases Defense by 64%. When allied characters with a shield take damage, defense increases by 64%. After the wearer deals damage over time to an enemy, the target takes 15% increased damage.",
        priority: "Great",
        note: "[Covenant Flame] keeps shields on the whole team, so the shield-conditional DEF line is near-permanently active on everyone.",
        characterSpecific: false,
        memoryImage: "Thorcard.jpg",
        memoryStats: {
          hp: "6,600",
          attack: "480",
          defense: "690"
        }
      },
      {
        name: "Eating secretly in a cafe",
        effect: "Increases defense by 64%. After successfully neutralizing an attack, damage taken is reduced by 10% for 5 seconds. While holding a shield, damage taken is reduced by 18%.",
        priority: "Good",
        note: "She almost always holds a stack shield, so the 18% damage reduction line is effectively passive.",
        characterSpecific: false,
        memoryImage: "InTheCafeSneakingABite.png",
        memoryStats: {
          hp: "6,600",
          attack: "480",
          defense: "690"
        }
      }
    ],
    runes: {
      primary: "Defense %",
      secondary: "HP %",
      stats: [
        "Defense %"
      ],
      additionalStats: [
        "HP %",
        "Fire Attribute Damage %"
      ],
      buildNote: "Everything scales off Defense: her damage (117.8% to 530% DEF), the team-wide DEF +100% Ultimate, and her combo skill (+5% shield strength received per 500 DEF, max +30%). Poki 4-piece multiplies every shield she and her stacks hand out by a further 20%; Zane 2-piece raises the 7.1% Max HP stack shields.",
      recommendedSets: [
        {
          name: "Poki 4-piece + Zane 2-piece",
          englishName: "Poki 4-piece + Zane 2-piece",
          mainRune: "Poki",
          secondaryRune: "Zane",
          description: "DEF +12%, shield effect +20%, HP +8%: bigger DEF, bigger shields, tankier team."
        }
      ],
      alternativeSets: [
        {
          name: "Poki 4-piece + Kappa 2-piece",
          englishName: "Poki 4-piece + Kappa 2-piece",
          mainRune: "Poki",
          secondaryRune: "Kappa",
          description: "Second DEF +12% 2-piece if she dies too fast to matter; 24% total DEF."
        },
        {
          threeSets: ["Poki", "Zane", "Kappa"],
          description: "12% DEF, 8% HP and 12% DEF split: maximum stat density with no 4-piece shield bonus."
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
        recommendedStat: "Defense (%)",
        availableStats: [
          "Healing Effectiveness (%)",
          "Critical Rate (%)",
          "Critical Damage (%)",
          "Attack Penetration (%)",
          "Attack (%)",
          "HP (%)",
          "Defense (%)"
        ],
        description: "DEF% feeds every skill multiplier and the combo skill's shield scaling (every 500 DEF = +5% shields received)."
      },
      "5": {
        name: "Position 5: Variable Main Stats",
        recommendedStat: "Defense (%)",
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
        description: "DEF% default; Fire Attribute Damage% if you want her nukes to hit harder."
      },
      "6": {
        name: "Position 6: Variable Main Stats",
        recommendedStat: "Defense (%)",
        availableStats: [
          "Attack (%)",
          "HP (%)",
          "Defense (%)"
        ],
        description: "More DEF or HP% for the stack shields; never ATK% on a pure tank build."
      }
    },
    awakenings: {
      priority: "A2 first: each [Covenant Flame] stack adds 13% All Elemental Resistance and Nahema replenishes her own stack when another ally takes a hit, keeping her wall online even with no enemy healing. A1 (+2 opening Energy) gets her Ultimate a cycle earlier. A6 ([Rebellious Fervor]: -10pp damage bonus on attacks, -25pp on Ultimates and Pursues team-wide for 3s whenever she is hit) is the biggest late spike. A4 ([Archduke's Protection] DEF +120% on the lowest-HP ally per Skill cast) is strong in heavy-sustain comps. A3/A5 raise skill levels by 2 and are dupe-gated.",
      keyMilestones: [
        {
          level: 1,
          effect: "Gains 2 Energy at the start of battle.",
          importance: 2,
          importanceLabel: "Good"
        },
        {
          level: 2,
          effect: "Each stack of [Covenant Flame] increases the holder's All Elemental Resistance by 13%. When another ally takes a hit, Nahema replenishes 1 stack of [Covenant Flame] for herself, up to once every 3 seconds.",
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
          effect: "When casting a Skill, grants [Archduke's Protection] to the 1 other ally with the lowest HP percentage for 4 seconds. [Archduke's Protection]: Increases Defense by 120%. Does not stack.",
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
          effect: "After Nahema takes a hit, or when an enemy starts casting an Ultimate Skill, all allies gain [Rebellious Fervor] for 3 seconds. Both triggers share a 6-second cooldown. [Rebellious Fervor]: When the holder is attacked, reduces that attack's damage bonus by 10 percentage points (25 for Ultimate and Pursue attacks).",
          importance: 1,
          importanceLabel: "Very Good"
        }
      ]
    },
    teamSkill: {
      name: "Combo Skill",
      description: "Increases own Defense by 20%. At the start of battle, every 500 Defense increases the strength of shields received by 5%, up to 6 times. Requires 2 Bikta or 2 Fire characters."
    },
    teamSynergy: {
      goodWith: [
        "Suzuka Gozen",
        "Mila",
        "Bors",
        "Hela",
        "Fenrir"
      ],
      note: "Her combo skill needs 2 Bikta or 2 Fire characters: Wrath-Samael, Pride-Lucifer or any Fire carry covers it. She slots into almost any team as the anti-heal wall: Fenrir's denial plus the replenish-on-heal passive chokes sustain comps completely, and Mila's marks keep enemies debuffed while Nahema keeps everyone shielded. Against Immortality/Tenacity bosses her revive ceiling (3 per ally) carries progression walls."
    }
  };
