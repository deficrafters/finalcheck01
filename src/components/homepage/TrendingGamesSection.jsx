"use client";
import React from "react";
import { content } from "@/utils/content.js";

import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionIdentifier from "../common/SectionIdentifier";

const { title, description } = content.sectionData.trendingGames;

export default function TrendingGamesSection() {
  return (
    <section className={`relative`}>
      <SectionIdentifier id="trending" />
      <div className={`py-8`}>
        <div className="wrapper-desk flex flex-col justify-center gap-2">
          <h3 className={`text-[24px] font-semibold tracking-tight`}>
            {title}
          </h3>
          <p
            className={`text-[14px] xs:text-[16px] text-cool-80 w-[100%] md:w-[700px]`}
          >
            {description}
          </p>
        </div>
        {/* SLIDER */}
        <div className={`wrapper-desk !px-0 lg:!px-10 xl:!px-16`}>
          <Swiper
            spaceBetween={0}
            slidesPerView={0}
            freeMode={false}
            autoplay
            loop
            centeredSlides={true}
            modules={[FreeMode, Autoplay, Pagination, Navigation]}
            className={`min-w-[100%] mt-6`}
            breakpoints={{
              360: {
                slidesPerView: 2,
                spaceBetween: 8,
                centeredSlides: true,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 12,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 8,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 8,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 12,
                centeredSlides: true,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 8,
                centeredSlides: false,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 12,
                centeredSlides: false,
              },
            }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <SwiperSlide key={i} className={`min-w-[200px] last:!mr-0`}>
                <div
                  className={`bg-slate-600 max-w-[100%] h-[250px] lg:h-[300px] rounded-lg flex items-center justify-center overflow-hidden`}
                >
                  Trending Game {i + 1}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
