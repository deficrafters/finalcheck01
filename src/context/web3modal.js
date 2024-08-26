"use client";

// import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const hexValue = (value) => "0x" + BigInt(value).toString(16);

export const chains = [
  {
    chainId: 11155111,
    name: "Sepolia test network",
    currency: "SepoliaETH",
    nativeCurrency: {
      symbol: "SepoliaETH",
      decimals: 18,
    },
    blockExplorerUrls: ["https://sepolia.etherscan.io"],
    rpcUrls: ["https://sepolia.drpc.org"],
  },
  {
    chainId: 1,
    name: "ERC Mainnet",
    currency: "ETH",
    blockExplorerUrls: ["https://etherscan.io"],
    rpcUrls: ["https://cloudflare-eth.com"],
  },
  {
    chainId: 56,
    name: "Binance Mainnet",
    currency: "BNB",
    blockExplorerUrls: ["https://bscscan.com"],
    rpcUrls: ["https://bsc-dataseed.binance.org"],
  },
  {
    chainId: 97,
    name: "BNB Smart Chain Testnet",
    currency: "BNB",
    nativeCurrency: {
      symbol: "BNB",
      decimals: 18,
    },
    blockExplorerUrls: ["https://testnet.bscscan.com"],
    rpcUrls: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"],
  },
];
export function Web3Modal({ children }) {
  // 1. Get projectId at https://cloud.walletconnect.com
  const projectId = "3bc9b13ede2c46a106c03bfadb9129e8";

  // 2. Set chains
  const mainnet = {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
  };

  // 3. Create a metadata object
  const metadata = {
    name: "My Website",
    description: "My Website description",
    url: "https://dream-games.vercel.app/", // origin must match your domain & subdomain
    icons: ["https://dream-games.vercel.app/"],
  };
  // 4. Create Ethers config
  // const ethersConfig = defaultConfig({
  //   /*Required*/
  //   metadata,

  //   /*Optional*/
  //   enableEIP6963: true, // true by default
  //   enableInjected: true, // true by default
  //   enableCoinbase: true, // true by default
  //   rpcUrl: "...", // used for the Coinbase SDK
  //   defaultChainId: 1, // used for the Coinbase SDK
  // });
  // 3. Create modal
  // const metadata = {
  //   name: "My Website",
  //   description: "My Website description",
  //   url: "https://mywebsite.com", // origin must match your domain & subdomain
  //   icons: ["https://avatars.mywebsite.com/"],
  // };
  // 5. Create a Web3Modal instance
  const rpcUrl =
    "https://eth-mainnet.g.alchemy.com/v2/_GAdPv_tSlFNWlgLrdWo7eXUxQ-fokNx";
  // createWeb3Modal({
  //   ethersConfig: defaultConfig({
  //     metadata,
  //     enableCoinbase: true,
  //     rpcUrl,
  //     defaultChainId: 1,
  //   }),
  //   allowUnsupportedChain: true,
  //   chains,
  //   allWallets: "SHOW",
  //   projectId,
  //   enableAnalytics: true, // Optional - defaults to your Cloud configuration
  // });
  // console.log(projectId);
  return children;
}

// 'use client'

// import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// // 1. Get projectId at https://cloud.walletconnect.com
// const projectId = '3bc9b13ede2c46a106c03bfadb9129e8'

// // 2. Set chains
// const mainnet = {
//   chainId: 1,
//   name: 'Ethereum',
//   currency: 'ETH',
//   explorerUrl: 'https://etherscan.io',
//   rpcUrl: 'https://cloudflare-eth.com'
// }

// // 3. Create a metadata object
// const metadata = {
//   name: 'My Website',
//   description: 'My Website description',
//   url: 'https://dreamgamez.io/', // origin must match your domain & subdomain
//   icons: ['https://dreamgamez.io/']
// }
// // 4. Create Ethers config
// const ethersConfig = defaultConfig({
//   /*Required*/
//   metadata,

//   /*Optional*/
//   enableEIP6963: true, // true by default
//   enableInjected: true, // true by default
//   enableCoinbase: true, // true by default
//   rpcUrl: '...', // used for the Coinbase SDK
//   defaultChainId: 1, // used for the Coinbase SDK
// })

// // 5. Create a Web3Modal instance
// createWeb3Modal({
//   ethersConfig,
//   chains: [mainnet],
//   projectId,
//   enableAnalytics: true, // Optional - defaults to your Cloud configuration
//   enableOnramp: true // Optional - false as default
// })

// export function Web3Modal({ children }) {
//   return children
// }
