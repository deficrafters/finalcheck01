import { NextResponse } from 'next/server';
import User from "../../../../Modal/User";
import ForgetPasswordModal from "../../../../Modal/ForgetPasswordModal";
import initDB from "../../../../helper/initDB";
import sgMail from "@sendgrid/mail"
import VerifyToken from '@/Modal/VerifyToken';
import nodemailer from "nodemailer";

initDB()

export async function POST(request) {

    const { identifier, otp, newPassword } = await request.json();

    // console.log({ identifier, otp })

    let Find_Dtaa = await ForgetPasswordModal.findOne({ identifier: identifier }).lean()

    // console.log(Find_Dtaa)

    if (!Find_Dtaa) return NextResponse.json({ message: "Please Try Again Later", status: false });

    if (Find_Dtaa.otp !== otp) return NextResponse.json({ message: "OTP Do'nt Match", status: false });

    await User.findByIdAndUpdate({ _id: Find_Dtaa.Real_User_Id }, { Passsword: newPassword }).lean()

    await ForgetPasswordModal.findByIdAndDelete(Find_Dtaa._id)

    return NextResponse.json({ message: "Password Chnaged Please Login.", status: true });


}