"use client";
import { content } from "@/utils/content";
import { useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { add } from "@/store/slices/cartSlice";
import GameSection from "@/components/games/coin-quest/game/GameSection";
import HeroSection from "@/components/games/coin-quest/game/HeroSection";
import CoinQuestSection from "@/components/common/CoinQuestSection";
import HowToPlaySection from "@/components/common/HowToPlaySection";
import GlobalContext from "@/components/context/global/GlobalContext";
import DisabledOverlay from "@/components/common/DisabledOverlay";
import WinnerSection from "@/components/common/WinnerSection";
import ActivitySection from "@/components/common/ActivitySection";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

const { header, rows } = content.table.winners.cqWinners;
const { activityTable } = content.table;

export default function CointQuestGame() {
  const [counter, setCounter] = useState(1);
  const [datasss, setDatasss] = useState({})
  const { disabledUSDT, setSideNavActiveMenu, setSideNavPrimaryMenu } =
    useContext(GlobalContext);
  const dispatch = useDispatch();
  const unique_id = uuid();
  const route = useSearchParams()
  const pathname = usePathname();

  useEffect(() => {

    const item = route.get('i')

    // console.log(item)

    if (item) {

      try {

        axios.post("/api/CoinQuest/Pools/GetSinglePoolGames", {
          identifier: item
        })
          .then((acc) => {
            // console.log(acc.data)
            setDatasss(acc.data)
          })
          .catch((err) => {
            // console.log(err)
          })

      } catch (error) {
        // console.log(error)
      }
    }

  }, [])

  useEffect(() => {
    if (pathname.includes("coin-quest")) {
      let index = pathname.indexOf("coin-quest");
      let extractedSubstring = pathname.slice(
        index,
        index + "coin-quest".length
      );
      let transformStr = extractedSubstring.replace("-", " ");
      setSideNavPrimaryMenu(transformStr);
      setSideNavActiveMenu(transformStr);
    }
  }, [pathname, setSideNavActiveMenu, setSideNavPrimaryMenu]);

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };
  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  function handleSelectedEntries() {
    dispatch(
      add({
        id: unique_id,
        game: "coint quest",
        gameTitle: `win by ${counter}x`,
        tickets: [],
        entries: counter,
        price: counter * 10,
      })
    );
    toast.success("Successfully toasted!");
  }

  const handleCard = (item) => {
    dispatch(add(item));
    toast.success("Successfully toasted!");
  };

  return (
    <main>
      <section className={`cqGameHeroBG py-8 relative`}>
        {disabledUSDT === true && <DisabledOverlay />}
        <HeroSection datasss={datasss} currency="usdt" />
       
        <GameSection
          game="usdt"
          counter={counter}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          onSelectedEntries={handleSelectedEntries}
          onCard={handleCard}
        />
      </section>
      <ActivitySection
        sectionTitle={activityTable.title}
        header={activityTable.header}
        rows={activityTable.rows}
      />
      <CoinQuestSection
        sectionTitle="Coin Quest"
        hasDescription={false}
        id="games"
      />
      <HowToPlaySection
        sectionTitle="How To Play"
        description="It's easier than you think. Follow 3 simple easy steps."
      />
      <WinnerSection
        sectionTitle="Coin Quest Winners"
        header={header}
        rows={rows}
      />
    </main>
  );
}
