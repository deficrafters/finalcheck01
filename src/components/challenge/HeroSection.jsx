"use client";
import { useContext } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
// import HeroAnim from "../../../public/heroCharacter.json";
// import HeroAnim from '/challange.svg'
import ChallengeIcon from "./ChallengeIcon";
import GlobalContext from "../context/global/GlobalContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function HeroSection({ preHeading, heading, postHeading }) {
  const { setOpenSub } = useContext(GlobalContext);

  const router = useRouter();

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
    loginOpen,
  } = useContext(GlobalContext);

  const handleClick = () => {
    // setOpenSub(false);
    router.push("/challenge?showRegister=true");

    setLoginOpen((prev) => !prev);

    // document.body.style.overflow = loginOpen ? "auto" : "hidden";
  };

  const handleReferLink = () => {
    let getUserId = JSON.parse(localStorage.getItem("jwt"));

    let links = `https://dreamgamez.io?showRegister=true&Ref=${getUserId.data._id}`;

    navigator.clipboard
      .writeText(links)
      .then(() => {
        //  console.log("Text copied to clipboard");
      })
      .catch((error) => {
        // console.error('Error copying text: ', error);
        toast.error("Something Went Wrong");
      });

    toast.success("Refer Link Copied!");
  };

  return (
    <section
      className={`w-full h-[calc(85vh-75px)] xs:h-[calc(100vh-75px)] md:h-[calc(70vh-75px)] !px-0 !md:px-8 !lg:px-10 !xl:px-16 overflow-hidden py-6`}
      style={{
        backgroundImage: 'url("/challenge-banner-bg.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100%",
      }}
    >
      <div
        className={`wrapper-desk grid grid-cols-6 gap-0 md:gap-2 relative h-[100%]`}
      >
        <div
          className={`static  w-auto h-auto col-span-3 flex flex-col items-center justify-center md:block self-center justify-self-center`}
        >
          <h1
            className={`text-[28px] sm:text-[32px] leading-[60%] md:leading-[110%] capitalize text-center`}
          >
            <span className={`block  text-[10px] md:text-[15px]`}>
              Participate in the 100K
            </span>
            <span className={`font-normal block text-[14px] md:text-[22px]`}>
              Pre-Registration Challenge to
            </span>
            <span
              className={`font-normal block text-[18px] md:text-[40px] pt-3`}
            >
              WIN
            </span>
            <br />
            <div className={`flex items-center`}>
              <img
                src={`/challenge-banner-10.png`}
                width="100%"
                height="100%"
              />
            </div>
          </h1>

          <h5
            className={`flex flex-wrap gap-2 xl:gap-4 text-[8px] md:text-[14px]  font-normal uppercase mt-2 text-center flex justify-center items-center`}
          >
            <span>No Credit card or wallet required</span>
          </h5>

          <div
            className={` gap-2 text-center flex justify-center items-center`}
          >
            <div>
              <div
                className={` gap-2 text-center flex justify-center items-center`}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={handleClick}
                  className={`block btnRect !px-3 !py-2 md:!px-6 md:!py-4 !rounded-[10px] mt-4  text-[10px] md:text-[16px]`}
                >
                  Register Now
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`col-span-1 `}></div>
        <div
          className={`scale-[1] xs-translate-x-[30px] -translate-y-[0px] sm:translate-x-0 sm:translate-y-0 col-span-2  self-center justify-self-center`}
          style={{ zIndex: 0 }}
        >
          <img src={`/challenge-banner-coin.png`} width="400" height="400" />
        </div>
      </div>
    </section>
  );
}

{
  /* 
            {typeof window !== "undefined" &&
              window.localStorage.getItem("jwt") && (
                <div>
                  <div>
                    <div
                      onClick={handleReferLink}
                      style={{ cursor: "pointer" }}
                      className={`block btnRect !px-6 !py-4 !rounded-[10px] mt-4`}
                    >
                      Referral Link
                    </div>
                  </div>
                </div>
              )} */
}
