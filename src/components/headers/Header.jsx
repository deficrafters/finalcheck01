"use client";
import React, { useState, useEffect } from "react";
import { content } from "../../utils/content.js";
import { useContext } from "react";
import { usePathname } from "next/navigation.js";
import Image from "next/image";
import Link from "next/link";
import User from "../common/User";
import CartCounter from "../common/CartCounter";
import LoginButton from "../common/LoginButton";
import RegisterButton from "../common/RegisterButton";
import { FaBars } from "react-icons/fa6";
import GlobalContext from "../context/global/GlobalContext.js";


const {
  homeMenu,
  numberCardPopup,
  dreamzDualPopup,
  jackpotPopup,
  cartMenu,
  cqGameMenu,
  jackpotGameMenu,
  cqMenu,
  dreamThreeGameMenu,
  dreamDualGameMenu,
  aboutMenu,
} = content.menus;

export default function Header() {
  const [userLoggedIn, setuserLoggedIn] = useState(false);

  const pathname = usePathname();

  const {
    isLogin,
    loginOpen,
    setLoginOpen,
    // numberCardPopup,
    setSubOpen,
    setProfileMenuOpen,
    hamOpen,
    setHamOpen,
    setSideNavActiveMenu,
    setSideNavSubMenu,
    setSideNavPrimaryMenu,
  } = useContext(GlobalContext);

  const handleLogoClick = () => {
    setSideNavActiveMenu(null);
    setSideNavSubMenu(null);
    setSideNavPrimaryMenu(null);
  };

  const handleLogin = () => {
    setLoginOpen((prev) => !prev);
    // document.body.style.overflow = loginOpen ? "auto" : "hidden";
  };

  const closeLogin = () => {
    setLoginOpen(false);
    setSubOpen(false);
    // document.body.style.overflow = loginOpen ? "hidden" : "auto";
  };

  const handleClick = () => {
    setSubOpen(false);
    setProfileMenuOpen(false);
  };

  const handleHam = () => {
    if (hamOpen === true) {
      setHamOpen(false);
      // document.body.style.overflow = hamOpen ? "auto" : "hidden";
    } else if (hamOpen === false) {
      setHamOpen(true);
      // document.body.style.overflow = hamOpen ? "auto" : "hidden";
    }
  };

  const handleUserClick = () => {
    setProfileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    Check_User_JWT();
  }, []);

  const Check_User_JWT = () => {
    let jwts = localStorage.getItem("jwt");

    if (jwts) {
      setuserLoggedIn(true);
    }
  };

  useEffect(() => {
    document.body.style.overflow = (loginOpen || hamOpen || dreamzDualPopup || numberCardPopup || jackpotPopup) ? "hidden" : "auto";
  }, [hamOpen, loginOpen, dreamzDualPopup, numberCardPopup, jackpotPopup])

  return (
    <header
      className={`wrapper-header h-[75px] bg-cool-05 flex items-center py-4 sticky top-0 right-0 z-10 `}
    >
      <div
        className={`w-[100%] flex items-center justify-between lg:justify-end`}
      >
        <div className={`table lg:hidden`}>
          <Link
            href={"/"}
            onClick={handleLogoClick}
            className={`flex flex-col items-center`}
          >
            <Image
              src={"/Logo.png"}
              alt=""
              width={95}
              height={0}
              className={`w-[90px] h-auto`}
            />
            <h1 className="text-[--brandColor] text-center text-sm">
              DreamGameZ
            </h1>
          </Link>
          {/* <BrandLogo imageSource={"/Logo.png"} width="90" /> */}
        </div>
        <div className={`flex items-center justify-end gap-1`}>
          <div className={`hidden lg:flex items-center justify-end`}>
            {pathname === "/" ? (
              <HomeMenu menuClick={handleClick} />
            ) : pathname === "/games/coin-quest" ? (
              <CoinQuestMenu menuClick={handleClick} />
            ) : pathname === "/games/coin-quest/usdt" ||
              pathname === "/games/coin-quest/bnb" ||
              pathname === "/games/coin-quest/xrp" ||
              pathname === "/games/coin-quest/eth" ? (
              <CoinQuestGameMenu menuClick={handleClick} />
            ) : pathname === "/games/jackpot-madness" ? (
              <JackpotMenu menuClick={handleClick} />
            ) : pathname === "/games/dreamz-dual" ? (
              <DreamzDualMenu menuClick={handleClick} />
            ) : pathname === "/games/dreamz-dual/mini-blast" ||
              pathname === "/games/dreamz-dual/power-blast" ||
              pathname === "/games/dreamz-dual/super-blast" ||
              pathname === "/games/dreamz-dual/mega-blast" ||
              pathname === "/games/dreamz-dual/dreamz-blast" ? (
              <DreamzDualGameMenu menuClick={handleClick} />
            ) : pathname === "/games/dreamz-three" ? (
              <DreamzThreeGameMenu menuClick={handleClick} />
            ) : pathname === "/about-us" ? (
              <AboutMenu menuClick={handleClick} />
            ) : pathname === "/cart" ? (
              <CartMenu menuClick={handleClick} />
            ) : (
              <HomeMenu menuClick={handleClick} />
            )}
          </div>
          {userLoggedIn ? (
            <>
              <User onHandleClick={handleUserClick} />
              <CartCounter />
            </>
          ) : (
            <div className={`flex items-center justify-end gap-2`}>
              <LoginButton onHandleLogin={handleLogin} />
              {/* <RegisterButton onCloseLogin={closeLogin} /> */}
              <RegisterButton onCloseLogin={handleLogin} />
            </div>
          )}
          <button onClick={handleHam} className={`block lg:hidden ml-3`}>
            <FaBars color="#fff" />
          </button>
        </div>
      </div>
    </header>
  );
}

