export interface Project {
  title: string;
  tags: string[];
  image: string;
  excerpt: string;
  href: string;
}

export const projects: Project[] = [
  {
    title: "Hari Menjadi Manusia 2025",
    tags: ["Branding Identity", "Event Experience", "Event Production", "Logo", "Social Media Design"],
    image: "/images/portfolio/hmm-2025.png",
    excerpt: "A day to pause, breathe, and remember what it means to be human.",
    href: "/work/hari-menjadi-manusia-2025",
  },
  {
    title: "Relaunching Yayasan BUMN",
    tags: ["Branding Identity", "Logo", "Social Media", "Strategic Communication"],
    image: "/images/portfolio/yayasan-bumn.png",
    excerpt: "A new era of social impact for Indonesia’s state-owned enterprises.",
    href: "/work/relaunching-yayasan-bumn",
  },
  {
    title: "Pesta Kita",
    tags: ["Campaign Strategy", "Community Engagement", "Event Experience", "Key Visual Design"],
    image: "/images/portfolio/pesta-kita.jpg",
    excerpt: "A movement where youth turned politics into culture.",
    href: "/work/pesta-kita",
  },
];
