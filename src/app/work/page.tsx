"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="bg-[var(--background)] pt-32">
        <div className="mx-auto max-w-[var(--site-max-width)] px-8 md:px-12 lg:px-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16 font-sans font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(40px, 4vw, 90px)" }}
          >
            Making your boldest
            <br />
            ideas a reality
          </motion.h1>

          {/* Featured project — full width */}
          <motion.a
            href={projects[0].href}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative mb-[30px] block min-h-[50vw] overflow-hidden md:min-h-[35vw]"
            style={{ backgroundColor: "var(--accent-6)" }}
          >
            <Image src={projects[0].image} alt={projects[0].title} fill className="object-cover object-center" priority />
            <div
              className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-6"
              style={{ background: "linear-gradient(180deg, #00000040 0%, #00000000 100%)" }}
            >
              <div className="flex flex-wrap gap-x-1">
                {projects[0].tags.map((tag, i) => (
                  <span key={tag} className="font-sans text-xs text-white">
                    {tag}{i < projects[0].tags.length - 1 ? "," : ""}
                  </span>
                ))}
              </div>
              <Image src="/images/icons/arrow-link.svg" alt="" width={40} height={40} className="h-8 w-8 invert lg:h-10 lg:w-10" />
            </div>
            <div
              className="absolute inset-x-0 bottom-0 z-10 p-6 pt-16"
              style={{ background: "linear-gradient(360deg, #00000070 0%, #00000000 100%)" }}
            >
              <h3 className="mb-1 font-sans text-2xl font-medium text-white md:text-4xl">{projects[0].title}</h3>
              <p className="font-sans text-sm text-white/70">{projects[0].excerpt}</p>
            </div>
          </motion.a>

          {/* 2-column grid for remaining projects */}
          <div className="grid gap-[30px] md:grid-cols-2">
            {projects.slice(1).map((project, i) => (
              <motion.a
                key={project.title}
                href={project.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative block min-h-[60vw] overflow-hidden md:min-h-[30vw]"
                style={{ backgroundColor: "var(--accent-6)" }}
              >
                <Image src={project.image} alt={project.title} fill className="object-cover object-center" />
                <div
                  className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-5"
                  style={{ background: "linear-gradient(180deg, #00000040 0%, #00000000 100%)" }}
                >
                  <div className="flex max-w-[70%] flex-wrap gap-x-1">
                    {project.tags.map((tag, j) => (
                      <span key={tag} className="font-sans text-xs text-white">
                        {tag}{j < project.tags.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>
                  <Image src="/images/icons/arrow-link.svg" alt="" width={40} height={40} className="h-6 w-6 invert md:h-8 md:w-8" />
                </div>
                <div
                  className="absolute inset-x-0 bottom-0 z-10 p-5 pt-12"
                  style={{ background: "linear-gradient(360deg, #00000070 0%, #00000000 100%)" }}
                >
                  <h4 className="mb-1 font-sans text-xl font-medium text-white md:text-2xl">{project.title}</h4>
                  <p className="font-sans text-xs text-white/70 md:text-sm">{project.excerpt}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="h-[10vh]" />
      </main>
      <Footer />
    </>
  );
}
