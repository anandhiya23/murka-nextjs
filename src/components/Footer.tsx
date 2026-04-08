"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[var(--background)]">
      {/* Top — Logo + Let's talk */}
      <div className="px-8 pb-8 pt-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[var(--site-max-width)]">
          <Image
            src="/images/logos/murka-footer-logo.png"
            alt="MURKA"
            width={512}
            height={512}
            className="mb-4 h-16 w-auto md:h-20"
          />
          <a
            href="/contact"
            className="font-sans font-light text-foreground transition-colors hover:text-[var(--muted)]"
            style={{ fontSize: "clamp(48px, 5vw, 100px)", lineHeight: 1.1 }}
          >
            Let&apos;s talk
          </a>
        </div>
      </div>

      {/* Social links — right aligned */}
      <div className="px-8 py-4 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-[var(--site-max-width)] justify-end">
          <nav className="flex flex-col items-end gap-1">
            <a
              href="https://www.instagram.com/mulaidarimurka"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-[var(--muted)] transition-colors hover:text-foreground"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/mulaidarimurka"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-[var(--muted)] transition-colors hover:text-foreground"
            >
              Linkedin
            </a>
          </nav>
        </div>
      </div>

      {/* Sticky bottom nav — Agency Work Services Contact spread across */}
      <div className="sticky bottom-0 border-t border-[var(--accent-7)] bg-[var(--background)] px-8 py-4 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-[var(--site-max-width)] items-center justify-between">
          {[
            { label: "Agency", href: "/about" },
            { label: "Work", href: "/work" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-sm font-medium text-foreground transition-colors hover:text-[var(--muted)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="px-8 py-3 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[var(--site-max-width)]">
          <span className="font-sans text-xs text-[var(--muted)]">
            &copy; 2025 MURKA. All rights reserved.
          </span>
        </div>
      </div>

      {/* Contact info row */}
      <div className="px-8 pb-6 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-[var(--site-max-width)] flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+6285161524184"
              className="font-sans text-xs text-[var(--muted)] transition-colors hover:text-foreground"
            >
              +62 851 6152 4184
            </a>
            <span className="inline-block h-[1px] w-4 bg-[var(--muted)]" />
            <a
              href="mailto:creative@murka.id?subject=Hello%20MURKA"
              className="font-sans text-xs text-[var(--muted)] transition-colors hover:text-foreground"
            >
              creative@murka.id
            </a>
          </div>
          <a
            href="https://maps.app.goo.gl/rdPDJuuWbETnjpRw7"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-[var(--muted)] transition-colors hover:text-foreground"
          >
            MURKA Hub, Jakarta Selatan
          </a>
          <a
            href="/privacy-policy"
            className="font-sans text-xs text-[var(--muted)] transition-colors hover:text-foreground"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
