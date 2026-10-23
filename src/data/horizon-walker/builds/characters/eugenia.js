// Eugenia Build Configuration - Horizon Walker
// Generated from the community build sheet (Envy, Liauw & Gamekee), see stigma set descriptions for details
export const EugeniaBuildConfig = {
  damageScaling: "Magic Attack",
  buildStrategyTitle: "Community Sheet Build (Eugenia)",
  recommendedStigma: "Reckoning of Sin",
  buildStrategy: [
    {
      title: "Weapon: Lumen Veritas",
      description: "The sheet's recommended weapon for this build. Main stats snapshot: Weapon Magic Attack Power 12.1 (77)",
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
      description: "Priority: 1. Max HP, then 2. Starting AP, then 3. AP Recovery.",
    },
  ],
  recommendedSubstats: [
    { stat: "Max HP", scale: '', priority: "Highest" },
    { stat: "Starting AP", scale: '', priority: "2nd" },
    { stat: "AP Recovery", scale: '', priority: "3rd" },
  ],
  substatsPriority: "1. Max HP -> 2. Starting AP -> 3. AP Recovery",
  traitsType: "Max HP",
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
      name: "Evil",
      effects: ["Immaterial Boost +8%"],
      priority: "Best",
    },
    {
      name: "Strange",
      effects: ["Immaterial Boost +6%"],
      priority: "Best",
    },
    {
      name: "Strict",
      effects: ["Combat Start AP +4", "Knockback Resistance -5"],
      priority: "Best",
    },
  ],
  traitRecommendation: "Overworked, Persistent, Efficient, Evil, Strange, Strict (top 6 from the sheet)",
  skillPriority: ["1. Skill 2: Flow Overdrive", "2. Skill 1: Energy Form Shift", "3. Passive 1: Efficient Reconfiguration", "4. Passive 2: Mark Modulation"],
};
