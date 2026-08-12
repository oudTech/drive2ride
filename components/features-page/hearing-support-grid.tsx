import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    eyebrow: "Live",
    title: "Real-time transcription",
    text: "Spoken words convert to text instantly, so passengers with hearing impairments can follow the conversation as it happens.",
  },
  {
    eyebrow: "Quick start",
    title: "One tap conversation",
    text: "Tap start speaking and the app begins listening right away, no menus, no setup delay.",
  },
  {
    eyebrow: "Phrases",
    title: "Auslan quick phrases",
    text: "Show preset Auslan phrases to your driver for fast, easy communication in common trip situations.",
  },
  {
    eyebrow: "AI",
    title: "AI translation",
    text: "Messages translate into clear Auslan friendly phrasing for accurate, instant support between driver and passenger.",
  },
  {
    eyebrow: "Reference",
    title: "Sign guide for drivers",
    text: "Drivers get a quick reference guide to understand and respond with confidence.",
  },
  {
    eyebrow: "Outcome",
    title: "A more inclusive trip",
    text: "Clearer communication reduces misunderstandings and makes every ride safer and more comfortable.",
  },
];

export function HearingSupportGrid() {
  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className={cn(CONTAINER)}>
        <Reveal y={30} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
            Built for passengers who are Deaf or hard of hearing
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, index) => (
            <Reveal key={item.title} y={30} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-neutral-200 p-8">
                <span className="text-sm font-medium text-brand">
                  {item.eyebrow}
                </span>
                <h3 className="mt-3 text-lg font-bold text-neutral-900">
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
