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

      {/* Social icon — Instagram sticky right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 right-8 z-10 hidden md:block"
      >
        <a
          href="https://www.instagram.com/mulaidarimurka"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 transition-colors hover:text-white"
          aria-label="Instagram"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
