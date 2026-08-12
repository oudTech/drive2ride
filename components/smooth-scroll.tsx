"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Lenis and GSAP each want to drive their own rAF loop. Left alone they
 * drift out of sync, which is what made ScrollTrigger-based reveals (and
 * scrolling itself) feel stuck/unresponsive. This hands the ticker to
 * GSAP and feeds every Lenis scroll tick back into ScrollTrigger.
 */
function LenisTicker() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const currentLenis = lenis;

    const onScroll = () => ScrollTrigger.update();
    currentLenis.on("scroll", onScroll);

    function raf(time: number) {
      currentLenis.raf(time * 1000);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      currentLenis.off("scroll", onScroll);
      gsap.ticker.remove(raf);
    };
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, autoRaf: false }}>
      <LenisTicker />
      {children}
    </ReactLenis>
  );
}
