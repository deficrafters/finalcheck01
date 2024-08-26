import { NextResponse } from 'next/server';
import User from "../../../Modal/User";
import initDB from "../../../helper/initDB";

initDB()


export async function POST(request) {


    const { ids } = await request.json();

    console.log({ids})

    if (!ids) return NextResponse.json({ message: "Please Pass Required Param", status: false });

    const FindUser = await User.findOne({ _id: ids }).lean()

    if (!FindUser) return NextResponse.json({ message: "User Is Not Correct", status: false });

    console.log({datamine:FindUser.WalletAddress == "null"?null:FindUser.WalletAddress, status: true})

    return NextResponse.json({ data: FindUser.WalletAddress == "null"?null:FindUser.WalletAddress, status: true });

}