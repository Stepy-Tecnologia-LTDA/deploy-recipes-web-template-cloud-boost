import { ReactNode } from "react";

interface CardResourcesProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function CardResource({ icon, title, description }: CardResourcesProps) {
  return (
    <div className="w-full bg-primary-050 p-5 flex flex-col items-start gap-3 rounded-2xl md:px-6 md:py-5 md:gap-4 lg:p-6 lg:rounded-3xl">
      {icon}

      <div className="flex flex-col gap-1 md:gap-2">
        <h2 className="text-sm font-medium text-neutral-950 md:text-base md:leading-5">
          {title}
        </h2>

        <p className="text-sm text-neutral-800 md:text-base md:leading-5">
          {description}
        </p>
      </div>
    </div>
  );
}
