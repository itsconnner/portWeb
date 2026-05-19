"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const t = (document.documentElement.getAttribute("data-theme") as Theme) || "light";
    setTheme(t);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={`switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="group relative inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em]"
    >
      <span
        aria-hidden
        className="relative inline-block h-[10px] w-[22px] rounded-full border border-current"
      >
        <span
          className="absolute top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-current transition-all duration-300"
          style={{ left: theme === "dark" ? "12px" : "2px" }}
        />
      </span>
      <span className="relative">
        {theme === "light" ? "lt" : "drk"}
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-500 group-hover:w-full" />
      </span>
    </button>
  );
}
