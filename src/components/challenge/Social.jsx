"use client";

import React, { useState } from "react";
import { useContext } from "react";
import { usePathname, useRouter } from "next/navigation.js";
import Link from "next/link";
import { content } from "@/utils/content.js";

import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionIdentifier from "../common/SectionIdentifier.jsx";
import GlobalContext from "../context/global/GlobalContext.js";
import Image from "next/image.js";
import { useDispatch } from "react-redux";
import {
  setSocialPopup,
  setSelectedSocial,
} from "@/store/slices/popupSlice.js";
import toast from "react-hot-toast";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const { socialData } = content;

export default function Social({
  title,
  description,
  showDescription,
  id,
  setSetselectedSocial,
  allSocialDatas,
  GetDatas,
}) {
  const [selectedSocial, setselectedSocial] = useState("");
  const [selectedSocialLink, setselectedSocialLink] = useState("");

  const {
    isLogin,
    loginOpen,
    setLoginOpen,
    setSubOpen,
    setProfileMenuOpen,
    hamOpen,
    setHamOpen,
    setSideNavActiveMenu,
    setSideNavSubMenu,
    setSideNavPrimaryMenu,
  } = useContext(GlobalContext);

  const dispatch = useDispatch();

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

  const onCardClick = (social) => {
    toast.success(social);
    setselectedSocial(social);

    var linsk = "";

    switch (social) {
      case "Twitter":
        linsk = "https://x.com/dreamgamezcoin";
        break;

      case "Instagram":
        linsk = "https://www.instagram.com/dreamgamezcoin";
        break;
      case "Telegram":
        linsk = "https://www.telegram.org/dreamgamezcoin";
        break;
      case "Discord":
        linsk = "https://www.discord.com/dreamgamezcoin";
        break;

      default:
        break;
    }

    setselectedSocialLink(linsk);

    dispatch(setSelectedSocial(social));
    dispatch(setSocialPopup(true));

    // alert("done")
  };

  const router = useRouter();

  const handleSayForLogin = () => {
    router.push("/challenge?showRegister=true");

    setLoginOpen((prev) => !prev);
    document.body.style.overflow = loginOpen ? "auto" : "hidden";
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

        {typeof window !== "undefined" && window.localStorage.getItem("jwt") ? (
          <div
            className={`wrapper-desk max-w-[100%] !px-0 sm:!px-4 md:!px-8 lg:!px-10 xl:!px-16 mt-4`}
          >
            <Swiper
              autoplay={false}
              slidesPerView={2}
              slidesPerGroup={1}
              freeMode={false}
              modules={[Pagination, Autoplay, FreeMode]}

              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 8,
                },
                480: {
                  slidesPerView: 2,
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
              {allSocialDatas &&
                allSocialDatas.length > 0 &&
                socialData.map((item, index) => {
                  let avalib = allSocialDatas.find(
                    (e) => e.socialPlatform === item.title
                  );

                  if (!avalib) return;

                  return (
                    <div
                      key={index}
                      className={`wrapper-desk max-w-[100%] !px-0 sm:!px-4 md:!px-8 lg:!px-10 xl:!px-16 mt-4`}
                    >
                      <Swiper
                        autoplay={false}
                        slidesPerView={2}
                        slidesPerGroup={2}
                        freeMode={false}
                        modules={[Pagination, Autoplay, FreeMode]}

                        breakpoints={{
                          0: {
                            slidesPerView: 2,
                            spaceBetween: 8,
                          },
                          480: {
                            slidesPerView: 2,
                            spaceBetween: 8,
                          },
                          640: {
                            slidesPerView: 2,
                            spaceBetween: 8,
                          },
                          768: { slidesPerView: 4, spaceBetween: 16 },
                          1024: { slidesPerView: 4, spaceBetween: 16 },
                          1280: { slidesPerView: 4, spaceBetween: 16 },
                          1440: { slidesPerView: 4, spaceBetween: 16 },
                        }}

                      >
                        <SwiperSlide key={index} className={`max-w-[100%]`}>

                      
                          
                          <div
                            
                            style={{ 
                              cursor: "pointer",
                              
                             }}

                            onClick={

                              !avalib.isClaimed

                                ? typeof window !== "undefined" &&

                                  window.localStorage.getItem("jwt")
                                  ? () => [
                                      onCardClick(item.title),
                                      setSetselectedSocial(item.title),
                                    ]
                                  : () => toast.error("Please Login First")
                                : () =>
                                    toast.success("You Already Claimed This.")
                            }
                            className={`relative max-w-[100%] xl:w-[250px] 2xl:w-[100%] h-[270px] xs:h-[260px] sm:h-[250px] md:h-[220px] lg:h-[320px] flex-shrink-0  flex items-center justify-center rounded-lg overflow-hidden ml-2`}
                          >
                            <div
                            
                            
                              className={`absolute bottom-0 left-0 w-full h-full`}
                            >
                              <div
                                className={`w-full h-[30%] overflow-hidden `}
                              >
                                <div
                                  className={`absolute inset-0 flex items-center justify-center `}
                                  style={{ zIndex: "1", bottom: "170px" }}
                                >
                                  <img
                                    src={`/footer-social-icons${item.image}`}
                                    className=" z-10"
                                    width="80"
                                    height="80"
                                  />
                                </div>
                              </div>
                              <div
                                className={`w-full h-[50%]  bg-blue-950 rounded-lg`}
                                style={{ zIndex: "1" }}
                              >
                                <h3
                                  className={`w-[100%] h-[50%] text-white  text-center uppercase leading-none italic text-[16px] lg:text-[20px] font-medium flex items-center justify-center px-4`}
                                >
                                  {item.title}
                                </h3>
                                <div
                                  style={{
                                    borderTop: "1px solid #fff ",
                                    marginLeft: 20,
                                    marginRight: 20,
                                  }}
                                ></div>
                                <div
                                  className={`bg-blue-950 h-[30%] flex items-center justify-center`}
                                >
                                  <p
                                    className={`text-[12px] xs:text-[14px] text-center capitalize`}
                                  >
                                    Get One Entry for Free
                                  </p>
                                </div>
                                <p
                                  className={`bg-cool-30 font-semibold h-[20%] text-[14px] text-center flex items-center justify-center uppercase rounded-b-lg`}
                                >
                                  {!avalib.isClaimed ? "+1 Entry" : "Claimed"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  );
                })}
            </Swiper>
          </div>
        ) : (
          <div
            className={`wrapper-desk max-w-[100%] !px-0 sm:!px-4 md:!px-8 lg:!px-10 xl:!px-16 mt-4`}
          >
            <Swiper
              autoplay={false}
              slidesPerView={2}
              slidesPerGroup={2}
              freeMode={false}
              modules={[Pagination, Autoplay, FreeMode]}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 8,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 8,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 8,
                },
                768: { slidesPerView: 4, spaceBetween: 16 },
                1024: { slidesPerView: 4, spaceBetween: 16 },
                1280: { slidesPerView: 4, spaceBetween: 16 },
                1440: { slidesPerView: 4, spaceBetween: 16 },
              }}
            >
              {socialData.map((item, index) => {
                return (
                  <SwiperSlide key={index} className={`max-w-[100%]`}>
                    <div
                      onClick={handleSayForLogin}
                      className={`relative max-w-[100%] xl:w-[250px] 2xl:w-[100%] h-[270px] xs:h-[260px] sm:h-[250px] md:h-[220px] lg:h-[320px] flex-shrink-0  flex items-center justify-center rounded-lg overflow-hidden ml-2`}
                    >
                      <div className={`absolute bottom-0 left-0 w-full h-full`}>
                        <div className={`w-full h-[30%] overflow-hidden `}>
                          <div
                            className={`absolute inset-0 flex items-center justify-center `}
                            style={{ zIndex: "1", bottom: "170px" }}
                          >
                            <img
                              src={`/footer-social-icons${item.image}`}
                              className=" z-10"
                              width="80"
                              height="80"
                            />
                          </div>
                        </div>
                        <div
                          className={`w-full h-[50%]  bg-blue-950 rounded-lg`}
                          style={{ zIndex: "1" }}
                        >
                          <h3
                            className={`w-[100%] h-[50%] text-white  text-center uppercase leading-none italic text-[16px] lg:text-[20px] font-medium flex items-center justify-center px-4`}
                          >
                            {item.title}
                          </h3>
                          <div
                            style={{
                              borderTop: "1px solid #fff ",
                              marginLeft: 20,
                              marginRight: 20,
                            }}
                          ></div>
                          <div
                            className={`bg-blue-950 h-[30%] flex items-center justify-center`}
                          >
                            <p
                              className={`text-[12px] xs:text-[14px] text-center capitalize`}
                            >
                              Get One Entry for Free
                            </p>
                          </div>
                          <p
                            className={`bg-cool-30 font-semibold h-[20%] text-[14px] text-center flex items-center justify-center uppercase rounded-b-lg`}
                          >
                            {1 == 1 ? "+1 Entry" : "Claimed"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
}
