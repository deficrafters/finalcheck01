"use client";
import { content } from "@/utils/content";
import { useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { add } from "@/store/slices/cartSlice";
import GameSection from "@/components/games/coin-quest/game/GameSection";
import HeroSection from "@/components/games/coin-quest/game/HeroSection";
import CoinQuestSection from "@/components/common/CoinQuestSection";
import HowToPlaySection from "@/components/common/HowToPlaySection";
import GlobalContext from "@/components/context/global/GlobalContext";
import DisabledOverlay from "@/components/common/DisabledOverlay";
import WinnerSection from "@/components/common/WinnerSection";
import ActivitySection from "@/components/common/ActivitySection";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import axios from "axios";
import { balanceFn } from "@/components/wallet1.0/deposit";

const { header, rows } = content.table.winners.cqWinners;

const { activityTable } = content.table;

export default function CointQuestGame() {
  const [counter, setCounter] = useState(1);
  const [rate, setRate] = useState("");
  const [datasss, setDatasss] = useState({});
  const [Already_Purchased, setAlready_Purchased] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [expiryDates, setExpiryDates] = useState("");
  const [maxCanTakeTicket, setMaxCanTakeTicket] = useState(0);

  const [setTtimerData, setsetTtimerData] = useState({
    Day: 0,
    Hour: 0,
    Minutes: 0,
    Second: 0,
  });

  const walletPopup = useSelector((state) => state.popup.walletPopup);

  const [gameID, setGameID] = useState("");
  const [priceEntered, setPriceEntered] = useState(0);
  const { disabledUSDT, setSideNavActiveMenu, setSideNavPrimaryMenu } =
    useContext(GlobalContext);
  const dispatch = useDispatch();
  const unique_id = uuid();
  const route = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const gamesIDs = route.get("i");

  useEffect(() => {
    getAllData();
    haveAlreadyPurchased();
    fetchBalance();
  }, []);

  const getAllData = () => {
    const item = route.get("i");

    setGameID(item);

    if (item) {
      try {
        axios
          .post("/api/CoinQuest/Pools/GetSinglePoolGames", {
            identifier: item,
          })
          .then((acc) => {
            let Expiry_Date = acc.data.timeline;

            if (1 == 1) {
              let DateInString = Expiry_Date;
              var currentDate = new Date();
              var targetDateTime = new Date(DateInString);
              var difference = targetDateTime - currentDate;

              var daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
              var hoursLeft = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
              );

              var result = "";

              if (daysLeft > 0) {
                if (daysLeft === 1) {
                  result += daysLeft + " Day ";
                } else {
                  result += daysLeft + " Days ";
                }
              } else if (hoursLeft >= 0) {
                if (hoursLeft === 1) {
                  result += hoursLeft + " Hour ";
                } else {
                  result += hoursLeft + " Hours ";
                }
              }

              if (daysLeft <= 0 && hoursLeft <= 0) {
                result = "Date has already passed";
              } else {
                if (daysLeft > 0 && daysLeft === 1) {
                  result += " Left";
                } else if (daysLeft > 0) {
                  result += " Left";
                } else if (hoursLeft > 0 && hoursLeft === 1) {
                  result += " Left";
                } else {
                  result += " Left";
                }
              }

              setExpiryDates(result);
            }

            setIsLoading(false);

            setDatasss(acc.data);

            setMaxCanTakeTicket(
              acc.data.soldOutTickets.total - acc.data.soldOutTickets.sold
            );

            setPriceEntered(acc.data.amount);

            const Expiry_Date_Time_In_GMT = acc.data.timeline;
            const Current_Date_Time_In_GMT = acc.data.Current_GMT_Time;

            const expiryTime = new Date(Expiry_Date_Time_In_GMT);
            let currentTime = new Date(Current_Date_Time_In_GMT);

            const timerInterval = setInterval(() => {
              const timeDifference = expiryTime - currentTime;

              let datas = {
                Day: 0,
                Hour: 0,
                Minutes: 0,
                Second: 0,
              };

              if (timeDifference > 0) {
                datas.Day = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                datas.Hour = Math.floor(
                  (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                datas.Minutes = Math.floor(
                  (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
                );
                datas.Second = Math.floor(
                  (timeDifference % (1000 * 60)) / 1000
                );

                // console.log(`Days: ${datas.Day}, Hours: ${datas.Hour}, Minutes: ${datas.Minutes}, Seconds: ${datas.Second}`);

                setsetTtimerData({
                  Day: datas.Day,
                  Hour: datas.Hour,
                  Minutes: datas.Minutes,
                  Second: datas.Second,
                });
              } else {
                clearInterval(timerInterval);
                datas = {
                  Day: 0,
                  Hour: 0,
                  Minutes: 0,
                  Second: 0,
                };
                console.log(
                  `Days: ${datas.Day}, Hours: ${datas.Hour}, Minutes: ${datas.Minutes}, Seconds: ${datas.Second}`
                );
                console.log("Countdown finished");
              }

              // Increment the current time by one second
              currentTime = new Date(currentTime.getTime() + 1000);
            }, 1000);
          })
          .catch((err) => {
            setIsLoading(false);
          });
      } catch (error) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (pathname.includes("coin-quest")) {
      let index = pathname.indexOf("coin-quest");
      let extractedSubstring = pathname.slice(
        index,
        index + "coin-quest".length
      );
      let transformStr = extractedSubstring.replace("-", " ");
      setSideNavPrimaryMenu(transformStr);
      setSideNavActiveMenu(transformStr);
    }
  }, [pathname, setSideNavActiveMenu, setSideNavPrimaryMenu]);

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);

      let Game_Price = Number(datasss.amount);

      // setPriceEntered(Number(priceEntered) - (counter))

      setPriceEntered(Number(Game_Price) * (counter - 1));
    }
  };

  const handleIncrement = () => {
    if (counter >= datasss.soldOutTickets.total - datasss.soldOutTickets.sold) {
      return toast.error(
        `You Can Maximum Buy ${
          datasss.soldOutTickets.total - datasss.soldOutTickets.sold
        } Tickets In This Pool`
      );
    }

    setCounter((prev) => prev + 1);

    let Game_Price = Number(datasss.amount);

    let Arr = [0, 0, 0, 0];

    setPriceEntered(Number(Game_Price) * (counter + 1));
  };

  function handleSelectedEntries() {
    let getUserID = localStorage.getItem("jwt");

    let parseIT = JSON.parse(getUserID);

    try {
      axios
        .post("/api/CoinQuest/Pools/PurchaseNew", {
          ids: gameID,
          useId: parseIT._id,
        })
        .then((acc) => {
          // //

          if (acc.data.status == false) {
            toast.error(acc.data.message);
          } else {
            toast.success(acc.data.message);
          }
        })
        .catch((err) => {
          //
        });
    } catch (error) {
      //
    }
  }

  const handleCard = (item) => {
    dispatch(add(item));
    toast.success("Successfully toasted!");
  };

  const haveAlreadyPurchased = () => {
    const item = route.get("i");

    let getData = localStorage.getItem("jwt");
    let parseIT = JSON.parse(getData);

    try {
      axios
        .post("/api/checkIfUserAlreadyPurchased", {
          poolID: item,
          userID: parseIT.data._id,
        })
        .then((acc) => {
          setAlready_Purchased(acc.data);
        })
        .catch((err) => {});
    } catch (error) {}
  };

  const fetchBalance = async () => {
    // setRate(
    //   walletPopup.title === "Deposit"
    //     ? await balanceFn(walletPopup.name, address, walletPopup.chain)
    //     : 0
    // );
  };

  return (
    <>
      {isLoading && (
        <div className='fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-90'>
          <div className='relative'>
            <div className='w-32 h-32 border-t-4 border-b-4 border-gray-200 rounded-full animate-spin'></div>{" "}
            {/* Spinner */}
            <p className='absolute text-lg text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
              Loading...
            </p>{" "}
            {/* Loading text */}
          </div>
        </div>
      )}

      <main>
        <div
          id='default-modal'
          tabIndex={-1}
          aria-hidden='true'
          className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
        >
          <div className='relative w-full max-w-2xl max-h-full p-4'>
            <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
              <div className='flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  Terms of Service
                </h3>

                <button
                  type='button'
                  className='inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white'
                  data-modal-hide='default-modal'
                >
                  <svg
                    className='w-3 h-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 14'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                    />
                  </svg>
                  <span className='sr-only'>Close modal</span>
                </button>
              </div>

              <div className='p-4 space-y-4 md:p-5'>
                <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>

              <div className='flex items-center p-4 border-t border-gray-200 rounded-b md:p-5 dark:border-gray-600'>
                <button
                  data-modal-hide='default-modal'
                  type='button'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  I accept
                </button>
                <button
                  data-modal-hide='default-modal'
                  type='button'
                  className='py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className={`cqGameHeroBG py-8 relative`}>
          {disabledUSDT === true && <DisabledOverlay />}

          <HeroSection
            gameID={gamesIDs}
            expiryDates={expiryDates}
            setTtimerData={setTtimerData}
            datasss={datasss}
            currency='usdt'
          />

          <GameSection
            getAllData={getAllData}
            expiryDates={expiryDates}
            Already_Purchased={Already_Purchased}
            maxCanTakeTicket={maxCanTakeTicket}
            GameData={datasss}
            gameID={gameID}
            // Entry={datasss && datasss.amount}
            setPriceEntered={setPriceEntered}
            Entry={priceEntered}
            game='usdt'
            counter={counter}
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
            onSelectedEntries={handleSelectedEntries}
            onCard={handleCard}
            haveAlreadyPurchased={haveAlreadyPurchased}
          />
        </section>

        {datasss && datasss.name && (
          <ActivitySection
            getAllData={getAllData}
            sectionTitle={activityTable.title}
            header={activityTable.header}
            rows={activityTable.rows}
            GameData={datasss}
            gameID={gameID}
          />
        )}

        <CoinQuestSection
          makeRefresh={true}
          getAllData={getAllData}
          sectionTitle='Coin Quest'
          hasDescription={false}
          id='games'
        />
        <CoinQuestSection
          makeRefresh={true}
          getAllData={getAllData}
          sectionTitle='Coin Quest'
          hasDescription={false}
          id='games'
          HaveFreeGame={true}
        />
        <HowToPlaySection
          sectionTitle='How To Play'
          description="It's easier than you think. Follow 3 simple easy steps."
        />

        <ActivitySection
          sectionTitle='Coin Quest Winners'
          header={activityTable.header}
          rows={activityTable.rows}
          GameData='Winner'
          gameID={gameID}
        />
      </main>
    </>
  );
}
