"use client";
import { useContext, useEffect, useState } from "react";
import { content } from "@/utils/content";
import HowToPlaySection from "@/components/common/HowToPlaySection";
import GamePopup from "@/components/games/jackpot-madness/GamePopup";
import GameSection from "@/components/games/jackpot-madness/GameSection";
import HeroSection from "@/components/games/jackpot-madness/HeroSection";
import PopularEntries from "@/components/games/jackpot-madness/PopularEntries";
import PrizeSection from "@/components/games/jackpot-madness/PrizeSection";
import GlobalContext from "@/components/context/global/GlobalContext";
import WinnerSection from "@/components/common/WinnerSection";
import { usePathname } from "next/navigation";
import axios from "axios"
import { Tab, Tabs } from "@/components/common/Tabs";
import FAQAccordian from "@/components/FAQ/FAQAccordian";
import SectionIdentifier from "@/components/common/SectionIdentifier";
import CoinQuestSection from "@/components/common/CoinQuestSection";
import ActivitySection from "@/components/common/ActivitySection";

const { title, header, rows } = content.table.winners.jackpotWinners;

const { jackpotfrequentQuestionsData } = content;

const { activityTable } = content.table;

export default function JackpotMadness() {

  const { jackpotPopup, setSideNavPrimaryMenu } = useContext(GlobalContext);
  const [getDatsss, setGetDatsss] = useState([])
  const [tabName, setTabName] = useState(1)
  const [loggedIn, setLoggedIn] = useState(null)
  const [aboveBannerData, setAboveBannerData] = useState({
    Total_Pool_So_Far: 0,
    Entries: 0,
    Participants: 0
  })

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("jackpot-madness")) {
      let index = pathname.indexOf("jackpot-madness");
      let extractedSubstring = pathname.slice(
        index,
        index + "jackpot-madness".length
      );
      let transformStr = extractedSubstring.replace("-", " ");
      setSideNavPrimaryMenu(transformStr);
    }
  }, [pathname, setSideNavPrimaryMenu]);

  const Get_Your_Tickets = (fromTab, index) => {

    let getDtaa = localStorage.getItem("jwt")
    let parseIT = JSON.parse(getDtaa)

    if (getDtaa) {
      setLoggedIn(true)
    }

    console.log({ id: fromTab && index == 1 ? parseIT.data._id : null })

    try {

      axios.post("/api/getJackPotWinnersList", {
        id: getDtaa ? null : fromTab && index == 1 ? parseIT.data._id : null
      })
        .then((acc) => {
          console.log(acc.data)
          setGetDatsss(acc.data)
        })
        .catch((err) => {
          console.log(err)
        })

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {

    Get_Your_Tickets()
    Get_Above_Data()

  }, [])

  const Get_Above_Data = () => {

    try {

      axios.get("/api/JackpotMadness/AboveCard")
        .then((acc) => {
          console.log(acc.data)

          setAboveBannerData(acc.data)
          
        })
        .catch((err) => {
          console.log(err)
        })


    } catch (error) {
      console.log(error)
    }

  }

  const handleTab = (index) => {


    if (!loggedIn) return

    setGetDatsss([])


    Get_Your_Tickets(true, index)


  };

  
  return (

    <main>

      {jackpotPopup && <GamePopup />}

      <HeroSection aboveBannerData={aboveBannerData} />

      <PrizeSection aboveBannerData={aboveBannerData} />

      <GameSection Get_Your_Tickets={Get_Your_Tickets} />

      <PopularEntries Get_Your_Tickets={Get_Your_Tickets}/>

      <ActivitySection
        sectionTitle="Jackpot Activity"
        header={activityTable.header}
        rows={activityTable.rows}
        fromJackPotPage={true}
        
      />

      <HowToPlaySection
        sectionTitle="How To Play"
        description="It's easier than you think. Follow 3 simple easy steps."
      />


      <ActivitySection
        sectionTitle="Jackpot Winners"
        header={activityTable.header}
        rows={activityTable.rows}
        GameData="Winner"
        fromJackPotPage={true}
      />








      <section className={`relative`}>
        <SectionIdentifier id="faq" />
        <div className={`wrapper-desk my-8 text-center sm:text-left`}>
          <h3
            className={`text-[20px] xs:text-[24px] font-semibold tracking-tight text-center lg:text-left mb-4`}
          >
            Frequently Asked Questions
          </h3>
          <FAQAccordian data={jackpotfrequentQuestionsData} />
        </div>
      </section>


    </main>
  );
}
