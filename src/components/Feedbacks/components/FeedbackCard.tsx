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
    <div className="w-full h-[354px] md:h-[362px] bg-white p-6 rounded-2xl flex flex-col gap-3 md:gap-4 relative">
      <div className="md:hidden flex items-center gap-2">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>

      <div className="hidden md:flex items-center gap-2">
        <StarIcon size={16} />
        <StarIcon size={16} />
        <StarIcon size={16} />
        <StarIcon size={16} />
        <StarIcon size={16} />
      </div>

      <p className="text-sm text-neutral-800 md:text-base leading-5">
        {description}
      </p>

      <div className="flex items-center gap-2 absolute bottom-6 left-6">
        <Image
          src={image}
          alt="photo"
          className="w-8 h-8 md:w-12 md:h-12 object-cover"
        />

        <div className="flex flex-col gap-[2px] md:gap-1">
          <p className="text-sm font-medium text-neutral-950 md:text-base md:leading-5">
            {name}
          </p>

          <span className="text-xs text-neutral-600 md:text-sm">{office}</span>
        </div>
      </div>
    </div>
  );
}
