import { NextResponse } from 'next/server';
import initDB from "../../../helper/initDB"
import User from "../../../Modal/User"
import SocialEntriesRecord from "../../../Modal/SocialEntriesRecord"
import SpinWheel from "../../../Modal/SpinWheel"
import ShortRecord from "../../../Modal/ShortRecord"

initDB()

export async function POST(request) {

    const Find_All_Users = await User.find().countDocuments()

    var Contest_Entries = 0
    var DGT_Token = 0

    const Find_All_SocialEntriesRecord = (await ShortRecord.find()).map((hit)=>{
        Contest_Entries+=Number(hit.Self_Entries + hit.Referral_Entries)
    })

    const Gamig_Rewards = (await ShortRecord.find()).map((hit)=>{
        DGT_Token+=Number(hit.DGT_tokens)
    })
    // const Gamig_Rewards = await SpinWheel.aggregate([
    //     {
    //         $group: {
    //             _id: null,
    //             totalAmount: { $sum: "$Amount" }
    //         }
    //     }
    // ]);

    // const g_rewards = (Gamig_Rewards[0].totalAmount);

    return NextResponse.json({
        RegisteredUsers: Find_All_Users,
        CotestEntries: Contest_Entries,
        Gamig_Rewards: DGT_Token,
    });

}