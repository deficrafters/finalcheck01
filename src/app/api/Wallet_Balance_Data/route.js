import { NextResponse } from 'next/server';
import initDB from "../../../helper/initDB"
import Wallets from "../../../Modal/Wallets/USDT/USDT_Wallets"
import ShortRecord from "../../../Modal/ShortRecord"

initDB()

export async function POST(request) {

    const { _id } = await request.json();

    const Get_ShortRecord_Data = await ShortRecord.findOne({Owner:_id}).lean()

    const Get_Wallet_Data = await Wallets.findOne({RecordOwner:_id}).lean()

    let Total_Balance = Get_Wallet_Data.Deposit_Wallet_USDT + Get_Wallet_Data.Winning_Wallet_USDT

    let Bonus_Balance = Get_ShortRecord_Data.Referral_Reward + Get_ShortRecord_Data.Spin_Reward + Get_ShortRecord_Data.Signup_Bonus

    let Bonus_Balance_DMTZ = Get_ShortRecord_Data.DGT_tokens + Get_ShortRecord_Data.Coin_Quest_Free_Winning_DMTZ + Get_Wallet_Data.Winning_Wallet_DMTZ

    return NextResponse.json({
        Total_Balance,
        Bonus_Balance,
        Bonus_Balance_DMTZ
    });

}

