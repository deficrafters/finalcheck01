import { NextResponse } from 'next/server';
import PurchasedJackpotTicket from "../../../../Modal/JackpotMadness/PurchasedJackpotTicket";
import initDB from '@/helper/initDB';

initDB()

export async function GET(request) {

    const Get_Data = await PurchasedJackpotTicket.find().lean()

    let Total_Pool_So_Far = 0
    let Entries = 0
    let Participants = 0

    for (let index = 0; index < Get_Data.length; index++) {

        const element = Get_Data[index];

        Participants += 1

        Entries += element.entries

        Total_Pool_So_Far += element.price * element.entries

    }

   let participants = Array.from((Total_Pool_So_Far).toString())
   let entries = Array.from((Total_Pool_So_Far).toString())
   let totalPool = Array.from((Total_Pool_So_Far).toString())

   let Newparticipants = 0
   let Newentries = 0
   let NewtotalPool = 0

   switch (participants.length) {
    case 4:
        Newparticipants = Total_Pool_So_Far
        break;
    case 3:
        Newparticipants = "0"+Total_Pool_So_Far
        break;
    case 2:
        Newparticipants = "00"+Total_Pool_So_Far
        break;
    case 1:
        Newparticipants = "000"+Total_Pool_So_Far
        break;
    case 0:
        Newparticipants = "0000"
        break;
  
   }

   switch (entries.length) {
    case 4:
        Newentries = Total_Pool_So_Far
        break;
    case 3:
        Newentries = "0"+Total_Pool_So_Far
        break;
    case 2:
        Newentries = "00"+Total_Pool_So_Far
        break;
    case 1:
        Newentries = "000"+Total_Pool_So_Far
        break;
    case 0:
        Newentries = "0000"
        break;
  
   }

   switch (totalPool.length) {
    case 4:
        NewtotalPool = Total_Pool_So_Far
        break;
    case 3:
        NewtotalPool = "0"+Total_Pool_So_Far
        break;
    case 2:
        NewtotalPool = "00"+Total_Pool_So_Far
        break;
    case 1:
        NewtotalPool = "000"+Total_Pool_So_Far
        break;
    case 0:
        NewtotalPool = "0000"
        break;
  
   }

  console.log({ Total_Pool_So_Far:Number(Newparticipants), Entries:Number(Newentries), Participants:Number(NewtotalPool)})
  console.log({ Total_Pool_So_Far:(Newparticipants), Entries:(Newentries), Participants:(NewtotalPool)})

    let Obj = { Total_Pool_So_Far:(Newparticipants), Entries:(Newentries), Participants:(NewtotalPool)}


    return NextResponse.json(Obj);
}