import Image from "next/image";
import Link from "next/link";

import { content } from "../../../../utils/content";
import { FaStar } from "react-icons/fa6";
const { coinQuestGameHighlights } = content;

export default function HeroSection() {
  return (
    <section className={`relative  bg-cool-10 w-full `}>
    <div className={`wrapper-desk grid grid-cols-2 h-[240px] md:h-[390px] py-2`}>
    <div className={`col-span-1 md:col-span-1 flex items-center justify-center md:w-[50%] w-[80%] md:mb-[20px]`}>
          <Image
            src={"/Coin-Quest-Hero Image.png"}
            alt=""
            width={600}
            height={400}
            layout="responsive"
          />
        </div>
  
      <div
        className={`top-0 left-0 w-full h-full  md:static col-span-1 md:col-span-1 ml-0 md:ml-12 flex flex-col  md:items-start justify-center  gap-6`}
      >
        <div className={`flex flex-col items-center md:items-start gap-4 md:gap-2`}>
          <h1
            className={`text-center md:text-left text-[14px] xs:text-[40px] md:text-[32px] xl:text-[40px] text-hl-01 capitalize font-semibold tracking-tight leading-none`}
          >
            What you <br className={`block lg:hidden`} />
            can do
            <br className={`hidden lg:block`} /> with
            <span className={`text-white font-semibold`}> 1 USD ?</span>
          </h1>
          <h4
            className={`w-[75%] md:w-auto text-left text-[8px] xl:text-[18px] text-slate-300 leading-snug italic`}
          >
            “ Earn 1000 USDT&nbsp;
            <span className={`font-normal`}>
              with our high winning <br className={`hidden xl:block`} />
              probability coin quest games ”
            </span>
          </h4>
          <Link
            href={"#gameSection"}
            className={`text-[12px] xl:text-[20px] font-semibold bg-hl-02 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-hl-02-hover transition-colors 0.06s md:mt-3`}
          >
            Play Now
          </Link>
        </div>
        <div
          className={`max-w-[561px] flex flex-col xs:flex-row flex-wrap justify-center md:justify-start gap-x-2 gap-y-1 md:gap-x-4 md:gap-y-2`}
        >
          {coinQuestGameHighlights.map((item, index) => (
            <div
              key={index}
              className={`justify-self-start flex items-center justify-center gap-1 md:gap-2`}
            >
              <FaStar className={`text-hl-01 size-2 md:size-3`} />
              <p
                className={`text-[10px] xs:text-[20px] md:text-[16px] xl:text-[20px] font-normal normal-case`}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  
  );
}