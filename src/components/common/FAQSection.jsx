"use client";

import { useState } from "react";
import { content } from "../../utils/content.js";

import { FaAngleLeft } from "react-icons/fa6";
import SectionIdentifier from "./SectionIdentifier.jsx";
import FAQAccordian from "../FAQ/FAQAccordian.jsx";

const { frequentQuestionsData } = content;

export default function FAQSection() {
  return (
    <section className={`relative`}>
      <SectionIdentifier id="faq" />
      <div className={`wrapper-desk my-8 text-center sm:text-left`}>
        <h3
          className={`text-[20px] xs:text-[24px] font-semibold tracking-tight text-center lg:text-left mb-4`}
        >
          Frequently Asked Questions
        </h3>
        <FAQAccordian data={frequentQuestionsData} />
      </div>
    </section>
  );
}
