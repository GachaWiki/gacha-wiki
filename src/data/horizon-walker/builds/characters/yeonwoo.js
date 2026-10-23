// Yeonwoo Build Configuration - Horizon Walker
// Generated from the community build sheet (Envy, Liauw & Gamekee), see stigma set descriptions for details
export const YeonwooBuildConfig = {
  damageScaling: "Magic Attack",
  buildStrategyTitle: "Community Sheet Build (Yeonwoo)",
  recommendedStigma: "Lifebound",
  buildStrategy: [
    {
      title: "Weapon: The Everlasting Burger",
      description: "The sheet's recommended weapon for this build. Main stats snapshot: Weapon Magic Attack Power 12.1 (77)",
    },
    {
      title: "Stigma: Lifebound",
      description: "Set 2: Increases Max HP by 10% during battle. Set 4: When hit or healed, gain 5% to All ATK and 10% to both Crush and Slash Boost. Stacks up to 5 times.",
    },
    {
      title: "Early game: Jester's Mask",
      description: "Set 2: Increases Magic Attack power by 10% during combat. Set 4: During your turn, increases Skill DMG by 25%. Basic Attack grant 1 stack of [Jester's Quip] for 2 Rounds. - [Jesters Quip]: Increases Skill DMG and Magic ATK by 5%. Stacks up to 2 times.",
    },
    {
      title: "Substats",
      description: "Priority: 1. Max HP, then 2. Crit Damage, then 3. AP Recovery.",
    },
  ],
  recommendedSubstats: [
    { stat: "Max HP", scale: '', priority: "Highest" },
    { stat: "Crit Damage", scale: '', priority: "2nd" },
    { stat: "AP Recovery", scale: '', priority: "3rd" },
  ],
  substatsPriority: "1. Max HP -> 2. Crit Damage -> 3. AP Recovery",
  traitsType: "Max HP",
  recommendedTraits: [
    {
      name: "Sieging",
      effects: ["Crush Boost +8%"],
      priority: "Best",
    },
    {
      name: "Heavy",
      effects: ["Crush Boost +6%"],
      priority: "Best",
    },
    {
      name: "Desperate",
      effects: ["Critical DMG +15%", "Critical Rate -5%"],
      priority: "Best",
    },
    {
      name: "Doom",
      effects: ["Critical DMG +12%", "Max HP -3%"],
      priority: "Best",
    },
    {
      name: "Persistent",
      effects: ["AP Recovery +4%", "Starting AP -5"],
      priority: "Best",
    },
    {
      name: "(Flex)",
      effects: ["Anything is fine like more AP / Critical DMG"],
      priority: "Best",
    },
  ],
  traitRecommendation: "Sieging, Heavy, Desperate, Doom, Persistent, (Flex) (top 6 from the sheet)",
  skillPriority: ["1. Skill 3: Avatar of Gluttony", "2. Passive 2: All Fueled Up!", "3. Skill 2: One for the Road?", "4. Skill 1: Leaping Chomp!", "6. Passive 1: Snack Time"],
};
