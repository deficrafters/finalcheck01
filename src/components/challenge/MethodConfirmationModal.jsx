import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { setTicketPopup } from "@/store/slices/popupSlice";
import { IoClose } from "react-icons/io5";
import { BiLinkExternal } from "react-icons/bi";
import { SiBinance } from "react-icons/si";
import { FaEthereum } from "react-icons/fa6";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaBtc } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { DepositFn } from "../wallet1.0/deposit";
import { useRouter, useSearchParams } from "next/navigation";
import { balanceFn } from "../wallet1.0/deposit";

const TicketModal = ({
  getAllData,
  entriesCount,
  EntryPrice,
  gameID,
  GameData,
  haveAlreadyPurchased,
  Already_Purchased,
  counter,
}) => {
  const dispatch = useDispatch();

  const router = useRouter();

  const walletPopup = useSelector((state) => state.popup.walletPopup);

  const ticketPopup = useSelector((state) => state.popup.ticketPopup);
  const [progressBar, setProgressBar] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [getData, setGetData] = useState("");
  const [radioValue, setRadioValue] = useState("Connected Wallet");
  const [isLoading, setIsLoading] = useState(false);
  const [setselectedFirstCoin, setSetselectedFirstCoin] = useState("ETH");
  const [setselectedSubtoken, setSetselectedSubtoken] = useState({
    parent: "",
    index: "",
    selectedToken: "",
  });
  const [oneBNBPrice, setOneBNBPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [gameData, setGameData] = useState("");
  const [datasss, setDatasss] = useState({});
  const [finalShowAmount, setFinalShowAmount] = useState(0);
  const [rate, setRate] = useState("");
  const [Final_Amount_User_Need_To_Pay, setFinal_Amount_User_Need_To_Pay] =
    useState(0);
  const [Final_Toke_Name_Selected, setFinal_Toke_Name_Selected] = useState("");
  const [Final_Toke_Image_Selected, setFinal_Toke_Image_Selected] =
    useState("");

  // COINS VALUE

  const [One_ETH_Price, setOne_ETH_Price] = useState(3384);
  const [One_BNB_Price, setOne_BNB_Price] = useState(574);

  const route = useSearchParams();

  useEffect(() => {
    const item = route.get("i");

    setGameData(item);

    if (item) {
      try {
        axios
          .post("/api/CoinQuest/Pools/GetSinglePoolGames", {
            identifier: item,
          })
          .then((acc) => {
            setDatasss(acc.data);
          })
          .catch((err) => {
            //
          });
      } catch (error) {
        //
      }
    }

    getWalletDtaa();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateProgress(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateProgress(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateProgress = (e) => {
    const progressBarWidth = e.currentTarget.clientWidth;
    const newPosition =
      e.clientX - e.currentTarget.getBoundingClientRect().left;
    const newProgress = Math.max(
      0,
      Math.min(100, (newPosition / progressBarWidth) * 100)
    );
    setProgressBar(newProgress);
  };

  const [data, setData] = useState([
    {
      active: true,
      id: 1,
      desc: "Funds in the connected wallet will be used to purchase ETC Tickets",
      name: "ETH",
      amount: 0.004534541183045,
      quantity: 12,
      currentAmount: 0.43,
      ticketCost: 0.001,
      address: "0x03a98...E2958",
      Icon: <FaEthereum color='#716b94' fontSize={18} />,
    },
    {
      active: false,
      id: 2,
      name: "BSC",
      desc: "You can monitor the status of your BNB Ticket purchase in real-time through your account dashboard.",
      quantity: 5,
      currentAmount: 0.23,
      ticketCost: 0.01,
      address: "0x03a98...E2959",
      amount: 0.021375718551183045,
      Icon: <SiBinance color='#F3BA2F' fontSize={18} />,
    },
    // {
    //   active: false,
    //   id: 3,
    //   name: "BTC",
    //   desc: "Funds in the connected wallet will be used to purchase BTC Tickets",
    //   currentAmount: 0.27,
    //   ticketCost: 0.003,
    //   quantity: 10,
    //   address: "0x03a98...E2960",
    //   amount: 0.0342354634645,
    //   Icon: <FaBtc color="#F3BA2F" fontSize={18} />,
    // },
  ]);

  let ETH_Subtoken = [
    {
      active: true,
      id: 2,
      desc: "Funds in the connected wallet will be used to purchase ETC Tickets",
      name: "USDT",
      amount: 0.004534541183045,
      quantity: 12,
      currentAmount: 0.43,
      ticketCost: 0.001,
      address: "0x03a98...E2958",
      Icon: <FaEthereum color='#716b94' fontSize={18} />,
    },
    {
      active: true,
      id: 3,
      desc: "Funds in the connected wallet will be used to purchase ETC Tickets",
      name: "USDC",
      amount: 0.004534541183045,
      quantity: 12,
      currentAmount: 0.43,
      ticketCost: 0.001,
      address: "0x03a98...E2958",
      Icon: <FaEthereum color='#716b94' fontSize={18} />,
    },
    {
      active: true,
      id: 1,
      desc: "Funds in the connected wallet will be used to purchase ETC Tickets",
      name: "ETH",
      amount: 0.004534541183045,
      quantity: 12,
      currentAmount: 0.43,
      ticketCost: 0.001,
      address: "0x03a98...E2958",
      Icon: <FaEthereum color='#716b94' fontSize={18} />,
    },
  ];

  let BSC_Subtoken = [
    {
      active: true,
      id: 2,
      desc: "Funds in the connected wallet will be used to purchase ETC Tickets",
      name: "USDT",
      amount: 0.004534541183045,
      quantity: 12,
      currentAmount: 0.43,
      ticketCost: 0.001,
      address: "0x03a98...E2958",
      Icon: <FaEthereum color='#716b94' fontSize={18} />,
    },
    {
      active: true,
      id: 3,
      desc: "Funds in the connected wallet will be used to purchase ETC Tickets",
      name: "USDC",
      amount: 0.004534541183045,
      quantity: 12,
      currentAmount: 0.43,
      ticketCost: 0.001,
      address: "0x03a98...E2958",
      Icon: <FaEthereum color='#716b94' fontSize={18} />,
    },
    {
      active: true,
      id: 1,
      desc: "Funds in the connected wallet will be used to purchase ETC Tickets",
      name: "BNB",
      amount: 0.004534541183045,
      quantity: 12,
      currentAmount: 0.43,
      ticketCost: 0.001,
      address: "0x03a98...E2958",
      Icon: <FaEthereum color='#716b94' fontSize={18} />,
    },
  ];

  const onSelectCoin = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    });
    setData(newData);
  };

  const onModalRequestClose = () => {
    dispatch(setTicketPopup(false));

    localStorage.setItem("closedModalss", "true");
  };

  const getWalletDtaa = () => {
    let getDta = localStorage.getItem("jwt");
    let parseIt = JSON.parse(getDta);

    try {
      axios
        .post("/api/getWalletBalance", {
          ids: parseIt.data._id,
        })
        .then((acc) => {
          console.log(acc.data);

          let GotData = acc.data;

          let Avalible_Blance =
            GotData.data.Deposit_Wallet_USDT + GotData.data.Winning_Wallet_USDT;

          setGetData(Avalible_Blance);
        })
        .catch((err) => {
          //
        });
    } catch (error) {
      //
    }
  };

  const active = data.find((item) => item.active);

  let Wallet_Amount = getData ? getData : 0;

  let Check_If_Avalible = Number(EntryPrice) <= Wallet_Amount ? true : false;

  let Avalible_Blace_After =
    Wallet_Amount >= Number(EntryPrice)
      ? Wallet_Amount - Number(EntryPrice)
      : 0;

  async function handle_Buy_Now() {
    var GiveFreeTicket = 0;

    if (GameData.isFree && Already_Purchased == false) {
      GiveFreeTicket = Number(GameData.amount);
    }

    setIsLoading(true);

    let getUserID = localStorage.getItem("jwt");

    let parseIT = JSON.parse(getUserID);

    let Final_Amount = Number(EntryPrice) - Number(GiveFreeTicket);

    if (Final_Amount == 0 || radioValue == "Deposit Wallet") {
      try {
        axios
          .post("/api/CoinQuest/Pools/PurchaseNew", {
            ids: gameID,
            useId: parseIT.data._id,
            method: radioValue,
            includeFreeTicket: GameData.isFree && Already_Purchased == false,
            radioValue,
            Final_Amount,
            TicketCount: entriesCount !== 0 ? entriesCount : counter,
          })
          .then((acc) => {
            getAllData();

            setIsLoading(false);

            if (acc.data.status == false) {
              toast.error(acc.data.message);
            } else {
              haveAlreadyPurchased();
              getWalletDtaa();
              dispatch(setTicketPopup(false));
              toast.success(acc.data.message);
            }

            return;
          })
          .catch((err) => {
            setIsLoading(false);

            return;
          });
      } catch (error) {
        setIsLoading(false);

        return;
      }
      return;
    } else {
      const result = await DepositFn({
        input: Final_Amount_User_Need_To_Pay.toString(),
        type: Final_Toke_Name_Selected,
        wallet: address,
        chain: chainId,
      });

      if (result?.error) {
        setIsLoading(false);

        setLoading(false);
        toast.error(result?.error);

        return;
      }

      // after payment

      const getTempHsh = localStorage.getItem("tempHash");

      try {
        axios
          .post("/api/CoinQuest/Pools/PurchaseNew", {
            ids: gameID,
            useId: parseIT.data._id,
            method: radioValue,
            TicketCount: entriesCount !== 0 ? entriesCount : counter,
            Hash: getTempHsh,
          })
          .then((acc) => {
            setIsLoading(false);

            getAllData();

            if (acc.data.status == false) {
              toast.error(acc.data.message);
            } else {
              getWalletDtaa();
              dispatch(setTicketPopup(false));
              toast.success(acc.data.message);
            }
          })
          .catch((err) => {
            setIsLoading(false);
          });
      } catch (error) {
        setIsLoading(false);
      }
    }
  }

  const handleTab = (index) => {
    // if (index === 1 && selectedNetworkId !== 97) {
    //   switchNetwork(97);
    // } else if (index === 0 && selectedNetworkId !== chains[0]?.chainId) {
    //   switchNetwork(chains[0]?.chainId);
    // }
  };

  const handle_Buy_With_Web3 = async () => {
    if (loading) return;

    setLoading(true);

    if (1 == 1) {
      const result = await DepositFn({
        input: Number(EntryPrice),
        type: walletPopup.name,
        wallet: address,
      });

      if (result?.error) {
        setLoading(false);
        toast.error(result?.error);

        return;
      }

      let getData = localStorage.getItem("jwt");
      let tempHash = localStorage.getItem("tempHash");
      let parseIt = JSON.parse(getData);
      let parsetempHash = JSON.parse(tempHash);

      try {
        axios
          .post("/api/Wallet/DepositWalletTransaction", {
            ids: parseIt.data._id,
            Type: "Deposit",
            Amount: amount,
            tokentype: walletPopup.name,
            network: 97,
            status: "Done",
            address: address,
            hash: parsetempHash,
          })
          .then((acc) => {
            //

            if (acc.data.status) {
              toast.success("Deposit Sucess");
              setLoading(false);
              GetHistory();
            } else {
              toast.error(acc.data.message);
              setLoading(false);
            }
          })
          .catch((err) => {
            toast.error("Internal Server Error.");
            //

            setLoading(false);
          });
      } catch (error) {
        //
        setLoading(false);
        toast.error("Internal Server Error.");
      }

      setAmount("");
      // setLoading(false);
    }
  };

  useEffect(() => {
    getOneValue();

    // ! HERE IS THIS

    if (typeof window !== "undefined" && localStorage.getItem("jwt")) {
      // alert("came")
      // fetchBalance()
    }
  }, []);

  const getOneValue = (obj) => {
    if (obj) {
      setSetselectedSubtoken(obj);
    }

    if (!obj) return;

    let Convert_Types = Number(EntryPrice);

    let Static_USDT_Value = 10;

    let USDTamount = Number(Static_USDT_Value) / 10 ** 18;

    let tokenPrice = 0.01;

    var ethPriceInUSD = Number(USDTamount) / 10 ** 8;

    // Calculation For USDT

    let inputValue = Convert_Types;

    var USDT_UPDATE_VALUE = 0;

    if (obj.selectedToken == "USDT") {
      USDT_UPDATE_VALUE = inputValue / tokenPrice;
    }

    if (obj.selectedToken == "USDC") {
      USDT_UPDATE_VALUE = inputValue / tokenPrice;
    }

    if (obj.selectedToken == "BNB" || obj.selectedToken == "ETH") {
      let oneEthInToken = ethPriceInUSD / tokenPrice;

      USDT_UPDATE_VALUE = inputValue * oneEthInToken;
    }

    setOneBNBPrice(
      obj.selectedToken == "BNB" || obj.selectedToken == "ETH"
        ? USDT_UPDATE_VALUE
        : Convert_Types
    );
  };

  const handleAddFund = () => {
    router.push("/wallet");
  };

  const fetchBalance = async () => {
    // const Get_Balance = await balanceFn(
    //   setselectedSubtoken.selectedToken
    //     ? setselectedSubtoken.selectedToken == "ETH"
    //       ? "BNB"
    //       : setselectedSubtoken.selectedToken
    //     : "USDT",
    //   address,
    //   chainId
    // );
    // setRate(Get_Balance);
  };

  setTimeout(() => {
    if (typeof window !== "undefined" && localStorage.getItem("jwt")) {
      fetchBalance();
    }
  }, 500);

  const Check_How_Much_Cost_User_Need_To_PAY = (Selected_Token) => {
    localStorage.removeItem("closedModalss");

    let Amount_In_USDT =
      GameData.isFree && Already_Purchased == false
        ? EntryPrice - Number(GameData.amount)
        : EntryPrice;

    var Finalized_Amount_User_Pays = 0;

    var Selected_Crypto_Logo = "";

    switch (Selected_Token) {
      case "USDT":
        Finalized_Amount_User_Pays = Amount_In_USDT;
        Selected_Crypto_Logo = "/usdt.png";
        break;
      case "USDC":
        Finalized_Amount_User_Pays = Amount_In_USDT;
        Selected_Crypto_Logo = "/usdtc.png";
        break;
      case "ETH":
        Finalized_Amount_User_Pays = Amount_In_USDT / One_ETH_Price;
        Selected_Crypto_Logo = "/cryptIcon/crypto-color_bnb.png";
        break;
      case "BNB":
        Finalized_Amount_User_Pays = Amount_In_USDT / One_BNB_Price;
        Selected_Crypto_Logo = "/cryptIcon/crypto-color_eth.png";
        break;

      default:
        break;
    }

    setFinal_Toke_Name_Selected(Selected_Token);
    setFinal_Toke_Image_Selected(Selected_Crypto_Logo);
    setFinal_Amount_User_Need_To_Pay(Finalized_Amount_User_Pays);
  };

  return (
    <Modal
      isOpen={ticketPopup}
      onRequestClose={onModalRequestClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      className='flex flex-col items-center justify-center outline-none'
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.5)",
          width: "100%",
          height: "100vh",
          padding: "10vh 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 100,
        },
      }}
    >
      <div className='px-3 flex h-[80vh] lg:h-auto items-center justify-center'>
        <div className='flex h-[70vh] msx-h-[90vh] lg:h-fit justify-center items-center'>
          <div className='h-full bg-left bg-no-repeat rounded-lg p-4 lg:py-5 w-full flex items-center justify-center flex-col lg:flex-row border-[0.5px] border-gray-600 relative bg-[#000000]'>
            <button
              className='absolute top-2 right-2 p-1 hover:bg-[#202020] rounded-full text-white/70 hover:text-white transition-all ease-in-out font-bold'
              onClick={onModalRequestClose}
            >
              <IoClose size={24} />
            </button>

            <div className='w-full md:max-w-[500px]'>
              <h2 className='text-xl font-semibold text-center text-white'>
                Confirm Method
              </h2>

              <div className='border-[0.5px] border-blue-400 w-full rounded-xl p-3 mt-4 bg-[#202020]'>
                <div className='flex items-center gap-2'>
                  <input
                    checked={radioValue === "Connected Wallet"}
                    onChange={(e) => setRadioValue(e.target.value)}
                    type='radio'
                    value='Connected Wallet'
                    name='ticket'
                    id='ticket1'
                  />
                  <span className='px-3 py-1 text-xs font-semibold text-green-600 bg-green-200 border border-green-600 rounded-full'>
                    Connected Wallet
                  </span>
                </div>

                {Final_Toke_Name_Selected ? (
                  <p className='mt-2 text-xs text-gray-500'>{`Funds in the connected wallet will be used to purchase ${Final_Toke_Name_Selected} Tickets`}</p>
                ) : (
                  <p className='mt-2 text-xs text-gray-500'>{`Funds in the connected wallet will be used to purchase ERC/BSC Tickets`}</p>
                )}

                <p className='flex items-center gap-2 mt-2 text-sm text-gray-500'>
                  <BiLinkExternal fontSize={18} />
                  {address && address.slice(0, 5) + "..." + address.slice(-5)}
                </p>
                <div className='flex justify-between mt-4 mb-2 text-sm text-white'>
                  <p className='flex items-center gap-1'>
                    <img src={Final_Toke_Image_Selected} alt='' />

                    {Number(rate).toFixed(3)}
                  </p>
                  <p className='flex items-center gap-1'>
                    {entriesCount == 0 ? counter : entriesCount} Ticket Cost
                    <img src={Final_Toke_Image_Selected} alt='' />
                    {Number(Final_Amount_User_Need_To_Pay).toFixed(8)}
                  </p>
                </div>
              </div>

              <div className=' w-full rounded-xl p-3 mt-2 bg-[#202020]'>
                <div className='flex items-center gap-2'>
                  <input
                    checked={radioValue !== "Connected Wallet"}
                    onChange={(e) => setRadioValue(e.target.value)}
                    value='Deposit Wallet'
                    type='radio'
                    name='ticket'
                    id='ticket1'
                  />

                  <span className='flex items-center gap-2 px-3 py-1 text-sm text-white'>
                    DMZT Wallet : ${getData ? getData : 0}
                  </span>
                </div>
              </div>

              {radioValue == "Connected Wallet" ? (
                <>
                  <div className='flex justify-center py-5'>
                    <MdKeyboardDoubleArrowDown
                      size={18}
                      className='text-white'
                    />
                  </div>

                  <div className=' w-full rounded-xl p-2 mt-2 border border-[#202020]'>
                    <div className='flex justify-between'>
                      {data.map((item, index) => {
                        return (
                          <div
                            style={{
                              cursor: index == 0 ? "pointer" : "pointer",
                            }}
                            key={index}
                            onClick={() => {
                              [
                                Check_How_Much_Cost_User_Need_To_PAY("USDT"),
                                handleTab(index),
                                onSelectCoin(item.id),
                                setSetselectedFirstCoin(item.name),
                              ];
                            }}
                            className={`flex gap-2 items-center w-full justify-center rounded-lg cursor-pointer ${
                              item.active ? "bg-cool-50" : ""
                            }`}
                          >
                            <span className='flex items-center gap-1 px-3 py-2 text-sm text-white'>
                              {item.Icon}
                              {item.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className=' w-full rounded-xl p-2 mt-2 border border-[#202020]'>
                    <div className='flex justify-between'>
                      {setselectedFirstCoin == "ETH"
                        ? ETH_Subtoken.map((item, index) => {
                            return (
                              <div
                                key={index}
                                onClick={() => [
                                  Check_How_Much_Cost_User_Need_To_PAY(
                                    item.name
                                  ),
                                  handleTab(0),
                                  getOneValue({
                                    parent: "ETH",
                                    index: index,
                                    selectedToken: item.name,
                                  }),
                                  fetchBalance({
                                    parent: "BSC",
                                    index: index,
                                    selectedToken: item.name,
                                  }),
                                ]}
                                className={`flex gap-2 items-center w-full justify-center rounded-lg cursor-pointer ${
                                  setselectedSubtoken.parent == "ETH" &&
                                  setselectedSubtoken.index == index
                                    ? "bg-cool-50"
                                    : ""
                                }`}
                              >
                                <span className='flex items-center gap-1 px-3 py-2 text-sm text-white'>
                                  {item.name == "ETH" && item.Icon}
                                  {item.name == "USDT" && (
                                    <img src='/usdt.png' alt='usdt' />
                                  )}
                                  {item.name == "USDC" && (
                                    <img src='/usdtc.png' alt='usdc' />
                                  )}

                                  {item.name}
                                </span>
                              </div>
                            );
                          })
                        : setselectedFirstCoin == "BSC"
                        ? BSC_Subtoken.map((item, index) => {
                            return (
                              <div
                                key={index}
                                onClick={() => [
                                  Check_How_Much_Cost_User_Need_To_PAY(
                                    item.name
                                  ),
                                  handleTab(1),
                                  getOneValue({
                                    parent: "BSC",
                                    index: index,
                                    selectedToken: item.name,
                                  }),
                                  fetchBalance({
                                    parent: "BSC",
                                    index: index,
                                    selectedToken: item.name,
                                  }),
                                ]}
                                className={`flex gap-2 items-center w-full justify-center rounded-lg cursor-pointer ${
                                  setselectedSubtoken.parent == "BSC" &&
                                  setselectedSubtoken.index == index
                                    ? "bg-cool-50"
                                    : ""
                                  // className={`flex gap-2 items-center w-full justify-center rounded-lg cursor-pointer ${1==2 ? "bg-cool-50" : ""
                                }`}
                              >
                                <span className='flex items-center gap-1 px-3 py-2 text-sm text-white'>
                                  {item.name == "BNB" && active.Icon}
                                  {item.name == "USDT" && (
                                    <img src='/usdt.png' alt='usdt' />
                                  )}
                                  {item.name == "USDC" && (
                                    <img src='/usdtc.png' alt='usdc' />
                                  )}
                                  {item.name}
                                </span>
                              </div>
                            );
                          })
                        : ""}
                    </div>
                  </div>
                </>
              ) : radioValue == "Deposit Wallet" &&
                GameData.isFree &&
                Already_Purchased == false ? (
                <>
                  <div
                    style={{ color: "green" }}
                    className={`p-2 mb-4 text-sm text-green }-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400`}
                    role='// alert'
                  >
                    Claim Reward And Get 1 Free Ticket
                  </div>
                </>
              ) : GameData.isFree && Already_Purchased == false ? (
                EntryPrice - Number(GameData.amount)
              ) : (
                EntryPrice > getData && (
                  <>
                    <div
                      style={{
                        marginTop: 20,
                        marginBottom: 20,
                        color: Check_If_Avalible ? "green" : "",
                      }}
                      className={`p-2 mb-4 text-sm text-${
                        Check_If_Avalible ? "green" : "red"
                      }-800 rounded-lg bg-${
                        Check_If_Avalible ? "green" : "red"
                      }-50 dark:bg-gray-800 dark:text-${
                        Check_If_Avalible ? "green" : "red"
                      }-400`}
                      role='// alert'
                    >
                      Your Wallet Low Balance Please Add $
                      {GameData.isFree && Already_Purchased == false
                        ? EntryPrice - Number(GameData.amount)
                        : EntryPrice}{" "}
                      Minimum In Your Wallet To Continue. Click Below
                    </div>
                  </>
                )
              )}

              <div className='flex gap-4 mt-4'>
                <button onClick={onModalRequestClose} className='login'>
                  Close
                </button>
                {isLoading ? (
                  <button
                    style={{ cursor: "no-drop", backgroundColor: "gray" }}
                    disabled={true}
                    className='w-full register'
                  >
                    Please Wait...
                  </button>
                ) : radioValue == "Connected Wallet" ? (
                  <>
                    {typeof Window !== "undefined" &&
                    window.localStorage.getItem("closedModalss") ? (
                      <button
                        style={{ cursor: "no-drop", backgroundColor: "gray" }}
                        className='w-full register'
                      >
                        Please Select Coin
                      </button>
                    ) : (
                      <button
                        onClick={handle_Buy_Now}
                        style={{ cursor: "pointer" }}
                        className='w-full register'
                      >
                        Buy Tickets
                      </button>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() =>
                      !Check_If_Avalible
                        ? GameData.isFree && Already_Purchased == false
                          ? handle_Buy_Now()
                          : handleAddFund()
                        : handle_Buy_Now()
                    }
                    style={{
                      cursor: Check_If_Avalible ? "pointer" : "pointer",
                    }}
                    className='w-full register'
                  >
                    {Check_If_Avalible
                      ? "Buy Tickets"
                      : Check_If_Avalible == null
                      ? "Select Any Payment Method"
                      : GameData.isFree && Already_Purchased == false
                      ? "Buy Now & Claim Reward "
                      : "Add Fund"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TicketModal;
