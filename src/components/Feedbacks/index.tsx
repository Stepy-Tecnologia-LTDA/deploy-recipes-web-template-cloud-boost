"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { feedbacks } from "@/mocks/projects";

import { FeedbackCard } from "./components/FeedbackCard";

import "swiper/css";
import "swiper/css/pagination";

export function Feedbacks() {
  return (
    <section className="bg-primary-050 px-6 py-10">
      <h1 className="text-lg font-medium leading-6 text-neutral-950 text-center">
        What Our Customers Are Saying
      </h1>

      <h2 className="text-sm font-medium text-neutral-600 text-center mt-2">
        Discover Real and Honest Feedback from Our Satisfied Users
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
  );
}
