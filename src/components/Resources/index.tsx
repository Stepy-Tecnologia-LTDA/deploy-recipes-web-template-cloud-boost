import { resources } from "@/mocks/projects";

import { CardResource } from "./components/CardResource";

export function Resources() {
  return (
    <div className="bg-white">
      <section
        id="resource"
        className="container mx-auto max-w-screen-2xl px-6 py-10 md:px-8 md:py-20 lg:px-12 lg:py-28"
      >
        <h1 className="text-lg leading-6 font-medium text-neutral-950 text-center md:text-2xl md:leading-8 lg:text-3xl lg:leading-10">
          Explore Our Cutting-Edge Resources
        </h1>

        <h2 className="text-sm font-medium text-neutral-600 text-center mt-2 md:text-base md:leading-5 lg:mt-3 lg:text-xl leading-6">
          Discover How CloudBoost Can Transform Your Cloud Experience
        </h2>

        <div className="flex flex-col gap-4 mt-6 md:mt-12 md:grid md:grid-cols-2 md:gap-5 lg:mt-24 lg:grid-cols-3 lg:gap-6">
          {resources.map((resource) => {
            return (
              <CardResource
                key={resource.id}
                icon={resource.icon}
                title={resource.title}
                description={resource.description}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
