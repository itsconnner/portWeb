"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { archive } from "@/lib/projects";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ArchivePage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-row]", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.05,
        scrollTrigger: { trigger: ref.current, start: "top 75%" }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="px-6 pt-32 pb-20 sm:px-10 sm:pt-40">
      <div className="grid grid-cols-12 gap-6">
        <p className="col-span-12 font-mono text-[11px] uppercase tracking-[0.22em] text-muted sm:col-span-3">
          ( rch ve )
        </p>
        <div className="col-span-12 sm:col-span-9">
          <h1 className="font-serif text-[14vw] leading-[0.88] tracking-tightest sm:text-[10vw]">
             rch ve
          </h1>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-muted">
            Older or unpublished work, sketches, and side projects. Listed by year, most
            recent first.
          </p>
        </div>
      </div>

      <ul className="mt-20 sm:mt-32">
        <li className="grid grid-cols-12 gap-6 border-t border-line py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          <span className="col-span-2">year</span>
          <span className="col-span-7 sm:col-span-7">title</span>
          <span className="col-span-3 text-right sm:text-left">category</span>
        </li>
        {archive.map((row, i) => (
          <li
            key={i}
            data-row
            className="group grid cursor-default grid-cols-12 items-baseline gap-6 border-b border-line py-6 transition-colors hover:bg-ink hover:text-bg sm:py-8"
          >
            <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.22em]">{row.year}</span>
            <span className="col-span-7 font-serif text-2xl tracking-tight sm:text-4xl">{row.title}</span>
            <span className="col-span-3 text-right font-mono text-[11px] uppercase tracking-[0.22em] sm:text-left">
              {row.category}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
