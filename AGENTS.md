# Project rules
- Internal section destinations retain their hash in React Router navigation; ScrollToTop owns anchor alignment and history restoration to avoid competing timers.
- The shared header uses a content-sized center track and a scrollable fullscreen menu until the wide desktop breakpoint so navigation remains reachable on narrow and short screens.
- Page entrance animations finish with transform none, and their outer wrapper clips only horizontal overflow; this keeps fixed headers viewport-relative after transitions.