import { NextResponse } from 'next/server';
import User from "../../../Modal/User";
import initDB from "../../../helper/initDB";
import ShortRecord from '@/Modal/ShortRecord';
import UserBasicInformation from '@/Modal/UserBasicInformation';
import Affiliates from '@/Modal/Affiliates';
import USDT_Wallets from '@/Modal/Wallets/USDT/USDT_Wallets';


initDB()

function generateSponsorCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let sponsorCode = '';
  for (let i = 0; i < 6; i++) {
    sponsorCode += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return sponsorCode;
}

export async function POST(request) {

  const { walletAddress, Ref } = await request.json();

  if (!walletAddress) {
    return NextResponse.json({ error: "You Have Not Provided Wallet Address", status: false });
  }

  const Find_Data = await User.findOne({ WalletAddress: walletAddress }).lean()

  if (Find_Data) {

    return NextResponse.json({ status: true, data: Find_Data, openModal: false });

  } else {

    const sponserCode = generateSponsorCode()

    function generateUsername() {

      const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

      const username = "DG" + randomNumber;

      return username;
    }

    const data = await User.create({
      UserName: generateUsername(),
      SponserCode: sponserCode,
      WalletAddress: walletAddress,
      ReferralID: Ref
    })

    await USDT_Wallets.create({RecordOwner:data._id})

    await UserBasicInformation.create({ Owner: data._id })

    await ShortRecord.create({ Owner: data._id, Self_Entries: 1, USDT_Tokens: 1 })

    if (Ref) {

      await User.findByIdAndUpdate({ _id: Ref }, { $inc: { ReferWallet: 1 } })

      let fetchShort = await ShortRecord.findOne({ Owner: Ref })

      await ShortRecord.findByIdAndUpdate({ _id: fetchShort._id }, { $inc: { Referral_Reward: 0.5 } })
      await ShortRecord.findByIdAndUpdate({ _id: fetchShort._id }, { $inc: { Referral_Entries: 1 } })

      const findUser = await User.findOne({ _id: fetchShort.Owner }).lean()

      await Affiliates.create({
        RecordOwner: fetchShort.Owner,
        FromUserID: data._id,
        FromUserName: data.UserName,
        ToUserID: fetchShort.Owner,
        ToUserName: findUser.UserName,
        Reward: 0.5
      })

    }
    return NextResponse.json({ status: true, data, openModal: true });

  }

}