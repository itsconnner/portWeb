"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const experience = [
  { year: "2022 — now", role: "Independent studio", place: "Self-directed" },
  { year: "2019 — 2022", role: "Senior designer", place: "Field & Form, Berlin" },
  { year: "2017 — 2019", role: "Designer", place: "Studio North, Copenhagen" },
  { year: "2016 — 2017", role: "Design intern", place: "Atelier Quill, Paris" }
];

export default function AboutPage() {
  const root = useRef<HTMLDivElement>(null);
  const portraitWrap = useRef<HTMLDivElement>(null);
  const portraitImg = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero] .char", {
        yPercent: 110,
        duration: 1,
        ease: "power3.out",
        stagger: 0.04,
        delay: 0.1
      });
      gsap.from("[data-fade]", {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.06,
        delay: 0.2
      });
      gsap.from("[data-row]", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: { trigger: "[data-experience]", start: "top 80%" }
      });

      if (portraitImg.current && portraitWrap.current) {
        gsap.fromTo(
          portraitImg.current,
          { scale: 1.2, yPercent: -8 },
          {
            scale: 1,
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: portraitWrap.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      }
    }, root);
    return () => ctx.revert();
  }, []);

  const headline = "Hi, I'm a designer.";
  const chars = headline.split("");

  return (
    <div ref={root}>
      <section className="px-6 pt-32 pb-20 sm:px-10 sm:pt-40">
        <div className="grid grid-cols-12 gap-6">
          <p data-fade className="col-span-12 font-mono text-[11px] uppercase tracking-[0.22em] text-muted sm:col-span-3">
            ( about )
          </p>
          <div className="col-span-12 sm:col-span-9">
            <h1
              data-hero
              className="font-serif text-[12vw] leading-[0.9] tracking-tightest sm:text-[8vw]"
            >
              {chars.map((c, i) => (
                <span key={i} className="line-mask">
                  <span className="char">{c === " " ? " " : c}</span>
                </span>
              ))}
            </h1>
            <p data-fade className="mt-12 text-lg leading-relaxed sm:text-xl">
              I'm an independent designer working across identity, editorial and the web.
              I care about how language and image are set on the page, and prefer slow,
              well-credited work to fast, anonymous output. Based between Lisbon and Berlin,
              available for selected projects.
            </p>
          </div>
        </div>
      </section>

      <div ref={portraitWrap} className="overflow-hidden px-6 sm:px-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-line">
          <Image
            ref={portraitImg as never}
            src="https://picsum.photos/seed/studio-room/2000/1100"
            alt="Studio interior"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <section data-experience className="px-6 py-24 sm:px-10 sm:py-40">
        <div className="grid grid-cols-12 gap-6">
          <p className="col-span-12 font-mono text-[11px] uppercase tracking-[0.22em] text-muted sm:col-span-3">
            experience
          </p>
          <ul className="col-span-12 sm:col-span-8 sm:col-start-5">
            {experience.map((e, i) => (
              <li
                key={i}
                data-row
                className="grid grid-cols-12 items-baseline gap-4 border-b border-line py-6"
              >
                <span className="col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                  {e.year}
                </span>
                <span className="col-span-9 font-serif text-2xl tracking-tight sm:text-3xl">
                  {e.role}
                  <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                    {e.place}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
