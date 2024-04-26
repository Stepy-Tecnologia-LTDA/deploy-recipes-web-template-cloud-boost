import { ReactNode } from "react";
import clsx from "clsx";

import { Button } from "../Button";

interface InfosProps {
  id: number;
  icon: ReactNode;
  info: string;
}

interface PlansCardProps {
  title: string;
  price: string;
  infos: InfosProps[];
  selected: boolean;
}

export function PlansCard({ title, price, infos, selected }: PlansCardProps) {
  return (
    <div
      className={clsx(
        "w-full max-w-[230px] md:max-w-[294px] lg:max-w-[318px] px-4 py-8 rounded-2xl flex flex-col gap-6 md:gap-10 md:px-6 md:py-9 lg:h-[604px] lg:gap-12 lg:px-8 lg:py-10",
        selected
          ? "bg-primary-500 h-[430px] md:h-[562px] lg:h-[616px]"
          : "bg-primary-050 h-[422px] md:h-[556px] lg:h-[604px]"
      )}
    >
      <h1
        className={clsx(
          "text-lg leading-6 font-medium text-center md:text-2xl lg:text-3xl lg:leading-10",
          selected ? "text-white" : "text-neutral-950"
        )}
      >
        {title}
        <br />
        {price}
      </h1>

      <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
        {infos?.map((item) => (
          <div key={item.id} className="flex items-center gap-2 md:gap-4">
            <div className="shrink-0">{item.icon}</div>

            <span
              className={clsx(
                "text-sm md:text-base md:leading-5 lg:text-lg",
                selected ? "text-white" : "text-neutral-800"
              )}
            >
              {item.info}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 max-w-32 self-center lg:max-w-36 lg:bottom-10">
        {selected ? (
          <Button variant="plan" size="small" className={clsx("lg:hidden")}>
            Get Started
          </Button>
        ) : (
          <Button variant="outlined" size="small" className={clsx("lg:hidden")}>
            Get Started
          </Button>
        )}

        {selected ? (
          <Button variant="plan" className={clsx("hidden lg:block")}>
            Get Started
          </Button>
        ) : (
          <Button variant="outlined" className={clsx("hidden lg:block")}>
            Get Started
          </Button>
        )}
      </div>
    </div>
  );
}
