import Image from "next/image";
import { FaStar } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section
      className={`bg-[url("/dreamz-three/Dreamz-Three_Banner_BG.jpg")] bg-cover bg-center`}
    >
      <div className={`wrapper-desk grid grid-cols-1 md:grid-cols-2 py-8`}>
        {/* CONTENT */}
        <div className={`self-center flex flex-col items-center gap-5`}>
          <div>
            <h1 className={`text-center text-[18px] uppercase tracking-[6px]`}>
              Welcome to{" "}
              <span
                className={`block text-[48px] font-bold leading-none tracking-tight`}
              >
                Dream<span className={`text-brandShade-50`}>z</span> 3
              </span>
            </h1>
            <Image
              src={"/dreamz-three/Dreamz-Three_Banner_Side.png"}
              alt=""
              width={523}
              height={450}
              className={`block md:hidden scale-90 w-full h-auto`}
            />
            <div
              className={`flex flex-col items-center justify-center gap-3 mt-6`}
            >
              <div
                className={`text-[16px] text-center md:text-[14px] xl:text-[16px] flex flex-col xs:flex-row flex-shrink-0 items-center leading-none gap-2`}
              >
                <FaStar color="#f2c25a" /> Weekly draw with multiple winners
              </div>
              <div
                className={`text-[16px] text-center md:text-[14px] xl:text-[16px] flex flex-col xs:flex-row flex-shrink-0 items-center leading-none gap-2`}
              >
                <FaStar color="#f2c25a" /> Chance to win up to 100X of betting
                amount
              </div>
              <div
                className={`text-[16px] text-center md:text-[14px] xl:text-[16px] flex flex-col xs:flex-row flex-shrink-0 items-center leading-none gap-2`}
              >
                <FaStar color="#f2c25a" /> Win with any order
              </div>
            </div>
          </div>
          <h2 className={`text-[28px] tracking-tight`}>
            Pool starts from <span className={`font-semibold`}>5 USDT</span>
          </h2>
          <button
            className={`btnRect !bg-hl-02 !text-[20px] font-semibold !px-6 !py-4 !rounded-md tracking-tight`}
          >
            Enter The Pool
          </button>
        </div>

        {/* SIDE IMAGE */}
        <Image
          src={"/dreamz-three/Dreamz-Three_Banner_Side.png"}
          alt=""
          width={523}
          height={450}
          className={`hidden md:block scale-90`}
        />
      </div>
    </section>
  );
}
