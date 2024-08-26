import { NextResponse } from 'next/server';
import BuyCoinQuestPool from "../../../Modal/JackpotMadness/PurchasedJackpotTicket"
import WinnerCoinQuestPool from "../../../Modal/JackpotMadness/JackpotWinners"
import User from "../../../Modal/User"
import initDB from "../../../helper/initDB";

initDB()

export async function POST(request) {

    const { name } = await request.json();

    var getDta

    if (name) {
        getDta = await BuyCoinQuestPool.find({ game:name }).sort({ _id: -1 }).limit(5)
    } else {
        getDta = await WinnerCoinQuestPool.find().sort({ _id: -1 }).limit(5)
    }

    let Arr = []
 
    for (let index = 0; index < getDta.length; index++) {

        const element = getDta[index];

        var findData

        if (name) {
            findData = await User.findOne({ _id: element.owner }).select("UserName")

        } else {
            // Winner_Owner
            findData = await User.findOne({ _id: element.Winner_Owner }).select("UserName")
        }

        let dat1 = JSON.stringify(findData)
        let dat2 = JSON.stringify(element)

        let obj = { ...JSON.parse(dat1), ...JSON.parse(dat2) }

        Arr.push(obj)

    }

    return NextResponse.json(Arr);
}

