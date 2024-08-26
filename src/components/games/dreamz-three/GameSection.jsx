"use client";
import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "@/store/slices/cartSlice";
import { content } from "@/utils/content";
import SectionIdentifier from "@/components/common/SectionIdentifier";
import Image from "next/image";
import {
  FaMinus,
  FaPlay,
  FaPlus,
  FaShuffle,
  FaTrashCan,
} from "react-icons/fa6";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";

import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaTimes } from "react-icons/fa";
import GlobalContext from "@/components/context/global/GlobalContext";
import DisabledOverlay from "@/components/common/DisabledOverlay";

const { dreamzThreeGameCardData } = content;
let localArr = [];

export default function GameSection() {
  const [active, setActive] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeArr, setActiveArr] = useState(null);
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);
  const [countFour, setCountFour] = useState(0);
  const [composedArr, setComposedArr] = useState([]);
  const [arrayOne, setArrayOne] = useState(
    Array.from({ length: 12 }, () => [])
  );
  const [arrayTwo, setArrayTwo] = useState(
    Array.from({ length: 12 }, () => [])
  );
  const [arrayThree, setArrayThree] = useState(
    Array.from({ length: 12 }, () => [])
  );
  const [arrayFour, setArrayFour] = useState(
    Array.from({ length: 12 }, () => [])
  );

  const { enableDreamzThree, numberCardPopup, setNumberCardPopup } = useContext(GlobalContext);

  const dispatch = useDispatch();
  const unique_id = uuid();

  const activeArray =
    active === 0
      ? arrayOne
      : active === 1
        ? arrayTwo
        : active === 2
          ? arrayThree
          : active === 3
            ? arrayFour
            : null;

  const setActiveArray =
    active === 0
      ? setArrayOne
      : active === 1
        ? setArrayTwo
        : active === 2
          ? setArrayThree
          : active === 3
            ? setArrayFour
            : null;

  const activeCount =
    active === 0
      ? countOne
      : active === 1
        ? countTwo
        : active === 2
          ? countThree
          : active === 3
            ? countFour
            : null;

  function increment(arr, setArr, count, setCount) {
    if (countOne < 12) {
      let filledArr = 0;
      const newArr = [...arr];
      newArr.splice(count, 1, randomize());
      setArr(newArr);
      newArr.forEach((el) => {
        if (el.length !== 0) filledArr++;
      });
      setCount(filledArr);
    }
  }

  function decrement(arr, setArr, count, setCount) {
    if (count > 0) setCount((prev) => prev - 1);
    const newArr = [...arr];
    newArr.splice(count - 1, 1, []);
    setArr(newArr);
  }

  function ticketClick(arr, setArr, setCount, index) {
    let filledArr = 0;
    const newArr = [...arr];
    const slicedArr = newArr.slice(0, index + 1);

    if (arr[index].length === 0) {
      slicedArr.forEach((el) => {
        if (el.length === 0) el.push(randomize());
      });

      newArr.splice(0, slicedArr.length, ...slicedArr);

      newArr.forEach((el) => {
        if (el.length !== 0) filledArr++;
      });
      setArr(newArr);
      setCount(filledArr);
    } else {
      setNumberCardPopup(true);
      // document.body.style.overflow = numberCardPopup ? "auto" : "hidden";
      setActiveIndex(index);
      setActiveArr(arr);
    }
  }

  function ticketRandom(arr, setArr, setCount, index) {
    const newArr = [...arr];
    if (arr[index].length === 0) {
      setCount((prev) => prev + 1);
      newArr.splice(index, 1, randomize());
      setArr(newArr);
    } else {
      newArr.splice(index, 1, randomize());
      setArr(newArr);
    }
  }

  function ticketDelete(arr, setArr, setCount, index) {
    let filledArr = 0;
    const collectedEl = [];
    const newArr = [...arr];
    let collectedArr = [...arr];

    newArr.splice(index, 1, []);
    newArr.forEach((el) => {
      if (el.length !== 0) {
        filledArr++;
        collectedEl.push(el);
      }
    });

    collectedArr = [...newArr];
    collectedArr.splice(0, collectedEl.length + 1, ...collectedEl, []);

    setArr(collectedArr);
    setCount(filledArr);
  }

  function buyNow(arr, gameTitle, setActive) {
    let ticketCollection = 0;
    let collectedValues = [];
    const newArr = [...arr];
    newArr.forEach((el) => {
      if (el.length !== 0) ticketCollection++;
    });
    collectedValues = newArr.slice(0, ticketCollection);
    dispatch(
      add({
        id: unique_id,
        game: "dreamz three",
        gameTitle: gameTitle,
        tickets: collectedValues,
        entries: collectedValues.length,
        price: collectedValues.length * 35,
      })
    );
    toast.success("Successfully Added!");
  }

  const handleIncrement = () => {
    if (active === 0) {
      increment(arrayOne, setArrayOne, countOne, setCountOne);
    } else if (active === 1) {
      increment(arrayTwo, setArrayTwo, countTwo, setCountTwo);
    } else if (active === 2) {
      increment(arrayThree, setArrayThree, countThree, setCountThree);
    } else if (active === 3) {
      increment(arrayFour, setArrayFour, countFour, setCountFour);
    }
  };

  const handleDecrement = () => {
    active === 0
      ? decrement(arrayOne, setArrayOne, countOne, setCountOne)
      : active === 1
        ? decrement(arrayTwo, setArrayTwo, countTwo, setCountTwo)
        : active === 2
          ? decrement(arrayThree, setArrayThree, countThree, setCountThree)
          : active === 3
            ? decrement(arrayFour, setArrayFour, countFour, setCountFour)
            : null;
  };

  const handleClick = (index) => {
    active === 0
      ? ticketClick(arrayOne, setArrayOne, setCountOne, index)
      : active === 1
        ? ticketClick(arrayTwo, setArrayTwo, setCountTwo, index)
        : active === 2
          ? ticketClick(arrayThree, setArrayThree, setCountThree, index)
          : active === 3
            ? ticketClick(arrayFour, setArrayFour, setCountFour, index)
            : null;
  };

  const handleRandomize = (index) => {
    active === 0
      ? ticketRandom(arrayOne, setArrayOne, setCountOne, index)
      : active === 1
        ? ticketRandom(arrayTwo, setArrayTwo, setCountTwo, index)
        : active === 2
          ? ticketRandom(arrayThree, setArrayThree, setCountThree, index)
          : active === 3
            ? ticketRandom(arrayFour, setArrayFour, setCountFour, index)
            : null;
  };

  const handleDelete = (index) => {
    active === 0
      ? ticketDelete(arrayOne, setArrayOne, setCountOne, index)
      : active === 1
        ? ticketDelete(arrayTwo, setArrayTwo, setCountTwo, index)
        : active === 2
          ? ticketDelete(arrayThree, setArrayThree, setCountThree, index)
          : active === 3
            ? ticketDelete(arrayFour, setArrayFour, setCountFour, index)
            : null;
  };

  const handleBuyNow = () => {
    active === 0
      ? buyNow(arrayOne, "win 500 usdt", setActive)
      : active === 1
        ? buyNow(arrayTwo, "win 1000 usdt")
        : active === 2
          ? buyNow(arrayThree, "win 2000 usdt")
          : active === 3
            ? buyNow(arrayFour, "win 5000 usdt")
            : null;
  };

  const randomize = () => {
    let numbers = [];
    while (numbers.length < 3) {
      let randomNumber = Math.floor(Math.random() * 9) + 1;
      numbers.push(randomNumber);
    }
    return numbers;
  };

  const onSetNumbers = () => {
    if (localArr.length < 3) {
      return console.log("fill all the fields");
    }
    const newArr = [...activeArr];
    newArr.splice(activeIndex, 1, localArr);
    {
      active === 0
        ? setArrayOne(newArr)
        : active === 1
          ? setArrayTwo(newArr)
          : active === 2
            ? setArrayThree(newArr)
            : active === 3
              ? setArrayFour(newArr)
              : null;
    }
    setNumberCardPopup(false);
    // document.body.style.overflow = numberCardPopup ? "auto" : "hidden";
    setComposedArr([]);
    localArr = [];
  };

  const onFirstElClick = (index) => {
    localArr[0] = index;
    setComposedArr([...localArr]);
  };

  const onSecondElClick = (index) => {
    localArr[1] = index;
    setComposedArr([...localArr]);
  };

  const onThirdElClick = (index) => {
    localArr[2] = index;
    setComposedArr([...localArr]);
  };

  const onCloseNumCard = () => {
    localArr = [];
    setNumberCardPopup(false);
    setComposedArr([localArr]);
  };

  return (
    <section className={`relative py-8`}>
      {/* {!enableDreamzThree && <DisabledOverlay />} */}
      {numberCardPopup && (
        <NumberCardPopup
          onSetNumbers={onSetNumbers}
          composedArr={composedArr}
          onFirstElClick={onFirstElClick}
          onSecondElClick={onSecondElClick}
          onThirdElClick={onThirdElClick}
          onCloseNumCard={onCloseNumCard}
        />
      )}
      <SectionIdentifier id="pools" />
      <div className={`wrapper-desk`}>
        <h3
          className={`text-[24px] text-center md:text-left font-semibold tracking-tight`}
        >
          Lottery Pools
        </h3>

        {/* BLOCK */}
        <div className={`block md:block`}>
          {/* CARDS */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:flex gap-2 xl:gap-4 mt-4`}
          >
            {dreamzThreeGameCardData.map((item, index) => (
              <div
                onClick={() => setActive(index)}
                key={index}
                className={`relative cursor-pointer justify-self-center w-[100%] xs:w-[90%] sm:w-[100%] max-w-[100%] md:max-w-[275px] md:w-[275px] ${active === index ? "ring-2 ring-cool-30" : null
                  } rounded-lg mb-4 md:mb-0`}
              >
                {active === index ? (
                  <div
                    className={`hidden md:block absolute -bottom-[20px] left-1/2 -translate-x-1/2 rotate-[90deg]`}
                  >
                    <FaPlay color="#373aa4" size={30} />
                  </div>
                ) : null}

                {active === index ? (
                  <div
                    className={`hidden md:block absolute top-0 left-0 w-full h-full ring-2 ring-cool-30 ring-inset z-[1] rounded-lg`}
                  ></div>
                ) : null}

                {/* WIN UPTO SECTION */}
                <div
                  className={`text-[12px] text-cool-80 xl:text-[16px] flex flex-col items-center justify-center gap-1 leading-none bg-cool-10 rounded-t-md py-4`}
                >
                  WIN UP TO
                  <span
                    className={`text-[20px] text-white xl:text-[28px] font-semibold tracking-tight`}
                  >
                    {item.winningAmount} USDT
                  </span>
                </div>

                {/* IMAGE SECTION */}
                <div className={`relative h-[200px] md:h-[120px] xl:h-[192px]`}>
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className={`absolute w-auto h-auto object-cover`}
                  />
                </div>

                {/* ENTRY AMOUNT SECTION */}
                <div
                  className={`py-2 bg-cool-40 text-[16px] xl:text-[20px] flex flex-row xl:flex-row items-center justify-center gap-2 xl:gap-3 rounded-b-md`}
                >
                  <span className={`leading-none`}>
                    USDT&nbsp;
                    <span className={`font-semibold`}>{item.entryPrice}</span>
                  </span>
                  <span
                    className={`bg-cool-90 text-cool-05 text-[12px] xl:text-[16px] font-semibold uppercase leading-none tracking-tight p-2 rounded-md`}
                  >
                    buy now
                  </span>
                </div>
                {/* TICKET SECTION IN CARD AFTER 768 PX */}
                {active === index && (
                  <div className={`block md:hidden`}>
                    {/* COUNTER */}
                    <div
                      className={`h-max px-4 xl:px-6 pt-4 ${activeCount > 5 ? "pb-8" : "pb-4"
                        }  text-center`}
                    >
                      <p className={`text-[14px] text-cool-80 mb-4`}>
                        You can select up to 12 lines in a single ticket
                      </p>
                      <Counter
                        count={activeCount}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                      />
                      <span className={`inline-block tracking-[6px] -mr-[6px]`}>
                        LINE
                      </span>
                    </div>

                    {/* TICKETS SECTION */}
                    <div
                      className={`${activeCount > 5 ? "h-auto" : "h-[162px]"
                        } flex-1 border-l-2 border-cool-30/50 px-2 grid grid-cols-2 gap-x-4 xs:gap-x-0 sm:gap-x-4 overflow-hidden`}
                    >
                      {activeArray.map((item, index) => (
                        <div
                          key={index}
                          className={`h-max pb-4 flex items-center justify-center gap-2`}
                        >
                          {/* NUMBERS */}
                          <div
                            onClick={() => handleClick(index)}
                            className={`cursor-pointer text-[18px] w-[90px] sm:w-[80px] h-[38px] flex items-center justify-center  gap-3 leading-none border-2 border-cool-70/50 px-2 py-3 rounded-md`}
                          >
                            {item.length === 0 ? (
                              <span
                                className={`block text-[14px] text-slate-400`}
                              >
                                Add Line
                              </span>
                            ) : (
                              <>
                                <span>{item}</span>
                              </>
                            )}
                          </div>

                          {/* SHUFFLE BUTTON */}
                          <button
                            onClick={() => handleRandomize(index)}
                            disabled={item.length > 0 ? false : true}
                            className={`text-slate-400`}
                          >
                            <FaShuffle />
                          </button>

                          {/* DELETE BUTTON */}
                          <button
                            onClick={() => handleDelete(index)}
                            disabled={item.length > 0 ? false : true}
                            className={`text-slate-400`}
                          >
                            <FaTrashCan />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* BUY BUTTON */}
                    {(active === 0 && countOne > 0) ||
                      (active === 1 && countTwo > 0) ||
                      (active === 2 && countThree > 0) ||
                      (active === 3 && countFour > 0) ? (
                      <button
                        onClick={handleBuyNow}
                        className={`w-full bg-cool-20 text-[18px] py-4`}
                      >
                        Buy Now
                      </button>
                    ) : null}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* TICKET SELECTER */}
          {active !== null && (
            <div
              className={`hidden md:block bg-cool-10 mt-4 rounded-lg overflow-hidden`}
            >
              <div className={`flex`}>
                {/* COUNTER */}
                <div
                  className={`w-[180px] xl:w-[250px] h-max px-4 xl:px-6 pt-8 ${activeCount > 5 ? "pb-8" : "pb-4"
                    }  text-center`}
                >
                  <Counter
                    count={activeCount}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                  />
                  <span className={`inline-block tracking-[6px] -mr-[6px]`}>
                    LINE
                  </span>
                  <p className={`text-[14px] text-cool-80 mt-4`}>
                    You can select up to 12 lines in a single ticket
                  </p>
                </div>
                {/* TICKETS SECTION */}
                <div
                  className={`${activeCount > 5 ? "h-auto" : "h-[209px]"
                    } flex-1 border-l-2 border-cool-30/50 px-2 xl:px-6 pt-10 xl:pt-8 pb-8 grid grid-cols-3 gap-y-12`}
                >
                  {activeArray.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center gap-2 xl:gap-4`}
                    >
                      {/* NUMBERS */}
                      <div
                        onClick={() => handleClick(index)}
                        className={`cursor-pointer text-[18px] xl:text-[20px] w-[90px] xl:w-[100px] h-[38px] xl:h-[42px] flex items-center justify-center  gap-3 leading-none border-2 border-cool-70/50 px-2 py-3 rounded-md`}
                      >
                        {item.length === 0 ? (
                          <span className={`block text-[14px] text-slate-400`}>
                            Add Line
                          </span>
                        ) : (
                          <>
                            <span>{item}</span>
                          </>
                        )}
                      </div>

                      {/* SHUFFLE BUTTON */}
                      <button
                        onClick={() => handleRandomize(index)}
                        disabled={item.length > 0 ? false : true}
                        className={`text-slate-400`}
                      >
                        <FaShuffle />
                      </button>

                      {/* DELETE BUTTON */}
                      <button
                        onClick={() => handleDelete(index)}
                        disabled={item.length > 0 ? false : true}
                        className={`text-slate-400`}
                      >
                        <FaTrashCan />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* BUY BUTTON */}
              {(active === 0 && countOne > 0) ||
                (active === 1 && countTwo > 0) ||
                (active === 2 && countThree > 0) ||
                (active === 3 && countFour > 0) ? (
                <button
                  onClick={handleBuyNow}
                  className={`w-full bg-cool-20 text-[18px] py-4`}
                >
                  Buy Now
                </button>
              ) : null}
            </div>
          )}
        </div>

        {/* SLIDER */}
        <div className={`hidden md:hidden mt-4`}>
          <Swiper
            initialSlide={1}
            breakpoints={{
              480: {
                slidesPerView: 1.25,
                spaceBetween: 8,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 8,
                centeredSlides: true,
              },
            }}
          >
            {dreamzThreeGameCardData.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => setActive(index)}
                  className={`rounded-md overflow-hidden`}
                >
                  {/* WIN UPTO SECTION */}
                  <div
                    className={`bg-cool-10 flex flex-col items-center justify-center gap-1 leading-none py-4`}
                  >
                    WIN UP TO
                    <span
                      className={`text-white text-[28px] font-semibold tracking-tight`}
                    >
                      {item.winningAmount} USDT
                    </span>
                  </div>

                  {/* IMAGE SECTION */}
                  <div className={`relative h-[250px]`}>
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className={`absolute w-auto h-auto object-cover`}
                    />
                  </div>

                  {/* ENTRY AMOUNT SECTION */}
                  <div
                    className={`py-2 bg-cool-40 text-[20px] flex items-center justify-center gap-3`}
                  >
                    <span className={`leading-none`}>
                      USDT&nbsp;
                      <span className={`font-semibold`}>{item.entryPrice}</span>
                    </span>
                    <span
                      className={`bg-cool-90 text-cool-05 text-[16px] font-semibold uppercase leading-none tracking-tight p-2 rounded-md`}
                    >
                      buy now
                    </span>
                  </div>

                  {/* COUNTER & TICKET SECTION */}
                  {active === index && (
                    <div
                      className={`bg-cool-20/50 rounded-lg mt-2 overflow-hidden`}
                    >
                      {/* COUNTER */}
                      <div className={`py-4 text-center px-8`}>
                        <Counter
                          count={activeCount}
                          onIncrement={handleIncrement}
                          onDecrement={handleDecrement}
                        />
                        <span
                          className={`inline-block tracking-[6px] -mr-[6px]`}
                        >
                          LINE
                        </span>
                        <p className={`text-[14px] text-cool-80 mt-4`}>
                          You can select up to 12 lines in a single ticket
                        </p>
                      </div>

                      {/* TICKET SECTION */}
                      <div
                        className={`${activeCount > 5 ? "h-auto" : "h-[180px]"
                          } border-t-2 border-cool-30/50 px-2 py-4 grid grid-cols-2 gap-y-4`}
                      >
                        {activeArray.map((item, index) => (
                          <div
                            key={index}
                            className={`flex items-center justify-center gap-2 xl:gap-4`}
                          >
                            {/* NUMBERS */}
                            <div
                              onClick={() => handleClick(index)}
                              className={`cursor-pointer text-[18px] xl:text-[20px] w-[80px] xs:w-[90px] xl:w-[100px] h-[38px] xl:h-[42px] flex items-center justify-center  gap-3 leading-none border-2 border-cool-70/50 px-2 py-3 rounded-md`}
                            >
                              {item.length === 0 ? (
                                <span
                                  className={`block text-[14px] text-slate-400`}
                                >
                                  Add Line
                                </span>
                              ) : (
                                <>
                                  <span>{item}</span>
                                </>
                              )}
                            </div>

                            {/* SHUFFLE BUTTON */}
                            <button
                              onClick={() => handleRandomize(index)}
                              disabled={item.length > 0 ? false : true}
                              className={`text-slate-400`}
                            >
                              <FaShuffle />
                            </button>

                            {/* DELETE BUTTON */}
                            <button
                              onClick={() => handleDelete(index)}
                              disabled={item.length > 0 ? false : true}
                              className={`text-slate-400`}
                            >
                              <FaTrashCan />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* BUY BUTTON */}
                      {(active === 0 && countOne > 0) ||
                        (active === 1 && countTwo > 0) ||
                        (active === 2 && countThree > 0) ||
                        (active === 3 && countFour > 0) ? (
                        <button
                          onClick={handleBuyNow}
                          className={`w-full bg-cool-20 text-[18px] py-4`}
                        >
                          Buy Now
                        </button>
                      ) : null}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className={`flex items-center justify-center`}>
      <button
        onClick={onDecrement}
        className={`btnCircle !bg-cool-40 !w-10 !h-10 xl:!w-12 xl:!h-12`}
      >
        <FaMinus />
      </button>
      <span
        className={`text-[28px] xl:text-[32px] font-semibold w-[50px] text-center`}
      >
        {count}
      </span>
      <button
        onClick={onIncrement}
        className={`btnCircle !bg-cool-40 !w-10 !h-10 xl:!w-12 xl:!h-12`}
      >
        <FaPlus />
      </button>
    </div>
  );
};

const NumberCardPopup = ({
  onSetNumbers,
  onFirstElClick,
  onSecondElClick,
  onThirdElClick,
  composedArr,
  onCloseNumCard,
}) => {
  return (
    <div
      className={`bg-black/50 backdrop-blur-sm fixed top-0 left-0 w-full h-full z-30 flex items-center justify-center`}
    >
      <div className={`max-w-[300px] rounded-md overflow-hidden`}>
        <div className={`bg-cool-30 p-4 flex justify-center gap-6`}>
          <div className={`flex flex-col items-center`}>
            <div
              className={`text-[24px] w-12 h-12 bg-blue-300 text-cool-05 font-semibold rounded-full flex items-center justify-center mb-2`}
            >
              {composedArr[0]}
            </div>
            <div className={`grid grid-cols-2 gap-1`}>
              {Array.from({ length: 10 }).map((_, index) => (
                <span
                  key={index}
                  onClick={() => onFirstElClick(index)}
                  className={`dreamzDualNumSelector !bg-cool-50 hover:!bg-cool-60 transition-all duration-100`}
                >
                  {index}
                </span>
              ))}
            </div>
          </div>
          <div className={`flex flex-col items-center`}>
            <div
              className={`text-[24px] w-12 h-12 bg-blue-300 text-cool-05 font-semibold rounded-full flex items-center justify-center mb-2`}
            >
              {composedArr[1]}
            </div>
            <div className={`grid grid-cols-2 gap-1`}>
              {Array.from({ length: 10 }).map((_, index) => (
                <span
                  key={index}
                  onClick={() => onSecondElClick(index)}
                  className={`dreamzDualNumSelector !bg-cool-50 hover:!bg-cool-60 transition-all duration-100`}
                >
                  {index}
                </span>
              ))}
            </div>
          </div>
          <div className={`flex flex-col items-center`}>
            <div
              className={`text-[24px] w-12 h-12 bg-blue-300 text-cool-05 font-semibold rounded-full flex items-center justify-center mb-2`}
            >
              {composedArr[2]}
            </div>
            <div className={`grid grid-cols-2 gap-1`}>
              {Array.from({ length: 10 }).map((_, index) => (
                <span
                  key={index}
                  onClick={() => onThirdElClick(index)}
                  className={`dreamzDualNumSelector !bg-cool-50 hover:!bg-cool-60 transition-all duration-100`}
                >
                  {index}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`flex items-center ${composedArr.length < 3
              ? "bg-slate-500"
              : "bg-cool-50 hover:bg-cool-60"
            } transition-all duration-150`}
        >
          <button
            disabled={composedArr.length < 3 ? true : false}
            onClick={() => onSetNumbers()}
            className={` w-full py-2 `}
          >
            Set new numbers
          </button>
          <button onClick={onCloseNumCard} className={`px-4`}>
            <FaTimes size="20px" />
          </button>
        </div>
      </div>
    </div>
  );
};
