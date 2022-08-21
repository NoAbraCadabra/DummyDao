require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ALCHEMY_PROJECT_ID_RINKEBY = process.env.ALCHEMY_PROJECT_ID_RINKEBY;
module.exports = {
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_PROJECT_ID_RINKEBY}`,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    // Use this for BSC
    apiKey: {
      rinkeby: "<ETHERSCAN_API>",
    }
    // Use this for MATIC
    //apiKey: 'API_KEY'
  },
};
