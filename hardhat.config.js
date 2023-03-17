require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const MUMBAI_URL = process.env.MUMBAI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url:"https://polygon-mumbai.g.alchemy.com/v2/jO3ojtBXoJ6wZNQz9CYtWAzlWWPjVU6x",
      accounts: ["26b018a00f21af534c59b733b4788c2f6ab17fa771d30ef3302e2933b1362016"],
    },
  },
};
