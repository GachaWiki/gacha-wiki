// Griselda Build Configuration - Horizon Walker
// Generated from the community build sheet (Envy, Liauw & Gamekee), see stigma set descriptions for details
export const GriseldaBuildConfig = {
  damageScaling: "Melee Attack",
  buildStrategyTitle: "Community Sheet Build (Griselda)",
  recommendedStigma: "Reckoning of Sin",
  buildStrategy: [
    {
      title: "Weapon: The Eye of Cosmos",
      description: "The sheet's recommended weapon for this build. Main stats snapshot: Weapon Melee Attack Power 12.1 (77)",
    },
    {
      title: "Stigma: Reckoning of Sin",
      description: "Set 2: Increases AP Recovery by 4% during combat. Set 4: At the start of combat gain 30 AP. On successful hit, inflict [Price of Sin] on the target. [Price of Sin]: Reduces Elements DEF by 200. The effect ends when the target is hit.",
    },
    {
      title: "Early game: Reckoning of Sin",
      description: "Set 2: Increases AP Recovery by 4% during combat. Set 4: At the start of combat gain 30 AP. On successful hit, inflict [Price of Sin] on the target. [Price of Sin]: Reduces Elements DEF by 200. The effect ends when the target is hit.",
    },
    {
      title: "Substats",
      description: "Priority: 1. AP Recovery, then 2. Magic Attack.",
    },
    {
      title: "Demi-God",
      description: "Birthday :",
    },
  ],
  recommendedSubstats: [
    { stat: "AP Recovery", scale: '', priority: "Highest" },
    { stat: "Magic Attack", scale: '', priority: "2nd" },
  ],
  substatsPriority: "1. AP Recovery -> 2. Magic Attack",
  traitsType: "AP Recovery",
  recommendedTraits: [
    {
      name: "Overworked",
      effects: ["AP Recovery +4%", "Max HP -5%"],
      priority: "Best",
    },
    {
      name: "Persistent",
      effects: ["AP Recovery +4%", "Combat Start AP -5"],
      priority: "Best",
    },
    {
      name: "Efficient",
      effects: ["AP Recovery +3%", "Immaterial Defense -50"],
      priority: "Best",
    },
    {
      name: "Improvising",
      effects: ["AP Recovery +3%", "Combat Start AP -3"],
      priority: "Best",
    },
    {
      name: "Rational",
      effects: ["Magic ATK +6%", "Critical Chance -2%"],
      priority: "Best",
    },
    {
      name: "Mysterious",
      effects: ["Magic ATK +5%"],
      priority: "Best",
    },
    {
      name: "Acute",
      effects: ["Slash Boost +8%"],
      priority: "Alternative",
    },
    {
      name: "Sharp",
      effects: ["Slash Boost +6%"],
      priority: "Alternative",
    },
  ],
  traitRecommendation: "Overworked, Persistent, Efficient, Improvising, Rational, Mysterious (top 6 from the sheet)",
  skillPriority: ["1. Passive 3: Reversal of Causality", "2. Skill 1: Undefined Space", "3. Skill 2: Quantum Singularity", "4. Passive 1: Arcane Purge", "6. Passive 2: Certain Fortune"],
};
