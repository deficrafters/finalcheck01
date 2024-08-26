import { NextResponse } from 'next/server';
import Affiliates from "../../../Modal/Affiliates"
import initDB from "../../../helper/initDB";

initDB()

export async function POST(request) {

    const { checked } = await request.json();

    var getDta

    if (checked) {
        getDta = await Affiliates.find().lean()
    } else {

        const sevenDaysAgo = new Date();

        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        getDta = await Affiliates.find({ createdAt: { $gte: sevenDaysAgo } }).lean();

    }

    let mergedData = {};

    getDta.forEach((item,index) => {

        if (mergedData[item.ToUserName]) {

            mergedData[item.ToUserName].Reward += item.Reward;
            mergedData[item.ToUserName].numbers += 1;

        } else {

            mergedData[item.ToUserName] = { ...item,numbers:1 };
        }
    });


    let ArryNewOne = []

    Object.keys(mergedData).map((hit,index)=>{
        
        ArryNewOne.push(mergedData[hit]) 

    })

    const sortedArray = ArryNewOne.sort((a, b) => b.numbers - a.numbers); // <==== in decending order

    return NextResponse.json(sortedArray);
}