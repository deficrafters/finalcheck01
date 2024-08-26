"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { content } from "../../utils/content.js";
import BoxGridIcon from "../../../public/box-grid-icon.png";

import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionIdentifier from "../common/SectionIdentifier.jsx";

const { title, description } = content.sectionData.gameGenres;
const { gameGenres } = content;

export default function GameSection() {
  return (
    <section className={`relative`}>
      <SectionIdentifier id="games" />
      <div className={`py-10 text-left`}>
        <h3
          className={`wrapper-desk text-[24px] font-semibold tracking-tight mb-2`}
        >
          {title}
        </h3>
       
        <div className={`wrapper-desk !px-0 !md:px-0 lg:!px-10 xl:!px-16`}>
          <Swiper
            spaceBetween={32}
            slidesPerView={6}
            freeMode={false}
            loop
            initialSlide={0}
            modules={[FreeMode, Autoplay, Pagination, Navigation]}
            className={`mt-6`}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 12,
                centeredSlides: false,
              },
              480: {
                slidesPerView: 1.8,
                spaceBetween: 12,
                centeredSlides: false,
              },
              640: {
                slidesPerView: 3.4,
                spaceBetween: 12,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 3.65,
                spaceBetween: 12,
              },
              1024: {
                slidesPerView: 2.6,
                spaceBetween: 12,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 8,
                initialSlide: 0,
                centeredSlides: false,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 12,
                initialSlide: 0,
                centeredSlides: false,
              },
            }}
          >
            {gameGenres.map((item, index) => {

              if (item.name == "dreamz dual") return

              return <SwiperSlide
              key={index}
              className={`last:!mr-0`}
              style={{ marginLeft: "2px" }}
            >
              <Link
                href={item.route}
                className={`relative max-w-[100%] xl:w-[250px] 2xl:w-[100%] h-[260px] xs:h-[260px] sm:h-[200px] md:h-[220px] lg:h-[300px] flex-shrink-0 rounded-lg flex items-center justify-center overflow-hidden`}
              >
                <div className={`absolute top-0 left-0 w-full h-full`}>
                  <div
                    className={`relative w-[100%] h-[70%] bg-slate-400 overflow-hidden`}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${item.image})`,
                      }}
                      className={`absolute scale-125 top-0 left-0 w-full h-full bg-center bg-cover`}
                    ></div>
                  </div>
                  <div
                    className={`absolute bottom-0 left-0 bg-cool-10 w-full h-[30%] flex items-center justify-between px-4 xs:px-6 sm:px-4 lg:px-6 lg:text-[18px] font-semibold uppercase leading-none`}
                  >
                    {item.name}
                    <Image
                      className={`w-[16px] animate-spin`}
                      src={BoxGridIcon}
                      alt={`thumbnail-${item.name}`}
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
