"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { FeedbackCard } from "./components/FeedbackCard";

import EllipseOne from "../../assets/ellipse-1.png";
import EllipseTwo from "../../assets/ellipse-2.png";
import EllipseThree from "../../assets/ellipse-3.png";

import "swiper/css";
import "swiper/css/pagination";

const feedbacks = [
  {
    description:
      "CloudBoost has been an incredible partner for our company. With its flexible scalability and advanced real-time collaboration capabilities, we have been able to significantly improve our operational efficiency and adapt our resources according to customer needs. business. Technical support has also been exceptional. Definitely a smart choice for any company looking for reliable cloud solutions.",
    image: EllipseOne,
    name: "Pedro Oliveira",
    office: "IT Director at GlobalTech",
  },
  {
    description:
      "We are extremely pleased with CloudBoost. The platform offers a complete solution for cloud storage, automated backup and disaster recovery. Since migrating to CloudBoost, our team has enjoyed greater security and peace of mind in regarding our data. I recommend it without hesitation!",
    image: EllipseTwo,
    name: "Luciana Costa",
    office: "CEO of TechSolutions",
  },
  {
    description:
      "As a fast-growing startup, we needed a cloud storage solution that was reliable, secure and affordable. We found all this and more at CloudBoost. Its intuitive interface and efficient technical support helped us streamline our operations and focus on growing our business. We are extremely pleased with our choice.",
    image: EllipseThree,
    name: "Ana Santos",
    office: "Project Manager at StartUpX",
  },
];

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
              <SwiperSlide key={feedback.description}>
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
