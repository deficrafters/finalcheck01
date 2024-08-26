"use client";

import { useEffect, useState, useContext, Suspense } from "react";
import { content } from "@/utils/content.js";
import HeroSection from "@/components/homepage/HeroSection";
import GamesBar from "@/components/homepage/GamesBar";
import AnalyticsSection from "@/components/homepage/AnalyticsSection";
import TrendingGamesSection from "@/components/homepage/TrendingGamesSection";
import GameSection from "@/components/homepage/GameSection";
import PromotionSection from "@/components/homepage/PromotionSection";
import CoinQuestSection from "@/components/common/CoinQuestSection";
import JackpotSection from "@/components/homepage/JackpotSection";
import DreamZDualSection from "@/components/games/dreamz-dual/DreamzDualSection";
import DreamzThreeSection from "@/components/homepage/DreamzThreeSection";
import DreamzCasualSection from "@/components/homepage/DreamzCasualSection";
import FAQSection from "@/components/common/FAQSection";
import WinnerSection from "@/components/common/WinnerSection";
import { useRouter, useSearchParams } from 'next/navigation'
const { frequentQuestionsData } = content;
const { weeklyWinners } = content.table.winners;
const { dreamzDual } = content.sectionData;
import LoginFormContext from "@/components/context/global/GlobalContext";
import axios from "axios";
import LoginForm from "@/components/common/LoginForm";
import toast from "react-hot-toast";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 

