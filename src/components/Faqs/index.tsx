import { faqs } from "@/mocks/projects";

import { Questions } from "./components/Questions";

export function Faqs() {
  return (
    <section id="faq" className="bg-primary-050 px-6 py-10">
      <h1 className="text-lg font-medium leading-6 text-neutral-950 text-center">
        Ask your questions about CloudBoost
      </h1>

      <h2 className="text-sm font-medium text-neutral-600 text-center mt-2">
        Find Quick Answers to Common Questions About Our Cloud Platform
      </h2>

      <div className="flex flex-col gap-4 mt-6">
        {faqs.map((faq) => {
          return (
            <Questions
              key={faq.id}
              title={faq.title}
              description={faq.description}
            />
          );
        })}
      </div>
    </section>
  );
}
