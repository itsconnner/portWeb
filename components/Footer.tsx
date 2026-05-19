"use client";

import { useState } from "react";

const socials = [
  { label: "IG", href: "#" },
  { label: "TW", href: "#" },
  { label: "LI", href: "#" }
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText("hzla709515@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };

  return (
    <footer className="border-t border-line px-6 pb-10 pt-20 sm:px-10 sm:pt-32">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">contact</p>
          <button onClick={onCopy} className="group mt-2 inline-flex items-baseline gap-3">
            <span className="font-serif text-3xl tracking-tight sm:text-5xl">
              hzla709515@gmail.com
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              {copied ? "copied!" : "click to copy"}
            </span>
          </button>
        </div>
        <div className="col-span-12 flex flex-wrap items-end gap-4 sm:col-span-6 sm:justify-end">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="group relative font-mono text-xs uppercase tracking-[0.22em]"
            >
              {s.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="col-span-12 mt-16 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} — Yeyang Wang</span>
          <span>built with next.js · gsap · lenis</span>
        </div>
      </div>
    </footer>
  );
}
