// Valeta Build Configuration - Horizon Walker
// Generated from the community build sheet (Envy, Liauw & Gamekee), see stigma set descriptions for details
export const ValetaBuildConfig = {
  damageScaling: "Magic Attack",
  buildStrategyTitle: "Community Sheet Build (Valeta)",
  recommendedStigma: "Reckoning of Sin",
  buildStrategy: [
    {
      title: "Weapon: The Bloody Acacia",
      description: "The sheet's recommended weapon for this build. Main stats snapshot: Weapon Magic Attack Power 14.3 (91)",
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
      description: "Priority: 1. Magic Attack, then 2. AP Recovery.",
    },
  ],
  recommendedSubstats: [
    { stat: "Magic Attack", scale: '', priority: "Highest" },
    { stat: "AP Recovery", scale: '', priority: "2nd" },
  ],
  substatsPriority: "1. Magic Attack -> 2. AP Recovery",
  traitsType: "Magic Attack",
  recommendedTraits: [
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
      name: "Enlightened",
      effects: ["Elemental Boost +5%"],
      priority: "Best",
    },
    {
      name: "Rational",
      effects: ["Magic ATK +6%", "Critical Rate -2%"],
      priority: "Best",
    },
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
      name: "Overworked",
      effects: ["AP Recovery +4%", "Max HP -5%"],
      priority: "Alternative",
    },
    {
      name: "Persistent",
      effects: ["AP Recovery +4%", "Combat Start AP -5"],
      priority: "Alternative",
    },
  ],
  traitRecommendation: "Evil, Strange, Enlightened, Rational, Overworked, Persistent (top 6 from the sheet)",
  skillPriority: ["1. Skill 2: Dark Sacrament", "2. Passive 2: Exorcist's Crusade", "3. Passive 1: Light in The Darkness", "4. Skill 1: Sword of The Unknown"],
};
