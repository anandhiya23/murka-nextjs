"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollOpacityProps {
  children: React.ReactNode;
  className?: string;
  /** Scroll range start (0-1) where opacity begins changing */
  start?: number;
  /** Scroll range end (0-1) where opacity stops changing */
  end?: number;
  /** Direction: "out-in" = fades in as scrolled into view, "in-out" = opposite */
  direction?: "out-in" | "in-out" | "out-in-out";
}

export default function ScrollOpacity({
  children,
  className = "",
  start = 0.05,
  end = 0.45,
  direction = "out-in",
}: ScrollOpacityProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  let opacity;
  if (direction === "out-in") {
    // Starts dim, gets brighter as you scroll through
    opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
  } else if (direction === "in-out") {
    opacity = useTransform(scrollYProgress, [start, end], [1, 0.1]);
  } else {
    // out-in-out: dim → bright → dim
    const mid = (start + end) / 2;
    opacity = useTransform(
      scrollYProgress,
      [start, mid, end],
      [0.1, 1, 0.1]
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ opacity }}>
      {children}
    </motion.div>
  );
}
