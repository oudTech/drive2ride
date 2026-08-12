import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";

const VALUES = [
  {
    title: "Customer first",
    text: "Every decision we make is centered on delivering exceptional experiences and building lasting customer relationships.",
  },
  {
    title: "Aim high",
    text: "We challenge our thinking, embrace bold ideas, and continuously improve to deliver outstanding experiences.",
  },
  {
    title: "Build trust",
    text: "We earn trust by acting with honesty, consistency, and reliability in every decision and interaction.",
  },
  {
    title: "Grow together",
    text: "Drive2Ride's success is built on the continuous growth of every team member, creating a stronger future for us all.",
  },
  {
    title: "Own the outcome",
    text: "Be accountable for the results we create A team with multiple contributors doing their best will consistently beat a team dominated by a few high performers.",
  },
  {
    title: "Win as a team",
    text: "Our success comes from collaboration, shared responsibility, and the unique contributions of every team member.",
  },
];

export function AccessibleServicesSection() {
  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className={cn(CONTAINER)}>
        <Reveal y={30} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
            Drive2Ride Accessible Transport Services
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value, index) => (
            <Reveal key={value.title} y={30} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-neutral-200 p-8">
                <h3 className="text-xl font-bold text-brand">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-neutral-600">
                  {value.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
