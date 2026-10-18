import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const STORAGE_KEY = "fr-scroll-positions";

const readPositions = (): Record<string, number> => {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
};

const savePosition = (path: string, y: number) => {
  const all = readPositions();
  all[path] = y;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {
    /* storage full or unavailable */
  }
};

const ScrollToTop = () => {
  const location = useLocation();
  const navType = useNavigationType();
  const navTimeRef = useRef(0);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Track scroll position per path via scroll events only. The automatic
  // reset to 0 right after a navigation is ignored so it never overwrites
  // the real saved position.
  useLayoutEffect(() => {
    const path = location.pathname;
    navTimeRef.current = Date.now();
    const save = () => {
      if (window.scrollY === 0 && Date.now() - navTimeRef.current < 800) return;
      savePosition(path, window.scrollY);
    };
    window.addEventListener("scroll", save, { passive: true });
    return () => window.removeEventListener("scroll", save);
  }, [location.pathname]);

  useEffect(() => {
    if (navType === "POP") {
      const y = readPositions()[location.pathname];
      if (y != null && y > 0) {
        // Retry a few times: content/images may still be laying out
        const restore = () => window.scrollTo(0, y);
        requestAnimationFrame(restore);
        const timers = [100, 300, 600].map((ms) => setTimeout(restore, ms));
        return () => timers.forEach(clearTimeout);
      }
    }
    if (location.hash) {
      // Keep the destination in the URL and realign after fonts and images settle.
      const scrollToAnchor = () => {
        document.getElementById(decodeURIComponent(location.hash.slice(1)))
          ?.scrollIntoView({ behavior: "instant", block: "start" });
      };
      const frame = requestAnimationFrame(scrollToAnchor);
      const timers = [100, 300, 600, 1000].map((ms) => setTimeout(scrollToAnchor, ms));
      return () => {
        cancelAnimationFrame(frame);
        timers.forEach(clearTimeout);
      };
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash, location.key, navType]);

  return null;
};

export default ScrollToTop;
