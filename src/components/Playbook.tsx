"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Strategy & Advisory",
    icon: "/images/icons/strategy.svg",
    items: [
      "Narrative & message strategy",
      "Campaign architecture & comms playbooks",
      "Crisis & reputation support",
      "Measurement & learning loops",
    ],
  },
  {
    title: "Creative & Design",
    icon: "/images/icons/creative.svg",
    items: [
      "Brand identity & guidelines",
      "Event branding & scenography",
      "Key visuals, motion, screen content",
      "Asset systems for multi-channel rollout",
    ],
  },
  {
    title: "Content & Media",
    icon: "/images/icons/content.svg",
    items: [
      "Video production (reels, aftermovies, docs)",
      "Live stream & broadcast packages",
      "KOL/creator management",
      "Social toolkits & distribution",
    ],
  },
  {
    title: "Events & Experiences",
    icon: "/images/icons/events.svg",
    items: [
      "Opening/closing ceremonies, launches, festivals",
      "Fan zones, pop-ups, interactive installations",
      "Showcalling, stage management, artistas & protocol",
      "Venue, technical, and operations",
    ],
  },
];

export default function Playbook() {
  return (
    <section
      id="services"
      className="border-t border-[var(--accent-6)] px-8 py-[5vh] pb-[8vh] md:px-12 lg:px-16"
      style={{ backgroundColor: "var(--lime)" }}
    >
      <div className="mx-auto max-w-[var(--site-max-width)] pt-[5vh]">
        <motion.h6
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 font-sans text-sm font-normal text-[var(--accent-6)]"
        >
          Our Playbook
        </motion.h6>

        {/* 2x2 grid matching screenshot */}
        <div className="grid gap-[30px] sm:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-lg bg-white p-[30px] transition-all duration-300 hover:bg-[var(--accent-1)]"
            >
              {/* Icon — zoomIn animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-auto"
              >
                <Image
                  src={service.icon}
                  alt=""
                  width={70}
                  height={70}
                  className="h-[60px] w-[60px] transition-all duration-300 group-hover:brightness-0 group-hover:invert md:h-[70px] md:w-[70px]"
                />
              </motion.div>

              {/* Spacer */}
              <div className="h-[10vh]" />

              {/* Title */}
              <h3 className="mb-4 font-sans text-xl font-medium text-[var(--accent-1)] transition-colors duration-300 group-hover:text-white md:text-2xl">
                {service.title}
              </h3>

              {/* Items */}
              <div className="space-y-2">
                {service.items.map((item) => (
                  <p
                    key={item}
                    className="font-sans text-sm leading-relaxed text-[var(--accent-3)] transition-colors duration-300 group-hover:text-white/70"
                  >
                    ➤ {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
