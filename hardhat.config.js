require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
const RPC_URL = process.env.RPC_URL;

module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      forking: {
        url: RPC_URL,
      },
    },
  },
};
