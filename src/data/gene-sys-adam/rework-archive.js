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

  };

export function getGsaReworkArchive(slug) {
  return GSA_REWORK_ARCHIVE[slug] || null;
}
