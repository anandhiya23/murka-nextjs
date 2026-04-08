"use client";

import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

export default function WhatWeDo() {
  return (
    <section className="bg-[var(--background)] px-8 py-[10vh] md:px-12 lg:px-16">
      <div className="mx-auto max-w-[var(--site-max-width)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-[15%]">
          {/* Left: Label */}
          <div className="flex-shrink-0">
            <h6 className="font-sans text-sm font-light text-[var(--muted)]">
              What We Do
            </h6>
          </div>

          {/* Right: Content */}
          <div className="flex-1">
            <TextReveal
              text="We turn ideas into moments that stick — the kind you talk about on the way home and keep seeing in your feed. From the first brief to the last cue, we align strategy, creative, and flawless execution so brands don't just show up, they land: in culture, in community, and in results."
              className="mb-10 font-sans font-light leading-[1.35] text-foreground"
              style={{ fontSize: "clamp(22px, 2.2vw, 50px)" }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="/about"
                className="inline-flex flex-row-reverse items-center gap-3 font-sans text-sm font-medium text-foreground transition-colors hover:text-[var(--muted)]"
              >
                About
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
