"use client";
import { content } from "@/utils/content.js";
import Image from "next/image";

import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionIdentifier from "./SectionIdentifier";

const { coinQuest } = content.howToPlay;


export default function HowToPlaySection({ sectionTitle, description }) {


  return (
    <section className={`relative py-8 bg-cool-20/50`}>
      <SectionIdentifier id="how-to-play" />
      <div className={``}>
        <div className={`wrapper-desk`}>
          <h3
            className={`text-[24px] text-center md:text-left font-semibold tracking-tight`}
          >
            {sectionTitle}
          </h3>
          <p className={`text-center sm:text-left text-cool-80`}>
            {description}
          </p>
        </div>

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
            className={`mt-6 `}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              360: {
                slidesPerView: 2,
                spaceBetween: 12,
                centeredSlides: false,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 12,
                centeredSlides: false,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 12,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 12,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 12,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 12,
                initialSlide: 2,
                centeredSlides: false,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 16,
                initialSlide: 0,
                centeredSlides: false,
              },
            }}
            
          >
            
            {coinQuest.map((item, index) => (
              <SwiperSlide key={index} className={`last:!mr-0 `}>
                <div
                  className={`bg-cool-50/0 max-w-full flex flex-col xl:flex-row items-center justify-center gap-3 rounded-lg overflow-hidden px-4 py-8`}
                >
                  <div
                    className={`relative w-[120px] md:w-[85px] h-[120px] md:h-[85px] xl:w-[100px] xl:h-[100px] bg-cool-60/10 flex items-center justify-center rounded-full`}
                  >
                    <div
                      className={`absolute top-0 right-0 w-7 h-7 translate-x-0 translate-y-0 bg-cool-50 text-[14px] flex items-center justify-center rounded-full`}
                    >
                      {index + 1}
                    </div>

                    <Image
                      src={item.icon}
                      alt=""
                      width={28}
                      height={45.39}
                      className="w-auto h-auto scale-[0.85] xl:scale-[0.85]"
                    />

                  </div>
                  <p
                    className={`flex-none xl:flex-1 text-[16px] xs:text-[18px] xl:text-[20px] text-cool-80/80 text-center xl:text-left capitalize leading-[110%] italic`}
                  >
                    <span className={`swiper-no-swiping`}>
                     <span className="text-white font-semibold" style={{marginLeft:5}}> {item.textA}</span>
                      <span style={{marginTop:5,fontSize:15}} className={`block`}>
                        {item.textB}
                      </span>
                    </span>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
