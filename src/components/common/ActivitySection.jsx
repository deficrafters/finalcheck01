import React, { useState, useEffect } from "react"
import SectionIdentifier from "@/components/common/SectionIdentifier";
import WinnersTable from "./WinnersTable";
import ActivityTable from "../tables/ActivityTable";
import axios from "axios";

export default function ActivitySection({ getAllData,sectionTitle, header, rows, GameData, fromJackPotPage, gameID }) {

  const [data, setdata] = useState([])

  let Dtas = GameData
  

  useEffect(() => {

    try {

      let Link = fromJackPotPage ? "/api/getJackpotActivityData" : "/api/getActivityData"

      axios.post(Link, {
        name: GameData == "Winner" ? null : "jackpot madness",
        poolID: gameID

      })
        .then((acc) => {

          console.log(acc.data)
          setdata(acc.data)
        })
        .catch((err) => {

        })

    } catch (error) {

    }

  }, [])

  return (
    <section className={`relative`}>
      <SectionIdentifier id="activity" />
      <div className={`wrapper-desk py-8`}>
        <p
          className={`text-[20px] xs:text-[24px] font-semibold text-center lg:text-left mb-4`}
        >
          {sectionTitle}
        </p>
        <ActivityTable getAllData={getAllData} data={data} header={header} rows={rows} />
      </div>
    </section>
  );
}
