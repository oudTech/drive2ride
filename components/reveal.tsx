"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Starting offset the element animates in from. */
  y?: number;
  x?: number;
  scale?: number;
  rotate?: number;
  delay?: number;
  duration?: number;
  ease?: string;
  /** ScrollTrigger start position. Elements already on screen at load fire immediately. */
  start?: string;
};

export function Reveal({
  children,
  className,
  y = 56,
  x = 0,
  scale = 0.92,
  rotate = 0,
  delay = 0,
  duration = 1,
  ease = "power3.out",
  start = "top 88%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.set(el, { opacity: 0, y, x, scale, rotate, filter: "blur(8px)" });
      gsap.to(el, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none reverse",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [y, x, scale, rotate, delay, duration, ease, start]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
