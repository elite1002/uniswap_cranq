import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xbF2217be1A48c037508d85c2B1A3A44527f2d4ba";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/Us3ClIKF-Kya24C0KxFikll9oIgLgwBS",
  },
};
