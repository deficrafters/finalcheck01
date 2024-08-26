import { NextResponse } from 'next/server';
import PurchasedJackpotTicket from "../../../Modal/JackpotMadness/PurchasedJackpotTicket"
import initDB from "../../../helper/initDB";

initDB()

export async function POST(request) {

    const { id } = await request.json();

    console.log({id})

    var Find_PurchasedJackpotTicket

    if (id) {
        Find_PurchasedJackpotTicket = await PurchasedJackpotTicket.find({ TicketOwner: id }).lean()

    } else {
        Find_PurchasedJackpotTicket = await PurchasedJackpotTicket.find().lean()

    }

    return NextResponse.json(Find_PurchasedJackpotTicket);
}