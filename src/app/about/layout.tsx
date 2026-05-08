import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — MURKA",
  description: "Meet the team behind MURKA, a Jakarta-based creative agency. We design, build, and deliver experiences that connect people with ideas.",
  openGraph: {
    title: "About — MURKA",
    description: "Meet the team behind MURKA, a Jakarta-based creative agency.",
    url: "https://murka.id/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
