import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    title: "Real ETA",
    text: "See accurate arrival time estimates that update as your driver moves.",
  },
  {
    title: "Live map tracking",
    text: "Follow your driver's route and location in real time from pickup to drop off.",
  },
  {
    title: "Direct driver contact",
    text: "Call or message your driver directly for quick, clear communication.",
  },
  {
    title: "Share your ride",
    text: "Share live trip details with a carer or family member so they can follow along.",
  },
];

export function TrackRideSection() {
  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className={cn(CONTAINER)}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal x={-40} y={0}>
            <span className="text-sm font-medium text-brand">
              Track your ride
            </span>
            <h2 className="mt-3 text-3xl font-bold text-neutral-900 sm:text-4xl">
              Stay informed at every step
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-neutral-600">
              Real-time updates, live location tracking, and easy
              coordination with your driver and trusted contacts.
            </p>

            <ol className="mt-8 flex flex-col gap-6">
              {STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-bold text-neutral-900">
                      {step.title}
                    </p>
                    <p className="mt-1 leading-relaxed text-neutral-600">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal
            x={40}
            y={0}
            delay={0.15}
            className="overflow-hidden rounded-[20px]"
          >
            <Image
              src="/track-ride.png"
              alt="A driver holding a phone showing live ride tracking"
              width={1536}
              height={1024}
              className="h-auto w-full object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
