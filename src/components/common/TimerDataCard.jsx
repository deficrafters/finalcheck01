"use client";

import { useState } from "react";

export default function TimerDataCard({
  data,
  width = "50px",
  height = "60px",
  bgColor = "--white",
  seperatorColor = "--cool-20",
  seperatorHlColor = "--cool-80",
  days = false,
  hours = false,
  mins = false,
  secs = false,
}) {
  const [day, setDay] = useState();

  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: `var(${bgColor})`,
        boxShadow: "0px 10px 16px -8px rgba(0,0,0,0.25)",
      }}
      className={`flexRowCentered text-h4 rounded-radius-sm`}
    >
      <div
        style={{
          backgroundColor: `var(${seperatorColor})`,
          borderColor: `var(${seperatorHlColor})`,
        }}
        className={`flexRowCentered timerBgSeperator text-black`}
      >
        <span className={`flexColCentered drop-shadow-md leading-none `}>
          {data}
          <span className={`timerLabel`}>
            {days ? "DAYS" : ""}
            {hours ? "HOURS" : ""}
            {mins ? "MINS" : ""}
            {secs ? "SECS" : ""}
          </span>
        </span>
      </div>
    </div>
  );
}
