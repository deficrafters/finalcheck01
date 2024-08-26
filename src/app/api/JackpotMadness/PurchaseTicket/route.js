import { NextResponse } from 'next/server';
import PurchasedJackpotTicket from "../../../../Modal/JackpotMadness/PurchasedJackpotTicket";
import initDB from '@/helper/initDB';
import { FROM, HOST, PASS, PORT, SECURE, TLS, USER } from "../../../../helper/BASE_URL"
import nodemailer from "nodemailer";
import User from '@/Modal/User';
import GamingActivities from '@/Modal/GamingActivity/GamingActivities';
import Wallets from '@/Modal/Wallets/USDT/USDT_Wallets';

initDB()

export async function POST(request) {

  const { id, data, hash, radioValue, Final_Amount,quantity } = await request.json();

  if (!id || !data) return NextResponse.json({ error: "You Have Not Provided All The Informations", status: false });

  let Ticket_Array_Data = JSON.parse(data)

  const GetUser = await User.findOne({ _id: id })

  await PurchasedJackpotTicket.create({
    TicketOwner: id,
    game: Ticket_Array_Data[0].game,
    price: 1*quantity,
    entries: quantity,
    tickets: Ticket_Array_Data[0].tickets,
    hash
  })
  
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
    text: `${GetUser.SponserCode} Has Purchased Ticket Of This Game - ${Ticket_Array_Data[0].game} With This Much Entries - ${1*quantity}`

  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }

  });

  await GamingActivities.create({
    GameOwner: id,
    GameType: "Jackpot Madness",
    GameName: Ticket_Array_Data[0].game,
    WinningAmount: Ticket_Array_Data[0].price,
    TicketCount: Ticket_Array_Data[0].entries
  })

  if (radioValue == "Deposit Wallet") {

    console.log("Removing From Wallet ==> ")

    const Find_Wallet = await Wallets.findOne({ RecordOwner: id }).lean()

    console.log({Final_Amount})


    await Wallets.findByIdAndUpdate({ _id: Find_Wallet._id }, { $inc: { Deposit_Wallet_USDT: -Number(1*quantity) } })

  }

  return NextResponse.json({ message: "Ticket Purchased", status: true });
}