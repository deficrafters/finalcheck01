import CoinbaseWallet from "@coinbase/wallet-sdk";
import Web3 from "web3";
import MetaMaskOnboarding from "@metamask/onboarding";
// import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import { EthereumProvider } from "@walletconnect/ethereum-provider";
import Web3Modal from "web3modal";
import { chains } from "@/context/web3modal";

const rpcUrl =
  "https://eth-mainnet.g.alchemy.com/v2/_GAdPv_tSlFNWlgLrdWo7eXUxQ-fokNx";

const chainId = 1;

export const coinbaseProvider = () => {
  const coinbaseWallet = new CoinbaseWallet({
    appName: "DreamGames",
    appLogoUrl: "/",
    darkMode: true,
  });
  return coinbaseWallet.makeWeb3Provider(rpcUrl, chainId);
};

export async function connectMetaMask() {
  const installed = MetaMaskOnboarding.isMetaMaskInstalled();
  let onboarding = new MetaMaskOnboarding();

  if (!installed) {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.open(
        `https://metamask.app.link/dapp/${window.location
          .toString()
          .replace(/http(s?):\/\//, "")}`
      );
    } else {
      onboarding.startOnboarding();
    }

    return;
  }

  if (window.ethereum) {
    try {
      // Request account access if needed
      await window.ethereum.request({ method: "eth_requestAccounts" });
      // We use ethers.js to create a provider for Web3
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();

      // Listen for account changes

      const address = accounts[0];
      console.log("MetaMask connected", web3, web3.wallet, address);
      return address;
    } catch (error) {
      console.error("User denied account access");
    }
  } else {
    window.open("");
    console.log("MetaMask not installed");
  }
}

// windows?.ethereum?.on("accountsChanged", (accounts) => {
//   console.log("Account changed to", accounts[0]);
// });

// Function to connect to Coinbase Wallet using WalletConnect
export async function connectCoinbaseWallet() {
  const provider = coinbaseProvider();
  console.log(provider);

  if (!provider.onboarding) {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.open(
        `https://go.cb-w.com/dapp?cb_url=${window.location
          .toString()
          .replace(/http(s?):\/\//, "")}`
      );
    } else {
      provider.onboarding;
    }
  }

  try {
    let accounts = await provider.request({ method: "eth_requestAccounts" });
    console.log(accounts);
    return accounts[0];
  } catch (err) {
    console.error("Failed Retrieving Accounts", err);
  }
}

export async function getTrustWalletInjectedProvider(
  { timeout } = { timeout: 3000 }
) {
  const provider = getTrustWalletFromWindow();

  if (provider) {
    return provider;
  }

  return listenForTrustWalletInitialized({ timeout });
}

async function listenForTrustWalletInitialized(
  { timeout } = { timeout: 3000 }
) {
  return new Promise((resolve) => {
    const handleInitialization = () => {
      resolve(getTrustWalletFromWindow());
    };

    window.addEventListener("trustwallet#initialized", handleInitialization, {
      once: true,
    });

    setTimeout(() => {
      window.removeEventListener(
        "trustwallet#initialized",
        handleInitialization,
        { once: true }
      );
      resolve(null);
    }, 1000);
  });
}

