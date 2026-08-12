import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";
import { ServiceCard } from "./service-card";
import {
  AccessibleTransportIcon,
  CommunicationSupportIcon,
  EmergencySupportIcon,
  SafetyMonitoringIcon,
} from "./service-icons";

export function ServicesSection() {
  return (
    <section id="services" className="bg-black py-16 sm:py-20 lg:py-24">
      <div className={cn(CONTAINER)}>
        <Reveal y={30} className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-brand/50 px-4 py-1.5 text-sm italic text-white/80">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            What We Offer
          </h2>
        </Reveal>

        <Reveal
          y={50}
          scale={0.97}
          delay={0.15}
          duration={1.1}
          className="mt-12 rounded-[10px] bg-[#ECEAE8] p-4 sm:p-6"
        >
          <div className="services-grid">
            <div className="lg:[grid-area:card1]">
              <ServiceCard
                icon={<AccessibleTransportIcon />}
                title="Accessible Transport"
                description="We match you with a ride that actually fits: wheelchair access, extra space, whatever you need, no awkward surprises."
              />
            </div>

            <div className="lg:[grid-area:card2]">
              <ServiceCard
                icon={<CommunicationSupportIcon />}
                title="Communication Support"
                description="When it matters most, help is just one tap away: Police, Ambulance, Emergency, or your trusted contacts, instantly."
              />
            </div>

            <div className="flex items-center justify-center py-4 lg:h-full lg:py-0 lg:[grid-area:mockup]">
              <img
                src="/services-mockup.png"
                alt="Drive2Ride app showing the My Rides screen"
                className="h-auto w-full max-w-100 object-contain lg:h-full lg:w-full"
              />
            </div>

            <div className="lg:[grid-area:card3]">
              <ServiceCard
                icon={<SafetyMonitoringIcon />}
                title="Safety & Monitoring"
                description="Your driver knows what you need before you even say hello: wheelchair, service animal, extra time, all sorted in advance."
              />
            </div>

            <div className="lg:[grid-area:card4]">
              <ServiceCard
                icon={<EmergencySupportIcon />}
                title="Emergency & Trusted Support"
                description="Drive2Ride is transport made for real people wheelchair users, people with hearing or vision needs, and anyone who wants a safer, more caring ride."
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
