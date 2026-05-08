import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — MURKA",
  description: "Let's build something great together. Reach out to MURKA's creative team in Jakarta.",
  openGraph: {
    title: "Contact — MURKA",
    description: "Let's build something great together. Reach out to MURKA's creative team.",
    url: "https://murka.id/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
