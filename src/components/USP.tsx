import Image from "next/image";

import Rectangle from "../assets/rectangle.png";

export function USP() {
  return (
    <div className="bg-primary-500">
      <section className="container mx-auto max-w-screen-xl px-6 py-10 flex flex-col items-center gap-6 md:flex-row md:px-8 md:py-20 md:gap-10 lg:px-12 lg:py-28 lg:gap-32">
        <Image
          src={Rectangle}
          alt="rectangle"
          className="hidden md:block md:w-[296px] md:h-[328px] lg:h-[480px] lg:w-[432px]"
        />

        <p className="text-white font-medium leading-5 md:text-lg md:leading-6 lg:text-2xl lg:leading-8">
          At CloudBoost, we not only offer state-of-the-art cloud storage and
          automated backup solutions, but we also provide a complete, integrated
          platform that combines flexible scalability, advanced security, and
          real-time collaboration capabilities. Our USP lies in the ability to
          offer a comprehensive solution that meets the specific needs of our
          customers, from growing startups to established enterprises, enabling
          them to maximize the efficiency, security and performance of their
          data in the cloud, all with exceptional support from our specialized
          team.
        </p>

        <Image
          src={Rectangle}
          alt="rectangle"
          className="md:hidden h-48 object-cover rounded-2xl"
        />
      </section>
    </div>
  );
}
