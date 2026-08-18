import { Reveal } from "@/components/reveal";

const ADDRESS = "Unit 3, 46 Colbee Court, Phillip ACT 2606, Australia";
const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  ADDRESS,
)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

export function ContactMap() {
  return (
    <Reveal
      y={40}
      className="relative aspect-2880/2002 w-full overflow-hidden lg:aspect-auto lg:h-106.5"
    >
      <iframe
        src={MAP_EMBED_SRC}
        title={`Map showing Drive2Ride's office at ${ADDRESS}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0 grayscale-[15%]"
      />
    </Reveal>
  );
}
