import React, { useState } from "react";
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

const TicketModal = () => {
  
  const dispatch = useDispatch();

  const ticketPopup = useSelector((state) => state.popup.ticketPopup);
  const [progressBar, setProgressBar] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

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
      Icon: <FaEthereum color="#716b94" fontSize={18} />,
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
      Icon: <SiBinance color="#F3BA2F" fontSize={18} />,
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
      Icon: <FaBtc color="#F3BA2F" fontSize={18} />,
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
    dispatch(setTicketPopup(false));
  };

  const active = data.find((item) => item.active);
  return (
    <Modal
      isOpen={ticketPopup}
      onRequestClose={onModalRequestClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      className="flex flex-col justify-center items-center outline-none"
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
      <div className="flex h-[80vh] lg:h-auto items-center justify-center">
        {/* <div className="flex-1 h-full bg-primary-dark flex flex-col overflow-y-scroll p-5 outline-none md:rounded-lg"> */}
        <div className="flex h-[70vh] msx-h-[90vh] lg:h-fit justify-center items-center">
          <div className="h-full bg-left bg-no-repeat rounded-lg p-4 lg:py-5 w-full flex items-center justify-center flex-col lg:flex-row border-[0.5px] border-gray-600 relative bg-[#000000]">
            <button
              className="absolute top-2 right-2 p-1 hover:bg-[#202020] rounded-full text-white/70 hover:text-white transition-all ease-in-out font-bold"
              onClick={onModalRequestClose}
            >
              <IoClose size={24} />
            </button>
            <div className="w-[500px]">
              <h2 className="text-center text-xl text-white font-semibold">
                Buy Tickets
              </h2>
              <p className="text-center text-gray-500 text-sm">
                Get tickets and you can win a Raffles
              </p>
              <div className="border-[0.5px] border-blue-400 w-full rounded-xl p-3 mt-4 bg-[#202020]">
                <div className="flex gap-2 items-center">
                  <input type="radio" name="ticket" id="ticket1" />
                  <span className="border text-xs rounded-full border-green-600 font-semibold px-3 py-1 bg-green-200 text-green-600">
                    Connected Wallet
                  </span>
                </div>
                <p className="text-gray-500 text-xs mt-2">{active.desc}</p>
                <p className="text-gray-500 text-sm mt-2 flex items-center gap-2">
                  <BiLinkExternal fontSize={18} />
                  {active.address}
                </p>
                <div className="flex justify-between text-white mt-4 text-sm mb-2">
                  <p className="flex gap-1 items-center">
                    {active.Icon}

                    {active.currentAmount}
                  </p>
                  <p className="flex gap-1 items-center">
                    One Ticket cost {active.Icon}
                    {active.ticketCost}
                  </p>
                </div>
              </div>

              <div className=" w-full rounded-xl p-3 mt-2 bg-[#202020]">
                <div className="flex gap-2 items-center">
                  <input type="radio" name="ticket" id="ticket1" />
                  <span className="text-sm text-white  px-3 py-1 flex gap-2 items-center">
                    {/* <Image
                      src="/logo_billianior.png"
                      width={100}
                      height={15}
                      alt="logo"
                    /> */}
                    Wallet
                  </span>
                </div>
              </div>

              <div className=" w-full rounded-xl p-2 mt-2 border border-[#202020]">
                <div className="flex justify-between">
                  {data.map((item,index) => {
                    return (
                      <div
                      key={index}
                        onClick={() => onSelectCoin(item.id)}
                        className={`flex gap-2 items-center w-full justify-center rounded-lg cursor-pointer ${
                          item.active ? "bg-cool-50" : ""
                        }`}
                      >
                        <span className="text-sm text-white px-3 py-2 flex gap-1 items-center">
                          {/* <FaEthereum color="#716b94" fontSize={18} /> */}
                          {item.Icon}
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-center py-5">
                <MdKeyboardDoubleArrowDown size={18} className="text-white" />
              </div>

              <div className="w-full rounded-md p-2 mt-2 border-[0.5px] border-gray-600 bg-[#202020]">
                <div className="flex justify-between">
                  <p className="flex gap-1 items-center text-white">
                    {active.Icon}
                    {active.amount}
                  </p>
                  <div className="border-[0.5px] flex justify-between border-gray-600 items-center px-5 rounded-md text-white">
                    <p>{active.quantity}</p>
                    <span className="text-sm text-white px-3 py-2 flex gap-1 items-center">
                      {active.Icon}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div
                  className="flex items-center w-full gap-x-3 whitespace-nowrap"
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                >
                  <div
                    className="flex w-full h-3 bg-transparent rounded-full overflow-hidden dark:bg-neutral-700"
                    role="progressbar"
                    aria-valuenow={progressBar}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    onMouseDown={handleMouseDown}
                  >
                    <div
                      className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                      style={{ width: `${progressBar}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex w-full mt-4">
                  {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(
                    (progress) => (
                      <p
                        key={progress}
                        className={`w-full text-xs ${
                          progress === Math.round(progressBar)
                            ? "text-white font-bold"
                            : "text-gray-400"
                        }`}
                      >
                        {progress}%
                      </p>
                    )
                  )}
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <button className="login">Close</button>
                <button className="register w-full">Buy Tickets</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TicketModal;
