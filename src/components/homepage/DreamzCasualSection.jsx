"use client";
import Image from "next/image";
import Link from "next/link";
import { content } from "../../utils/content.js";

import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const { title, description } = content.sectionData.dreamzCasual;
const { dreamzCasualCardData } = content;

export default function DreamzCasualSection() {
  return (
    <section>
      <div className={`my-8`}>
        <div className={`wrapper-desk flex flex-col justify-center gap-2`}>
          <h3 className={`text-[24px] font-semibold tracking-tight`}>
            {title}
          </h3>
          <p
            className={`text-[14px] xs:text-[16px] text-cool-80 w-[100%] lg:w-[600px]`}
          >
            {description}
          </p>
        </div>
        {/* SLIDER */}
        <div className={`wrapper-desk !px-0 !md:px-8 lg:!px-10 xl:!px-16`}>
          <Swiper
            spaceBetween={0}
            slidesPerView={0}
            freeMode={false}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            initialSlide={2}
            modules={[FreeMode, Autoplay, Pagination, Navigation]}
            className={`mt-6`}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 12,
              },
              480: {
                slidesPerView: 1.8,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 2.4,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 3.5,
                spaceBetween: 12,
                initialSlide: 0,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
                initialSlide: 0,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 8,
                initialSlide: 0,
                centeredSlides: false,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 16,
                initialSlide: 0,
                centeredSlides: false,
              },
            }}
          >
            {dreamzCasualCardData.map((item, index) => (
              <SwiperSlide
                key={index}
                className={`relative last:!mr-0`}
                style={{ marginLeft: "2px" }}
              >
                <div
                  className={`${
                    item.status === "closed" ? "block" : "hidden"
                  } backdrop-grayscale-0 absolute top-0 left-0 w-full h-full z-[2]`}
                ></div>
                <Link
                  href={item.route}
                  className={`relative max-w-[100%] xl:w-[250px] 2xl:w-[100%] h-[270px] xs:h-[260px] sm:h-[250px] md:h-[220px] lg:h-[320px] flex-shrink-0  flex items-center justify-center rounded-lg overflow-hidden`}
                >
                  <div className={`absolute top-0 left-0 w-full h-full`}>
                    <div
                      className={`relative w-[100%] h-[50%] overflow-hidden`}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                        className={`absolute top-0 left-0 scale-[1.25] -translate-x-0 w-full h-full bg-center bg-cover`}
                      ></div>
                    </div>
                    <div className={`w-full h-[50%]`}>
                      <h3
                        className={`w-[100%] h-[50%] text-white bg-black text-center uppercase leading-none italic text-[16px] lg:text-[20px] font-medium flex items-center justify-center px-4`}
                      >
                        {item.name}
                      </h3>
                      <div
                        className={`bg-blue-950 h-[30%] flex items-center justify-center`}
                      >
                        <p
                          className={`text-[12px] xs:text-[14px] text-center capitalize`}
                        >
                          {item.catch}
                        </p>
                      </div>
                      <p
                        className={`bg-cool-30 font-semibold h-[20%] text-[14px] text-center flex items-center justify-center uppercase`}
                      >
                        {item.gameState}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
