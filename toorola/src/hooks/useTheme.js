import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'toolora-theme';

// index.html already set data-theme before React started, so we just read it.
function getInitialTheme() {
  if (typeof document !== 'undefined') {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'light' || current === 'dark') return current;
  }
  return 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next); // only saved when the user chooses
      } catch {
        /* storage can be blocked; the toggle still works for this visit */
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}