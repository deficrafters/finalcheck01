"use client";
import { useContext } from "react";
import { content } from "@/utils/content.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GlobalContext from "../context/global/GlobalContext";

const { socialIcons } = content.footer;

export default function Footer() {
  const { setSideNavActiveMenu, setSideNavSubMenu, setSideNavPrimaryMenu } =
    useContext(GlobalContext);
  const onLogoClick = () => {
    setSideNavActiveMenu(null);
    setSideNavSubMenu(null);
    setSideNavPrimaryMenu(null);
  };

  return (
    <footer className={`bg-cool-05 `}>
      <section
        className={`wrapper-desk flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0 py-8`}
      >
        <Link
          onClick={onLogoClick}
          href={"/"}
          className={`flex flex-col items-center w-max`}
        >

          <Image
            src={"/Logo.png"}
            alt=""
            width={95}
            height={0}
            className={`w-[90px] h-auto`}
          />
          <h1 className="text-[--brandColor] text-sm">DreamGameZ</h1>
        </Link>
        <div className={`flex items-center justify-end gap-2`}>
          {socialIcons.map((item, index) => (
            <Link target="__blank" href={item.href} key={index}>
              <Image
                src={item.icon}
                alt={item.name}
                width={100}
                height={0}
                className={`w-[25px] h-auto`}
              />
            </Link>
          ))}
        </div>
      </section>

      <div
        className={`py-4 text-center text-[14px] sm:text-[16px] text-slate-400/80 bg-black`}
      >
        Copyright &copy; 2024 DreamGameZ.{" "}
        <span className={`block sm:inline`}></span>All Rights Reserved.
      </div>
    </footer>
  );
}
