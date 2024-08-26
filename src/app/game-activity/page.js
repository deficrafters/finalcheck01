"use client";

import { useEffect, useState, useContext, Suspense } from "react";
import { content } from "@/utils/content.js";
import HeroSection from "@/components/challenge/HeroSection";

import AnalyticsSection from "@/components/homepage/AnalyticsSection";
import { useRouter, useSearchParams } from "next/navigation";
import LoginFormContext from "@/components/context/global/GlobalContext";
import axios from "axios";
import LoginForm from "@/components/common/LoginForm";
import Social from "@/components/challenge/Social";
import Link from "next/link";
import { SpinModal } from "@/components/challenge/spin-modal";
import Dashboard from "@/components/challenge/dashboard";
import { useDispatch, useStore } from "react-redux";
import TicketModal from "@/components/challenge/TicketModal";
import SocialPopup from "@/components/challenge/SocialPopup";
import { setSpinnerPopup } from "@/store/slices/popupSlice";
import toast from "react-hot-toast";
import Affiliates from "../Affiliate/page";
import Leaderboard from "../Leaderboard/page";
import GlobalContext from "@/components/context/global/GlobalContext";
import Image from "next/image";

export default function GameActivity() {
  const { loginOpen } = useContext(LoginFormContext);
  const [getData, setGetData] = useState([])
 
  const [gameData, setGameData] = useState([
    {
      id: 123,
      winningAmount: 250,
      ticket: 20,
      date: "27-06-2024"
    },
    {
      id: 435,
      winningAmount: 250,
      ticket: 20,
      date: "27-06-2024"
    },
    {
      id: 768,
      winningAmount: 250,
      ticket: 20,
      date: "27-06-2024"
    },
    {
      id: 415,
      winningAmount: 250,
      ticket: 20,
      date: "27-06-2024"
    }
  ])

  // src/app/api/GameActivity/route.js

  useEffect(() => {

    const getUserJWT = localStorage.getItem("jwt")
    const parseIT = JSON.parse(getUserJWT)
   
    try {
      
      axios.post("/api/GameActivity",{
        id:parseIT.data._id
      })
      .then((acc)=>{
        console.log(acc.data)
        setGetData(acc.data)
      })
      .catch((err)=>{
        console.log(err)
      })


    } catch (error) {
      console.log(error)
    }

  }, [])
  


  return (
    <main className={`relative bg-black`}>

      <Suspense fallback={<div>Loading...</div>}>

        {loginOpen && <LoginForm />}

        <div className="px-16">

          {getData.map((game,index) => (<div key={index} class="flex w-full mb-3">
            <div>
              <div class="w-24 lg:h-24 h-32 rounded-full bg-cool-30 flex justify-center items-center relative z-10">
                {/* <img loading="lazy" width="64" height="64" decoding="async" data-nimg="1" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcategory-icon-03.2eb4a2da.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcategory-icon-03.2eb4a2da.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcategory-icon-03.2eb4a2da.png&amp;w=128&amp;q=75" style="color: transparent;"/> */}
              <Image src="/category-icon-03.png" width={64} height={64} />
              </div>
            </div>
            <div class="flex lg:justify-between lg:flex-row flex-col w-full lg:items-center bg-cool-30 my-3 px-5 lg:py-0 py-2 rounded-xl lg:-ml-8 -ml-6">
              <div class="lg:ml-8 ml-3">
                <p class="lg:text-xl text-md font-semibold">{game.GameType}</p>
                <p class="lg:text-sm text-xs text-orange-600 font-semibold">{game.TicketCount} ticket</p>
              </div>
              <div class="ml-3">
                <p class="lg:text-xl text-md font-semibold text-start">Winner: {game.WinningAmount}$</p>
                <p class="lg:text-sm text-xs text-gray-300 font-semibold lg:text-end text-start">{new Date(game.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
                

              </div>
            </div>
          </div>))}
        </div>
      </Suspense>
    </main>
  );
}