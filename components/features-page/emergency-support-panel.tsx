import { Ambulance, Phone, Shield, Siren } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    icon: Siren,
    title: "One tap emergency",
    text: "Connect instantly to emergency services with a single tap, no searching for numbers.",
  },
  {
    icon: Ambulance,
    title: "Ambulance assistance",
    text: "Quickly call ambulance services for immediate medical support during a trip.",
  },
  {
    icon: Shield,
    title: "Police support",
    text: "Reach local police services quickly whenever protection or reporting is needed.",
  },
  {
    icon: Phone,
    title: "Trusted contact",
    text: "Call a trusted contact directly from the app, no matter where you are in the trip.",
  },
];

export function EmergencySupportPanel() {
  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className={cn(CONTAINER)}>
        <Reveal
          y={40}
          scale={0.97}
          className="rounded-[10px] bg-[#F7F5F2] p-6 sm:p-10 lg:p-14"
        >
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium text-brand">
              Emergency Support
            </span>
            <h2 className="mt-3 text-3xl font-bold text-neutral-900 sm:text-4xl">
              Help is one tap away, on every trip
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600">
              Drive2Ride puts safety first. The Emergency screen gives
              immediate access to critical help and trusted contacts, all in
              one place.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ITEMS.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-bold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
