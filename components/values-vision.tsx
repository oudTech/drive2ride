import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";

export function ValuesVision() {
  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className={cn(CONTAINER)}>
        <Reveal
          y={40}
          scale={0.97}
          className="rounded-[10px] bg-[#F7F5F2] p-6 sm:p-10 lg:p-14"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="rounded-[10px] bg-white p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
                Our values
              </h3>
              <div className="mt-6 space-y-4 leading-relaxed text-neutral-600">
                <p>Holding true to our values is how we achieve our purpose.</p>
                <p>
                  Our six value statements teach what it is to be a valued
                  member of the Drive2Ride team.
                </p>
                <p>
                  To be the best member of the team, it&apos;s not just about
                  delivering exceptional quality work, it&apos;s about how
                  you do the work, why you do the work, and how the benefits
                  are shared.
                </p>
              </div>
            </div>

            <div className="rounded-[10px] bg-white p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
                Our Vision
              </h3>
              <p className="mt-6 leading-relaxed text-neutral-600">
                Drive2Ride is built for drivers who want flexible earnings
                while making a real difference. Drive on your schedule, grow
                your income, and help people get where they need to go
                safely and comfortably.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
