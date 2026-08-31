import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SPA route changes don't reset scroll position. This puts every navigation back at
 * the top of the page (its first section, below the fixed nav) — matching what a
 * full page load would do. Hash links (#section) are left alone so in-page anchors
 * still work.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
