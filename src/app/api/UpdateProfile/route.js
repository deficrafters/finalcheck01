import { NextResponse } from 'next/server';
import initDB from "../../../helper/initDB"
import User from "../../../Modal/User"
import UserBasicInformation from "../../../Modal/UserBasicInformation"

initDB()

export async function POST(request) {

    const { firstName, lastName, email, number, country, pinCode, dialCode, id } = await request.json();

    // console.log({ firstName, lastName, email, number, country, pinCode, dialCode, id })

    const findUser = await User.findOne({ _id: id }).lean()

    const findUserBasicInformationData = await UserBasicInformation.findOne({ Owner: findUser._id })

    const findUserBasicInformation = await UserBasicInformation.findByIdAndUpdate({ _id: findUserBasicInformationData._id }, {
        Fname: firstName,
        Lname: lastName,
        Email: email,
        ContactNumber: number,
        Country: country,
        PinCode: pinCode,
        DialCode: dialCode
    }).lean()

    return NextResponse.json(findUserBasicInformation);

}

