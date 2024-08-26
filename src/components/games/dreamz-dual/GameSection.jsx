"use client";
import Link from "next/link";
import { useContext } from "react";
import { content } from "@/utils/content.js";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Timer from "@/components/common/Timer";
import GlobalContext from "@/components/context/global/GlobalContext";
import SectionIdentifier from "@/components/common/SectionIdentifier";

const { dreamzDualNewCardData } = content;

export default function GameSection() {
  const {
    dateMiniBlast,
    datePowerBlast,
    dateSuperBlast,
    dateMegaBlast,
    dateDreamzBlast,
  } = useContext(GlobalContext);

  return (
    <section className={`relative py-8`}>
      <SectionIdentifier id="games" />
      <div className={``}>
        <h3
          className={`wrapper-desk text-[20px] xs:text-[24px] font-semibold tracking-tight text-center lg:text-left mb-4`}
        >
          Live Games
        </h3>
        {/* SWIPER */}
        <div
          className={`wrapper-desk max-w-[100%] !px-0 sm:!px-4 md:!px-8 lg:!px-10 xl:!px-16`}
        >
          <Swiper
            autoplay
            slidesPerView={2}
            slidesPerGroup={1}
            loop
            freeMode={false}
            modules={[Pagination, Autoplay, FreeMode]}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 8,
                centeredSlides: true,
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 8,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 8,
                centeredSlides: true,
              },
              768: { slidesPerView: 2.5, spaceBetween: 8 },
              1024: { slidesPerView: 2.5, spaceBetween: 8 },
              1280: { slidesPerView: 3, spaceBetween: 8 },
              1440: { slidesPerView: 3.5, spaceBetween: 8 },
            }}
          >
            {dreamzDualNewCardData.map((item, index) => (
              <SwiperSlide key={index} className={`max-w-[100%]`}>
                <Link
                  href={item.route}
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
                      {/* <span className={`leading-[100%]`}>
                        {item.entryAmount}
                      </span> */}
                    </div>
                    {/* TIMER */}
                    <div className={`flex flex-col`}>
                      <p className={`text-[12px] text-right text-cool-90`}>
                        Next draw in
                      </p>
                      <div
                        className={`flex items-center justify-end text-[16px] gap-1`}
                      >
                        <div className={`flex items-center gap-[2px]`}>
                          <Timer
                            gameDate={
                              item.name === "mini"
                                ? dateMiniBlast
                                : item.name === "power"
                                ? datePowerBlast
                                : item.name === "super"
                                ? dateSuperBlast
                                : item.name === "mega"
                                ? dateMegaBlast
                                : item.name === "dreamz"
                                ? dateDreamzBlast
                                : dateMiniBlast
                            }
                            dataMinutes={true}
                            paddingTopBottom="0px"
                          />{" "}
                          <span className={`text-cool-90`}>min</span>
                        </div>
                        <div className={`flex items-center gap-[2px]`}>
                          <Timer
                            gameDate={
                              item.name === "mini"
                                ? dateMiniBlast
                                : item.name === "power"
                                ? datePowerBlast
                                : item.name === "super"
                                ? dateSuperBlast
                                : item.name === "mega"
                                ? dateMegaBlast
                                : item.name === "dreamz"
                                ? dateDreamzBlast
                                : dateMiniBlast
                            }
                            dataSeconds={true}
                            paddingTopBottom="0px"
                          />
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
                      Play Now
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
