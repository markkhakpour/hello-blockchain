// Your deployed Greeter contract on MarkChain
export const CONTRACT_ADDRESS = "0xb3289f1857c8f0f4b7f9E523b5cf68d01CD46baa";

// Contract ABI - defines how to interact with the contract
export const CONTRACT_ABI = [
  {
    inputs: [{ internalType: "string", name: "_greeting", type: "string" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "string", name: "oldGreeting", type: "string" },
      { indexed: false, internalType: "string", name: "newGreeting", type: "string" },
    ],
    name: "GreetingChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "greet",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_newGreeting", type: "string" }],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

// MarkChain network configuration
export const MARKCHAIN_CONFIG = {
  chainId: "0x11F63", // 73571 in hex
  chainName: "MarkChain (Tenderly)",
  rpcUrls: ["https://virtual.mainnet.eu.rpc.tenderly.co/78a59e4e-06f2-40f9-8000-fd7a117f25f4"],
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
};

