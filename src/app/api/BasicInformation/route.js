import { NextResponse } from 'next/server';
import initDB from "../../../helper/initDB"
import User from "../../../Modal/User"
import UserBasicInformation from "../../../Modal/UserBasicInformation"

initDB()

export async function POST(request) {

    const { ids } = await request.json();

    const findUser = await User.findOne({_id:ids}).lean()
    const findUserBasicInformation = await UserBasicInformation.findOne({Owner:findUser._id}).lean()
    
    return NextResponse.json(findUserBasicInformation);

}

