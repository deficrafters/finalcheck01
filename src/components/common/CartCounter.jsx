"use client";
import { useContext } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import GlobalContext from "../context/global/GlobalContext";

export default function CartCounter() {
  const { setSideNavActiveMenu, setSideNavSubMenu, setSideNavPrimaryMenu } =
    useContext(GlobalContext);
  const cartItems = useSelector((state) => state.cart);

  const handleClick = () => {
    setSideNavActiveMenu(null);
    setSideNavSubMenu(null);
    setSideNavPrimaryMenu(null);
  };

  return (
    <>
    
    </>
  );
}
