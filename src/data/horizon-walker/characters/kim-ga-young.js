// Kim Ga-young Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
 validateCharacterData,
 sanitizeCharacterData,
 sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawKimGaYoungData = {
 // Basic Character Information
 name: 'Kim Ga-young',
 image: 'kim_Ga_young', // Character image filename without extension
 rarity: 'S', // EX, SS, S, A, B
 cost: 3, // Deployment cost
 tags: [
  'Archer',
  'Sniper',
  'Ranged DPS',
  'Pierce Damage',
  'Stealth',
  'Support Fire',
  'Drone User',
  'Wire Maneuver',
  'Government Agent',
  'Scout',
  'Critical Damage',
  'High Technic',
  'Human',
  'Mobility',
  'Stealth Detection',
 ], // Character role tags

 // Character Stats (Level 60)
 stats: {
  // Basic Stats
  strength: '7',
  technic: '19',
  intelligence: '9',
  vitality: '9',
  agility: '10',

  // Key Stats
  meleeAtk: '76',
  rangedAtk: '230',
  magicAtk: '102',
  maxHp: '448',
  spd: '88',
  startingAp: '122',
  apRecovery: '109',
  accuracy: '102',
  evade: '102',
  critRate: '10',
  critDmg: '150',

  // Attribute Boost
  slashBoost: '0',
  pierceBoost: '0',
  crushBoost: '0',
  heatBoost: '0',
  coldBoost: '0',
  electricBoost: '0',
  immaterialBoost: '0',
  poisonBoost: '0',

  // Attribute Defense
  slashDef: '0',
  pierceDef: '0',
  crushDef: '0',
  heatDef: '0',
  coldDef: '0',
  electricDef: '0',
  immaterialDef: '0',
  poisonDef: '0',
  blockRate: '0',
 },

 // Character Description
 description:
  'An inspired young government scout who idolizes Yeon Chae-young and supports operations with drone reconnaissance and sniper fire.',

 // Character Profile
 profile: {
  age: '23',
  racial: 'Human (Earth)',
  homeland: 'East Asia Federation, Yeongwol',
  height: '160cm',
  birthday: 'October 10th',
  bwhRatio: '72(C)-46-87',
 },

 // Character Story
 story:
  "Kim Ga-young was an ordinary girl who lived her life as naturally as water flows. Though her academic performance was always outstanding, she simply followed what others told her to do, eventually getting into a prestigious university. One day, by chance, she witnessed Yeon Chae-young commanding a Rift site—a scene that left a deep impression on her, especially seeing a woman take charge so confidently. It was a defining moment for Ga-young: she had found her role model. Inspired by Yeon Chae-young, she decided that she wanted to become an impressive woman like her, and immediately began studying for the civil service examination. Given her talent for studying, she passed the exam with ease and applied to become an agent under Yeon Chae-young's lead. Though people around her expressed concerns, she remained determined for the first time in her life. Although she couldn't become a dedicated agent to the Human God like Yeon Chae-young, she managed to become a scout that supports them.",

 // Unique Traits
 uniqueTraits: {
  yeonChaeYoungFan: {
   name: "Yeon Chae-young Fan Club",
   description:
    "Formation Cost -1, Agility -2, Vitality -2, Strength -1, Technic -3, Intelligence -1",
  },
  droneScouting: {
   name: 'Drone Scouting',
   description:
    "On a successful attack, inflicts [Drone Scouting]. [Drone Scouting]: When Kim Ga-young attacks a target with [Drone Scouting], increases Final DMG by 50%. Stacks up to 5 times. When an ally attacks a target with [Drone Scouting], Kim Ga-young performs a Support Attack. [Drone Scouting] can only be applied to one enemy at a time. When Kim Ga-young attacks an enemy without [Drone Scouting], she loses all stacks of increased Final DMG.",
  },
  human: {
   name: 'Human',
   description: 'Technic 1, AP Recovery 4%',
  },
  interested: {
   name: 'Interested',
   description: 'Interested in the chosen Human. Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving.',
  },
 },

 // Weapon Information
 weapon: {
  name: "SS4 – Refitted Model",
  flavor: "Originally developed as a prototype rifle for top-tier Discover agents, this model has since been further modified by Kim Ga-young herself. In true Ga-young fashion - ever thorough and meticulous - she equipped the rifle with a variety of attachments. ensuring it could adapt to any environment or enemy encounter. As a result, the weapon ended up larger than expected… but thanks to her foresight, it now delivers peak performance no matter the situation.",
  type: "Rifle",
  rarity: 'EX',
  image: "Weapon_FullIMG_Rifle_ForKimGaYeong",
  imageOnR2: true,
  maxLevel: 60,
  stats: {
   "Ranged ATK (weapon)": "77",
   "Ranged ATK (%)": "+49%",
  },
  uniqueSkills: {
   unique: {
    name: "Calibration of Steel and Shot",
    type: 'Unique',
    description: "During battle, increases Ranged ATK by {20,25,30,35,40}%. When it is not this unit's turn, increases Ranged ATK by {40,50,60,70,80}%.",
   },
   signature: {
    name: "Kim Ga-young Signature: Upgrade!!!",
    type: 'Signature',
    description: "At the start of battle, inflicts [Drone Scouting] on all enemies. When performing a Support Attack, reduces the cooldown of \"Wire Maneuver Shot\" by 1R. At the end of a turn in which she attacks, enters Stealth for 3R. If the following General Traits are possessed, additionally gains the corresponding stats: Efficient: Crit DMG +100% Competent: Ranged ATK +30% Methodical: Support Attack DMG +30%",
   },
  },
  levelStats: {
   "Ranged ATK (weapon)": [12.1, 77.0],
   "Ranged ATK (%)": [7.7, 49.0],
  },
  exLevels: {
   effects: [
    { name: "During battle, increases Ranged ATK", valuesByLevel: "20% / 25% / 30% / 35% / 40%" },
    { name: "When it is not this unit's turn, increases Ranged ATK", valuesByLevel: "40% / 50% / 60% / 70% / 80%" },
   ],
  },
 },

 // Skills and Passive
 skills: {
  sniping: {
   gameKey: 'Sniping',
   icon: 'UI_SkillIcon_SniperRifle_BA',
   name: 'Sniping',
   level: '10/10',
   type: 'Skill',
   apCost: 60,
   cooldown: 0,
   damage: {
    type: 'Ranged ATK',
    value: '190%',
   },
   description:
    "Snipes an enemy with a rifle. Deals Pierce DMG equal to N% of Ranged ATK and makes the target Unable to Counterattack for 1 round. During this attack, own ACC temporarily decreases by 15%.",
  },
  supportFire: {
   gameKey: 'ShootingSupport',
   icon: 'UI_SkillIcon_ShootingSupport',
   name: 'Support Fire',
   level: '10/10',
   type: 'Passive',
   apCost: 0,
   cooldown: 0,
   description:
    "Gains 10 AP on each successful Support Counterattack or Support Attack.",
  },
  camouflage: {
   gameKey: 'Camouflage',
   icon: 'UI_SkillIcon_Camouflage',
   name: 'Camouflage',
   level: '10/10',
   type: 'Skill',
   apCost: 33,
   cooldown: 2,
   description:
    "Uses the drone's optical functions to conceal herself. Gains [Camouflage: Stealth] for 3R. - [Camouflage: Stealth]: Enters Stealth and cannot be targeted by enemy skills. While in Stealth, the first attack made has 100% Crit Rate and {3,6,9,12,15,18,21,24,27,30}% increased Crit DMG.",
  },
  wireManeuverShot: {
   gameKey: 'WireShot',
   icon: 'UI_SkillIcon_WireShot',
   name: 'Wire Maneuver Shot',
   level: '10/10',
   type: 'Skill',
   apCost: 90,
   cooldown: 0,
   damage: {
    type: 'Ranged ATK',
    value: '285%',
   },
   description:
    "Rapidly fires at the enemy, then uses the ultralight wires of all her drones to leap 5m behind the target. Deals Pierce DMG equal to N% of Ranged ATK to the enemy hit. After landing, gains [Camouflage: Stealth] for 3R. - [Camouflage: Stealth]: Enters Stealth and cannot be targeted by enemy skills. While in Stealth, the first attack made has 100% Crit Rate and {3,6,9,12,15,18,21,24,27,30}% increased Crit DMG.",
   note: 'Limited to 2 uses per battle',
  },
 },
 rarityStages: {
  'EX': {
   strength: 7,
   technic: 15,
   intelligence: 9,
   vitality: 8,
   agility: 9,
   maxHp: 384,
   meleeAtk: 76,
   rangedAtk: 179,
   magicAtk: 102,
   evade: 89,
   apRecovery: 106,
   startingAp: 119
  },
  'EX 1': {
   strength: 7,
   technic: 16,
   intelligence: 9,
   vitality: 8,
   agility: 9,
   maxHp: 384,
   meleeAtk: 76,
   rangedAtk: 192,
   magicAtk: 102,
   evade: 89,
   apRecovery: 106,
   startingAp: 119
  },
  'EX 2': {
   strength: 7,
   technic: 16,
   intelligence: 9,
   vitality: 8,
   agility: 10,
   maxHp: 384,
   meleeAtk: 76,
   rangedAtk: 192,
   magicAtk: 102,
   evade: 102,
   apRecovery: 109,
   startingAp: 122
  },
  'EX 3': {
   strength: 7,
   technic: 17,
   intelligence: 9,
   vitality: 8,
   agility: 10,
   maxHp: 384,
   meleeAtk: 76,
   rangedAtk: 204,
   magicAtk: 102,
   evade: 102,
   apRecovery: 109,
   startingAp: 122
  },
  'EX 4': {
   strength: 7,
   technic: 17,
   intelligence: 9,
   vitality: 9,
   agility: 10,
   maxHp: 448,
   meleeAtk: 76,
   rangedAtk: 204,
   magicAtk: 102,
   evade: 102,
   apRecovery: 109,
   startingAp: 122
  },
  'EX 5': {
   strength: 7,
   technic: 18,
   intelligence: 9,
   vitality: 9,
   agility: 10,
   maxHp: 448,
   meleeAtk: 76,
   rangedAtk: 217,
   magicAtk: 102,
   evade: 102,
   apRecovery: 109,
   startingAp: 122
  },
  'EX 6': {
   strength: 7,
   technic: 19,
   intelligence: 9,
   vitality: 9,
   agility: 10,
   maxHp: 448,
   meleeAtk: 76,
   rangedAtk: 230,
   magicAtk: 102,
   evade: 102,
   apRecovery: 109,
   startingAp: 122
  },
 },
 heroId: 30,

  rarityStages: {
    'EX': {
      strength: 7,
      technic: 15,
      intelligence: 9,
      vitality: 8,
      agility: 9,
      maxHp: 384,
      meleeAtk: 76,
      rangedAtk: 179,
      magicAtk: 102,
      evade: 89,
      apRecovery: 106,
      startingAp: 119
    },
    'EX 1': {
      strength: 7,
      technic: 16,
      intelligence: 9,
      vitality: 8,
      agility: 9,
      maxHp: 384,
      meleeAtk: 76,
      rangedAtk: 192,
      magicAtk: 102,
      evade: 89,
      apRecovery: 106,
      startingAp: 119
    },
    'EX 2': {
      strength: 7,
      technic: 16,
      intelligence: 9,
      vitality: 8,
      agility: 10,
      maxHp: 384,
      meleeAtk: 76,
      rangedAtk: 192,
      magicAtk: 102,
      evade: 102,
      apRecovery: 109,
      startingAp: 122
    },
    'EX 3': {
      strength: 7,
      technic: 17,
      intelligence: 9,
      vitality: 8,
      agility: 10,
      maxHp: 384,
      meleeAtk: 76,
      rangedAtk: 204,
      magicAtk: 102,
      evade: 102,
      apRecovery: 109,
      startingAp: 122
    },
    'EX 4': {
      strength: 7,
      technic: 17,
      intelligence: 9,
      vitality: 9,
      agility: 10,
      maxHp: 448,
      meleeAtk: 76,
      rangedAtk: 204,
      magicAtk: 102,
      evade: 102,
      apRecovery: 109,
      startingAp: 122
    },
    'EX 5': {
      strength: 7,
      technic: 18,
      intelligence: 9,
      vitality: 9,
      agility: 10,
      maxHp: 448,
      meleeAtk: 76,
      rangedAtk: 217,
      magicAtk: 102,
      evade: 102,
      apRecovery: 109,
      startingAp: 122
    },
    'EX 6': {
      strength: 7,
      technic: 19,
      intelligence: 9,
      vitality: 9,
      agility: 10,
      maxHp: 448,
      meleeAtk: 76,
      rangedAtk: 230,
      magicAtk: 102,
      evade: 102,
      apRecovery: 109,
      startingAp: 122
    },
  },
};

