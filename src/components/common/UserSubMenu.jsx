"use client";
import { useContext, useEffect } from "react";
import Link from "next/link";
import { content } from "@/utils/content";
import GlobalContext from "@/components/context/global/GlobalContext";
import { useRouter } from "next/navigation";
// import { useDisconnect } from "@web3modal/wagmi/react";

const { userSubMenuItems } = content.menus;

export default function UserSubMenu() {
  const { profileMenuOpen, setIsLogin, setProfileMenuOpen } =
    useContext(GlobalContext);
  // const { disconnect } = useDisconnect();
  const Routers = useRouter();

  const handleLogout = () => {
    // setProfileMenuOpen(false);
    // setIsLogin(false);

    // disconnect();
    // localStorage.removeItem('jwt')
    localStorage.clear();
    // Routers.refresh()
    window.location.reload();
  };

  const handleRouting = (route) => {
    Routers.push(route);
    setProfileMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    const menu = document.getElementById("user-submenu");
    if (menu && !menu.contains(event.target)) {
      setProfileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (profileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileMenuOpen]);

  return (
    <>
      {profileMenuOpen && (
        <div
          id='user-submenu'
          className={`bg-cool-05 w-[150px] fixed top-[75px] right-0 sm:right-14 lg:right-10 flex flex-col mx-0 sm:mx-4 md:mx-8 lg:mx-10 xl:mx-16 z-30 p-2 rounded-b-md`}
        >
          <p onClick={() => handleRouting("/profile")} className={`userMenu`}>
            Profile
          </p>
          <p onClick={() => handleRouting("/wallet")} className={`userMenu`}>
            Wallet
          </p>
          <p
            onClick={() => handleRouting("/game-activity")}
            className={`userMenu`}
          >
            Game Activity
          </p>
          <p onClick={() => handleRouting("/Affiliate")} className={`userMenu`}>
            Affiliate
          </p>
          <button onClick={handleLogout} className={`userMenu`}>
            Logout
          </button>
        </div>
      )}
    </>
  );
}
