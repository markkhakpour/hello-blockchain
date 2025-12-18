import "@nomicfoundation/hardhat-toolbox";
import "@tenderly/hardhat-tenderly";
import dotenv from "dotenv";

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
export default {
  solidity: "0.8.19",
  networks: {
    // Your Tenderly Virtual Testnet (MarkChain)
    markchain: {
      url: process.env.TENDERLY_VIRTUAL_TESTNET_RPC || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 73571, // Your MarkChain chain ID from Tenderly dashboard
    },
  },
  tenderly: {
    // Find these at: Tenderly Dashboard URL
    project: process.env.TENDERLY_PROJECT || "project",
    username: process.env.TENDERLY_USERNAME || "your-username",
  },
};
