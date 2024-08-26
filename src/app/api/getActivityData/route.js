import { NextResponse } from 'next/server';
import BuyCoinQuestPool from "../../../Modal/CoinQuest/BuyCoinQuestPool"
import WinnerCoinQuestPool from "../../../Modal/CoinQuest/WinnerCoinQuestPool"
import User from "../../../Modal/User"
import initDB from "../../../helper/initDB";

initDB()

export async function POST(request) {

    const { name ,poolID} = await request.json();

    console.log({name,poolID})

    var getDta

    if (name) {

        getDta = await BuyCoinQuestPool.find({poolID:poolID}).sort({ _id: -1 }).limit(5)

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
        
            findData = await User.findOne({ _id: element.Winner_Owner }).select("UserName")
        }

        let dat1 = JSON.stringify(findData)
        let dat2 = JSON.stringify(element)

        let obj = { ...JSON.parse(dat1), ...JSON.parse(dat2) }

        Arr.push(obj)

    }

    return NextResponse.json(Arr);
}