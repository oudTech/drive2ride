import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";

export function WorkingAtSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className={cn(CONTAINER)}>
        <Reveal y={30} className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
            Working at Drive2Ride
          </h2>
        </Reveal>

        <Reveal
          y={40}
          scale={0.97}
          delay={0.15}
          className="mt-12 rounded-[10px] bg-[#F7F5F2] p-6 sm:p-10 lg:p-14"
        >
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-8">
            <div className="flex w-full flex-col rounded-[10px] bg-white p-8 lg:h-158.25 lg:w-144.5 lg:p-10">
              <h3 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
                Become a <span className="font-medium italic">Driver</span>
              </h3>
              <div className="mt-6 flex flex-col gap-4 leading-relaxed text-neutral-600">
                <p>
                  Join Drive2Ride and help provide safe, reliable and
                  respectful transport for people across the community. Our
                  drivers support passengers with everyday travel, medical
                  and personal appointments, community activities, work,
                  education and other essential journeys.
                </p>
                <p>
                  We are looking for professional, dependable and
                  compassionate drivers who value safety, punctuality and
                  excellent customer service. As part of the Drive2Ride
                  network, you will help deliver comfortable, inclusive and
                  accessible transport for older people, passengers living
                  with disability and members of the wider community.
                </p>
                <p>
                  Make a meaningful difference with every journey and become
                  part of a trusted transport network committed to dignity,
                  independence and passenger wellbeing.
                </p>
              </div>
              <a
                href="/contact"
                className="mt-8 w-full rounded-full bg-brand px-6 py-3.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90 lg:mt-auto"
              >
                Contact Us
              </a>
            </div>

            <div className="w-full overflow-hidden rounded-[10px] lg:h-158.25 lg:w-132.5">
              <Image
                src="/driver-img.png"
                alt="A Drive2Ride driver and passenger smiling inside the vehicle"
                width={530}
                height={633}
                className="h-auto w-full object-cover lg:h-158.25 lg:w-132.5"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
