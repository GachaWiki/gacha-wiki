// Marika Build Configuration - Horizon Walker
// Generated from the community build sheet (Envy, Liauw & Gamekee), see stigma set descriptions for details
export const MarikaBuildConfig = {
  damageScaling: "Melee Attack",
  buildStrategyTitle: "Community Sheet Build (Marika)",
  recommendedStigma: "The Thousand Mile Weave",
  buildStrategy: [
    {
      title: "Weapon: Lamoran Spiraldrive",
      description: "The sheet's recommended weapon for this build. Main stats snapshot: Weapon Melee Attack Power 14.3 (77)",
    },
    {
      title: "Stigma: The Thousand Mile Weaver",
      description: "Set 2: Increases Melee Attack power by 10% during combat. Set 4: When hitting weakness of the target, increases Slash, Pierce, and Crush Boost by 40% each for that attack.",
    },
    {
      title: "Early game: Reckoning of Sin",
      description: "Set 2: Increases AP Recovery by 4% during combat. Set 4: At the start of combat gain 30 AP. On successful hit, inflict [Price of Sin] on the target. [Price of Sin]: Reduces Elements DEF by 200. The effect ends when the target is hit.",
    },
    {
      title: "Substats",
      description: "Priority: 1. Mov Speed, then 2. Melee Attack, then 3. Starting AP.",
    },
  ],
  recommendedSubstats: [
    { stat: "Mov Speed", scale: '', priority: "Highest" },
    { stat: "Melee Attack", scale: '', priority: "2nd" },
    { stat: "Starting AP", scale: '', priority: "3rd" },
  ],
  substatsPriority: "1. Mov Speed -> 2. Melee Attack -> 3. Starting AP",
  traitsType: "Mov Speed",
  recommendedTraits: [
    {
      name: "Penetrating",
      effects: ["Pierce Boost +8%"],
      priority: "Best",
    },
    {
      name: "Piercing",
      effects: ["Pierce Boost +6%"],
      priority: "Best",
    },
    {
      name: "Powerful",
      effects: ["Melee ATK +4%"],
      priority: "Best",
    },
    {
      name: "Swift",
      effects: ["Speed +3%"],
      priority: "Best",
    },
    {
      name: "Berserking",
      effects: ["Speed +6%", "Max HP -4%"],
      priority: "Best",
    },
    {
      name: "Ferocious",
      effects: ["Melee ATK +7%", "Max HP -5%"],
      priority: "Best",
    },
  ],
  traitRecommendation: "Penetrating, Piercing, Powerful, Swift, Berserking, Ferocious (top 6 from the sheet)",
  skillPriority: ["1. Passive 1: Swift Support", "2. Passive 2: Swift Destruction", "3. Skill 1: Bloodline Awakening"],
};
