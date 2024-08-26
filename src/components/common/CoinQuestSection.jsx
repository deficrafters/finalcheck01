"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { content } from "../../utils/content.js";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Timer from "./Timer.jsx";
import SectionIdentifier from "./SectionIdentifier.jsx";
import GlobalContext from "../context/global/GlobalContext.js";
import axios from "axios";
import io from "socket.io-client";
import { URL } from "@/helper/BASE_URL.js";

const { title, description } = content.sectionData.coinQuest;

const { coinQuestCardsData } = content;

export default function CoinQuestSection({
  sectionTitle,
  hasDescription,
  id,
  getAllData,
  HaveFreeGame,
  makeRefresh
}) {

  const { timeUsdt, timeEth, timeBnb, timeXrp } = useContext(GlobalContext);

  const [datas, setDatas] = useState("");

  useEffect(() => {
    const socket = io(URL);

    socket.on("data", (dataFromServer) => {
      setDatas(dataFromServer);
    });

    return () => {
      socket.disconnect();
    };
  }, []);


  return (
    <section className={`relative py-8`}>
      <SectionIdentifier />
      <div className={``}>
        <div
          className={`wrapper-desk flex flex-col items-start justify-center md:items-start gap-2`}
        >
          <h3 className={` w-full text-[24px] font-semibold tracking-tight`}>
            {sectionTitle} {HaveFreeGame?"- Free Games":""}
          </h3>

          {hasDescription && (
            <p
              className={`text-[14px] xs:text-[16px] text-cool-80 text-left md:text-left w-[100%] lg:w-[700px]`}
            >
              {description}
            </p>
          )}
        </div>

        <div className={`wrapper-desk !px-0 !md:px-0 lg:!px-10 xl:!px-16`}>
          <Swiper
            spaceBetween={0}
            slidesPerView={0}
            slidesPerGroup={1}
            freeMode={false}
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
                slidesPerView: 3.65,
                spaceBetween: 12,
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
                initialSlide: 2,
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
            {datas &&
              datas.dataFromMongoDB &&
              datas.dataFromMongoDB.length > 0 &&
              datas.dataFromMongoDB.map((item, index) => {
                if (1 == 1) {
                  // ! FROM HERE IT WILL START

                  const Expiry_Date_Time_In_GMT = item.timeline;
                  const Current_Date_Time_In_GMT = datas.currentGMTTime;

                  const expiryTime = new Date(Expiry_Date_Time_In_GMT);
                  let currentTime = new Date(Current_Date_Time_In_GMT);

                  const timeDifference = expiryTime - currentTime;

                  let daysLeft = Math.floor(
                    timeDifference / (1000 * 60 * 60 * 24)
                  );
                  let hoursLeft = Math.floor(
                    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                  );
                  let minutesLeft = Math.floor(
                    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
                  );
                  let secondsLeft = Math.floor(
                    (timeDifference % (1000 * 60)) / 1000
                  );

                  var result = "";

                  if (daysLeft > 0) {
                    result = `${daysLeft} Day${daysLeft > 1 ? "s" : ""} `;
                  } else if (hoursLeft > 0) {
                    result = `${hoursLeft} Hour${
                      hoursLeft > 1 ? "s" : ""
                    } `;
                  } else if (minutesLeft > 0) {
                    result = `${minutesLeft} Minute${
                      minutesLeft > 1 ? "s" : ""
                    } `;
                  } else if (secondsLeft > 0) {
                    result = `${secondsLeft} Second${
                      secondsLeft > 1 ? "s" : ""
                    } `;
                  } else {
                    result = "Date has already passed";
                  }

                  // Increment the current time by one second
                  currentTime = new Date(currentTime.getTime() + 1000);
                  // }, 1000);
                }


                if (!item.isFree && HaveFreeGame) return
                if (item.isFree && !HaveFreeGame) return



                return (
                  <SwiperSlide
                    key={index}
                    className={`last:!mr-0`}
                    style={{ marginLeft: "2px" }}
                  >
                    <Link
                    target={makeRefresh?"__blank":"_self"}
                      onClick={getAllData ? () => getAllData() : () => {}}
                      href={item.route + "?i=" + item._id}
                      className={`relative max-w-[100%] xl:w-[250px] 2xl:w-[100%] h-[270px] xs:h-[260px] sm:h-[250px] md:h-[220px] lg:h-[320px] flex-shrink-0 rounded-lg flex items-center justify-center overflow-hidden`}
                    >
                      <div className={`absolute -top-[16px] right-[4px] z-[1]`}>
                        <SoldOutBox soldOutTickets={item.soldOutTickets} />
                      </div>
                      <div className={`absolute top-0 left-0 w-full h-full`}>
                        <div
                          style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                          className={`w-[100%] h-[45%]`}
                        ></div>
                        <div
                          className={`bg-black w-full h-[20%] flex items-center justify-between px-4`}
                        >
                          <div
                            className={` flex flex-col items-start justify-center`}
                          >
                            <p
                              className={`text-[14px] lg:text-[16px] text-brandShade-60 uppercase leading-none italic`}
                            >
                              win
                            </p>
                            <h3 className="text-white uppercase leading-none italic text-[16px] md:text-[14px] lg:text-[18px] font-semibold">
                              {item.name}
                            </h3>
                          </div>
                          <div className={`flex flex-col items-end`}>
                            <p
                              className={`text-[10px] lg:text-[12px] text-slate-400 uppercase leading-none`}
                            >
                              Entry Price
                            </p>
                            <span
                              className={`text-[16px] md:text-[14px] lg:text-[16px] tracking-tight font-semibold uppercase`}
                            >
                              ${item.amount}
                            </span>
                          </div>
                        </div>
                        <div className={`h-[35%] bg-cool-10`}>
                          <div
                            className={`flex items-center justify-between h-[25%] text-[12px] lg:text-[14px] px-4`}
                          >
                            <p className={`text-cool-90`}>Prize Value</p>
                            <span className={`font-semibold`}>
                              ${item.prizeValue}
                            </span>
                          </div>
                          <div
                            className={`h-[45%] bg-cool-20 flex items-center justify-between px-4`}
                          >
                            <p
                              className={`text-[12px] lg:text-[14px] text-cool-90`}
                            >
                              Pool Ends In
                            </p>
                            <div
                              style={{
                                backgroundColor:item.soldOutTickets.sold == item.soldOutTickets.total?"red": "#FCE146",
                                color: item.soldOutTickets.sold == item.soldOutTickets.total?"white":"black",
                                padding: 0,
                                width: 90,
                                borderRadius: 10,
                                textAlign: "center",
                                fontSize: 13,
                              }}
                            >
                              {result == "Date has already passed"
                                ? "Pool Expired"
                                : item.soldOutTickets.sold == item.soldOutTickets.total ? "Pool Closed" :result}
                            </div>
                          </div>
                          <div
                            className={`bg-cool-50 h-[30%] text-[14px] lg:text-[16px] font-semibold flex items-center justify-center tracking-tight`}
                          >
                            {
                              item.isFree ?
                              "Claim Free Ticket"
                              :
                              "Enter Now"

                            }
                            
                          </div>
                        </div>
                      </div>
                    </Link>
                    
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function SoldOutBox({ soldOutTickets }) {
  const dashArray = 491;
  const percentage = soldOutTickets.sold / soldOutTickets.total;
  const dashOffset = dashArray - dashArray * percentage;

  return (
    <div className={`relative w-fit`}>
      <div
        className={`flexRowCentered w-[100%] gap-1 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
      >
        <div
          className={`flexColCentered !items-end gap-[1px] text-right uppercase`}
        >
          <p
            className={`text-[12px] !leading-none tracking-tighter font-semibold`}
          >
            {soldOutTickets.sold}
          </p>
          <p className={`text-[10px] !leading-none font-light text-cool-90`}>
            sold
          </p>
        </div>
        <div className={`w-[1px] h-[25px] bg-white`}></div>
        <div className={`flexColCentered !items-start gap-[1px] uppercase`}>
          <p className={`text-[10px] !leading-none font-light text-cool-90`}>
            out of
          </p>
          <p
            className={`text-[12px] !leading-none tracking-tighter font-semibold`}
          >
            {soldOutTickets.total}
          </p>
        </div>
      </div>
      <svg
        width="100"
        height="80"
        viewBox="-2 0 206 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="0.977844"
          width="200"
          height="80"
          rx="40"
          fill="rgba(0,0,0,0.5)"
          style={{
            stroke: "#f2c25a",
            strokeWidth: "3px",
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            strokeLinecap: "round",
          }}
        />
      </svg>
    </div>
  );
}
