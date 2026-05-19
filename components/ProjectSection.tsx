"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "@/lib/projects";
import FitHeading from "@/components/FitHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectSection({ project, total }: { project: Project; total: number }) {
  const root = useRef<HTMLElement>(null);
  const imageWrap = useRef<HTMLDivElement>(null);
  const imageEl = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const el = root.current;
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll("[data-reveal] .line-mask > span"), {
        yPercent: 110,
        duration: 1,
        ease: "power3.out",
        stagger: 0.05,
        scrollTrigger: { trigger: el, start: "top 80%" }
      });

      gsap.from(el.querySelectorAll("[data-fade]"), {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: { trigger: el, start: "top 75%" }
      });

      if (imageEl.current && imageWrap.current) {
        gsap.fromTo(
          imageEl.current,
          { scale: 1.18 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: imageWrap.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
        gsap.fromTo(
          imageEl.current,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: imageWrap.current,
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

  return (
    <section
      ref={root}
      data-project
      className="relative border-b border-line px-6 pt-28 pb-20 sm:px-10 sm:pt-40 sm:pb-32"
    >
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted sm:col-span-12">
          <span data-fade>
            ( {project.index} / {String(total).padStart(2, "0")} )
          </span>
          <span data-fade>{project.year}</span>
        </div>

        <div className="col-span-12 mt-6 min-w-0 sm:col-span-12">
          <p data-fade className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            {project.category}
          </p>
          <FitHeading
            text={project.title}
            as="h2"
            dataAttr="data-reveal"
            className="font-serif text-[14vw] leading-[0.9] tracking-tightest sm:text-[10vw]"
          />
        </div>

        <div ref={imageWrap} className="col-span-12 mt-10 overflow-hidden sm:col-span-9 sm:col-start-2 sm:mt-16">
          <Link
            href={`/work/${project.slug}`}
            data-cursor="view"
            className="relative block aspect-[16/10] w-full overflow-hidden bg-line"
          >
            <Image
              ref={imageEl as never}
              src={project.cover}
              alt={project.title}
              fill
              sizes="(min-width: 640px) 80vw, 100vw"
              className="object-cover"
              priority={project.index === "01"}
            />
          </Link>
        </div>

        <div className="col-span-12 mt-10 grid grid-cols-12 gap-6 sm:mt-16">
          <p data-fade className="col-span-12 max-w-prose text-base leading-relaxed text-ink sm:col-span-6 sm:col-start-2">
            {project.description}
          </p>
          <ul data-fade className="col-span-12 space-y-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted sm:col-span-4">
            <li className="flex justify-between gap-6 border-t border-line py-2">
              <span>Tools</span>
              <span className="text-ink text-right">{project.scope?.join(", ") ?? project.category}</span>
            </li>
            <li className="flex justify-between gap-6 border-t border-line py-2">
              <span>Year</span>
              <span className="text-ink">{project.year}</span>
            </li>
            <li className="flex justify-between gap-6 border-t border-line py-2">
              <span aria-hidden />
              <Link
                href={`/work/${project.slug}`}
                data-cursor="view"
                className="group inline-flex items-center gap-2 text-ink"
              >
                <span className="relative">
                  view site
                  <span className="absolute -bottom-px left-0 h-px w-full bg-current transition-transform duration-500 group-hover:scale-x-0 origin-right" />
                </span>
                <span aria-hidden>↗</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
