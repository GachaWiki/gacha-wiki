// Kotoha Build Configuration - Horizon Walker
// Generated from the community build sheet (Envy, Liauw & Gamekee), see stigma set descriptions for details
export const KotohaBuildConfig = {
  damageScaling: "Magic Attack",
  buildStrategyTitle: "Community Sheet Build (Kotoha)",
  recommendedStigma: "Mix",
  buildStrategy: [
    {
      title: "Weapon: Fox Spirit's Guidance",
      description: "The sheet's recommended weapon for this build. Main stats snapshot: Weapon Magic Attack Power 12.1 (77)",
    },
    {
      title: "Stigma: Mix",
      description: "Top & Right: Jester's Mask Left: Blessing of Dawn Bottom: Reckoning of Sin Set 2: Increases Magic Attack power by 10% during combat.",
    },
    {
      title: "Early game: Reckoning of Sin",
      description: "Set 2: Increases AP Recovery by 4% during combat. Set 4: At the start of combat gain 30 AP. On successful hit, inflict [Price of Sin] on the target. [Price of Sin]: Reduces Elements DEF by 200. The effect ends when the target is hit.",
    },
    {
      title: "Substats",
      description: "Priority: 1. Magic ATK, then 2. Max HP.",
    },
  ],
  recommendedSubstats: [
    { stat: "Magic ATK", scale: '', priority: "Highest" },
    { stat: "Max HP", scale: '', priority: "2nd" },
  ],
  substatsPriority: "1. Magic ATK -> 2. Max HP",
  traitsType: "Magic ATK",
  recommendedTraits: [
    {
      name: "Rational",
      effects: ["Magic ATK +6%", "Crit Rate -2%"],
      priority: "Best",
    },
    {
      name: "Mysterious",
      effects: ["Magic ATK +5%"],
      priority: "Best",
    },
    {
      name: "Bright",
      effects: ["Magic ATK +4%"],
      priority: "Best",
    },
    {
      name: "Uncanny",
      effects: ["Magic ATK +4%", "Max HP -3%"],
      priority: "Best",
    },
    {
      name: "Intelligent",
      effects: ["Magic ATK +3%"],
      priority: "Best",
    },
    {
      name: "(Flex)",
      effects: ["AP / Magic ATK"],
      priority: "Best",
    },
  ],
  traitRecommendation: "Rational, Mysterious, Bright, Uncanny, Intelligent, (Flex) (top 6 from the sheet)",
  skillPriority: ["1. Skill 2: Art of Perfect Unity", "2. Skill 1: Offering of Life", "3. Passive 1: Kitsune's Footsteps", "4. Passive 2: Boundary Ward"],
};
