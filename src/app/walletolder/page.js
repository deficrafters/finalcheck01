"use client";

import React, { useState } from "react";
import Tag from "@/components/common/Tag";
import ExternalAddress from "@/components/common/ExternalAddress";
import WalletItem from "@/components/wallet";
import { SiBinance } from "react-icons/si";
import { FaEthereum } from "react-icons/fa6";
import { FaBtc } from "react-icons/fa";
import TicketItem from "@/components/wallet/TicketItem";
import { BiLinkExternal } from "react-icons/bi";
// import WalletTable from '@/components/walle/WalletTable';
import DepositModal from "@/components/wallet/DepositModal";
import { setWalletPopup } from "@/store/slices/popupSlice";
import { useDispatch } from "react-redux";
import { Tab, Tabs } from "@/components/common/Tabs";
import { useRouter } from "next/navigation";

// icons

import BNB from "../../assets/cryptIcon/crypto-color_bnb.png";
import USDT from "../../assets/cryptIcon/crypto-color_usdt.png";
import USDC from "../../assets/cryptIcon/crypto-color_usdc.png";
import { useEffect } from "react";
import axios from "axios";

const Wallet = () => {
  const [getData, setGetData] = useState("");
  const dispatch = useDispatch();

  const router = useRouter();

  const [data, setData] = useState([
    {
      active: true,
      id: 1,
      name: "ETC",
      amount: 12,
      address: "0x03a98...E2958",
      rate: 0.43,
      canImport: true,
      icon: BNB,
    },
    {
      active: false,
      id: 2,
      name: "BNB",
      amount: 5,
      rate: 0.23,
      address: "0x03a98...E2959",
      canImport: false,
      icon: USDT,
    },
    {
      active: false,
      id: 3,
      name: "BTC",
      amount: 0.27,
      rate: 0.003,
      address: "0x03a98...E2960",
      canImport: false,
      icon: USDC,
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
    },
  ]);

  const [History, setHistory] = useState([]);

  const tabs = ["ERC20", "BEP20"];

  const { switchNetwork } = useSwitchNetwork();

  const getWalletDtaa = () => {
    let getDta = localStorage.getItem("jwt");
    let parseIt = JSON.parse(getDta);

    try {
      axios
        .post("/api/getUserWalletDetails", {
          ids: parseIt.data._id,
        })
        .then((acc) => {
          //  console.log("=================================>")
          //  console.log(acc.data)
          //  console.log("=================================>")

          setGetData(acc.data.data);
        })
        .catch((err) => {
          //  console.log(err)
        });
    } catch (error) {
      //  console.log(error)
    }
  };

  useEffect(() => {
    getWalletDtaa();
    GetHistory();
  }, []);

  const handleTab = (index) => {
    // if (index === 1 && selectedNetworkId !== 97) {
    //   //  console.log("came in 97")
    //   switchNetwork(97);
    // } else if (index === 0 && selectedNetworkId !== 1) {
    //   //  console.log("came in 1")
    //   switchNetwork(1);
    // }
    //  console.log(tabs[index]);
    //  console.log(selectedNetworkId);
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
          //  console.log(acc.data)
          setHistory(acc.data.data);
        })
        .catch((err) => {
          //  console.log(err)
        });
    } catch (error) {
      //  console.log(error)
    }
  };

  let CheckForAuth =
    typeof window !== "undefined" && window.localStorage.getItem("jwt");

  if (!CheckForAuth) return router.push("/");

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
      <div className='mt-5'>
        <Tabs handleTab={handleTab}>
          <Tab
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
                btnGroup={
                  <>
                    {" "}
                    <button
                      className='cancel'
                      onClick={() => {
                        dispatch(
                          setWalletPopup({
                            open: true,
                            title: "Withdrawal",
                            name: item.name,
                          })
                        );
                      }}
                    >
                      Withdrawal
                    </button>
                    <button
                      className='register'
                      onClick={() => {
                        dispatch(
                          setWalletPopup({
                            open: true,
                            title: "Deposit",
                            name: item.name,
                          })
                        );
                      }}
                    >
                      Deposit
                    </button>
                  </>
                }
              />
            ))}
          </Tab>
          <Tab
            label={
              <p className='flex gap-1'>
                <SiBinance color='#F3BA2F' fontSize={18} /> BEP20
              </p>
            }
          >
            {data2.map((item) => (
              <WalletItem
                key={item.key}
                {...item}
                btnGroup={
                  <>
                    {" "}
                    <button
                      className='cancel'
                      onClick={() =>
                        dispatch(
                          setWalletPopup({
                            open: true,
                            title: "Withdrawal",
                            name: item.name,
                          })
                        )
                      }
                    >
                      Withdrawal
                    </button>
                    <button
                      className='register'
                      onClick={() =>
                        dispatch(
                          setWalletPopup({
                            open: true,
                            title: "Deposit",
                            name: item.name,
                          })
                        )
                      }
                    >
                      Deposit
                    </button>
                  </>
                }
              />
            ))}
          </Tab>
        </Tabs>
      </div>

      <p className='my-4 text-lg'>Payment History</p>
      <Tabs>
        <Tab label='All'>
          <DepositModal
            GetHistory={GetHistory}
            getData={getData}
            Connected={getData ? true : false}
            text={!getData ? "Wallet Not Connected" : "Connected Wallet"}
          />
          {/* <WalletTable label="All" History={History} GetHistory={GetHistory}/> */}
        </Tab>
        <Tab label='Deposit'>
          <DepositModal
            GetHistory={GetHistory}
            getData={getData}
            Connected={getData ? true : false}
            text={!getData ? "Wallet Not Connected" : "Connected Wallet"}
          />
          {/* <WalletTable label="Deposit" History={History} GetHistory={GetHistory}/> */}
        </Tab>
        <Tab label='Withdrawal'>
          {/* <WalletTable label="Withdrawal" History={History} GetHistory={GetHistory}/> */}
        </Tab>
      </Tabs>
    </div>
  );
};

export default Wallet;
