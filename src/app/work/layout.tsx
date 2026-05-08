import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — MURKA",
  description: "Selected projects by MURKA — campaigns, events, branding, and experiences that move people.",
  openGraph: {
    title: "Work — MURKA",
    description: "Selected projects by MURKA — campaigns, events, branding, and experiences that move people.",
    url: "https://murka.id/work",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
