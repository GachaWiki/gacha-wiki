# Codex Instructions

## Environment

- OS: Windows 11
- Package manager: Bun (use `bun` instead of `npm`)

## Build Rules

- **Do NOT run `bun run build` unless explicitly asked** - the user has a dev server running and will test changes themselves
- Never run build tests unless explicitly asked by the user

## Typography Rules (site-wide, 2026-10-15)

- **Every `font-size` must use a `--text-*` token from `src/styles/typography.css`** (fixed 15-step scale: `--text-3xs` 10px up to `--text-6xl` 48px). No rem/px literals in game CSS, page CSS, scoped `<style>` blocks, or inline `style="..."` attributes.
- Run `bun run lint:fonts` to check (it fails on any off-scale literal). Need a size between steps? Add or adjust a step in the scale, never a literal in a component.
- Relative `em`/`%` sizes, container-query units (`cqh`), and token-composed `clamp(var(--text-*), Nvw, var(--text-*))` are allowed.
- The only literal exceptions live in `scripts/check-font-scales.mjs`'s EXCEPTIONS list (iOS 16px input zoom guard, z-index debug overlay, decorative 404 numeral).

## Data Entry Rules

- **NEVER make up or copy data** from one character to another without verification
- If data is missing (profile, credits, stats, etc.), ASK the user for the correct info instead of guessing or copying from similar entries
- Profile data (height, bust, waist, hips, illustrator, voice actor) is manually entered - there are no raw data files for this info
- Always verify data exists in raw files before adding new character entries
- When adding new characters, clearly list what data is missing and ask the user to provide it

## File Creation Guidelines

When creating new files, always include a comment block at the top explaining concisely what the file does. This helps Codex navigate the codebase more autonomously in fresh sessions.

Example formats:
- JavaScript/TypeScript: `// Description of what this file does`
- Python: `# Description of what this file does`
- CSS: `/* Description of what this file does */`
- HTML/Astro: `<!-- Description of what this file does -->`

