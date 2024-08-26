import { NextResponse } from 'next/server';
import User from "../../../Modal/User";
import initDB from "../../../helper/initDB";

initDB()

export async function POST(request) {

    const { ids, address } = await request.json();

  //  console.log({ ids, address })

    if (!ids) return NextResponse.json({ message: "Please Pass Required Param", status: false });

    let getUserData = await User.findOne({WalletAddress:address}).lean()

    if (getUserData) return NextResponse.json({ message: "Wallet Address Already Connected With Another Account.", status: false });

    await User.findByIdAndUpdate({_id:ids},{WalletAddress:address})

    return NextResponse.json({ message: "Wallet Address Updated", status: true });

    // const FindUser = await User.findOne({ _id: ids }).lean()

    // if (!FindUser) return NextResponse.json({ message: "User Is Not Correct", status: false });


}