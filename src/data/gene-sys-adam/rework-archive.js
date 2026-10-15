// Rework archive: pre-rework ("before") vs current ("after") skill text for
// Gene-Sys: Adam characters whose kits the October 2026 update waves changed,
// keyed by character slug. Rendered by characters/[slug].astro as the Rework
// Archive section at the bottom of the character page so both versions stay
// documented on one page (Horizon Walker pattern). Texts are verbatim from the
// wiki's own rendered skill cards: "before" comes from the characters.js git
// history at the last shipped state (September 23 commit for the October 2
// round, October 3 commit for the October 13 round), "after" is the live
// table text. Awakened (+) variant lines carry an "Awakened:" prefix.
const UPD_OCT13 = '/guides/gene-sys-adam/updates/2026-10-13-black-gold-hunter-rerun/';
const UPD_OCT2 = '/guides/gene-sys-adam/updates/2026-10-02-skill-reworks-and-rui-arina-rotation/';

export const GSA_REWORK_ARCHIVE = {
  elena: {
    date: 'October 13, 2026',
    patchLabel: 'October 13 update entry',
    patchHref: UPD_OCT13,
    intro:
      'Elena\'s kit was reworked in the October 13, 2026 tables, ahead of her War & Music banner: her attacks were split into multi-hit sequences that apply Burn directly, and the Detonate Pursuit trigger moved out of her core skills. The sections above show the current version; the pre-rework text is preserved below.',
    unchangedNote:
      "Opening Act (Auto) and Supreme Revelry (Passive 2) kept their text; Opening Act's status tags were re-labelled in the same wave (now Crit Evasion Up, Skill Damage Up and ATK SPD Up).",
    items: [
      {
        title: 'Basic Attack: Agitated Notes',
        before: 'Deal 100% Physical DMG to a target.',
        after: 'Deal two hits of 100% Physical DMG to a target.',
      },
      {
        title: 'Talent: Total Detonation',
        before:
          'Deal 100% Energy DMG to up to 3 targets within the forward area.\nOn final hit, if the target has the Burn status, trigger an Detonate M Pursuit.\nAwakened: Deal 170% Energy DMG to up to 3 targets within the forward area.\nAwakened: On final hit, if the target has the Burn status, trigger an Detonate M Pursuit.',
        after:
          'Deal five hits of 100% Energy DMG to up to 3 targets within the forward area.\nOn hit, inflict Burn M (0s).\nAwakened: Deal five hits of 170% Energy DMG to up to 3 targets within the forward area.\nAwakened: On hit, inflict Burn M (0s).',
      },
      {
        title: "Passive 1: I'm Telling My Mom!",
        before:
          'When a Detonate Pursuit succeeds, grant self Fire ATK Up 6% (12s).\nWhen a Detonate Pursuit succeeds, grant self Crit Chance Up 9% (12s).\nAwakened: When a Detonate Pursuit succeeds, grant self Fire ATK Up 7% (12s).\nAwakened: When a Detonate Pursuit succeeds, grant self Crit Chance Up 10% (12s).\nAwakened: Grant all party members Crit DMG Up 12%.',
        after:
          'On hit, if the target is Burning, grant self Fire ATK Up 6% (12s).\nAwakened: On hit, if the target is Burning, grant self Fire ATK Up 7% (12s).\nAwakened: Grant all party members Crit DMG Up 12%.',
      },
      {
        title: 'Ultimate: Scarlet Thorn Frenzy',
        before:
          'Enter the Awakening state, granting self Energy DMG Up 10% (24s).\nDeal 250% Energy DMG to all targets.\nOn final hit, inflict Fire Res Down 10% (12s) on the target.\nOn final hit, inflict Healing Crit Bonus Down 18% (12s) on the target.',
        after:
          'Enter the Awakening state, granting self Energy DMG Up 10% (24s).\nDeal eighteen hits of 250% Energy DMG to all targets.\nOn hit, inflict Burn L (12s).\nOn final hit, inflict Healing Crit Bonus Down 18% (12s) on the target.',
      },
    ],
  },

  victoria: {
    date: 'October 2 and October 13, 2026',
    patchLabel: 'October 13 update entry',
    patchHref: UPD_OCT13,
    intro:
      "Victoria's kit was reworked twice in October 2026: the October 2 pass lowered her talent damage and dropped her ultimate from one heavy 425% hit to a 53% hit, and the October 13 pass made her basic attack two hits and split the ultimate into eight hits of 53%. The sections above show the current version; the pre-rework text (before the October 2 pass) is preserved below.",
    unchangedNote:
      'Her passives were not re-worded by either pass; the October 2 data wave re-tagged their status riders (Block Penetration, Fire RES Down and Petrify interactions).',
    items: [
      {
        title: 'Basic Attack: Elegant Assassination',
        before: 'Deal 83% Physical DMG to a target.',
        after: 'Deal two hits of 83% Physical DMG to a target.',
      },
      {
        title: "Talent: Witch's Elegy",
        before:
          'Deal 360% Physical DMG to a target.\nOn final hit, inflict Petrify M (4s).\nAwakened: Deal 420% Physical DMG to a target.\nAwakened: On final hit, inflict Petrify M (4s).\nAwakened: On final hit, inflict Block Down 15% (8s) on the target.',
        after:
          'Deal 300% Physical DMG to a target.\nOn final hit, inflict Petrify M (4s).\nAwakened: Deal 420% Physical DMG to a target.\nAwakened: On final hit, inflict Petrify M (4s).\nAwakened: On final hit, inflict Block Down 15% (8s) on the target.',
        note: 'The October 2 pass lowered the base hit from 360% to 300%; the awakened variant was already at 420%.',
      },
      {
        title: 'Ultimate: Phantom Assault',
        before:
          "Enter the Awakening state, granting self EN Gain Up 45% (24s).\nDeal 425% Energy DMG to up to 3 targets within the forward area.\nOn final hit, inflict Crit Evasion Down 15% (12s) on the target.",
        after:
          "Enter the Awakening state, granting self EN Gain Up 45% (24s).\nDeal eight hits of 53% Energy DMG to up to 3 targets within the forward area.\nOn final hit, inflict Crit Evasion Down 15% (12s) on the target.",
        note: 'The October 2 pass first dropped this to a single 53% hit; the October 13 pass split it into eight hits of 53%.',
      },
    ],
  },

  rachel: {
    date: 'October 2, 2026',
    patchLabel: 'October 2 update entry',
    patchHref: UPD_OCT2,
    intro:
      "Rachel's Aimed Shot was retargeted in the October 2, 2026 tables. The sections above show the current version; the pre-rework text is preserved below.",
    items: [
      {
        title: 'Basic Attack: Aimed Shot',
        before: 'Deal 68% Energy DMG to a target.',
        after: 'Deal 68% Energy DMG to a furthest target.',
      },
    ],
  },

  'leng-zhen': {
    date: 'October 13, 2026',
    patchLabel: 'October 13 update entry',
    patchHref: UPD_OCT13,
    intro:
      "Leng Zhen's passives were reworked again in the October 13, 2026 tables. The new passive text references effect rows that have not shipped in the static client tables yet, so her current card shows only the trigger cadence; the full values will complete when her Lingering Echoes wave goes live. The pre-rework text is preserved below.",
    items: [
      {
        title: 'Passive 1: Severed Senses',
        before:
          'On hit, Medium chance to grant self Water ATK Up 7% (6s).\nAwakened: On hit, Medium chance to grant self Water ATK Up 8.5% (6s).',
        after:
          'This effect can only trigger once every 6 seconds.\nAwakened: This effect can only trigger once every 6 seconds.\nAwakened: Grant all party members Water ATK Up 8.5%.',
        note: 'The rework points her on-hit trigger at Burning or Frozen targets; the effect magnitude rows are not in the shipped tables yet.',
      },
      {
        title: 'Passive 2: Venomous Edict',
        before:
          'Grant self Skill Damage Up 12.5%.\nAwakened: Grant all party members Skill Damage Up 12.5%.',
        after: 'Grant self Skill Damage Up 12.5%.',
        note: 'The awakened variant now points at the same unshipped effect rows, so its extra line is pending until the wave ships.',
      },
    ],
  },

  danxin: {
    date: 'October 13, 2026',
    patchLabel: 'October 13 update entry',
    patchHref: UPD_OCT13,
    intro:
      'Danxin was re-assigned in the October 13, 2026 tables: the battlePosition code moved from the Striker column to the Guardian column in RoleInfoData (changing the job shown in-game and on this page), and her Silk Deflection awakened variant gained a PVP rider.',
    items: [
      {
        title: 'Job',
        before: 'Striker',
        after: 'Guardian',
      },
      {
        title: 'Passive 2: Silk Deflection',
        before:
          'Grant self Energy Damage Taken Decreased 10%.\nAwakened: Grant all party members Energy Damage Taken Decreased 10%.',
        after:
          'Grant self Energy Damage Taken Decreased 10%.\nAwakened: Grant all party members Energy Damage Taken Decreased 10%.\nAwakened: In PVP mode, grant self Healing Received Up 13%.',
      },
    ],
  },
};

export function getGsaReworkArchive(slug) {
  return GSA_REWORK_ARCHIVE[slug] || null;
}
