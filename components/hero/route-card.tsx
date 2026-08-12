"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type RouteCardProps = {
  name: string;
  status: string;
  avatarSrc: string;
  avatarBg: string;
  origin: string;
  destination: string;
  /** Which pin the car is parked at when the loop begins. */
  startSide: "left" | "right";
  /** Offsets this card's loop so multiple cards don't move in lockstep. */
  delay?: number;
  className?: string;
};

const CAR_WIDTH = 28;
const TRACK_PADDING = 4;

export function RouteCard({
  name,
  status,
  avatarSrc,
  avatarBg,
  origin,
  destination,
  startSide,
  delay = 0,
  className,
}: RouteCardProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const car = carRef.current;
    if (!track || !car) return;

    const ctx = gsap.context(() => {
      const endX = track.clientWidth - CAR_WIDTH - TRACK_PADDING * 2;
      const startsRight = startSide === "right";

      gsap.set(car, {
        x: startsRight ? endX : 0,
        scaleX: startsRight ? -1 : 1,
      });

      const tl = gsap.timeline({
        repeat: -1,
        delay,
        defaults: { duration: 2.6, ease: "power1.inOut" },
      });

      if (startsRight) {
        tl.to(car, { x: 0, scaleX: -1 })
          .set(car, { scaleX: 1 })
          .to({}, { duration: 0.6 })
          .to(car, { x: endX, scaleX: 1 })
          .set(car, { scaleX: -1 })
          .to({}, { duration: 0.6 });
      } else {
        tl.to(car, { x: endX, scaleX: 1 })
          .set(car, { scaleX: -1 })
          .to({}, { duration: 0.6 })
          .to(car, { x: 0, scaleX: -1 })
          .set(car, { scaleX: 1 })
          .to({}, { duration: 0.6 });
      }
    }, track);

    return () => ctx.revert();
  }, [startSide, delay]);

  return (
    <div
      className={cn(
        "w-[85%] rounded-[20px] bg-black p-3 shadow-2xl shadow-black/40 lg:w-[445.21px]",
        className,
      )}
    >
      <div className="flex items-center gap-1.5">
        <img
          src={avatarSrc}
          alt={name}
          style={{ backgroundColor: avatarBg }}
          className="h-5 w-5 rounded-full object-cover ring-1 ring-white/10 lg:h-[28.61px] lg:w-[28.61px]"
        />
        <div>
          <p className="text-[6.66px] font-semibold text-white lg:text-[12.52px]">
            {name}
          </p>
          <p className="text-[6.66px] text-muted-foreground lg:text-[12.52px]">
            {status}
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        className="relative mt-2 h-6 overflow-hidden rounded-[8.94px] bg-route-track"
      >
        <div className="absolute inset-y-0 left-2 right-2 flex items-center">
          <div className="h-px w-full border-t-2 border-dashed border-brand/70" />
        </div>
        <img
          ref={carRef}
          src="/car.svg"
          alt=""
          aria-hidden="true"
          className="absolute top-1/2 left-1 h-auto w-7 -translate-y-1/2"
          style={{ willChange: "transform" }}
        />
      </div>

      <div className="mt-1.5 flex items-center justify-between gap-2 text-[5.55px] text-muted-foreground lg:text-[8.94px]">
        <span className="flex items-center gap-1">
          <img
            src="/pin.svg"
            alt=""
            aria-hidden="true"
            className="h-2 w-2"
          />
          {origin}
        </span>
        <span className="flex items-center gap-1">
          <img
            src="/pin.svg"
            alt=""
            aria-hidden="true"
            className="h-2 w-2"
          />
          {destination}
        </span>
      </div>
    </div>
  );
}
