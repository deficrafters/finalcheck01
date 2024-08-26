"use client";
import Image from "next/image";
import Link from "next/link";
import { content } from "../../utils/content.js";

import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionIdentifier from "../common/SectionIdentifier.jsx";

const { title, description } = content.sectionData.dreamzThree;
const { dreamzThreeCardData } = content;

export default function DreamzThreeSection() {
  return (
    <section className={`relative dreamzThreeBG bg-fixed py-8`}>
      <SectionIdentifier id="dreamz-three" />
      <div>
        <div className={`wrapper-desk`}>
          <div className="flex flex-col justify-center gap-2">
            <h3 className={`text-[24px] font-semibold tracking-tight`}>
              {title}
            </h3>
            <p
              className={`text-[14px] xs:text-[16px] text-cool-80 w-[100%] md:w-[700px]`}
            >
              {description}
            </p>
          </div>
        </div>
        <div
          className={`wrapper-desk grid grid-cols-2 gap-0 sm:gap-8 xl:gap-0`}
        >
          <div
            className={`col-span-2 sm:col-span-1 relative w-full h-[400px] overflow-hidden`}
          >
            <div
              className={`dThreeBannerImg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] xl:w-[80%] h-[90%] xs:h-[80%] bg-black rounded-lg`}
            ></div>
          </div>
          <div
            className={`col-span-2 sm:col-span-1 self-center flex flex-col items-center sm:items-start`}
          >
            <h1
              className={` text-white text-[28px] xs:text-[40px] text-center sm:text-left font-medium leading-[120%]`}
            >
              Dream<span className={`text-hl-01`}>Z</span> 3
              <br className={`block sm:hidden`} /> Weekly Draw
            </h1>
            <IncreaseMoney />
            <Link
              href={""}
              className={`btnRect !bg-cool-50 hover:!bg-cool-40 mt-4 !px-6 !py-4 !rounded-lg`}
            >
              Play For Free!
            </Link>
          </div>
        </div>
        {/* SLIDER */}
        <div className={`wrapper-desk !px-0 !md:px-0 lg:!px-10 xl:!px-16`}>
          <Swiper
            spaceBetween={0}
            slidesPerView={0}
            freeMode={false}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            centeredSlides
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
                slidesPerView: 3.25,
                spaceBetween: 12,
                initialSlide: 0,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 2.6,
                spaceBetween: 12,
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
            {dreamzThreeCardData.map((item, index) => (
              <SwiperSlide key={index} className={`relative last:!mr-0`}>
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
                      className={`relative w-[100%] h-[70%] overflow-hidden`}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                        className={`absolute top-0 left-0 scale-[2.2] -translate-x-8 w-full h-full bg-center bg-cover`}
                      ></div>
                    </div>
                    <div
                      className={`bg-black w-full h-[30%] flex items-center justify-between px-4`}
                    >
                      <h3 className="text-white text-center uppercase leading-none italic text-[16px] lg:text-[20px] font-semibold">
                        {item.name}
                      </h3>
                      <div className={`flex flex-col items-end`}>
                        <p
                          className={`text-[10px] lg:text-[12px] text-slate-400 uppercase leading-none`}
                        >
                          Entry Price
                        </p>
                        <span
                          className={`text-[16px] lg:text-[18px] tracking-tight font-semibold uppercase`}
                        >
                          {item.amount}
                        </span>
                      </div>
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

function IncreaseMoney() {
  return (
    <div className="flex flex-col gap-4 mt-4 xs:mt-0">
      <p className="text-cool-80 text-[16px] xs:text-xl text-center sm:text-left">
        Increase your money by
      </p>
      <div className="text-white flex items-center justify-center sm:justify-start gap-3">
        <div className="animate-pulse w-[80px] h-[80px] bg-blue-900 flex items-center justify-center rounded-full ">
          <p className="font-semibold text-center text-[hsl(259,43%,90%)]">
            100X
          </p>
        </div>
        <div className="animate-pulse w-[80px] h-[80px] bg-blue-900 flex items-center justify-center rounded-full ">
          <p className="font-semibold text-center text-[hsl(259,43%,90%)]">
            30X
          </p>
        </div>
        <div className="animate-pulse w-[80px] h-[80px] bg-blue-900 flex items-center justify-center rounded-full ">
          <p className="font-semibold text-center text-[hsl(259,43%,90%)]">
            10X
          </p>
        </div>
      </div>
    </div>
  );
}
