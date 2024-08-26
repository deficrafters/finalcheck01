"use client";

import GlobalContext from "@/components/context/global/GlobalContext";
import { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JackpotBundelTicket } from "@/store/slices/cartSlice";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";
import { FaTimes } from "react-icons/fa";
import MethodConfirmationModal from "@/components/challenge/MethodConfirmationModalJackPotMadnessBundleBuy";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GameCard from "./GameCard";
import GamePopupCard from "./GamePopupCard";
import { setSpinnerPopup, setTicketPopup } from "@/store/slices/popupSlice";
import { usePathname, useRouter } from "next/navigation.js";
import GlobalContexts from "@/components/context/global/GlobalContext";


export default function GamePopup() {
  const {
    jackpotPopup,
    setJackpotPopup,
    jackpotCardData,
    setJackpotCardData,
    setAutoPlayOptions,
  } = useContext(GlobalContext);

  const router = useRouter();

  const [arraysCollection, setArraysCollection] = useState([]);
  const [cardItem, setCardItem] = useState({});
  const [counter, setCounter] = useState(1);
  const [resetCardArray, setResetCardArray] = useState([]);
  const [collectedArray, setCollectedArray] = useState([])

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const unique_id = uuid();

  const handleClose = () => {
    setJackpotPopup(false);
    setJackpotCardData(null);
    setAutoPlayOptions({
      delay: 2500,
      disableOnInteraction: false,
    });
    document.body.style.overflow = jackpotPopup ? "auto" : "hidden";
  };

  const onCollectArrays = (cardNumber, array) => {
    const newArray = [...arraysCollection];
    newArray[cardNumber - 1] = array;
    setArraysCollection([...newArray]);
    setCollectedArray(newArray);
    // console.log(collectedArray);
  };

  const {
    setLoginOpen,
  } = useContext(GlobalContexts);

  const onResetCard = (cardNumber, array) => {
    const newArray = [...arraysCollection];
    newArray[cardNumber - 1] = array;
    setArraysCollection([...newArray]);
    setCollectedArray(newArray);
    // console.log(collectedArray);
  };

  const handleOpenRegister = () => {

    router.push("?showRegister=true")

    setLoginOpen((prev) => !prev);

  };


  const handleAddToCart = () => {

    if (typeof window !== "undefined" && window.localStorage.getItem("jwt")) {
      
      const collectedValues = collectedArray.filter((el) => el.length === 5);
      if (collectedValues.length < jackpotCardData.entries) {
        toast.error("Generate All Tickets");
        return;
      }
  
      dispatch(
        JackpotBundelTicket({
          Ticket_Array:collectedArray,
          One_Ticket_USDT_Price:1,
        })
      );
  
      dispatch(setTicketPopup(true))


    }else{

      handleOpenRegister()


    }



    // setJackpotPopup(false);  //! THIS IS CLOSING TICKET MODAL
  };

  const calcSlides = () => {
    if (slides === 2) {
      return Number(2);
    } else return Number(4);
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div
      className={`fixed top-0 left-0 bg-black/60 backdrop-blur-sm z-30 w-full h-full`}
    >
      <button onClick={handleClose} className={`fixed top-0 right-0 m-4`}>
        <FaTimes size={25} />
      </button>
      <div className={`flex items-center justify-center w-[100%] h-[100%]`}>
        <div className={`flex flex-col items-center`}>
          <button
            onClick={handleAddToCart}
            className={`btnRect !px-5 !py-4 !rounded-lg`}
          >

            Purchase Now

          </button>
          {/* SLIDER */}
          <div className={``}>
            <Swiper
              slidesPerView="auto"
              centeredSlides={false}
              initialSlide={0}
              freeMode={true}
              spaceBetween={16}
              pagination={pagination}
              modules={[Pagination, FreeMode, Pagination, Autoplay]}
              breakpoints={{
                360: {
                  centeredSlides: true,
                  slidesPerView: 1,
                  initialSlide: 0,
                },
                480: {
                  centeredSlides: true,
                  slidesPerview: 2,
                  initialSlide: 0,
                },
                640: {
                  centeredSlides: true,
                  slidesPerview: 2,
                  initialSlide: 0,
                  centeredSlides: false,
                },
              }}
              className={` xxs:!max-w-[328px] xs:!max-w-[440px] sm:!max-w-[600px] md:!max-w-[700px] lg:!max-w-[1000px] xl:!max-w-[1200px] 2xl:!max-w-[1400px] mt-4`}
            >

              {Array.from({ length: jackpotCardData.entries }).map(
                (item, index) => (
                  <SwiperSlide
                    key={index}
                    className={`last:!mr-0 min-w-[320px] max-w-[320px]`}
                  >
                    <GamePopupCard
                      counter={index + 1}
                      onCollectArrays={onCollectArrays}
                      onResetCard={onResetCard}
                    />

                  </SwiperSlide>
                )
              )}

              <div className={`swiper-custom-pagination`}></div>

              <MethodConfirmationModal
                counter={collectedArray.length}
                setCounter={setCollectedArray}
                setArraysCollection={setArraysCollection}
                setResetCardArray={setResetCardArray}
                Already_Purchased={false}
                GameData={{}}
                gameID={'few'}
                EntryPrice={0}
                setJackpotPopup={setJackpotPopup}
                />


            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
