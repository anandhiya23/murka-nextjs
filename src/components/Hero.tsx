"use client";

import { useState, useEffect, useLayoutEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rotatingWords = ["Design", "Strategy", "Experience", "Stories"];

function SwirlWord({ word, isActive }: { word: string; isActive: boolean }) {
  const letters = word.split("");

  return (
    <span className="inline-flex" aria-label={word}>
      <AnimatePresence mode="popLayout">
        {isActive &&
          letters.map((letter, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{
                opacity: 0,
                rotateX: -90,
                rotateZ: -5,
                y: 20,
                scale: 0.85,
                filter: "blur(4px)",
              }}
              animate={{
                opacity: 1,
                rotateX: 0,
                rotateZ: 0,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                rotateX: 90,
                rotateZ: 5,
                y: -20,
                scale: 0.85,
                filter: "blur(4px)",
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.04,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="inline-block origin-bottom"
              style={{ perspective: "500px" }}
            >
              {letter}
            </motion.span>
          ))}
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [wordWidth, setWordWidth] = useState<number>(0);
  const measRef = useRef<HTMLSpanElement>(null);

  const nextWord = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % rotatingWords.length);
  }, []);

  useLayoutEffect(() => {
    if (measRef.current) {
      setWordWidth(measRef.current.scrollWidth);
    }
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(nextWord, 2500);
    return () => clearInterval(interval);
  }, [nextWord]);

  return (
    <section
      className="relative flex min-h-[113vh] flex-col justify-end overflow-hidden md:min-h-[113vh]"
      style={{ backgroundColor: "var(--accent-6)" }}
    >
      {/* Background image — top right, 50% width */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url(/images/hero/hero-6.png)",
          backgroundPosition: "top right",
          backgroundSize: "50% auto",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #00000000 80%, #000000 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[var(--site-max-width)] px-8 md:px-12 lg:px-16">
        {/* Animated headline with swirl */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-[2vh]"
        >
          <h1
            className="font-sans font-light leading-[1.1]"
            style={{
              fontSize: "clamp(48px, 6vw, 120px)",
              color: "var(--accent-2)",
              perspective: "500px",
            }}
          >
            Let&apos;s Make Noise
            <br />
            Through{" "}
            <span
              className="inline-block overflow-x-clip overflow-y-visible align-bottom transition-[width] duration-500 ease-in-out"
              style={{ width: wordWidth || "auto" }}
            >
              <span ref={measRef} className="inline-block">
                {rotatingWords.map((word, i) => (
                  <span
                    key={word}
                    className={i === activeIndex ? "inline" : "hidden"}
                  >
                    <SwirlWord word={word} isActive={i === activeIndex} />
                  </span>
                ))}
              </span>
            </span>
            .
          </h1>
        </motion.div>

        {/* Play button + Step into our world */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-[2vh]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              stiffness: 200,
              damping: 12,
            }}
            className="flex items-center gap-4"
          >
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 transition-all hover:scale-110 hover:border-white"
              aria-label="Play video"
              style={{ animation: "pulse-grow 1.5s ease-in-out infinite" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="white"
                className="ml-0.5"
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </button>
            <h6 className="font-sans text-sm font-medium text-white/80">
              <a href="#" className="transition-colors hover:text-white">
                Step into our world
              </a>
            </h6>
          </motion.div>
        </motion.div>

        {/* Spacer */}
        <div className="h-[6vh]" />

        {/* Subtitle */}
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-[2vh] max-w-[clamp(400px,30vw,500px)] font-sans font-light leading-relaxed"
          style={{ color: "var(--accent-2)" }}
        >
          A Jakarta-based creative powerhouse bringing bold ideas to life
          through campaigns, events, and stories people actually want to share.
        </motion.h5>

        {/* Spacer */}
        <div className="h-[7vh]" />

        {/* Selected Work */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="pb-16 font-sans text-lg font-normal"
          style={{ color: "var(--accent-2)" }}
        >
          Selected Work
        </motion.h2>
      </div>

    </section>
  );
}
