"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollOpacity from "./ScrollOpacity";

const stats = [
  { value: "100+", label: "ideas turned into reality" },
  { value: "30+", label: "clients trusted MURKA" },
  { value: "\u221E", label: "cups of coffee and chaos" },
];

const clients = [
  { name: "KBUMN", src: "/images/clients/kbumn.png" },
  { name: "Infipop", src: "/images/clients/infipop.png" },
  { name: "MM", src: "/images/clients/mm.png" },
  { name: "MOM", src: "/images/clients/mom.png" },
  { name: "PSSI", src: "/images/clients/pssi.png" },
];

export default function Stats() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--accent-6)" }}
    >
      {/* Halftone MURKA background image */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url(/images/hero/murka-halftone.png)",
          backgroundPosition: "top center",
          backgroundSize: "contain",
          top: "65px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[var(--site-max-width)]">
        {/* Intro text */}
        <div className="flex min-h-[40vh] items-end px-8 pb-16 pt-[35vh] md:min-h-[60vh] md:pt-[45vh] md:px-12 lg:px-16">
          <ScrollOpacity start={0.05} end={0.45} direction="out-in">
            <h3
              className="max-w-2xl font-sans font-light leading-relaxed text-[var(--accent-2)]"
              style={{ fontSize: "clamp(18px, 1.5vw, 28px)" }}
            >
              Numbers don&apos;t tell the whole story — but they prove one
              thing: we make things happen.
            </h3>
          </ScrollOpacity>
        </div>

        {/* Stats — stacked on mobile, 3-col on md+ */}
        <div className="grid grid-cols-1 gap-8 px-8 pb-10 md:grid-cols-3 md:gap-0 md:px-12 lg:px-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="mb-4 md:mb-10"
            >
              <span
                className="block font-sans font-light text-[var(--accent-2)]"
                style={{ fontSize: "clamp(60px, 5vw, 100px)", lineHeight: 1 }}
              >
                {stat.value}
              </span>
              <h4 className="mt-2 font-sans text-sm font-light text-white/50 md:text-base">
                {stat.label}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Client logos — wrapping row, evenly spaced */}
        <div className="flex min-h-[100px] flex-wrap items-center justify-between gap-6 border-t border-white/15 px-8 py-8 md:min-h-[130px] md:gap-0 md:px-12 lg:px-16">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.04 }}
              className="flex-shrink-0"
            >
              <Image
                src={client.src}
                alt={client.name}
                width={120}
                height={48}
                className="h-6 w-auto object-contain opacity-50 transition-opacity hover:opacity-80 md:h-8 lg:h-10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
