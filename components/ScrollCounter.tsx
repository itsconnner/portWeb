"use client";

import { useEffect, useState } from "react";

export default function ScrollCounter({ total }: { total: number }) {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-project]"));
    if (!sections.length) return;

    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let current = 1;
      sections.forEach((s, i) => {
        const r = s.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) current = i + 1;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-30 font-mono text-[11px] uppercase tracking-[0.22em] mix-blend-difference sm:bottom-10 sm:right-10">
      <span className="text-white">
        ( {String(active).padStart(2, "0")} / {String(total).padStart(2, "0")} )
      </span>
    </div>
  );
}
