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
        "w-full h-[430px] px-4 py-8 rounded-2xl flex flex-col gap-6",
        color ? "bg-primary-500" : "bg-primary-050"
      )}
    >
      <h1
        className={clsx(
          "text-lg leading-6 font-medium text-center",
          color ? "text-white" : "text-neutral-950"
        )}
      >
        {title}
        <br />
        {price}
      </h1>

      <div className="flex flex-col gap-3">
        {infos?.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            {item.icon}

            <span
              className={clsx(
                "text-sm",
                color ? "text-white" : "text-neutral-800"
              )}
            >
              {item.info}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 max-w-32 self-center">
        <Button
          variant="outlined"
          size="small"
          className={clsx(color ? "bg-white" : "")}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
