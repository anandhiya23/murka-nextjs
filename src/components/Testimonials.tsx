"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "MURKA doesn\u2019t just handle events \u2014 they build atmospheres. Every detail, from concept to crowd, felt intentional. Our launch turned into something people are still talking about.",
    cite: "Rania Yusuf, Brand Experience Lead",
  },
  {
    quote:
      "They got what we meant faster than we could explain it. MURKA translated our messy brief into a campaign that actually moved people \u2014 not just metrics.",
    cite: "Dimas Rahadian, Head of Marketing",
  },
  {
    quote:
      "Working with MURKA felt like having a creative partner who cares as much about the purpose as the production. They turned our idea into a living, breathing movement.",
    cite: "Michael Brown, Founder at Fabriks",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[var(--background)] px-8 py-[8vh] md:px-12 lg:px-16">
      <div className="mx-auto max-w-[var(--site-max-width)]">
        {/* Header: label + dash | subtitle */}
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-[20%]">
          <div className="flex items-center gap-3">
            <h6 className="font-sans text-sm font-light text-[var(--muted)]">
              What They Say
            </h6>
            <span className="inline-block h-[1px] w-6 bg-[var(--muted)]" />
          </div>
          <p className="max-w-md font-sans text-sm font-light leading-relaxed text-[var(--muted)]">
            No slogans, no fluff — just what our partners said after the lights
            went down and the work was done.
          </p>
        </div>

        {/* Testimonials — 3 col on desktop */}
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          speed={500}
          breakpoints={{
            768: { slidesPerView: 1, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          className="testimonials-swiper !pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.cite}>
              <div className="flex h-full flex-col">
                {/* Quote icon top-left */}
                <div className="mb-6">
                  <Image
                    src="/images/icons/quote.svg"
                    alt=""
                    width={35}
                    height={35}
                  />
                </div>

                {/* Quote text */}
                <p className="mb-8 font-sans text-base font-light leading-[1.5] text-foreground/80 md:text-[clamp(16px,0.9vw,22px)]">
                  {t.quote}
                </p>

                {/* Citation */}
                <cite className="mt-auto block font-sans text-sm font-medium not-italic text-[var(--muted)]">
                  ⎯&nbsp;&nbsp;{t.cite}
                </cite>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
