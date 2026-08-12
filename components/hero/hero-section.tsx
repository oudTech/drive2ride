import { RouteCard } from "./route-card";
import { Reveal } from "@/components/reveal";
import { CONTAINER_PADDING } from "@/lib/container";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="home"
      className={cn(
        CONTAINER_PADDING,
        "relative flex min-h-dvh items-center overflow-hidden bg-background pb-24 pt-16 sm:pt-20",
      )}
    >
      <img
        src="/net.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.04]"
      />
      <div className="relative mx-auto grid w-full max-w-350 items-center gap-16 lg:grid-cols-[1fr_1.25fr]">
        <div className="relative isolate mt-16 sm:mt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-41.75 w-117.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003CFF] opacity-30 blur-[120px]"
          />
          <Reveal y={90} rotate={-2} duration={1.1} start="top 95%">
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Every Ride,{" "}
              <span className="relative inline-block whitespace-nowrap px-2">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 -rotate-2 rounded-sm bg-brand"
                />
                Built
              </span>
              <br />
              Around You
            </h1>
          </Reveal>

          <Reveal y={40} delay={0.2} start="top 95%">
            <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
              Drive2Ride is transport made for real people wheelchair users,
              people with hearing or vision needs, and anyone who wants a
              safer, more caring ride.
            </p>
          </Reveal>

          <Reveal
            y={20}
            scale={0.7}
            delay={0.4}
            duration={0.8}
            ease="back.out(1.8)"
            start="top 95%"
          >
            <a
              href="/contact"
              className="mt-8 inline-flex h-10.5 w-37.25 items-center justify-center rounded-full bg-white text-sm font-semibold text-black transition-transform hover:scale-105"
            >
              Contact Us
            </a>
          </Reveal>

          <Reveal y={20} delay={0.55} start="top 95%">
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-5">
                <img
                  src="/sm-img1.jpg"
                  alt=""
                  aria-hidden="true"
                  className="h-9 w-9 rounded-[7.5px] border-[0.75px] border-white object-cover"
                />
                <img
                  src="/sm-img2.jpg"
                  alt=""
                  aria-hidden="true"
                  className="h-9 w-9 rounded-[7.5px] border-[0.75px] border-white object-cover"
                />
                <img
                  src="/sm-img3.jpg"
                  alt=""
                  aria-hidden="true"
                  className="h-9 w-9 rounded-[7.5px] border-[0.75px] border-white object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by 5,000+ riders and families.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal
          x={70}
          y={0}
          scale={0.95}
          delay={0.25}
          duration={1.1}
          start="top 95%"
          className="relative rounded-[20px] bg-route-outer p-4 sm:p-6"
        >
          <div className="flex flex-col gap-6">
            <RouteCard
              name="Freedom Amos"
              status="Going for check-up"
              avatarSrc="/freedom-avatar.png"
              avatarBg="#F1F1F1"
              origin="91 Baldwin Drive, Kaleen ACT 2617"
              destination="10 Allara Street, City ACT 2601"
              startSide="left"
              delay={0}
              className="self-start"
            />
            <RouteCard
              name="Esther John"
              status="Returning from Gym"
              avatarSrc="/esther-avatar.png"
              avatarBg="#FFDBB8"
              origin="28 Canberra Avenue, Forrest ACT 2603"
              destination="15 Franklin Street, Griffith ACT 2603"
              startSide="right"
              delay={1.6}
              className="self-end"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