const HomeMenu = ({ menuClick }) => {
  return (
    <>
      {homeMenu.map((menuItem, index) => (
        <Link
          onClick={menuClick}
          key={index}
          href={menuItem.url}
          className={`headerMenuItem`}
        >
          {menuItem.name}
        </Link>
      ))}
    </>
  );
};

const CoinQuestMenu = ({ menuClick }) => {
  return (
    <>
      {cqMenu.map((menuItem, index) => (
        <Link
          onClick={menuClick}
          key={index}
          href={menuItem.url}
          className={`headerMenuItem`}
        >
          {menuItem.name}
        </Link>
      ))}
    </>
  );
};

const CoinQuestGameMenu = ({ menuClick }) => {
  return (
    <>
      {cqGameMenu.map((menuItem, index) => (
        <Link
          onClick={menuClick}
          key={index}
          href={menuItem.url}
          className={`headerMenuItem`}
        >
          {menuItem.name}
        </Link>
      ))}
    </>
  );
};

const JackpotMenu = ({ menuClick }) => {
  return (
    <>
      {jackpotGameMenu.map((menuItem, index) => (
        <Link
          onClick={menuClick}
          key={index}
          href={menuItem.url}
          className={`headerMenuItem`}
        >
          {menuItem.name}
        </Link>
      ))}
    </>
  );
};

const DreamzThreeGameMenu = ({ menuClick }) => {
  return (
    <>
      {dreamThreeGameMenu.map((menuItem, index) => (
        <Link
          onClick={menuClick}
          key={index}
          href={menuItem.url}
          className={`headerMenuItem`}
        >
          {menuItem.name}
        </Link>
      ))}
    </>
  );
};

const DreamzDualMenu = ({ menuClick }) => {
  return (
    <>
      {dreamDualGameMenu.landing.map((menuItem, index) => (
        <Link
          onClick={menuClick}
          key={index}
          href={menuItem.url}
          className={`headerMenuItem`}
        >
          {menuItem.name}
        </Link>
      ))}
    </>
  );
};
const DreamzDualGameMenu = ({ menuClick }) => {
  return (
    <>
      {dreamDualGameMenu.games.map((menuItem, index) => (
        <Link
          onClick={menuClick}
          key={index}
          href={menuItem.url}
          className={`headerMenuItem`}
        >
          {menuItem.name}
        </Link>
      ))}
    </>
  );
};

const AboutMenu = ({ menuClick }) => {
  return (
    <>
      {aboutMenu.map((menuItem, index) => (
        <Link
          onClick={menuClick}
          key={index}
          href={menuItem.url}
          className={`headerMenuItem`}
        >
          {menuItem.name}
        </Link>
      ))}
    </>
  );
};

const CartMenu = ({ menuClick }) => {
  return (
    <>
      {cartMenu.map((menuItem, index) => (
        <Link
          onClick={menuClick}
          key={index}
          href={menuItem.url}
          className={`headerMenuItem`}
        >
          {menuItem.name}
        </Link>
      ))}
    </>
  );
};
