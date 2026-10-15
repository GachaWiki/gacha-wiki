# Claude Code Instructions

## Git Rules (CRITICAL)

- **NEVER `git commit` or `git push` without explicit permission from the user.**
- Always make changes locally, tell the user what was changed, and wait for the user to verify and say "push it" before touching git.
- Never push broken or unverified code. The user must test in the browser first.

## Environment

- OS: Windows 11
- Package manager: Bun (use `bun` instead of `npm`)

## Build Rules

- Do NOT run `bun run build` - the dev server is already running locally
- Never run build tests unless explicitly asked by the user
- The user will test changes themselves in the browser

## Typography Rules (site-wide, 2026-10-15)

- **Every `font-size` must use a `--text-*` token from `src/styles/typography.css`** (fixed 15-step scale: `--text-3xs` 10px up to `--text-6xl` 48px). No rem/px literals in game CSS, page CSS, scoped `<style>` blocks, or inline `style="..."` attributes.
- Run `bun run lint:fonts` to check (it fails on any off-scale literal). Need a size between steps? Add or adjust a step in the scale, never a literal in a component.
- Relative `em`/`%` sizes, container-query units (`cqh`), and token-composed `clamp(var(--text-*), Nvw, var(--text-*))` are allowed.
- The only literal exceptions live in `scripts/check-font-scales.mjs`'s EXCEPTIONS list (iOS 16px input zoom guard, z-index debug overlay, decorative 404 numeral).

## Astro Config (CRITICAL)

- **NEVER change `inlineStylesheets` from `'always'`** — setting it to `'auto'` or `'never'` breaks CSS on production (external CSS files fail to load, causing broken styling on all pages). This happened on 2026-04-03 and took down the entire site.
- The `manualChunks` function in `astro.config.mjs` must keep `node_modules` check BEFORE the `/utils/` check to avoid circular dependency errors (`Cannot access 'SITE' before initialization`)
- Always verify `astro.config.mjs` changes by running `bun run build` locally before pushing

## Data Entry Rules

- **NEVER make up or copy data** from one character to another without verification
- If data is missing (profile, credits, stats, etc.), ASK the user for the correct info instead of guessing or copying from similar entries
- Profile data (height, bust, waist, hips, illustrator, voice actor) is manually entered - there are no raw data files for this info
- Always verify data exists in raw files before adding new character entries
- When adding new characters, clearly list what data is missing and ask the user to provide it

## File Creation Guidelines

When creating new files, always include a comment block at the top explaining concisely what the file does. This helps Claude navigate the codebase more autonomously in fresh sessions.

Example formats:
- JavaScript/TypeScript: `// Description of what this file does`
- Python: `# Description of what this file does`
- CSS: `/* Description of what this file does */`
- HTML/Astro: `<!-- Description of what this file does -->`

