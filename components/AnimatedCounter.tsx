"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  /** e.g. "13+", "10K+", "500+" — the leading number is animated, the rest is kept as a suffix */
  value: string;
  duration?: number;
};

export default function AnimatedCounter({
  value,
  duration = 1400,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string>(value.replace(/[0-9]/g, "0"));

  useEffect(() => {
    const match = value.match(/([\d.]+)/);
    const node = ref.current;
    if (!match || !node) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[1]);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[1].length);
    const isDecimal = match[1].includes(".");

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              const current = target * eased;
              setDisplay(
                `${prefix}${isDecimal ? current.toFixed(1) : Math.round(current)}${suffix}`
              );
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
