"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const labelEl = labelRef.current;
    if (!dot || !labelEl) return;

    gsap.set(dot, { xPercent: -50, yPercent: -50, opacity: 0, scale: 1 });

    const xTo = gsap.quickTo(dot, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(dot, "y", { duration: 0.45, ease: "power3.out" });

    let rafId = 0;
    let visible = false;

    const onMove = (e: PointerEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      if (!visible) {
        visible = true;
        gsap.to(dot, { opacity: 1, duration: 0.3 });
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;
      const hit = target.closest<HTMLElement>("a, button");
      if (hit) {
        dot.dataset.mode = "link";
        labelEl.textContent = "";
        gsap.to(dot, { scale: 2.2, duration: 0.3, ease: "power2.out" });
      } else {
        dot.dataset.mode = "default";
        labelEl.textContent = "";
        gsap.to(dot, { scale: 1, duration: 0.3, ease: "power2.out" });
      }
    };

    const onLeave = () => {
      visible = false;
      gsap.to(dot, { opacity: 0, duration: 0.2 });
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerout", (e) => {
      if (!e.relatedTarget) onLeave();
    });

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      data-mode="default"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-3 w-3 items-center justify-center rounded-full bg-ink mix-blend-difference sm:flex"
      style={{ willChange: "transform" }}
    >
      <span
        ref={labelRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[9px] uppercase tracking-[0.22em] text-bg"
      />
    </div>
  );
}
