"use client";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { ethers } from "ethers";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { bscTestnet, sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

export default function Modal({ children }) {
  const chainsArr = [bscTestnet, sepolia];
  const projectId = "fb76891209def7759b4e2f615da390a2";
  const { publicClient, webSocketPublicClient } = configureChains(chainsArr, [
    w3mProvider({ projectId }),
    publicProvider(),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: false,
    connectors: w3mConnectors({
      projectId,
      chainsArr,
    }),
    publicClient,
    webSocketPublicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chainsArr);
  return (
    <WagmiConfig config={wagmiConfig}>
      {children}
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        defaultChain={bscTestnet}
      />
    </WagmiConfig>
  );
}

export const Provider = (NETWORK) => {
  const ALCHEMY_API_KEY = "_GAdPv_tSlFNWlgLrdWo7eXUxQ-fokNx";
  return new ethers.AlchemyProvider(NETWORK, ALCHEMY_API_KEY);
};
