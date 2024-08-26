"use client";
import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setSpinnerPopup as sdf } from "@/store/slices/JackPotMadnessTicket";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MethodConfirmationModal from "@/components/challenge/MethodConfirmationModalJackPotMadness";
import {
  setSpinnerPopup,
  setTicketPopup,
  add,
} from "@/store/slices/popupSlice";
import SectionIdentifier from "@/components/common/SectionIdentifier";
import { FaMinus, FaPlus } from "react-icons/fa6";
import SectionHeading from "@/components/common/SectionHeading";
import GameCard from "./GameCard";
import GlobalContext from "@/components/context/global/GlobalContext";
import DisabledOverlay from "@/components/common/DisabledOverlay";
import NewGlobalContext from "../../context/global/GlobalContext";
import { useRouter } from "next/navigation";

let collectedArray = [];

export default function GameSection({ Get_Your_Tickets }) {
  const [counter, setCounter] = useState(1);
  const [arraysCollection, setArraysCollection] = useState([[]]);
  const [resetCardArray, setResetCardArray] = useState([]);
  const { enableJackpot } = useContext(GlobalContext);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const unique_id = uuid();

  const { setOpenSub } = useContext(NewGlobalContext);

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
    loginOpen,
  } = useContext(NewGlobalContext);

  const router = useRouter();

  const handleClick = () => {
    router.push("?showRegister=true");

    setLoginOpen((prev) => !prev);
  };

  function onCollectArrays(cardNumber, array) {
    const newArray = [...arraysCollection];
    newArray[cardNumber - 1] = array;
    setArraysCollection([...newArray]);
  }

  function onResetCard(cardNumber, array) {
    const newArray = [...arraysCollection];
    newArray[cardNumber - 1] = array;
    setArraysCollection([...newArray]);
  }

  const handleIncrement = () => {
    // alert("Increment")
    setCounter((prevCounter) => prevCounter + 1);
    setArraysCollection((prevArrays) => [...prevArrays, []]);
  };

  const handleDecrement = () => {
    // alert("Decrement")

    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
      setArraysCollection((prevArrays) => prevArrays.slice(0, -1));
    }
  };

  const handleRandomizeAll = () => {};

  const handleAddToCart = () => {
    let One_ticket_price = 1;

    let collectedValues = arraysCollection.filter((el) => el.length === 5);
    if (collectedValues.length < counter) {
      console.log({ counter });
      console.log({ arrayleng: collectedValues.length });
      toast.error(`Please generate ${counter} ticket to proceed.`);
      return;
    }

    console.log({
      id: unique_id,
      game: "jackpot madness",
      gameTitle: "",
      tickets: collectedValues,
      entries: collectedValues.length,
      price: counter * One_ticket_price,
    });

    dispatch(
      add({
        id: unique_id,
        game: "jackpot madness",
        gameTitle: "",
        tickets: collectedValues,
        entries: collectedValues.length,
        price: counter * One_ticket_price,
      })
    );

    dispatch(setTicketPopup(true));

    collectedValues = [];

    // ! BELOW COMMENT

    // setArraysCollection([]);
    // setResetCardArray([]);
    // setCounter(3);
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <section id="BuyTicket" className={`relative`}>
      <SectionIdentifier id="play" />

      <div className={`wrapper-desk my-8`}>
        <div
          className={`flex flex-col sm:flex-row items-center justify-between mt-4 gap-4 sm:gap-0`}
        >
          <SectionHeading heading="select entries" />

          <div className={`flex items-center gap-8`}>
            <CounterComponent
              counter={counter}
              onDecrement={handleDecrement}
              onIncrement={handleIncrement}
            />
          </div>

          {/* handleClick */}

          {typeof window !== "undefined" &&
          window.localStorage.getItem("jwt") ? (
            <button
              onClick={handleAddToCart}
              className={`btnRect !px-5 !py-4 !rounded-lg`}
            >
              Buy Now
            </button>
          ) : (
            <button
              onClick={handleClick}
              className={`btnRect !px-5 !py-4 !rounded-lg`}
            >
              Buy Now
            </button>
          )}
        </div>
        {/* CARD SLIDER */}
        <div className={`mt-4`}>
          <Swiper
            slidesPerView={2.5}
            freeMode={false}
            spaceBetween={8}
            centeredSlides={false}
            pagination={pagination}
            modules={[FreeMode, Pagination, Autoplay, Navigation]}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 8,
                centeredSlides: true,
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 8,
                centeredSlides: false,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 8,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 8,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 8,
                centeredSlides: false,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 12,
                centeredSlides: false,
              },
            }}
            className={``}
          >
            {Array.from({ length: counter }).map((_, i) => (
              <SwiperSlide key={i} className={`w-[268px]`}>
                <GameCard
                  key={i}
                  counter={i + 1}
                  ticketNumber={i + 1}
                  onCollectArrays={onCollectArrays}
                  onResetCard={onResetCard}
                  resetCardArray={resetCardArray}
                />
              </SwiperSlide>
            ))}

            {counter == 1 ? (
              <>
                <SwiperSlide className={`w-[268px] non-clickable-child`}>
                  <div className="transparent-overlay w-[100%] h-[100%]"></div>
                  <GameCard
                    disabled={true}
                    counter={2}
                    ticketNumber={2}
                    onCollectArrays={() => {}}
                    onResetCard={() => {}}
                    resetCardArray={() => {}}
                  />
                </SwiperSlide>

                <SwiperSlide className={`w-[268px] non-clickable-child `}>
                  <div className="transparent-overlay w-[100%] h-[100%]"></div>
                  <GameCard
                    disabled={true}
                    counter={3}
                    ticketNumber={3}
                    onCollectArrays={() => {}}
                    onResetCard={() => {}}
                    resetCardArray={() => {}}
                  />
                </SwiperSlide>
              </>
            ) : (
              counter < 3 && (
                <>
                  <SwiperSlide className={`w-[268px] non-clickable-child `}>
                    <div className="transparent-overlay w-[100%] h-[100%]"></div>
                    <GameCard
                      disabled={true}
                      counter={3}
                      ticketNumber={3}
                      onCollectArrays={() => {}}
                      onResetCard={() => {}}
                      resetCardArray={() => {}}
                    />
                  </SwiperSlide>
                </>
              )
            )}
          </Swiper>
          <div className={`swiper-custom-pagination`}></div>
        </div>
      </div>
      <MethodConfirmationModal
        counter={counter}
        Get_Your_Tickets={Get_Your_Tickets}
        setCounter={setCounter}
        setArraysCollection={setArraysCollection}
        setResetCardArray={setResetCardArray}
        Already_Purchased={false}
        GameData={{}}
        gameID={"few"}
        EntryPrice={0}
      />
    </section>
  );
}

const CounterComponent = ({ counter, onDecrement, onIncrement }) => {
  return (
    <div className={`flex items-center justify-center gap-2`}>
      <button
        onClick={onDecrement}
        className={`btnCircle !bg-cool-50 shadow-xl`}
      >
        <FaMinus />
      </button>
      <div className={`countNumContainer !w-16 !h-16`}>{counter}</div>
      <button
        onClick={onIncrement}
        className={`btnCircle !bg-cool-50 shadow-xl`}
      >
        <FaPlus />
      </button>
    </div>
  );
};
