import { ethers } from "ethers";
import USDC from "../../utils/abi/Usdc.json";
import USDT from "../../utils/abi/Usdt.json";
import BSC from "../../utils/abi/Bsc.json";
import Eth from "../../utils/abi/Eth.json";
import toast from "react-hot-toast";
import { fromGwei, toUnits } from "thirdweb/utils";

import ETH_USDC from "../../utils/abi/Ethereum/Usdc.json";
import ETH_USDT from "../../utils/abi/Ethereum/Usdt.json";
import {
  getContract,
  readContract,
  prepareContractCall,
  sendAndConfirmTransaction,
} from "thirdweb";
import { sepolia, bscTestnet, ethereum, bsc } from "thirdweb/chains";
import {
  useActiveAccount,
  useActiveWallet,
  useReadContract,
} from "thirdweb/react";
import { ThirdWebClient, wallets } from "@/context/ThirdWeb";
import { getWalletBalance } from "thirdweb/wallets";
import { logtail } from "@/utils/functions";
// import ETH_BSC from "../../utils/abi/Ethereum/Bsc.json";

export const getBalance = async ({ address, abi, wallet, chain }) => {
  if (address && abi && wallet) {
    try {
      const contract = getContract({
        client: ThirdWebClient,
        address,
        chain: getChainInfo(),
        abi,
      });
      logtail.log(address, wallet);
      const data = await readContract({
        contract,
        method: "balanceOf",
        params: [wallet],
      });
      logtail.log(`Balance ${address} - ${Number(data) / Math.pow(10, 18)}`);
      return Number(data) / Math.pow(10, 18);
    } catch (error) {
      toast.error(JSON.stringify(error));
      logtail.error(error);

      console.log(error);
      return "";
    }
  }
  toast.error("Address or Abi is missing");
  console.log("Address or Abi is missing");
};

export const useDeposit = () => {
  const account = useActiveAccount();
  const wallet = useActiveWallet();
  const deposit = async ({
    abi,
    address,
    wallet,
    input,
    type,
    chain,
    account,
  }) => {
    try {
      console.log({ abi, address, wallet, input, type, chain });
      logtail.log({ input, type, chain, account });

      const depositContractInfo = getDepositInfo();

      let depositContract = getContract({
        ...depositContractInfo,
        chain: getChainInfo(),
        client: ThirdWebClient,
      });

      if (type === "BNB" || type === "ETH") {
        const value = ethers.parseUnits(input, 18);
        console.log("third fn called", account, { address });
        // const depositResult = await depositContract.buyTokensWithETH({
        //   value,
        // });

        const transaction = prepareContractCall({
          contract: depositContract,
          method: "buyTokensWithETH",
          value,
        });

        console.log(transaction, value);

        const depositResult = await sendAndConfirmTransaction({
          account,
          transaction,
        });
        console.log(depositResult);

        localStorage.setItem(
          "tempHash",
          JSON.stringify(depositResult?.transactionHash)
        );
        return;
      }
      // const Amount = ethers.parseUnits(input, 18);
      const Amount = toUnits(input, 18);

      const balance = await getBalance({ abi, address, wallet, chain });

      if (balance?.error) {
        logtail.error(balance);
        return {
          error: balance?.error?.reason
            ? balance?.error?.reason
            : balance?.error,
        };
      }

      const Balance = balance * Math.pow(10, 18);
      console.log({ Balance });

      if (Number(Amount) > Balance) {
        return { error: "Low Balance" };
      }

      const contract = getContract({
        address,
        chain: getChainInfo(),
        client: ThirdWebClient,
        abi,
      });

      const approve = prepareContractCall({
        contract,
        method: "approve",
        params: [depositContractInfo.address, Amount],
        // maxFeePerGas: fromGwei("10"),
      });

      const approveResponse = await sendAndConfirmTransaction({
        account,
        transaction: approve,
      });

      console.log({ approveResponse });

      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            let buyToken;

            if (type === "USDC") {
              console.log("Depositing USDC");
              buyToken = prepareContractCall({
                contract: depositContract,
                method: "buyTokensWithUSDC",
                params: [Amount],
              });
            } else {
              console.log("Depositing USDT");
              buyToken = prepareContractCall({
                contract: depositContract,
                method: "buyTokensWithUSDT",
                params: [Amount],
              });
            }

            const depositResult = await sendAndConfirmTransaction({
              account,
              transaction: buyToken,
            });
            console.log({ depositResult });

            localStorage.setItem(
              "tempHash",
              JSON.stringify(depositResult?.transactionHash)
            );

            resolve(depositResult);
          } catch (error) {
            console.log(error);
            logtail.error(error);
            reject({
              error: error?.reason
                ? error?.reason
                : error?.message
                ? error?.message
                : "Transaction Failed",
            });
            // return {
            //   error: error?.reason
            //     ? error?.reason
            //     : error?.message
            //     ? error?.message
            //     : "Transaction Failed",
            // };
          }
        }, 10000);
      });
    } catch (error) {
      console.log(error);
      logtail.error(error);
      return {
        error: error?.reason
          ? error?.reason
          : error?.message
          ? error?.message
          : "Transaction Failed",
      };
    }
  };

  const DepositFn = async ({ type, chain, ...obj }) => {
    const contractDetails = getContractInfo({ type });
    return deposit({
      type,
      ...contractDetails,
      chain,
      ...obj,
      account,
    });
  };

  return {
    DepositFn,
  };
};

