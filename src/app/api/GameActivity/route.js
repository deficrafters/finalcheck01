import { NextResponse } from 'next/server';
import GamingActivities from "../../../Modal/GamingActivity/GamingActivities"
import initDB from '@/helper/initDB';

initDB()

export async function POST(request) {

//    const { id } = request.body
   const { id } = await request.json();

   console.log({id})

   const FindData = await GamingActivities.find({GameOwner:id}).lean()

    return NextResponse.json(FindData);
}