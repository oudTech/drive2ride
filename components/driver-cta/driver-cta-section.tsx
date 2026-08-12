import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";

export function DriverCtaSection() {
  return (
    <section id="career" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className={cn(CONTAINER)}>
        <div className="rounded-[10px] bg-[#F7F5F2] p-6 sm:p-10 lg:p-14">
          <Reveal y={30} className="flex flex-col items-center text-center">
            <span className="inline-flex items-center rounded-full border border-brand/50 px-4 py-1.5 text-sm italic text-neutral-800">
              Become a driver
            </span>
            <h2 className="mt-4 max-w-xl text-3xl font-bold text-neutral-900 sm:text-4xl">
              Ready to <span className="italic">Drive</span>? Let&apos;s Get
              <br className="hidden lg:block" /> Started
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-5">
            <Reveal
              x={-40}
              y={0}
              delay={0.15}
              className="flex w-full flex-col items-center rounded-[10px] bg-white p-8 text-center lg:h-124.25 lg:w-111.75 lg:p-10"
            >
              <h3 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
                Become a <span className="font-medium italic">Driver</span>
              </h3>
              <p className="mt-12 max-w-sm text-base text-neutral-600 leading-relaxed">
                Drive2Ride is built for drivers who want flexible earnings
                while making a real difference. Drive on your schedule, grow
                your income, and help people get where they need to go
                safely and comfortably.
              </p>
              <a
                href="/contact"
                className="mt-auto w-full rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Contact Us
              </a>
            </Reveal>

            <Reveal
              x={40}
              y={0}
              delay={0.3}
              className="w-full overflow-hidden rounded-[10px] lg:w-144.5"
            >
              <Image
                src="/driver-img.png"
                alt="A Drive2Ride driver and passenger smiling inside the vehicle"
                width={578}
                height={497}
                className="h-auto w-full object-cover lg:h-124.25 lg:w-144.5"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
