"use client";

import { useEffect, useState } from "react";

type ThemeMode = "dark" | "light";

function SunIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M12 2v2.5M12 19.5V22M4.93 4.93 6.7 6.7M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07 6.7 17.3M17.3 6.7l1.77-1.77" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.2 14.4A7.7 7.7 0 0 1 9.6 3.8 8.6 8.6 0 1 0 20.2 14.4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16.8 4.6 18 2.7l1.2 1.9 2 .7-2 .7L18 7.9l-1.2-1.9-2-.7 2-.7Z" fill="currentColor" />
    </svg>
  );
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  
  // Statically default to dark to match the server's initial render
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    // Read the user's actual preference only after mounting on the client
    const stored = window.localStorage.getItem("theme");
    const initialTheme = stored === "light" ? "light" : "dark";
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("light", initialTheme === "light");
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("light", nextTheme === "light");
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  const isDark = theme === "dark";

  // Render a placeholder with the exact same structure to prevent layout shift 
  // before the client determines which icon to show.
  if (!mounted) {
    return (
      <button
        type="button"
        className="theme-toggle-button"
        aria-hidden="true"
      >
        <span className="theme-toggle-glow" />
        <span className="relative z-10 block w-6 h-6" /> 
      </button>
    );
  }

  return (
    <button
      type="button"
      className="theme-toggle-button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-glow" />
      <span className="relative z-10">{isDark ? <SunIcon /> : <MoonIcon />}</span>
    </button>
  );
}