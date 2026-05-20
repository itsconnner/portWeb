"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const items = [
  { href: "/about", label: "about" },
  { href: "/", label: "work" }
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/10 bg-bg/30 backdrop-blur-md backdrop-saturate-150">
      <div className="flex items-center justify-between px-6 py-5 sm:px-10">
        <Link href="/" className="font-mono text-sm tracking-tight">
          Yeyang Wang
        </Link>
        <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.18em] sm:gap-10">
          {items.map((it) => {
            const active =
              (it.href === "/" && pathname === "/") ||
              (it.href !== "/" && pathname?.startsWith(it.href));
            return (
              <Link
                key={it.href}
                href={it.href}
                className="group relative inline-flex items-center"
              >
                <span className="relative">
                  {it.label}
                  <span
                    className={
                      "absolute -bottom-1 left-0 h-px bg-current transition-all duration-500 " +
                      (active ? "w-full" : "w-0 group-hover:w-full")
                    }
                  />
                </span>
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
