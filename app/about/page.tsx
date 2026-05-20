"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const experience = [
  {
    year: "2026 — now",
    role: "Brand & Digital Designer",
    place: "First Class Property Services, Winnipeg",
    description:
      "Participated in the design and development of an internal company dashboard, primarily focusing on UI/UX design. Collaborated with the development team to create responsive interfaces and improve data visualization. Also supported administrative and operational tasks related to system management."
  },
  {
    year: "2025",
    role: "UI/UX Designer",
    place: "Telpay, Winnipeg",
    type: "Intern",
    description:
      "Designed mobile app UI and responsive web interfaces, created wireframes and prototypes, and collaborated with developers to ensure a consistent and user-friendly experience across platforms."
  },
  {
    year: "2023 — 2026",
    role: "Waitress & Receptionist",
    place: "Good Earth Restaurant, Winnipeg",
    type: "Part-time",
    description:
      "Handled incoming customer calls, managed reservations, and addressed guest inquiries and issues. Provided table service, ensured a pleasant dining experience, and supported daily restaurant operations."
  },
  {
    year: "2022 — 2023",
    role: "Nail Designer / Artist",
    place: "Le Soleil Nail Salon, New York",
    description:
      "Assisted with nail design and drawing at a salon on Broadway in Manhattan. This experience helped enhance my practical skills and creativity, and improved my communication skills through talks with customers."
  },
  {
    year: "2021 — 2022",
    role: "Graphic Designer & Illustrator",
    place: "Yuedi, Hangzhou",
    description:
      "Worked on creating product illustrations and designing patterns for a trading company to enhance the visual appeal of merchandise and marketing materials."
  }
];

const education = [
  {
    year: "2023 — 2025",
    degree: "Advanced Diploma in Interactive Design",
    place: "Red River College Polytech"
  },
  {
    year: "2018 — 2022",
    degree: "Bachelor of Fine Art, Illustration",
    place: "School of Visual Arts, New York"
  }
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

  const headline = "Hi, I'm Yeyang.";
  const chars = headline.split("");

  return (
    <div ref={root}>
      <section className="px-6 pt-32 pb-24 sm:px-10 sm:pt-40 sm:pb-32">
        <div className="mx-auto max-w-4xl">
          <p data-fade className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            ( about )
          </p>

          <div className="mt-10 grid grid-cols-12 items-center gap-x-10 gap-y-10 sm:mt-14">
            <div ref={portraitWrap} className="col-span-12 mx-auto w-full max-w-[280px] sm:col-span-6 sm:mx-0 sm:max-w-none">
              <div className="relative aspect-[587/800] w-full overflow-hidden">
                <Image
                  ref={portraitImg as never}
                  src="/portrait.jpg"
                  alt="Portrait of Yeyang"
                  fill
                  sizes="(min-width: 640px) 45vw, 280px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="col-span-12 flex flex-col justify-center sm:col-span-6">
              <h1
                data-hero
                className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl"
              >
                {chars.map((c, i) => (
                  <span key={i} className="line-mask">
                    <span className="char">{c === " " ? " " : c}</span>
                  </span>
                ))}
              </h1>
              <div
                data-fade
                className="mt-6 space-y-4 font-mono text-[13px] leading-[1.75] text-ink sm:text-sm"
              >
                <p>I'm a designer and developer based in Winnipeg.</p>
                <p>
                  My work sits between brand, UI, and web design, with a strong focus on visual
                  systems and interface thinking.
                </p>
                <p>
                  I'm comfortable working across branding and digital interfaces, moving from
                  concept exploration into structured design systems. I tend to approach projects
                  from a visual-first perspective, often using illustration thinking to guide
                  interface decisions — especially when defining tone, hierarchy, and emotional
                  clarity in a product.
                </p>
                <p>
                  Outside of work, I draw regularly and continue developing illustration as a
                  parallel practice. I also keep learning code, mainly to better understand how
                  design behaves when it becomes interactive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-experience className="px-6 py-24 sm:px-10 sm:py-40">
        <div className="grid grid-cols-12 gap-6">
          <p className="col-span-12 font-mono text-[11px] uppercase tracking-[0.22em] text-muted sm:col-span-3">
            professional experience
          </p>
          <ul className="col-span-12 sm:col-span-8 sm:col-start-5">
            {experience.map((e, i) => (
              <li
                key={i}
                data-row
                className="grid grid-cols-12 items-baseline gap-x-4 gap-y-3 border-b border-line py-6"
              >
                <span className="col-span-12 font-mono text-[11px] uppercase tracking-[0.22em] text-muted sm:col-span-3">
                  {e.year}
                  {e.type && <span className="ml-2 lowercase">| {e.type.toLowerCase()}</span>}
                </span>
                <div className="col-span-12 sm:col-span-9">
                  <p className="font-serif text-2xl tracking-tight sm:text-3xl">{e.role}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                    {e.place}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
                    {e.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 sm:pb-40">
        <div className="grid grid-cols-12 gap-6">
          <p className="col-span-12 font-mono text-[11px] uppercase tracking-[0.22em] text-muted sm:col-span-3">
            education
          </p>
          <ul className="col-span-12 sm:col-span-8 sm:col-start-5">
            {education.map((e, i) => (
              <li
                key={i}
                data-row
                className="grid grid-cols-12 items-baseline gap-x-4 gap-y-3 border-b border-line py-6"
              >
                <span className="col-span-12 font-mono text-[11px] uppercase tracking-[0.22em] text-muted sm:col-span-3">
                  {e.year}
                </span>
                <div className="col-span-12 sm:col-span-9">
                  <p className="font-serif text-2xl tracking-tight sm:text-3xl">{e.degree}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                    {e.place}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
