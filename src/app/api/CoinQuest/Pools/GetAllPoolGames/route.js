import { NextResponse } from 'next/server';
import CoinQuestPool from "../../../../../Modal/CoinQuest/CoinQuestPool";
import initDB from "../../../../../helper/initDB";

initDB()

export async function POST(request) {

    // const { } = await request.json(); // TAKING NOTHING 

    const Find_All_Pools = await CoinQuestPool.find().lean()

    const Arr = [
        {
            Title: "3 ETH",
            EntryPrice: "10 USDT",
            MaxBettingSlot: "1500",
            WiningTimeline: "30 days or early"
        },
        {
            Title: "1000 XRP",
            EntryPrice: "12 USDT",
            MaxBettingSlot: "1500",
            WiningTimeline: "30 days or early"
        },
        {
            Title: "BNB 10",
            EntryPrice: "13 USDT",
            MaxBettingSlot: "1500",
            WiningTimeline: "30 days or early"
        },
        {
            Title: "USDT 1000",
            EntryPrice: "14 USDT",
            MaxBettingSlot: "1500",
            WiningTimeline: "30 days or early"
        },
        {
            Title: "USDT 1000",
            EntryPrice: "15 USDT",
            MaxBettingSlot: "1500",
            WiningTimeline: "30 days or early"
        }
    ]

    return NextResponse.json(Find_All_Pools);

}