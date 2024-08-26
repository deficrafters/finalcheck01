import { NextResponse } from 'next/server';
import CoinQuestPool from "../../../../../Modal/CoinQuest/CoinQuestPool";
import initDB from "../../../../../helper/initDB";
import moment from 'moment-timezone';

initDB();

const Data = {
    currency: "USDT",
    name: "200 USDT",
    image: "/Thumbnail-Art_01.jpg",
    route: "/games/coin-quest/game",
    amount: 2,
    prizeValue: 200,
    bettingslots: 2,
    timeline: "6 August 2024 4:00 AM",
    winningscheme: "guaranteed winner",
    soldOutTickets: { total: 150, sold: 0 },
    isFree:false
};

export async function POST(request) {

    const { isHuman } = await request.json();

    if (!isHuman) return NextResponse.json(`Sorry This Cant Be Continued`);

    let ParseIt = Data;

    const Both_Dates = Get_IST_And_GMT(ParseIt.timeline);

    await CoinQuestPool.create({
        currency: ParseIt.currency,
        name: ParseIt.name,
        image: ParseIt.image,
        route: ParseIt.route,
        amount: ParseIt.amount,
        prizeValue: ParseIt.prizeValue,
        bettingslots: ParseIt.bettingslots,
        timeline: Both_Dates.GMT_DATE,
        timelineIST: Both_Dates.IST_DATE,
        winningscheme: ParseIt.winningscheme,
        soldOutTickets: ParseIt.soldOutTickets,
        isFree:ParseIt.isFree
    })

    return NextResponse.json(`Game Pool Created`);
}

const Get_IST_And_GMT = (istDateString) => {

    const istDate = moment.tz(istDateString, 'DD MMMM YYYY hh:mm A', 'Asia/Kolkata');

    const gmtDate = istDate.clone().tz('Etc/GMT');

    const istDateStringFormatted = istDate.format('DD MMMM YYYY hh:mm A') + ' IST';

    const gmtDateStringFormatted = gmtDate.format('DD MMMM YYYY hh:mm A') + ' GMT';

    return { IST_DATE: istDateStringFormatted, GMT_DATE: gmtDateStringFormatted };
};


// async function getCurrentGmtTime() {
//     try {
//         const response = await fetch('http://worldtimeapi.org/api/timezone/Etc/UTC');
//         if (!response.ok) {
//             throw new Error('Failed to fetch GMT time');
//         }
//         const data = await response.json();
//         return data.utc_datetime; // Example output: "2024-06-30T12:00:00.000Z"
//     } catch (error) {
//         console.error('Error fetching GMT time:', error);
//         return null;
//     }
// }

// getCurrentGmtTime().then((gmtTime) => {
//     console.log('Current GMT Time:', gmtTime);
// });