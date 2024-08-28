"use client";
import { useContext } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import HeroAnim from "../../../public/heroCharacter.json";
import GlobalContext from "../context/global/GlobalContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const { setOpenSub } = useContext(GlobalContext);

  const router = useRouter();

   
const client = createThirdwebClient({ clientId: "a24339e41559bc3eaf3bdb3842ea7a43" });
 

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

    router.push("?showRegister=true");

    setLoginOpen((prev) => !prev);

    // document.body.style.overflow = loginOpen ? "auto" : "hidden";
  };

  const handleReferLink = () => {
    let getUserId = JSON.parse(localStorage.getItem("jwt"));

    let links = `https://dreamgamez.io?showRegister=true&Ref=${getUserId.data._id}`;

    navigator.clipboard
      .writeText(links)
      .then(() => {
        // console.log("Text copied to clipboard");
      })
      .catch((error) => {
        // // console.error('Error copying text: ', error);
        toast.error("Something Went Wrong");
      });

    toast.success("Refer Link Copied!");
  };

  return (
    <section
      className={`w-full h-[240px] md:h-[390px] py-2 !px-0 !md:px-8 !lg:px-10 !xl:px-16 overflow-hidden gradientBlueBlackBG`}
    >
      <div
        className={`wrapper-desk grid grid-cols-2 gap-0 md:gap-2 relative h-[100%]`}
      >
        <div
          className={`scale-[1] xs:scale-125 sm:scale-[0.7] transform translate-x-[5%] translate-y-[-10%] col-span-1 md:col-span-1 self-center justify-self-center mt-4`}
        >
          <Lottie animationData={HeroAnim} />
        </div>
        <div
          className={`h-full md:w-auto md:h-auto col-span-1 md:col-span-1 flex flex-col items-center justify-center md:block justify-self-center py-16`}
        >
          <h1
            className={`text-[16px] sm:text-[32px] leading-[110%] capitalize text-center md:text-left`}
          >
            <span className={`font-normal block`}>
              play small <br className={`block xs:hidden md:block`} />
              win big with
            </span>
            <span
              className={`block uppercase font-semibold text-hl-01 mt-[6px] text-[16px] sm:text-[32px]`}
            >
              Coin Quest Games
            </span>
          </h1>
          <h5
            className={`flexRowCentered flex-wrap gap-2 xl:gap-4 text-[8px] md:text-[20px] font-normal uppercase mt-2`}
          >
            <span>guaranteed winner</span>
            <span className={``}>|</span>
            <span>limited pool</span>
          </h5>

          <ConnectButton
  client={client}
  wallets={[
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
  ]}
/>;



          <div>
            {typeof window !== "undefined" &&
            window.localStorage.getItem("jwt") ? (
              <div>
                <div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={()=>router.push("/games/coin-quest")}
                    className={`block btnRect !xs:text-[12px] !px-6 !py-4 !rounded-[10px] mt-4`}
                  >
                    PLAY NOW
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={handleClick}
                    className={`block btnRect !xs:text-[12px] !px-6 !py-4 !rounded-[10px] mt-4`}
                  >
                    Register Now
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
