import { NextResponse } from 'next/server';
import User from "../../../../Modal/User";
import initDB from "../../../../helper/initDB";
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

function generateUsername() {

    const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    const username = "DG" + randomNumber;

    return username;
}

export async function POST(request) {

    const { decodedata } = await request.json();

    const parseIT = JSON.parse(decodedata)

    let Email = parseIT.email

    const sponserCode = generateSponsorCode()

    let Check_Email_Exists = await User.findOne({EmailId:Email}).lean()

    if (Check_Email_Exists) return NextResponse.json({ message: "Email Already Exists", status: false });

    const datasm = await User.create({
        UserName: generateUsername(),
        SponserCode: sponserCode,
        EmailId: Email,
        Passsword: null
    })

    await USDT_Wallets.create({ RecordOwner: datasm._id })

    await UserBasicInformation.create({ Owner: datasm._id, Email: Email })

    await ShortRecord.create({ Owner: datasm._id, Self_Entries: 1, USDT_Tokens: 1 })

    return NextResponse.json({ data: datasm, status: true });

}

