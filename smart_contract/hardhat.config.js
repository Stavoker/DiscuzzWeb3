require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/px-UyATCJhygxH-zBfy_HDz2tA5oSXde',
      accounts: ['0xce10ea11757e1179c18d3ccf694cc42d11cd56cd2f5e5a13277d1e4d6dd8b404'],
    },
  },
};