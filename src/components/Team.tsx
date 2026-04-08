"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ScrollOpacity from "./ScrollOpacity";
import "swiper/css";
import "swiper/css/pagination";

const team = [
  {
    name: "Alvinaldy Fitrah",
    role: "Co-Founder & CEO",
    image: "/images/team/alvinaldy.png",
  },
  {
    name: "Dinno Ardiansyah",
    role: "Co-Founder & CSO",
    image: "/images/team/dinno.png",
  },
  {
    name: "Maharyudha Bobby",
    role: "Co-Founder & CBO",
    image: "/images/team/bobby.png",
  },
  {
    name: "Ayu Rahma Wulandari",
    role: "Creative Director",
    image: "/images/team/ayu.png",
  },
];

export default function Team() {
  const photoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  // Strong upward parallax — image starts far below and crashes into the headings
  const imageY = useTransform(scrollYProgress, [0, 1], [800, -400]);

  return (
    <section
      id="about"
      className="overflow-hidden px-8 py-[8vh] md:px-12 lg:px-16"
      style={{ backgroundColor: "var(--accent-6)" }}
    >
      <div className="mx-auto max-w-[var(--site-max-width)]">
        {/* Label */}
        <h6 className="mb-8 font-sans text-sm font-semibold text-white/50">
          Meet the Crew
        </h6>

        {/* Photo section with layered headings for scroll reveal effect
             - Solid text BEHIND the photo (z-10)
             - Photo in the middle (z-20) with parallax
             - Outline/stroke text IN FRONT of the photo (z-30)
             Both headings share the same position so they visually appear as one.
             As the photo parallaxes over the solid text, the outline version
             in front creates the illusion of text becoming outlined. */}
        <div ref={photoRef} className="relative mb-12 overflow-hidden" style={{ minHeight: "120vh" }}>
          {/* Solid filled heading — BEHIND the photo */}
          <h2
            className="absolute left-0 top-[10%] z-10 font-sans font-light leading-[1.05] text-[var(--accent-2)]"
            style={{ fontSize: "clamp(36px, 5vw, 100px)" }}
          >
            Different minds.
            <br />
            Same madness.
          </h2>

          {/* Team photo with parallax — MIDDLE layer */}
          <motion.div
            style={{ y: imageY }}
            className="relative z-20 mx-auto aspect-[9/16] w-full max-w-[320px] overflow-hidden md:max-w-[420px] lg:max-w-[500px] xl:max-w-[580px]"
          >
            <Image
              src="/images/team/team-photo.jpg"
              alt="MURKA Team"
              fill
              className="object-cover brightness-[0.7] transition-[filter] duration-1000 hover:saturate-[1.2]"
            />
          </motion.div>

          {/* Outline/stroke heading — IN FRONT of the photo, same position as solid */}
          <h2
            className="stroke-text absolute left-0 top-[10%] z-30 font-sans font-light leading-[1.05]"
            style={{ fontSize: "clamp(36px, 5vw, 100px)" }}
          >
            Different minds.
            <br />
            Same madness.
          </h2>
        </div>

        {/* Description — positioned beside the photo area, no parallax */}
        <div className="relative -mt-[40vh] mb-12 flex justify-end">
          <ScrollOpacity start={0} end={0.35} direction="out-in" className="max-w-xl">
            <div>
              <p className="mb-4 font-sans font-light leading-relaxed text-[var(--accent-2)]" style={{ fontSize: "clamp(18px, 1.2vw, 26px)" }}>
                We&apos;re not just a team; we&apos;re the sum of late nights, wild
                ideas, and solid execution.
              </p>
              <p className="mb-4 font-sans font-light leading-relaxed text-[var(--accent-2)]" style={{ fontSize: "clamp(18px, 1.2vw, 26px)" }}>
                Each of us brings a different obsession: some chase visuals, some
                chase stories, and some make sure it all happens on time.
              </p>
              <p className="font-sans font-light leading-relaxed text-[var(--accent-2)]" style={{ fontSize: "clamp(18px, 1.2vw, 26px)" }}>
                Together, that&apos;s MURKA — chaos organized into impact.
              </p>
            </div>
          </ScrollOpacity>
        </div>

        {/* Team carousel */}
        <ScrollOpacity start={0.04} end={0.3} direction="out-in">
        <Swiper
          modules={[Pagination]}
          slidesPerView={2}
          spaceBetween={5}
          pagination={{ type: "fraction" }}
          speed={500}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
          }}
          className="team-swiper !pb-12"
        >
          {team.map((member) => (
            <SwiperSlide key={member.name}>
              <div className="group">
                <div className="relative mb-2 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={800}
                    height={960}
                    className="w-full object-cover transition-[filter] duration-1000 hover:saturate-[1.2]"
                  />
                </div>
                <h5 className="font-sans text-sm font-medium text-[var(--accent-2)] md:text-base">
                  {member.name}
                </h5>
                <p className="font-sans text-xs text-[var(--accent-3)]">
                  {member.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </ScrollOpacity>

        {/* Buttons — right aligned */}
        <div className="mt-4 flex justify-end gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="/about#People"
              className="inline-flex flex-row-reverse items-center gap-3 font-sans text-sm font-medium text-[var(--accent-2)] transition-colors hover:text-white/50"
            >
              People
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href="/careers"
              className="inline-flex flex-row-reverse items-center gap-3 font-sans text-sm font-medium text-[var(--accent-2)] transition-colors hover:text-white/50"
            >
              Open Positions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
