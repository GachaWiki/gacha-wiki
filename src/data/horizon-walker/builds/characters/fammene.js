// Fammene Build Configuration - Horizon Walker
// Generated from the community build sheet (Envy, Liauw & Gamekee), see stigma set descriptions for details
export const FammeneBuildConfig = {
  damageScaling: "Magic Attack",
  buildStrategyTitle: "Community Sheet Build (Fammene)",
  recommendedStigma: "The Wind that Wanders the World",
  buildStrategy: [
    {
      title: "Weapon: The Anguished Rose",
      description: "The sheet's recommended weapon for this build. Main stats snapshot: Weapon Magic Attack Power 14.3 (91)",
    },
    {
      title: "Stigma: The Wind that Wanders the World",
      description: "Set 2: Increases Movement Speed by 10% during combat. Set 4: When HP is at 100%, increases AP Recovery by 20%.",
    },
    {
      title: "Early game: Reckoning of Sin",
      description: "Set 2: Increases AP Recovery by 4% during combat. Set 4: At the start of combat gain 30 AP. On successful hit, inflict [Price of Sin] on the target. [Price of Sin]: Reduces Elements DEF by 200. The effect ends when the target is hit.",
    },
    {
      title: "Substats",
      description: "Priority: 1. AP Recovery, then 2. Starting AP.",
    },
    {
      title: "Demi-God",
      description: "Height :",
    },
  ],
  recommendedSubstats: [
    { stat: "AP Recovery", scale: '', priority: "Highest" },
    { stat: "Starting AP", scale: '', priority: "2nd" },
  ],
  substatsPriority: "1. AP Recovery -> 2. Starting AP",
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
      name: "Mysterious",
      effects: ["Magic ATK +5%"],
      priority: "Best",
    },
    {
      name: "(Flex)",
      effects: ["Anything is fine like more AP recovery / Starting AP"],
      priority: "Best",
    },
    {
      name: "Blazing",
      effects: ["Heat Boost +8%"],
      priority: "Alternative",
    },
    {
      name: "Scorching",
      effects: ["Heat Boost +6%"],
      priority: "Alternative",
    },
  ],
  traitRecommendation: "Overworked, Persistent, Efficient, Improvising, Mysterious, (Flex) (top 6 from the sheet)",
  skillPriority: ["1. Skill 2: Monsoon", "2. Skill 1: Wind Shield", "3. Passive: Wind's Gathering"],
};
