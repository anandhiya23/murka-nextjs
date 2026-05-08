import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — MURKA",
  description: "From brand identity to event production, MURKA offers a full suite of creative services to bring your boldest ideas to life.",
  openGraph: {
    title: "Services — MURKA",
    description: "From brand identity to event production, MURKA offers a full suite of creative services.",
    url: "https://murka.id/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
