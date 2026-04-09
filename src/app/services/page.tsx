"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";

const services = [
  {
    id: "strategy",
    icon: "/images/icons/strategy.svg",
    title: "Strategy & Advisory",
    description: "What truly defines a brand is the emotional connection it forges during every interaction. We specialize in helping both established and emerging brands craft narratives that authentically represent their core essence — from campaign architecture to crisis support.",
    items: [
      "Narrative & message strategy",
      "Campaign architecture & comms playbooks",
      "Crisis & reputation support",
      "Measurement & learning loops",
    ],
  },
  {
    id: "design",
    icon: "/images/icons/creative.svg",
    title: "Creative & Design",
    description: "By seamlessly blending distinctive design and advanced technology, we construct visual systems precisely as envisioned. Every brand touchpoint is crafted to communicate with clarity and aesthetic impact.",
    items: [
      "Brand identity & guidelines",
      "Event branding & scenography",
      "Key visuals, motion, screen content",
      "Asset systems for multi-channel rollout",
    ],
  },
  {
    id: "marketing",
    icon: "/images/icons/content.svg",
    title: "Content & Media",
    description: "We unleash the power of content and media to propel brands to new heights. With a comprehensive, story-driven strategy, we foster growth through authentic storytelling across every channel.",
    items: [
      "Video production (reels, aftermovies, docs)",
      "Live stream & broadcast packages",
      "KOL/creator management",
      "Social toolkits & distribution",
    ],
  },
  {
    id: "development",
    icon: "/images/icons/events.svg",
    title: "Events & Experiences",
    description: "From intimate brand activations to large-scale festivals, we design and produce experiences that people don\u2019t just attend — they remember. Every detail, from concept to crowd, is intentional.",
    items: [
      "Opening/closing ceremonies, launches, festivals",
      "Fan zones, pop-ups, interactive installations",
      "Showcalling, stage management, artistas & protocol",
      "Venue, technical, and operations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[var(--background)] px-8 pb-16 pt-40 md:px-12 lg:px-16">
          <div className="mx-auto max-w-[var(--site-max-width)]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 font-sans font-light leading-[1.1] text-foreground"
              style={{ fontSize: "clamp(40px, 4vw, 90px)" }}
            >
              A holistic approach
              <br />
              from beginning to end
            </motion.h1>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-[var(--background)] px-8 pb-16 md:px-12 lg:px-16">
          <div className="mx-auto max-w-[var(--site-max-width)]">
            <TextReveal
              text="Whether crafting a brand launch or orchestrating a comprehensive campaign, our primary focus is creating solution-driven, visually captivating work. Creative execution is at the heart of everything we do."
              className="max-w-4xl font-sans font-light leading-[1.35] text-foreground"
              style={{ fontSize: "clamp(20px, 1.8vw, 40px)" }}
            />
          </div>
        </section>

        {/* Service blocks */}
        {services.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            className="border-t border-[var(--accent-7)] px-8 py-20 md:px-12 lg:px-16"
            style={{ backgroundColor: i % 2 === 0 ? "var(--accent-6)" : "var(--background)" }}
          >
            <div className="mx-auto max-w-[var(--site-max-width)]">
              <div className="flex flex-col gap-12 lg:flex-row lg:gap-[10%]">
                {/* Left: icon + title */}
                <div className="flex-shrink-0 lg:w-[35%]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mb-6"
                  >
                    <Image
                      src={service.icon}
                      alt=""
                      width={70}
                      height={70}
                      className={`h-16 w-16 md:h-20 md:w-20 ${i % 2 !== 0 ? "" : "invert"}`}
                    />
                  </motion.div>
                  <h2
                    className={`font-sans font-light leading-[1.1] ${i % 2 === 0 ? "text-[var(--accent-2)]" : "text-foreground"}`}
                    style={{ fontSize: "clamp(28px, 2.5vw, 56px)" }}
                  >
                    {service.title}
                  </h2>
                </div>

                {/* Right: description + items */}
                <div className="flex-1">
                  <p className={`mb-8 font-sans text-base font-light leading-relaxed md:text-lg ${i % 2 === 0 ? "text-white/60" : "text-[var(--muted)]"}`}>
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className={`font-sans text-sm leading-relaxed ${i % 2 === 0 ? "text-white/50" : "text-[var(--muted)]"}`}>
                        ➤ {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
