import type { CSSProperties } from "react";

export function WalkthroughCard({
  title,
  description,
  gridArea,
}: {
  title: string;
  description: string;
  gridArea: string;
}) {
  return (
    <div
      className="rounded-xl border border-white/10 bg-black/30 p-5 backdrop-blur-md lg:[grid-area:var(--area)]"
      style={{ "--area": gridArea } as CSSProperties}
    >
      <h3 className="text-base font-semibold text-brand">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/90">
        {description}
      </p>
    </div>
  );
}
