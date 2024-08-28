"use client";

import { content } from "@/utils/content";
import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import { countdownTimer } from "@/utils/functions";

const { coinQuest, jackpotMadness, dreamzDual, dreamzThree } =
  content.gameDates;

export default function GlobalContextProvider({ children }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [hamOpen, setHamOpen] = useState(false);
  const [sideNavSubMenu, setSideNavSubMenu] = useState(null);
  const [sideNavPrimaryMenu, setSideNavPrimaryMenu] = useState(null);
  const [sideNavActiveMenu, setSideNavActiveMenu] = useState(null);
  const [jackpotPopup, setJackpotPopup] = useState(false);
  const [numberCardPopup, setNumberCardPopup] = useState(false);
  const [dreamzDualPopup, setDreamzDualPopup] = useState(false);
  const [jackpotCardData, setJackpotCardData] = useState({});
  const [autoPlayOptions, setAutoPlayOptions] = useState({
    delay: 2500,
    disableOnInteraction: false,
  });

  // --------------------------------------------------------
  // USE THESE STATES BELOW TO ACTIVATE OR DEACTIVATE THE GAMES OR ANY
  // BUTTON FUNCTIONALITY IN GAMES. THESE STATES ARE CONNECTED TO TIMERS
  // AND WILL RESPOND ACCORDINGLY
  const [enableUsdt, setEnableUsdt] = useState(false);
  const [enableEth, setEnableEth] = useState(false);
  const [enableBnb, setEnableBnb] = useState(false);
  const [enableXrp, setEnableXrp] = useState(false);
  const [enableJackpot, setEnableJackpot] = useState(false);
  const [enableMini, setEnableMini] = useState(false);
  const [enablePower, setEnablePower] = useState(false);
  const [enableSuper, setEnableSuper] = useState(false);
  const [enableMega, setEnableMega] = useState(false);
  const [enableDreamz, setEnableDreamz] = useState(false);
  const [enableDreamzThree, setEnableDreamzThree] = useState(false);

  // --------------------------------------------------------
  // STATES BELOW ARE DEFAULT INITIAL TIME FOR TIMERS
  const [timeUsdt, setTimeUsdt] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [timeEth, setTimeEth] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [timeBnb, setTimeBnb] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [timeXrp, setTimeXrp] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [timeJackpot, setTimeJackpot] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [timeMiniBlast, setTimeMiniBlast] = useState({
    minutes: 0,
    seconds: 0,
  });

  const [timePowerBlast, setTimePowerBlast] = useState({
    minutes: 0,
    seconds: 0,
  });

  const [timeSuperBlast, setTimeSuperBlast] = useState({
    minutes: 0,
    seconds: 0,
  });

  const [timeMegaBlast, setTimeMegaBlast] = useState({
    minutes: 0,
    seconds: 0,
  });

  const [timeDreamzBlast, setTimeDreamzBlast] = useState({
    minutes: 0,
    seconds: 0,
  });

  const [timeDreamzThree, setTimeDreamzThree] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // --------------------------------------------------------
  // THESE ARE INDIVIDUAL TIMER INITIALIZERS WHICH WILL START
  // THE TIMER WITH SPECIFIED DATE. NOTE THAT THE DATES ARE COMING
  // FROM "CONTENT.JS" FILE IN "UTILS" FOLDER.

  useEffect(() => {
    countdownTimer(coinQuest.coinQuestUsdt, setEnableUsdt, setTimeUsdt);
  }, []);

  // TIMER ETH
  useEffect(() => {
    countdownTimer(coinQuest.coinQuestEth, setEnableEth, setTimeEth);
  }, []);

  // TIMER BNB
  useEffect(() => {
    countdownTimer(coinQuest.coinQuestBnb, setEnableBnb, setTimeBnb);
  }, []);

  // TIMER XRP
  useEffect(() => {
    countdownTimer(coinQuest.coinQuestXrp, setEnableXrp, setTimeXrp);
  }, []);

  // TIMER JACKPOT
  useEffect(() => {
    countdownTimer(jackpotMadness, setEnableJackpot, setTimeJackpot);
  }, []);

  // TIMER MINIBLAST
  useEffect(() => {
    countdownTimer(dreamzDual.miniBlast, setEnableMini, setTimeMiniBlast);
  }, []);

  // TIMER POWERBLAST
  useEffect(() => {
    countdownTimer(dreamzDual.powerBlast, setEnablePower, setTimePowerBlast);
  }, []);

  // TIMER SUPERBLAST
  useEffect(() => {
    countdownTimer(dreamzDual.superBlast, setEnableSuper, setTimeSuperBlast);
  }, []);

  // TIMER MEGABLAST
  useEffect(() => {
    countdownTimer(dreamzDual.megaBlast, setEnableMega, setTimeMegaBlast);
  }, []);

  // TIMER DREAMZBLAST
  useEffect(() => {
    countdownTimer(dreamzDual.dreamzBlast, setEnableDreamz, setTimeDreamzBlast);
  }, []);

  // TIMER DREAMZTHREE
  useEffect(() => {
    countdownTimer(dreamzThree, setEnableDreamzThree, setTimeDreamzThree);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        loginOpen,
        setLoginOpen,
        subOpen,
        setSubOpen,
        isLogin,
        setIsLogin,
        profileMenuOpen,
        setProfileMenuOpen,
        hamOpen,
        setHamOpen,
        sideNavSubMenu,
        setSideNavSubMenu,
        sideNavPrimaryMenu,
        setSideNavPrimaryMenu,
        sideNavActiveMenu,
        setSideNavActiveMenu,
        isRegistered,
        setIsRegistered,
        jackpotPopup,
        setJackpotPopup,
        jackpotCardData,
        setJackpotCardData,
        autoPlayOptions,
        setAutoPlayOptions,
        dreamzDualPopup,
        setDreamzDualPopup,
        enableUsdt,
        enableEth,
        enableBnb,
        enableXrp,
        enableJackpot,
        enableMini,
        enablePower,
        enableSuper,
        enableMega,
        enableDreamz,
        enableDreamzThree,
        timeUsdt,
        timeEth,
        timeBnb,
        timeXrp,
        timeJackpot,
        timeMiniBlast,
        timePowerBlast,
        timeSuperBlast,
        timeMegaBlast,
        timeDreamzBlast,
        timeDreamzThree,
        numberCardPopup,
        setNumberCardPopup,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