// Validate and sanitize the character data
const validation = validateCharacterData(rawKimGaYoungData);
if (!validation.isValid) {
 throw new Error(`Character data validation failed: ${validation.errors.join(', ')}`);
}

// Export sanitized character data
export const kimGaYoungData = sanitizeCharacterData(rawKimGaYoungData);

// Highlighting terms for this character - optimized to prevent ReDoS attacks
const rawHighlightPatterns = {
 damage: /\b(?:\d{1,3}%\s+of\s+\w{3,15}\s+ATK|\d{1,3}%\s+as\s+\w{3,15}\s+DMG|\w{3,15}\s+DMG)\b/gi,
 effects: /\[([^[\]]{1,150})]/g,
 buffsDebuffs:
  /\b(?:Yeon\s+Chae-young\s+Fan|Drone\s+Scouting|Drone\s+View|Reactive\s+Support:\s+Snipe|Camouflage:\s+Stealth|Wire\s+Maneuver\s+Shot|Unable\s+to\s+Counterattack|Support\s+Counterattack|optical\s+function|ultra-lightweight\s+wires|stealth\s+detection|attack\s+ranges|hidden\s+enemies)\b/gi,
 percentages: /\b(\d{1,3}%)\b/g,
 statChanges:
  /\b(?:reduces?|increases?|decreases?|gains?|vanishes?|detect|cancel)\s+(?:\w{1,15}\s+){0,5}by\s+(\d{1,3}%?)\b/gi,
 keywords:
  /\b(?:ordinary\s+girl|water\s+flows|outstanding|prestigious\s+university|Rift\s+site|commanding|role\s+model|civil\s+service\s+examination|determined|dedicated\s+agent|Human\s+God|scout|supports|drone|sniper|rifle|camouflage|wire\s+maneuver|East\s+Asia\s+Federation|Yeongwol|reconnaissance)\b/gi,
 attributes:
  /\b(?:AP|Ranged\s+ATK|Pierce|ACC|CRIT\s+rate|CRIT\s+DMG|Formation\s+Cost|Agility|Vitality|Strength|Technic|Intelligence|Attack\s+ranges|Support\s+Counterattack|Stealth)\b/gi,
};

// Export sanitized highlighting patterns
export const kimGaYoungHighlighting = sanitizeHighlightPatterns(rawHighlightPatterns);

// SEO metadata
export const kimGaYoungSEO = {
 title: 'Kim Ga-young - Horizon Walker Character Guide',
 description:
  'Complete guide for Kim Ga-young, an S rarity human sniper in Horizon Walker. Government scout with drone reconnaissance, stealth mechanics, and support fire capabilities.',
 keywords: [
  'Kim Ga-young',
  'Horizon Walker',
  'S rarity',
  'archer',
  'sniper',
  'human',
  'government agent',
  'scout',
  'drone user',
  'stealth',
  'wire maneuver',
  'support fire',
  'pierce damage',
  'guide',
  'stats',
  'build',
 ],
};
