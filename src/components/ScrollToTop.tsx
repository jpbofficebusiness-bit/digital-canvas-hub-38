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

  // Track scroll position per path. useLayoutEffect so the cleanup runs
  // synchronously during the navigation commit, before the browser clamps
  // scroll back to 0 when the old page unmounts.
  useLayoutEffect(() => {
    const path = location.pathname;
    navTimeRef.current = Date.now();
    const save = () => {
      // Ignore the automatic reset to 0 right after a navigation
      if (window.scrollY === 0 && Date.now() - navTimeRef.current < 500) return;
      savePosition(path, window.scrollY);
    };
    window.addEventListener("scroll", save, { passive: true });
    return () => {
      savePosition(path, window.scrollY);
      window.removeEventListener("scroll", save);
    };
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
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash, navType]);

  return null;
};

export default ScrollToTop;
