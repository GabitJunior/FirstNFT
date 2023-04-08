require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    bnbt:{
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: ["118495839a8b22b685473798039fec2c706cd07b91982496bef72657dd3d9f2d",],
      chainId: 97
    },
  },
  etherscan: {
    apiKey: "HA345B4TIAP128TW639X4QJ8XGZUYCEHYR"
  }
};