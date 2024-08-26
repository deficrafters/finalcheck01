import React, { useState, useEffect } from "react";
import { content } from "@/utils/content.js";
import bnb from "../../assets/cryptIcon/crypto-color_bnb.png"
import usdt from "../../assets/cryptIcon/crypto-color_usdt.png"
import usdc from "../../assets/cryptIcon/crypto-color_usdc.png"
import Image from "next/image";

const { header, rows } = content.table.winners.walletTable;

export default function WalletTable({ History, label, GetHistory }) {

  useEffect(() => {
    GetHistory(label)
  }, [])

  return (
    <div className={`overflow-auto scroll`}>
      <div className={`w-[600px] sm:w-full rounded-md mt-6 overflow-hidden`}>
        {/* HEADER */}
        <div className={`w-full grid grid-cols-4 bg-cool-10`}>
          {header.map((item, index) => (
            <h6
              key={index}
              className={`text-[14px] self-center justify-self-center py-6`}
            >
              {item}
            </h6>
          ))}
        </div>
        {/* ROWS */}
        <div>
          {History.map((item, index) => {

            const date = new Date(item.createdAt);

            const formattedDate = date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            }).replace(/\//g, '-');

            return <div
              key={index}
              className={`grid grid-cols-4 bg-cool-20 even:bg-cool-30 py-4`}
            >

              <p
                className={`text-[16px] xs:text-[18px] sm:text-[20px] self-center justify-self-center tracking-tighter italic`}
              >
                {item.Type}
              </p>
              <p
                className={`text-[16px] xs:text-[18px] sm:text-[20px] self-center justify-self-center tracking-tighter italic`}
              >
                {/* <Image src={item.tokentype=="USDT"?usdt:item.tokentype=="USDC"?usdc:item.tokentype=="BNB"?bnb:""} width={20} height={20} />
               <span>{item.Amount}</span> */}


                {/* <div className="grid place-items-center">
                  <Image src={item.tokentype === "USDT" ? usdt : item.tokentype === "USDC" ? usdc : item.tokentype === "BNB" ? bnb : ""} width={20} height={20} />
                  <span>{item.Amount}</span>
                </div> */}

<div className="grid place-items-center">
                  <div className="flex items-center gap-1">
                    <span>
                  <Image src={item.tokentype === "USDT" ? usdt : item.tokentype === "USDC" ? usdc : item.tokentype === "BNB" ? bnb : ""} width={20} height={20} />
                    </span>
                  <span>{item.Amount}</span>

                  </div>
                </div>


              </p>
              <p
                className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
              >
                <a href={"https://testnet.bscscan.com/tx/" + item.hash} target="__blank">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    HASH
                  </button>
                </a>

              </p>
              <p
                className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
              >

                {formattedDate}
              </p>

            </div>
          }

          )}
        </div>
      </div>
    </div>
  );
}