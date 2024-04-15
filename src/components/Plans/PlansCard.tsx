import { ReactNode } from "react";
import { Button } from "../Button";
import clsx from "clsx";

interface PlansCardProps {
  title: string;
  price: string;
  infos: { id: number; icon: ReactNode; info: string }[] | undefined;
  color: boolean;
}

export function PlansCard({ title, price, infos, color }: PlansCardProps) {
  return (
    <div
      className={clsx(
        "w-full h-[430px] px-4 py-8 rounded-2xl flex flex-col gap-6 md:h-[562px] md:gap-10 md:px-6 md:py-9 lg:h-[604px] lg:gap-12 lg:px-8 lg:py-10",
        color ? "bg-primary-500" : "bg-primary-050"
      )}
    >
      <h1
        className={clsx(
          "text-lg leading-6 font-medium text-center md:text-2xl lg:text-3xl lg:leading-10",
          color ? "text-white" : "text-neutral-950"
        )}
      >
        {title}
        <br />
        {price}
      </h1>

      <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
        {infos?.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <div className="shrink-0">{item.icon}</div>

            <span
              className={clsx(
                "text-sm md:text-base md:leading-5 lg:text-lg",
                color ? "text-white" : "text-neutral-800"
              )}
            >
              {item.info}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 max-w-32 self-center lg:max-w-36 lg:bottom-10">
        <Button
          variant="outlined"
          size="small"
          className={clsx("lg:hidden", color ? "bg-white" : "")}
        >
          Get Started
        </Button>

        <Button
          variant="outlined"
          className={clsx("hidden lg:block", color ? "bg-white" : "")}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
