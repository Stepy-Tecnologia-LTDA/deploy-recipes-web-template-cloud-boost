"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { feedbacks } from "@/mocks/projects";

import { FeedbackCard } from "./components/FeedbackCard";

import "swiper/css";
import "swiper/css/pagination";

export function Feedbacks() {
  return (
    <div className="bg-primary-050">
      <section className="container mx-auto max-w-screen-2xl px-6 py-10 md:px-8 md:py-20 lg:px-12 lg:py-28">
        <h1 className="text-lg font-medium leading-6 text-neutral-950 text-center md:text-2xl md:leading-8 lg:text-3xl lg:leading-10">
          What Our Customers Are Saying
        </h1>

        <h2 className="text-sm font-medium text-neutral-600 text-center mt-2 md:text-base md:leading-5 lg:text-xl lg:leading-6">
          Discover Real and Honest Feedback from Our Satisfied Users
        </h2>

        <div className="pt-6 md:pt-12 lg:pt-24">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1.1}
            spaceBetween={16}
            loop={true}
            pagination
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 1.8,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {feedbacks.map((feedback) => {
              return (
                <SwiperSlide key={feedback.id}>
                  <FeedbackCard
                    description={feedback.description}
                    image={feedback.image}
                    name={feedback.name}
                    office={feedback.office}
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
