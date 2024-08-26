"use client";
import { content } from "@/utils/content";
import { useContext } from "react";
import GlobalContext from "@/components/context/global/GlobalContext";
import Timer from "@/components/common/Timer";
import { FaStar } from "react-icons/fa6";
import SectionIdentifier from "@/components/common/SectionIdentifier";

const { winnersSoFar } = content;
const { dreamzThree } = content.gameDates;

export default function PrizeSection() {
  const { dateDreamzThree, enableDreamzThree, timeDreamzThree } =
    useContext(GlobalContext);
  return (
    <section
      className={`relative bg-[url("/dreamz-three/Draw-Date_BG.jpg")] bg-cover bg-center`}
    >
      <SectionIdentifier id="prize" />
      <div
        className={`wrapper-desk flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-24 py-8`}
      >
        <div className={`flex flex-col items-center gap-2`}>
          <span>
            Draw Date: <span>{dreamzThree.slice(0, -9)}</span>
          </span>
          <Timer
            time={timeDreamzThree}
            dataCard={true}
            paddingTopBottom="0px"
          />
        </div>
        <div
          className={`flex flex-col sm:flex-row justify-end gap-12 sm:gap-16`}
        >
          <div className={`flex flex-col items-center justify-center gap-2`}>
            <div className={`flex items-center gap-2`}>
              <FaStar />
              <span className={`text-[18px] uppercase`}>Top Prize</span>
            </div>
            <h3
              className={`font-semibold text-[32px] text-hl-bright leading-none tracking-tight`}
            >
              20 Million USD
            </h3>
          </div>
          <div className={`flex flex-col items-center justify-center gap-2`}>
            <div className={`flex items-center gap-2`}>
              <FaStar />
              <span className={`text-[18px] uppercase`}>Winners so far</span>
            </div>
            <h3
              className={`font-semibold text-[32px] text-hl-bright leading-none tracking-tight`}
            >
              {winnersSoFar}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
