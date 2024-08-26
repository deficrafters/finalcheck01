"use client";
import { content } from "@/utils/content";
import { useContext, useState, useEffect } from "react";
import GlobalContext from "@/components/context/global/GlobalContext";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";

const { playerA, playerB } = content;
let localArr = [];

export default function GamePopup() {
  const { setDreamzDualPopup, dreamzDualPopup } = useContext(GlobalContext);
  const [totalSeconds, setTotalSeconds] = useState(10); // 2 minutes in seconds
  const [timerActive, setTimerActive] = useState(false);
  const [infoBlock, setInfoBlock] = useState(true);
  const [randomBlock, setRandomBlock] = useState(false);
  const [matchingBlock, setMatchingBlock] = useState(false);
  const [announcementBlock, setAnnouncementBlock] = useState(false);
  const [selectNumCard, setSelectNumCard] = useState(false);
  const [randomArr, setRandomArr] = useState([]);
  const [composedArr, setComposedArr] = useState([]);

  useEffect(() => {
    let interval = null;
    if (timerActive && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds((totalSeconds) => totalSeconds - 1);
      }, 1000);
    } else {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, totalSeconds]);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const handleClosePopup = () => {
    document.body.style.overflow = dreamzDualPopup ? "auto" : "hidden";
    setDreamzDualPopup(false);
    setTotalSeconds(10);
    setTimerActive(false);
    setRandomArr([]);
    setComposedArr([]);
    setSelectNumCard(false);
    localArr = [];
    setTimeout(() => {
      setInfoBlock(true);
      setRandomBlock(false);
      setMatchingBlock(false);
      setAnnouncementBlock(false);
    }, 100);
  };

  const onProceed = () => {
    setInfoBlock(false);
    setRandomBlock(true);
  };

  const showHideNumCard = () => {
    setSelectNumCard((prev) => !prev);
    setComposedArr([]);
    localArr = [];
  };

  const setComposedArrAsRandom = () => {
    setRandomArr(composedArr);
    setSelectNumCard((prev) => !prev);
  };

  const onRandomBack = () => {
    setInfoBlock(true);
    setRandomArr([]);
    setRandomBlock(false);
    setRandomArr([]);
    setComposedArr([]);
    setSelectNumCard(false);
    localArr = [];
  };

  const onRandomContinue = () => {
    setRandomBlock(false);
    setMatchingBlock(true);
  };

  const onMatchBack = () => {
    setMatchingBlock(false);
    setRandomBlock(true);
  };

  const onMatchContinue = () => {
    setMatchingBlock(false);
    setAnnouncementBlock(true);
    setTimerActive(true);
  };

  const onRandomize = () => {
    localArr = [];
    if (selectNumCard === true) {
      setSelectNumCard(false);
    }
    const randomNum = Array.from(
      { length: 3 },
      () => Math.floor(Math.random() * 9) + 1
    );
    setRandomArr(randomNum);
  };

  const numOneClick = (index) => {
    localArr[0] = index;
    setComposedArr([...localArr]);
  };

  const setFirstElOfComposed = (index) => {
    localArr[0] = index;
    setComposedArr([...localArr]);
  };

  const setSecondElOfComposed = (index) => {
    localArr[1] = index;
    setComposedArr([...localArr]);
  };

  const setThirdElOfComposed = (index) => {
    localArr[2] = index;
    setComposedArr([...localArr]);
  };

  return (
    <div
      className={`fixed ${
        dreamzDualPopup ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-sm px-2 xs:px-4 md:px-8 lg:px-10 xl:px-16 z-30 overflow-y-scroll transition-all duration-150`}
    >
      {/* INFO BLOCK */}
      {infoBlock && (
        <div
          className={`relative max-w-[992px] mx-auto bg-cool-50 px-6 sm:px-8 py-4 md:py-6 mt-10 rounded-[8px]`}
        >
          {timerActive ? null : (
            <button
              onClick={handleClosePopup}
              className={`absolute top-0 right-0 m-4`}
            >
              <FaTimes size={20} />
            </button>
          )}
          {/* HEADER */}
          <div
            className={`flex flex-col md:flex-row items-center justify-between gap-4`}
          >
            <div className={`flex flex-col items-center`}>
              <span className={`text-[36px] tracking-tight`}>
                1 <span className={`font-bold`}>VS</span> 1
              </span>
              <span className={`uppercase tracking-[6px]`}>Game Rules</span>
            </div>
            <div
              className={` text-cool-90 flex  items-center justify-end gap-1 sm:gap-3 capitalize tracking-tight`}
            >
              <div
                className={`text-[14px] sm:text-[16px] lg:text-[20px] border-2 border-cool-70/50 px-2 sm:px-5 py-1 sm:py-3 rounded-lg`}
              >
                entry amount{" "}
                <span className={`text-white font-semibold`}>: 5$</span>
              </div>
              <div
                className={`text-[14px] sm:text-[16px] lg:text-[20px] border-2 border-cool-70/50 px-2 sm:px-5 py-1 sm:py-3 rounded-lg`}
              >
                winning amount{" "}
                <span className={`text-white font-semibold`}>: 8$</span>
              </div>
            </div>
          </div>

          {/* BODY TEXT */}
          <div className={`mt-3 sm:mt-6 `}>
            <p className={`text-[14px] sm:text-[16px] text-cool-90`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* BUTTONS */}
          <div className={`flex items-center justify-center gap-2 mt-6`}>
            <button
              onClick={handleClosePopup}
              className={`btnRect !bg-cool-05 !rounded-md`}
            >
              Cancel
            </button>
            <button
              onClick={onProceed}
              className={`btnRect !bg-hl-02 !rounded-md`}
            >
              Proceed
            </button>
          </div>
        </div>
      )}

      {/* RANDOM BLOCK */}
      {randomBlock && (
        <div
          className={`relative max-w-max mx-auto text-center bg-cool-50 px-8 py-6 mt-10 rounded-[8px]`}
        >
          {timerActive ? null : (
            <button
              onClick={handleClosePopup}
              className={`absolute top-0 right-0 m-4`}
            >
              <FaTimes size={20} />
            </button>
          )}

          <div className={`flex flex-col items-center gap-2`}>
            <div className={`flex flex-col items-center`}>
              <span className={`text-[36px] tracking-tight`}>
                1 <span className={`font-bold`}>VS</span> 1
              </span>
              <span className={`uppercase tracking-[6px]`}>Game</span>
            </div>
            <span className={`text-[20px] font-semibold tracking-tight`}>
              Number Confirmation
            </span>
            <div
              onClick={showHideNumCard}
              className={`cursor-pointer flex items-center justify-center gap-2 text-black my-2`}
            >
              <div
                className={`text-[24px] font-semibold bg-white w-[45px] h-[50px] rounded-md flex items-center justify-center`}
              >
                {randomArr[0]}
              </div>
              <div
                className={`text-[24px] font-semibold bg-white w-[45px] h-[50px] rounded-md flex items-center justify-center`}
              >
                {randomArr[1]}
              </div>
              <div
                className={`text-[24px] font-semibold bg-white w-[45px] h-[50px] rounded-md flex items-center justify-center`}
              >
                {randomArr[2]}
              </div>
            </div>
            {selectNumCard === false && (
              <p
                onClick={showHideNumCard}
                className={`text-[14px] sm:text-[16px] text-cool-90`}
              >
                Tap here to enter random number manually between{" "}
                <br className={`hidden sm:block`} />
                <span className={`text-white font-semibold`}>0</span> and{" "}
                <span className={`text-white font-semibold`}>9</span> to join
                the match
              </p>
            )}
            {selectNumCard && (
              <NumberSelector
                onClick={setComposedArrAsRandom}
                onFirstElClick={setFirstElOfComposed}
                onSecondElClick={setSecondElOfComposed}
                onThirdElClick={setThirdElOfComposed}
                composedArr={composedArr}
              />
            )}
            {selectNumCard === false && (
              <>
                <span className={`block text-[20px]`}>OR</span>
                <button
                  onClick={onRandomize}
                  className={`border-2 border-cool-70/50 px-3 py-2 rounded-lg`}
                >
                  Click here to generate
                </button>
              </>
            )}
          </div>

          {/* BUTTONS */}
          {selectNumCard === false && (
            <>
              <div className={`flex items-center justify-center gap-2 mt-6`}>
                <button
                  onClick={onRandomBack}
                  className={`btnRect !bg-cool-05 !rounded-md`}
                >
                  Back
                </button>
                <button
                  onClick={onRandomContinue}
                  className={`btnRect !bg-hl-02 !rounded-md`}
                >
                  Continue
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* MATCHING BLOCK */}
      {matchingBlock && (
        <div
          className={`relative max-w-max mx-auto text-center bg-cool-50 px-8 py-6 mt-4 rounded-[8px]`}
        >
          {timerActive ? null : (
            <button
              onClick={handleClosePopup}
              className={`absolute top-0 right-0 m-4`}
            >
              <FaTimes size={24} />
            </button>
          )}
          <div className={`flex flex-col items-center gap-2`}>
            <div className={`flex flex-col items-center`}>
              <span className={`text-[36px] tracking-tight`}>
                1 <span className={`font-bold`}>VS</span> 1
              </span>
              <span className={`uppercase tracking-[6px]`}>Game</span>
            </div>
            <span className={`text-[20px] font-semibold tracking-tight`}>
              Matching the opponent...
            </span>
            <div
              className={`flex items-center justify-between xs:justify-center gap-3 mt-3`}
            >
              <div>
                <div
                  className={`bg-[url("/dreamz-dual/character_left_avatar.png")] w-[90px] h-[90px] xs:w-[100px] xs:h-[100px] rounded-full bg-cool-80 bg-cover bg-center`}
                ></div>
                <span className={`block mt-2`}>{playerA}</span>
              </div>
              <Image
                src={"/dreamz-dual/versus.png"}
                alt=""
                width={100}
                height={100}
                className={`w-[60px] xs:w-[60px] h-auto`}
              />
              <div className={`flex flex-col items-center`}>
                <div
                  className={`bg-[url("/dreamz-dual/character_right_avatar.png")] w-[90px] h-[90px] xs:w-[100px] xs:h-[100px] rounded-full bg-cool-80 bg-cover bg-center`}
                ></div>
                <span className={`block mt-2`}>Matching...</span>
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className={`flex items-center justify-center gap-2 mt-6`}>
            <button
              onClick={onMatchBack}
              className={`btnRect !bg-cool-05 !rounded-md`}
            >
              Back
            </button>
            <button
              onClick={onMatchContinue}
              className={`btnRect !bg-hl-02 !rounded-md`}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {announcementBlock && (
        <div
          className={`relative max-w-max mx-auto text-center bg-cool-50 px-8 py-6 mt-10 rounded-[8px]`}
        >
          {timerActive ? null : (
            <button
              onClick={handleClosePopup}
              className={`absolute top-0 right-0 m-4`}
            >
              <FaTimes size={24} />
            </button>
          )}
          <div className={`flex flex-col items-center gap-2`}>
            <div className={`flex flex-col items-center`}>
              <span className={`text-[36px] tracking-tight`}>
                1 <span className={`font-bold`}>VS</span> 1
              </span>
              <span className={`uppercase tracking-[6px]`}>Game</span>
            </div>
            <span className={`text-[20px]  tracking-tight`}>
              Stay put, we will announce <br />
              the winner shortly
            </span>
            <div
              className={`flex items-center justify-between xs:justify-center gap-3 mt-3`}
            >
              <div className={`flex flex-col items-center`}>
                <div
                  className={`bg-[url("/dreamz-dual/character_left_avatar.png")] w-[90px] h-[90px] xs:w-[100px] xs:h-[100px] rounded-full bg-cool-80 bg-cover bg-center`}
                ></div>
                <span className={`block mt-2`}>{playerA}</span>
              </div>
              <Image
                src={"/dreamz-dual/versus.png"}
                alt=""
                width={100}
                height={100}
                className={`w-[60px] xs:w-[60px] h-auto`}
              />
              <div className={`flex flex-col items-center`}>
                <div
                  className={`bg-[url("/dreamz-dual/character_right_avatar.png")] w-[90px] h-[90px] xs:w-[100px] xs:h-[100px] rounded-full bg-cool-80 bg-cover bg-center`}
                ></div>
                <span className={`block mt-2`}>{playerB}</span>
              </div>
            </div>
            <div>
              {minutes} min {seconds} secs
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const NumberSelector = ({
  onClick,
  onFirstElClick,
  onSecondElClick,
  onThirdElClick,
  composedArr,
}) => {
  return (
    <div className={`border-2 border-cool-60 rounded-md`}>
      <div className={`max-w-full p-4 flex justify-center gap-6`}>
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
                className={`dreamzDualNumSelector`}
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
                className={`dreamzDualNumSelector`}
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
                className={`dreamzDualNumSelector`}
              >
                {index}
              </span>
            ))}
          </div>
        </div>
      </div>
      {composedArr.length === 3 ? (
        <button onClick={onClick} className={`bg-cool-20 w-full py-2`}>
          Set new numbers
        </button>
      ) : null}
    </div>
  );
};
