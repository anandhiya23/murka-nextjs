"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    title: "Pesta Kita",
    tags: [
      "Campaign Strategy",
      "Community Engagement",
      "Event Experience",
      "Key Visual Design",
    ],
    image: "/images/portfolio/pesta-kita.jpg",
    excerpt: "A movement where youth turned politics into culture.",
  },
  {
    title: "Hari Menjadi Manusia 2025",
    tags: [
      "Branding Identity",
      "Event Experience",
      "Event Production",
      "Logo",
      "Social Media Design",
    ],
    image: "/images/portfolio/hmm-2025.png",
    excerpt:
      "A day to pause, breathe, and remember what it means to be human.",
  },
  {
    title: "Relaunching Yayasan BUMN",
    tags: [
      "Branding Identity",
      "Logo",
      "Social Media",
      "Strategic Communication",
    ],
    image: "/images/portfolio/yayasan-bumn.png",
    excerpt:
      "A new era of social impact for Indonesia\u2019s state-owned enterprises.",
  },
];

export default function Portfolio() {
  return (
    <section id="work" style={{ backgroundColor: "var(--accent-6)" }}>
      {/* Carousel — offset right */}
      <div className="pl-8 md:pl-12 lg:pl-16">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{ clickable: true }}
          speed={800}
          loop
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 0 },
          }}
          className="portfolio-swiper !pb-12"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title} className="!h-auto">
              <div
                className="group relative flex min-h-[70vw] cursor-pointer flex-col justify-between overflow-hidden md:ml-[30px] md:min-h-[35vw]"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "var(--accent-6)",
                }}
              >
                {/* Top: gradient + tags + arrow */}
                <div
                  className="relative z-10 flex items-start justify-between p-5 md:p-[clamp(20px,1vw,40px)]"
                  style={{
                    background:
                      "linear-gradient(180deg, #00000040 0%, #00000000 100%)",
                  }}
                >
                  <div className="flex max-w-[70%] flex-wrap gap-x-1">
                    {project.tags.map((tag, i) => (
                      <span
                        key={tag}
                        className="font-sans text-xs font-normal text-white md:text-[clamp(10px,0.7vw,14px)]"
                      >
                        {tag}
                        {i < project.tags.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>
                  <Image
                    src="/images/icons/arrow-link.svg"
                    alt=""
                    width={40}
                    height={40}
                    className="h-6 w-6 flex-shrink-0 invert md:h-8 md:w-8 lg:h-10 lg:w-10"
                  />
                </div>

                {/* Bottom: gradient + title + excerpt */}
                <div
                  className="relative z-10 p-5 pt-12 md:p-[clamp(20px,1vw,40px)] md:pt-[clamp(40px,2vw,80px)]"
                  style={{
                    background:
                      "linear-gradient(360deg, #00000070 0%, #00000000 100%)",
                  }}
                >
                  <h4 className="mb-1 font-sans text-lg font-medium text-white md:text-2xl lg:text-3xl">
                    {project.title}
                  </h4>
                  <p className="font-sans text-xs text-white/70 md:text-sm">
                    {project.excerpt}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* See More */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-[6vh] pl-8 pt-[2vh] md:pl-[calc(30px+3rem)]"
        style={{ color: "var(--accent-2)" }}
      >
        <a
          href="/work"
          className="inline-flex items-center gap-4 font-sans text-sm font-medium text-[var(--accent-2)] transition-colors hover:text-white/50"
        >
          <span className="inline-block h-[1px] w-6 bg-current" />
          See More
        </a>
      </motion.div>
    </section>
  );
}
