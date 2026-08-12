import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    number: "01",
    title: "Clean & modern vehicles",
    text: "Travel in clean, well maintained vehicles designed for comfort, safety, and accessibility.",
  },
  {
    number: "02",
    title: "Courteous, professional drivers",
    text: "Our driver partners focus on respectful assistance, passenger safety, and reliable service.",
  },
  {
    number: "03",
    title: "Real Time Trip Updates",
    text: "Stay informed with driver details, pickup updates, and clear communication before and during your ride.",
  },
  {
    number: "04",
    title: "Easy to contact your driver",
    text: "Add accessibility notes, pickup instructions, and support requirements when booking your journey.",
  },
  {
    number: "05",
    title: "Safe & Reliable Journeys",
    text: "Every trip is designed to help passengers travel with confidence, dignity, and peace of mind.",
  },
];

export function ServicesNumberedGrid() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className={cn(CONTAINER)}>
        <Reveal y={30} className="max-w-2xl">
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
            Drive2Ride Accessible Transport Services
          </h2>
          <p className="mt-4 leading-relaxed text-neutral-600">
            Discover why Drive2Ride is built for safe, reliable, and
            accessible transport. We support people with disability, elderly
            passengers, carers, and families with journeys designed around
            comfort, dignity, and care.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, index) => (
            <Reveal key={item.number} y={30} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-neutral-200 p-8">
                <span className="text-4xl font-bold text-neutral-300">
                  {item.number}
                </span>
                <h3 className="mt-5 text-lg font-bold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-neutral-600">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
