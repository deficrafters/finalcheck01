"use client";
import { useState, useContext } from "react";
import { usePathname, useRouter } from "next/navigation.js";
import Link from "next/link";
import Image from "next/image";
import { content } from "../../utils/content.js";
import BrandLogo from "./BrandLogo";
import GlobalContext from "../context/global/GlobalContext.js";
import { FaPlay } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setSpinnerPopup, setTicketPopup } from "@/store/slices/popupSlice";

import GlobalContexts from "@/components/context/global/GlobalContext";
import { SpinModal } from "../challenge/spin-modal/index.jsx";
import toast from "react-hot-toast";

const { sideMenu } = content.menus;

export default function SideNavigation() {
  const [coinQuestEth, setCoinQuestEth] = useState(false);
  const {
    subOpen,
    setSubOpen,
    sideNavSubMenu,
    setSideNavSubMenu,
    sideNavPrimaryMenu,
    setSideNavPrimaryMenu,
    sideNavActiveMenu,
    setSideNavActiveMenu,
    loginOpen
  } = useContext(GlobalContext);


  const {
    setLoginOpen,
  } = useContext(GlobalContexts);

  const pathname = usePathname();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!subOpen) {
      setSideNavActiveMenu(null);
      setSideNavSubMenu(null);
      setSideNavPrimaryMenu(null);
    }
  };

  const handleOpenRegister = () => {

    router.push("?showRegister=true")

    setLoginOpen((prev) => !prev);

  };

  const onMenuWithSub = (menuName, index) => {
    if (sideNavPrimaryMenu === menuName) {
      setSideNavPrimaryMenu(null);
      setSideNavActiveMenu(null);
      setSideNavSubMenu(null);
    } else {
      setSideNavSubMenu(null);
      setSideNavActiveMenu(menuName);
      setSideNavPrimaryMenu(menuName);
    }
  };

  const onMenuWithoutSub = (menuName, index) => {
    setSideNavSubMenu(null);
    setSideNavActiveMenu(menuName);
    setSideNavPrimaryMenu(menuName);
  };

  const onSubMenuClick = (subMenuName) => {
    setSideNavSubMenu(subMenuName);
  };

  const router = useRouter();

  const handleClicked = () => {
    let getdats = localStorage.getItem("jwt");
    if (getdats) {
      dispatch(setSpinnerPopup(true));
    } else {
      dispatch(setSpinnerPopup(true));
    }
  };

  const handleCopy = () => {
    return

    const text = JSON.parse(window.localStorage.getItem("jwt")).data.SponserCode

    // Check if the Clipboard API is supported
    if (navigator.clipboard && window.isSecureContext) {
      // Use the Clipboard API
      navigator.clipboard.writeText(text).then(() => {
        console.log('Text copied to clipboard');
        toast.success("Sponser Code Copied")
      }).catch((error) => {
        console.error('Failed to copy text to clipboard:', error);
      });
    } else {
      // Fallback for browsers that do not support the Clipboard API
      // Create a temporary textarea element
      const textarea = document.createElement('textarea');
      textarea.value = text;
      
      // Ensure the textarea is not visible
      textarea.style.position = 'fixed';  // Prevent scrolling to bottom of page in MS Edge
      textarea.style.opacity = '0';
      
      // Append the textarea to the document body
      document.body.appendChild(textarea);
      
      // Select the text
      textarea.select();
      
      // Copy the text to the clipboard
      try {
        document.execCommand('copy');
        console.log('Text copied to clipboard');
        toast.success("Sponser Code Copied")

      } catch (error) {
        console.error('Failed to copy text to clipboard:', error);
      }
      
      // Remove the textarea element
      document.body.removeChild(textarea);
    }
  };
  

  return (
    <>
      <nav
        className={`fixed top-0 left-0 bg-cool-05 hidden lg:flex flex-col w-[255px] h-screen border-r-[1px] border-cool-20 z-10`}
      >
        <div
          className={`flex items-center justify-center min-h-[75px] `}
        >
          <BrandLogo imageSource={"/Logo.png"} onClick={handleClick} />
        </div>
        <div className={`px-4 pt-8 flex flex-col h-screen`}>
          {
            typeof window !== "undefined" && window.localStorage.getItem("jwt") ?

            <div
            style={{cursor:"pointer"}}
              onClick={handleCopy}
            className={`flex items-center pl-2 py-2 gap-2 text-cool-90  bg-cool-40 rounded-md transition-all duration-75`}
          >
            <Image
              src="/nav-icons/nav-img-1.png"
              alt=""
              width={100}
              height={100}
              className={`w-[20px] h-auto opacity-70`}
            />
            <span className={`capitalize`}>Connected</span>
          </div>

            


              :
              <div
              onClick={() =>handleOpenRegister()}
              href={"/wallet"}
              className={`flex items-center pl-2 py-2 gap-2 text-cool-90  bg-cool-40 rounded-md transition-all duration-75`}
            >
              <Image
                src="/nav-icons/nav-img-1.png"
                alt=""
                width={100}
                height={100}
                className={`w-[20px] h-auto opacity-70`}
              />
              <span className={`capitalize`}>Connect wallet</span>
            </div>
            //   <div
            //   href={"/wallet"}
            //   className={`flex items-center pl-2 py-2 gap-2 text-cool-90  bg-cool-40 rounded-md transition-all duration-75`}
            // >
            //   <Image
            //     src="/nav-icons/nav-img-1.png"
            //     alt=""
            //     width={100}
            //     height={100}
            //     className={`w-[20px] h-auto opacity-70`}
            //   />
            //   <span className={`capitalize`}>Connect wallet</span>
            // </div>



          }


          <hr style={{ border: '0.01rem solid rgba(128, 128, 128, 0.3)' }} className={`mt-4 mb-4`} />
          {sideMenu.map((item, index) => (
            <div key={index}>
              {(item.displayTitle && item.displayTitle.trim() !== '') &&
                <p style={{ color: 'white', fontWeight: 'bold', fontSize: '14px', padding: "8px" }}>
                  {item.displayTitle}
                </p>
              }

              {item.content.map((content, index) => {




                // if (content.name == "Dreamz Three") return


                return <div key={index}>
                  {content.hasSubMenu ? (
                    <div
                      onClick={() => onMenuWithSub(content.name, index)}
                      className={`cursor-pointer flex items-center justify-between pl-2 pr-3 text-cool-90 ${sideNavPrimaryMenu === content.name
                        ? "bg-cool-40 text-white"
                        : "bg-transparent hover:bg-cool-30/50 hover:text-white"
                        } rounded-md transition-all duration-75 py-2`}
                    >
                      <div className={`flex items-center gap-2`}>
                        {content.containsIcon && (
                          <Image
                            src={content.icon}
                            alt=""
                            width={100}
                            height={100}
                            className={`w-[20px] h-auto opacity-70`}
                          />
                        )}

                        <span className={`capitalize`}>{content.name}</span>
                      </div>
                      <FaPlay
                        size="10px"
                        className={` ${sideNavPrimaryMenu === content.name
                          ? "text-white rotate-90"
                          : "text-cool-90/50 "
                          } transition-all duration-150`}
                      />
                    </div>
                  ) : (

                    content.externalWebsite ?
                      <Link
                        onClick={() => onMenuWithoutSub(content.name, index)}
                        href={content.externalWebsite}
                        target="__blank"
                        className={`flex items-center pl-2 py-2 gap-2 text-cool-90  ${sideNavPrimaryMenu === content.name
                          ? "bg-cool-40 text-white"
                          : "bg-transparent hover:bg-cool-30/50 hover:text-white"
                          } rounded-md transition-all duration-75`}
                      >
                        {content.containsIcon && (
                          <Image
                            src={content.icon}
                            alt=""
                            width={100}
                            height={100}
                            className={`w-[20px] h-auto opacity-70`}
                          />
                        )}

                        <span className={`capitalize`}>{content.name}</span>
                      </Link>
                      :

                      <Link
                        onClick={() => onMenuWithoutSub(content.name, index)}
                        href={content.route}
                        className={`flex items-center pl-2 py-2 gap-2 text-cool-90  ${sideNavPrimaryMenu === content.name
                          ? "bg-cool-40 text-white"
                          : "bg-transparent hover:bg-cool-30/50 hover:text-white"
                          } rounded-md transition-all duration-75`}
                      >
                        {content.containsIcon && (
                          <Image
                            src={content.icon}
                            alt=""
                            width={100}
                            height={100}
                            className={`w-[20px] h-auto opacity-70`}
                          />
                        )}

                        <span className={`capitalize`}>{content.name}</span>
                      </Link>
                  )}

                  <div
                    className={`${sideNavActiveMenu === content.name && content.hasSubMenu
                      ? "max-h-[192px]"
                      : "max-h-0"
                      } overflow-hidden transition-all duration-150`}
                  >
                    {content.subMenuItems.map((content, i) => (
                      <Link
                        key={i}
                        href={content.route}
                        onClick={() => onSubMenuClick(content.name)}
                        className={` pl-8 block ${sideNavSubMenu === content.name || pathname === content.route
                          ? "bg-cool-30/70 text-white"
                          : "bg-transparent hover:bg-cool-30/50"
                          } text-cool-70 hover:text-white py-1 rounded-md transition-all duration-100`}
                      >
                        {content.name}
                      </Link>
                    ))}

                  </div>
                </div>
              })}
              {index != sideMenu.length - 1 && (
                <hr style={{ border: '0.01rem solid rgba(128, 128, 128, 0.3)' }} className={`mt-4 mb-4`} />
              )}
            </div>
          ))}

        </div>
      </nav>
      <SpinModal />
    </>
  );
}