export default function Home() {
  const [sticky, setSticky] = useState(false);
  const [getParaams, setgetParaams] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [openRegister, setopenRegister] = useState(false)
  const [confirmed, setconfirmed] = useState(false)
  const [isLaodingsad, setisLaodingsad] = useState(false)
  const [isLaodings, setisLaodings] = useState(false)
  const [isLoadingMetamask, setisLoadingMetamask] = useState(false)
  const [walletExisting, setwalletExisting] = useState("")
  const [getAllDtam, setGetAllDtam] = useState([])

  const searchParams = useSearchParams()

  const { loginOpen } = useContext(LoginFormContext);

  const router = useRouter()

  const search = searchParams.get('verify')
  const search2 = searchParams.get('fromMetamask')
  
  const searchshowRegister = searchParams.get('showRegister')

  const isSomeoneReferedHim = searchParams.get('Ref')

  useEffect(() => {

    if (isSomeoneReferedHim) {

      if (localStorage.getItem("Ref")) return

      localStorage.setItem("Ref", isSomeoneReferedHim)

    }

    if (search) {
      // console.log({ search2 })
      setgetParaams(search)
      setIsOpen(true)

    }

    if (searchshowRegister) {
      setopenRegister(true)
    }

  }, [])

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getDta()
    const handleScroll = () => {
      setSticky(window.scrollY > 365);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {

    const getDtaa = localStorage.getItem("jwt")

    console.log({getDtaa})

    var parseIT = null

    if (getDtaa) {
    
      parseIT = JSON.parse(getDtaa?getDtaa:"")
      
    }


    console.log("no tconsole")

    setisLaodingsad(true)

    setisLaodings(true)

    console.log({
      token: getParaams,
      search2: search2,
      wallet: parseIT && parseIT.data && parseIT.data.WalletAddress ? parseIT.data.WalletAddress :"Not Provided"
    })

    axios.post("/api/Auth", {
      token: getParaams,
      search2: search2,
      wallet: parseIT && parseIT.data && parseIT.data.WalletAddress ? parseIT.data.WalletAddress :"Not Provided"
    })
      .then((acc) => {
        console.log(acc.data)
        router.replace('/', undefined, { shallow: true });

        setisLaodingsad(false)


        if (acc.data.status) {

          localStorage.setItem("jwt", JSON.stringify(acc.data))

          setIsOpen(false)

          setTimeout(() => {
            window.location.reload()
          }, 1000);

        } else {

          toast.error(acc.data.error)

          setTimeout(() => {
            window.location.reload()
          }, 500);


        }
      })
      .catch((err) => {
        setisLaodingsad(false)

       console.log(err)
      })

  }

  const getDta = () => {



    const getDtaa = localStorage.getItem("jwt")

    let parseIT = JSON.parse(getDtaa)

   


    axios.get("/api/Weekly_Winner")
      .then((acc) => {

        console.log(acc.data)
        setGetAllDtam(acc.data)

      })
      .catch((err) => {
        // setisLaodingsad(false)
        console.log(err)
      })


  }
  
  return (
    <main className={`relative bg-black`}>

      <Suspense fallback={<div>Loading...</div>}>

        {loginOpen && <LoginForm />}

        {isOpen && (

          <div className="fixed z-10 inset-0 overflow-y-auto">

            <div className="flex items-center justify-center min-h-screen">

              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={toggleModal}></div>

              <div style={{ backgroundColor: "#060713" }} className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">

                {

                  confirmed ?

                    <>

                      <div className="p-4">
                        <h1 className="text-xl font-bold mb-4" style={{ textAlign: "center", color: "white" }}>Welcome</h1>

                      </div>

                      <div style={{ marginLeft: 20, marginRight: 20, marginBottom: 30 }}>

                        <input type="text" className="border-gray-300 border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter Username..." />

                        <input style={{ marginTop: 20 }} type="text" className="border-gray-300 border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter Email..." />

                        <div style={{ textAlign: "center", marginTop: 40 }}>
                          <div className="bg-gray-200 p-4" style={{ borderRadius: 10, cursor: "pointer", backgroundColor: "#007AFE", marginTop: 15 }}>

                            <h4 style={{ textAlign: "center", fontWeight: "bolder", color: "white" }}>Save Changes</h4>

                          </div>

                        </div>

                      </div>

                    </>

                    :

                    <>


                      <div className="p-4">
                        <h1 className="text-xl font-bold mb-4" style={{ textAlign: "center", color: "white" }}>Welcome</h1>

                        {/* <p style={{ color: "white",textAlign:"center" }}> Welcome Please Continue By Clicking Below.</p> */}
                      </div>


                      <div className="container mx-auto" style={{ marginLeft: 15, marginRight: 15, marginBottom: 15 }}>
                        <div className="grid grid-cols-1 gap-4">
                          {/* <div onClick={() => handleCancel()} className="bg-gray-200 p-4" style={{ borderRadius: 10, cursor: "pointer" }}>

                            <h4 style={{ textAlign: "center", fontWeight: "bolder", color: "black" }}>Cancel</h4>


                          </div> */}
                          {
                            isLaodingsad ?

                              <div className="bg-gray-200 p-4" style={{ marginRight: 25, borderRadius: 10, cursor: "no-drop", backgroundColor: "#007AFE",textAlign:"center" }}>

                                <h4 style={{ textAlign: "center", fontWeight: "bolder", color: "white" }}>Loading...</h4>


                              </div>
                              :

                              <div onClick={() => handleClick()} className="bg-gray-200 p-4" style={{ marginRight: 25, borderRadius: 10, cursor: "pointer", backgroundColor: "#007AFE",textAlign:"center" }}>

                                <h4 style={{ textAlign: "center", fontWeight: "bolder", color: "white" }}>Continue</h4>


                              </div>

                          }
                        </div>
                      </div>


                    </>
                }

              </div>
            </div>
          </div>
        )}

        <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showThumbs={false} 
        showArrows={false} 
              > 
            <div> 
              <HeroSection />
            </div> 
            <div> 
              <HeroSection />
            </div> 
            <div> 
              <HeroSection />
            </div> 
        </Carousel> 
   

        <AnalyticsSection />
        
        <GameSection />
        <CoinQuestSection  sectionTitle="Coin Quest" hasDescription={false} HaveFreeGame={false} />
        <CoinQuestSection  sectionTitle="Coin Quest" hasDescription={false} HaveFreeGame={true} />
        <JackpotSection />
        <PromotionSection />
        <DreamZDualSection
          title={dreamzDual.title}
          description={dreamzDual.description}
          showDescription={true}
          id="dreamz-dual"
        />
        {/* <DreamzThreeSection /> */}
        <DreamzCasualSection />
        <WinnerSection
          sectionTitle={weeklyWinners.title}
          header={weeklyWinners.header}
          rows={getAllDtam}

        />
        {/* <FAQSection data={frequentQuestionsData} /> */}
      </Suspense>
    </main>
  );
}
