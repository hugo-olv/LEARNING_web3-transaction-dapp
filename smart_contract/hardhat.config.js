require("@nomiclabs/hardhat-waffle");

const dotenv = require("dotenv").config();
const { PRIVATE_KEY, ALCHEMY_API_URL } = process.env;

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: ALCHEMY_API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

