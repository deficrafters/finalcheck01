import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Smile from "./smile";
import Fire from "./fire";
import Lion from "./lion";
import Respin from "./respin";
import axios from "axios";

let INITLAL_TIME = 10 * 1 * 1;

export const useSpinModal = () => {
	const [popUp, setPopUp] = useState(false);
	const [modalOpen, setModalOpen] = useState(null);

	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();

	const [rotate, setRotate] = useState(3600);
	const [selected, setSelected] = useState("Player");
	const [tryAgain, setTryAgain] = useState(false);
	const [selectedKey, setSelectedKey] = useState(0);
	const [won, setWon] = useState(false);
	const [gotRewardCount, setgotRewardCount] = useState(0);
	const [time, setTime] = useState(INITLAL_TIME);
	const [canSpinTheWheel, setcanSpinTheWheel] = useState(null)
	const [isLoading, setisLoading] = useState(false)

	const [data, setData] = useState({
		"Player": [
			{
				icon: Smile,
				value: 10,
			},
			{
				icon: Smile,
				value: 25,
			},
			{
				icon: Smile,
				value: 50,
			},
			{
				icon: Smile,
				value: 100,
			},
			{
				icon: Fire,
				value: 500,
			},
			{
				icon: Fire,
				value: 1000,
			},
			{
				icon: Respin,
				value: "RESPIN",
			},
			{
				icon: Lion,
				value: 1,
			},
		],
		"Explorer": [
			{
				icon: Smile,
				value: 1,
			},
			{
				icon: Smile,
				value: 5,
			},
			{
				icon: Smile,
				value: 10,
			},
			{
				icon: Smile,
				value: 15,
			},
			{
				icon: Smile,
				value: 20,
			},
			{
				icon: Fire,
				value: 25,
			},
			{
				icon: Lion,
				value: 200,
			},
			{
				icon: Respin,
				value: "RESPIN",
			}
		],
		"Soldier of fortune": [
			{
				icon: Smile,
				value: 2,
			},
			{
				icon: Smile,
				value: 5,
			},
			{
				icon: Smile,
				value: 10,
			},
			{
				icon: Smile,
				value: 25,
			},
			{
				icon: Smile,
				value: 50,
			},
			{
				icon: Fire,
				value: 100,
			},
			{
				icon: Lion,
				value: 2500,
			},
			{
				icon: Respin,
				value: "RESPIN",
			}
		],
		"Master of fortune": [
			{
				icon: Smile,
				value: 500,
			},
			{
				icon: Smile,
				value: 1000,
			},
			{
				icon: Smile,
				value: 2500,
			},
			{
				icon: Smile,
				value: 5000,
			},
			{
				icon: Smile,
				value: 10000,
			},
			{
				icon: Fire,
				value: 25000,
			},
			{
				icon: Lion,
				value: 200000,
			},
			{
				icon: Respin,
				value: "RESPIN",
			}
		],
		"Excitement expert": [
			{
				icon: Smile,
				value: 500,
			},
			{
				icon: Smile,
				value: 1000,
			},
			{
				icon: Smile,
				value: 2500,
			},
			{
				icon: Smile,
				value: 5000,
			},
			{
				icon: Smile,
				value: 10000,
			},
			{
				icon: Fire,
				value: 25000,
			},
			{
				icon: Lion,
				value: 200000,
			},
			{
				icon: Respin,
				value: "RESPIN",
			}
		],
		"Vip club steel card": [
			{
				icon: Smile,
				value: 500,
			},
			{
				icon: Smile,
				value: 1000,
			},
			{
				icon: Smile,
				value: 2500,
			},
			{
				icon: Smile,
				value: 5000,
			},
			{
				icon: Smile,
				value: 10000,
			},
			{
				icon: Fire,
				value: 25000,
			},
			{
				icon: Lion,
				value: 200000,
			},
			{
				icon: Respin,
				value: "RESPIN",
			}
		],
		"Vip club bronze card": [
			{
				icon: Smile,
				value: 500,
			},
			{
				icon: Smile,
				value: 1000,
			},
			{
				icon: Smile,
				value: 2500,
			},
			{
				icon: Smile,
				value: 5000,
			},
			{
				icon: Smile,
				value: 10000,
			},
			{
				icon: Fire,
				value: 25000,
			},
			{
				icon: Lion,
				value: 200000,
			},
			{
				icon: Respin,
				value: "RESPIN",
			}
		],
		"Vip club silver card": [
			{
				icon: Smile,
				value: 500,
			},
			{
				icon: Smile,
				value: 1000,
			},
			{
				icon: Smile,
				value: 2500,
			},
			{
				icon: Smile,
				value: 5000,
			},
			{
				icon: Smile,
				value: 10000,
			},
			{
				icon: Fire,
				value: 25000,
			},
			{
				icon: Lion,
				value: 200000,
			},
			{
				icon: Respin,
				value: "RESPIN",
			}
		],
		"Vip club gold card": [
			{
				icon: Smile,
				value: 500,
			},
			{
				icon: Smile,
				value: 1000,
			},
			{
				icon: Smile,
				value: 2500,
			},
			{
				icon: Smile,
				value: 5000,
			},
			{
				icon: Smile,
				value: 10000,
			},
			{
				icon: Fire,
				value: 25000,
			},
			{
				icon: Lion,
				value: 200000,
			},
			{
				icon: Respin,
				value: "RESPIN",
			}
		],
		"Vip club platinum card": [
			{
				icon: Smile,
				value: 500,
			},
			{
				icon: Smile,
				value: 1000,
			},
			{
				icon: Smile,
				value: 2500,
			},
			{
				icon: Smile,
				value: 5000,
			},
			{
				icon: Smile,
				value: 10000,
			},
			{
				icon: Fire,
				value: 25000,
			},
			{
				icon: Lion,
				value: 200000,
			},
			{
				icon: Respin,
				value: "RESPIN",
			}
		],
	})

	const [prize, setPrize] = useState({
		"90": data[selected][6].value,
		"135": data[selected][5].value,
		"180": data[selected][4].value,
		"270": data[selected][2].value,
	})

	const getTimeData = () => {
		
		setisLoading(true)

		var parseIt
		
		let Dats = localStorage.getItem("jwt")

		if (Dats) {
			 parseIt = JSON.parse(Dats?Dats:"")
		}else{
			return
		}
	
			
		
		try {

			axios.post("/api/CheckSpinWheelValidation", {
				ids: parseIt.data._id
			})
				.then((acc) => {
					setisLoading(false)

					// console.log(acc.data)

					let values = acc.data.CanSpinWheel
					setgotRewardCount(acc.data.GotAmount)
					setWon(!values);
					setTime(INITLAL_TIME)
					setcanSpinTheWheel(acc.data.CanSpinWheel)
				})
				.catch((err) => {
					// console.log(err)
					setisLoading(false)

				})

		} catch (error) {
			setisLoading(false)

		}



	}

	useEffect(() => {

		getTimeData()

	}, [])





	const handlePrev = () => {
		if (selectedKey !== 0) {
			const keys = Object.keys(data);
			setSelectedKey(selectedKey - 1);
			setSelected(keys[selectedKey - 1]);
			setPrize({
				"90": data[keys[selectedKey - 1]][6].value,
				"135": data[keys[selectedKey - 1]][5].value,
				"180": data[keys[selectedKey - 1]][4].value,
				"270": data[keys[selectedKey - 1]][2].value,
			})
		}
	}

	const handleNext = () => {
		const keys = Object.keys(data);
		if (selectedKey < keys.length - 1) {
			setSelectedKey(selectedKey + 1);
			setSelected(keys[selectedKey + 1]);
			setPrize({
				"90": data[keys[selectedKey + 1]][6].value,
				"135": data[keys[selectedKey + 1]][5].value,
				"180": data[keys[selectedKey + 1]][4].value,
				"270": data[keys[selectedKey + 1]][2].value,
			})
		}
	}

	const [isRotating, setIsRotating] = useState(false);
	const wheelRef = useRef(null);


	const startRotation = () => {

		setisLoading(true)
		const stop = [90, 90, 270, 180, 180, 270];
	
		let Dats = localStorage.getItem("jwt")
		if (Dats) {
			var parseIt = JSON.parse(Dats)
		} else {
			return
		}

		if (wheelRef?.current) {
			setIsRotating(true);
			setTryAgain(false);
			// Choose a random index from the 'stop' array
			const randomIndex = Math.floor(Math.random() * stop.length);
			// Get the rotation value corresponding to the chosen index
			let rotateVal = stop[randomIndex];
			wheelRef.current.style.transform = `rotate(${rotate + rotateVal}deg)`;
			// 

			setRotate(rotate + 3600);
			setTimeout(() => {
				if (stop[randomIndex] == 45) {
					setIsRotating(false);
					setTryAgain(true);
					setisLoading(false)


				}
				else {

					setisLoading(false)

					setIsRotating(false);

					try {

						axios.post("/api/SpinWheel", {
							createRec: true,
							ids: parseIt.data._id,
							prizes: prize[rotateVal]
						})
							.then((acc) => {
								// console.log(acc.data)
								setisLoading(false)

								setWon(true);
								getTimeData()

								window.location.reload();


							})
							.catch((err) => {
								// console.log(err)
								setisLoading(false)

							})

					} catch (error) {
						setisLoading(false)

					}

				}
				// showValueForElementWithId("frame");
			}, 5000)
		}
	};


	const hours = Math.floor(time / 3600);
	const minutes = Math.floor((time % 3600) / 60);
	const seconds = time % 60;


	const onModalRequestClose = () => {
		// setPopUp(false);

	};

	const toggleModalState = (newState) => () => {
		// setPopUp(!popUp);
	};



	return {
		popUp,
		setPopUp,
		onModalRequestClose,
		openModal: toggleModalState(true),
		closeModal: toggleModalState(false),
		searchParams,
		wheelRef,
		data,
		selected,
		won,
		gotRewardCount,
		handleNext,
		handlePrev,
		tryAgain,
		isRotating,
		startRotation,
		hours,
		minutes,
		seconds,
		isLoading,
		setisLoading

	};
};
