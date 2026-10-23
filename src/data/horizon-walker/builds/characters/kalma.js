// Kalma Build Configuration - Horizon Walker
// Generated from the community build sheet (Envy, Liauw & Gamekee), see stigma set descriptions for details
export const KalmaBuildConfig = {
  damageScaling: "Magic Attack",
  buildStrategyTitle: "Community Sheet Build (Kalma)",
  recommendedStigma: "Jester's Mask",
  buildStrategy: [
    {
      title: "Weapon: Storm's Eye",
      description: "The sheet's recommended weapon for this build. Main stats snapshot: Weapon Magic Attack Power 16.5 (105)",
    },
    {
      title: "Stigma: Jester's Mask",
      description: "Set 2: Increases Magic Attack power by 10% during combat. Set 4: During your turn, increases Skill DMG by 25%. Basic Attack grant 1 stack of [Jester's Quip] for 2 Rounds. - [Jesters Quip]: Increases Skill DMG and Magic ATK by 5%. Stacks up to 2 times.",
    },
    {
      title: "Early game: Jester's Mask",
      description: "Set 2: Increases Magic Attack power by 10% during combat. Set 4: During your turn, increases Skill DMG by 25%. Basic Attack grant 1 stack of [Jester's Quip] for 2 Rounds. - [Jesters Quip]: Increases Skill DMG and Magic ATK by 5%. Stacks up to 2 times.",
    },
    {
      title: "Substats",
      description: "Priority: 1. Crit Rate (65%), then 2. Crit Damage, then 3. Magic ATK.",
    },
  ],
  recommendedSubstats: [
    { stat: "Crit Rate (65%)", scale: '', priority: "Highest" },
    { stat: "Crit Damage", scale: '', priority: "2nd" },
    { stat: "Magic ATK", scale: '', priority: "3rd" },
  ],
  substatsPriority: "1. Crit Rate (65%) -> 2. Crit Damage -> 3. Magic ATK",
  traitsType: "Crit Rate (65%)",
  recommendedTraits: [
    {
      name: "Thunderous",
      effects: ["Electric Boost +8%"],
      priority: "Best",
    },
    {
      name: "Tingling",
      effects: ["Electric Boost +6%"],
      priority: "Best",
    },
    {
      name: "Heaven Sent",
      effects: ["Critical Rate +5%"],
      priority: "Best",
    },
    {
      name: "Doom",
      effects: ["Critical Damage +12%", "Max HP -3%"],
      priority: "Best",
    },
    {
      name: "Dogmatic",
      effects: ["Critical Damage +8%"],
      priority: "Best",
    },
    {
      name: "Persistent",
      effects: ["AP Recovery +4%", "Combat Start AP -5"],
      priority: "Best",
    },
  ],
  traitRecommendation: "Thunderous, Tingling, Heaven Sent, Doom, Dogmatic, Persistent (top 6 from the sheet)",
  skillPriority: ["1. Skill 3: Raging Thunderstorm", "2. Skill 2: Lightning Cascade", "3. Skill 1: Bolt Chaser", "5. Passive 2: Flashbreak", "6. Passive 1: Charge Accumulation"],
};
