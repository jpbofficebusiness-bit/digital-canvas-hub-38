import { useEffect } from "react";
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

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Continuously track scroll position per path
  useEffect(() => {
    const path = location.pathname;
    const save = () => savePosition(path, window.scrollY);
    window.addEventListener("scroll", save, { passive: true });
    return () => {
      save();
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
