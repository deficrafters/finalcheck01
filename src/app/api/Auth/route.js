import { NextResponse } from 'next/server';
import User from "../../../Modal/User";
import initDB from "../../../helper/initDB";
import VerifyToken from '@/Modal/VerifyToken';
import ShortRecord from '@/Modal/ShortRecord';
import Affiliates from '@/Modal/Affiliates';
import UserBasicInformation from '@/Modal/UserBasicInformation';
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

    try {

        const { token, search2, wallet } = await request.json();

        console.log({ token, search2, wallet })

        if (search2 == "No") {

            const findVerifyToken = await VerifyToken.findOne({ TokenAddress: token }).lean()

            if (!findVerifyToken) return NextResponse.json({ error: "Token Expired", status: false });

            const sponserCode = generateSponsorCode()

            function generateUsername() {

                const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

                const username = "DG" + randomNumber;

                return username;
            }

            const datasm = await User.create({
                UserName: generateUsername(),
                SponserCode: sponserCode,
                EmailId: findVerifyToken.Email,
                Passsword: findVerifyToken.Password,
                ReferralID: findVerifyToken.ReferralID
            })

            await USDT_Wallets.create({ RecordOwner: datasm._id })

            await UserBasicInformation.create({ Owner: datasm._id, Email: findVerifyToken.Email })

            const datasms = await ShortRecord.create({ Owner: datasm._id, Self_Entries: 1, USDT_Tokens: 1 })

            if (findVerifyToken.ReferralID) {

                await User.findByIdAndUpdate({ _id: findVerifyToken.ReferralID }, { $inc: { ReferWallet: 1 } })

                let fetchShort = await ShortRecord.findOne({ Owner: findVerifyToken.ReferralID })

                await ShortRecord.findByIdAndUpdate({ _id: fetchShort._id }, { $inc: { Referral_Reward: 0.5 } })
                await ShortRecord.findByIdAndUpdate({ _id: fetchShort._id }, { $inc: { Referral_Entries: 1 } })

                const findUser = await User.findOne({ _id: fetchShort.Owner }).lean()

                await Affiliates.create({
                    RecordOwner: fetchShort.Owner,
                    FromUserID: datasm._id,
                    FromUserName: datasm.UserName,
                    ToUserID: fetchShort.Owner,
                    ToUserName: findUser.UserName,
                    Reward: 0.5
                })

            }

            await VerifyToken.findByIdAndDelete(findVerifyToken._id)

            return NextResponse.json({ data: datasm, status: true });

        } else {

            const findVerifyToken = await VerifyToken.findOne({ TokenAddress: token }).lean()

            console.log({findVerifyToken})

            if (!findVerifyToken) return NextResponse.json({ error: "Token Expired", status: false });

            const datasm = await User.findOne({ WalletAddress: wallet }).lean()

            console.log({datasm})

            await User.findByIdAndUpdate({ _id: datasm._id }, { EmailId: findVerifyToken.Email, Passsword: findVerifyToken.Password })

            return NextResponse.json({ data: datasm, status: true });

        }

    } catch (error) {
        console.log("Some Error =========> ")
        console.log(error)
    }

}