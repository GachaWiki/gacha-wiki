// Mirana Build Configuration - Horizon Walker
// Generated from the community build sheet (Envy, Liauw & Gamekee), see stigma set descriptions for details
export const MiranaBuildConfig = {
  damageScaling: "Melee Attack",
  buildStrategyTitle: "Community Sheet Build (Mirana)",
  recommendedStigma: "Mix",
  buildStrategy: [
    {
      title: "Weapon: Chrysaor",
      description: "The sheet's recommended weapon for this build. Main stats snapshot: Weapon Melee Attack Power 11.0 (70) Weapon Magic Attack Power 11.0 (70)",
    },
    {
      title: "Stigma: Mix",
      description: "Top & Left: Jester's Mask Bottom & Right: Jupiter Set 2: Increases Magic Attack power by 10% during combat. Set 2: Increases Elemental Boost by 6% during combat.",
    },
    {
      title: "Early game: Jester's Mask",
      description: "Set 2: Increases Magic Attack power by 10% during combat. Set 4: During your turn, increases Skill DMG by 25%. Basic Attack grant 1 stack of [Jester's Quip] for 2 Rounds. - [Jesters Quip]: Increases Skill DMG and Magic ATK by 5%. Stacks up to 2 times.",
    },
    {
      title: "Substats",
      description: "Priority: 1. Magic ATK, then 2. Mov Speed.",
    },
  ],
  recommendedSubstats: [
    { stat: "Magic ATK", scale: '', priority: "Highest" },
    { stat: "Mov Speed", scale: '', priority: "2nd" },
  ],
  substatsPriority: "1. Magic ATK -> 2. Mov Speed",
  traitsType: "Magic ATK",
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
  ],
  traitRecommendation: "Evil, Strange, Enlightened, Rational, Mysterious, Bright (top 6 from the sheet)",
  skillPriority: ["1. Skill 2: Shattered Trail of Light", "2. Skill 1: Radiant Distortion", "3. Passive: Master-Servant Bond"],
};
