"use client";
import { content } from "@/utils/content";
import FAQSection from "@/components/common/FAQSection";
import HowToPlaySection from "@/components/common/HowToPlaySection";
import GameSection from "@/components/games/dreamz-dual/GameSection";
import HeroSection from "@/components/games/dreamz-dual/HeroSection";
import WinnerSection from "@/components/games/dreamz-dual/WinnersSection";
import DreamZDualSection from "@/components/games/dreamz-dual/DreamzDualSection";
import { useContext, useEffect } from "react";
import GlobalContext from "@/components/context/global/GlobalContext";
import { usePathname } from "next/navigation";

export default function DreamZDual() {
  const { setSideNavActiveMenu, setSideNavPrimaryMenu } =
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
      
      <HeroSection />
      <DreamZDualSection
        showDescription={false}
        description={""}
        title={"Live Games"}
        id="games"
      />
      <HowToPlaySection
        sectionTitle="How To Play"
        description="It's easier than you think. Follow 3 simple easy steps."
      />
      <WinnerSection />
      <FAQSection />
    </main>
  );
}
