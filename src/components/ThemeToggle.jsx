import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button className="mb-4 border px-3 py-1" onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
      Tema: {theme === 'light' ? 'light' : 'dark'}
    </button>
  );
}
