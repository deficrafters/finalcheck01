"use client";
import { useState, useContext } from "react";
import Link from "next/link";
import { content } from "../../utils/content.js";
import { usePathname, useRouter } from "next/navigation.js";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionIdentifier from "../common/SectionIdentifier.jsx";
import GlobalContexts from "@/components/context/global/GlobalContext";
import { setSpinnerPopup, setTicketPopup } from "@/store/slices/popupSlice";
import { useDispatch } from "react-redux";

const { promotionsCardData } = content;
const { title } = content.sectionData.promotions;

export default function PromotionSection() {

  const router = useRouter();
  const dispatch = useDispatch();

  const [cardData, setCardData] = useState(null);

  const {
    setLoginOpen,
  } = useContext(GlobalContexts);

  const handleOpenRegister = () => {

    router.push("?showRegister=true")

    setLoginOpen((prev) => !prev);

  };

  const handleClicked = () => {
    let getdats = localStorage.getItem("jwt");
    if (getdats) {
      dispatch(setSpinnerPopup(true));
    } else {
      dispatch(setSpinnerPopup(true));
    }
  };

  const handleGotToRefer = () =>{
    router.push("/Affiliate")
  }

  return (
    <section className={`relative py-8`}>
      <SectionIdentifier id="promotions" />
      <div className={``}>
        <h3
          className={`wrapper-desk text-[24px] font-semibold tracking-tight mb-2`}
        >
          {title}
        </h3>
        {/* SLIDER */}
        <div className={`wrapper-desk `}>
          <Swiper
            spaceBetween={0}
            slidesPerView={0}
            centeredSlides={false}
            freeMode={false}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            modules={[FreeMode, Autoplay, Pagination, Navigation]}
            className={`mt-6`}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 8,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
            }}
          >
            {promotionsCardData.map((item, index) => (

              <SwiperSlide key={index} className={`min-w-[250px] last:!mr-0`}>
                {
                  item.title == "Spin The Wheel" ?

                  <div style={{cursor:"pointer"}} onClick={typeof window !=="undefined" && window.localStorage.getItem("jwt") ? handleClicked:handleOpenRegister}>
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                    className={`relative max-w-[100%] h-[300px] bg-slate-400 rounded-lg bg-center bg-cover`}
                  >
                    <div
                      className={`absolute bottom-0 left-0 w-full flex flex-col items-center justify-center transition-all duration-150 mb-4`}
                    >
                      <div
                        className={`flex flex-col items-center justify-center`}
                      >
                        <h1
                          className={`text-center text-[16px] xl:text-[20px] font-medium tracking-tight leading-tight`}
                        >
                          {item.title}
                        </h1>
                        <h2 className={`text-center text-base font-light`}>
                          {item.caption}
                        </h2>
                      </div>
                      <div className={`mt-2`}>
                        <p
                          className={`bg-red-800 text-[14px] animate-pulse px-3 py-2 rounded-md`}
                        >
                          {item.btnText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                  :

                  item.title == "Refer A Friend & Earn USDT" ?

                  <div style={{cursor:"pointer"}} onClick={typeof window !=="undefined" && window.localStorage.getItem("jwt") ? handleGotToRefer:handleOpenRegister}>
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                    className={`relative max-w-[100%] h-[300px] bg-slate-400 rounded-lg bg-center bg-cover`}
                  >
                    <div
                      className={`absolute bottom-0 left-0 w-full flex flex-col items-center justify-center transition-all duration-150 mb-4`}
                    >
                      <div
                        className={`flex flex-col items-center justify-center`}
                      >
                        <h1
                          className={`text-center text-[16px] xl:text-[20px] font-medium tracking-tight leading-tight`}
                        >
                          {item.title}
                        </h1>
                        <h2 className={`text-center text-base font-light`}>
                          {item.caption}
                        </h2>
                      </div>
                      <div className={`mt-2`}>
                        <p
                          className={`bg-red-800 text-[14px] animate-pulse px-3 py-2 rounded-md`}
                        >
                          {item.btnText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                  :

                  <Link href={""}>
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                    className={`relative max-w-[100%] h-[300px] bg-slate-400 rounded-lg bg-center bg-cover`}
                  >
                    <div
                      className={`absolute bottom-0 left-0 w-full flex flex-col items-center justify-center transition-all duration-150 mb-4`}
                    >
                      <div
                        className={`flex flex-col items-center justify-center`}
                      >
                        <h1
                          className={`text-center text-[16px] xl:text-[20px] font-medium tracking-tight leading-tight`}
                        >
                          {item.title}
                        </h1>
                        <h2 className={`text-center text-base font-light`}>
                          {item.caption}
                        </h2>
                      </div>
                      <div className={`mt-2`}>
                        <p
                          className={`bg-red-800 text-[14px] animate-pulse px-3 py-2 rounded-md`}
                        >
                          {item.btnText}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>


                }
              
                {/* <Link
                  href={""}
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                  className={`bg-slate-400 max-w-[300px] h-[300px] rounded-lg relative bg-center bg-cover`}
                >
                  <div
                    className={`absolute bottom-0 left-0 w-full flex flex-col items-center justify-center transition-all duration-150 mb-4`}
                  >
                    <div
                      className={`flex flex-col items-center justify-center`}
                    >
                      <h1
                        className={`text-center text-[20px] font-medium tracking-tight leading-tight`}
                      >
                        {item.title}
                      </h1>
                      <h2 className={`text-center text-base font-light`}>
                        {item.caption}
                      </h2>
                    </div>
                    <div className={`mt-2`}>
                      <p
                        className={`bg-red-800 text-[14px] animate-pulse px-3 py-2 rounded-md`}
                      >
                        {item.btnText}
                      </p>
                    </div>
                  </div>
                </Link> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className={`wrapper-desk flex items-center justify-between gap-4`}>
          {promotionsCardData.map((item, index) => (
            <Link
              href={""}
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className={`w-full h-[300px] rounded-lg relative`}
            >
              <div
                className={`absolute bottom-0 left-0 w-full flex flex-col items-center justify-center transition-all duration-150 mb-4`}
              >
                <div className={`flex flex-col items-center justify-center`}>
                  <h1
                    className={`text-center text-[20px] font-medium tracking-tight leading-tight`}
                  >
                    {item.title}
                  </h1>
                  <h2 className={`text-center text-base font-light`}>
                    {item.caption}
                  </h2>
                </div>
                <div className={`mt-2`}>
                  <p
                    className={`bg-red-800 text-[14px] animate-pulse px-3 py-2 rounded-md`}
                  >
                    {item.btnText}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div> */}
      </div>
    </section>
  );
}
