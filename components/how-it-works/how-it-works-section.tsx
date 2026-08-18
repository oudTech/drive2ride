import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";
import { WalkthroughCard } from "./walkthrough-card";

const CARDS = [
  {
    gridArea: "d5",
    title: "Track Your Ride",
    description:
      "Never Wonder Where Your Ride Is Always know your driver is on the way, clearly, simply, and without the stress of guessing.",
  },
  {
    gridArea: "d6",
    title: "Accessibility Settings",
    description:
      "The App Adjusts to You, Not the Other Way Around. Turn on high contrast, bigger buttons, or text to speech. Small changes, big difference.",
  },
  {
    gridArea: "d4",
    title: "Emergency Support",
    description:
      "Safety You Can Feel One tap connects you to emergency services or the people you trust most.",
  },
  {
    gridArea: "d1",
    title: "Home Dashboard",
    description:
      "One Screen. Total Control. No digging through menus. Book a ride, check your trip, or call for help all from one simple home screen.",
  },
  {
    gridArea: "d2",
    title: "My Rides",
    description:
      "Know Exactly What's Coming See every upcoming and past ride in one organized list, with clear status badges so you're never left guessing.",
  },
  {
    gridArea: "d3",
    title: "Innovation Hub",
    description:
      "Smarter Tools for Every Passenger Speech to text, driver alerts, AI route planning, and Auslan tools all working together for a smoother, more inclusive ride.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-white pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24"
    >
      <div className={cn(CONTAINER)}>
        <Reveal y={30} className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-1.5 text-sm italic text-brand">
            App walkthrough
          </span>
          <h2 className="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 max-w-xl text-neutral-600 leading-relaxed">
            No confusing steps, no guesswork, just a ride that looks out for you
            from start to finish.
          </p>
        </Reveal>

        <Reveal
          y={50}
          scale={0.97}
          delay={0.15}
          duration={1.1}
          className="relative mt-12 overflow-hidden rounded-[20px] lg:mx-auto lg:aspect-[1240/486] lg:w-full lg:max-w-310"
        >
          <Image
            src="/walk-bg-img.png"
            alt="A driver and passengers riding through the city"
            fill
            sizes="(min-width: 1024px) 1240px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />

          <div className="walkthrough-grid relative p-4 sm:p-8 lg:p-10">
            {CARDS.map((card) => (
              <WalkthroughCard key={card.gridArea} {...card} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
