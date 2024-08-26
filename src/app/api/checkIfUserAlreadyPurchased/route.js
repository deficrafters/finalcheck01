import { NextResponse } from 'next/server';
import initDB from "../../../helper/initDB"
import CoinQuestPool from "../../../Modal/CoinQuest/CoinQuestPool"
import BuyCoinQuestPool from "../../../Modal/CoinQuest/BuyCoinQuestPool"

initDB()

export async function POST(request) {

    const { poolID,userID } = await request.json();

    const FindData = await CoinQuestPool.findOne({_id:poolID,})  

    const FindUser = await BuyCoinQuestPool.findOne({owner:userID,name:FindData.name})  

    var Already_Purchased = false

    if (FindUser) {
        Already_Purchased = true
    }

    return NextResponse.json(Already_Purchased);

}

