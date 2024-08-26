import {
  coinbaseProvider,
  connectWalletProvider,
  getTrustWalletInjectedProvider,
} from ".";

export const getProvider = () => {
  const type = localStorage.getItem("provider");

  switch (type) {
    case "Coinbase":
      return coinbaseProvider();
    case "Metamask":
      return window.ethereum;
    case "Wallet Connect":
      return connectWalletProvider();
    case "Trust":
      return getTrustWalletInjectedProvider();
    default:
      break;
  }
};

const addNetwork = async (obj) => {
  try {
    if (window?.ethereum !== undefined) {
      const provider = await getProvider();
      let network = { ...obj };

      await provider.request({
        method: "wallet_addEthereumChain",
        params: [network],
      });

      //    handleNetworkChanges(obj);
    }
  } catch (error) {
    console.log(error);
  }
};

const switchNetwork = async (obj) => {
  try {
    const provider = await getProvider();
    console.log(provider);
    const response = await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: obj.chainId }],
    });
    console.log(response);
    // handleNetworkChanges(obj);
  } catch (error) {
    if (error.code === 4902) {
      addNetwork(obj);
    }
    console.log(error);
  }
};

const checkNetwork = async (obj) => {
  try {
    if (typeof window.ethereum !== "undefined") {
      const provider = await getProvider();
      let chainId = await provider.chainId;

      if (chainId === obj.chainId) {
        return true;
      }
      console.log("same network");
      switchNetwork(obj);
    }
  } catch (error) {
    console.log(error);
  }
};

export const networkSwitchFn = (obj) => {
  return checkNetwork(obj);
};
