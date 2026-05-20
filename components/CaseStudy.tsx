"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "@/lib/projects";
import FitHeading from "@/components/FitHeading";
import Lightbox from "@/components/Lightbox";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function CaseStudy({
  project,
  next,
  prev
}: {
  project: Project;
  next: Project;
  prev: Project;
}) {
  const root = useRef<HTMLElement>(null);
  const heroImg = useRef<HTMLImageElement>(null);
  const heroWrap = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryItems = project.gallery ?? [];
  const lightboxImages = galleryItems.filter((g) => g.type !== "youtube");

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

          {project.liveUrl && (
            <div data-meta className="col-span-12 mt-8 flex justify-center">
              <a
                data-cursor="link"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 border border-line px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-ink hover:text-bg"
              >
                <span>{project.liveUrlLabel ?? "visit site"}</span>
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </a>
            </div>
          )}
        </div>
      </header>

      {!project.hideHeroOnDetail && (
        <div ref={heroWrap} className="mt-16 px-6 sm:mt-24 sm:px-20 lg:px-32">
          <div className="mx-auto w-full max-w-5xl overflow-hidden">
            <Image
              ref={heroImg as never}
              src={project.cover}
              alt={project.title}
              width={project.coverWidth ?? 2000}
              height={project.coverHeight ?? 1125}
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      )}

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
        </div>
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <section data-gallery className="px-6 pb-24 sm:px-20 sm:pb-40 lg:px-32">
          <div className="mx-auto grid max-w-5xl grid-cols-12 gap-x-6 gap-y-12">
            {project.gallery.map((g, i) => {
              const span =
                g.span === "full"
                  ? "col-span-12"
                  : g.span === "third"
                    ? "col-span-12 sm:col-span-4"
                    : "col-span-12 sm:col-span-6";

              if (g.type === "youtube" && g.videoId) {
                return (
                  <figure key={i} data-tile className={`${span} flex flex-col items-center`}>
                    <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${g.videoId}?rel=0`}
                        title={g.alt}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full border-0"
                      />
                    </div>
                    {g.caption && (
                      <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                        {g.caption}
                      </figcaption>
                    )}
                    {g.description && (
                      <p className="mx-auto mt-3 max-w-2xl text-center font-mono text-[13px] leading-relaxed text-muted sm:text-sm">
                        {g.description}
                      </p>
                    )}
                  </figure>
                );
              }

              return (
                <figure key={i} data-tile className={`${span} flex flex-col items-center`}>
                  <button
                    type="button"
                    onClick={() => {
                      const lbIdx = lightboxImages.findIndex((it) => it.src === g.src);
                      if (lbIdx >= 0) setLightboxIndex(lbIdx);
                    }}
                    aria-label={`Open ${g.alt}`}
                    className="block w-full cursor-zoom-in"
                    style={g.maxWidth ? { maxWidth: `${g.maxWidth}px` } : undefined}
                  >
                    <Image
                      src={g.src}
                      alt={g.alt}
                      width={g.width ?? 1600}
                      height={g.height ?? 1000}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="h-auto w-full transition-opacity duration-300 hover:opacity-90"
                    />
                  </button>
                  {g.caption && (
                    <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                      {g.caption}
                    </figcaption>
                  )}
                </figure>
              );
            })}
          </div>
        </section>
      )}

      {lightboxIndex !== null && lightboxImages.length > 0 && (
        <Lightbox
          items={lightboxImages.map((g) => ({ src: g.src, alt: g.alt }))}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((i) =>
              i === null ? null : (i - 1 + lightboxImages.length) % lightboxImages.length
            )
          }
          onNext={() =>
            setLightboxIndex((i) =>
              i === null ? null : (i + 1) % lightboxImages.length
            )
          }
        />
      )}

      <section className="border-t border-line px-6 py-16 sm:px-10 sm:py-24">
        <div className="mb-12 flex justify-center sm:mb-16">
          <Link
            href="/"
            data-cursor="link"
            className="group inline-flex items-center gap-3 border border-line px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-ink hover:text-bg"
          >
            <span aria-hidden>←</span>
            <span>back to work</span>
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <Link
            data-cursor="view"
            href={`/work/${prev.slug}`}
            className="group col-span-12 min-w-0 sm:col-span-6"
          >
            <span className="block font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              ← previous
            </span>
            <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              ( {prev.index} ) {prev.category}
            </span>
            <span className="mt-2 block font-serif text-2xl leading-tight tracking-tight transition-transform duration-500 group-hover:-translate-x-1 sm:text-3xl">
              {prev.title}
            </span>
          </Link>

          <Link
            data-cursor="view"
            href={`/work/${next.slug}`}
            className="group col-span-12 min-w-0 text-right sm:col-span-6"
          >
            <span className="block font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              next →
            </span>
            <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              ( {next.index} ) {next.category}
            </span>
            <span className="mt-2 block font-serif text-2xl leading-tight tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
              {next.title}
            </span>
          </Link>
        </div>
      </section>
    </article>
  );
}
