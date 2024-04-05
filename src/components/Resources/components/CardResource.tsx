import { ReactNode } from "react";

interface CardResourcesProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function CardResource({ icon, title, description }: CardResourcesProps) {
  return (
    <div className="w-full bg-primary-050 p-5 flex flex-col items-start gap-3 rounded-2xl">
      {icon}

      <h2 className="text-sm font-medium text-neutral-950">{title}</h2>

      <p className="text-sm font-normal text-neutral-800">{description}</p>
    </div>
  );
}
