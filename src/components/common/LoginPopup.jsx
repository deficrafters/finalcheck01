"use client";
import { useContext } from "react";
import LoginForm from "./LoginForm";
import GlobalContext from "../context/global/GlobalContext";

export default function LoginPopup() {
  const { loginOpen } = useContext(GlobalContext);
  return <>{loginOpen && <LoginForm />}</>;
}
