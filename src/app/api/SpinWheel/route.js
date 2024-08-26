import { NextResponse } from 'next/server';
import initDB from "../../../helper/initDB"
import User from "../../../Modal/User"
import SpinWheel from "../../../Modal/SpinWheel"
import ShortRecord from "../../../Modal/ShortRecord"

initDB()

export async function POST(request) {
  
  const { createRec,ids,prizes} = await request.json();

  if (createRec) {
  return  createRecord(ids,prizes)
  }

  const FindData = await SpinWheel.findOne().sort({_id:-1});

  // console.log(FindData)

  const currentDate = new Date();
  const createdAtDate = new Date(FindData.createdAt);

  // console.log(currentDate)

  const timeDifferenceMs = currentDate - createdAtDate;
  
  const minutes = Math.floor(timeDifferenceMs / (1000 * 60));
  const seconds = Math.floor((timeDifferenceMs / 1000) % 60);

  const isTimeDifferenceGreaterThanOrEqualTo10Minutes = timeDifferenceMs >= 10 * 60 * 1000;

  return NextResponse.json({
    status: isTimeDifferenceGreaterThanOrEqualTo10Minutes,
    All_Hours: `Minutes: ${minutes}, Seconds: ${seconds}`,
    hours:2,
    minutes:minutes,
    seconds:seconds
  });
}

const createRecord = async(ids,prizes) =>{

  await SpinWheel.create({
    RecordOwner:ids,
    Amount:prizes
  })

  let FindRecos = await ShortRecord.findOne({Owner:ids})

  await ShortRecord.findByIdAndUpdate({_id:FindRecos._id},{DGT_tokens:prizes})

  return NextResponse.json("done");

}