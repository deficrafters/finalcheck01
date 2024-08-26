"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { content } from "../../utils/content.js";
import axios from "axios";

// import mg1 from "/analytics-icon-01.png"
// import mg2 from "/analytics-icon-02.png"
// import mg3 from "/analytics-icon-03.png"

const { analyticsData } = content;

export default function AnalyticsSection() {
  const [count, setCount] = useState(false);
  const [RegistredUsers, setRegistredUsers] = useState("-");
  const [contestEntries, setcontestEntries] = useState("-");
  const [gamingRewards, setgamingRewards] = useState("-");

  const [data, setdata] = useState([
    {
      title: "Registered Users",
      value: 0,
    },
    {
      title: "Contest Entries",
      value: 0,
    },
    {
      title: "Gaming Rewards",
      value: 0,
    },
  ]);

  useEffect(() => {
    try {
      axios
        .post("/api/getChallengeCardData", {})
        .then((acc) => {
          // console.log(acc.data)

          setdata([
            {
              title: "Registered Users",
              value: acc.data.RegisteredUsers,
            },
            {
              title: "Contest Entries",
              value: acc.data.CotestEntries,
            },
            {
              title: "Gaming Rewards",
              value: acc.data.Gamig_Rewards,
            },
          ]);
        })
        .catch((err) => {
          // console.log(err)
        });
    } catch (error) {
      // console.log(error)
    }
  }, []);

  return (
    <section id="stats" className={`pt-4`}>
      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
      >
        <div className={` py-1`}>
          {/* SWIPER */}
          <div className={`wrapper-desk !px-0 !md:px-0 lg:!px-10 xl:!px-16`}>
            <Swiper
              spaceBetween={0}
              slidesPerView={2}
              freeMode={false}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop
              centeredSlides
              initialSlide={2}
              modules={[FreeMode, Autoplay, Pagination, Navigation]}
              className={`mt-6`}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                  centeredSlides: false,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                  centeredSlides: false,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 12,
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 2,
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
                  spaceBetween: 0,
                  initialSlide: 0,
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
              {data.length > 0 &&
                data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className={`w-[%] h-[100px] flex items-center justify-center analytics`}
                    >
                      <img
                        src={
                          index == 0
                            ? "/analytics-exchange.png"
                            : index == 1
                            ? "/analytics-block.png"
                            : index == 2
                            ? "/analytics-bitcoin.png"
                            : ""
                        }
                        style={{ width: 50, height: 50, marginRight: "20px" }}
                        alt="Centered Image"
                      />

                      {/* <div
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundImage: `url(${index==0?"/analytics-exchange.png":index==1?"/analytics-block.png":index==2?"/analytics-bitcoin.png":""})`,
                        // backgroundPosition: "center",
                        // backgroundRepeat: "no-repeat",
                      }}
                    ></div> */}
                      <div>
                        <h4 className={`text-4xl font-bold`}>
                          {count && (
                            <CountUp
                              start={0}
                              end={item.value}
                              duration={2}
                              delay={0}
                            />
                          )}
                          +
                        </h4>
                        <p
                          className={`text-xl text-cool-90 font-normal uppercase`}
                        >
                          {/* {index==0&&"REGISTERED USERS"}
                       {index==1&&"REWARDS DISTRIBUTED"}
                       {index==2&&"Gaming Rewards"} */}

                          {item.title}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
}
