import Image from "next/image";
import Link from "next/link";
import ProjectSection from "@/components/ProjectSection";
import ScrollCounter from "@/components/ScrollCounter";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <ScrollCounter total={projects.length} />

      <section className="relative flex min-h-[100svh] flex-col justify-end px-6 pb-16 pt-32 sm:px-10 sm:pb-20">
        <div className="mb-12 sm:mb-16">
          <Image
            src="/light.png"
            alt=""
            width={2757}
            height={912}
            priority
            className="banner-light h-auto w-full"
          />
          <Image
            src="/dark.png"
            alt=""
            width={2757}
            height={912}
            priority
            className="banner-dark h-auto w-full"
          />
        </div>
        <div className="grid grid-cols-12 gap-6">
          <p className="col-span-12 font-mono text-[11px] uppercase tracking-[0.22em] text-muted sm:col-span-3">
            ( {String(projects.length).padStart(2, "0")} ) selected
          </p>
          <div className="col-span-12 sm:col-span-9">
            <h1 className="font-serif text-[16vw] leading-[0.86] tracking-tightest sm:text-[11vw]">
              YEYANG
            </h1>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-muted">
              A personal portfolio of selected design and development work.
            </p>
            <div className="mt-10 flex gap-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              <Link href="/about" className="hover:text-ink">→ about</Link>
            </div>
          </div>
        </div>
      </section>

      <div>
        {projects.map((p) => (
          <ProjectSection key={p.id} project={p} total={projects.length} />
        ))}
      </div>
    </>
  );
}
