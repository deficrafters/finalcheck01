import { NextResponse } from 'next/server';
import USDT_Wallets from "../../../Modal/Wallets/USDT/USDT_Wallets";
import initDB from '@/helper/initDB';

initDB()

export async function POST(request) {

    const { ids } = await request.json();

  //  console.log({ids})
    const Find_Data = await USDT_Wallets.findOne({ RecordOwner: ids }).lean()
  //  console.log("=================")
  //  console.log(Find_Data)
  //  console.log("=================")

    return NextResponse.json({ data: Find_Data, status: true });

}