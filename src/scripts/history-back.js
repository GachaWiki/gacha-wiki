// Client-side handler for back buttons whose only sensible target is the
// site root: an anchor with [data-history-back] goes to the browser's
// previous page when that page is on this site (document.referrer same
// origin), otherwise it follows its href fallback. Self-initializing,
// delegated, safe to import from any component <script>.
if (typeof document !== 'undefined') {
  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const link = target ? target.closest('[data-history-back]') : null;
    if (!link) return;

    let cameFromThisSite = false;
    if (document.referrer) {
      try {
        cameFromThisSite = new URL(document.referrer).origin === location.origin;
      } catch {
        // Malformed referrer: treat as external, follow the href fallback.
      }
    }

    if (cameFromThisSite && window.history.length > 1) {
      event.preventDefault();
      window.history.back();
    }
  });
}
