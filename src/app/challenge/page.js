"use client";

import { useEffect, useState, useContext, Suspense } from "react";
import { content } from "@/utils/content.js";
import HeroSection from "@/components/challenge/HeroSection";
import GamesBar from "@/components/homepage/GamesBar";
import AnalyticsSection from "@/components/homepage/AnalyticsSection";
import TrendingGamesSection from "@/components/homepage/TrendingGamesSection";
import GameSection from "@/components/homepage/GameSection";
import PromotionSection from "@/components/homepage/PromotionSection";
import CoinQuestSection from "@/components/common/CoinQuestSection";
import JackpotSection from "@/components/homepage/JackpotSection";
import DreamZDualSection from "@/components/games/dreamz-dual/DreamzDualSection";
import DreamzThreeSection from "@/components/homepage/DreamzThreeSection";
import DreamzCasualSection from "@/components/homepage/DreamzCasualSection";
import FAQSection from "@/components/common/FAQSection";
import WinnerSection from "@/components/common/WinnerSection";
import { useRouter, useSearchParams } from "next/navigation";
const { frequentQuestionsData } = content;
const { weeklyWinners } = content.table.winners;
const { dreamzDual } = content.sectionData;
import LoginFormContext from "@/components/context/global/GlobalContext";
import axios from "axios";
import LoginForm from "@/components/common/LoginForm";
import Social from "@/components/challenge/Social";
import Link from "next/link";
import { SpinModal } from "@/components/challenge/spin-modal";
import { useSpinModal } from "@/components/challenge/spin-modal/hook";
import Dashboard from "@/components/challenge/dashboard";
import { useDispatch } from "react-redux";
import TicketModal from "@/components/challenge/TicketModal";
import SocialPopup from "@/components/challenge/SocialPopup";
import { setSpinnerPopup, setTicketPopup } from "@/store/slices/popupSlice";
import toast from "react-hot-toast";
const isLoggedIn = false;
import Affiliates from "../Affiliate/page";
import Leaderboard from "../Leaderboard/page";
import GlobalContext from "@/components/context/global/GlobalContext";

