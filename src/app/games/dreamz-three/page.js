"use client";
import { content } from "@/utils/content";
import HowToPlaySection from "@/components/common/HowToPlaySection";
import WinnerSection from "@/components/common/WinnerSection";
import HeroSection from "@/components/games/dreamz-three/HeroSection";
import ActivitySection from "@/components/common/ActivitySection";
import PrizeSection from "@/components/games/dreamz-three/PrizeSection";
import DrawTableSection from "@/components/games/dreamz-three/DrawTableSection";
import GameSection from "@/components/games/dreamz-three/GameSection";
import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import GlobalContext from "@/components/context/global/GlobalContext";

const { dDualWinners } = content.table.winners;
const { activityTable, drawTable } = content.table;

export default function DreamZThree() {
  const { setSideNavPrimaryMenu } = useContext(GlobalContext);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("dreamz-three")) {
      let index = pathname.indexOf("dreamz-three");
      let extractedSubstring = pathname.slice(
        index,
        index + "dreamz-three".length
      );
      let transformStr = extractedSubstring.replace("-", " ");
      setSideNavPrimaryMenu(transformStr);
    }
  }, [pathname, setSideNavPrimaryMenu]);

  return (
    <main>
      <HeroSection />
      <PrizeSection />
      <GameSection />
      <ActivitySection
        sectionTitle={activityTable.title}
        header={activityTable.header}
        rows={activityTable.rows}
      />
      <HowToPlaySection
        sectionTitle="How To Play"
        description="It's easier than you think. Follow 3 simple easy steps."
      />
      <DrawTableSection
        drawDate={drawTable.drawDate}
        header={drawTable.header}
        rows={drawTable.rows}
      />
      <WinnerSection
        sectionTitle={dDualWinners.title}
        header={dDualWinners.header}
        rows={dDualWinners.rows}
      />
    </main>
  );
}
