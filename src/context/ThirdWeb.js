import { createThirdwebClient } from "thirdweb";
import { ThirdwebProvider } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

export default function ThirdWeb({ children }) {
  return <ThirdwebProvider>{children}</ThirdwebProvider>;
}

export const ThirdWebClient = createThirdwebClient({
  clientId: "a24339e41559bc3eaf3bdb3842ea7a43",
});

export const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("com.trustwallet.app"),
  createWallet("walletConnect"),
];
