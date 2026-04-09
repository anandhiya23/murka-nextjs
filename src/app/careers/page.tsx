"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";
import ScrollOpacity from "@/components/ScrollOpacity";

const openings = [
  {
    title: "Freelance Designer",
    type: "Freelance",
    description: "We\u2019re looking for innovative creators to help us design experiences that move people.",
  },
  {
    title: "UX Designer Intern",
    type: "Internship",
    description: "Join our team and learn the craft of designing meaningful brand experiences from the ground up.",
  },
];

export default function CareersPage() {
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
              Work and life
              <br />
              at MURKA
            </motion.h1>
          </div>
        </section>

        {/* Culture */}
        <section className="bg-[var(--background)] px-8 py-16 md:px-12 lg:px-16">
          <div className="mx-auto max-w-[var(--site-max-width)]">
            <TextReveal
              text="Everyone deserves an environment where they can thrive. We firmly believe that building a solid team, fostering genuine collaboration, and creating a comfortable work environment extend far beyond the confines of the studio."
              className="mb-8 max-w-4xl font-sans font-light leading-[1.35] text-foreground"
              style={{ fontSize: "clamp(22px, 2.2vw, 50px)" }}
            />
          </div>
        </section>

        {/* Values */}
        <section className="px-8 py-16 md:px-12 lg:px-16" style={{ backgroundColor: "var(--accent-6)" }}>
          <div className="mx-auto max-w-[var(--site-max-width)]">
            <ScrollOpacity start={0.05} end={0.4} direction="out-in">
              <h2 className="mb-8 max-w-3xl font-sans font-light leading-[1.3] text-[var(--accent-2)]" style={{ fontSize: "clamp(22px, 2vw, 48px)" }}>
                To ensure this, we organize monthly team outings and bi-annual offsite events, actively promote time off, and believe that the best ideas come from well-rested minds. We don&apos;t just build campaigns — we build a culture worth showing up for.
              </h2>
            </ScrollOpacity>
          </div>
        </section>

        {/* Open Positions */}
        <section className="bg-[var(--background)] px-8 py-16 md:px-12 lg:px-16">
          <div className="mx-auto max-w-[var(--site-max-width)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-[15%]">
              <div className="flex-shrink-0">
                <h6 className="font-sans text-sm font-light text-[var(--muted)]">Open Positions</h6>
              </div>
              <div className="flex-1">
                <h2 className="mb-12 font-sans font-light leading-[1.1] text-foreground" style={{ fontSize: "clamp(28px, 2.5vw, 56px)" }}>
                  We are always in search of great humans looking to grow
                </h2>

                <div className="space-y-8">
                  {openings.map((job, i) => (
                    <motion.div
                      key={job.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group flex cursor-pointer items-start justify-between border-b border-[var(--accent-7)] pb-8 transition-colors"
                    >
                      <div>
                        <h3 className="mb-2 font-sans text-xl font-medium text-foreground md:text-2xl">{job.title}</h3>
                        <span className="mb-3 inline-block rounded-full bg-[var(--accent-6)] px-3 py-1 font-sans text-xs text-[var(--accent-2)]">
                          {job.type}
                        </span>
                        <p className="mt-2 max-w-lg font-sans text-sm font-light text-[var(--muted)]">{job.description}</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 flex-shrink-0 text-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
