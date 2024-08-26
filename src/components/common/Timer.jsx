"use client";

import { useState, useEffect } from "react";

import TimerDataCard from "@/components/common/TimerDataCard";

export default function Timer({ time, dataCard, paddingTopBottom = "16px" ,setTtimerData}) {

  return (
    <div
      style={{ paddingBlock: paddingTopBottom }}
      className="flex items-center justify-center gap-3 w-max"
    >
      {dataCard && (
        <>
          <TimerDataCard days width="60px" data={setTtimerData.Day} />
          <TimerDataCard hours width="60px" data={setTtimerData.Hour} />
          <TimerDataCard mins width="60px" data={setTtimerData.Minutes} />
          <TimerDataCard secs width="60px" data={setTtimerData.Second} />
        </>
      )}
    </div>
  );
}
