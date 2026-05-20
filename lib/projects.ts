export type ProjectGalleryItem = {
  src: string;
  alt: string;
  span?: "full" | "half" | "third";
  aspect?: string;
  width?: number;
  height?: number;
  caption?: string;
  maxWidth?: number;
  type?: "image" | "youtube";
  videoId?: string;
  description?: string;
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
  coverWidth?: number;
  coverHeight?: number;
  hideHeroOnDetail?: boolean;
  gallery?: ProjectGalleryItem[];
  liveUrl?: string;
  liveUrlLabel?: string;
  liveUrlNote?: string;
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
    coverWidth: 583,
    coverHeight: 332,
    hideHeroOnDetail: true,
    liveUrl:
      "https://www.figma.com/proto/0RH1mKhx5nrX2ZEPEegeSz/ui-kit?page-id=83%3A1226&node-id=186-6469&p=f&viewport=442%2C277%2C0.16&t=FoK7cIL8xp0b37kX-1&scaling=min-zoom&content-scaling=fixed",
    liveUrlLabel: "view figma prototype",
    gallery: [
      { src: "/w1/uikit.png", alt: "UI kit overview", span: "full", width: 3190, height: 2404 },
      { src: "/w1/screen.png", alt: "Screen sample", span: "full", width: 1731, height: 1564 },
      { src: "/w1/button.png", alt: "Button states", span: "half", width: 1606, height: 912 },
      { src: "/w1/bwi.png", alt: "Visual exploration", span: "half", width: 1638, height: 926 }
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
    coverWidth: 1920,
    coverHeight: 1080,
    hideHeroOnDetail: true,
    gallery: [
      { src: "/w2/about.png", alt: "Home page — desktop", span: "full", width: 1440, height: 5699, caption: "Home — desktop" },
      { src: "/w2/event.png", alt: "Event page — desktop", span: "full", width: 1440, height: 4696, caption: "Event — desktop" },
      { src: "/w2/about-mobile.png", alt: "Home page — mobile", span: "half", width: 640, height: 6075, caption: "Home — mobile", maxWidth: 320 },
      { src: "/w2/event-mobile.png", alt: "Event page — mobile", span: "half", width: 640, height: 4370, caption: "Event — mobile", maxWidth: 320 }
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
    coverWidth: 1288,
    coverHeight: 832,
    hideHeroOnDetail: true,
    liveUrl:
      "https://www.figma.com/proto/Fv0ynYQO1Kk11WAZSTlvPp/Single-Page-Yeyang_Wang?page-id=0%3A1&node-id=1-18&p=f&viewport=486%2C324%2C0.08&t=t5Tg7eJiHGlEPuGG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A18",
    liveUrlLabel: "view figma prototype",
    liveUrlNote: "This prototype is best viewed on desktop. Mobile preview may not display correctly.",
    gallery: [
      { src: "/w3/desktop.png", alt: "Desktop layout", span: "full", width: 1440, height: 5015, caption: "Desktop" },
      { src: "/w3/tablet.png", alt: "Tablet layout", span: "full", width: 1024, height: 3566, caption: "Tablet", maxWidth: 720 },
      { src: "/w3/phone.png", alt: "Mobile layout", span: "full", width: 430, height: 5487, caption: "Mobile", maxWidth: 320 }
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
    coverWidth: 1375,
    coverHeight: 1063,
    hideHeroOnDetail: true,
    gallery: [
      { src: "/w4/cover.png", alt: "Campaign cover", span: "full", width: 1375, height: 1063, caption: "Cover" },
      { src: "/w4/intro.png", alt: "Introduction", span: "half", width: 1375, height: 1063 },
      { src: "/w4/history.png", alt: "Brand history", span: "half", width: 1375, height: 1063 },
      { src: "/w4/smart-goals.png", alt: "SMART goals", span: "half", width: 1375, height: 1063 },
      { src: "/w4/personas.png", alt: "Personas overview", span: "half", width: 1375, height: 1063 },
      { src: "/w4/persona.png", alt: "Persona setup", span: "half", width: 1375, height: 1063 },
      { src: "/w4/persona-1.png", alt: "Persona 1", span: "half", width: 1375, height: 1063 },
      { src: "/w4/persona-2.png", alt: "Persona 2", span: "half", width: 1375, height: 1063 },
      { src: "/w4/persona-3.png", alt: "Persona 3", span: "half", width: 1375, height: 1063 },
      { src: "/w4/theme.png", alt: "Theme direction", span: "half", width: 1375, height: 1063 },
      { src: "/w4/guidelines.png", alt: "Brand guidelines", span: "half", width: 1375, height: 1063 },
      { src: "/w4/deliverables.png", alt: "Deliverables", span: "full", width: 1375, height: 1063, caption: "Deliverables" },
      { src: "/w4/print-1.png", alt: "Print collateral 1", span: "half", width: 1375, height: 1063 },
      { src: "/w4/print-2.png", alt: "Print collateral 2", span: "half", width: 1375, height: 1063 },
      { src: "/w4/print-3.png", alt: "Print collateral 3", span: "half", width: 1375, height: 1063 },
      { src: "/w4/print-4.png", alt: "Print collateral 4", span: "half", width: 1375, height: 1063 },
      { src: "/w4/print-5.png", alt: "Print collateral 5", span: "half", width: 1375, height: 1063 },
      { src: "/w4/print-6.png", alt: "Print collateral 6", span: "half", width: 1375, height: 1063 },
      { src: "/w4/social.png", alt: "Social campaign", span: "half", width: 1375, height: 1063 },
      { src: "/w4/social-2.png", alt: "Social campaign — variations", span: "half", width: 1375, height: 1063 },
      { src: "/w4/video.png", alt: "Video concept", span: "half", width: 1375, height: 1063 },
      { src: "/w4/video-1.png", alt: "Video frame 1", span: "half", width: 1375, height: 1063 },
      { src: "/w4/video-2.png", alt: "Video frame 2", span: "half", width: 1375, height: 1063 },
      { src: "/w4/conclusion.png", alt: "Conclusion", span: "full", width: 1375, height: 1063, caption: "Conclusion" }
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
      "UI design for an indie game by a friend. All pixel assets including buttons, panels, and icons were drawn from scratch in Aseprite, with attention to readability at native pixel scale and a cohesive 8/16 bit visual language.",
    intro:
      "UI design for an indie game by a friend. All pixel assets including buttons, panels, and icons were drawn from scratch in Aseprite, with attention to readability at native pixel scale and a cohesive 8/16 bit visual language.",
    credits: [
      { role: "Design", name: "Yeyang" },
      { role: "Tools", name: "Figma · Aseprite" }
    ],
    cover: "/work5-hero.png",
    coverWidth: 3003,
    coverHeight: 2034,
    hideHeroOnDetail: true,
    gallery: [
      { src: "/w5/group-53.png", alt: "UI assets overview", span: "full", width: 3003, height: 2034, caption: "Pixel UI assets" },
      { src: "/w5/setting-page.png", alt: "Settings page", span: "full", width: 1920, height: 1200, caption: "Settings" },
      { src: "/w5/without-title.png", alt: "In-game UI", span: "full", width: 1920, height: 1200, caption: "In-game UI" },
      { src: "/w5/group-59.png", alt: "Component sheet", span: "full", width: 1840, height: 1102, caption: "Components" }
    ]
  },
  {
    id: "uniqlo-app",
    slug: "uniqlo-app",
    index: "06",
    category: "Mobile App Design",
    title: "Uniqlo App Design",
    year: "2024",
    role: "UI/UX",
    scope: ["UI/UX", "Mobile", "Prototype"],
    description:
      "A concept redesign of the Uniqlo mobile shopping app, focused on cleaner product browsing, simpler checkout, and a more cohesive visual language across the experience.",
    intro:
      "A concept redesign of the Uniqlo mobile shopping app, focused on cleaner product browsing, simpler checkout, and a more cohesive visual language across the experience.",
    credits: [
      { role: "Design", name: "Yeyang" },
      { role: "Tools", name: "Figma" }
    ],
    cover: "/work7-hero.png",
    coverWidth: 1440,
    coverHeight: 1024,
    liveUrl:
      "https://www.figma.com/proto/w937paaD2JjPbI115CntHO/UID_A01_Wang_Yeyang?page-id=201%3A1462&node-id=201-1656&p=f&viewport=144%2C244%2C0.16&t=cGIKO8JoH7OVW01l-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=201%3A1649",
    liveUrlLabel: "view figma prototype"
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
      "Two fan-made motion projects exploring storytelling through After Effects and animated comic-style compositing.",
    intro:
      "Two fan-made motion projects exploring storytelling through After Effects and animated comic-style compositing.",
    credits: [
      { role: "Animation", name: "Yeyang" },
      { role: "Tools", name: "After Effects · Photoshop" }
    ],
    cover: "/work6-hero.jpg",
    coverWidth: 1440,
    coverHeight: 1024,
    hideHeroOnDetail: true,
    gallery: [
      {
        type: "youtube",
        videoId: "Qext2GtAGYQ",
        src: "https://youtu.be/Qext2GtAGYQ",
        alt: "Fan-made puzzle game trailer",
        span: "full",
        caption: "Fan-made puzzle game trailer",
        description:
          "A fan-made teaser for a puzzle game. The title was designed in Photoshop and all animation and 3D modeling were done in After Effects. Some clips are gameplay footage from the game itself."
      },
      {
        type: "youtube",
        videoId: "M3_i6Hk7Ji4",
        src: "https://youtu.be/M3_i6Hk7Ji4",
        alt: "Animated comic — Future State: Dark Detective",
        span: "full",
        caption: "Animated comic — Future State: Dark Detective #1",
        description:
          "A fan-made motion comic adapted from Batman: Future State — Dark Detective #1. Original comic art and story by DC; animation and compositing by me."
      },
      { src: "/w7/project-1.png", alt: "Project breakdown — puzzle game trailer", span: "half", width: 1920, height: 5766, caption: "Project 1" },
      { src: "/w7/project-2.jpg", alt: "Project breakdown — animated comic", span: "half", width: 1920, height: 5842, caption: "Project 2" }
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

export function getPrevProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) return projects[projects.length - 1];
  return projects[(i - 1 + projects.length) % projects.length];
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
