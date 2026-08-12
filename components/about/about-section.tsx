import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className={cn(CONTAINER)}>
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2 lg:gap-8">
          <div>
            <Reveal y={40}>
              <p className="max-w-2xl text-[19px] leading-relaxed font-semibold text-neutral-800 sm:text-lg sm:font-normal lg:text-xl">
                Drive2Ride provides safe, reliable, and accessible
                transportation for people with disabilities, older adults,
                carers, families, and support providers. Enjoy assisted rides
                with real time tracking, personalized accessibility preferences,
                and care focused service from start to finish.
              </p>
            </Reveal>

            <Reveal y={50} rotate={-1.5} scale={0.94} delay={0.15}>
              <img
                src="/mockup-about.png"
                alt="Drive2Ride app showing a ride in progress"
                className="mt-10 h-auto w-full"
              />
            </Reveal>
          </div>

          <Reveal
            x={60}
            y={0}
            scale={0.95}
            delay={0.2}
            duration={1.1}
            className="w-full overflow-hidden rounded-[20px] lg:ml-auto lg:w-108.5"
          >
            <Image
              src="/about-img.png"
              alt="A rider using a wheelchair, secured and smiling inside a Drive2Ride vehicle"
              width={434}
              height={524}
              className="h-97.5 w-full object-cover lg:h-131"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
