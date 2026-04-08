"use client";

import { useEffect, useRef } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

export default function TextReveal({
  text,
  className = "",
  style,
  as: Tag = "h2",
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLSpanElement>(".tra-word");

    let isMaxDevice = window.innerWidth >= 1025;

    const updateOpacities = () => {
      if (!isMaxDevice) {
        // On mobile/tablet, just show all words
        words.forEach((w) => (w.style.opacity = "1"));
        return;
      }

      const rect = el.getBoundingClientRect();
      const inViewport =
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        rect.left < window.innerWidth &&
        rect.right > 0;

      if (!inViewport) {
        if (rect.bottom < 0) {
          // Already scrolled past — show all
          el.style.opacity = "1";
          words.forEach((w) => (w.style.opacity = "1"));
        }
        return;
      }

      el.style.opacity = "1";

      words.forEach((word) => {
        const wordRect = word.getBoundingClientRect();
        const top = wordRect.top - 0.5 * window.innerHeight;
        const left = wordRect.left;
        let opacity = 1 - (0.01 * top + 0.001 * left);
        opacity = opacity < 0.1 ? 0.1 : opacity > 1 ? 1 : Number(opacity.toFixed(3));
        word.style.opacity = String(opacity);
      });
    };

    // Use requestAnimationFrame-based scroll handler
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateOpacities();
          ticking = false;
        });
        ticking = true;
      }
    };

    const onResize = () => {
      isMaxDevice = window.innerWidth >= 1025;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    // Initial run
    updateOpacities();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Split text into words
  const words = text.split(" ");

  return (
    <Tag
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={className}
      style={{ opacity: 0.1, willChange: "opacity", ...style }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="tra-word"
          style={{ opacity: 0.1, transition: "opacity 0.05s linear" }}
        >
          {word}{" "}
        </span>
      ))}
    </Tag>
  );
}
