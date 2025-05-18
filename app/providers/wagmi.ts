import { http } from "wagmi";
import { mainnet, sepolia, goerli, gnosis } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

export const config = getDefaultConfig({
  appName: "Valory-Test-project",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "", // Get this from WalletConnect Cloud
  chains: [mainnet, sepolia, goerli, gnosis],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [goerli.id]: http(),
    [gnosis.id]: http(),
  },
});
