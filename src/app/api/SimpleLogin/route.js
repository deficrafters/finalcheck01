import { NextResponse } from 'next/server';
import initDB from "../../../helper/initDB";
import User from "../../../Modal/User";
// import bcrypt from 'bcrypt'


initDB()

export async function POST(request) {

  const { identifier, password } = await request.json();

  // console.log({ identifier, password })

  if (!identifier || !password) {
    return NextResponse.json({ error: "You Have Not Provided All The Informations", status: false });
  }
  
  if (1==2) {
    return NextResponse.json({ error: "Please Enter UserID", status: false });
  } else {
    
    const number = await User.findOne({ EmailId: identifier });
    
    if (!number) {
      return NextResponse.json({ error: "User Don't Exists", status: false });
    }
  

    const doMatch = password == number.Passsword


    // console.log({password})
    // console.log({passwordr:number.Passsword})

    if (doMatch) {
      // res.status(201).json(number);
      return NextResponse.json({ data: number, status: true });

    } else {
      return NextResponse.json({ error: "userid or password don't match", status: false });
      // return res.status(401).json({ error: "userid or password don't match" });

    }
  }






  // return NextResponse.json({ error: "Please Enter Email ID", status: false });
}