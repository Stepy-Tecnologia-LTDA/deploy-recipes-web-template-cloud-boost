"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { plans } from "@/mocks/projects";

import { PlansCard } from "./PlansCard";

import "swiper/css";
import "swiper/css/pagination";

export function Plans() {
  return (
    <div className="bg-white">
      <section
        id="plan"
        className="container mx-auto max-w-screen-2xl px-6 py-10"
      >
        <h1 className="text-lg font-medium leading-6 text-neutral-950 text-center">
          Choose the Ideal Plan to Take Your Business to the Next Level with
          CloudBoost
        </h1>

        <h2 className="text-sm font-medium text-neutral-600 text-center mt-2">
          Our packages offer a variety of features to suitour customers'
          different needs and budgets.
        </h2>

        <div className="pt-6">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            pagination
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {plans.map((plan) => {
              return (
                <SwiperSlide key={plan.id}>
                  <PlansCard
                    color={plan.color}
                    title={plan.title}
                    price={plan.price}
                    infos={plan.infos}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