export const ETHDepositFn = async ({ type, ...obj }) => {
  switch (type) {
    case "USDC": {
      return deposit({
        type,
        abi: ETH_USDC.abi,
        address: ETH_USDC.address,
        ...obj,
      });
    }
    case "USDT": {
      return deposit({
        type,
        abi: ETH_USDT.abi,
        address: ETH_USDT.address,
        ...obj,
      });
    }
    case "BNB": {
      return deposit({ type, ...obj });
    }

    default:
      break;
  }
};

export const balanceFn = async (type, address, chain) => {
  const contractDetails = getContractInfo({ type });
  try {
    switch (type) {
      case "BNB":
      case "ETH":
        const balance = await getWalletBalance({
          address,
          client: ThirdWebClient,
          chain: getChainInfo(),
        });
        return balance?.displayValue;
      default: {
        const balance = await getBalance({
          ...contractDetails,
          wallet: address,
          chain,
        });
        if (balance?.error) {
          return "";
        }
        return balance;
      }
    }
  } catch (error) {
    console.log(error);
    toast.error(JSON.stringify(error));
    return "";
  }
};

export const getChain = () => {
  return JSON.parse(localStorage.getItem("chain"));
};

const getContractInfo = ({ type }) => {
  const chain = getChain();
  const testnet = [sepolia.id, bscTestnet.id];
  const mainnet = [ethereum.id, bsc.id];

  if (testnet.includes(chain)) {
    if (chain === 97) {
      return contracts.testnet.bsc?.[type?.toLowerCase()];
    }
    return contracts.testnet.ethereum?.[type?.toLowerCase()];
  } else if (mainnet.includes(chain)) {
    if (chain === 56) {
      return contracts.mainnet.bsc?.[type?.toLowerCase()];
    }
    return contracts.mainnet.ethereum?.[type?.toLowerCase()];
  }
};

const getDepositInfo = () => {
  const chain = getChain();

  const testnet = [sepolia.id, bscTestnet.id];
  const mainnet = [ethereum.id, bsc.id];

  if (testnet.includes(chain)) {
    if (chain === 97) {
      return contracts.testnet.bsc?.bnb;
    }
    return contracts.testnet.ethereum.eth;
  } else if (mainnet.includes(chain)) {
    if (chain === 56) {
      return contracts.mainnet.bsc?.bnb;
    }
    return contracts.mainnet.ethereum?.eth;
  }
};

const getChainInfo = () => {
  const chain = getChain();

  const testnet = [sepolia.id, bscTestnet.id];
  const mainnet = [ethereum.id, bsc.id];

  const index = testnet.findIndex((chainId) => chainId === chain);
  if (index >= 0) {
    return index === 0 ? sepolia : bscTestnet;
  } else {
    const index = mainnet.findIndex((chainId) => chainId === chain);
    if (index >= 0) {
      return index === 0 ? ethereum : bsc;
    }
  }
};

const contracts = {
  testnet: {
    ethereum: {
      usdt: {
        address: "0x3711de90b7654a49f08d413d6335d8a467d5ac8e",
        abi: ETH_USDT.abi,
      },
      usdc: {
        address: "0x3f160e962f823dfde3903e879f21a7a4395e5842",
        abi: ETH_USDC.abi,
      },
      eth: {
        address: "0xfF2dd86aF452d41E7C44066f582aA7D6513400bf",
        abi: Eth.abi,
      },
    },
    bsc: {
      usdt: {
        address: "0x85a831c194de0c244613ab5cf9e5fe83f7596e7d",
        abi: USDT.abi,
      },
      usdc: {
        address: "0xfa671e651c9306edb5beb02a8e7d20825b2750ff",
        abi: USDC.abi,
      },
      bnb: {
        address: "0xeeaab31ebfe89c030dda60396890f0d004dd5cd0",
        abi: BSC.abi,
      },
    },
  },
  mainnet: {
    ethereum: {
      usdt: {
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        abi: ETH_USDT.abi,
      },
      usdc: {
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        abi: ETH_USDC.abi,
      },
      eth: {
        address: "0xb2c8e807bb84f3e2fedbf81099e77f46ee1f29fa",
        abi: Eth.abi,
      },
    },
    bsc: {
      usdt: {
        address: "0x55d398326f99059fF775485246999027B3197955",
        abi: USDT.abi,
      },
      usdc: {
        address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        abi: USDC.abi,
      },
      bnb: {
        address: "0xb2c8e807bb84f3e2fedbf81099e77f46ee1f29fa",
        abi: BSC.abi,
      },
    },
  },
};
