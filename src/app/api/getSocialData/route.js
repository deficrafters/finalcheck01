import { NextResponse } from 'next/server';
import SocialEntriesRecord from "../../../Modal/SocialEntriesRecord"
import initDB from "../../../helper/initDB";
// import icon1 from "../../../assets/images/home/icons/twitterwhite.png";
// import icon2 from "@/assets/images/home/icons/instagram.png";
// import icon3 from "@/assets/images/home/icons/telegram.png";
// import icon4 from "@/assets/images/home/icons/discord.png";

initDB()

export async function POST(request) {



    let ArrayList = [
        {
			id: 1,
			SocialIcon: "icon1",
			socialHandle: "Dreamgamezcoin",
			socialPlatform: "Twitter",
			isClaimed: false,
		},
		{
			id: 2,
			SocialIcon: "icon2",
			socialHandle: "DreamGames",
			socialPlatform: "Instagram",
			isClaimed: false,
		},
		{
			id: 3,
			SocialIcon: "icon3",
			socialHandle: "DreamGames",
			socialPlatform: "Telegram",
			isClaimed: false,
		},
		{
			id: 4,
			SocialIcon: "icon4",
			socialHandle: "DreamGames",
			socialPlatform: "Discord",
			isClaimed: false,
		},
    ]

    const {ids} = await request.json();

   const FindDatas = await SocialEntriesRecord.find({Owner:ids}).lean()

	// console.log(FindDatas)


   const Find_If_Twitter = FindDatas.filter((e)=>e.SocialType == "Twitter")
   const Find_If_Instagram = FindDatas.filter((e)=>e.SocialType == "Instagram")
   const Find_If_Telegram = FindDatas.filter((e)=>e.SocialType == "Telegram")
   const Find_If_Discord = FindDatas.filter((e)=>e.SocialType == "Discord")


   
   
   
   


   if (Find_If_Twitter.length > 0) {
    ArrayList[0].isClaimed = true
   }
   if (Find_If_Instagram.length > 0) {
    ArrayList[1].isClaimed = true
   }
   if (Find_If_Telegram.length > 0) {
    ArrayList[2].isClaimed = true
   }
   if (Find_If_Discord.length > 0) {
    ArrayList[3].isClaimed = true
   }


    return NextResponse.json(ArrayList);

}
