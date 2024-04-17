"use client";

import Image from "next/image";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import RectangleAboutOne from "../../assets/rectangle-1.png";
import RectangleAboutTwo from "../../assets/rectangle-2.png";
import RectangleAboutThree from "../../assets/rectangle-3.png";
import RectangleWebOne from "../../assets/rectangle-web-1.png";
import RectangleWebTwo from "../../assets/rectangle-web-2.png";
import RectangleWebThree from "../../assets/rectangle-web-3.png";
import EffectOne from "../../assets/effect-1.png";
import EffectTwo from "../../assets/effect-2.png";
import EffectThree from "../../assets/effect-3.png";
import EffectFour from "../../assets/effect-4.png";

import "swiper/css";
import "swiper/css/pagination";

export function About() {
  return (
    <div className="bg-primary-500">
      <section
        id="about"
        className="container mx-auto max-w-screen-2xl px-6 py-10 md:px-8 md:py-20 lg:px-12 lg:py-28 lg:flex lg:gap-28 relative"
      >
        <div className="hidden lg:flex flex-col gap-8">
          <div className="absolute left-0 top-12">
            <Image src={EffectOne} alt="" />
          </div>

          <div className="absolute top-60 left-36">
            <Image src={EffectTwo} alt="" />
          </div>

          <div className="absolute bottom-[154px] left-0">
            <Image src={EffectThree} alt="" />
          </div>

          <div className="absolute bottom-0 left-64">
            <Image src={EffectFour} alt="" />
          </div>

          <div className="w-[318px] h-[192px] self-end z-10">
            <Image src={RectangleWebThree} alt="" />
          </div>

          <div className="w-[546px] h-[320px] z-10">
            <Image src={RectangleWebTwo} alt="" />
          </div>

          <div className="w-[251px] h-[192px] self-center z-10">
            <Image src={RectangleWebOne} alt="" />
          </div>
        </div>

        <p className="text-white leading-5 font-medium md:text-lg md:leading-6 lg:text-2xl">
          At CloudBoost, we are committed to providing world-class cloud
          solutions for businesses of all sizes. From growing startups to
          established enterprises, we help our customers maximize their
          potential in the digital age by offering a complete, integrated
          platform that combines advanced security, flexible scalability and
          real-time collaboration capabilities.
          <br />
          <br />
          With years of industry experience, our team of cloud experts is always
          looking to innovate and deliver the most advanced solutions to meet
          our customers' ever-evolving needs. We're committed to providing not
          only cutting-edge technology, but also exceptional support and
          personalized guidance every step of the way.
          <br />
          <br />
          At CloudBoost, we believe that our customers' success is our success.
          That's why we strive to be more than just a cloud services provider -
          we are a trusted and dedicated partner, working side by side with our
          customers to drive their digital transformation and reach new heights
          of excellence.
          <br />
          <br />
          Join us at CloudBoost and discover the power of the cloud to transform
          your business today
        </p>

        <div className="lg:hidden pt-6 md:pt-14">
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
            breakpoints={{
              768: {
                slidesPerView: 2.1,
              },
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
          </Swiper>
        </div>
      </section>
    </div>
  );
}
