import { Questions } from "./components/Questions";

const faqs = [
  {
    title: "What is CloudBoost?",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
  {
    title: "What are the main benefits of using CloudBoost?",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
  {
    title: "What types of companies can benefit from CloudBoost?",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
  {
    title: " What services does CloudBoost offer besides cloud storage?",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
  {
    title: "How can I migrate my data to CloudBoost?",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
  {
    title: "Does CloudBoost offer technical support?",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
  {
    title: "Does CloudBoost guarantee the security of my data",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
  {
    title: "Can I customize CloudBoost plans according to my company's needs?",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
  {
    title: "How do I get started with CloudBoost?",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
  {
    title: " What payment methods does CloudBoost accept?",
    description:
      "CloudBoost is a cloud computing platform that offers a variety of services including data storage, information processing and cloud application hosting.",
  },
];

export function Faqs() {
  return (
    <section className="bg-primary-050 px-6 py-10">
      <h1 className="text-lg font-medium leading-6 text-neutral-950 text-center">
        Ask your questions about CloudBoost
      </h1>

      <h2 className="text-sm font-medium text-neutral-600 text-center mt-2">
        Find Quick Answers to Common Questions About Our Cloud Platform
      </h2>

      <div className="flex flex-col gap-4 mt-6">
        {faqs.map((faq) => {
          return <Questions title={faq.title} description={faq.description} />;
        })}
      </div>
    </section>
  );
}
