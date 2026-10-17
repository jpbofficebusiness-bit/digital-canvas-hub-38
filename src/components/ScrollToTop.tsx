import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const positions = new Map<string, number>();

const ScrollToTop = () => {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Track scroll position per history entry so POP can restore it
  useEffect(() => {
    const key = location.key;
    const save = () => positions.set(key, window.scrollY);
    window.addEventListener("scroll", save, { passive: true });
    return () => {
      save();
      window.removeEventListener("scroll", save);
    };
  }, [location.key]);

  useEffect(() => {
    if (navType === "POP") {
      const y = positions.get(location.key);
      if (y != null) {
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
  }, [location.key, location.hash, navType]);

  return null;
};

export default ScrollToTop;
