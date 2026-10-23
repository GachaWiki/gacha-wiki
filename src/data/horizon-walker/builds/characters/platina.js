// Platina Build Configuration - Horizon Walker
// Generated from the community build sheet (Envy, Liauw & Gamekee), see stigma set descriptions for details
export const PlatinaBuildConfig = {
  damageScaling: "Melee Attack",
  buildStrategyTitle: "Community Sheet Build (Platina)",
  recommendedStigma: "Lifebound",
  buildStrategy: [
    {
      title: "Weapon: The First Heart",
      description: "The sheet's recommended weapon for this build. Main stats snapshot: Weapon Melee Attack Power 12.1 (77)",
    },
    {
      title: "Stigma: Lifebound",
      description: "Set 2: Increases Max HP by 10% during battle. Set 4: When hit or healed, gain 5% to All ATK and 10% to both Crush and Slash Boost. Stacks up to 5 times.",
    },
    {
      title: "Early game: Reckoning of Sin",
      description: "Set 2: Increases AP Recovery by 4% during combat. Set 4: At the start of combat gain 30 AP. On successful hit, inflict [Price of Sin] on the target. [Price of Sin]: Reduces Elements DEF by 200. The effect ends when the target is hit.",
    },
    {
      title: "Substats",
      description: "Priority: 1. Max HP, then 2. AP Recovery, then 3. Melee Attack.",
    },
    {
      title: "Demi-God",
      description: "Born from the gaps between dimensions, Platina is one of the \"Dimension Guardians,\" a metallic lifeform created within these interdimensional fissures. Among these guardians, Platina stands out, adorned in unique platinum armor, and she is convinced that her birth with such a noble color is for a sp",
    },
  ],
  recommendedSubstats: [
    { stat: "Max HP", scale: '', priority: "Highest" },
    { stat: "AP Recovery", scale: '', priority: "2nd" },
    { stat: "Melee Attack", scale: '', priority: "3rd" },
  ],
  substatsPriority: "1. Max HP -> 2. AP Recovery -> 3. Melee Attack",
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
      name: "Righteous",
      effects: ["All ATK +2%", "Max HP +2%"],
      priority: "Best",
    },
    {
      name: "Unyielding",
      effects: ["Knockback Resistance +10"],
      priority: "Best",
    },
    {
      name: "Bulletproof",
      effects: ["Pierce DEF +50"],
      priority: "Best",
    },
  ],
  traitRecommendation: "Overworked, Persistent, Efficient, Righteous, Unyielding, Bulletproof (top 6 from the sheet)",
  skillPriority: ["1. Passive: Heart of Platinum", "3. Skill 2: Gravity Fall", "4. Skill 1: Song of The Sword"],
};
