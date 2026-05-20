import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { getNextProject, getPrevProject, getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) return {};
  return { title: `${p.title} — Yeyang Wang`, description: p.description };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const next = getNextProject(params.slug);
  const prev = getPrevProject(params.slug);
  return <CaseStudy project={project} next={next} prev={prev} />;
}
