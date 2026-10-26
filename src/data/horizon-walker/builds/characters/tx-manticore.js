// TX - Manticore Build Configuration - Horizon Walker
// Generated from the community build sheet (Envy, Liauw & Gamekee), see stigma set descriptions for details
export const TXManticoreBuildConfig = {
  damageScaling: "Firing Attack",
  buildStrategyTitle: "Community Sheet Build (TX-Manticore)",
  recommendedStigma: "The Four Horsemen",
  buildStrategy: [
    {
      title: "Weapon: The Aegaeon Core",
      description: "The sheet's recommended weapon for this build. Main stats snapshot: Weapon Firing Attack Power 14.3 (91)",
    },
    {
      title: "Stigma: The Four Horseman",
      description: "Set 2: Increases Critical Damage by 20% during combat. Set 4: When using basic/normal attack, increases Critical Rate by 7% for 3 rounds. (Stacks up to 5 times).",
    },
    {
      title: "Early game: The Noble's Tactics",
      description: "Set 2: Increases Range Attack power by 9% during combat. Set 4: Increases Critical Rate by 20%. This effect is removed if the character moves.",
    },
    {
      title: "Substats",
      description: "Priority: 1. Crit Damage, then 2. Range Attack, then 3. Crit Rate.",
    },
    {
      title: "Demi-God",
      description: "Height :",
    },
  ],
  recommendedSubstats: [
    { stat: "Crit Damage", scale: '', priority: "Highest" },
    { stat: "Range Attack", scale: '', priority: "2nd" },
    { stat: "Crit Rate", scale: '', priority: "3rd" },
  ],
  substatsPriority: "1. Crit Damage -> 2. Range Attack -> 3. Crit Rate",
  traitsType: "Crit Damage",
  recommendedTraits: [
    {
      name: "Penetrating",
      effects: ["Pierce Boost +8%"],
      priority: "Best",
    },
    {
      name: "Pierching",
      effects: ["Pierce Boost +6%"],
      priority: "Best",
    },
    {
      name: "Doom",
      effects: ["Critical Damage +12%", "Max HP -3%"],
      priority: "Best",
    },
    {
      name: "Functional",
      effects: ["Range ATK +5%"],
      priority: "Best",
    },
    {
      name: "Barraging",
      effects: ["Range ATK +5%", "Accuracy -2%"],
      priority: "Best",
    },
    {
      name: "Dogmatic",
      effects: ["Critical Damage +8%"],
      priority: "Best",
    },
  ],
  traitRecommendation: "Penetrating, Pierching, Doom, Functional, Barraging, Dogmatic (top 6 from the sheet)",
  skillPriority: ["1. Passive 2: Airspace Radar", "2. Skill 1: Open Fire", "3. Passive 1: Tactical Clearing", "5. Skill 2: Delayed Bombardment"],
};
