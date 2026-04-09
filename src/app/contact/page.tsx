"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:creative@murka.id?subject=Hello%20MURKA&body=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}`;
  };

  return (
    <>
      <Header />
      <main className="bg-[var(--background)]">
        {/* Hero */}
        <section className="px-8 pb-16 pt-40 md:px-12 lg:px-16">
          <div className="mx-auto max-w-[var(--site-max-width)]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 font-sans font-light leading-[1.1] text-foreground"
              style={{ fontSize: "clamp(40px, 4vw, 90px)" }}
            >
              Let&apos;s build
              <br />
              something great
            </motion.h1>
          </div>
        </section>

        {/* Form + Contact Info */}
        <section className="px-8 pb-24 md:px-12 lg:px-16">
          <div className="mx-auto flex max-w-[var(--site-max-width)] flex-col gap-16 lg:flex-row lg:gap-[10%]">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 space-y-8"
            >
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-[var(--accent-7)] bg-transparent pb-4 font-sans text-lg font-light text-foreground outline-none transition-colors placeholder:text-[var(--muted)] focus:border-foreground"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-[var(--accent-7)] bg-transparent pb-4 font-sans text-lg font-light text-foreground outline-none transition-colors placeholder:text-[var(--muted)] focus:border-foreground"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border-b border-[var(--accent-7)] bg-transparent pb-4 font-sans text-lg font-light text-foreground outline-none transition-colors placeholder:text-[var(--muted)] focus:border-foreground"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-3 border-b border-foreground pb-2 font-sans text-sm font-medium text-foreground transition-colors hover:text-[var(--muted)]"
              >
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </button>
            </motion.form>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-shrink-0 space-y-8 lg:w-[30%]"
            >
              <div>
                <h6 className="mb-2 font-sans text-xs font-medium uppercase tracking-wider text-[var(--muted)]">Email</h6>
                <a href="mailto:creative@murka.id" className="font-sans text-base text-foreground transition-colors hover:text-[var(--muted)]">
                  creative@murka.id
                </a>
              </div>
              <div>
                <h6 className="mb-2 font-sans text-xs font-medium uppercase tracking-wider text-[var(--muted)]">Phone</h6>
                <a href="tel:+6285161524184" className="font-sans text-base text-foreground transition-colors hover:text-[var(--muted)]">
                  +62 851 6152 4184
                </a>
              </div>
              <div>
                <h6 className="mb-2 font-sans text-xs font-medium uppercase tracking-wider text-[var(--muted)]">Location</h6>
                <a
                  href="https://maps.app.goo.gl/rdPDJuuWbETnjpRw7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-base text-foreground transition-colors hover:text-[var(--muted)]"
                >
                  MURKA Hub, Jakarta Selatan
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
