import { NextResponse } from 'next/server';
import CoinQuestPool from "../../../../../Modal/CoinQuest/CoinQuestPool";
import BuyCoinQuestPool from "../../../../../Modal/CoinQuest/BuyCoinQuestPool";
import WinnerCoinQuestPool from "../../../../../Modal/CoinQuest/WinnerCoinQuestPool";
import ShortRecord from "../../../../../Modal/ShortRecord";
import USDT_Wallets from "../../../../../Modal/Wallets/USDT/USDT_Wallets";
import initDB from "../../../../../helper/initDB";

initDB()

export async function POST(request) {

    const getAllDta = await CoinQuestPool.find({ WinerChoosed: false }).lean()

    var DeletedCount = 0


    for (let index = 0; index < getAllDta.length; index++) {

        var Obj = {}

        const element = getAllDta[index];

        const createdAt = element.createdAt

        const today = new Date();

        const timeDifference = Math.abs(today.getTime() - createdAt.getTime());

        const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

        let EndtimME = 30

        function getFormattedFutureDate(dayDifference) {
            const currentDate = new Date();
            const futureDate = new Date(currentDate);

            // Add 10 days to the current date
            futureDate.setDate(currentDate.getDate() + dayDifference);

            // Extract the parts of the date
            const day = futureDate.getDate().toString().padStart(2, '0');
            const month = futureDate.toLocaleString('en-GB', { month: 'long' });
            const year = futureDate.getFullYear();
            const hours = futureDate.getHours().toString().padStart(2, '0');
            const minutes = futureDate.getMinutes().toString().padStart(2, '0');

            // Construct the formatted date string
            const formattedDate = `${day} ${month} ${year} ${hours}:${minutes}`;

            return formattedDate;
        }

        if (element.soldOutTickets.sold >= element.soldOutTickets.total || daysDifference >= EndtimME) {

            Obj = element

            let findAllPurchaseTicketOfThis = await BuyCoinQuestPool.find({ name: element.name }).lean()

            if (findAllPurchaseTicketOfThis.length == 0) {

                // ! HIDE THIS POOL AS IS IT FULL / DATE OVER

                // DeletedCount += 1

                // ! CREATING NEW POOL


                let Game_Created_Date = Obj.createdAt 
                let Game_End_Date = Obj.timeline

                const parsedGameCreatedDate = new Date(Game_Created_Date);

                const parsedGameEndDate = new Date(Game_End_Date);

                const timeDifference = parsedGameEndDate - parsedGameCreatedDate;

                const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

                await CoinQuestPool.create({
                    currency: Obj.currency,
                    name: Obj.name,
                    image: Obj.image,
                    route: Obj.route,
                    amount: Obj.amount,
                    prizeValue: Obj.prizeValue,
                    bettingslots: Obj.bettingslots,
                    timeline: getFormattedFutureDate(dayDifference),
                    winningscheme: Obj.winningscheme,
                    soldOutTickets: { total: 10, sold: 0 }
                })


                continue;
            }

            const randomElement = findAllPurchaseTicketOfThis[Math.floor(Math.random() * findAllPurchaseTicketOfThis.length)];

            let Winner = randomElement

            const Find_Short_Rec = await ShortRecord.findOne({ Owner: Winner.owner }).lean()

            var sam = Winner.name

            var winning_amount = sam.replace(/DMZT|USDT/, "").trim();

            await WinnerCoinQuestPool.create({
                Winner_Owner: Winner.owner,
                Winning_Amount: Number(winning_amount),
                currency: Winner.currency,
                name: Winner.name,
                image: Winner.image,
                route: Winner.route,
                amount: Winner.amount,
                prizeValue: Winner.prizeValue,
                bettingslots: Winner.bettingslots,
                timeline: Winner.timeline,
                winningscheme: Winner.winningscheme,
                soldOutTickets: 0,
                GameID: element._id
            })

            // await CoinQuestPool.findByIdAndUpdate({_id:""},{WinerChoosed:})

            if (element.isFree) {

                const Find_Walllet = await USDT_Wallets.findOne({ RecordOwner: Winner.owner }).lean()


                await USDT_Wallets.findByIdAndUpdate({ _id: Find_Walllet._id }, { $inc: { Winning_Wallet_DMTZ: Number(winning_amount) } })

            } else {

                if (!Winner.includeFreeTicket) {

                    await ShortRecord.findByIdAndUpdate({ _id: Find_Short_Rec._id }, { $inc: { Coin_Quest_Paid_Winning_USDT: Number(winning_amount) } })

                    const Find_Walllet = await USDT_Wallets.findOne({ RecordOwner: Winner.owner }).lean()

                    await USDT_Wallets.findByIdAndUpdate({ _id: Find_Walllet._id }, { $inc: { Winning_Wallet_USDT: Number(winning_amount) } })

                } else {
                    const Find_Walllet = await USDT_Wallets.findOne({ RecordOwner: Winner.owner }).lean()


                    await USDT_Wallets.findByIdAndUpdate({ _id: Find_Walllet._id }, { $inc: { Winning_Wallet_DMTZ: Number(winning_amount) } })
                }




            }



            await CoinQuestPool.findByIdAndUpdate({ _id: element._id }, { WinerChoosed: true })


            // ! HIDE THIS POOL AS IS IT FULL / DATE OVER

            // await CoinQuestPool.findByIdAndUpdate({ _id: element._id }, { Display: false })

            DeletedCount += 1

            // ! CREATING NEW POOL

            await CoinQuestPool.create({
                currency: Obj.currency,
                name: Obj.name,
                image: Obj.image,
                route: Obj.route,
                amount: Obj.amount,
                prizeValue: Obj.prizeValue,
                bettingslots: Obj.bettingslots,
                timeline: getFormattedFutureDate(),
                winningscheme: Obj.winningscheme,
                soldOutTickets: { total: 10, sold: 0 }
            })

        }

    }


    return NextResponse.json({ status: true, message: DeletedCount == 0 ? `No One Is Eligibal For Coin Quest Game Winner.` : `Winner Token Distributed And ${DeletedCount} Pools Has Been Created.` });

}