import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { content } from "../../../utils/content.js";
import { FaStar } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import NumericDataCard from "./NumericDataCard";
import { useContext } from "react";
const { jackpotGameStats } = content;

import GlobalContext from "../../context/global/GlobalContext";

export default function HeroSection({ aboveBannerData }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const participants = Array.from(aboveBannerData.Participants.toString());
  const entries = Array.from(aboveBannerData.Entries.toString());
  const totalPool = Array.from(aboveBannerData.Total_Pool_So_Far.toString());

  const { setOpenSub } = useContext(GlobalContext);

  const {
    isLogin,
    setLoginOpen,
    setSubOpen,
    setProfileMenuOpen,
    hamOpen,
    setHamOpen,
    setSideNavActiveMenu,
    setSideNavSubMenu,
    setSideNavPrimaryMenu,
    loginOpen,
  } = useContext(GlobalContext);

  const router = useRouter();

  useEffect(() => {
    try {
      let localData = localStorage.getItem("jwt");

      if (localData) {
        setIsUserLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleClick = () => {
    router.push("?showRegister=true");

    setLoginOpen((prev) => !prev);
  };

  return (
    <section
      className={`jmHeroBG py-4  md:h-[390px] overflow-hidden`}
      id="hero"
    >
      <div
        className={`wrapper-desk h-full grid grid-cols-2  md:gap-y-0`}
      >
        <div
          className={`col-span-2 md:col-span-1 justify-self-center flex flex-col items-center`}
        >
          <h1
            className={`text-center text-[32px] md:text-[24px] lg:text-[28px] xl:text-[32px] leading-[120%] tracking-tight`}
          >
            <span
              className={`text-[26px] md:text-[20px] xl:text-[20px] text-slate-300`}
            >
              Ready for a life-changing win?
            </span>
            <span className={`block font-semibold capitalize mt-2 xl:mt-0 !md:text-[24px] !xl:text-[26px]`}>
              Hit the jackpot,&nbsp;
              <span className={`inline md:block xl:inline`}>every time!</span>
            </span>
          </h1>
          <Image
            src={"/Jackpot_Banner_Graphic.png"}
            alt=""
            width={1000}
            height={100}
            className=": w-[45%] h-auto mt-6"
          />
          <h3
            className={`text-center text-[16px] xl:text-[20px] leading-[170%] tracking-tight`}
          >
            <span className={`text-[20px] xl:text-[26px] font-semibold`}>
              Every draw is a guaranteed win!
            </span>
            <span className={`block text-slate-300`}>
              The bigger the pool,
              <span className={``}> the bigger the prize</span>
            </span>
          </h3>
        </div>
        <div
          className={`col-span-2 md:col-span-1 sm:justify-self-center flex flex-col items-center md:items-start gap-4`}
        >
          <div
            className={`flex flex-wrap flex-row md:flex-col items-center justify-center md:items-start gap-x-8 md:gap-x-0 gap-y-4`}
          >
            <div className="flex md:block w-full justify-between">
              <div className="text-[16px] text-hl-01 flex items-center justify-center md:justify-start gap-1">
                <FaStar className="inline scale-[70%] text-white" /> Pool So Far
              </div>
              <div className="flex gap-1 mt-1">
                {totalPool.map((item, index) => (
                  <div key={index} className={`numericDataCard`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex md:block gap-5 w-full justify-between">
              <div className="text-[16px] text-hl-01 flex items-center justify-center md:justify-start gap-1">
                <FaStar className="inline scale-[70%] text-white" /> Entries
              </div>
              <div className="flex gap-1 mt-1">
                {entries.map((item, index) => (
                  <div key={index} className={`numericDataCard`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex md:block gap-5 w-full justify-between">
              <div className="text-[16px] text-hl-01 flex items-center justify-center md:justify-start gap-1">
                <FaStar className="inline scale-[70%] text-white" />{" "}
                Participants
              </div>
              <div className="flex gap-1 mt-1">
                {participants.map((item, index) => (
                  <div key={index} className={`numericDataCard`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {isUserLoggedIn ? (
            <Link
              href={"#BuyTicket"}
              className={`btnRect !rounded-md !px-6 !py-4 !bg-hl-01-hover  !text-black`}
            >
              Buy Now
            </Link>
          ) : (
            <div
              style={{ cursor: "pointer" }}
              onClick={handleClick}
              className={`btnRect !rounded-md !px-6 !py-4 !bg-hl-01-hover !text-black`}
            >
              Buy Now
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
