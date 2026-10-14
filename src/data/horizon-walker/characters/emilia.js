// Emilia Character Data - Horizon Walker
// Based on the Zone Nova character data structure
import {
  validateCharacterData,
  sanitizeCharacterData,
  sanitizeHighlightPatterns,
} from '../../../utils/horizon-walker/data-validation.js';

const rawEmiliaData = {
  // Basic Character Information
  name: 'Emilia',
  image: 'Emilia', // Character image filename
  rarity: 'EX', // EX, SS, S, A, B
  cost: 5, // Deployment cost
  tags: [
    'Healer',
    'Support',
    'Magic User',
    'HP Recovery',
    'Team Buffer',
    'AP Support',
    'Status Cleansing',
    'Field Medbay',
    'Medical Protocol',
    'Bureau of Rift Management',
    'Human (Noctis Nebula)',
    'Researcher',
    'Diagnosis Method',
    'Case Collection',
    'Modern Medicine',
    'Triage System',
    'Stimulus Response',
  ], // Character role tags

  // Character Stats (Level 60)
  stats: {
    // Basic Stats
    strength: '12',
    technic: '6',
    intelligence: '12',
    vitality: '13',
    agility: '10',

    // Key Stats
    meleeAtk: '64',
    rangedAtk: '-13',
    magicAtk: '223',
    maxHp: '448',
    spd: '84',
    startingAp: '111',
    apRecovery: '105',
    accuracy: '102',
    evade: '128',
    critRate: '8',
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
    'A brilliant medical researcher from the Bureau of Rift Management who combines cutting-edge medical technology with healing magic to support allies on the battlefield.',

  // Weapon Information
  weapon: {
    name: "Seryel: Medical Hammer",
    flavor: "Originally developed as an advanced field device to monitor vital signs and measure sacred energy responses, this tool was meant to serve strictly medical purposes. However, thanks to the overzealous craftsmanship of early BRM engineers, its internal frame ended up excessively reinforced - meticulously weighted and perfectly balanced. The result? A small medical device that, even before serving as a scanner, functions as a brutally effective blunt weapon and makeshift shield. Though unusable for clinical purposes by all but a select few, its built-in combat-assist functions alone make it a formidable asset on the battlefield.",
    type: "Club & Shield",
    rarity: 'EX',
    image: "Weapon_FullIMG_MaceAndShield_ForEmilia_MS",
    imageOnR2: true,
    maxLevel: 60,
    stats: {
      "Melee ATK (weapon)": "70",
      "Magic ATK (weapon)": "70",
      "Max HP (%)": "+49%",
    },
    uniqueSkills: {
      unique: {
        name: "Clinical Insight",
        type: 'Unique',
        description: "Decreases Aggro Adjustment by {16,18,20,22,24} and increases AP Recovery by {16,20,24,28,32}% during battle. At the start of the unit's turn, if Crit Rate is 48% or higher, increases Crit Rate by {32,40,48,56,64}% until the end of that turn.",
      },
      signature: {
        name: "Emilia Signature: Precision Treatment Protocol",
        type: 'Signature',
        description: "At the start of battle, gains AP equal to 200% of INT. When using any skill other than Standby, increases allies' Elemental Boost by an amount equal to 200% of the caster's INT for 2R.",
        note: "This signature skill only activates when Emilia equips this weapon.",
      },
    },
    levelStats: {
      "Melee ATK (weapon)": [11.0, 70.0],
      "Magic ATK (weapon)": [11.0, 70.0],
      "Max HP (%)": [7.7, 49.0],
    },
        exLevels: {
      effects: [
        { name: "During battle, decreases Aggro Adjustment", valuesByLevel: "16 / 18 / 20 / 22 / 24" },
        { name: "During battle, increases AP Recovery", valuesByLevel: "16% / 20% / 24% / 28% / 32%" },
        { name: "At the start of the unit's turn, if Crit Rate is 48% or higher, increases Crit Rate until the end of that turn", valuesByLevel: "32% / 40% / 48% / 56% / 64%" },
      ],
    },
  },

  // Character Profile
  profile: {
    age: '21',
    racial: 'Human (Noctis Nebula)',
    homeland: 'Tranel Republic, Reina',
    height: '156cm',
    birthday: 'June 10th',
    bwhRatio: '73(E)-44-81',
  },

  // Character Story
  story:
    "Emilia was once an orphan entrusted to a branch of the Split Twigs Church in Tranel. Frail from birth yet blessed with a boundless thirst for knowledge, she immersed herself in books and acquired a wide range of expertise on her own. Even after the Church withdrew from Tranel, she remained behind with her older brother, continuing their relief work together. But when illness took her brother's life, Emilia's faith in the Church shattered. After crossing the Rift to Earth, she quickly adapted to this new world. Armed with her intellect, she completed advanced training programs in record time and was officially appointed as a researcher by the Bureau of Rift Management. Yet even with such credentials, her desire to save lives on the front lines never faded. Through tireless research, she pursued ways to enhance physical abilities by combining science and sacred power. Her efforts paid off—granting her stamina rivaling that of a battle priest. Now, Emilia stands ready to fight beside the Human God, determined to bring hope and healing to even more people.",

  // Unique Traits
  uniqueTraits: {
    emiliasDiagnosisMethod: {
      name: "Emilia's Diagnosis Method",
      description:
        "Unique. Formation Cost +1, Strength -8, Vitality -6, Intelligence 3. Formation Cost +1 Activates the Level 1 passive skill [This Might Sting A Little]. [This Might Sting A Little]: Allows Basic ATK to be used on allies during battle. When using Basic ATK on an ally, \"Stimulus Response Test\" is used instead. Stimulus Response Test Performs a \"medical-grade\" \"physical contact test\" on an ally using a \"diagnostic tool.\" Deals a \"small amount\" of Fixed DMG to the target and grants them 14 AP.",
    },
    caseCollection: {
      name: 'Case Collection',
      description:
        "Unique. When Emilia uses a skill, its effects increase based on her Crit Rate. At 100% Crit Rate, it gains up to 100% additional effect.",
    },
    marlon: {
      name: 'Marlon',
      description: 'Unique. Strength 1, Technic 1, Intelligence 1.',
    },
    interested: {
      name: 'Interested',
      description: 'Unique. Characteristics: (No characteristics listed). Unlocks at Gift Affection Level 5: becomes active after reaching 2,000 affection points through gift-giving.',
    },
  },

  // Skills and Passive
  skills: {
    guardiansStrike: {
      gameKey: 'ProtectiveStrikeEmiliaTrait',
      name: "Guardian's Strike",
      level: '10/10',
      type: 'Skill',
      apCost: 30,
      cooldown: 0,
      damage: {
        type: 'Melee ATK',
        value: '114%',
      },
      description:
        "Swings a mace to attack the target. Deals Crush DMG equal to N% of Melee ATK and reduces the target's AP by 5. Can be used on allies. When used on an ally, the Stimulus Response Test skill is activated instead.",
    },
    graceOfHealing: {
      gameKey: 'CuringGrace',
      name: 'Grace of Healing',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 0,
      healing: {
        type: 'Magic ATK',
        value: '190%',
      },
      description:
        "Prays to the Goddess of the Split Twigs with a devout heart for the healing of an ally. Recovers the HP of a designated ally by {100,110,120,130,140,150,160,170,180,190}% of magic ATK.",
    },
    sacredPrescriptionProtocol: {
      gameKey: 'SacredPrescriptionProtocol',
      name: 'Sacred Prescription Protocol',
      level: '10/10',
      type: 'Skill',
      apCost: 45,
      cooldown: 2,
      healing: {
        type: 'Magic ATK',
        value: '190%',
      },
      description:
        "Performs a preventative checkup on allies. Only allies compatible with modern medicine can be targeted. Restores HP to all allies within a 2m radius around the designated point (excluding self), equal to {100,110,120,130,140,150,160,170,180,190}% of Magic ATK, and grants [Sacred Prescription] to allies compatible with modern medicine for 2 Rounds. - [Sacred Prescription]: Increases Crit DMG by {24,26,28,30,32,34,36,38,40,42}% and Elemental Boost by {12,13,14,15,16,17,18,19,20,21}%.",
    },
    fieldMedbay: {
      gameKey: 'FieldMedicalBay',
      name: 'Field Medbay',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "At the start of battle, increases Crit Rate by {4,8,12,16,20,24,28,32,36,40}%.",
    },
    miraculousInjection: {
      gameKey: 'UtmostMiraclePrescription',
      name: 'Miraculous Injection',
      level: '10/10',
      type: 'Skill',
      apCost: 81,
      cooldown: 2,
      description:
        "Only allies compatible with modern medicine can be targeted. When the effect activates, consumes 20% of the target's current HP and grants [Miracle Prescription] for 2R. [Miracle Prescription]: Increases the target's All ATK by {80,88,96,104,112,120,128,136,144,152}% of the caster's base Magic ATK. For each point of INT above 13, increases the cap of the All ATK increase by 10%.",
    },
    overflowingGrace: {
      gameKey: 'OverflowingGrace',
      name: 'Overflowing Grace',
      level: '10/10',
      type: 'Passive',
      apCost: 0,
      cooldown: 0,
      description:
        "When using a skill on an ally, also grants [Sacred Overdose] for 2R. [Sacred Overdose]: Increases Base DMG by {5,10,15,20,25,30,35,40,45,50}%. Stacks up to 2 times.",
    },
  },
  heroId: 59,

  rarityStages: {
    'EX': {
      strength: 10,
      technic: 6,
      intelligence: 10,
      vitality: 11,
      agility: 10,
      maxHp: 320,
      meleeAtk: 38,
      rangedAtk: -13,
      magicAtk: 195,
      evade: 128,
      apRecovery: 105,
      startingAp: 111
    },
    'EX 1': {
      strength: 10,
      technic: 6,
      intelligence: 10,
      vitality: 12,
      agility: 10,
      maxHp: 384,
      meleeAtk: 38,
      rangedAtk: -13,
      magicAtk: 195,
      evade: 128,
      apRecovery: 105,
      startingAp: 111
    },
    'EX 2': {
      strength: 10,
      technic: 6,
      intelligence: 11,
      vitality: 12,
      agility: 10,
      maxHp: 384,
      meleeAtk: 38,
      rangedAtk: -13,
      magicAtk: 209,
      evade: 128,
      apRecovery: 105,
      startingAp: 111
    },
    'EX 3': {
      strength: 11,
      technic: 6,
      intelligence: 11,
      vitality: 12,
      agility: 10,
      maxHp: 384,
      meleeAtk: 51,
      rangedAtk: -13,
      magicAtk: 209,
      evade: 128,
      apRecovery: 105,
      startingAp: 111
    },
    'EX 4': {
      strength: 11,
      technic: 6,
      intelligence: 12,
      vitality: 12,
      agility: 10,
      maxHp: 384,
      meleeAtk: 51,
      rangedAtk: -13,
      magicAtk: 223,
      evade: 128,
      apRecovery: 105,
      startingAp: 111
    },
    'EX 5': {
      strength: 12,
      technic: 6,
      intelligence: 12,
      vitality: 12,
      agility: 10,
      maxHp: 384,
      meleeAtk: 64,
      rangedAtk: -13,
      magicAtk: 223,
      evade: 128,
      apRecovery: 105,
      startingAp: 111
    },
    'EX 6': {
      strength: 12,
      technic: 6,
      intelligence: 12,
      vitality: 13,
      agility: 10,
      maxHp: 448,
      meleeAtk: 64,
      rangedAtk: -13,
      magicAtk: 223,
      evade: 128,
      apRecovery: 105,
      startingAp: 111
    },
  },
};

// SEO Metadata
const emiliaSEO = {
  title: 'Emilia - Horizon Walker Character Guide',
  description:
    'Complete guide for Emilia, EX rarity Support character in Horizon Walker. Includes stats, skills, equipment, builds, and gameplay tips.',
  keywords: [
    'Emilia',
    'Horizon Walker',
    'EX character',
    'Support',
    'Healer',
    'character guide',
    'gameplay',
    'stats',
    'skills',
    'equipment',
  ],
};

// Highlight patterns for search functionality
const emiliaHighlighting = {
  characterName: ['Emilia'],
  skillNames: [
    "Guardian's Strike",
    'Grace of Healing',
    'Sacred Prescription Protocol',
    'Field Medbay',
    'Miraculous Injection',
    'Overflowing Grace',
  ],
  uniqueTraits: ["Emilia's Diagnosis Method", 'Case Collection', 'Marlon', 'Interested'],
  effects: [
    'This Might Sting A Little',
    'Stimulus Response Test',
    'Was that too hard?',
    'Initial Consultation',
    'Examination Target',
    'Diagnostic Record',
    'Triage Queue Number',
    'Priority Treatment',
    'Miracle Prescription',
    'Sacred Overdose',
    'IV Prescription',
    'Potion Prescription',
    'Pill Prescription',
    'Keen Lock-on',
  ],
  weaponNames: ['EX Dual Pistols - Phantom Stiletto', 'EX Club & Shield - Seryel: Medical Hammer'],
  tags: rawEmiliaData.tags,
};

// Data validation
const validation = validateCharacterData(rawEmiliaData);
if (!validation.isValid) {
  console.error('Emilia character data validation failed:', validation.errors);
}

// Sanitize data for production
const emiliaData = sanitizeCharacterData(rawEmiliaData);

// Sanitize highlighting patterns
const emiliaHighlightingSanitized = sanitizeHighlightPatterns(emiliaHighlighting);

// Export the sanitized data and metadata
export { emiliaData, emiliaSEO };
export { emiliaHighlightingSanitized as emiliaHighlighting };

// Export raw data for development/debugging
// Note: rawEmiliaData is exported conditionally in the default export below

// Export validation result
export { validation };

// Default export for convenience
export default {
  characterData: emiliaData,
  seo: emiliaSEO,
  highlighting: emiliaHighlightingSanitized,
  validation,
  raw: import.meta.env.DEV ? rawEmiliaData : undefined,
};
