"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";
import ScrollOpacity from "@/components/ScrollOpacity";
import { clients } from "@/data/clients";

const team = [
  { name: "Alvinaldy Fitrah", role: "Co-Founder & CEO", image: "/images/team/alvinaldy.png" },
  { name: "Dinno Ardiansyah", role: "Co-Founder & CSO", image: "/images/team/dinno.png" },
  { name: "Maharyudha Bobby", role: "Co-Founder & CBO", image: "/images/team/bobby.png" },
  { name: "Ayu Rahma Wulandari", role: "Creative Director", image: "/images/team/ayu.png" },
];

export default function AboutPage() {
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
              Telling your brand
              <br />
              story through action
            </motion.h1>
          </div>
        </section>

        {/* About intro */}
        <section className="bg-[var(--background)] px-8 py-16 md:px-12 lg:px-16">
          <div className="mx-auto max-w-[var(--site-max-width)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-[15%]">
              <h6 className="flex-shrink-0 font-sans text-sm font-light text-[var(--muted)]">About</h6>
              <div className="flex-1">
                <TextReveal
                  text="As a closely bonded team of seasoned creatives, we come together to conceive, design, and execute campaigns, events, and brand experiences that not only captivate but also stir profound emotions — leaving audiences with unforgettable memories."
                  className="mb-8 font-sans font-light leading-[1.35] text-foreground"
                  style={{ fontSize: "clamp(22px, 2.2vw, 50px)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Beliefs */}
        <section className="px-8 py-16 md:px-12 lg:px-16" style={{ backgroundColor: "var(--accent-6)" }}>
          <div className="mx-auto max-w-[var(--site-max-width)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-[15%]">
              <h6 className="flex-shrink-0 font-sans text-sm font-light text-white/50">Our beliefs</h6>
              <div className="flex-1">
                <ScrollOpacity start={0.05} end={0.4} direction="out-in">
                  <h2 className="mb-8 font-sans font-light leading-[1.3] text-[var(--accent-2)]" style={{ fontSize: "clamp(22px, 2vw, 48px)" }}>
                    We are firm believers in the transformative force of honesty and bold creativity. These values underpin our ability to craft work that ignites inspiration in others. We recognize that without meaning, purpose is elusive — and without execution, ideas remain just that.
                  </h2>
                </ScrollOpacity>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="bg-[var(--background)] px-8 py-16 md:px-12 lg:px-16">
          <div className="mx-auto max-w-[var(--site-max-width)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-[15%]">
              <h6 className="flex-shrink-0 font-sans text-sm font-light text-[var(--muted)]">Why us</h6>
              <div className="flex-1 space-y-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="mb-4 font-sans text-2xl font-light text-foreground md:text-3xl">Collaboration is the key</h3>
                  <p className="max-w-2xl font-sans text-base font-light leading-relaxed text-[var(--muted)]">
                    We place a strong emphasis on communication and transparency throughout every phase of our projects, ensuring a premium client experience from inception to completion. Our experience working with startups has enhanced our agility, while our collaborations with enterprise brands have honed our project management expertise.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="mb-4 font-sans text-2xl font-light text-foreground md:text-3xl">Our work is built to last</h3>
                  <p className="max-w-2xl font-sans text-base font-light leading-relaxed text-[var(--muted)]">
                    We design with scalability and long-term sustainability in mind, aligning seamlessly with your enduring business goals. Our campaigns, brand systems, and event frameworks are built to evolve with you — not expire after one cycle.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* People */}
        <section id="People" className="px-8 py-16 md:px-12 lg:px-16" style={{ backgroundColor: "var(--accent-6)" }}>
          <div className="mx-auto max-w-[var(--site-max-width)]">
            <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:gap-[15%]">
              <h6 className="flex-shrink-0 font-sans text-sm font-light text-white/50">People</h6>
              <div className="flex-1">
                <h2 className="mb-4 font-sans font-light leading-[1.1] text-[var(--accent-2)]" style={{ fontSize: "clamp(32px, 3vw, 70px)" }}>
                  People over profit
                </h2>
                <p className="max-w-2xl font-sans text-base font-light leading-relaxed text-white/60">
                  At MURKA, we place people first — not profits. We prioritize our team, our clients, and the communities we serve by delivering work that matters, maintaining transparency, and treating every project like it&apos;s our own. Great work comes from great people, and great people deserve an environment where they can thrive.
                </p>
              </div>
            </div>

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
                    <h5 className="font-sans text-sm font-medium text-[var(--accent-2)] md:text-base">{member.name}</h5>
                    <p className="font-sans text-xs text-[var(--accent-3)]">{member.role}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Clients */}
        <section className="bg-[var(--background)] px-8 py-16 md:px-12 lg:px-16">
          <div className="mx-auto max-w-[var(--site-max-width)]">
            <h6 className="mb-12 font-sans text-sm font-light text-[var(--muted)]">Selected Clients</h6>
            <div className="flex flex-wrap items-center justify-between gap-8">
              {clients.map((client, i) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={120}
                    height={48}
                    className="h-8 w-auto object-contain opacity-70 invert transition-opacity hover:opacity-100 md:h-10"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
