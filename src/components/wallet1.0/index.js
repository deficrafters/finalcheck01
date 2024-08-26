"use client";

import { useEffect, useState } from "react";
import { balanceFn } from "./deposit";
// import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useSelector } from "react-redux";
import { useActiveWalletChain } from "thirdweb/react";
import { LoadingOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";

const WalletItem = ({
  amount,
  canImport,
  name,
  icon,
  btnGroup,
  type,
  rate: price,
  // chain,
  isSec,
  refetch,
}) => {
  const obj = localStorage.getItem("jwt");
  const chain = useActiveWalletChain();
  const [loading, setLoading] = useState(false);

  const address = JSON.parse(obj)?.data?.WalletAddress;
  const [rate, setRate] = useState("");
  const walletPopup = useSelector((state) => state.popup.walletPopup);

  const getBalance = async () => {
    setLoading(true);
    console.log({ name, address, chain: chain?.id });
    const balance = await balanceFn(name, address, chain);
    setRate(balance);
    setLoading(false);
    // toast.success(`${name},${balance}`);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     (async () => {
  //       address && chain && type && getBalance();
  //     })();
  //   }, 2000);
  // }, [name, chain, type, address]);
  useEffect(() => {
    (async () => {
      !loading && getBalance();
    })();
  }, [chain, type, address, refetch]);

  return (
    <div className='flex justify-between flex-col gap-2 lg:flex-row w-full bg-[#1d1f58] p-3 mb-4 rounded-lg'>
      <div className='flex items-center justify-between gap-2'>
        <div className='flex items-center gap-2'>
          <p>{name == "BNB" ? (isSec ? "BNB" : "ETH") : name}</p>
          <p className='text-base text-gray-500'>
            {loading ? <LoadingOutlined /> : `$${rate}`}
          </p>
        </div>
      </div>

      <div className='flex items-center justify-around gap-3'>
        <div className='flex items-center justify-between w-full lg:w-auto md:gap-2'>
          {btnGroup}
        </div>
      </div>
    </div>
  );
};

export default WalletItem;
