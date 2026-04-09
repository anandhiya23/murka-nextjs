"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollOpacityProps {
  children: React.ReactNode;
  className?: string;
  start?: number;
  end?: number;
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

  const { input, output } = useMemo(() => {
    if (direction === "in-out") return { input: [start, end], output: [1, 0.1] };
    if (direction === "out-in-out") {
      const mid = (start + end) / 2;
      return { input: [start, mid, end], output: [0.1, 1, 0.1] };
    }
    return { input: [start, end], output: [0.1, 1] };
  }, [start, end, direction]);

  const opacity = useTransform(scrollYProgress, input, output);

  return (
    <motion.div ref={ref} className={className} style={{ opacity }}>
      {children}
    </motion.div>
  );
}
