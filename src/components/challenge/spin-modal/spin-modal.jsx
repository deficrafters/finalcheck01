"use client";

import { useEffect, useState, useContext } from "react";
import { useSpinModal } from "./hook";
import Modal from "react-modal";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Logo from "../../../../public/assets/images/fortune-wheel-button-logo.svg";
import Wheel from "./smile";
import { useRouter } from "next/navigation";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import GlobalContext from "@/components/context/global/GlobalContext";
import LoginFormContext from "@/components/context/global/GlobalContext";
import { setSpinnerPopup } from "@/store/slices/popupSlice";

const rotation = {
  0: "translate-x-0 translate-y-[-177px] lg:translate-y-[-220px] rotate-0",
  1: "translate-x-[125px] translate-y-[-125px] lg:translate-x-[157px] lg:translate-y-[-157px] rotate-[45deg]",
  2: "translate-x-[177px] lg:translate-x-[220px] translate-y-0 rotate-[90deg]",
  3: "translate-x-[125px] translate-y-[125px] lg:translate-x-[157px] lg:translate-y-[157px] rotate-[135deg]",
  4: "translate-x-0 translate-y-[177px] lg:translate-y-[220px] rotate-[180deg]",
  5: "translate-x-[-125px] translate-y-[125px] lg:translate-x-[-157px] lg:translate-y-[157px] rotate-[225deg]",
  6: "translate-x-[-177px] lg:translate-x-[-220px] translate-y-0 rotate-[270deg]",
  7: "translate-x-[-125px] translate-y-[-125px] lg:translate-x-[-157px] lg:translate-y-[-157px] rotate-[315deg]",
};