export const connectTrustWallet = async () => {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const injectedProvider = await getTrustWalletInjectedProvider();

  // if (!injectedProvider) {
  // if (isMobile) {
  //   const deepLink = `https://link.trustwallet.com/open_url?url=${window.location.href}`;
  //   const applestore =
  //     "https://apps.apple.com/app/apple-store/id1288339409?mt=8";

  //   const playstore = `https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp`;
  //   // try {
  //   window.location.href = deepLink;
  // }

  //       // Fallback if the user doesn't interact within a certain time (e.g., 3 seconds)
  //       setTimeout(() => {
  //         if (/Android/i.test(navigator.userAgent)) {
  //           window.open(playstore, "_blank");
  //         } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  //           window.open(applestore, "_blank");
  //         }
  //       }, 2000); // 3-second delay for fallback
  //     } catch (e) {
  //       console.error("Error opening Trust Wallet via deep link:", e);

  //       // Directly open the app store if deep link throws an error
  //       if (/Android/i.test(navigator.userAgent)) {
  //         window.open(playstore, "_blank");
  //       } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  //         window.open(applestore, "_blank");
  //       }
  //     }
  //   } else {
  //     window.open(
  //       "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph",
  //       "_blank"
  //     );
  //     return;
  //   }
  // }

  //   if (isMobile) {
  //     const connector = new WalletConnect({
  //       bridge: "https://bridge.walletconnect.org", // Required
  //       qrcodeModal: QRCodeModal,
  // uri
  //       // clientMeta
  //     });
  //     if (!connector.connected) {
  //       // create new session
  //       connector.createSession();
  //     }
  //     return connector.on("connect", (error, payload) => {
  //       if (error) {
  //         throw error;
  //       }

  //       // Get provided accounts and chainId
  //       const { accounts, chainId } = payload.params[0];
  //       return accounts[0];
  //     });
  //   }

  if (isMobile) {
    const provider = await EthereumProvider.init({
      projectId: "3bc9b13ede2c46a106c03bfadb9129e8",
      metadata: {
        name: "My Website",
        description: "My Website Description",
        url: window.location.href, // origin must match your domain & subdomain
        icons: ["https://avatars.githubusercontent.com/u/37784886"],
      },
      optionalChains: [1],
      showQrModal: true,
    });

    await provider.connect();
    const account = await provider.request({ method: "eth_requestAccounts" });
    // console.log(result);
    return account[0];
  }

  // if (!injectedProvider) {
  //   if (/Android/i.test(navigator.userAgent)) {
  //     window.open(
  //       `https://link.trustwallet.com/open_url?coin_id=60&url=${window.location.href}`
  //     );
  //     return;
  //   } else if (/iPhone|iPad|iPod|/i.test(navigator.userAgent)) {
  //     window.open(
  //       `https://link.trustwallet.com/open_url?coin_id=60&url=${window.location.href}`
  //     );
  //     return;
  //   }

  //   window.open(
  //     `https://link.trustwallet.com/open_url?coin_id=60&url=${window.location.href}`,
  //     "_blank"
  //   );
  //   return;
  // }

  try {
    const account = await injectedProvider.request({
      method: "eth_requestAccounts",
    });

    console.log(account);
    return account[0];
  } catch (e) {
    if (e.code === 4001) {
      console.error("User denied connection.");
    }
  }
};

function getTrustWalletFromWindow() {
  const isTrustWallet = (ethereum) => {
    const trustWallet = !!ethereum.isTrust;

    return trustWallet;
  };

  const injectedProviderExist =
    typeof window !== "undefined" && typeof window.ethereum !== "undefined";

  if (!injectedProviderExist) {
    return null;
  }

  if (isTrustWallet(window.ethereum)) {
    return window.ethereum;
  }

  if (window.ethereum?.providers) {
    return window.ethereum.providers.find(isTrustWallet) ?? null;
  }

  return window["trustwallet"] ?? null;
}

export const connectWalletProvider = async () => {
  return await EthereumProvider.init({
    projectId: "3bc9b13ede2c46a106c03bfadb9129e8",

    metadata: {
      name: "My Website",
      description: "My Website Description",
      url: window.location.href, // origin must match your domain & subdomain
      icons: ["https://avatars.githubusercontent.com/u/37784886"],
    },
    rpcMap: {
      [chains[0].chainId]: chains[0]?.rpcUrls[0],
    },
    // chains: [1],
    // optionalChains: chains.map((chain) => chain.chainId?.toString()),
    optionalChains: [chains[0].chainId],
    showQrModal: true,
  });
};

export const WalletConnect = async () => {
  const provider = await connectWalletProvider();

  await provider.connect();
  const account = await provider.request({ method: "eth_requestAccounts" });
  // console.log(result);
  return account[0];
};
