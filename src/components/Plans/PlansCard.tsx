import { Button } from "../Button";
import { CheckIcon } from "../Icons/CheckIcon";

interface PlansCardProps {
  planTitle: string;
  planPrice: string;
}

export function PlansCard({ planTitle, planPrice }: PlansCardProps) {
  return (
    <div className="w-full h-[430px] bg-primary-050 px-4 py-8 rounded-2xl flex flex-col gap-6">
      <h1 className="text-lg leading-6 font-medium text-neutral-950 text-center">
        {planTitle}
        <br />
        {planPrice}
      </h1>

      <div className="flex items-start flex-col gap-3">
        <div className="flex items-center gap-2">
          <CheckIcon />

          <span className="text-sm text-neutral-800">Storage: 50MB</span>
        </div>

        <div className="flex items-center gap-2">
          <CheckIcon />

          <span className="text-sm text-neutral-800">
            Data Transfer: 100 GB/month
          </span>
        </div>

        <div className="flex items-center gap-2">
          <CheckIcon />

          <span className="text-sm text-neutral-800">
            Technical Support: Email
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 max-w-32 self-center">
        <Button variant="outlined" size="small">
          Get Started
        </Button>
      </div>
    </div>
  );
}
