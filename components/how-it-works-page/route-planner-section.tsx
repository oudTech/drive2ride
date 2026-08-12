import { Reveal } from "@/components/reveal";

export function RoutePlannerSection() {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-8">
      <Reveal x={-40} y={0} className="lg:w-114.5">
        <img
          src="/ai-route-mockup.png"
          alt="Drive2Ride Innovation Hub AI route planning screen"
          className="w-full"
        />
        <h2 className="mt-6 text-[22px] font-bold text-neutral-900">
          AI Route Planner
        </h2>
        <p className="mt-4 leading-relaxed text-neutral-600">
          Drive2Ride&apos;s AI Route Planner intelligently prioritizes NDIS
          participants and medical appointments by selecting the safest,
          fastest, and most accessible routes.
        </p>
      </Reveal>

      <Reveal
        x={40}
        y={0}
        delay={0.15}
        className="flex flex-col gap-6 lg:w-197.5"
      >
        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="flex w-full items-end justify-center overflow-hidden rounded-[20px] bg-[#FCFCFD] px-8 pt-8 sm:w-96 lg:h-57.75">
            <img
              src="/standalone1.png"
              alt="Drive2Ride Track Your Ride screen"
              className="h-[85%] w-auto object-contain"
            />
          </div>
          <div className="flex w-full items-end justify-center overflow-hidden rounded-[20px] bg-[#FCFCFD] px-8 pt-8 sm:w-96 lg:h-57.75">
            <img
              src="/standalone2.png"
              alt="Drive2Ride real time transcription screen"
              className="h-[85%] w-auto object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-8 overflow-hidden rounded-[20px] bg-[#FCFCFD] p-8 sm:flex-row">
          <div className="sm:flex-1">
            <h2 className="text-[22px] font-bold text-neutral-900">
              Accessibility &amp; safety features
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600">
              A complete suite of smart tools that improve accessibility,
              enhance passenger safety, and simplify communication between
              drivers and riders throughout every journey.
            </p>
          </div>
          <img
            src="/accessibility-mockup.png"
            alt="Drive2Ride accessibility and safety features screen"
            className="-mt-8 w-full self-start sm:w-auto sm:max-w-44 sm:shrink-0"
          />
        </div>
      </Reveal>
    </div>
  );
}
