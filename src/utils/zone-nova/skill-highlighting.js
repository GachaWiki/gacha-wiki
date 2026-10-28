/**
 * Zone Nova skill text preparation.
 * Keyword highlighting was removed (user directive 2026-10-28: visual bloat);
 * these helpers now only escape text so it is safe to render with set:html.
 * Export names are kept so the character template needs no changes.
 */

export function highlightSkillText(text, _patterns, _options = {}) {
  if (!text || typeof text !== 'string') {
    return text || '';
  }
  if (text.length > 10000) {
    text = text.substring(0, 10000) + '...';
  }
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function highlightAllSkills(skills, patterns) {
  if (!skills || typeof skills !== 'object') {
    return skills;
  }
  const prepare = skill =>
    skill && typeof skill === 'object'
      ? { ...skill, description: highlightSkillText(skill.description, patterns) }
      : skill;
  return {
    ...skills,
    normal: prepare(skills.normal),
    auto: prepare(skills.auto),
    ultimate: prepare(skills.ultimate),
    passive: prepare(skills.passive),
  };
}

export const defaultZNHighlightPatterns = {};
