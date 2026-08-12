import { Reveal } from "@/components/reveal";

export function ServicesHero() {
  return (
    <section id="home" className="bg-black pt-40 pb-16 sm:pt-44 sm:pb-20">
      <Reveal y={30} className="text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
          Services
        </h1>
      </Reveal>
    </section>
  );
}
