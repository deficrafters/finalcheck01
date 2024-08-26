import { NextResponse } from 'next/server';
import User from "../../../../Modal/User";
import ForgetPasswordModal from "../../../../Modal/ForgetPasswordModal";
import initDB from "../../../../helper/initDB";
import sgMail from "@sendgrid/mail"
import VerifyToken from '@/Modal/VerifyToken';
import nodemailer from "nodemailer";
import { FROM, HOST, PASS, PORT, SECURE, TLS, USER } from '@/helper/BASE_URL';

initDB()

function generateToken(length) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let token = '';
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		token += characters[randomIndex];
	}
	return token;
}

export async function POST(request) {

	const { identifier } = await request.json();

	console.log({ identifier })

	if (!identifier) return NextResponse.json({ message: "You Have Not Provided All The Informations", status: false });

	const Find_User_Validity = await User.findOne({ EmailId: identifier }).lean()

	if (!Find_User_Validity) return NextResponse.json({ message: "No User Found With This Email.", status: false });

	const token = generateToken(4);

	const Create_ForgetPasswordModal = await ForgetPasswordModal.create({
		RecordOwner: Find_User_Validity._id,
		identifier: identifier,
		otp: token,
		Real_User_Id: Find_User_Validity._id
	})

	if (1 == 1) {

		// Create a transporter using SMTP
		let transporter = nodemailer.createTransport({
			host: HOST,
			port: PORT,
			secure: SECURE, // true for 465, false for other ports
			tls:TLS,
			auth: {
			  user: USER, // Your email address
			  pass: PASS// Your password
			}
		  });

		// Email content
		let mailOptions = {
			from: FROM, // Sender address
			to: identifier, // List of recipients
			subject: 'Verify Your Dream Games Account (Forget Password)', // Subject line
			text: 'Verify Your Dream Games Account (Forget Password)', // Plain text body
			text: `${token}`
		
		};

		// Send mail with defined transport object
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log('Message sent: %s', info.messageId);
		});


		return NextResponse.json({ message: "Email Send", status: true });

	} else {

		return NextResponse.json({ message: "Please Enter Email ID", status: false });

	}

}