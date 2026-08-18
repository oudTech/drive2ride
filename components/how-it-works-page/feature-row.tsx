import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function FeatureRow({
  imageSrc,
  imageAlt,
  title,
  description,
  reverse = false,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  reverse?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <Reveal
        x={reverse ? 40 : -40}
        y={0}
        className={cn(
          "flex h-75 items-center justify-center rounded-[20px] p-8",
          reverse && "lg:order-2",
        )}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-[350px] h-[270px] h-auto sm:w-[400px] sm:object-contain"
        />
      </Reveal>

      <Reveal
        x={reverse ? -40 : 40}
        y={0}
        delay={0.15}
        className={reverse ? "lg:order-1" : undefined}
      >
        <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 leading-relaxed text-neutral-600">{description}</p>
      </Reveal>
    </div>
  );
}
