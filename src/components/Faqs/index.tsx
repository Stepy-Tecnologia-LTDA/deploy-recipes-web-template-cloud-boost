import { faqs } from "@/mocks/projects";
import { chunk } from "@/utils/Chunk";

import { Button } from "../Button";
import { Questions } from "./components/Questions";

export function Faqs() {
  return (
    <div className="bg-primary-050">
      <section
        id="faq"
        className="container mx-auto max-w-screen-2xl px-6 py-10 flex flex-col md:px-8 md:py-20 lg:px-12 lg:py-28"
      >
        <h1 className="text-lg font-medium leading-6 text-neutral-950 text-center md:text-2xl lg:text-3xl lg:leading-10">
          Ask your questions about CloudBoost
        </h1>

        <h2 className="text-sm font-medium text-neutral-600 text-center mt-2 md:text-base lg:mt-3 lg:text-xl lg:leading-6">
          Find Quick Answers to Common Questions About Our Cloud Platform
        </h2>

        <div className="flex flex-col gap-4 mt-6 md:mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-6">
          {chunk(faqs, 5).map((faqGroup, faqGroupIndex) => {
            return (
              <div className="flex flex-col gap-4 lg:gap-6" key={faqGroupIndex}>
                {faqGroup.map((faq) => {
                  return (
                    <Questions
                      key={faq.id}
                      title={faq.title}
                      description={faq.description}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="hidden md:block mt-12 max-w-80 self-center lg:mt-16">
          <Button variant="outlined">Have any questions? Get in touch</Button>
        </div>
      </section>
    </div>
  );
}
