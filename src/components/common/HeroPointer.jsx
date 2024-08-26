"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { BiSolidUpArrow } from "react-icons/bi";

export default function HeroPointer() {
  const [showPointer, setShowPointer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowPointer(window.scrollY > 365);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showPointer && (
        <Link href={"#hero"} className={`btnOnTop`}>
          <BiSolidUpArrow size={20} />
        </Link>
      )}
    </>
  );
}
