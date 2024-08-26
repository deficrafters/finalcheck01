"use client";
import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import BrandLogo from "@/components/common/BrandLogo";
import SignUpForm from "@/components/forms/SignUpForm";
import GlobalContext from "@/components/context/global/GlobalContext";
import LoginForm from "@/components/common/LoginForm";
import { useRouter } from "next/navigation";

export default function ProfilePage() {

  const { isRegistered, setIsLogin, loginOpen } = useContext(GlobalContext);

  const router = useRouter()

  let CheckForAuth = typeof window !== "undefined" && window.localStorage.getItem("jwt")

  if (!CheckForAuth) return router.push("/")

  return (
    <>
  
      <div className={`wrapper-desk bg-cool-1 w-full grid grid-cols-1`}>
        <SignUpForm />      
      </div>
    </>
  );
}