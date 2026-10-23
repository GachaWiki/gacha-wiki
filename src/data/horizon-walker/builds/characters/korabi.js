// Korabi Build Configuration - Horizon Walker
// Generated from the community build sheet (Envy, Liauw & Gamekee), see stigma set descriptions for details
export const KorabiBuildConfig = {
  damageScaling: "Magic Attack",
  buildStrategyTitle: "Community Sheet Build (Korabi)",
  recommendedStigma: "Reckoning of Sin",
  buildStrategy: [
    {
      title: "Weapon: Red Pudding",
      description: "The sheet's recommended weapon for this build. Main stats snapshot: Weapon Magic Attack Power 13.2 (84)",
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
      description: "Priority: 1. Crit Damage (Min 200%), then 2. Magic ATK, then 3. AP Recovery.",
    },
  ],
  recommendedSubstats: [
    { stat: "Crit Damage (Min 200%)", scale: '', priority: "Highest" },
    { stat: "Magic ATK", scale: '', priority: "2nd" },
    { stat: "AP Recovery", scale: '', priority: "3rd" },
  ],
  substatsPriority: "1. Crit Damage (Min 200%) -> 2. Magic ATK -> 3. AP Recovery",
  traitsType: "Crit Damage (Min 200%)",
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
      name: "(Flex)",
      effects: ["Anything is fine like more Magic ATK / AP recovery / Slash Boost (if you use the Mix set skip this)"],
      priority: "Best",
    },
    {
      name: "(Flex)",
      effects: ["Anything is fine like more Magic ATK / AP recovery / Slash Boost (if you use the Mix set skip this)"],
      priority: "Best",
    },
  ],
  traitRecommendation: "Overworked, Persistent, Efficient, Improvising, (Flex), (Flex) (top 6 from the sheet)",
  skillPriority: ["1. Skill 2: Blood Pact", "2. Passive 2: Crimson Curse", "3. Skill 3: Wave of Blood", "4. Skill 4: Whirlwind of Bloodlust", "5. Passive 1: Counterwave"],
};
