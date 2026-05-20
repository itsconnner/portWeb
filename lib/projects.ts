export type ProjectGalleryItem = {
  src: string;
  alt: string;
  span?: "full" | "half" | "third";
  aspect?: string;
};

export type Project = {
  id: string;
  slug: string;
  index: string;
  category: string;
  title: string;
  year: string;
  client?: string;
  role?: string;
  scope?: string[];
  description: string;
  intro?: string;
  approach?: string;
  outcome?: string;
  credits: { role: string; name: string }[];
  cover: string;
  gallery?: ProjectGalleryItem[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "retro-ui-kit",
    slug: "retro-ui-kit",
    index: "01",
    category: "UI Kit Design",
    title: "Retro UI Kit",
    year: "2024",
    role: "UI Design, Visual Systems",
    scope: ["UI Design", "Components", "Typography"],
    description:
      "Designed a retro-inspired UI kit in Figma, focusing on cohesive visual systems, reusable components, typography, color hierarchy, and nostalgic interface aesthetics for modern digital products.",
    intro:
      "Designed a retro-inspired UI kit in Figma, focusing on cohesive visual systems, reusable components, typography, color hierarchy, and nostalgic interface aesthetics for modern digital products.",
    credits: [
      { role: "Design", name: "Yeyang" },
      { role: "Tools", name: "Figma" }
    ],
    cover: "/work1-hero.png",
    gallery: [
      { src: "https://picsum.photos/seed/retro-ui-1/2000/1100", alt: "UI kit overview", span: "full", aspect: "16/9" },
      { src: "https://picsum.photos/seed/retro-ui-2/1200/1500", alt: "Component sheet", span: "half", aspect: "4/5" },
      { src: "https://picsum.photos/seed/retro-ui-3/1200/1500", alt: "Type specimen", span: "half", aspect: "4/5" }
    ]
  },
  {
    id: "nintendo-redesign",
    slug: "nintendo-redesign",
    index: "02",
    category: "Website Redesign",
    title: "Website Redesign",
    year: "2024",
    role: "Web Design, Art Direction",
    scope: ["Web Design", "Art Direction", "Branding"],
    description:
      "Redesigned the official Nintendo website with an updated visual direction and improved layout structure. Created custom hero artwork and focused on enhancing user engagement, branding consistency, and overall user experience.",
    intro:
      "Redesigned the official Nintendo website with an updated visual direction and improved layout structure. Created custom hero artwork and focused on enhancing user engagement, branding consistency, and overall user experience.",
    credits: [
      { role: "Design", name: "Yeyang" },
      { role: "Tools", name: "Figma · Photoshop" }
    ],
    cover: "/work2-hero.png",
    gallery: [
      { src: "https://picsum.photos/seed/nintendo-1/2000/1100", alt: "Homepage hero", span: "full", aspect: "16/9" },
      { src: "https://picsum.photos/seed/nintendo-2/2000/1100", alt: "Layout exploration", span: "full", aspect: "16/9" }
    ]
  },
  {
    id: "figma-animation",
    slug: "figma-animation",
    index: "03",
    category: "Figma Animation",
    title: "Figma Motion",
    year: "2024",
    role: "Motion Design, Prototyping",
    scope: ["Animation", "Prototype", "Motion Design"],
    description:
      "Created advanced interactive animations and transitions in Figma to simulate dynamic web experiences, emphasizing motion design, user interaction flow, and immersive interface presentation.",
    intro:
      "Created advanced interactive animations and transitions in Figma to simulate dynamic web experiences, emphasizing motion design, user interaction flow, and immersive interface presentation.",
    credits: [
      { role: "Design", name: "Yeyang" },
      { role: "Tools", name: "Figma" }
    ],
    cover: "/work3-hero.png",
    gallery: [
      { src: "https://picsum.photos/seed/figma-anim-1/2000/1100", alt: "Animation frames", span: "full", aspect: "16/9" },
      { src: "https://picsum.photos/seed/figma-anim-2/1200/1500", alt: "Transition study", span: "half", aspect: "4/5" },
      { src: "https://picsum.photos/seed/figma-anim-3/1200/1500", alt: "Interaction map", span: "half", aspect: "4/5" }
    ]
  },
  {
    id: "polaroid-campaign",
    slug: "polaroid-campaign",
    index: "04",
    category: "Marketing Campaign",
    title: "Marketing Campaign",
    year: "2023",
    role: "Brand Strategy, Visual Direction",
    scope: ["Branding", "Strategy", "Research"],
    description:
      "Developed a branding and marketing campaign concept for Polaroid, including slogan creation, target audience research, visual direction planning, and market analysis to strengthen brand identity and engagement.",
    intro:
      "Developed a branding and marketing campaign concept for Polaroid, including slogan creation, target audience research, visual direction planning, and market analysis to strengthen brand identity and engagement.",
    credits: [
      { role: "Concept", name: "Yeyang" },
      { role: "Discipline", name: "Branding · Strategy" }
    ],
    cover: "/work4-hero.png",
    gallery: [
      { src: "https://picsum.photos/seed/polaroid-1/2000/1100", alt: "Campaign visual", span: "full", aspect: "16/9" },
      { src: "https://picsum.photos/seed/polaroid-2/1200/1500", alt: "Brand board", span: "half", aspect: "4/5" },
      { src: "https://picsum.photos/seed/polaroid-3/1200/1500", alt: "Audience study", span: "half", aspect: "4/5" }
    ]
  },
  {
    id: "game-settings-ui",
    slug: "game-settings-ui",
    index: "05",
    category: "Game UI Design",
    title: "Game UI",
    year: "2023",
    role: "UI Design, UX",
    scope: ["UI Design", "UX", "Accessibility"],
    description:
      "Designed a clean and functional settings interface for an indie game project, focusing on usability, accessibility, visual clarity, and player-friendly interaction design.",
    intro:
      "Designed a clean and functional settings interface for an indie game project, focusing on usability, accessibility, visual clarity, and player-friendly interaction design.",
    credits: [
      { role: "Design", name: "Yeyang" },
      { role: "Tools", name: "Figma" }
    ],
    cover: "/work5-hero.png",
    gallery: [
      { src: "https://picsum.photos/seed/game-ui-1/2000/1100", alt: "Settings screen", span: "full", aspect: "16/9" },
      { src: "https://picsum.photos/seed/game-ui-2/1200/1500", alt: "Component states", span: "half", aspect: "4/5" },
      { src: "https://picsum.photos/seed/game-ui-3/1200/1500", alt: "Accessibility notes", span: "half", aspect: "4/5" }
    ]
  },
  {
    id: "dark-reel",
    slug: "dark-reel",
    index: "06",
    category: "Web App",
    title: "Dark Reel",
    year: "2024",
    role: "UI/UX, Frontend",
    scope: ["UI/UX", "Frontend", "Database"],
    description:
      "Collaborated on the development of a movie review platform featuring user accounts, database integration, and review management systems. Contributed to interface design and overall user experience planning.",
    intro:
      "Collaborated on the development of a movie review platform featuring user accounts, database integration, and review management systems. Contributed to interface design and overall user experience planning.",
    credits: [
      { role: "Role", name: "UI / UX, Frontend" },
      { role: "Stack", name: "Web · Database" }
    ],
    cover: "/work6-hero.jpg",
    gallery: [
      { src: "https://picsum.photos/seed/dark-reel-1/2000/1100", alt: "Browse view", span: "full", aspect: "16/9" },
      { src: "https://picsum.photos/seed/dark-reel-2/1200/1500", alt: "Review detail", span: "half", aspect: "4/5" },
      { src: "https://picsum.photos/seed/dark-reel-3/1200/1500", alt: "Account flow", span: "half", aspect: "4/5" }
    ]
  },
  {
    id: "motion-3d",
    slug: "motion-3d",
    index: "07",
    category: "AE Animation & 3D",
    title: "Motion & 3D",
    year: "2025",
    role: "Motion, 3D",
    scope: ["After Effects", "3D Modeling", "Compositing"],
    description:
      "Produced a collection of animation and modeling projects using After Effects and 3D design tools, exploring motion graphics, visual storytelling, compositing, and creative experimentation.",
    intro:
      "Produced a collection of animation and modeling projects using After Effects and 3D design tools, exploring motion graphics, visual storytelling, compositing, and creative experimentation.",
    credits: [
      { role: "Animation", name: "Yeyang" },
      { role: "Tools", name: "After Effects · 3D" }
    ],
    cover: "/work7-hero.png",
    gallery: [
      { src: "https://picsum.photos/seed/motion-3d-1/2000/1100", alt: "Motion still", span: "full", aspect: "16/9" },
      { src: "https://picsum.photos/seed/motion-3d-2/1200/1500", alt: "3D render", span: "half", aspect: "4/5" },
      { src: "https://picsum.photos/seed/motion-3d-3/1200/1500", alt: "Composite", span: "half", aspect: "4/5" }
    ]
  }
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) return projects[0];
  return projects[(i + 1) % projects.length];
}

export const archive = [
  { year: "2024", title: "Sundial — wayfinding", category: "Identity" },
  { year: "2024", title: "Lumen Reports", category: "Editorial" },
  { year: "2023", title: "Plume — app icons", category: "Product" },
  { year: "2023", title: "Maison Garance", category: "Identity" },
  { year: "2022", title: "Quiet Coast", category: "Web" },
  { year: "2022", title: "Reverb FM", category: "Brand" },
  { year: "2021", title: "Field Manual no. 4", category: "Editorial" },
  { year: "2021", title: "Soft Geometry", category: "Exhibition" },
  { year: "2020", title: "Coda Studio", category: "Identity" },
  { year: "2020", title: "Tessera Type", category: "Type" }
];
