"use client";
import { useContext } from "react";
import Image from "next/image";
import GlobalContext from "@/components/context/global/GlobalContext";
import Link from "next/link";

export default function HeroSection({
  game,
  winningAmount,
  joiningAmount,
  date,
}) {
  const {
    dreamzDualPopup,
    setDreamzDualPopup,
    enablePower,
    enableSuper,
    enableMega,
    enableDreamz,
    enableMini,
    timeMiniBlast,
    timePowerBlast,
    timeSuperBlast,
    timeMegaBlast,
    timeDreamzBlast,
  } = useContext(GlobalContext);

  const handleOpenPopup = () => {
    setDreamzDualPopup(true);
    // document.body.style.overflow = dreamzDualPopup ? "auto" : "hidden";
  };

  return (
    <section>
      <div
        className={`relative dreamDualGameHeroBG py-8 flex flex-col items-center justify-center overflow-hidden`}
      >
        <div
          className={`absolute -bottom-6 xs:-bottom-12 sm:-bottom-16 left-0 w-[100%] flex items-center justify-center gap-20 xs:gap-32 sm:gap-60 md:gap-72`}
        >
          <div
            style={{
              backgroundImage: `url(${"/dreamz-dual/character_left.png"})`,
            }}
            className={`min-w-[220px] xs:min-w-[300px] sm:min-w-[320px] max-w-[100%] h-[254.38px] xs:h-[346.88px] sm:h-[370px] bg-contain bg-center bg-no-repeat`}
          ></div>
          <div
            style={{
              backgroundImage: `url(${"/dreamz-dual/character_right.png"})`,
            }}
            className={`min-w-[220px] xs:min-w-[300px] sm:min-w-[320px] max-w-[100%] h-[254.38px] xs:h-[346.88px] sm:h-[370px] bg-contain bg-center bg-no-repeat`}
          ></div>
        </div>
        {/* STATUS */}
        <div
          className={`${
            game === "mini" && enableMini
              ? "bg-red-900  animate-pulse"
              : game === "power" && enablePower
              ? "bg-red-900  animate-pulse"
              : game === "super" && enableSuper
              ? "bg-red-900  animate-pulse"
              : game === "mega" && enableMega
              ? "bg-red-900  animate-pulse"
              : game === "dreamz" && enableDreamz
              ? "bg-red-900  animate-pulse"
              : "bg-slate-900 animate-none"
          } w-max text-white text-center px-3 py-1 uppercase text-[16px] font-medium rounded-md mb-2`}
        >
          {game === "mini" && enableMini
            ? "live"
            : game === "power" && enablePower
            ? "live"
            : game === "super" && enableSuper
            ? "live"
            : game === "mega" && enableMega
            ? "live"
            : game === "dreamz" && enableDreamz
            ? "live"
            : "closed"}
        </div>
        <div className={`bg-cool-10 w-max px-4 py-1`}>
          <h1
            className={`inline-block text-[16px] xs:text-[20px] xl:text-[24px] uppercase tracking-[8px] -mr-[8px]`}
          >
            {game}
          </h1>
        </div>
        <h1
          className={`text-[42px] xs:text-[48px] font-semibold leading-none tracking-tight`}
        >
          Blast
        </h1>
        <Image
          src={"/dreamz-dual/versus.png"}
          alt=""
          width={100}
          height={100}
          className={`w-[70px] xs:w-[100px] h-auto`}
        />
      </div>

      <div>
        <div
          className={`w-full text-[40px] text-center xl:text-[48px] font-bold bg-cool-20 uppercase tracking-tight`}
        >
          <h2>Win {winningAmount}</h2>
        </div>
        <div
          className={`wrapper-desk bg-cool-10 py-5 flex flex-wrap items-center justify-center gap-y-4 gap-x-10 xl:gap-x-16`}
        >
          <p className={`text-cool-80`}>
            Joining Amount -{" "}
            <span className={`text-white font-semibold`}>{joiningAmount}</span>
          </p>
          <div className={`flex items-center text-cool-80`}>
            Pool Ends In -&nbsp;
            <div
              className={`w-[106px] flex items-center gap-1 text-white font-semibold`}
            >
              <span className={`flex items-center gap-[3px]`}>
                <p>
                  {game === "mini"
                    ? timeMiniBlast.minutes
                    : game === "power"
                    ? timePowerBlast.minutes
                    : game === "super"
                    ? timeSuperBlast.minutes
                    : game === "mega"
                    ? timeMegaBlast.minutes
                    : game === "dreamz"
                    ? timeDreamzBlast.minutes
                    : null}
                </p>{" "}
                Min
              </span>
              <span className={`flex items-center gap-[3px]`}>
                <p>
                  {game === "mini"
                    ? timeMiniBlast.seconds
                    : game === "power"
                    ? timePowerBlast.seconds
                    : game === "super"
                    ? timeSuperBlast.seconds
                    : game === "mega"
                    ? timeMegaBlast.seconds
                    : game === "dreamz"
                    ? timeDreamzBlast.seconds
                    : null}
                </p>{" "}
                Secs
              </span>
            </div>
          </div>
          <div className={`flex items-center justify-end gap-2`}>
            <Link
              href={""}
              className={`btnRect !bg-cool-50 hover:!bg-cool-60 !rounded-lg`}
            >
              Details
            </Link>
            <button
              onClick={handleOpenPopup}
              // disabled={
              //   game === "mini" && !enableMini
              //     ? true
              //     : game === "power" && !enablePower
              //     ? true
              //     : game === "super" && !enableSuper
              //     ? true
              //     : game === "mega" && !enableMega
              //     ? true
              //     : game === "dreamz" && !enableDreamz
              //     ? true
              //     : false
              // }
              className={`btnRect !text-[14px] !bg-hl-02 hover:!bg-hl-02-hover !rounded-lg uppercase tracking-tight font-semibold !px-4`}
            >
              Join the bet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
