"use client";
import {useState} from "react"
import { content } from "@/utils/content.js";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch } from "react-redux";
import GlobalContext from "@/components/context/global/GlobalContext.js";
import SectionIdentifier from "@/components/common/SectionIdentifier";
import { useContext } from "react";
import DisabledOverlay from "@/components/common/DisabledOverlay";
import { setSpinnerPopup, setTicketPopup } from "@/store/slices/popupSlice";
import MethodConfirmationModal from "@/components/challenge/MethodConfirmationModal.jsx";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from 'next/navigation'

const { coinQuest } = content.popularEntries;

const highlights = [];

export default function GameSection({
  game,
  counter,
  onDecrement,
  onIncrement,
  onSelectedEntries,
  onCard,
  Entry,
  gameID,
  setPriceEntered,
  GameData,
  Already_Purchased,
  haveAlreadyPurchased,
  expiryDates,
  maxCanTakeTicket,
  getAllData,
  
}) {

  const { enableUsdt, enableEth, enableBnb, enableXrp } = useContext(GlobalContext);

  const [entriesCount, setEntriesCount] = useState(0)

  
  const Router = useRouter()
  const Pathname = usePathname()
  const SearchQuery = useSearchParams()

  const {
    isLogin,
    loginOpen,
    setLoginOpen,
    setSubOpen,
    setProfileMenuOpen,
    hamOpen,
    setHamOpen,
    setSideNavActiveMenu,
    setSideNavSubMenu,
    setSideNavPrimaryMenu,
  } = useContext(GlobalContext);

  const handleClick = (item) => {

    // alert(item.entries)

    setEntriesCount(Number(item.entries))

    setPriceEntered(Number(item.entries) * Number(GameData.amount))
    // toast.success("Added");

    dispatch(setTicketPopup(true))

  };

  const handleLogin = () => {
    setLoginOpen((prev) => !prev);
  };

  const dispatch = useDispatch();

  const handleDecrement = () => {

    onDecrement()
    // setPriceEntered(Number(Entry)/Number(counter+1))


  }

  const handleIncrease = () => {


    onIncrement()
    // alert(counter)
    // setPriceEntered(Number(Entry)*counter)


  }

  const handleOpenRegisterForm = () => {

    let i = SearchQuery.get("i")

    console.log(Pathname)
    Router.push(Pathname + `?i=${i}` + "&showRegister=true")
    setLoginOpen((prev) => !prev);

  }

  return (
    <section className={`wrapper-desk relative mt-4`}>

      <SectionIdentifier id="popular-entries" />
      <div className={`hidden xl:flex items-center`}>
        <div className={`hidden xl:block w-[250px]`}></div>
        <div className={`flex-1 flex items-center justify-center gap-2 py-2`}>

          <FaStar /> Most Popular Entries

        </div>
      </div>

      <div
        className={`flex flex-col xl:flex-row item-center justify-between gap-1 xs:gap-3 md:gap-0 rounded-none xl:rounded-lg overflow-auto md:overflow-hidden`}
      >
        <div
          className={`w-[100%] xl:w-[250px] prizeSectionBG_JM px-8 py-8 flex flex-col xs:flex-row xl:flex-col items-center justify-center gap-6 sm:gap-12 rounded-lg xl:rounded-none`}
        >
          <div className={`flex items-center justify-center gap-2`}>
            <button
              onClick={handleDecrement}
              className={`btnCircle !bg-cool-50 shadow-xl`}
            >
              <FaMinus />
            </button>
            <div className={`countNumContainer`}>{counter}</div>
            <button
              onClick={handleIncrease}
              className={`btnCircle !bg-cool-50 shadow-xl`}
            >
              <FaPlus />
            </button>
          </div>
          {/* lg:mt-[-30px] */}
          {
            Already_Purchased == false &&

            <span className="lg:mt-[-30px] text-sm text-emerald-500">{GameData.isFree && "Get 1 Free Ticket"}</span>
          }

          {
            expiryDates && expiryDates == "Date has already passed" ?

              <button
                disabled
                className={`lg:mt-[-30px] btnRect !w-[100%] xs:!max-w-max bg-gray-400 hover:bg-gray-400 hover:text-black font-semibold tracking-tight flex gap-2 !py-5 !px-5`}
              >
                TICKETS SOLD
              </button>

              :

              GameData.soldOutTickets && GameData.soldOutTickets.total && counter <= (GameData.soldOutTickets.total - GameData.soldOutTickets.sold) ?

                <button
                  onClick={() => { typeof window !== "undefined" && window.localStorage.getItem("jwt") ?[ dispatch(setTicketPopup(true)),setEntriesCount(0)] : handleOpenRegisterForm() }}
                  className={`lg:mt-[-30px] btnRect !w-[100%] xs:!max-w-max !bg-hl-02 hover:!bg-hl-02-hover font-semibold tracking-tight flex gap-2 !py-5 !px-5`}
                >

                  {

                    GameData.isFree && Already_Purchased == false ?
                      <>
                        <HiShoppingCart className="scale-125" /> <> Get Free Ticket</>
                      </>
                      :
                      <>
                        <HiShoppingCart className="scale-125" />  BUY NOW
                      </>

                  }

                </button>

                :

                <>

                  <button
                    disabled={true}
                    style={{ cursor: "no-drop", backgroundColor: "gray" }}
                    className={`lg:mt-[-30px] btnRect !w-[100%] xs:!max-w-max ! font-semibold tracking-tight flex gap-2 !py-5 !px-5`}
                  >
                    <HiShoppingCart className="scale-125" />
                    BUY NOW
                  </button>

                </>

          }

        </div>

        <h3
          className={`block xl:hidden text-[24px] text-center sm:text-left font-semibold tracking-tight mt-6 mb-2`}
        >

          Most Popular Entries


        </h3>

        <div
          className={`popularGridContainer flex-1 grid grid-cols-2 sm:grid-cols-4 gap-1 md:gap-[3px]`}
        >
          {coinQuest.map((item, index) => (

            <button

              key={index}
              onClick={() => { typeof window !== "undefined" && window.localStorage.getItem("jwt") ?
                
                item.entries > maxCanTakeTicket ?
                {}
                :
                
                handleClick(item) 
                
                : handleOpenRegisterForm() }}
              className={`flex-1 max-h-[238px] col-span-1 rounded-lg xl:rounded-none overflow-hidden`}
            >
              <div
                className={`bg-cool-05 w-[100%] h-[80%] flex flex-col items-center justify-center px-5 py-3 xs:py-6`}
              >
                <div className={`flex items-center justify-center gap-3`}>
                  <FaStar
                    className={`hidden md:table text-hl-01 animate-spin`}
                  />
                  <FaStar className={`text-hl-01 animate-spin`} />
                  <p
                    className={`text-[28px] xs:text-[32px] sm:text-[28px] md:text-[32px] font-semibold`}
                  >

                    {item.entries}

                  </p>

                  <FaStar className="text-hl-01 animate-spin" />
                  <FaStar className="hidden md:table text-hl-01 animate-spin" />
                </div>
                <p className="text-h5 text-cool-90 capitalize">entries</p>
                <div
                  className={`flex flex-col items-center justify-center gap-1 mt-3`}
                >
                  <p className="text-[14px] xxs:text-[16px] text-cool-70 font-normal uppercase italic leading-[100%]">
                    entry price
                  </p>
                  <p
                    className={`text-[20px] md:text-[26px] uppercase tracking-tighter font-semibold leading-[100%]`}
                  >
                    {GameData.amount ? Number(GameData.amount) * Number(item.entries) : 0}{" "}USDT
                  </p>
                </div>
              </div>

              {

                expiryDates && expiryDates == "Date has already passed" ?

                  <div

                    style={{ cursor: "no-drop" }}
                    className={`w-[100%] h-[20%] py-3 cursor-pointer flex text-black items-center justify-center gap-2 bg-gray-300 hover:bg-gray-400 hover:text-black font-semibold tracking-tight uppercase tracking-tighter`}
                  >
                    Tickets Sold
                  </div>

                  :

                  item.entries > maxCanTakeTicket ?

                    <div
                    style={{cursor:"no-drop",backgroundColor:"gray"}}
                    className={`w-[100%] h-[20%] py-3 cursor-pointer flex items-center justify-center gap-2  text-brandShade-20 font-bold uppercase tracking-tighter`}
                    >

                      <HiShoppingCart /> Buy Now {"  "}

                    </div>

                    :

                    <div

                      // style={{ cursor: item.entries > counter ? "no-drop" : item.entries > GameData.soldOutTickets && GameData.soldOutTickets.total && (GameData.soldOutTickets.total - GameData.soldOutTickets.sold) ? "no-drop" : "pointer" }}
                      className={`w-[100%] h-[20%] py-3 cursor-pointer flex items-center justify-center gap-2 bg-hl-01 text-brandShade-20 font-bold uppercase tracking-tighter`}
                    >

                      <HiShoppingCart /> Buy Now {"  "}

                      {/* {item.entries} / {maxCanTakeTicket} */}
                    </div>

              }

            </button>

          ))}
        </div>
      </div>
      <div className={`flex items-center mt-2`}>
        <div className={`hidden xl:block w-[250px]`}></div>
        <div
          className={`flex-1 flex flex-col items-center md:items-start xl:items-center gap-2 xs:gap-1 mt-4 xs:mt-0`}
        >
          {highlights.map((item, index) => (
            <span
              key={index}
              className={`w-[240px] xs:w-auto text-cool-90 text-center xs:text-left flex flex-col xs:flex-row items-center gap-1 xs:gap-3`}
            >
              <FaStar className={`text-white`} /> {item}
            </span>
          ))}
        </div>
      </div>


      <MethodConfirmationModal entriesCount={entriesCount} counter={counter} getAllData={getAllData} Already_Purchased={Already_Purchased} haveAlreadyPurchased={haveAlreadyPurchased} GameData={GameData} gameID={gameID} EntryPrice={Entry} />

    </section>
  );
}
