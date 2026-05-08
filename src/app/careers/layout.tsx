import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — MURKA",
  description: "Join the MURKA team. We're looking for bold creatives to help us make noise in Jakarta and beyond.",
  openGraph: {
    title: "Careers — MURKA",
    description: "Join the MURKA team. We're looking for bold creatives.",
    url: "https://murka.id/careers",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
