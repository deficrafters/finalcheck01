import { NextResponse } from 'next/server';
import Affiliates from "../../../Modal/Affiliates"
import initDB from "../../../helper/initDB";

initDB()

export async function POST(request) {

    const { ids } = await request.json();

    // console.log({ids})

    
    const getDta = await Affiliates.find({ RecordOwner: ids }).lean()

    return NextResponse.json(getDta);
}