export default function Home() {
  const [sticky, setSticky] = useState(false);
  const [getParaams, setgetParaams] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [openRegister, setopenRegister] = useState(false);
  const [confirmed, setconfirmed] = useState(false);
  const [isLaodingsad, setisLaodingsad] = useState(false);
  const [isLaodings, setisLaodings] = useState(false);
  const [isLoadingMetamask, setisLoadingMetamask] = useState(false);
  const [walletExisting, setwalletExisting] = useState("");
  const [userLoggedIn, setuserLoggedIn] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [isLoading2, setisLoading2] = useState(false);
  const [entred, setentred] = useState("");
  const [getType, setgetType] = useState("");
  const [allSocialDatas, setallSocialDatas] = useState([]);
  const [setselectedSocial, setSetselectedSocial] = useState("");
  const [showOptions, setshowOptions] = useState("");

  const dispatch = useDispatch();

  const [FeaturesData, setFeaturesData] = useState([
    {
      id: 1,
      Icon: "HiTicket",
      amountText: "wait...",
      title: "100k challenge entries",
    },
    {
      id: 2,
      Icon: "BsGiftFill",
      amountText: "wait...",
      title: "Self entries",
    },
    {
      id: 3,
      Icon: "FaBitcoin",
      amountText: "wait...",
      title: "Referral Entries",
    },
  ]);

  const [fetchedData, setfetchedData] = useState([]);

  const [FeaturesDataNew, setFeaturesDataNew] = useState([
    {
      id: 4,
      Icon: "HiTicket",
      amountText: "wait...",
      title: "100k challenge entries",
    },
    {
      id: 5,
      Icon: "BsGiftFill",
      amountText: "wait...",
      title: "Self entries",
    },
    {
      id: 6,
      Icon: "FaBitcoin",
      amountText: "wait...",
      title: "Referral Entries",
    },
  ]);

  const searchParams = useSearchParams();

  const { loginOpen } = useContext(LoginFormContext);

  const router = useRouter();

  const search = searchParams.get("verify");
  const search2 = searchParams.get("fromMetamask");
  const searchshowRegister = searchParams.get("showRegister");
  const isSomeoneReferedHim = searchParams.get("Ref");

  const {
    isLogin,
    setLoginOpen,
    setSubOpen,
    setProfileMenuOpen,
    hamOpen,
    setHamOpen,
    setSideNavActiveMenu,
    setSideNavSubMenu,
    setSideNavPrimaryMenu,
  } = useContext(GlobalContext);

  useEffect(() => {
    GetDatas();

    NewValuesGet();
    if (isSomeoneReferedHim) {
      if (localStorage.getItem("Ref")) return;

      localStorage.setItem("Ref", isSomeoneReferedHim);
    }

    if (search) {
      // console.log({ search2 });
      setgetParaams(search);
      setIsOpen(true);
    }

    if (searchshowRegister) {
      setopenRegister(true);
    }
  }, []);

  useEffect(() => {
    let getDta = localStorage.getItem("jwt");
    let parseIt = JSON.parse(getDta);

    try {
      axios
        .post("/api/GetAffiliateData", {
          ids: parseIt.data._id,
        })
        .then((acc) => {
          setfetchedData(acc.data);
        })
        .catch((err) => {
          // console.log(err)
        });
    } catch (error) {
      // console.log(error)
    }
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 365);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const getDtaa = localStorage.getItem("jwt");

    setisLaodingsad(true);

    setisLaodings(true);

    if (window.ethereum) {
      setisLoadingMetamask(true);

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => {
          // console.log("issue here");
          // console.log(res[0]);
          setwalletExisting(res[0]);
          // console.log("no it crossed");

          // console.log({
          //   token: getParaams,
          //   search2: search2,
          //   wallet: res[0],
          // });

          axios
            .post("/api/Auth", {
              token: getParaams,
              search2: search2,
              wallet: res[0],
            })
            .then((acc) => {
              router.replace("/", undefined, { shallow: true });

              setisLaodingsad(false);

              // console.log(acc.data);

              if (acc.data.status) {
                localStorage.setItem("jwt", JSON.stringify(acc.data));

                setIsOpen(false);

                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              } else {
                toast.error(acc.data.error);
              }
            })
            .catch((err) => {
              setisLaodingsad(false);

              // console.log(err);
            });
        })
        .catch((err) => {
          // console.log(err);
        });
    } else {
      // console.log("Something Went Wrong");
    }
  };

  const openModal = (vals) => {
    let getVal = localStorage.getItem("jwt");

    if (!getVal) return toast.error("Please Login First");

    // console.log({ vals })
    setgetType(vals);
    setIsModalOpen(true);
  };

  const NewValuesGet = () => {
    try {
      let parseIt = localStorage.getItem("jwt");
      var parseItData;

      if (parseIt) {
        setuserLoggedIn(true);
        parseItData = JSON.parse(parseIt);
      }

      axios
        .post("/api/GetDataForDashbobard", {
          ids: parseItData.data._id,
        })
        .then((acc) => {
          // console.log(acc.data)

          setFeaturesData(acc.data.slice(0, 3));

          setFeaturesDataNew(acc.data.slice(3, 6));
        })
        .catch((err) => {
          // console.log(err)
        });
    } catch (error) {
      // console.log(error)
    }
  };

  const GetDatas = () => {
    setisLoading2(true);

    // // console.log("came here")

    const getData = localStorage.getItem("jwt");

    if (getData) {
      var parseData = JSON.parse(getData);
    }

    // console.log(parseData)

    try {
      axios
        .post("/api/getSocialData", {
          ids: parseData.data._id,
        })
        .then((acc) => {
          setisLoading2(false);
          // console.log("this data")
          // console.log(acc.data)
          setallSocialDatas(acc.data);
          setshowOptions(true);
        })
        .catch((err) => {
          setisLoading2(false);

          // console.log(err)
        });
    } catch (error) {
      setisLoading2(false);

      // console.log(error)
    }
  };

  const handleClicked = () => {
    dispatch(setSpinnerPopup(true));
  };

  const handleOpenRegistre = () => {
    router.push("/challenge?showRegister=true");

    setLoginOpen((prev) => !prev);

    document.body.style.overflow = loginOpen ? "auto" : "hidden";
  };

  return (
    <main className={`relative bg-black`}>
      <Suspense fallback={<div>Loading...</div>}>
        {loginOpen && <LoginForm />}

        {isOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                onClick={toggleModal}
              ></div>
              <div
                style={{ backgroundColor: "#060713" }}
                className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
              >
                {confirmed ? (
                  <>
                    <div className="p-4">
                      <h1
                        className="text-xl font-bold mb-4"
                        style={{ textAlign: "center", color: "white" }}
                      >
                        Welcome
                      </h1>
                    </div>
                    <div
                      style={{
                        marginLeft: 20,
                        marginRight: 20,
                        marginBottom: 30,
                      }}
                    >
                      <input
                        type="text"
                        className="border-gray-300 border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="Enter Username..."
                      />
                      <input
                        style={{ marginTop: 20 }}
                        type="text"
                        className="border-gray-300 border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="Enter Email..."
                      />
                      <div style={{ textAlign: "center", marginTop: 40 }}>
                        <div
                          className="bg-gray-200 p-4"
                          style={{
                            borderRadius: 10,
                            cursor: "pointer",
                            backgroundColor: "#007AFE",
                            marginTop: 15,
                          }}
                        >
                          <h4
                            style={{
                              textAlign: "center",
                              fontWeight: "bolder",
                              color: "white",
                            }}
                          >
                            Save Changes
                          </h4>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-4">
                      <h1
                        className="text-xl font-bold mb-4"
                        style={{ textAlign: "center", color: "white" }}
                      >
                        Welcome
                      </h1>
                      <p style={{ color: "white" }}>
                        By creating your account, you confirm that you are at
                        least 18 years old and agree to our{" "}
                        <span
                          style={{
                            color: "blue",
                            fontWeight: "bolder",
                            textAlign: "center",
                            cursor: "pointer",
                          }}
                        >
                          <a target="__blank" href="https://www.google.com">
                            Terms and Conditions
                          </a>
                        </span>
                        .
                      </p>
                    </div>
                    <div
                      className="container mx-auto"
                      style={{
                        marginLeft: 15,
                        marginRight: 15,
                        marginBottom: 15,
                      }}
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div
                          onClick={() => router.push("/")}
                          className="bg-gray-200 p-4"
                          style={{ borderRadius: 10, cursor: "pointer" }}
                        >
                          <h4
                            style={{
                              textAlign: "center",
                              fontWeight: "bolder",
                            }}
                          >
                            Cancel
                          </h4>
                        </div>
                        {isLaodingsad ? (
                          <div
                            className="bg-gray-200 p-4"
                            style={{
                              marginRight: 25,
                              borderRadius: 10,
                              cursor: "no-drop",
                              backgroundColor: "#007AFE",
                            }}
                          >
                            <h4
                              style={{
                                textAlign: "center",
                                fontWeight: "bolder",
                                color: "white",
                              }}
                            >
                              Loading...
                            </h4>
                          </div>
                        ) : (
                          <div
                            onClick={() => handleClick()}
                            className="bg-gray-200 p-4"
                            style={{
                              marginRight: 25,
                              borderRadius: 10,
                              cursor: "pointer",
                              backgroundColor: "#007AFE",
                            }}
                          >
                            <h4
                              style={{
                                textAlign: "center",
                                fontWeight: "bolder",
                                color: "white",
                              }}
                            >
                              Continue
                            </h4>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {userLoggedIn ? (
          <Dashboard
            FeaturesData={FeaturesData}
            FeaturesDataNew={FeaturesDataNew}
          />
        ) : (
          <HeroSection />
        )}

        {/* <AnalyticsSection /> */}

        <AnalyticsSection />

        <Social
          GetDatas={GetDatas}
          allSocialDatas={allSocialDatas}
          setSetselectedSocial={setSetselectedSocial}
          title="Follow us on social media"
          description="Please follow us on social media to get the latest updates and news."
          showDescription={true}
          id="dreamz-dual"
        />

        <SocialPopup
          GetDatas={GetDatas}
          setselectedSocial={setselectedSocial}
        />

        <PromotionSection />

        <Leaderboard  />

        {typeof window !== "undefined" &&
          window.localStorage.getItem("jwt") && <Affiliates hideAbove={true} />}
      </Suspense>
    </main>
  );
}
