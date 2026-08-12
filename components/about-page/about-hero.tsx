import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function AboutHero() {
  return (
    <section id="home" className="relative h-125 overflow-hidden lg:h-148">
      <Image
        src="/about-hero.png"
        alt="A Drive2Ride driver and passenger smiling inside the vehicle"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-6">
        <Reveal y={40}>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            About Drive2Ride
          </h1>
        </Reveal>
        <Reveal y={30} delay={0.15}>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            Drive2Ride is transport made for real people wheelchair users,
            people with hearing or vision needs, and anyone who wants a
            safer, more caring ride.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
