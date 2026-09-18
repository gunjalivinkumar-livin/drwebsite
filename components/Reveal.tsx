"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** animation style */
  as?: "up" | "fade" | "left" | "right" | "scale";
  /** delay in ms before the animation starts once visible */
  delay?: number;
  /** extra classNames to merge onto the wrapper */
  className?: string;
};

/**
 * Wraps children in a div that fades/slides into view the first time it
 * crosses into the viewport. Pure CSS + IntersectionObserver — no extra
 * dependency needed.
 */
export default function Reveal({
  children,
  as = "up",
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect users who prefer less motion.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${as}${visible ? " reveal-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
