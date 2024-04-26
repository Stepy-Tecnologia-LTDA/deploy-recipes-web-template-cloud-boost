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
        className="container mx-auto max-w-screen-2xl px-6 py-10 md:px-8 md:py-20 lg:px-12 lg:py-28"
      >
        <h1 className="text-lg font-medium leading-6 text-neutral-950 text-center md:text-2xl lg:text-3xl lg:leading-10">
          Choose the Ideal Plan to Take Your Business to the Next Level with
          CloudBoost
        </h1>

        <h2 className="text-sm font-medium text-neutral-600 text-center mt-2 md:text-base md:leading-5 lg:text-xl lg:leading-6 lg:mt-3">
          Our packages offer a variety of features to suitour customers
          different needs and budgets.
        </h2>

        <div className="pt-6 md:pt-14 lg:pt-24">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1.2}
            spaceBetween={-32}
            loop={true}
            pagination
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {plans.map((plan) => {
              return (
                <SwiperSlide key={plan.id}>
                  <PlansCard
                    selected={plan.selected}
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
