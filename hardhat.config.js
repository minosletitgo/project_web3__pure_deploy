require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

module.exports = {
  solidity: "0.8.24",
  networks: {
    localHardhat: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
      accounts: [process.env.PRIVATE_KEY_localHardhat],
      loggingEnabled: true, // 启用日志记录
    },    
    localGanache: {
      url: "HTTP://127.0.0.1:7545",
      chainId: 1337,
      accounts: [process.env.PRIVATE_KEY_localGanache],
      loggingEnabled: true, // 启用日志记录
    },    
    testSepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/8SAuwFunrpfVphXYDobRKqmLmv6w4i7w", // 替换为你的节点提供商url
      accounts: [process.env.PRIVATE_KEY_testSepolia], // 使用你在该节点链上的账户(该账户拥有足够的支付手续费额度)私钥
    }
  }  
};
