"use client";
import Link from "next/link";
import { useState, useContext } from "react";
import { content } from "../../../utils/content.js";
import { FaRegCircleDot, FaStar } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi";

import { FreeMode, Pagination, Autoplay, Navigation, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/grid';
import "swiper/css/navigation";
import "swiper/css/pagination";
import GlobalContext from "@/components/context/global/GlobalContext.js";
import SectionIdentifier from "@/components/common/SectionIdentifier.jsx";
import DisabledOverlay from "@/components/common/DisabledOverlay.jsx";
import MethodConfirmationModal from "@/components/challenge/MethodConfirmationModalJackPotMadness";

const { jackpot } = content.popularEntries;

export default function PopularEntries({ Get_Your_Tickets }) {

  const {
    jackpotPopup,
    setJackpotPopup,
    setJackpotCardData,
    autoPlayOptions,
    setAutoPlayOptions,
    enableJackpot,
  } = useContext(GlobalContext);

  const handleClick = (item) => {
    setJackpotPopup(true);
    setAutoPlayOptions(false);
    setJackpotCardData(item);
    document.body.style.overflow = jackpotPopup ? "auto" : "hidden";
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  
  return (
    <section className={`relative popularEntries_JM py-1 !pb-2`}>

      <SectionIdentifier id="popular-entries" />
      
      <div className={`px-4`}>
        <h3
          className={`block text-[24px] text-center sm:text-left font-semibold tracking-tight mt-6 mb-2`}
        >
          Most Popular Entries

        </h3>
        {/* SLIDER */}

        <div className="">
          <div className={`popularGridContainer flex-1 grid grid-cols-2 sm:grid-cols-6 gap-1 md:gap-[3px]`}>
                        {jackpot.map((item, index) => (
                
                  <div
                  key={index}
                    onClick={() => handleClick(item)}
                    className={`flex-1 max-h-[238px] col-span-1 rounded-lg  overflow-hidden`}
                    // style={{marginTop: "20px", marginRight:"5px",  marginLeft:"5px", maxWidth:"180px"}}
                  >
                    <div
                      className={`bg-cool-05 w-[100%] h-[80%] flex flex-col items-center justify-center px-5 py-3 xs:py-6`}
                    >
                      <div className={`flex items-center justify-center gap-3`}>
                        <FaStar className={`text-hl-01 animate-spin`} />
                        <FaStar className={`text-hl-01 animate-spin`} />
                        <p className={`text-[28px] xs:text-[32px] sm:text-[28px] md:text-[32px] font-semibold`}>
                          {item.entries}
                        </p>
                        <FaStar className="text-hl-01 animate-spin" />
                        <FaStar className="text-hl-01 animate-spin" />
                      </div>
                      <p className="text-h5 text-cool-90 capitalize">entries</p>
                      <div
                        className={`flex flex-col items-center justify-center gap-1 mt-3`}
                      >
                        <p className="text-[14px] xxs:text-[16px] text-cool-70 font-normal uppercase italic leading-[100%]">
                          entry price
                        </p>
                        <p
                          className={`text-[20px] md:text-[26px] uppercase tracking-tighter font-semibold leading-[100%]`}
                        >
                          {item.price} USDT
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-[100%] cursor-pointer flex items-center justify-center gap-2 bg-hl-01 text-brandShade-20 py-2 font-bold uppercase tracking-tighter mb-2`}
                    >
                      <HiShoppingCart /> Buy Now
                    </div>
                  </div>
              ))}
            <div className="swiper-custom-pagination !mt-10"></div>
          </div>
        </div>
      </div>


    </section>
  );
}
