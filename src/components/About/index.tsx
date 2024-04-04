"use client";

import Image from "next/image";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import RectangleAboutOne from "../../assets/rectangle-about-1.png";
import RectangleAboutTwo from "../../assets/rectangle-about-2.png";
import RectangleAboutThree from "../../assets/rectangle-about-3.png";
import RectangleAboutFour from "../../assets/rectangle-about-4.png";

import "swiper/css";
import "swiper/css/pagination";

export function About() {
  return (
    <section className="bg-primary-500 px-6 py-10">
      <p className="text-white leading-5 font-medium">
        At CloudBoost, we are committed to providing world-class cloud solutions
        for businesses of all sizes. From growing startups to established
        enterprises, we help our customers maximize their potential in the
        digital age by offering a complete, integrated platform that combines
        advanced security, flexible scalability and real-time collaboration
        capabilities. With years of industry experience, our team of cloud
        experts is always looking to innovate and deliver the most advanced
        solutions to meet our customers' ever-evolving needs. We're committed to
        providing not only cutting-edge technology, but also exceptional support
        and personalized guidance every step of the way. At CloudBoost, we
        believe that our customers' success is our success. That's why we strive
        to be more than just a cloud services provider - we are a trusted and
        dedicated partner, working side by side with our customers to drive
        their digital transformation and reach new heights of excellence. Join
        us at CloudBoost and discover the power of the cloud to transform your
        business today
      </p>

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
          <SwiperSlide>
            <Image src={RectangleAboutOne} alt="image" />
          </SwiperSlide>

          <SwiperSlide>
            <Image src={RectangleAboutTwo} alt="image" />
          </SwiperSlide>

          <SwiperSlide>
            <Image src={RectangleAboutThree} alt="image" />
          </SwiperSlide>

          <SwiperSlide>
            <Image src={RectangleAboutFour} alt="image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
