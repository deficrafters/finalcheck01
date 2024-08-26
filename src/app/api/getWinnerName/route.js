import { NextResponse } from 'next/server';
import WinnerCoinQuestPool from "../../../Modal/CoinQuest/WinnerCoinQuestPool";
import User from "../../../Modal/User";
import initDB from '@/helper/initDB';

initDB()

export async function POST(request) {

    const { gameID } = await request.json();

    console.log("==========================")
    console.log({gameID})
    console.log("==========================")


    const SearchTheWinner = await WinnerCoinQuestPool.findOne({ GameID: gameID }).lean()

    if (!SearchTheWinner) {
        return NextResponse.json({ msg: "No Winner Found" });
    }

    let find_Winer_Name = await User.findOne({_id:SearchTheWinner.Winner_Owner}).lean()

    return NextResponse.json({ WinnerName:find_Winer_Name.SponserCode });

}