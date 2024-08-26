"use client";

import { BiReset } from "react-icons/bi";
import { FaRandom } from "react-icons/fa";
import { useEffect, useState } from "react";
import TicketNumber from "./TicketNumber";

let numbers = [];

export default function GamePopupCard({

  counter,
  onResetCard,
  onCollectArrays,
  resetCardArray,
  
}) {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  useEffect(() => {
    setSelectedNumbers([]);
  }, [resetCardArray]);

  function handleReset() {
    numbers = [];
    setSelectedNumbers([]);
    onResetCard(counter, numbers);
  }

  function handleRandomize() {
    numbers = [];
    while (numbers.length < 5) {
      let randomNum = Math.floor(Math.random() * 49) + 1;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    setSelectedNumbers(numbers);
    onCollectArrays(counter, numbers);
  }

  function handleNumClick(value, index) {
    if (selectedNumbers.length === 0) {
      numbers = [];
      setSelectedNumbers([]);
    }
    if (selectedNumbers.length < 5) {
      numbers.push(value);
      setSelectedNumbers([...numbers]);
      onCollectArrays(counter, numbers);
    }
  }

  return (
    <div className={`flex-shrink-0 rounded-radius-md overflow-hidden`}>
      <div className="w-[100%] bg-cool-20 px-5 py-4 flex items-center justify-between">
        <TicketNumber title={false} />
        <div className="flex items-center justify-end gap-[6px]">
          <div className={`selectedNumbers`}>{selectedNumbers[0]}</div>
          <div className={`selectedNumbers`}>{selectedNumbers[1]}</div>
          <div className={`selectedNumbers`}>{selectedNumbers[2]}</div>
          <div className={`selectedNumbers`}>{selectedNumbers[3]}</div>
          <div className={`selectedNumbers`}>{selectedNumbers[4]}</div>
        </div>
      </div>
      <div
        className={`grid grid-cols-7 gap-y-2 xs:gap-y-[3px] sm:gap-y-1 md:gap-y-[2px] lg:gap-x-[2px] xl:gap-x-1 xl:gap-y-1 p-4 2xl:p-6 bg-cool-30`}
      >
        {Array.from({ length: 49 }, (num, index) => (
          <button
            onClick={() => handleNumClick(index + 1, index)}
            key={index}
            className={`self-center justify-self-center btnCircular !w-8 !h-8 ${
              selectedNumbers.includes(index + 1)
                ? `!bg-brandShade-80 !text-brandShade-10 !font-bold animate-bounce `
                : ``
            }`}
          >
            <span className={`text-[14px]`}>{index + 1}</span>
          </button>
        ))}
      </div>
      <div className="bg-cool-10 p-6 flex items-center justify-between">
        <button onClick={handleReset}>
          <span className="text-[14px] tracking-wider flex items-center gap-2">
            Reset
            <BiReset size={20} />
          </span>
        </button>
        <button onClick={handleRandomize}>
          <span className="text-sm tracking-wider flex items-center gap-2">
            Randomize
            <FaRandom size={16} />
          </span>
        </button>
      </div>
    </div>
  );
}
