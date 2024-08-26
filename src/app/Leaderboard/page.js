"use client"

import WinnerSection from '@/components/common/WinnerSection'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

const Page = () => {

  const [fetchedData, setfetchedData] = useState([])

  const [checked, setchecked] = useState(false)

  let header_Title = ["S.No", "UserName", "Total Refferals", "Winning Amount"]

  useEffect(() => {

    getData()

  }, [])

  const getData = () => {

    try {

      axios.post("/api/GetLeaderBoardData", {
        checked
      })
        .then((acc) => {
          // console.log(acc.data)
          setfetchedData(acc.data)

        })
        .catch((err) => {
          // console.log(err)
        })


    } catch (error) {
      // console.log(error)
    }
  }

  return (
    <div>

      <div id='winners' className={`wrapper-desk py-8`}>

        <div class="grid grid-cols-3 gap-4">

          <div class="...">
            <p
              className={`text-[20px] xs:text-[24px] font-semibold text-center lg:text-left mb-4`}
            >
              Leaderboard
            </p>
          </div>
          <div class="col-span-2 ...">
            <div style={{ textAlign: "right" }}>
              <Toggle
                defaultChecked={checked}
                aria-label='No label tag'
                onChange={() => [setchecked(!checked), getData()]} />
              <span style={{ marginLeft: 10, marginBottom: 10, bottom: 10 }}>{checked ? "7" : "Entire"} Days Data</span>
            </div>
          </div>
        </div>

        <div className={`overflow-auto scroll`}>
          <div className={`w-[600px] sm:w-full rounded-md mt-6 overflow-hidden`}>
            {/* HEADER */}
            <div className={`w-full grid grid-cols-4 bg-cool-10`}>
              {header_Title.map((item, index) => (
                <h6
                  key={index}
                  className={`text-[14px] self-center justify-self-center py-6 text-slate-300`}
                >
                  {item}
                  
                </h6>

              ))}

            </div>

            <div>
              {fetchedData.length > 0 && fetchedData.map((item, index) => (

                <div
                  key={index}
                  className={`grid grid-cols-4 bg-cool-20 even:bg-cool-30 py-4`}
                >
                  <p
                    className={`text-[16px] xs:text-[18px] sm:text-[20px] self-center justify-self-center tracking-tighter italic`}
                  >
                    {index + 1}
                  </p>
                  <p
                    className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
                  >
                    {item.ToUserName}
                  </p>
                  <p
                    className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
                  >
                  
                    {item.numbers}
                  
                  </p>
                  <p
                    className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
                  >

                    {item.Reward}
                  </p>
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
