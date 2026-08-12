import type { ReactNode } from "react";

export function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="h-full rounded-[10px] bg-white p-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1F74F4]/10">
        {icon}
      </div>
      <h3 className="mt-3.5 text-lg font-bold text-neutral-900">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
        {description}
      </p>
    </div>
  );
}
