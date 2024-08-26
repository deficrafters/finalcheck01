"use client";
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { content } from "@/utils/content.js";
import Link from "next/link";
import Image from "next/image";
import GlobalContext from "../context/global/GlobalContext";
import { FaTimes } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
  
// const { games } = content.menus.sideMenu;
const { sideMenu } = content.menus;


const {
  homeMenu,
  cartMenu,
  cqGameMenu,
  cqMenu,
  jackpotGameMenu,
  aboutMenu,
  dreamDualGameMenu,
  dreamThreeGameMenu,
} = content.menus;

export default function HamMenu() {
  const pathname = usePathname();
  const [subMenu, setSubMenu] = useState(false);
  const {
    hamOpen,
    setHamOpen,
    subOpen,
    setSubOpen,
    sideNavSubMenu,
    setSideNavSubMenu,
    sideNavPrimaryMenu,
    setSideNavPrimaryMenu,
    sideNavActiveMenu,
    setSideNavActiveMenu,
  } = useContext(GlobalContext);

  const handleClose = () => {
    setHamOpen(false);
    setSubMenu(false);
    setSubOpen(false);
    // document.body.style.overflow = hamOpen ? "auto" : "hidden";
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

  const handleClick = () => {
    setSubMenu(false);
    setSubOpen(false);
  };

  const handleSubMenu = (menuItem, index) => {
    setSideNavSubMenu(null);
    setSideNavActiveMenu(menuItem);
    setSideNavPrimaryMenu(menuItem);
  };

  const onMenuWithoutSub = (menuItem, index) => {
    setHamOpen(false);
    setSideNavSubMenu(null);
    setSideNavActiveMenu(menuItem);
    setSideNavPrimaryMenu(menuItem);
    // document.body.style.overflow = hamOpen ? "auto" : "hidden";
  };

  const onSubMenuClick = (subMenuName) => {
    setHamOpen(false);
    // console.log(pathname);
    setSideNavSubMenu(subMenuName);
    // document.body.style.overflow = hamOpen ? "auto" : "hidden";
  };

  // const handleSubMenu = (value) => {
  //   if (value === "Coin Quest") {
  //     setSubOpen(true);
  //     setSubMenu(true);
  //   } else {
  //     setSubMenu(false);
  //     setSubOpen(false);
  //   }
  // };

  const handleSubMenuClick = () => {
    setHamOpen(false);
    setSubMenu(false);
    setSubOpen(false);
    // document.body.style.overflow = hamOpen ? "auto" : "hidden";
  };

  return (
    <div
      className={`${
        hamOpen ? "block" : "hidden"
      } lg:hidden fixed top-0 left-0 w-full h-full bg-black text-center overflow-y-scroll z-40 flex items-center justify-center`}
    >
      <div className={`relative wrapper-desk !w-[100%] py-8`}>
        <button onClick={handleClose} className={`fixed top-0 right-0 m-4`}>
          <FaTimes />
        </button>

        <div
          className={`flex flex-col border-t-2 border-slate-600/40 mt-2 pt-2`}
        >
           <Link
            onClick={() => onMenuWithoutSub("wallet", index)}
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
          </Link>
         

          <hr style={{ border: '0.01rem solid rgba(128, 128, 128, 0.3)' }} className={`mt-4 mb-4`}/>
          {sideMenu.map((item, index) => (
            <div key={index}>
              {(item.displayTitle && item.displayTitle.trim() !== '') &&
                  <p style={{ color: 'white', fontWeight: 'bold', fontSize: '14px', padding: "8px", textAlign: "left"}}>
                  {item.displayTitle}
                </p>
              }

            
              {item.content.map((content, index) => (
                <div key={index}>
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
                
            ))}
              {index != sideMenu.length - 1 && (
                  <hr style={{ border: '0.01rem solid rgba(128, 128, 128, 0.3)' }} className={`mt-4 mb-4`}/>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const HomeMenu = ({ onClose }) => {
  return (
    <>
      {homeMenu.map((item, index) => (
        <Link
          onClick={onClose}
          href={item.url}
          key={index}
          className={`sideNavLinks`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

const CoinQuestMenu = ({ onClose }) => {
  return (
    <>
      {cqMenu.map((item, index) => (
        <Link
          onClick={onClose}
          href={item.url}
          key={index}
          className={`sideNavLinks`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

const CoinQuestGameMenu = ({ onClose }) => {
  return (
    <>
      {cqGameMenu.map((item, index) => (
        <Link
          onClick={onClose}
          href={item.url}
          key={index}
          className={`sideNavLinks`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

const JackpotMenu = ({ onClose }) => {
  return (
    <>
      {jackpotGameMenu.map((item, index) => (
        <Link
          onClick={onClose}
          href={item.url}
          key={index}
          className={`sideNavLinks`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

const DreamzDual = ({ onClose }) => {
  return (
    <>
      {dreamDualGameMenu.landing.map((item, index) => (
        <Link
          onClick={onClose}
          href={item.url}
          key={index}
          className={`sideNavLinks`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};
const DreamzDualGameMenu = ({ onClose }) => {
  return (
    <>
      {dreamDualGameMenu.games.map((item, index) => (
        <Link
          onClick={onClose}
          href={item.url}
          key={index}
          className={`sideNavLinks`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

const DreamzThreeGameMenu = ({ onClose }) => {
  return (
    <>
      {dreamThreeGameMenu.map((item, index) => (
        <Link
          onClick={onClose}
          href={item.url}
          key={index}
          className={`sideNavLinks`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

const AboutMenu = ({ onClose }) => {
  return (
    <>
      {aboutMenu.map((item, index) => (
        <Link
          onClick={onClose}
          href={item.url}
          key={index}
          className={`sideNavLinks`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

const CartMenu = ({ onClose }) => {
  return (
    <>
      {cartMenu.map((item, index) => (
        <Link
          onClick={onClose}
          href={item.url}
          key={index}
          className={`sideNavLinks`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};