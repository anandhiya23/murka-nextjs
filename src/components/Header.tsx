"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOverLight, setIsOverLight] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Detect background brightness under the header by sampling the pixel color
  useEffect(() => {
    let rafId: number;

    const checkBackground = () => {
      // Sample a point near the top-center of the viewport
      const x = window.innerWidth / 2;
      const y = 40; // roughly where the header sits

      // Get the element at that point, ignoring the header itself
      const headerEl = document.getElementById("site-header");
      if (headerEl) headerEl.style.pointerEvents = "none";

      const el = document.elementFromPoint(x, y);

      if (headerEl) headerEl.style.pointerEvents = "";

      if (el) {
        const bg = window.getComputedStyle(el).backgroundColor;
        const match = bg.match(/\d+/g);
        if (match) {
          const [r, g, b] = match.map(Number);
          // Perceived brightness formula
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          setIsOverLight(brightness > 128);
        }
      }

      rafId = requestAnimationFrame(checkBackground);
    };

    // Start checking after a short delay
    const timer = setTimeout(() => {
      rafId = requestAnimationFrame(checkBackground);
    }, 100);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="fixed top-0 left-0 h-[1px] w-full" />

      <header
        id="site-header"
        className="fixed top-0 left-0 right-0 z-[120] bg-transparent py-6"
      >
        <div className="mx-auto flex max-w-[var(--site-max-width)] items-center justify-between px-8 md:px-12 lg:px-16">
          <a
            href="#"
            className="relative z-50 transition-[filter] duration-300"
            style={{ filter: isOverLight ? "invert(1)" : "none" }}
          >
            <Image
              src="/images/logos/murka-logo-white.png"
              alt="MURKA"
              width={160}
              height={45}
              style={{ width: "clamp(90px, 5vw, 110px)", height: "auto" }}
              priority
            />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 transition-[filter] duration-300"
            style={{ filter: isOverLight ? "invert(1)" : "none" }}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] w-6 bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black"
          >
            <nav className="flex flex-col items-center gap-6">
              {[
                { label: "Work", href: "#work" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="font-sans text-5xl font-light text-white transition-colors hover:text-[var(--lime)] md:text-7xl"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
