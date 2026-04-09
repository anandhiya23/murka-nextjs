"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navInner = (blend: boolean) => (
    <div
      className="mx-auto flex max-w-[var(--site-max-width)] items-center justify-between px-8 md:px-12 lg:px-16"
      style={blend ? { mixBlendMode: "difference" } : undefined}
    >
      <a href="/">
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
        className="relative z-[130] flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        aria-label="Toggle menu"
      >
        <span className={`block h-[1.5px] w-6 bg-white transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
        <span className={`block h-[1.5px] w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block h-[1.5px] w-6 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
      </button>
    </div>
  );

  return (
    <>
      {/*
        In-flow header with mix-blend-mode: difference.
        margin-bottom: -100px makes it overlap the content below
        (same technique as the WP theme).
        This stays in the document flow so blend mode works properly.
      */}
      <header
        className="relative py-6"
        style={{ marginBottom: "-100px", zIndex: 120 }}
      >
        {navInner(true)}
      </header>

      {/*
        Fixed header that appears on scroll — has its own dark bg,
        no blend mode needed.
      */}
      <div
        className={`fixed top-0 left-0 right-0 py-6 transition-all duration-300 ${
          scrolled
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
        style={{
          zIndex: 120,
          backgroundColor: "var(--e-global-color-vamtam_sticky_header_bg_color, #0000008F)",
          backdropFilter: "blur(10px)",
        }}
      >
        {navInner(false)}
      </div>

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
                { label: "Work", href: "/work" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
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
