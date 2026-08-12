import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";

export function FeaturesHero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black pt-40 pb-16 sm:pt-44 sm:pb-20"
    >
      <img
        src="/net.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.1]"
      />
      <div className={cn(CONTAINER, "relative")}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal y={40}>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Everything You Need for a Safer Ride
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-white/60">
              Smart features that make every ride simple, safe, and
              accessible, giving you peace of mind from the moment you book.
            </p>
          </Reveal>

          <Reveal x={40} y={0} delay={0.15} className="rounded-[20px] border border-white/10 bg-[#0A0A0A] p-6">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-medium text-[#66CF9C]">
                <span aria-hidden="true" className="relative flex h-4.5 w-4.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#66CF9C]/60" />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative"
                  >
                    <rect
                      x="0.3"
                      y="0.3"
                      width="17.4"
                      height="17.4"
                      rx="8.7"
                      stroke="#66CF9C"
                      strokeWidth="0.6"
                    />
                    <circle cx="9" cy="9" r="6" fill="#66CF9C" />
                  </svg>
                </span>
                Driver on the way
              </span>
              <span className="text-sm text-white/60">ETA 6 min</span>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black">
              <img
                src="/route.png"
                alt="Live route map showing pickup and drop off"
                className="w-full"
              />
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-xl bg-white/5 p-4">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/40 text-[11px] font-bold text-white/70"
              >
                !
              </span>
              <p className="text-sm leading-relaxed text-white/70">
                Accessibility note: Ramp access required, folding wheelchair,
                prefers front passenger seat.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
