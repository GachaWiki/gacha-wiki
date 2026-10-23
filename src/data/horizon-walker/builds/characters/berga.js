// Berga Build Configuration - Horizon Walker
// Generated from the community build sheet (Envy, Liauw & Gamekee), see stigma set descriptions for details
export const BergaBuildConfig = {
  damageScaling: "Magic Attack",
  buildStrategyTitle: "Community Sheet Build (Berga)",
  recommendedStigma: "Harmony",
  buildStrategy: [
    {
      title: "Weapon: Crimson Veil Torturas",
      description: "The sheet's recommended weapon for this build. Main stats snapshot: Weapon Magic Attack Power 12.1 (77)",
    },
    {
      title: "Stigma: Harmony",
      description: "Set 2: Increases All Defense by 160 during combat. Set 4: Increases Melee ATK by 16% of base MAX HP during battle. If own HP drops below 40% from an enemy hit, gains 45 AP once per round.",
    },
    {
      title: "Early game: Harmony",
      description: "Set 2: Increases All Defense by 160 during combat. Set 4: Increases Melee ATK by 16% of base MAX HP during battle. If own HP drops below 40% from an enemy hit, gains 45 AP once per round.",
    },
    {
      title: "Substats",
      description: "Priority: 1. Crit Damage, then 2. Max HP, then 3. Crit Rate (60%).",
    },
  ],
  recommendedSubstats: [
    { stat: "Crit Damage", scale: '', priority: "Highest" },
    { stat: "Max HP", scale: '', priority: "2nd" },
    { stat: "Crit Rate (60%)", scale: '', priority: "3rd" },
  ],
  substatsPriority: "1. Crit Damage -> 2. Max HP -> 3. Crit Rate (60%)",
  traitsType: "Crit Damage",
  recommendedTraits: [
    {
      name: "Acute",
      effects: ["Slash Boost+8%"],
      priority: "Best",
    },
    {
      name: "Sharp",
      effects: ["Slash Boost +6%"],
      priority: "Best",
    },
    {
      name: "Desperate",
      effects: ["Critical Damage +15%", "Crit Rate -5%"],
      priority: "Best",
    },
    {
      name: "Aggressive",
      effects: ["Melee ATK +5%", "Accuracy -5%"],
      priority: "Best",
    },
    {
      name: "Strong",
      effects: ["Melee ATK +3%"],
      priority: "Best",
    },
    {
      name: "(Flex)",
      effects: ["Anything is fine like more Crit DMG / Melee ATK"],
      priority: "Best",
    },
    {
      name: "Venomous",
      effects: ["Poison Boost +8%"],
      priority: "Alternative",
    },
    {
      name: "Harsh",
      effects: ["Poison Boost +6%"],
      priority: "Alternative",
    },
  ],
  traitRecommendation: "Acute, Sharp, Desperate, Aggressive, Strong, (Flex) (top 6 from the sheet)",
  skillPriority: ["1. Passive 2: Oath of Punishment and Crushing", "3. Skill 1: Giant's Leap", "4. Passive 1: Adaptive Muscle", "5. Skill 2: Blade Storm"],
};
