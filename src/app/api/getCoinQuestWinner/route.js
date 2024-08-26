import { NextResponse } from 'next/server';
import initDB from "../../../helper/initDB"
import WinnerCoinQuestPool from "../../../Modal/CoinQuest/WinnerCoinQuestPool"
import User from "../../../Modal/User"

initDB()

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


export async function POST(request) {

    const { ids } = await request.json();

    let All_Jackpot_Data = []
    let All_CoinQuest_Data = []

    const [All_WinnerCoinQuestPool,All_User] = await Promise.all([
        WinnerCoinQuestPool.find().sort({ _id: -1 }).limit(10),
        User.find()
    ]);


    for (let index = 0; index < All_WinnerCoinQuestPool.length; index++) {
        
        const element = All_WinnerCoinQuestPool[index];

        const Find_User = All_User.find((e)=>(e._id).toString() === element.Winner_Owner)

        All_CoinQuest_Data.push({
            Game:"Coin Quest",
            Winner:Find_User.UserName,
            Won:element.Winning_Amount,
            winningDate:element.createdAt
        })
    }

    let combinedArray = All_Jackpot_Data.concat(All_CoinQuest_Data);

    let Final_List = shuffle(combinedArray);

    return NextResponse.json(Final_List);

}

