import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import {
  setTicketPopup,
  setWalletPopup,
  setDepositHash,
} from "@/store/slices/popupSlice";
import { IoClose } from "react-icons/io5";
import { BiLinkExternal } from "react-icons/bi";
import { SiBinance } from "react-icons/si";
import { FaEthereum } from "react-icons/fa6";
import { FaBtc } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Image from "next/image";
import Tag from "../common/Tag";
import ExternalAddress from "../common/ExternalAddress";
import { formatWalletAddress } from "@/utils/functions";
import { balanceFn, useDeposit } from "./deposit";
import toast from "react-hot-toast";

import bnb from "../../assets/cryptIcon/crypto-color_eth.png";
import bnb1 from "../../assets/cryptIcon/crypto-color_bnb.png";
import usdc from "../../assets/cryptIcon/crypto-color_usdc.png";
import usdt from "../../assets/cryptIcon/crypto-color_usdt.png";
import axios from "axios";
import { getData as gettingDatas } from "../../store/slices/popupSlice";
import { useActiveAccount, useSendTransaction } from "thirdweb/react";
import { LoadingOutlined } from "@ant-design/icons";

const DepositModal = ({
  Connected,
  text,
  getData,
  GetHistory,
  handleClose,
}) => {
  const dispatch = useDispatch();
  const { DepositFn } = useDeposit();
  const obj = localStorage.getItem("jwt");

  const address = JSON.parse(obj)?.data?.WalletAddress;

  const walletPopup = useSelector((state) => state.popup.walletPopup);
  const DepositHash = useSelector((state) => state.popup.DepositHash);
  const [progressBar, setProgressBar] = useState("");
  const [amount, setAmount] = useState("");
  const [userWallet, setUserWallet] = useState("");

  // const { address, chainId } = useWeb3ModalAccount();
  const [loading, setLoading] = useState(false);
  const [balanceLoading, setBalanceLoading] = useState(false);
  const [rate, setRate] = useState("");
  useEffect(() => {
    Get_Wallet_Balance();
  }, []);

  const handleClick = async () => {
    if (loading) return;

    setLoading(true);

    if (walletPopup.title === "Deposit") {
      const result = await DepositFn({
        input: amount,
        type: walletPopup.name,
        wallet: address,
        chain: walletPopup?.chain,
      });

      if (result?.error) {
        setLoading(false);
        toast.error(result?.error);

        return;
      }

      console.log("==========>");
      console.log(result);
      console.log("==========>");

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
            fetchBalance();

            Get_Wallet_Balance();

            if (acc.data.status) {
              toast.success("Deposit Sucess");
              setLoading(false);
              GetHistory();

              // window.location.reload()

              onModalRequestClose();
            } else {
              toast.error(acc.data.message);
              setLoading(false);
            }
          })
          .catch((err) => {
            toast.error("Internal Server Error.");

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
      name: "BNB",
      desc: "You can monitor the status of your BNB Ticket purchase in real-time through your account dashboard.",
      quantity: 5,
      currentAmount: 0.23,
      ticketCost: 0.01,
      address: "0x03a98...E2959",
      amount: 0.021375718551183045,
      Icon: <SiBinance color='#F3BA2F' fontSize={18} />,
    },
    {
      active: false,
      id: 3,
      name: "BTC",
      desc: "Funds in the connected wallet will be used to purchase BTC Tickets",
      currentAmount: 0.27,
      ticketCost: 0.003,
      quantity: 10,
      address: "0x03a98...E2960",
      amount: 0.0342354634645,
      Icon: <FaBtc color='#F3BA2F' fontSize={18} />,
    },
  ]);

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
    if (loading) {
      toast.loading("Transaction Is In Progress, Please Wait...");
      setTimeout(() => {
        toast.dismiss();
      }, 4000);
      return;
    }
    handleClose();
    dispatch(setWalletPopup({ open: false, title: "" }));
  };

  const active = data.find((item) => item.active);

  const Get_Wallet_Balance = () => {
    let getData = localStorage.getItem("jwt");
    let parseIT = JSON.parse(getData);

    try {
      axios
        .post("/api/getWalletBalance", {
          ids: parseIT.data._id,
        })
        .then((acc) => {
          setUserWallet(acc.data);
        })
        .catch((err) => {});
    } catch (error) {}
  };

  const fetchBalance = async () => {
    if (walletPopup.name && address) {
      setBalanceLoading(true);
      const balance = await balanceFn(
        walletPopup.name,
        address,
        walletPopup.chain
      );
      setRate(balance);
      setBalanceLoading(false);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, [walletPopup.name, walletPopup.type]);

  useEffect(() => {
    // Dispatch the action to update the Data in the store
    dispatch(gettingDatas());
  }, [dispatch]);

  return (
    <Modal
      isOpen={walletPopup.open}
      onRequestClose={onModalRequestClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      className='flex flex-col items-center justify-center w-11/12 outline-none'
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.5)",
          height: "100vh",
          padding: "10vh 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 100,
        },
      }}
    >
      <div className='flex h-[80vh] lg:h-auto items-center justify-center'>
        <div className='flex msx-h-[90vh] lg:h-fit justify-center items-center'>
          <div className='h-full bg-left bg-no-repeat rounded-lg p-4 lg:py-5 w-full flex items-center justify-center flex-col lg:flex-row border-[0.5px] border-gray-600 relative bg-[#000000]'>
            <button
              className='absolute top-2 right-2 p-1 hover:bg-[#202020] rounded-full text-white/70 hover:text-white transition-all ease-in-out font-bold'
              onClick={onModalRequestClose}
            >
              <IoClose size={24} />
            </button>

            <div className='w-full md:w-[500px]'>
              <h2 className='text-xl font-semibold text-center text-white'>
                {walletPopup.title}{" "}
                {walletPopup.name == "BNB"
                  ? walletPopup.isSec == "Sec"
                    ? "BNB"
                    : "ETH"
                  : walletPopup.name}
              </h2>

              <p className='text-sm text-center text-gray-500'>
                Instantly transfer funds between your Web3 and DreamGameZ Wallet
                to enjoy our games.
              </p>

              <div className='flex justify-between border-[0.5px] border-blue-400 w-full rounded-xl p-3 mt-4 bg-[#202020]'>
                <div className='mb-3'>
                  <div className='flex items-center gap-2'>
                    <Tag Connected={Connected} text={text} />
                  </div>

                  <ExternalAddress Connected={Connected} addresss={getData} />
                </div>
                <div className='flex justify-between mt-4 mb-2 text-sm text-white'>
                  <p className='flex items-center gap-1'>
                    {walletPopup.title !== "Deposit" ? (
                      <span className='w-28'>
                        <input
                          type='text'
                          className='bg-[#202020] text-white py-2 px-4 outline-none border-[0.5px] border-gray-600 text-end'
                          value={active.currentAmount}
                        />
                      </span>
                    ) : (
                      <p className='text-white'>
                        {balanceLoading ? <LoadingOutlined /> : rate}
                      </p>
                    )}

                    {walletPopup.name == "BNB" ? (
                      walletPopup.name == "BNB" ? (
                        walletPopup.isSec == "Sec" ? (
                          <Image src={bnb1} height={15} width={15} />
                        ) : (
                          <Image src={bnb} height={15} width={15} />
                        )
                      ) : (
                        <Image src={bnb1} height={15} width={15} />
                      )
                    ) : walletPopup.name == "USDC" ? (
                      <Image src={usdc} height={15} width={15} />
                    ) : walletPopup.name == "USDT" ? (
                      <Image src={usdt} height={15} width={15} />
                    ) : (
                      ""
                    )}
                  </p>
                </div>
              </div>

              <div className='flex justify-center py-5'>
                <MdKeyboardDoubleArrowDown size={18} className='text-white' />
              </div>

              <div className='w-full rounded-md p-2 px-3 mt-2 border-[0.5px] border-gray-600 bg-[#202020]'>
                <div className='flex justify-between'>
                  <p className='flex items-center gap-1 text-white'>
                    {walletPopup.title}{" "}
                    {walletPopup.name == "BNB"
                      ? walletPopup.isSec == "Sec"
                        ? "BNB"
                        : "ETH"
                      : walletPopup.name}
                  </p>
                  <div className='flex items-center justify-between text-white border-gray-600 rounded-md'>
                    {walletPopup.title == "Deposit" ? (
                      <span className='w-28'>
                        <input
                          type='text'
                          className='bg-[#202020] text-white py-2 px-4 outline-none border-[0.5px] border-gray-600 text-end'
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </span>
                    ) : (
                      <p className='text-white'>{amount}</p>
                    )}

                    <span className='flex items-center gap-1 py-2 pl-1 text-sm text-white'>
                      {/* {active.Icon} */}
                      {walletPopup.name == "BNB" ? (
                        walletPopup.name == "BNB" ? (
                          walletPopup.isSec == "Sec" ? (
                            <Image src={bnb1} height={15} width={15} />
                          ) : (
                            <Image src={bnb} height={15} width={15} />
                          )
                        ) : (
                          <Image src={bnb1} height={15} width={15} />
                        )
                      ) : walletPopup.name == "USDC" ? (
                        <Image src={usdc} height={15} width={15} />
                      ) : walletPopup.name == "USDT" ? (
                        <Image src={usdt} height={15} width={15} />
                      ) : (
                        ""
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex gap-4 mt-4'>
                <button
                  className='login'
                  onClick={
                    !loading
                      ? () =>
                          dispatch(setWalletPopup({ open: false, title: "" }))
                      : () => onModalRequestClose()
                  }
                >
                  Close
                </button>

                {!amount || amount == 0 || !Number(amount) ? (
                  <button
                    style={{
                      backgroundColor: loading ? "gray" : "",
                      cursor: "no-drop",
                    }}
                    disabled={true}
                    className='flex items-center justify-center w-full gap-2 register'
                  >
                    {loading ? "Please Wait..." : walletPopup?.title}
                  </button>
                ) : amount > rate ? (
                  <button
                    style={{ backgroundColor: "gray" }}
                    disabled={true}
                    className='flex items-center justify-center w-full gap-2 register'
                  >
                    Check Your Wallet
                  </button>
                ) : (
                  <button
                    style={{ backgroundColor: loading ? "gray" : "" }}
                    disabled={loading}
                    onClick={loading ? () => {} : () => handleClick()}
                    className='flex items-center justify-center w-full gap-2 register'
                  >
                    {loading ? "Please Wait..." : walletPopup?.title}
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

export default DepositModal;
