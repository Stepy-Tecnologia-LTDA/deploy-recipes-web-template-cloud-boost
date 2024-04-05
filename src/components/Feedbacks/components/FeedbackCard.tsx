import Image, { StaticImageData } from "next/image";

import { StarIcon } from "@/components/Icons/StarIcon";

interface FeedbackCardProps {
  description: string;
  image: StaticImageData;
  name: string;
  office: string;
}

export function FeedbackCard({
  description,
  image,
  name,
  office,
}: FeedbackCardProps) {
  return (
    <div className="w-full h-[354px] bg-white p-6 rounded-2xl flex flex-col gap-3 items-start">
      <div className="flex items-center gap-2">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>

      <p className="text-sm text-neutral-800">{description}</p>

      <div className="flex items-center gap-2 mt-3 absolute bottom-6 left-6">
        <Image src={image} alt="photo" />

        <div className="flex flex-col gap[2px]">
          <p className="text-sm font-medium text-neutral-950">{name}</p>

          <span className="text-xs text-neutral-600">{office}</span>
        </div>
      </div>
    </div>
  );
}
