import React, { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
// import { useDisconnect, useWeb3Modal, } from '@web3modal/ethers/react'
// import { useWalletInfo } from '@web3modal/ethers/react'
// import { useWeb3ModalAccount } from '@web3modal/ethers/react'
import axios from "axios";
import toast from "react-hot-toast";

const ExternalAddress = ({ addresss, Connected, getWalletDtaa }) => {
  //   const { open } = useWeb3Modal();

  const [isLoadingMetamask, setisLoadingMetamask] = useState(false);

  //   const { address, chainId, isConnected } = useWeb3ModalAccount();
  const address = "";

  const connectWallet = async () => {
    setisLoadingMetamask(true);

    let getDtaa = localStorage.getItem("jwt");

    let parseIt = JSON.parse(getDtaa);

    try {
      if (address) {
        console.log({ address });

        axios
          .post("/api/updateWalletAddress", {
            address,
            ids: parseIt.data._id,
          })
          .then((acc) => {
            console.log(acc.data);

            if (acc.data.status) {
              setisLoadingMetamask(false);

              getWalletDtaa();
            } else {
              setisLoadingMetamask(false);

              toast.error(acc.data.message);
            }
          })
          .catch((err) => {
            console.log(err);
            setisLoadingMetamask(false);
          });
      } else {
        await open();

        setTimeout(() => {
          if (address) {
            console.log({ address });

            axios
              .post("/api/updateWalletAddress", {
                address,
                ids: parseIt.data._id,
              })
              .then((acc) => {
                console.log(acc.data);
                // setisLoadingMetamask(false)
                // console.log(acc.data)
                // getWalletDtaa()
                if (acc.data.status) {
                  setisLoadingMetamask(false);

                  //  console.log(acc.data)
                  getWalletDtaa();
                } else {
                  toast.error(acc.data.message);
                }
              })
              .catch((err) => {
                setisLoadingMetamask(false);
                console.log(err);
              });
          }
        }, 1000);
      }
    } catch (error) {
      setisLoadingMetamask(false);
      //  console.log(error)
    }
  };

  return (
    <p
      onClick={() => (Connected ? {} : connectWallet())}
      style={{ cursor: !Connected ? "pointer" : "none" }}
      className='flex items-center h-full gap-2 text-sm text-gray-500'
    >
      <BiLinkExternal fontSize={18} />

      {isLoadingMetamask
        ? "Confirm Wallet"
        : !Connected
        ? addresss
        : addresss.slice(0, 8) + "..." + addresss.slice(-8)}
    </p>
  );
};

export default ExternalAddress;
