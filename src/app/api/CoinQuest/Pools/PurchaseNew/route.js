import { NextResponse } from 'next/server';
import CoinQuestPool from "../../../../../Modal/CoinQuest/CoinQuestPool";
import BuyCoinQuestPool from "../../../../../Modal/CoinQuest/BuyCoinQuestPool";
import User from "../../../../../Modal/User";
import USDT_Wallets from "../../../../../Modal/Wallets/USDT/USDT_Wallets";
import initDB from "../../../../../helper/initDB";
import nodemailer from "nodemailer";
import { FROM, HOST, PASS, PORT, SECURE, TLS, USER } from "../../../../../helper/BASE_URL"
import GamingActivities from '@/Modal/GamingActivity/GamingActivities';

initDB()

export async function POST(request) {

  
  const { ids, useId, method, includeFreeTicket,radioValue,Final_Amount,TicketCount,Hash } = await request.json();

  const Find_All_Pools = await CoinQuestPool.findOne({ _id: ids }).lean()

  const GetUser = await User.findOne({ _id: useId })

  let left = Find_All_Pools.soldOutTickets.total - Find_All_Pools.soldOutTickets.sold

  if (Number(TicketCount) <= left && left > 0) {

    await BuyCoinQuestPool.create({
      owner: useId,
      poolID:Find_All_Pools._id,
      currency: Find_All_Pools.currency,
      name: Find_All_Pools.name,
      image: Find_All_Pools.image,
      route: Find_All_Pools.route,
      amount: Find_All_Pools.amount,
      prizeValue: Find_All_Pools.prizeValue,
      bettingslots: Find_All_Pools.bettingslots,
      timeline: Find_All_Pools.timeline,
      winningscheme: Find_All_Pools.winningscheme,
      soldOutTickets: Find_All_Pools.soldOutTickets,
      includeFreeTicket: includeFreeTicket,
      TicketCount,
      Type:method=="Deposit Wallet"?"Wallet":"Crypto",
      Hash:method=="Deposit Wallet"?null:Hash.replace(/^"|"$/g, '')
    })

    await CoinQuestPool.findByIdAndUpdate({ _id: Find_All_Pools._id }, { $inc: { 'soldOutTickets.sold': +Number(TicketCount) } })

    if (method == "Deposit Wallet" && !includeFreeTicket) {

      let Find_USDT_Wallets = await USDT_Wallets.findOne({ RecordOwner: useId }).lean()

      let value = Number(Find_All_Pools.amount) * TicketCount

      await USDT_Wallets.findByIdAndUpdate({ _id: Find_USDT_Wallets._id }, { $inc: { Deposit_Wallet_USDT: -value } })


    }

    let transporter = nodemailer.createTransport({
      host: HOST,
      port: PORT,
      secure: SECURE, // true for 465, false for other ports
      tls: TLS,
      auth: {
        user: USER, // Your email address
        pass: PASS// Your password
      }
    });

    let mailOptions = {
      from: FROM, // Sender address
      to: "nexanowserver@gmail.com", // List of recipients
      subject: 'Purchase Confirmation', // Subject line
      text: 'Purchase Confirmation', // Plain text body
      text: `${GetUser.SponserCode} Has ${method} This ${Find_All_Pools.currency} ${Find_All_Pools.amount}`

    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }

    });

    await GamingActivities.create({
      GameOwner: useId,
      GameType: "Coin Quest",
      GameName: Find_All_Pools.name,
      WinningAmount: Find_All_Pools.prizeValue,
      TicketCount: Find_All_Pools.amount
    })


    return NextResponse.json({ status: true, message: "Token Bought" });

  } else {

    return NextResponse.json({ status: false, message: "Not Sufficient Tokens Left." });

  }

}