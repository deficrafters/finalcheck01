import { NextResponse } from 'next/server';
import initDB from "../../../helper/initDB"
import SpinWheel from "../../../Modal/SpinWheel"


initDB()

export async function POST(request) {
    const { ids } = await request.json();

    const FindData = await SpinWheel.find({RecordOwner:ids})

    // console.log(FindData)

    if (FindData.length > 0) {
        return NextResponse.json({
            CanSpinWheel: false,
            GotAmount:FindData[0].Amount
        });
    } else {
        return NextResponse.json({
            CanSpinWheel: true,
            GotAmount:FindData[0].Amount
        });
    }

}

