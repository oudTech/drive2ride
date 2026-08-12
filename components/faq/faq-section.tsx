import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";

const FAQ_ITEMS = [
  {
    avatarSrc: "/faq1.png",
    question: "What is Drive2Ride?",
    answer:
      "Drive2Ride is a transport service built specifically for people with disabilities, elderly passengers, and anyone needing extra care and accessibility on their journeys, combining caring drivers with smart safety technology.",
  },
  {
    avatarSrc: "/faq2.png",
    question: "Is the app available now?",
    answer:
      "Not yet. Drive2Ride is currently in development. Join our waitlist to be notified the moment we launch, and to help shape the app before it goes live.",
  },
  {
    avatarSrc: "/faq3.png",
    question: "Who is Drive2Ride for?",
    answer:
      "Drive2Ride is a transport service built specifically for people with disabilities, elderly passengers, and anyone needing extra care and accessibility on their journeys, combining caring drivers with smart safety technology.",
  },
  {
    avatarSrc: "/faq4.png",
    question: "What happens in an emergency during a ride?",
    answer:
      "Passengers have one tap access to Emergency, Ambulance, Police, and personal emergency contacts, built directly into the app for fast, reliable help when it's needed most.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className={cn(CONTAINER)}>
        <Reveal
          y={30}
          className="mx-auto flex max-w-157.75 flex-col items-center text-center"
        >
          <span className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-1.5 text-sm italic text-brand">
            Frequently asked questions
          </span>
          <h2 className="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">
            Everything you need to know about{" "}
            <span className="italic">Drive-to-ride</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 flex max-w-157.75 flex-col gap-10 lg:mt-16 lg:gap-14">
          {FAQ_ITEMS.map((item, index) => (
            <Reveal key={item.question + index} y={30} delay={index * 0.05}>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={item.avatarSrc}
                    alt=""
                    aria-hidden="true"
                    style={{ backgroundColor: "#F1F1F1" }}
                    className="h-12 w-12 shrink-0 rounded-full object-cover sm:h-14 sm:w-14"
                  />
                  <span className="inline-block w-fit rounded-[20px] bg-brand px-5 py-3 text-sm font-medium text-white sm:text-base">
                    {item.question}
                  </span>
                </div>
                <div className="rounded-[20px] bg-[#F9F4F2] p-5 leading-relaxed text-neutral-700 sm:p-6">
                  {item.answer}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
