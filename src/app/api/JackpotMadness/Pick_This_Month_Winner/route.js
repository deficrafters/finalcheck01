import { NextResponse } from 'next/server';
import PurchasedJackpotTicket from "../../../../Modal/JackpotMadness/PurchasedJackpotTicket";
import JackpotWinners from "../../../../Modal/JackpotMadness/JackpotWinners";
import ShortRecord from "../../../../Modal/ShortRecord";
import initDB from '@/helper/initDB';

initDB()

function Making_Random(data) {
    let result = new Array(data.length);
    let taken = new Set();

    data.forEach(item => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * data.length);
        } while (taken.has(randomIndex));

        taken.add(randomIndex);
        result[randomIndex] = item;
    });

    return result;
}

export async function GET(request) {

    let Winners_List = []

    const Get_All_Tickets = await PurchasedJackpotTicket.find({}).lean().exec();

    let All_Final_Ticket = Making_Random(Get_All_Tickets)

    for (let index = 0; index < All_Final_Ticket.length; index++) {

        const element = All_Final_Ticket[index];

        element.tickets.map((hit) => {
            Winners_List.push(element)
        })

        if (index >= 8 && Winners_List.length >= 8) {
            break;
        }

    }

    let Finalised_Max_8_Winners = Winners_List.slice(0, 8)

    let Total_Amount_Collected = 0

    Finalised_Max_8_Winners.map((hit) => {
        return Total_Amount_Collected += hit.price
    })

    // ! NOW GOING TO DESTRIBUTE AMOUNT ACCORDING THERE INDEX

    let Documents = []

    for (let index = 0; index < Finalised_Max_8_Winners.length; index++) {

        const element = Finalised_Max_8_Winners[index];

        var Percantage = 0

        switch (index + 1) {
            case 1:
                Percantage = 50
                break;
            case 2:
                Percantage = 10
                break;
            case 3:
                Percantage = 5
                break;
            case 4:
                Percantage = 1
                break;
            case 5:
                Percantage = 1
                break;
            case 6:
                Percantage = 1
                break;
            case 7:
                Percantage = 1
                break;
            case 8:
                Percantage = 1
                break;

            default:
                break;
        }

        const Find_Short_Rec = await ShortRecord.findOne({ Owner: element.TicketOwner }).lean()

        let Jackpot_Madness_Winning_Records = {
            Jackpot_Winner_Owner: element.TicketOwner,
            Game_ID: element._id,
            Game: element.game,
            Price: element.price,
            Entries: element.entries,
            Tickets: element.tickets,
            Hash: element.hash,
            Winning_Amount: Total_Amount_Collected * Percantage / 100,
            Winning_Percantage: Percantage,
            Draw_Position: index + 1
        }

        let Winning = Total_Amount_Collected * Percantage / 100

        // Going To Give Reward In His ShortRecord
        await ShortRecord.findByIdAndUpdate({_id:Find_Short_Rec._id},{$inc:{Jackpot_Paid_Winning_USDT:Winning}})

        Documents.push(Jackpot_Madness_Winning_Records)

    }

    // console.log()

    await JackpotWinners.insertMany(Documents)

    return NextResponse.json(Documents);
}