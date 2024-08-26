"use client";
import React, { useState, useEffect } from "react";
import { content } from "@/utils/content";
import { useContext } from "react";
import Link from "next/link";
import Timer from "@/components/common/Timer";
import GlobalContext from "@/components/context/global/GlobalContext";
import SectionIdentifier from "@/components/common/SectionIdentifier";
import DisabledOverlay from "@/components/common/DisabledOverlay";
import NewGlobalContext from "../../context/global/GlobalContext";
import { useRouter } from "next/navigation";

const ticketsSold = 597;

const { jackpotMadness } = content.gameDates;

export default function PrizeSection({ aboveBannerData }) {
  const { enableJackpot, timeJackpot } = useContext(GlobalContext);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const { setOpenSub } = useContext(NewGlobalContext);

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
  } = useContext(NewGlobalContext);

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
    <section className={`relative py-8 mt-8  gradientBlackBlueBG`}>
      <SectionIdentifier id="prize" />
      <div
        className={`wrapper-desk flex flex-col md:flex-row items-center justify-center`}
      >
        <div className={`flex-1 grid grid-cols-4 gap-y-4 gap-x-4`}>
          <PrizeCard
            name={
            <span>
              1<sup>st</sup> Prize
            </span>
            }
            percent={`50%`}
            subText={false}
            moreValue={""}
          />
          <PrizeCard
            name={
            <span>
              2<sup>nd</sup> Prize
            </span>
            }
            percent={`10%`}
            subText={false}
            moreValue={""}
          />
          <PrizeCard
            name={
            <span>
              3<sup>rd</sup> Prize
            </span>
            }
            percent={`5%`}
            subText={false}
            moreValue={""}
          />
          <PrizeCard
            name={`5 Winners`}
            percent={`1%`}
            subText={true}
            moreValue={""}
          />
        </div>
        <div className={`flex-1 flex flex-col items-center justify-center`}>
          <span className={`text-center`}>Draw On</span>
          <span
            className={`text-[32px] font-medium text-center tracking-tight`}
          >
            {jackpotMadness.slice(0, -9)}
          </span>
          <Timer
            time={timeJackpot}
            dataCard={true}
            setTtimerData={{ Day: 10, Hour: 12, Minutes: 25, Second: 11 }}
          />
          <p className={`text-p text-center leading-[120%]`}>
            <span>Don&apos;t miss your chance!</span> <br />
            {ticketsSold} tickets have been sold today!
          </p>

          {isUserLoggedIn ? (
            <Link
              href={"#BuyTicket"}
              className={`btnRect  !rounded-lg !px-8 !py-4 mt-4 !bg-hl-01-hover !text-black`}
            >
              Buy Tickets
            </Link>
          ) : (
            <div
              style={{ cursor: "pointer" }}
              onClick={handleClick}
              className={`btnRect  !rounded-lg !px-8 !py-4 mt-4 !bg-hl-01-hover !text-black`}
            >
              Buy Tickets
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function PrizeCard({
  name = "Grand Prize",
  percent = "80",
  subText = true,
  moreValue = "",
}) {
  return (
    <div
      className={`col-span-2 flex flex-col items-center text-center justify-self-center`}
    >
      <div
        className={`bg-white text-black text-[14px] text-center flex flex-col items-center justify-center w-[110px] h-[110px] leading-none gap-1 rounded-full`}
      >
        <span className={`font-semibold text-[28px] tracking-tighter`}>
          {percent} <br />
        </span>
        <span className={`text-black`}>Of the pool</span>
      </div>
      <span
        className={`text-[22px] md:text-[20px] 2xl:text-[22px] font-medium mt-2 tracking-tight`}
      >
        {name}
      </span>
      {/* {subText && (
        <span className={`text-[16px] text-white leading-[120%]`}>
          Will be awarded to <span className={`text-white`}>XX</span> winners!
        </span>
      )} */}
    </div>
  );
}
