require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hyperspace: {
      url: "https://rpc.ankr.com/filecoin_testnet",
      accounts: [process.env.DEV_PRIVATE_KEY],
    },
  },
};
