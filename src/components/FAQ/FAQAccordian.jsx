"use client";
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";

export default function FAQAccordian({ data }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    // setSelected(index);
    // setOpen((prev) => !prev);

    if (selected == index) {
      setSelected(null);
    } else {
      setSelected(index);
      setOpen((prev) => !prev);
    }
  };

  return (
    <div className={`grid grid-cols-1`}>
      {data.map((item, index) => (
        <div key={index} className={`faq mb-2`}>
          <div
            onClick={() => handleClick(index)}
            className={`text-[14px] xs:text-[16px] cursor-pointer flex items-center justify-between text-left px-4 py-3  text-cool-90`}
          >
            <p className={`w-[280px] xs:w-[350px] sm:w-[480px]`}>
              {item.question}
            </p>
            <FaAngleLeft
              className={`${
                selected === index ? "-rotate-90" : "rotate-180"
              } transition-all duration-75`}
            />
          </div>
          <div
            className={`text-[14px] xs:text-[16px] ${
              selected === index ? "h-auto pt-3 pb-8" : "h-[0] pt-0 pb-0"
            } overflow-hidden text-cool-90/60 px-4 text-left transition-all duration-100`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
