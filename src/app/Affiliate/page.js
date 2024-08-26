"use client"

import WinnerSection from '@/components/common/WinnerSection'
import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import toast from 'react-hot-toast'
import HowToAffiliateSection from "../../../src/components/common/HowToAffiliateSection"
import SectionIdentifier from '@/components/common/SectionIdentifier'
import GlobalContext from '@/components/context/global/GlobalContext';
import Link from 'next/link';
import Image from 'next/image'
import HeroSection from '@/components/games/dreamz-dual/AffiliateSection'

const Page = ({ hideAbove }) => {

  const [data, setdata] = useState({
    winners: {
      weeklyWinners: {
        title: "Affiliate History",
        header: ["User Name", "Affiliate Reward", "Contest Entry", "Date"],
        rows: [


        ],
      },
      cqWinners: {
        title: "Coin Quest Winners",
        header: ["User Name", "Game Title", "Winnings", "Winning Date"],
        rows: [
          {
            user: "User 1",
            gameTitle: "3 ETH",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 2",
            gameTitle: "10000 XRP",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 3",
            gameTitle: "BNB 10",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 4",
            gameTitle: "USDT 10000",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 5",
            gameTitle: "USDT 1000",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 6",
            gameTitle: "300 USDT",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
        ],
      },
      jackpotWinners: {
        title: "Jackpot Winners",
        header: ["User Name", "Game Title", "Winnings", "Winning Date"],
        rows: [
          {
            user: "User 1",
            gameTitle: "3 ETH",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 2",
            gameTitle: "10000 XRP",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 3",
            gameTitle: "BNB 10",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 4",
            gameTitle: "USDT 10000",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 5",
            gameTitle: "USDT 1000",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 6",
            gameTitle: "300 USDT",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
        ],
      },
      dDualWinners: {
        title: " Dreamz Dual Winners",
        header: ["User Name", "Game Title", "Winnings", "Winning Date"],
        rows: [
          {
            user: "User 1",
            gameTitle: "3 ETH",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 2",
            gameTitle: "10000 XRP",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 3",
            gameTitle: "BNB 10",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 4",
            gameTitle: "USDT 10000",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 5",
            gameTitle: "USDT 1000",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
          {
            user: "User 6",
            gameTitle: "300 USDT",
            winnings: "200 ETH",
            winningDate: { day: "10", month: "march", year: "2024" },
          },
        ],
      },
    },
    activityTable: {
      title: "Activity",
      header: ["User", "Placed Tickets", "Date"],
      rows: [
        {
          user: "User 1",
          placedTickets: "2",
          date: "1/4/2024",
        },
        {
          user: "User 2",
          placedTickets: "5",
          date: "1/4/2024",
        },
        {
          user: "User 3",
          placedTickets: "2",
          date: "1/4/2024",
        },
        {
          user: "User 4",
          placedTickets: "3",
          date: "1/4/2024",
        },
      ],
    },
    drawTable: {
      drawDate: "24 april 2024",
      header: ["Match", "Winning Numbers", "Prize", "Winners", "Total Prize"],
      rows: [
        {
          match: "straight",
          winningNumbers: "671",
          prize: "3000 $",
          winners: "2",
          totalPrize: "6000$",
        },
        {
          match: "reverse",
          winningNumbers: "176",
          prize: "300 $",
          winners: "2",
          totalPrize: "600$",
        },
        {
          match: "mix-1",
          winningNumbers: "167",
          prize: "100 $",
          winners: "3",
          totalPrize: "300$",
        },
        {
          match: "mix-2",
          winningNumbers: "716",
          prize: "100 $",
          winners: "4",
          totalPrize: "400$",
        },
        {
          match: "mix-3",
          winningNumbers: "761",
          prize: "100 $",
          winners: "7",
          totalPrize: "700$",
        },
        {
          match: "mix-4",
          winningNumbers: "617",
          prize: "100 $",
          winners: "2",
          totalPrize: "200$",
        },
      ],
    },
  })

  const [fetchedData, setfetchedData] = useState([])
  const [Copied, setCopied] = useState(false)
  const [linkForShare, setLinkForShare] = useState("")

  useEffect(() => {

    let getDta = localStorage.getItem("jwt")
    let parseIt = JSON.parse(getDta)


    setLinkForShare(`https://dreamgamez.io?showRegister=true&Ref=${parseIt.data._id}`);



    try {

      axios.post("/api/GetAffiliateData", {
        ids: parseIt.data._id

      })
        .then((acc) => {
          setfetchedData(acc.data)

        })
        .catch((err) => {
        //  console.log(err)
        })

    } catch (error) {
    //  console.log(error)
    }


  }, [])

  let header_Title = ["User Name", "Affiliate Reward", "Contest Entry", "Date"]

  const handleSee = () => {

    let getUserId = JSON.parse(localStorage.getItem("jwt"));

    let links = `https://dreamgamez.io?showRegister=true&Ref=${getUserId.data._id}`;

    navigator.clipboard
      .writeText(links)
      .then(() => {
      //  console.log("Text copied to clipboard");
      })
      .catch((error) => {
        // console.error('Error copying text: ', error);
        toast.error("Something Went Wrong");
      });

    toast.success("Copied")
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000);
  }

  const [referralLink, setReferralLink] = useState("https://dreamgamez.io?showRegister=true&Ref=664cadf50a564581382d761e")

  return (
    <div>
      
      <section>
        {
          hideAbove ?
            <></>
            :
            <>
              <HeroSection />
              <div>
              <div
                  className={` bg-cool-10 py-5 flex items-center justify-center gap-y-4 gap-x-10 xl:gap-x-16`}
                >
                  <div className='flex items-center'>
                    <p className='w-44 '>Referral Link</p>
                    <input className="py-2 px-3 border-[0.3px] outline-none bg-transparent col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={referralLink} />
                    <button
                      onClick={() => handleSee()}
                      className={`py-2 px-4 bg-cool-100 text-white font-semibold rounded-md`}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              
              </div>

              <HowToAffiliateSection sectionTitle="How To Refer" description="Refer Your Friends And Get 0.5 In Your Wallet." />
            </>


        }

      </section>

      <div className={`wrapper-desk py-8`}>

        <p
          style={{ marginTop: 40 }}
          className={`text-[20px] xs:text-[24px] font-semibold text-center lg:text-left mb-4`}
        >
          Affiliate History
        </p>


        <div className={`overflow-auto scroll`}>
          <div className={`w-[600px] sm:w-full rounded-md mt-6 overflow-hidden`}>

            <div>

              <div

                className={`grid grid-cols-4 bg-cool-20 even:bg-cool-30 py-4`}
              >
                <p
                  className={`text-[16px] xs:text-[18px] sm:text-[20px] self-center justify-self-center tracking-tighter italic`}
                >
                  USERNAME
                </p>
                <p
                  className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
                >
                  BONUS
                </p>
                <p
                  className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
                >
                  CONTEST ENTRY
                </p>
                <p
                  className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
                >
                  DATE
                </p>
              </div>




              {fetchedData.length > 0 && fetchedData.map((item, index) => (

                <div
                  key={index}
                  className={`grid grid-cols-4 bg-cool-20 even:bg-cool-30 py-4`}
                >
                  <p
                    className={`text-[16px] xs:text-[18px] sm:text-[20px] self-center justify-self-center tracking-tighter italic`}
                  >
                    {item.FromUserName}
                  </p>
                  <p
                    className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
                  >
                    {item.Reward}
                  </p>
                  <p
                    className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
                  >
                    1
                  </p>
                  <div
                    className={`text-[20px] font-medium self-center justify-self-center flex flex-col items-end leading-[110%] tracking-tighter italic`}
                  >
                    <div
                      className={`text-[14px] text-cool-80 font-normal uppercase `}
                    >

                      {Date(item.createdAt)}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Page