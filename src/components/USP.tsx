import Image from "next/image";

import Rectangle from "../assets/rectangle.png";

export function USP() {
  return (
    <section className="bg-primary-500 px-6 py-10 flex flex-col gap-6">
      <p className="text-white font-medium leading-5">
        At CloudBoost, we not only offer state-of-the-art cloud storage and
        automated backup solutions, but we also provide a complete, integrated
        platform that combines flexible scalability, advanced security, and
        real-time collaboration capabilities. Our USP lies in the ability to
        offer a comprehensive solution that meets the specific needs of our
        customers, from growing startups to established enterprises, enabling
        them to maximize the efficiency, security and performance of their data
        in the cloud, all with exceptional support from our specialized team.
      </p>

      <Image src={Rectangle} alt="rectangle" />
    </section>
  );
}
