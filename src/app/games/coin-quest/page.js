"use client";
import { content } from "@/utils/content";
import HeroSection from "@/components/games/coin-quest/landing/HeroSection";
import CoinQuestSection from "@/components/common/CoinQuestSection";
import HowToPlaySection from "@/components/common/HowToPlaySection";
import FAQSection from "@/components/common/FAQSection";
import WinnerSection from "@/components/common/WinnerSection";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "@/components/context/global/GlobalContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

const { frequentQuestionsData } = content;

const { header, rows } = content.table.winners.cqWinners;

export default function CoinQuest() {

  const { setSideNavActiveMenu, setSideNavPrimaryMenu } =
    useContext(GlobalContext);

  const [getDatas, setGetData] = useState([]);

  const pathname = usePathname();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
   

    try {
      axios
        .post("/api/getCoinQuestWinner")
        .then((acc) => {
          console.log(acc.data);
          setGetData(acc.data);
        })
        .catch((err) => {
          console.log(err);
          // setisLoading(false)
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (pathname.includes("coin-quest")) {
      let index = pathname.indexOf("coin-quest");
      let extractedSubstring = pathname.slice(
        index,
        index + "coin-quest".length
      );
      let transformStr = extractedSubstring.replace("-", " ");
      setSideNavActiveMenu(transformStr);
      setSideNavPrimaryMenu(transformStr);
    }
  }, [pathname, setSideNavActiveMenu, setSideNavPrimaryMenu]);

  
  return (
    <main>
      <Carousel showThumbs={false} showArrows={false}>
        <div>
          <HeroSection />
        </div>
        <div>
          <HeroSection />
        </div>
        <div>
          <HeroSection />
        </div>
      </Carousel>
      <CoinQuestSection
        id="games"
        sectionTitle="Coin Quest Games"
        hasDescription={false}
      />
      <HowToPlaySection
        sectionTitle="How To Play"
        description="It's easier than you think. Follow 3 simple easy steps."
      />
      <WinnerSection
        sectionTitle="Coin Quest Winners"
        header={header}
        rows={getDatas}
      />
      <FAQSection />
    </main>
  );
}
