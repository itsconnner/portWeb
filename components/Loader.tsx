"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function Loader() {
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => {
    if (!onHome) {
      setDone(true);
      return;
    }

    const obj = { v: 0 };
    document.documentElement.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = "";
        setDone(true);
      }
    });

    tl.to(obj, {
      v: 100,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate: () => {
        if (pctRef.current) pctRef.current.textContent = Math.round(obj.v).toString().padStart(3, "0");
      }
    })
      .to(
        ".loader-label .char",
        {
          yPercent: -200,
          stagger: 0.025,
          duration: 0.6,
          ease: "power3.in"
        },
        "+=0.1"
      )
      .to(
        wrapRef.current,
        {
          yPercent: -100,
          duration: 0.9,
          ease: "expo.inOut"
        },
        "-=0.1"
      );

    return () => {
      tl.kill();
      document.documentElement.style.overflow = "";
    };
  }, [onHome]);

  if (done || !onHome) return null;

  const label = ["L", "o", "a", "d", "i", "n", "g"];

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-[100] flex items-end justify-between bg-bg px-6 pb-6 sm:px-10 sm:pb-10"
    >
      <div className="loader-label flex overflow-hidden pb-[0.35em] -mb-[0.35em] text-[18vw] font-serif leading-[1] tracking-tightest sm:text-[14vw]">
        {label.map((c, i) => (
          <span key={i} className="char inline-block">
            {c}
          </span>
        ))}
      </div>
      <div className="font-mono text-xs uppercase tracking-wider text-muted">
        <span ref={pctRef}>000</span> / 100
      </div>
    </div>
  );
}
