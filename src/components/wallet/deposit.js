import { ethers } from "ethers";
import USDC from "../../utils/abi/Usdc.json";
import USDT from "../../utils/abi/Usdt.json";
import BSC from "../../utils/abi/Bsc.json";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { setDepositHash } from "@/store/slices/popupSlice";

const getBalance = async ({ address, abi, wallet }) => {
  if (typeof window.ethereum !== undefined) {
    const providers = "";
    const signer = await providers.getSigner();
    const contract = new ethers.Contract(address, abi, signer);
    try {
      const info = await contract.balanceOf(wallet);
      return Number(info) / Math.pow(10, 18);
    } catch (error) {
      //  console.log(error);
      toast.error(error?.reason);
      return { error: error?.reason ? error?.reason : error };
    }
  }
};

export const DepositFn = async ({ type, ...obj }) => {
  console.log({ type, ...obj });

  switch (type) {
    case "USDC": {
      console.log({ type, abi: USDC.abi, address: USDC.address, ...obj });
      return deposit({ type, abi: USDC.abi, address: USDC.address, ...obj });
    }
    case "USDT": {
      console.log({ type, abi: USDC.abi, address: USDC.address, ...obj });
      return deposit({ type, abi: USDT.abi, address: USDT.address, ...obj });
    }
    case "BNB": {
      return deposit({ type, ...obj });
    }
    case "ETH": {
      return deposit({ type, ...obj });
    }

    default:
      break;
  }
};

const deposit = async ({ abi, address, wallet, input, type }) => {
  alert({ abi, address, wallet, input, type });

  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const depositContract = new ethers.Contract(BSC.address, BSC.abi, signer);
    const Amount = ethers.parseUnits(input, "ether");

    if (type === "BNB") {
      const result = await depositContract.buyTokensWithETH({
        value: ethers.parseUnits(input, 18),
      });

      return;
    }

    const balance = await getBalance({
      abi,
      address,
      wallet,
    });

    if (balance?.error) {
      return {
        error: balance?.error?.reason ? balance?.error?.reason : balance?.error,
      };
    }

    const Balance = balance * Math.pow(10, 18);

    //  console.log(Amount, balance, Balance);
    if (Number(Amount) > Balance) {
      return { error: "Low Balance" };
    }

    const contract = new ethers.Contract(address, abi, signer);
    //  console.log({ wallet });

    const allowance = await contract.increaseAllowance(BSC.address, Amount);
    //  console.log({ TX1: allowance });

    if (type === "USDC") {
      const depositResult = await depositContract.buyTokensWithUSDC(Amount);
      //  console.log({ TX2: depositResult });
      // dispatch(setDepositHash(depositResult))

      localStorage.setItem("tempHash", JSON.stringify(depositResult.hash));

      return depositResult.hash;
    } else {
      const depositResult = await depositContract.buyTokensWithUSDT(Amount);
      //  console.log({ TX2: depositResult });
      // dispatch(setDepositHash(depositResult))

      localStorage.setItem("tempHash", JSON.stringify(depositResult.hash));

      return depositResult.hash;
    }
    //  console.log({ type, wallet, address, walletBalance: balance });
  } catch (error) {
    //  console.log(error);
    if (error?.reason) {
      toast.error(error?.reason);
    }
    return { error: error?.reason ? error?.reason : error };
  }
};
