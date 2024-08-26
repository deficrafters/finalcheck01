import { NextResponse } from 'next/server';
import SocialEntriesRecord from "../../../Modal/SocialEntriesRecord"
import initDB from "../../../helper/initDB";
import ShortRecord from "../../../Modal/ShortRecord";

initDB()

export async function POST(request) {

    const { userName, UserId, SocialType } = await request.json();

    // console.log({ userName, UserId, SocialType })

    const datas = await SocialEntriesRecord.create({
        Owner: UserId,
        SocialType: SocialType,
        GotEntries: 5,
        UserName: userName
    })

    let FindShortRec = await ShortRecord.findOne({ Owner: UserId })

    let dates = await ShortRecord.findByIdAndUpdate({ _id: FindShortRec._id }, { $inc: { Self_Entries: 1 } });



    // console.log(dates)
    // console.log(dateds)


    return NextResponse.json("Done");

}