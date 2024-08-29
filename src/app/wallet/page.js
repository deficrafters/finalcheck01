"use client";

import React, { useState, useEffect } from "react";
import Tag from "@/components/common/Tag";
import ExternalAddress from "@/components/common/ExternalAddress";
import WalletItem from "@/components/wallet1.0";
import { SiBinance } from "react-icons/si";
import { FaEthereum } from "react-icons/fa6";
import { FaBtc } from "react-icons/fa";
import TicketItem from "@/components/wallet1.0/TicketItem";
import { BiLinkExternal } from "react-icons/bi";
import WalletTable from "@/components/wallet1.0/WalletTable";
import DepositModal from "@/components/wallet1.0/DepositModal";
import { setWalletPopup } from "@/store/slices/popupSlice";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs } from "@/components/common/Tabs";
import { useRouter, useSearchParams } from "next/navigation";
import {
  FreeMode,
  Pagination,
  Autoplay,
  Navigation,
  Grid,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BNB from "../../assets/cryptIcon/crypto-color_bnb.png";
import USDT from "../../assets/cryptIcon/crypto-color_usdt.png";
import USDC from "../../assets/cryptIcon/crypto-color_usdc.png";
import axios from "axios";
import toast from "react-hot-toast";
import { getData as gettingDatas } from "../../store/slices/popupSlice";
import {
  useNetworkSwitcherModal,
  useSwitchActiveWalletChain,
  
} from "thirdweb/react";
import { bsc, bscTestnet, ethereum, sepolia } from "thirdweb/chains";
import { ThirdWebClient } from "@/context/ThirdWeb";
import { logtail } from "@/utils/functions";

const Wallet = () => {
  const [getData, setGetData] = useState("");
  const [refetch, setRefetch] = useState("");
  const Get_Above_Cards_Data = useSelector((state) => state.popup.Data);
  const search = useSearchParams();
  const chainIndex = search.get("chain");
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedNetworkId, setSelectedNewtorkId] = useState(
    chainIndex === "1" ? bsc.id : ethereum.id
  );


  const switchChaincode = useSwitchActiveWalletChain();

  

  const [data, setData] = useState([
    {
      active: true,
      id: 1,
      name: "USDT",
      amount: 12,
      address: "0x03a98...E2958",
      rate: 0.43,
      canImport: true,
      icon: BNB,
      chain: 1,
    },
    {
      active: false,
      id: 2,
      name: "USDC",
      amount: 5,
      rate: 0.23,
      address: "0x03a98...E2959",
      canImport: false,
      icon: USDT,
      chain: 1,
    },
    {
      active: false,
      id: 3,
      name: "ETH",
      amount: 0.27,
      rate: 0.003,
      address: "0x03a98...E2960",
      canImport: false,
      icon: USDC,
      chain: 1,
    },
  ]);

  const [data2, setData2] = useState([
    {
      active: false,
      id: 2,
      name: "USDT",
      amount: "USDT",
      rate: 0.65,
      address: "0x03a98...E2959",
      canImport: false,
      icon: USDT,
      chain: 97,
    },
    {
      active: false,
      id: 3,
      name: "USDC",
      amount: "USDC",
      rate: 0.45,
      address: "0x03a98...E2960",
      canImport: false,
      icon: USDC,
      chain: 97,
    },
    {
      active: true,
      id: 1,
      name: "BNB",
      amount: "BNB",
      address: "0x03a98...E2958",
      rate: 0.23,
      canImport: true,
      icon: BNB,
      chain: 97,
    },
  ]);

  useEffect(() => {
    // Dispatch the action to update the Data in the store
    dispatch(gettingDatas());
  }, []);

  const [History, setHistory] = useState([]);

  const tabs = ["ERC20", "BEP20"];

  // const { switchNetwork } = useSwitchNetwork();

  const getWalletDtaa = () => {
    let getDta = localStorage.getItem("jwt");
    let parseIt = JSON.parse(getDta);

    try {
      axios
        .post("/api/getUserWalletDetails", {
          ids: parseIt.data._id,
        })
        .then((acc) => {
          setGetData(acc.data.data);
        })
        .catch((err) => {
          //
        });
    } catch (error) {
      //
    }
  };

  const getProvider = () => localStorage.getItem("provider");

  useEffect(() => {
    getWalletDtaa();
    GetHistory();
    // Get_Above_Card_Data()
  }, []);

  const handleTab = async (index) => {
    // alert(selectedNetworkId)

    // if (
    //   (index === 1 &&
    //     (selectedNetworkId === bsc.id ||
    //       selectedNetworkId === bscTestnet.id)) ||
    //   (index === 0 &&
    //     (selectedNetworkId === ethereum.id || selectedNetworkId === sepolia.id))
    // ) {
    //   return;
    // }

    // const chain = index === 1 ? bsc : ethereum;
    // switchChain(chain);
    // localStorage.setItem("chain", chain.id);
    setSelectedNewtorkId(index);
    // router.push(`/wallet?chain=${index}`);

    // networkSwitcher.open({
    //   client: ThirdWebClient,
    //   theme: "dark",
    //   sections: [
    //     {
    //       label: "",
    //       // chains: index === 1 ? [bsc] : [ethereum],
    //       chains: index === 1 ? [bsc, bscTestnet] : [ethereum, sepolia],
    //     },
    //   ],
    //   onSwitch: (chain) => {
    //     localStorage.setItem("chain", chain.id);
    //     setSelectedNewtorkId(chain.id);
    //     router.push(`/wallet?chain=${index}`);
    //   },
    // });

    // const provider = getProvider();
    // switch (provider) {
    //   case "Metamask":
    //   case "Trust":
    //   case "Coinbase": {
    //     let temp = { ...obj, chainName: obj.name };
    //     temp.chainId = hexValue(temp.chainId);
    //     delete temp.name;
    //     delete temp.currency;
    //     networkSwitchFn(temp);
    //     console.log(temp);
    //     return;
    //   }
    //   case "Wallet Connect": {
    //     Web3NetworkSwitch(obj.chainId);
    //     return;
    //   }

    //   default:
    //     break;
    // }

    // if (!getData)
    //   return toast.error("Please Connect Your Wallet With Your Account");

    // if (index === 1 && selectedNetworkId !== 97) {
    //   //
    //   // alert("one")
    //   switchNetwork(97);
    //   // toast.success("Chain 97 Connected")
    // } else if (index === 0 && selectedNetworkId !== chains[0]?.chainId) {
    //   //
    //   // alert("two")
    //   // toast.success("Chain 0 Connected")
    //   switchNetwork(chains[0]?.chainId);
    // }

    //
    //
  };

  const GetHistory = (Type) => {
    let getDta = localStorage.getItem("jwt");
    let parseIt = JSON.parse(getDta);

    try {
      axios
        .post("/api/Wallet/GetDepositHistory", {
          ids: parseIt.data._id,
          Type: Type ? Type : "All",
        })
        .then((acc) => {
          //
          setHistory(acc.data.data);
        })
        .catch((err) => {
          //
        });
    } catch (error) {
      //
    }
  };

  const Get_Above_Card_Data = (Type) => {
    let getDta = localStorage.getItem("jwt");
    let parseIt = JSON.parse(getDta);

    try {
      axios
        .post("/api/Wallet_Balance_Data", {
          _id: parseIt.data._id,
        })
        .then((acc) => {
          // setGet_Above_Card_Data(acc.data)
        })
        .catch((err) => {});
    } catch (error) {}
  };

  let CheckForAuth =
    typeof window !== "undefined" && window.localStorage.getItem("jwt");

  if (!CheckForAuth) return router.push("/");

  const handleClick = async (item, obj, index) => {
    // if (!selectedNetworkId) return toast.error("Please Connect Metamask First");

    // if (!getData)
    //   return toast.error("Please Connect Your Wallet With Your Account");

    // if (!localStorage.getItem("jwt")) return toast.info("Please Login First");

    try {
      // await handleTab(index);
      dispatch(setWalletPopup(obj));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDepositModalClose = () => {
    setRefetch(true);
    setTimeout(() => {
      setRefetch(false);
    }, 1000);
  };

  return (
    <div className='px-10'>
      <div className='flex items-center gap-3'>
        <Tag
          Connected={getData ? true : false}
          text={!getData ? "Wallet Not Connected" : "Connected Wallet"}
        />

        <ExternalAddress
          getWalletDtaa={getWalletDtaa}
          Connected={getData ? true : false}
          addresss={getData ? getData : "Connect Now"}
        />
      </div>

      <p className='my-4 text-lg'>Wallet Balance</p>
      <div className='flex flex-col gap-5 py-4 text-white rounded-lg lg:flex-row lg:gap-10 md:bg-cool-20'>
        <Swiper
          spaceBetween={0}
          slidesPerView={0}
          freeMode={false}
          loop
          autoplay={false}
          initialSlide={0}
          modules={[FreeMode, Autoplay, Pagination, Navigation]}
          className={`swiper-custom-pagination`}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
              spaceBetween: 12,
              initialSlide: 0,
              autoplay: true,
            },
            480: {
              slidesPerView: 1.3,
              spaceBetween: 12,
              initialSlide: 0,
              autoplay: true,
            },
            640: {
              slidesPerView: 1.3,
              spaceBetween: 0,
              centeredSlides: false,
              initialSlide: 0,
              autoplay: true,
            },
            768: {
              slidesPerView: 3.2,
              spaceBetween: 12,
              centeredSlides: false,
              initialSlide: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 12,
              centeredSlides: false,
              initialSlide: 0,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 12,
              initialSlide: 0,
              centeredSlides: false,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 12,
              initialSlide: 0,
              centeredSlides: false,
            },
          }}
        >
          <SwiperSlide key={1} className={`relative  overflow-hidden"}`}>
            <div className='flex flex-col gap-5 p-4 text-white rounded-lg lg:flex-row lg:gap-10 bg-cool-20'>
              <div className='flex items-center w-auto'>
                <div className='mr-2'>
                  <img
                    src='/cryptIcon/crypto-color_usdt.png'
                    alt='Icon'
                    className='w-6 h-6'
                  />
                </div>
                <div>
                  <div>Total Balance</div>
                  <div className='text-yellow-400'>
                    $
                    {Get_Above_Cards_Data.Total_Balance
                      ? Get_Above_Cards_Data.Total_Balance
                      : 0}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            key={2}
            className={`relative rounded-lg overflow-hidden"}`}
          >
            <div className='flex flex-col gap-5 p-4 text-white rounded-lg lg:flex-row lg:gap-10 bg-cool-20'>
              <div className='w-auto'>
                <div>Bonus USDT</div>
                <div>
                  $
                  {Get_Above_Cards_Data.Bonus_Balance
                    ? Get_Above_Cards_Data.Bonus_Balance
                    : 0}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            key={3}
            className={`relative rounded-lg overflow-hidden"}`}
          >
            <div className='flex flex-col gap-5 p-4 text-white rounded-lg lg:flex-row lg:gap-10 bg-cool-20'>
              <div className='w-auto'>
                <div>Bonus DMZT</div>
                <div>
                  {Get_Above_Cards_Data.Bonus_Balance_DMTZ
                    ? Get_Above_Cards_Data.Bonus_Balance_DMTZ
                    : 0}{" "}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
     
      <button onClick={() => switchChaincode(bsc )}>bsc network Chain</button>
      <br/>
      <button onClick={() => switchChaincode(ethereum)}>ethereum network Chain</button>

    

      <div className='mt-5'>
        <ChainTabs handleTab={handleTab} tab={chainIndex}>
          <ChainTab
            label={
              <p className='flex gap-1'>
                <FaEthereum color='#716b94' fontSize={18} /> ERC20
              </p>
            }
          >
            {data.map((item) => (
              <WalletItem
                key={item.key}
                {...item}
                refetch={refetch}
                // chain={chains[0]?.chainId}
                btnGroup={
                  <>
                    <button
                      className='register'
                      onClick={() =>
                        handleClick(
                          item,
                          {
                            open: true,
                            title: "Deposit",
                            name: item.name,
                            chain: selectedNetworkId,
                          },
                          0
                        )
                      }
                    >
                      {selectedNetworkId == 11155111 ? "Deposit" : "Deposit"}
                    </button>
                    <button
                      className='cancel'
                      // onClick={() => {
                      //   dispatch(
                      //     setWalletPopup({
                      //       open: true,
                      //       title: "Withdrawal",
                      //       name: item.name,
                      //     })
                      //   );
                      // }}
                      onClick={() =>
                        toast.success("Withdrawal Will Enable Later")
                      }
                    >
                      Withdrawal
                    </button>
                  </>
                }
              />
            ))}
          </ChainTab>

          <ChainTab
            label={
              <p className='flex gap-1'>
                <SiBinance color='#F3BA2F' fontSize={18} /> BEP20
              </p>
            }
          >
            {data2.map((item) => (
              <WalletItem
                isSec={true}
                key={item.key}
                {...item}
                refetch={refetch}
                btnGroup={
                  <>
                    <button
                      className='register'
                      // onClick={() =>
                      //   dispatch(
                      //     setWalletPopup({
                      //       open: true,
                      //       title: "Deposit",
                      //       name: item.name,
                      //       chain: chains[1]?.chainId,
                      //       typeFrom: "Sec",
                      //       isSec: "Sec"
                      //     })
                      //   )
                      // }
                      onClick={() =>
                        handleClick(
                          item,
                          {
                            open: true,
                            title: "Deposit",
                            name: item.name,
                            chain: selectedNetworkId,
                            typeFrom: "Sec",
                            isSec: "Sec",
                          },
                          1
                        )
                      }
                    >
                      Deposit
                    </button>
                    <button
                      className='cancel'
                      onClick={
                        () => toast.success("Withdrawal Will Enable Later")
                        //   dispatch(
                        //     setWalletPopup({
                        //       open: true,
                        //       title: "Withdrawal",
                        //       name: item.name,
                        //     })
                        //   )
                      }
                    >
                      Withdrawal
                    </button>
                  </>
                }
              />
            ))}
          </ChainTab>
        </ChainTabs>
      </div>

      <p className='my-4 text-lg'>Payment History</p>
      <Tabs>
        <Tab label='All'>
          <DepositModal
            GetHistory={GetHistory}
            getData={getData}
            Connected={getData ? true : false}
            handleClose={handleDepositModalClose}
            text={!getData ? "Wallet Not Connected" : "Connected Wallet"}
          />
          <WalletTable label='All' History={History} GetHistory={GetHistory} />
        </Tab>
        <Tab label='Deposit'>
          <DepositModal
            GetHistory={GetHistory}
            getData={getData}
            handleClose={handleDepositModalClose}
            Connected={getData ? true : false}
            text={!getData ? "Wallet Not Connected" : "Connected Wallet"}
          />
          <WalletTable
            label='Deposit'
            History={History}
            GetHistory={GetHistory}
          />
        </Tab>
        <Tab label='Withdrawal'>
          <WalletTable
            label='Withdrawal'
            History={History}
            GetHistory={GetHistory}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Wallet;

const ChainTabs = ({ children, handleTab, tab = 0 }) => {
  const [activeTab, setActiveTab] = useState(tab);
  const [animate, setAnimate] = useState(false);
  const currentChain = +localStorage.getItem("chain");
  const switchChain = useSwitchActiveWalletChain();
  const networkSwitcher = useNetworkSwitcherModal();
  const router = useRouter();

  useEffect(() => {
    console.log({ tab, currentChain });
    toast.success(`${tab},${currentChain}`);
    if (!tab) {
      if (currentChain === ethereum.id) {
        // networkChange(0);
        setActiveTab(0);
      }

      if (currentChain === bsc.id) {
        // networkChange(tab);
        setActiveTab(1);
      }
    } else {
      setActiveTab(+tab);
    }
  }, [tab]);

  const networkChange = async (index) => {
    try {
      toast.success(`${index},${currentChain}`);

      setAnimate(true);
      const chain = index === 1 ? bsc : ethereum;

      await switchChain(chain);
      localStorage.setItem("chain", chain.id);
      handleTab(chain.id);
      logtail.log(`Chain switched - ${chain.name}`);
      toast.success(`Chain Switched - ${chain.id}`);
      router.push(`/wallet?chain=${index}`);
      setTimeout(() => {
        setActiveTab(index);
        setAnimate(false);
      }, 300);
    } catch (error) {
      console.log(error);
      logtail.error(error);
      // toast.error(JSON.stringify(error));
    }

    return;
    // try {
    //   networkSwitcher?.open({
    //     client: ThirdWebClient,
    //     theme: "dark",
    //     sections: [
    //       {
    //         label: "",
    //         chains: index === 1 ? [bsc] : [ethereum],
    //       },
    //     ],
    //     onSwitch: (chain) => {
    //       if (chain.id !== currentChain) {
    //         setAnimate(true);

    //         localStorage.setItem("chain", chain.id);
    //         handleTab(chain.id);
    //         router.push(`/wallet?chain=${index}`);
    //         setTimeout(() => {
    //           setActiveTab(index);
    //           setAnimate(false);
    //         }, 300); // duration of the animation
    //       }
    //     },
    //   });
    // } catch (error) {
    //   toast.error(JSON.stringify(error));
    // }
  };

  const handleTabClick = (index) => {
    // const chain = index === 1 ? bsc : ethereum;
    // switchChain(chain);
    // localStorage.setItem("chain", chain.id);
    // handleTab(chain.id);
    // router.push(`/wallet?chain=${index}`);
    if (
      (index === 1 &&
        (currentChain === bsc.id || currentChain === bscTestnet.id)) ||
      (index === 0 &&
        (currentChain === ethereum.id || currentChain === sepolia.id))
    ) {
      return;
    }
    networkChange(index);
  };

  // useEffect(() => {
  //   setActiveTab(+tab);
  // }, [tab]);
  const childrenCount = React.Children.count(children);

  return (
    <div className=''>
      <div
        className={`w-fit rounded-lg border-[0.5px] border-cool-80 grid grid-cols-${childrenCount} w-auto p-1`}
      >
        {React.Children.map(children, (child, index) => (
          <button
            className={`transition-colors duration-300 rounded-md text-sm font-semibold px-4 py-2 ${
              index === activeTab
                ? "bg-cool-50 text-white"
                : "bg-transparent text-cool-80"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className='relative mt-2'>
        {React.Children.map(children, (child, index) =>
          index === activeTab ? (
            <div
              className={`transition-opacity duration-300 ${
                animate ? "opacity-0" : "opacity-100"
              }`}
            >
              {child}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

const ChainTab = ({ children }) => {
  return <div>{children}</div>;
};
