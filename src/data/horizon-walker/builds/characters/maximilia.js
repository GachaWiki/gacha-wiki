// Maximilia Build Configuration - Horizon Walker
// Generated from the community build sheet (Envy, Liauw & Gamekee), see stigma set descriptions for details
export const MaximiliaBuildConfig = {
  damageScaling: "Melee Attack",
  buildStrategyTitle: "Community Sheet Build (Maximilia)",
  recommendedStigma: "Reckoning of Sin",
  buildStrategy: [
    {
      title: "Weapon: Kaiserstolz",
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
      description: "Priority: 1. Crit Rate, then 2. Melee Attack.",
    },
    {
      title: "Demi-God",
      description: "Homeland :",
    },
  ],
  recommendedSubstats: [
    { stat: "Crit Rate", scale: '', priority: "Highest" },
    { stat: "Melee Attack", scale: '', priority: "2nd" },
  ],
  substatsPriority: "1. Crit Rate -> 2. Melee Attack",
  traitsType: "Crit Rate",
  recommendedTraits: [
    {
      name: "Heaven Sent",
      effects: ["Critical Rate +5%"],
      priority: "Best",
    },
    {
      name: "Fortunate",
      effects: ["Critical Rate +4%"],
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
      name: "Righteous",
      effects: ["All ATK +2%", "Max HP +2%"],
      priority: "Best",
    },
    {
      name: "Durable",
      effects: ["All Physical DEF +20"],
      priority: "Best",
    },
  ],
  traitRecommendation: "Heaven Sent, Fortunate, Overworked, Persistent, Righteous, Durable (top 6 from the sheet)",
  skillPriority: ["1. Passive 1: Sunder Strike", "2. Passive 2: Sovereign’s Protection", "3. Skill 1: Guardian Barrier"],
};
