import Image from "next/image";
import { FaStar } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className={`relative dreamDualHero_BG overflow-hidden`}>
      {/* <Image
        src={"/dreamz-dual/Techno-Face_Left.png"}
        alt=""
        width={600}
        height={755}
        className={`hidden md:block w-[400px] h-auto absolute top-0 left-0 -translate-x-[280px] lg:-translate-x-[250px] xl:-translate-x-40  blur-[1px] 2xl:blur-[0px] opacity-80`}
      /> */}
      {/* <Image
        src={"/dreamz-dual/Techno-Face_Right.png"}
        alt=""
        width={600}
        height={755}
        className={`hidden md:block w-[400px] h-auto absolute top-0 right-0 translate-x-[280px] lg:translate-x-[250px] xl:translate-x-40  blur-[1px] 2xl:blur-[0px] opacity-80`}
      /> */}
      <div
        className={`wrapper-desk py-8 overflow-hidden flex flex-col items-center`}
      >
        <Image
          src={"/Logo.png"}
          alt=""
          width={200}
          height={200}
          // className={`w-auto h-auto`}
        />
        <h1
          className={`text-[24px] text-center text-hl-01 font-semibold tracking-[12px] `}
        >
          DreamGameZ
        </h1>
        <h1
        style={{marginTop:20}}
          className={`text-[42px] text-center font-bold tracking-tight leading-[100%] z-[1]`}
        >
         Earn 0.5 USDT Instantly
        </h1>
        <h4
          className={`text-[36px] text-center font-medium tracking-tight mt-6 z-[1]`}
        >
          Why Wait, Refer{" "}
          <span className={`block sm:inline`}>& Earn Instantly</span>
        </h4>
        <div
          className={`flex flex-wrap items-center justify-center gap-y-2 gap-x-8 xl:gap-x-12 z-[1] mt-4 xl:mt-0`}
        >
          <div
            className={`flex items-center gap-2 text-cool-90 text-[18px] flex-shrink-0`}
          >
            <FaStar color="#fafe0b" className={`animate-spin`} /> Unlimited
          </div>
          <div
            className={`flex items-center gap-2 text-cool-90 text-[18px] flex-shrink-0`}
          >
            <FaStar color="#fafe0b" className={`animate-spin`} /> Unlimited Contest Entry
          </div>
          <div
            className={`flex items-center gap-2 text-cool-90 text-[18px] flex-shrink-0`}
          >
            <FaStar color="#fafe0b" className={`animate-spin`} /> More Exiting Bonus
          </div>
        </div>
        {/* <p className={`text-cool-80 text-center mt-8 z-[1]`}>
          Also get tokens free in the beginning when you play so you don’t loose
          in any game
        </p> */}
      </div>
    </section>
  );
}
