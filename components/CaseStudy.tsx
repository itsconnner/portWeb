"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "@/lib/projects";
import FitHeading from "@/components/FitHeading";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function CaseStudy({
  project,
  next
}: {
  project: Project;
  next: Project;
}) {
  const root = useRef<HTMLElement>(null);
  const heroImg = useRef<HTMLImageElement>(null);
  const heroWrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero] .line-mask > span", {
        yPercent: 110,
        duration: 1.05,
        ease: "power3.out",
        stagger: 0.04,
        delay: 0.1
      });
      gsap.from("[data-meta]", {
        opacity: 0,
        y: 18,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.06,
        delay: 0.15
      });
      gsap.from("[data-block]", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: { trigger: "[data-blocks]", start: "top 80%" }
      });
      gsap.from("[data-gallery] [data-tile]", {
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: { trigger: "[data-gallery]", start: "top 80%" }
      });

      if (heroImg.current && heroWrap.current) {
        gsap.fromTo(
          heroImg.current,
          { scale: 1.18, yPercent: -6 },
          {
            scale: 1,
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: heroWrap.current,
              start: "top top",
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
    <article ref={root} className="relative">
      <header className="px-6 pt-32 sm:px-10 sm:pt-40">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            <Link
              href="/"
              data-cursor="link"
              className="group inline-flex items-center gap-2 text-ink"
            >
              <span aria-hidden>←</span>
              <span className="relative">
                back to work
                <span className="absolute -bottom-px left-0 h-px w-full bg-current transition-transform duration-500 group-hover:scale-x-0 origin-right" />
              </span>
            </Link>
            <span data-meta>{project.year}</span>
          </div>

          <div data-meta className="col-span-12 mt-16 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            ( {project.index} ) {project.category}
          </div>

          <div className="col-span-12 mt-6 min-w-0">
            <FitHeading
              text={project.title}
              as="h1"
              dataAttr="data-hero"
              className="text-center font-serif text-5xl tracking-tightest sm:text-7xl"
            />
          </div>

          {project.intro && (
            <p
              data-meta
              className="col-span-12 mx-auto mt-10 max-w-2xl text-center font-mono text-sm leading-relaxed text-muted sm:text-[13px]"
            >
              {project.intro}
            </p>
          )}
        </div>
      </header>

      <div ref={heroWrap} className="mt-16 overflow-hidden px-6 sm:mt-24 sm:px-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-line">
          <Image
            ref={heroImg as never}
            src={project.cover}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <section data-blocks className="px-6 py-24 sm:px-10 sm:py-40">
        <div className="mx-auto max-w-2xl space-y-14 text-center">
          {project.approach && (
            <div data-block>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">approach</p>
              <p className="mt-4 font-mono text-sm leading-relaxed text-ink sm:text-[13px]">
                {project.approach}
              </p>
            </div>
          )}
          {project.outcome && (
            <div data-block>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">outcome</p>
              <p className="mt-4 font-mono text-sm leading-relaxed text-ink sm:text-[13px]">
                {project.outcome}
              </p>
            </div>
          )}
          {project.liveUrl && (
            <div data-block>
              <a
                data-cursor="link"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink"
              >
                <span className="relative">
                  visit site
                  <span className="absolute -bottom-px left-0 h-px w-full bg-current transition-transform duration-500 group-hover:scale-x-0 origin-right" />
                </span>
                <span aria-hidden>↗</span>
              </a>
            </div>
          )}
        </div>
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <section data-gallery className="px-6 pb-24 sm:px-10 sm:pb-40">
          <div className="grid grid-cols-12 gap-6">
            {project.gallery.map((g, i) => {
              const span =
                g.span === "full"
                  ? "col-span-12"
                  : g.span === "third"
                    ? "col-span-12 sm:col-span-4"
                    : "col-span-12 sm:col-span-6";
              return (
                <div key={i} data-tile className={span}>
                  <div className="relative w-full overflow-hidden bg-line" style={{ aspectRatio: g.aspect ?? "16/10" }}>
                    <Image src={g.src} alt={g.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <section className="border-t border-line px-6 py-20 sm:px-10 sm:py-32">
        <div className="grid grid-cols-12 items-end gap-6">
          <p className="col-span-12 font-mono text-[11px] uppercase tracking-[0.22em] text-muted sm:col-span-3">
            next project
          </p>
          <Link
            data-cursor="view"
            href={`/work/${next.slug}`}
            className="group col-span-12 min-w-0 sm:col-span-9"
          >
            <span className="block font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              ( {next.index} ) {next.category}
            </span>
            <FitHeading
              text={next.title}
              trailing=" →"
              as="span"
              className="mt-3 font-serif text-[14vw] leading-[0.88] tracking-tightest transition-transform duration-500 group-hover:-translate-y-1 sm:text-[9vw]"
            />
          </Link>
        </div>
      </section>
    </article>
  );
}