const SpinModal = () => {

  const {
    wheelRef,
    data,
    selected,
    won,
    handleNext,
    handlePrev,
    tryAgain,
    isRotating,
    startRotation,
    hours,
    minutes,
    seconds,
    isLoading,
    setisLoading,
    gotRewardCount,
  } = useSpinModal();

  const {
    isLogin,
    setLoginOpen,
    setSubOpen,
    setProfileMenuOpen,
    hamOpen,
    setHamOpen,
    setSideNavActiveMenu,
    setSideNavSubMenu,
    setSideNavPrimaryMenu,
  } = useContext(GlobalContext);

  const { loginOpen } = useContext(LoginFormContext);
  const dispatch = useDispatch();
  const isSpinnerPopup = useSelector((state) => state.popup.spinnerPopup);

  const [datss, setdatss] = useState("");

  let Routers = useRouter();

  const handleRegister = () => { };

  const onModalRequestClose = () => {
    dispatch(setSpinnerPopup(false));
  };

  const handleOpenRegistre = () => {
    onModalRequestClose()
    Routers.push("?showRegister=true")

    setLoginOpen((prev) => !prev);

    // document.body.style.overflow = loginOpen ? "auto" : "hidden";

  }

  return (
    <Modal
      isOpen={isSpinnerPopup}
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
      <div className="flex h-[80vh] lg:h-auto items-center lg:w-[70%] w-[80%] justify-center">
        {/* <div className="flex-1 h-full bg-primary-dark flex flex-col overflow-y-scroll p-5 outline-none md:rounded-lg"> */}
        <div className="flex h-[70vh] msx-h-[90vh] lg:h-fit justify-center items-center">
          <div className="h-full bg-left lg:ml-24 bg-no-repeat rounded-2xl p-[20px] lg:px-[70px] lg:py-[30px] w-full flex items-center justify-center flex-col lg:flex-row border relative bg-[#202020] main-body">
            <button
              className="absolute lg:top-0 top-2 lg:-right-[44px] right-2 hover:bg-[#353535] rounded-md text-white/70 hover:text-white transition-all ease-in-out font-bold"
              onClick={onModalRequestClose}
            >
              <IoClose size={36} />
            </button>
            <div
              className=" 
						w-[289px] h-[289px] 
						md:w-[400px] 
						md:h-[400px] 
						lg:w-[400px] 
						lg:h-[400px] 
						aspect-square
						rounded-full flex justify-center items-center relative lg:left-[-145px]"
            >
              <div
                id="frame"
                className="topbox bg-center w-28 h-20 lg:w-40 lg:h-32 absolute top-[-8px] lg:-top-5 left-1/2 ml-[-56px] lg:ml-[-80px] z-10 bg-no-repeat"
              ></div>

              <div
                ref={wheelRef}
                className="box-around w-full h-full lg:w-[400px] lg:h-[400px] md:w-[400px] md:h-[400px] relative"
              >
                {/* <div ref={wheelRef} className="box-around w-full h-full lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px] relative"> */}
                {/* //@ts-ignore */}
                {data[selected].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`absolute flex flex-col items-center justify-center top-1/2 left-1/2 w-[110px] h-[110px] ml-[-55px] text-white transform origin-[50%_0] ${rotation[index]}`}
                    >
                      <span>
                        {/* <Wheel /> */}
                        <item.icon />
                      </span>
                      <span className="text-xs lg:text-xl">
                        {item.value == "RESPIN"
                          ? item.value
                          : item.value + " DMZT"}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex absolute w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] top-1/2 left-1/2 border-[0.5px] ml-[-75px] mt-[-75px] lg:ml-[-100px] lg:mt-[-100px] rounded-full p-[7px]">
                <div className="w-full h-full relative flex justify-center items-center">
                  {won ? (
                    <div
                      style={{
                        background:
                          "linear-gradient(148.9deg,#2a2a2a 16.9%,#131313 83.89%)",
                      }}
                      className="m-0 hover:cursor-pointer relative w-full h-full rounded-full flex flex-col justify-center items-center shadow-md p-4"
                    >
                      <div
                        style={{
                          backgroundSize: " 100% 100%, 100% 100%",
                          backgroundPosition: "50%, 50%",
                          transition: "opacity .3s",
                        }}
                        className="bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIyIiBoZWlnaHQ9IjEyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2MSIgY3k9IjYxIiByPSI2MCIgc3Ryb2tlPSJ1cmwoI2EpIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iNjEiIHkxPSIxIiB4Mj0iNjEiIHkyPSIxMjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjNkE0QzIxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRDZBQzZGIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+), linear-gradient(147.25deg, #2a2a2a 13.72%, #131313 85.05%)] button-inner w-full h-full rounded-full flex flex-col justify-center items-center bg-no-repeat"
                      >
                        <Image
                          src={Logo}
                          width={Logo.width}
                          height={Logo.height}
                          alt="Logo"
                          className="w-32 h-14 object-contain"
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      style={{
                        background:
                          "linear-gradient(148.9deg,#2a2a2a 16.9%,#131313 83.89%)",
                      }}
                      className="m-0 hover:cursor-pointer relative w-full h-full rounded-full flex flex-col justify-center items-center shadow-md p-4"
                    >
                      <div
                        style={{
                          backgroundSize: " 100% 100%, 100% 100%",
                          backgroundPosition: "50%, 50%",
                          transition: "opacity .3s",
                        }}
                        className="bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIyIiBoZWlnaHQ9IjEyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2MSIgY3k9IjYxIiByPSI2MCIgc3Ryb2tlPSJ1cmwoI2EpIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iNjEiIHkxPSIxIiB4Mj0iNjEiIHkyPSIxMjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjNkE0QzIxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRDZBQzZGIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+), linear-gradient(147.25deg, #2a2a2a 13.72%, #131313 85.05%)] button-inner w-full h-full rounded-full flex flex-col justify-center items-center bg-no-repeat"
                      >
                        <Image
                          src={Logo}
                          width={Logo.width}
                          height={Logo.height}
                          alt="Logo"
                          className="w-32 h-14 object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:w-[350px] lg:ml-[-110px] flex flex-col items-center text-white">
              {won ? (
                <span className="py-10 text-xl text-center">
                  You got your {gotRewardCount == 0 ? "-" : gotRewardCount}{" "}
                  reward. <span className="text-[#EBBE7D]"></span> Thanks For
                  Spinning The Wheel
                  <br />
                </span>
              ) : (
                <>

                  {tryAgain ? (

                    <span className="py-10">Please Try Again.</span>
                    
                  ) : (
                    <span className="py-10 font-normal lg:text-3xl text-2xl text-center">
                      Spin the wheel to 
                      <br /> win up to 1,000 DMZT!
                      <br />
                      {/* <span className="text-cool-50 font-semibold">
                        chance to win 10,000 USDT
                      </span> */}
                    </span>
                  )}
                  
                  {/* 
								{
									isLoading &&
									<p>Loading Right Now</p>
								} */}
                  {!isLoading && !isRotating && won !== null && isLoading ? (
                    <button className="mt-1 px-5 py-3 text-xl font-bold bg-[#ebbe7d] hover:bg-white outline-none border-none rounded transition-all duration-300 ease-in-out hover:text-[#ebbe7d]">
                      Please Wait...
                    </button>
                  ) : datss ? (
                    <button
                      className="mt-1 px-5 py-3 text-xl font-bold register  outline-none border-none rounded transition-all duration-300 ease-in-out "
                      onClick={startRotation}
                    >
                      {" "}
                      Spin & Win
                    </button>
                  ) :
                    typeof window !== "undefined" && window.localStorage.getItem("jwt") ?
                      <>

                        <button
                          className="mt-1 px-5 py-3 text-xl font-bold register  outline-none border-none rounded transition-all duration-300 ease-in-out "
                          onClick={startRotation}
                        >
                          Spin & Win
                        </button>
                      </>

                      :
                      <>

                        <button
                          className="mt-1 px-5 py-3 text-xl font-bold register  outline-none border-none rounded transition-all duration-300 ease-in-out "
                          onClick={() => handleOpenRegistre()}
                        >
                          Register Now
                        </button>
                      </>

                  }
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SpinModal;
