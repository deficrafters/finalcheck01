"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { content } from "@/utils/content.js";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const { gameBarItems } = content;

export default function GamesBar({ sticky }) {
  return (
    <section
      className={`bg-cool-30 py-4 ${
        sticky ? `sticky top-[75px] z-[2]` : `static`
      }`}
    >
      <div
        className={`wrapper-desk !px-0 sm:!px-4 md:!px-8 lg:!px-10 xl:!px-16`}
      >
        {/* SLIDER */}
        <div className={`min-w-[100%]`}>
          <Swiper
            slidesPerView={3}
            freeMode={false}
            centeredSlides={false}
            loop
            autoplay={false}
            spaceBetween={8}
            modules={[FreeMode, Pagination, Autoplay, Navigation]}
            breakpoints={{
              360: {
                slidesPerView: 2,
                spaceBetween: 8,
                centeredSlides: true,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 8,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 8,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 8,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 8,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 8,
                centeredSlides: false,
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 0,
                centeredSlides: false,
              },
            }}
            className={`w-[100%]`}
          >
            {gameBarItems.map((item, index) => (
              <SwiperSlide key={index} className={``}>
                <Link
                  href={item.href}
                  className={`flex flex-col items-center justify-center`}
                >
                  <Image
                    src={item.image}
                    alt=""
                    width={20}
                    height={20}
                    className={`min-w-[20px] min-h-[20px] w-auto h-auto`}
                  />
                  <span className={`text-[14px]`}>{item.name}</span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
