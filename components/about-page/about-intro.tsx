import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";

export function AboutIntro() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className={cn(CONTAINER)}>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal x={-40} y={0}>
            <div className="overflow-hidden rounded-[20px]">
              <Image
                src="/about-sec-img.png"
                alt="A Drive2Ride driver checking his phone beside the car"
                width={578}
                height={480}
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mt-6 leading-relaxed text-neutral-600">
              Drive2Ride started with a simple observation: too many people
              are let down by transport that wasn&apos;t built with them in
              mind. Wheelchair users struggle to find reliable rides.
              Hearing impaired passengers face communication barriers with
              drivers. Elderly passengers built on.
            </p>
          </Reveal>

          <Reveal x={40} y={0} delay={0.15}>
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              About Drive2Ride
            </h2>
            <p className="mt-6 leading-relaxed text-neutral-600">
              Drive2Ride started with a simple observation: too many people
              are let down by transport that wasn&apos;t built with them in
              mind. Wheelchair users struggle to find reliable rides.
              Hearing impaired passengers face communication barriers with
              drivers. Elderly passengers and NDIS participants are often
              treated as an afterthought by standard ride share apps. We
              decided to build something different: a transport service
              where accessibility, safety, and dignity aren&apos;t extra
              features, but the foundation everything else is built on.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Contact Us
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
