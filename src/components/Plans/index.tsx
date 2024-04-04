"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { PlansCard } from "./PlansCard";

import "swiper/css";
import "swiper/css/pagination";

const plans = [
  {
    planTitle: "Enterprise",
    planPrice: "$20/month",
  },
  {
    planTitle: "Starter",
    planPrice: "$5/month",
  },
  {
    planTitle: "Business",
    planPrice: "$10/month",
  },
  {
    planTitle: "Custom",
    planPrice: "$15/month",
  },
];

export function Plans() {
  return (
    <section className="bg-white px-6 py-10">
      <h1 className="text-lg font-medium leading-6 text-neutral-950 text-center">
        Choose the Ideal Plan to Take Your Business to the Next Level with
        CloudBoost
      </h1>

      <h2 className="text-sm font-medium text-neutral-600 text-center mt-2">
        Our packages offer a variety of features to suitour customers' different
        needs and budgets.
      </h2>

      <div className="py-6">
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
              <SwiperSlide key={plan.planPrice}>
                <PlansCard
                  planTitle={plan.planTitle}
                  planPrice={plan.planPrice}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
