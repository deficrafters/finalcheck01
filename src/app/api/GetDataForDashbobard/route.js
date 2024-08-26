import { NextResponse } from 'next/server';
import ShortRecord from "../../../Modal/ShortRecord"
import initDB from "../../../helper/initDB";

initDB()

export async function POST(request) {
    
    const { ids } = await request.json();

    let findData = await ShortRecord.findOne({ Owner: ids }).lean();

    


    const objMap = {
        challenge_entries_100k: 0,
        Self_Entries: 1,
        Referral_Entries: 2,
        Referral_Reward: 3,
        USDT_Tokens: 4,
        DGT_tokens: 5,
    };

    const Obj = [
        {
            id: 1,
            Icon: "HiTicket",
            title: "100k challenge entries",
        },
        {
            id: 2,
            Icon: "BsGiftFill",
            title: "Self entries",
        },
        {
            id: 3,
            Icon: "FaBitcoin",
            title: "Referral Entries",
        },
        {
            id: 4,
            Icon: "HiTicket",
            title: "Referral Reward",
        },
        {
            id: 5,
            Icon: "BsGiftFill",
            title: "USDT Tokens",
        },
        {
            id: 6,
            Icon: "FaBitcoin",
            title: "DMZT tokens",
        },
    ];

    for (const key in objMap) {
        if (findData[key] !== undefined) {
           

            Obj[objMap[key]].amountText = findData[key];
            
        }
    }

    return NextResponse.json(Obj);
}