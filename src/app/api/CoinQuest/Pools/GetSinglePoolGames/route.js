import { NextResponse } from 'next/server';
import CoinQuestPool from "../../../../../Modal/CoinQuest/CoinQuestPool";
import initDB from "../../../../../helper/initDB";

initDB()

export async function POST(request) {

    const { identifier } = await request.json();  

    const Find_All_Pools = await CoinQuestPool.findOne({_id:identifier}).lean()

    const currentGMTTime = new Date().toUTCString();

    let Dat1 = JSON.stringify(Find_All_Pools)
    
    let Dat2 = JSON.stringify({Current_GMT_Time:currentGMTTime})

    let Merge_Obj = {...JSON.parse(Dat1),...JSON.parse(Dat2)}

    return NextResponse.json(Merge_Obj);

}