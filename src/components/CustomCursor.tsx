"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<
    "default" | "link" | "swiper"
  >("default");
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsTouch(true);
      return;
    }

    // Track mouse position
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    // Detect hover targets
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for links
      const isLink =
        target.tagName === "A" ||
        target.closest("a[href]") !== null ||
        target.closest("button") !== null;

      // Check for swiper
      const isSwiper =
        target.classList.contains("swiper-wrapper") ||
        target.closest(".swiper-wrapper") !== null;

      if (isLink) {
        setCursorState("link");
        document.body.classList.remove("cursor-over-swiper");
      } else if (isSwiper) {
        setCursorState("swiper");
        document.body.classList.add("cursor-over-swiper");
      } else {
        setCursorState("default");
        document.body.classList.remove("cursor-over-swiper");
      }
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    // Animation loop — lag follow with division by 6
    let animId: number;
    const animate = () => {
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) / 6;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) / 6;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px)`;
      }

      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animId);
      document.body.classList.remove("cursor-over-swiper");
    };
  }, []);

  if (isTouch) return null;

  const sizeClass =
    cursorState === "swiper"
      ? "w-[90px] h-[90px] -mt-[45px] -ml-[45px] bg-black mix-blend-normal opacity-100"
      : cursorState === "link"
        ? "w-[60px] h-[60px] -mt-[30px] -ml-[30px] bg-white mix-blend-difference opacity-100"
        : "w-[10px] h-[10px] -mt-[5px] -ml-[5px] bg-white mix-blend-difference opacity-0";

  return (
    <div
      ref={dotRef}
      className={`pointer-events-none fixed left-0 top-0 z-[10000] rounded-full transition-[width,height,margin,opacity] duration-150 ease-linear ${sizeClass}`}
    >
      {cursorState === "swiper" && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[32px] text-white">
          ⇔
        </span>
      )}
    </div>
  );
}
