import { resources } from "@/mocks/projects";

import { CardResource } from "./components/CardResource";

export function Resources() {
  return (
    <section id="resource" className="bg-white px-6 py-10">
      <h1 className="text-lg leading-6 font-medium text-neutral-950 text-center">
        Explore Our Cutting-Edge Resources
      </h1>

      <h2 className="text-sm font-medium text-neutral-600 text-center mt-2">
        Discover How CloudBoost Can Transform Your Cloud Experience
      </h2>

      <div className="flex flex-col gap-4 mt-6">
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
  );
}
