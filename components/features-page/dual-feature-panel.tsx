import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";

export function DualFeaturePanel() {
  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className={cn(CONTAINER, "px-0")}>
        <Reveal
          y={40}
          scale={0.97}
          className="relative overflow-hidden sm:rounded-[20px] bg-[linear-gradient(to_right,#000000FA,#141D34FA)] p-8 lg:p-14"
        >
          <img
            src="/net.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.05]"
          />
          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-sm font-medium text-[#1F74F4]">
                Easy to contact your driver
              </span>
              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Plan trip as far ahead as you need to
              </h3>
              <p className="mt-4 leading-relaxed text-white/50">
                Schedule transport in advance for medical appointments, therapy,
                community access, work, education, shopping, and daily living
                needs. Add accessibility notes, pickup instructions, mobility
                requirements, and support details to help ensure a smooth
                journey.
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-[#A4E6C8]">
                Safety and Monitoring
              </span>
              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Matched to your support needs, monitored the whole way.
              </h3>
              <p className="mt-4 leading-relaxed text-white/50">
                Find safe, reliable, and accessible transport for people with
                disability, elderly passengers, carers, and support
                participants. Drive2Ride helps make every journey easier, more
                comfortable, and better matched to individual support needs.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
