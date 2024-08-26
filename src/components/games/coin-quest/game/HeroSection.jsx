"use client";

import { useContext ,useEffect,useState} from "react";
import Image from "next/image";
import { content } from "@/utils/content.js";
import { FaStar } from "react-icons/fa6";
import Timer from "@/components/common/Timer";
import GlobalContext from "@/components/context/global/GlobalContext";
import axios from "axios";

const { sold, total } = content.soldOutTickets;
const { coinQuestUsdt, coinQuestEth, coinQuestBnb, coinQuestXrp } =
  content.gameDates.coinQuest;

export default function HeroSection({ gameID,currency, datasss, setTtimerData, expiryDates }) {

  const { timeUsdt, timeEth, timeBnb, timeXrp } = useContext(GlobalContext);

  const [getWinnerName, setGetWinnerName] = useState("")

  useEffect(() => {
    Get_Winner_Name()
  }, [])

  const Get_Winner_Name = () =>{
    try {
      
      axios.post("/api/getWinnerName",{
        gameID:gameID
      })
      .then((acc)=>{
        console.log("=======================")
        console.log(acc.data)
        console.log("=======================")



        if (acc.data.msg!=="No Winner Found") {
          setGetWinnerName(acc.data.WinnerName)
        }
      })
      .catch((err)=>{
        console.log(err)
      })

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className={`wrapper-desk grid grid-cols-2 overflow-hidden`}>

      <div
        className={`col-span-2 md:col-span-1 self-center justify-self-center flex flex-col items-center md:items-start`}
      >

        <SoldOutBox datasss={datasss} />

        <h1
          className={`text-[36px] xxs:text-[40px] xs:text-[44px] font-semibold uppercase tracking-tighter`}
        >
          win {datasss && datasss.prizeValue && datasss.name}
        </h1>

        <p className={`text-[28px] tracking-tight text-cool-80`}>
          Entry Price |
          <span className={`font-semibold text-white`}> ${datasss ? datasss.amount && datasss.amount : 0}</span>
        </p>

        <p className={`text-[28px] tracking-tight text-cool-80`}>
          Pricing USDT |
          <span className={`font-semibold text-white`}> ${datasss ? datasss.prizeValue : 0}</span>
        </p>

        <h4 className={`text-h4 mt-6`}>Guaranteed Winner</h4>
        <div
          className={`flex flex-col xs:flex-row items-center gap-2 w-fit mt-4 xs:mt-2`}
        >
          <FaStar className={`text-hl-01`} />
          <p className={`text-h6 font-normal text-center xs:text-left`}>
            <span className={`text-cool-80 block xs:inline`}>
              Draw Date<span className={`hidden xs:inline mx-1`}>-</span>
            </span>
            {datasss && datasss.timeline && new Date(datasss.timeline).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) }
          </p>
        </div>
        {expiryDates && expiryDates == "Date has already passed" || datasss && datasss.soldOutTickets && datasss.soldOutTickets.total == datasss.soldOutTickets.sold ?


          datasss.soldOutTickets.total == datasss.soldOutTickets.sold && datasss.WinerChoosed == false ?


            <>

              <h4 className={`text-h5 mt-6`}>POOL FILLED. SOON WINNER WILL BE SELECTED</h4>

            </>

            :

            <>

              <h4 className={`text-h5 mt-6`}>POOL WON BY : {getWinnerName?getWinnerName:"Waiting From Admin Side"}</h4>

            </>




          :


          <Timer
            setTtimerData={setTtimerData}
            time={
              currency === "usdt"
                ? timeUsdt
                : currency === "eth"
                  ? timeEth
                  : currency === "bnb"
                    ? timeBnb
                    : currency === "xrp"
                      ? timeXrp
                      : null
            }
            dataCard={true}
          />

        }

      </div>
      <div className={`col-span-2 md:col-span-1`}>
        <Image
          src={"/Tether-Coin.png"}
          alt=""
          width={1000}
          height={1000}
          className={`w-auto h-auto scale-125 sm:scale-110`}
        />
      </div>
    </section>
  );
}

function SoldOutBox({ soldOutTickets, datasss }) {

  const dashArray = 491;
  const percentage = datasss ? datasss.soldOutTickets && datasss.soldOutTickets.sold : 0 / datasss ? datasss.soldOutTickets && datasss.soldOutTickets.total : 0;

  const dashOffset = dashArray - dashArray * percentage;

  return (
    <div className={`relative w-fit`}>
      <div
        className={`flexRowCentered w-[100%] gap-2 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
      >
        <div
          className={`flexColCentered !items-end gap-[1px] text-right uppercase`}
        >
          <p
            className={`text-[16px] !leading-none tracking-tighter font-semibold`}
          >
            {datasss && datasss.soldOutTickets && datasss.soldOutTickets.sold}
          </p>
          <p className={`text-[12px] !leading-none font-light text-cool-90`}>
            sold
          </p>
        </div>
        <div className={`w-[1px] h-[25px] bg-white`}></div>
        <div className={`flexColCentered !items-start gap-[1px] uppercase`}>
          <p className={`text-[12px] !leading-none font-light text-cool-90`}>
            out of
          </p>
          <p
            className={`text-[16px] !leading-none tracking-tighter font-semibold`}
          >
            {datasss && datasss.soldOutTickets && datasss.soldOutTickets.total}
          </p>
        </div>
      </div>

      <svg
        width="150"
        height="80"
        viewBox="-2 0 206 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="0.977844"
          width="200"
          height="80"
          rx="40"
          fill="#4043BF"
          style={{
            stroke: "#f2c25a",
            strokeWidth: "6px",
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            strokeLinecap: "round",
          }}
        />
      </svg>
    </div>
  );
}
