import { NextResponse } from 'next/server';
import DepositWalletTransaction from "../../../../Modal/Wallet/DepositWalletTransaction";
import initDB from "../../../../helper/initDB";

initDB()

export async function POST(request) {

    const { ids, Type } = await request.json();

    var FindData

    if (Type == "All") {

        FindData = await DepositWalletTransaction.find({ RecordOwner: ids }).lean()

    } else {

        FindData = await DepositWalletTransaction.find({ RecordOwner: ids, Type: Type }).lean()

    }


    return NextResponse.json({ data: FindData, status: true });

}