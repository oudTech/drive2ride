import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function ContactMap() {
  return (
    <Reveal
      y={40}
      className="relative aspect-2880/2002 w-full overflow-hidden lg:aspect-auto lg:h-106.5"
    >
      <Image
        src="/contact-map.png"
        alt="Map showing Drive2Ride's service area in Canberra, Australia"
        fill
        sizes="100vw"
        className="object-cover"
      />
    </Reveal>
  );
}
