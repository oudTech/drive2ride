import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: "/car3d.svg",
    title: "Clean & modern vehicles",
    text: "Enjoy your ride in a clean, well maintained vehicle.",
  },
  {
    icon: "/user3d.svg",
    title: "Courteous, professional drivers",
    text: "Friendly, helpful drivers make your trip easy and enjoyable.",
  },
  {
    icon: "/clock3d.svg",
    title: "On time and reliable",
    text: "Drivers monitor flight arrivals and are ready when you are.",
  },
  {
    icon: "/pin3d.svg",
    title: "Wherever you are",
    text: "Your driver knows where you are and where you need to be.",
  },
  {
    icon: "/phone3d.svg",
    title: "Easy to contact your driver",
    text: "Contact drivers by phone, text, or email. In touch all the",
  },
  {
    icon: "/money3d.svg",
    title: "Easy refunds",
    text: "100% refund if you cancel up to 48 hours before the booking.",
  },
];

export function FeaturesGridSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className={cn(CONTAINER)}>
        <Reveal y={30} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
            Drive2Ride Accessible Transport Services
          </h2>
          <p className="mt-4 leading-relaxed text-neutral-600">
            Drive2Ride connects people with disability, elderly passengers,
            carers, families, and support providers with safe, reliable, and
            accessible transport across Canberra and the ACT. Book assisted
            journeys for medical appointments, therapy, community access,
            daily living, work, education, and mobility support with
            confidence.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} y={30} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-neutral-200 p-8">
                <img
                  src={feature.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-12 w-12"
                />
                <h3 className="mt-5 text-xl font-bold text-neutral-900">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-relaxed text-neutral-600">
                  {feature.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
