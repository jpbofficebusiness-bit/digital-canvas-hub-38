# Project rules
- External Vercel deployments use filesystem-first routing with an application fallback for public page paths; preserve static SEO files and asset responses without changing domain redirects.
- Keep verified site identity JSON-LD in the static HTML head so it is available before JavaScript renders.
- Internal section destinations retain their hash in React Router navigation; ScrollToTop owns anchor alignment and history restoration to avoid competing timers.
- The shared header uses a content-sized center track and a scrollable fullscreen menu until the wide desktop breakpoint so navigation remains reachable on narrow and short screens.
- Page entrance animations finish with transform none, and their outer wrapper clips only horizontal overflow; this keeps fixed headers viewport-relative after transitions.
- FAQ answers expand immediately with native scroll anchoring disabled and pointer focus using preventScroll, so answer toggles do not initiate viewport scrolling across browsers.