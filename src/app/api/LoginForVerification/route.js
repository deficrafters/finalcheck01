import { NextResponse } from 'next/server';
import User from "../../../Modal/User";
import initDB from "../../../helper/initDB";
import sgMail from "@sendgrid/mail"
import VerifyToken from '@/Modal/VerifyToken';
import nodemailer from "nodemailer";
import { FROM, HOST, PASS, PORT, SECURE, TLS, USER } from "../../../helper/BASE_URL"

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

  const { identifier, password, fromMetamask, ReferralID } = await request.json();

  if (!identifier || !password) return NextResponse.json({ error: "You Have Not Provided All The Informations", status: false });

  const token = generateToken(8);

  let checkIfAlreadyHave = await User.findOne({ EmailId: identifier }).lean()

  if (checkIfAlreadyHave) return NextResponse.json({ error: "Email Already Exists.", status: false });

  const createToken = await VerifyToken.create({
    TokenAddress: token,
    Email: identifier,
    Password: password,
    ReferralID
  })


  if (1 == 1) {

    let transporter = nodemailer.createTransport({
      host: HOST,
      port: PORT,
      secure: SECURE, // true for 465, false for other ports
      tls: TLS,
      auth: {
        user: USER, // Your email address
        pass: PASS// Your password
      }
    });

    // Email content
    let mailOptions = {
      from: FROM, // Sender address
      to: identifier, // List of recipients
      subject: 'Verify Your DreamGameZ Account', // Subject line
      text: 'Verify Your DreamGameZ Account', // Plain text body
      // text:`https://dreamgamez.io?verify=${token}&fromMetamask=${fromMetamask ? "Yes" : "No"}`
      html: `
      Hi,
      <br/>
Tap the link below to complete the signup process and to activate your DreamGameZ account.

<div style="display: flex; justify-content: center;">
<a target="__blank" href=https://dreamgamez.io?verify=${token}&fromMetamask=${fromMetamask ? "Yes" : "No"}>                        
  <button style="
      margin-top: 1.5rem; 
      width: 100%; 
      border-width: 2px; 
      border-color: rgb(35, 211, 129); 
      text-transform: uppercase; 
      box-shadow: 0 10px 20px -10px rgba(67, 97, 238, 0.44);">
      Verify
  </button>
  </a>
</div>


For your security the link will expire in 24 hours time.

See you soon!
<br/>
If you did not make this request, you can simply delete this message. You will not be signed up, and no account will be created for you. 
      
      `

    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      //  console.log('Message sent: %s', info.messageId);
    });

    return NextResponse.json({ message: "Email Send", status: true });

  } else {

    return NextResponse.json({ error: "Please Enter Email ID", status: false });

  }

}