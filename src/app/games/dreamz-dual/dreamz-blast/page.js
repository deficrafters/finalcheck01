"use client";
import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import GameSection from "@/components/games/dreamz-dual/GameSection";
import WinnerSection from "@/components/games/dreamz-dual/WinnersSection";
import GamePopup from "@/components/games/dreamz-dual/game/GamePopup";
import HeroSection from "@/components/games/dreamz-dual/game/HeroSection";
import GlobalContext from "@/components/context/global/GlobalContext";
import DreamZDualSection from "@/components/games/dreamz-dual/DreamzDualSection";

export default function DreamzBlastPage() {
  const { dateDreamzBlast, setSideNavActiveMenu, setSideNavPrimaryMenu } =
    useContext(GlobalContext);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("dreamz-dual")) {
      let index = pathname.indexOf("dreamz-dual");
      let extractedSubstring = pathname.slice(
        index,
        index + "dreamz-dual".length
      );
      let transformStr = extractedSubstring.replace("-", " ");
      setSideNavPrimaryMenu(transformStr);
      setSideNavActiveMenu(transformStr);
    }
  }, [pathname, setSideNavActiveMenu, setSideNavPrimaryMenu]);

  return (
    <main>
      <GamePopup />
      <HeroSection
        game="dreamz"
        winningAmount="8$"
        joiningAmount="5$"
        date={dateDreamzBlast}
      />
      <WinnerSection />
      <DreamZDualSection
        showDescription={false}
        description={""}
        title="Live Games"
        id="games"
      />
      {/* <GameSection /> */}
    </main>
  );
}
