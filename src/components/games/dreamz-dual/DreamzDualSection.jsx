"use client";
import React from "react";
import { useContext } from "react";
import { usePathname } from "next/navigation.js";
import Link from "next/link";
import { content } from "../../../utils/content.js";

import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionIdentifier from "../../common/SectionIdentifier.jsx";
import GlobalContext from "../../context/global/GlobalContext.js";

const { dreamzDualNewCardData } = content;

export default function DreamZDualSection({
  title,
  description,
  showDescription,
  id,
}) {
  const {
    enableMini,
    enablePower,
    enableSuper,
    enableMega,
    enableDreamz,
    disabledDreamz,
    timeMiniBlast,
    timePowerBlast,
    timeSuperBlast,
    timeMegaBlast,
    timeDreamzBlast,
  } = useContext(GlobalContext);

  const pathname = usePathname();

  const onCardClick = () => {
    if (pathname.includes("dreamz-dual")) {
      let index = pathname.indexOf("dreamz-dual");
      let extractedSubstring = pathname.slice(
        index,
        index + "dreamz-dual".length
      );
      // console.log(extractedSubstring);
    }
  };

  return (
    <section>
      <div className={`relative py-8`}>
        <SectionIdentifier id={id} />
        <div className={`wrapper-desk flex flex-col justify-center gap-2`}>
          <h3 className={`text-[24px] font-semibold tracking-tight`}>
            {title}
          </h3>
          {showDescription && (
            <p
              className={`text-[14px] xs:text-[16px] text-cool-80 w-[100%] md:w-[700px]`}
            >
              {description}
            </p>
          )}
        </div>
        {/* SWIPER */}
        <div
          className={`wrapper-desk max-w-[100%] !px-0 sm:!px-4 md:!px-8 lg:!px-10 xl:!px-16 mt-4`}
        >
          <Swiper
            //autoplay={true}
            slidesPerView={2}
            slidesPerGroup={1}
            loop
            freeMode={false}
            initialSlide={2}
            modules={[Pagination, Autoplay, FreeMode]}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 8,
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 8,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              768: { slidesPerView: 2.5, spaceBetween: 16 },
              1024: { slidesPerView: 2.5, spaceBetween: 16 },
              1280: { slidesPerView: 3, spaceBetween: 16 },
              1440: { slidesPerView: 3.5, spaceBetween: 16 },
            }}
          >
            {dreamzDualNewCardData.map((item, index) => (
              <SwiperSlide
                key={index}
                className={`max-w-[100%]`}
                style={{ marginLeft: "2px" }}
              >
                <Link
                  onClick={onCardClick}
                  href={"/"}
                  style={{
                    backgroundImage: `url(${"/dreamz-dual/Dreamz-Dual_Card_BG.jpg"})`,
                  }}
                  className={`relative flex flex-col justify-between w-[100%] aspect-[3/3.5] bg-cover bg-top rounded-lg overflow-hidden`}
                >
                  <div
                    style={{
                      backgroundImage: `url(${"/dreamz-dual/character_left.png"})`,
                    }}
                    className={`dreamDualLeftCharacter`}
                  ></div>
                  <div
                    style={{
                      backgroundImage: `url(${"/dreamz-dual/character_right.png"})`,
                    }}
                    className={`dreamDualRightCharacter`}
                  ></div>
                  <div className={`flex items-start justify-between p-4`}>
                    {/* TITLE */}
                    <div>
                      <div className={`bg-cool-10 w-max p-2 rounded`}>
                        <h2
                          className={`block text-cool-90 text-[12px] leading-none -mr-[6px] tracking-[6px] uppercase`}
                        >
                          {item.name}
                        </h2>
                      </div>
                      <span
                        className={`block text-[28px] font-semibold leading-none tracking-tight mt-[2px]`}
                      >
                        Blast
                      </span>
                    </div>
                    <div className={`flex flex-col items-end`}>
                      {/* STATUS */}
                      <div
                        className={`${
                          item.name === "mini" && enableMini
                            ? "bg-red-900  animate-pulse"
                            : item.name === "power" && enablePower
                            ? "bg-red-900  animate-pulse"
                            : item.name === "super" && enableSuper
                            ? "bg-red-900  animate-pulse"
                            : item.name === "mega" && enableMega
                            ? "bg-red-900  animate-pulse"
                            : item.name === "dreamz" && enableDreamz
                            ? "bg-red-900  animate-pulse"
                            : "bg-slate-900 animate-none"
                        } w-max text-white text-center px-3 py-1 uppercase text-[12px] font-medium rounded-md`}
                      >
                        {item.name === "mini" && enableMini
                          ? "live"
                          : item.name === "power" && enablePower
                          ? "live"
                          : item.name === "super" && enableSuper
                          ? "live"
                          : item.name === "mega" && enableMega
                          ? "live"
                          : item.name === "dreamz" && enableDreamz
                          ? "live"
                          : "closed"}
                      </div>
                      {/* LABEL */}
                      <p
                        className={`text-[12px] text-right text-cool-90 leading-none mt-1`}
                      >
                        Next draw in
                      </p>
                      {/* TIMER */}
                      <div
                        className={`flex items-center justify-end text-[16px] gap-1 leading-none mt-[2px]`}
                      >
                        {/* MINUTES */}
                        <div className={`flex items-center gap-[2px]`}>
                          {item.name === "mini"
                            ? timeMiniBlast.minutes
                            : item.name === "power"
                            ? timePowerBlast.minutes
                            : item.name === "super"
                            ? timeSuperBlast.minutes
                            : item.name === "mega"
                            ? timeMegaBlast.minutes
                            : item.name === "dreamz"
                            ? timeDreamzBlast.minutes
                            : 0}
                          <span className={`text-cool-90`}>min</span>
                        </div>
                        {/* SECONDS */}
                        <div className={`flex items-center gap-[2px]`}>
                          {item.name === "mini"
                            ? timeMiniBlast.seconds
                            : item.name === "power"
                            ? timePowerBlast.seconds
                            : item.name === "super"
                            ? timeSuperBlast.seconds
                            : item.name === "mega"
                            ? timeMegaBlast.seconds
                            : item.name === "dreamz"
                            ? timeDreamzBlast.seconds
                            : 0}
                          <span className={`text-cool-90`}>sec</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`z-[1]`}>
                    {/* ENTRY PRICE */}
                    <div
                      className={`bg-cool-05/60 text-cool-90 flex items-center justify-between px-4 py-2 backdrop-blur-sm tracking-tight`}
                    >
                      Entry Price
                      <span
                        className={`text-white font-semibold tracking-tight`}
                      >
                        {item.entryAmount}
                      </span>
                    </div>
                    {/* PRIZE VALUE & WINNING PROBABILITY */}
                    <div
                      className={`bg-hl-01-text flex items-center justify-between px-4 py-3`}
                    >
                      <div className={`flex flex-col`}>
                        <span className={`text-[14px] leading-none opacity-85`}>
                          Prize Value
                        </span>
                        <span
                          className={`font-semibold leading-none tracking-tight text-[18px] mt-1`}
                        >
                          {item.prizeValue}
                        </span>
                      </div>
                      <div className={`flex flex-col items-end`}>
                        <span className={`text-[14px] leading-none opacity-85`}>
                          Winning Probability
                        </span>
                        <span
                          className={`font-semibold leading-none tracking-tight text-[18px] mt-1`}
                        >
                          {item.winningProbability}
                        </span>
                      </div>
                    </div>
                    {/* PLAY NOW */}
                    <div
                      className={`bg-cool-20 text-center text-[14px] font-semibold py-1 uppercase`}
                    >
                      COMING SOON
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
