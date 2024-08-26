"use client";

import Link from "next/link";
import { useConnectModal } from "thirdweb/react";
import BrandLogoSvg from "../header/BrandLogoSvg";
import { useState, useContext, useEffect, useRef } from "react";
import { FaEye, FaEyeSlash, FaLinesLeaning, FaPlus } from "react-icons/fa6";
import GlobalContext from "../context/global/GlobalContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
// import { useDisconnect } from "@web3modal/ethers/react";
// import { useWalletInfo } from "@web3modal/ethers/react";
// import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import {
  connectCoinbaseWallet,
  connectMetaMask,
  connectTrustWallet,
  WalletConnect,
} from "../connectWallet";
import { useDispatch } from "react-redux";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
import { ThirdWebClient, wallets } from "@/context/ThirdWeb";
import { createWallet } from "thirdweb/wallets";
import { chains, hexValue } from "@/context/web3modal";
import { useAutoConnect } from "thirdweb/react";
import { bsc, bscTestnet, ethereum, sepolia } from "thirdweb/chains";
const trustWallet = "/trust-wallet.png";

export default function LoginForm() {
  const initialState = {
    email: "",
    password: "",
    keepSignedIn: false,
  };
  const { connect, isConnecting } = useConnectModal();

  const { data: autoConnected } = useAutoConnect({
    client: ThirdWebClient,
    wallets,
    timeout: 1000,
  });
  console.log({ autoConnected });
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const { setLoginOpen, setIsLogin } = useContext(GlobalContext);
  const [userWalletId, setUserWalletId] = useState("");
  const [showRegister, setshowRegister] = useState(false);
  const [sponserCodeEnter, setsponserCodeEnter] = useState("");
  const [showModalNew, setshowModalNew] = useState(false);
  const dispatch = useDispatch();
  const [isLaodings, setisLaodings] = useState(false);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [sponserCode, setsponserCode] = useState("");

  const [isLoadingMetamask, setisLoadingMetamask] = useState(false);
  const [openModalForEmailVerification, setopenModalForEmailVerification] =
    useState(false);
  const [enterEmailMetamask, setenterEmailMetamask] = useState("");
  const [enterPasswordMetamask, setenterPasswordMetamask] = useState("");
  const [isNowLoading, setisNowLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [openRegister, setopenRegister] = useState(false);
  const [address, setAddress] = useState();
  // Forget Password

  const [emailEntered, setemailEntered] = useState("");
  const [goForVerification, setGoForVerification] = useState(false);
  const [otpEntered, setOtpEntered] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [connectedAddress, setConnectedAddress] = useState(null);
  const [isconnectedToMeta, setIsconnectedToMeta] = useState(false);
  const [isMetaConnected, setIsMetaConnected] = useState(false);

  const router = useRouter();

  const { open: openTrustModal } = useWeb3Modal();
  const ref = useRef(null);

  // const { disconnect } = useDisconnect();

  // const {
  //   address: connectWalletAddress,
  //   chainId,
  //   isConnected,
  // } = useWeb3ModalAccount();

  const { address: trustAddress } = useAccount();
  console.log({ trustAddress });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setisLaodings(true);

    let checkIfSomeOneRefer = localStorage.getItem("Ref");

    var ReferralID = checkIfSomeOneRefer ? checkIfSomeOneRefer : null;

    try {
      axios
        .post("/api/LoginForVerification", {
          identifier: enterEmailMetamask,
          password: enterPasswordMetamask,
          ReferralID,
        })
        .then((acc) => {
          localStorage.removeItem("Ref");
          // console.log(acc.data)

          if (acc.data.status == false) {
            setisLaodings(false);
            toast.error(acc.data.error);
            setIsLogin(false);
          } else {
            // console.log(acc.data)
            setisLaodings(false);
            setIsLogin(false);
            // console.log(acc.data)
            toast.success("Welcome User");
            router.refresh();
            setshowModalNew(true);
          }
        })
        .catch((err) => {
          setisLaodings(false);

          // console.log(err)
        });
    } catch (error) {
      setisLaodings(false);

      // console.log(error)
    }
  };

  const connectWallest = () => {
    setisLoadingMetamask(true);
    // return
    setisNowLoading(true);
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => {
          // setLoginOpen(false)

          // console.log(res[0])
          setUserWalletId(res[0]);

          toast.success("Metamask Connected");

          axios
            .post("/api/LoginWithMetamask", {
              walletAddress: res[0],
            })
            .then((acc) => {
              // console.log(acc.data)

              setisLoadingMetamask(false);
              setisNowLoading(false);

              if (acc.data.status == true) {
                // setopenModalForEmailVerification(acc.data.openModal);
                toast.success("Welcome User");

                localStorage.setItem("jwt", acc.data);

                if (acc.data.openModal == false) {
                  window.location.reload();
                }
              } else {
                toast.error(acc.data.error);
                setisNowLoading(false);
              }
            })
            .catch((err) => {
              toast.error(err.response.data);
              // console.log(err)
              setisLoadingMetamask(false);
              setisNowLoading(false);
            });
        })
        .catch((err) => {
          // console.log(err)
          setisLoadingMetamask(false);
          setisNowLoading(false);
        });
    } else {
      setisLoadingMetamask(false);

      toast.error("Metamask Not Connected");
    }
  };

  const handleGoToRegister = () => {
    setshowRegister(showRegister ? false : true);
  };

  const handleEnterNewEmail = (e) => {
    e.preventDefault();

    try {
      axios
        .post("/api/LoginForVerification", {
          identifier: enterEmailMetamask,
          password: enterPasswordMetamask,
          fromMetamask: true,
        })
        .then((acc) => {
          // console.log(acc.data)
          toast.success(acc.data.message);
          setopenModalForEmailVerification(false);
          setshowModalNew(true);
        })
        .catch((err) => {
          // console.log(err)
        });
    } catch (error) {
      // console.log(error)
    }
  };

  setTimeout(() => {
    let getStata = localStorage.getItem("taks");

    if (getStata == "Register") {
      // alert("register")
      handleGoToRegister();

      localStorage.removeItem("taks");
    }
  }, 1000);

  const handleSimpleLogin = (e) => {
    e.preventDefault();

    setisLaodings(true);

    try {
      axios
        .post("/api/SimpleLogin", {
          identifier: enterEmailMetamask,
          password: enterPasswordMetamask,
        })
        .then((acc) => {
          if (acc.data.status == false) {
            setisLaodings(false);
            toast.error(acc.data.error);
            setIsLogin(false);
          } else {
            localStorage.setItem("jwt", JSON.stringify(acc.data));
            // console.log(acc.data)
            setisLaodings(false);
            setIsLogin(false);
            // console.log(acc.data)
            toast.success("Welcome User");
            router.push("/");
            window.location.reload();
          }
        })
        .catch((err) => {
          setisLaodings(false);
        });
    } catch (error) {
      setisLaodings(false);
    }
  };

  const handleForgetPasswordSend_Otp = (e) => {
    // alert("coming to send otp")

    e.preventDefault();

    setisNowLoading(true);

    try {
      axios
        .post("/api/ForgetPassword/SendOtpForVerify", {
          identifier: emailEntered,
        })
        .then((acc) => {
          // console.log(acc.data)
          setisNowLoading(false);

          if (acc.data.status) {
            // toast.error(acc.data.message);
            setGoForVerification(true);
          } else {
            toast.error(acc.data.message);
          }
        })
        .catch((err) => {
          setisNowLoading(false);

          // console.log(err)
        });
    } catch (error) {
      setisNowLoading(false);

      // console.log(error)
    }
  };

  const handleForgetPasswordVerify_Otp = (e) => {
    // alert("coming to check")

    e.preventDefault();

    setisNowLoading(true);

    try {
      axios
        .post("/api/ForgetPassword/CheckOtp", {
          identifier: emailEntered,
          otp: otpEntered,
          newPassword: newPassword,
        })
        .then((acc) => {
          // console.log(acc.data)
          setisNowLoading(false);

          if (acc.data.status) {
            toast.success(acc.data.message);
            window.location.reload();
          } else {
            toast.error(acc.data.message);
          }
        })
        .catch((err) => {
          setisNowLoading(false);

          // console.log(err)
        });
    } catch (error) {
      setisNowLoading(false);

      // console.log(error)
    }
  };
  const searchParams = useSearchParams();

  const searchshowRegister = searchParams.get("showRegister");
  const searchshowLogin = searchParams.get("showLogin");

  // useEffect(() => {
  //   if (isConnected) setAddress(connectWalletAddress);
  // }, [isConnected])

  useEffect(() => {
    if (trustAddress) setAddress(trustAddress);
  }, [trustAddress]);

  setTimeout(() => {
    if (searchshowRegister) {
      setopenRegister(true);
      setshowRegister(true);
    }

    if (searchshowLogin) {
      setshowRegister(false);
    }
  }, 100);

  // const { open } = useWeb3Modal();

  const isFirstRun = useRef(true);

  // const connectWallet = async () => {
  //   setisLoadingMetamask(true);
  //   setisNowLoading(true);

  //   try {

  //     // ! did chnages ehere below

  //     // const accounts = await open({ view: "Networks" });
  //     const accounts = await open();
  //     setIsMetaConnected(true);
  //     // setConnectedAddress(accounts[0]); // Assuming the first account is selected

  //     // let waitforit = await address()

  //     setTimeout(() => {
  //       // console.log("Here Coming Data")
  //       // console.log(address)
  //     }, 2000);

  //     // // console.log(waitforit)
  //   } catch (error) {
  //     // console.error("Failed to connect wallet:", error);
  //   }
  // };

  if (isMetaConnected && address && isconnectedToMeta == false) {
    setIsMetaConnected(false);

    if (!isMetaConnected) return;

    setIsconnectedToMeta(true);
    // console.log(address)

    toast.success("Wallet Connected");

    let isRefAvalible = localStorage.getItem("Ref");

    axios
      .post("/api/LoginWithMetamask", {
        walletAddress: address,
        Ref: isRefAvalible ? isRefAvalible : null,
      })
      .then((acc) => {
        // console.log(acc.data)

        setisLoadingMetamask(false);
        setisNowLoading(false);

        // return

        if (acc.data.status == true) {
          setopenModalForEmailVerification(acc.data.openModal);
          toast.success("Welcome User");
          localStorage.removeItem("Ref");
          localStorage.setItem("jwt", JSON.stringify(acc.data));

          if (acc.data.openModal == false) {
            window.location.reload();
          }
        } else {
          toast.error(acc.data.error);
          setisNowLoading(false);
        }
      })
      .catch((err) => {
        toast.error(err.response.data);
        // console.log(err)
        setisLoadingMetamask(false);
        setisNowLoading(false);
      });
  }

  const handleProceed = () => {
    setLoginOpen((prev) => !prev);
    setForgotPassword(false);

    window.location.reload();
  };

  const handleLoginWithGoogle = (decodedata) => {
    setisLaodings(true);
    try {
      axios
        .post("/api/Auth/LoginWithMetamask", {
          decodedata: JSON.stringify(decodedata),
        })
        .then((acc) => {
          setisLaodings(false);

          console.log(acc.data);

          if (acc.data.status) {
            localStorage.setItem("jwt", JSON.stringify(acc.data));

            // router.refresh()
            window.location.reload();
          } else {
            // alert(acc.data.message)
            toast.error(acc.data.message);
          }
        })
        .catch((err) => {
          setisLaodings(false);

          console.log(err);
        });
    } catch (error) {
      setisLaodings(false);

      console.log(error);
    }
  };

  const connectWallet = async (type) => {
    localStorage.setItem("provider", type);

    // switch (type) {
    //   case "Metamask": {
    //     const address = await connectMetaMask();
    //     if (!address) {
    //       return;
    //     }
    //     setAddress(address);
    //     break;
    //   }

    //   case "Coinbase": {
    //     const address = await connectCoinbaseWallet();
    //     if (!address) {
    //       return;
    //     }
    //     setAddress(address);

    //     break;
    //   }
    //   case "Trust": {
    //     await openTrustModal();
    //     // const address = await connectTrustWallet();
    //     // if (!address) {
    //     //   return;
    //     // }
    //     // setAddress(address);
    //     break;
    //   }
    //   case "Wallet Connect":
    //     {
    //       // const address = await open();
    //       // setAddress(address);
    //     }
    //     break;
    // }

    const wallet = await connect({
      client: ThirdWebClient,
      size: "compact",
      wallets,
      showAllWallets: false,
      chains: [ethereum, bsc],
      // chains: [sepolia, bscTestnet, ethereum, bsc],
      chain: ethereum,
    });
    const account = wallet.getAccount();
    localStorage.setItem("chain", ethereum.id);
    console.log("connected to", account);
    setAddress(account?.address);
    setisLoadingMetamask(true);
    setisNowLoading(true);

    try {
      // const accounts = await open();
      setIsMetaConnected(true);
      // setConnectedAddress(accounts[0]); // Assuming the first account is selected

      // // let waitforit = await address()
      // if (type === "Wallet Connect") {
      //   setTimeout(() => {
      //     // setAddress(connectWalletAddress);
      //   }, 2000);
      // }

      // if (type === "Trust") {
      //   setTimeout(() => {
      //     setAddress(trustAddress);
      //     console.log(trustAddress, "sdd");
      //   }, 2000);
      // }

      // setTimeout(() => {
      //   // console.log("Here Coming Data")
      //   // console.log(address)
      // }, 2000);

      // // console.log(waitforit)
    } catch (error) {
      // console.error("Failed to connect wallet:", error);
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm'>
      <div className='overflow-y-scroll max-h-[90vh] w-full md:w-1/2'>
        <div className='bg-cool-30 grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-8 max-w-[500px] w-[100%] mx-auto p-4 py-12 sm:p-12 rounded-radius-md relative'>
          <button
            onClick={() => handleProceed()}
            className='absolute top-4 right-4 text-cool-80'
          >
            <FaPlus className='text-[20px] rotate-45' />
          </button>

          {forgotPassword ? (
            <div style={{ paddingTop: 100, paddingBottom: 100 }}>
              <h3 className='mb-1 font-medium tracking-tight text-center loginFormTextGrad text-h3 text-cool-90 lg:mb-8 drop-shadow-md'>
                Forgot Password ?
              </h3>

              {goForVerification ? (
                <form
                  onSubmit={handleForgetPasswordVerify_Otp}
                  className='w-[100%]'
                >
                  <div>
                    <div className='mb-4'>
                      <input
                        disabled={goForVerification}
                        type='email'
                        name='email'
                        placeholder='Email Your Email'
                        value={emailEntered}
                        onChange={(e) => setemailEntered(e.target.value)}
                        className='p-4 mb-1 text-white bg-cool-10 focus:outline-none focus:outline-cool-50 placeholder:text-cool-90/40'
                      />
                    </div>
                    {goForVerification && (
                      <>
                        <div className='mb-4'>
                          <input
                            type='text'
                            name='Enter OTP'
                            placeholder='Enter OTP'
                            value={otpEntered}
                            onChange={(e) => setOtpEntered(e.target.value)}
                            className='p-4 mb-1 text-white bg-cool-10 focus:outline-none focus:outline-cool-50 placeholder:text-cool-90/40'
                          />
                        </div>

                        <div className='mb-4'>
                          <input
                            type='text'
                            name='New Password'
                            placeholder='New Password'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className='p-4 mb-1 text-white bg-cool-10 focus:outline-none focus:outline-cool-50 placeholder:text-cool-90/40'
                          />
                        </div>
                      </>
                    )}
                  </div>
                  {isNowLoading ? (
                    <button
                      disabled
                      style={{ marginTop: 10 }}
                      type='submit'
                      className='mb-4 text-white bg-gradient-to-b from-brandShade-40 to-brandShade-50'
                    >
                      Loading...
                    </button>
                  ) : goForVerification ? (
                    <button
                      style={{ marginTop: 10 }}
                      type='submit'
                      className='mb-4 text-white bg-gradient-to-b from-brandShade-40 to-brandShade-50'
                    >
                      Change OTP
                    </button>
                  ) : (
                    <button
                      style={{ marginTop: 10 }}
                      type='submit'
                      className='mb-4 text-white bg-gradient-to-b from-brandShade-40 to-brandShade-50'
                    >
                      SEND OTP
                    </button>
                  )}
                </form>
              ) : (
                <form
                  onSubmit={handleForgetPasswordSend_Otp}
                  className='w-[100%]'
                >
                  <div>
                    <div className='mb-4'>
                      <input
                        disabled={goForVerification}
                        type='email'
                        name='email'
                        placeholder='Email Your Email'
                        value={emailEntered}
                        onChange={(e) => setemailEntered(e.target.value)}
                        className='p-4 mb-1 text-white bg-cool-10 focus:outline-none focus:outline-cool-50 placeholder:text-cool-90/40'
                      />
                    </div>
                    {goForVerification && (
                      <>
                        <div className='mb-4'>
                          <input
                            type='number'
                            name='Email OTP'
                            placeholder='Email OTP'
                            value={otpEntered}
                            onChange={(e) => setOtpEntered(e.target.value)}
                            className='p-4 mb-1 text-white bg-cool-10 focus:outline-none focus:outline-cool-50 placeholder:text-cool-90/40'
                          />
                        </div>

                        <div className='mb-4'>
                          <input
                            type='text'
                            name='New Password'
                            placeholder='New Password'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className='p-4 mb-1 text-white bg-cool-10 focus:outline-none focus:outline-cool-50 placeholder:text-cool-90/40'
                          />
                        </div>
                      </>
                    )}
                  </div>
                  {isNowLoading ? (
                    <button
                      disabled
                      style={{ marginTop: 10 }}
                      type='submit'
                      className='mb-4 text-white bg-gradient-to-b from-brandShade-40 to-brandShade-50'
                    >
                      Loading...
                    </button>
                  ) : goForVerification ? (
                    <button
                      style={{ marginTop: 10 }}
                      type='submit'
                      className='mb-4 text-white bg-gradient-to-b from-brandShade-40 to-brandShade-50'
                    >
                      Change OTP
                    </button>
                  ) : (
                    <button
                      style={{ marginTop: 10 }}
                      type='submit'
                      className='mb-4 text-white bg-gradient-to-b from-brandShade-40 to-brandShade-50'
                    >
                      SEND OTP
                    </button>
                  )}
                </form>
              )}
            </div>
          ) : openModalForEmailVerification ? (
            <div style={{ paddingTop: 100, paddingBottom: 100 }}>
              <h3 className='mb-1 font-medium tracking-tight text-center loginFormTextGrad text-h3 text-cool-90 lg:mb-8 drop-shadow-md'>
                Enter Your Email
              </h3>

              <form onSubmit={handleEnterNewEmail} className='w-[100%]'>
                <div>
                  <div className='mb-4'>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email'
                      value={enterEmailMetamask}
                      onChange={(e) => setenterEmailMetamask(e.target.value)}
                      className='p-4 mb-1 text-white bg-cool-10 focus:outline-none focus:outline-cool-50 placeholder:text-cool-90/40'
                    />
                  </div>

                  <div>
                    <div className='relative flex items-center justify-between'>
                      <input
                        type={showPassword ? "text" : "password"}
                        name='password'
                        value={enterPasswordMetamask}
                        placeholder='Password'
                        onChange={(e) =>
                          setenterPasswordMetamask(e.target.value)
                        }
                        className='p-4 mb-1 text-white bg-cool-10 focus:outline-none focus:outline-cool-50 placeholder:text-cool-90/40'
                      />
                      <button
                        onClick={handleTogglePassword}
                        className='absolute top-1/2 right-3 -translate-y-[50%] text-cool-70'
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                </div>
                {isNowLoading ? (
                  <button
                    disabled
                    style={{ marginTop: 10 }}
                    type='submit'
                    className='mb-4 text-white bg-gradient-to-b from-brandShade-40 to-brandShade-50'
                  >
                    Loading...
                  </button>
                ) : enterEmailMetamask && enterPasswordMetamask ? (
                  <button
                    style={{ marginTop: 10 }}
                    type='submit'
                    className='mb-4 text-white bg-gradient-to-b from-brandShade-40 to-brandShade-50'
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    disabled
                    style={{
                      marginTop: 10,
                      backgroundColor: "gray",
                      cursor: "no-drop",
                    }}
                    type='submit'
                    className='mb-4 text-white'
                  >
                    Submit
                  </button>
                )}
              </form>
            </div>
          ) : showModalNew ? (
            <div
              style={{
                textAlign: "center",
                paddingTop: 180,
                paddingBottom: 180,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src='/MetaMask.png'
                  style={{ width: 150, height: 100 }}
                  alt='Centered Image'
                />
              </div>

              <h2
                style={{ fontWeight: "bolder", color: "white", fontSize: 30 }}
              >
                Please Check Your Email.
              </h2>

              <p
                style={{ fontWeight: "normal", color: "white", marginTop: 15 }}
              >
                We&apos;ve emailed a one-time link to{" "}
                <span style={{ fontWeight: "bolder" }}>
                  {enterEmailMetamask}
                </span>
                . <br />
                Click the link to sign in or register an acccount.
              </p>
            </div>
          ) : (
            <div>
              <h3 className='mb-1 font-medium tracking-tight text-center loginFormTextGrad text-h3 text-cool-90 lg:mb-8 drop-shadow-md'>
                {showRegister
                  ? "Create New Account"
                  : isLoadingMetamask
                  ? "Please Wait..."
                  : "Welcome Back!"}

                {connectedAddress}
              </h3>

              <hr />
              <div style={{ display: "flex", justifyContent: "center" }}>
                {isLoadingMetamask ? (
                  <></>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <img
                      className='hover:w-[85px] hover:h-[85px]'
                      onClick={() => connectWallet("Metamask")}
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#3A3F46",
                        width: 80,
                        height: 80,
                        borderColor: "#4E5059",
                        borderWidth: 3,
                        borderStyle: "solid",
                        padding: 10,
                        margin: 10,
                        borderRadius: 20,
                      }}
                      src='/MetaMask.png'
                      alt='MetaMask Logo'
                    />
                    {/* <img
                      className='hover:w-[85px] hover:h-[85px]'
                      onClick={() => connectWallet("Wallet Connect")}
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#3A3F46",
                        width: 80,
                        height: 80,
                        borderColor: "#4E5059",
                        borderWidth: 3,
                        borderStyle: "solid",
                        padding: 10,
                        margin: 10,
                        borderRadius: 20,
                      }}
                      src='/walletconnect.svg'
                      alt='MetaMask Logo'
                    /> */}
                    <img
                      className='hover:w-[85px] hover:h-[85px]'
                      onClick={() => connectWallet("Trust")}
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#3A3F46",
                        width: 80,
                        height: 80,
                        borderColor: "#4E5059",
                        borderWidth: 3,
                        borderStyle: "solid",
                        padding: 10,
                        margin: 10,
                        borderRadius: 20,
                      }}
                      src={trustWallet}
                      alt='Trust Logo'
                    />
                    <img
                      onClick={() => connectWallet("Coinbase")}
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#3A3F46",
                        width: 80,
                        height: 80,
                        borderColor: "#4E5059",
                        borderWidth: 3,
                        borderStyle: "solid",
                        padding: 10,
                        margin: 10,
                        borderRadius: 20,
                      }}
                      src='/coinbase.png'
                      alt='MetaMask Logo'
                    />
                  </div>
                )}
              </div>

              {isLoadingMetamask ? (
                <div style={{ paddingTop: 100, paddingBottom: 180 }}>
                  <div style={{ textAlign: "center", marginBottom: 50 }}>
                    <div role='status'>
                      <svg
                        style={{ width: 50, height: 50 }}
                        aria-hidden='true'
                        class='inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400'
                        viewBox='0 0 100 101'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                          fill='currentColor'
                        />
                        <path
                          d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                          fill='currentFill'
                        />
                      </svg>
                      <span class='sr-only'>Loading...</span>
                    </div>
                  </div>

                  <h2
                    style={{
                      textAlign: "center",
                      fontWeight: "bolder",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    PLEASE WAIT UNTIL CONNECTION DONE.
                  </h2>
                  <p
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 12,
                    }}
                  >
                    We are working to connect with your web3 wallet
                  </p>
                </div>
              ) : showRegister ? (
                <form onSubmit={handleSubmit} className='w-[100%]'>
                  <div>
                    <div className='mb-4'>
                      <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        s
                        onChange={(e) => setenterEmailMetamask(e.target.value)}
                        className='p-4 mb-1 text-white bg-cool-10 focus:outline-none focus:outline-cool-50 placeholder:text-cool-90/40'
                      />
                    </div>

                    <div>
                      <div className='relative flex items-center justify-between'>
                        <input
                          type={showPassword ? "text" : "password"}
                          name='password'
                          placeholder='Password'
                          onChange={(e) =>
                            setenterPasswordMetamask(e.target.value)
                          }
                          className='p-4 mb-1 text-white bg-cool-10 focus:outline-none focus:outline-cool-50 placeholder:text-cool-90/40'
                        />
                        <button
                          onClick={handleTogglePassword}
                          className='absolute top-1/2 right-3 -translate-y-[50%] text-cool-70'
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flexRowJustBetween !flex-col xs:!flex-row gap-4 xs:gap-0 mb-4'>
                    <div className='my-1'>
                      <label className='flex items-center gap-2'>
                        <input
                          type='checkbox'
                          name='keepSignedIn'
                          checked={formData.keepSignedIn}
                          onChange={handleChange}
                        />
                        <span className='mt-3 mb-1 text-sm leading-4'>
                          I confirm that I am at least 18 years old and that
                          gambling is legal in my region. I agree to the
                          DreamGameZ{" "}
                          <span
                            style={{
                              fontWeight: "bolder",
                              textAlign: "center",
                              cursor: "pointer",
                            }}
                          >
                            <Link target='__blank' href='/Terms&Conditions'>
                              Terms and Conditions
                            </Link>
                          </span>{" "}
                          and consent to the use of cookies.
                        </span>
                      </label>
                    </div>
                  </div>

                  {isLaodings ? (
                    <button
                      style={{ backgroundColor: "gray" }}
                      type='submit'
                      disabled
                      className='mb-4 text-white bg-gray-400 from-brandShade-40 to-brandShade-50'
                    >
                      Please Wait...
                    </button>
                  ) : formData.keepSignedIn ? (
                    <button
                      type='submit'
                      className='mb-4 text-white bg-gradient-to-b from-brandShade-40 to-brandShade-50'
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      style={{ backgroundColor: "gray" }}
                      type='submit'
                      disabled
                      className='mb-4 text-white bg-gray-400 from-brandShade-40 to-brandShade-50'
                    >
                      Submit
                    </button>
                  )}

                  <div className='flex items-center justify-center '>
                    <div ref={ref} className='w-full'>
                      <GoogleLogin
                        width={ref.current ? ref.current.offsetWidth : 0}
                        size='large'
                        onSuccess={(credentialResponse) => {
                          let encodedData = credentialResponse.credential;

                          const token = encodedData;
                          const decoded = jwtDecode(token);

                          handleLoginWithGoogle(decoded);
                        }}
                        onError={(err) => {
                          console.log("Login Failed");
                          console.log(err);
                        }}
                      />
                    </div>
                  </div>

                  <Link href='?showLogin=true'>
                    <p
                      style={{ cursor: "pointer", marginTop: 5 }}
                      className='my-1 text-sm text-center text-cool-90'
                    >
                      Log In
                    </p>
                  </Link>
                </form>
              ) : (
                <form
                  onSubmit={isLaodings ? () => {} : handleSimpleLogin}
                  className='w-[100%]'
                >
                  <div>
                    {/* EMAIL */}
                    <div className='mb-4'>
                      <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={enterEmailMetamask}
                        onChange={(e) => setenterEmailMetamask(e.target.value)}
                        className='p-4 mb-1 text-white bg-cool-10 focus:outline-none focus:outline-cool-50 placeholder:text-cool-90/40'
                      />
                      {errors.email && (
                        <div className='error'>{errors.email}</div>
                      )}
                    </div>
                    {/* PASSWORD */}
                    <div>
                      <div className='relative flex items-center justify-between'>
                        <input
                          type={showPassword ? "text" : "password"}
                          name='password'
                          value={enterPasswordMetamask}
                          placeholder='Password'
                          onChange={(e) =>
                            setenterPasswordMetamask(e.target.value)
                          }
                          className='p-4 mb-1 text-white bg-cool-10 focus:outline-none focus:outline-cool-50 placeholder:text-cool-90/40'
                        />

                        <button
                          onClick={handleTogglePassword}
                          className='absolute top-1/2 right-3 -translate-y-[50%] text-cool-70'
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                      {errors.password && (
                        <div className='error'>{errors.password}</div>
                      )}
                    </div>
                  </div>
                  <div className='flexRowJustBetween !flex-col xs:!flex-row gap-4 xs:gap-0 mb-4'>
                    <div className='my-6'></div>
                    <div
                      onClick={() => setForgotPassword(true)}
                      className='transition-colors duration-75 text-cool-80 hover:text-cool-90'
                    >
                      Forgot password?
                    </div>
                  </div>

                  {isLaodings ? (
                    <button
                      type='submit'
                      className='mb-4 text-white bg-gradient-to-b from-brandShade-40 to-brandShade-50'
                    >
                      Please Wait...
                    </button>
                  ) : (
                    <button
                      type='submit'
                      className='mb-4 text-white bg-gradient-to-b from-brandShade-40 to-brandShade-50'
                    >
                      Submit
                    </button>
                  )}

                  <Link href='?showRegister=true'>
                    {" "}
                    <p
                      style={{ cursor: "pointer" }}
                      className='text-sm text-center text-cool-90'
                    >
                      Create Account
                    </p>
                  </Link>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
