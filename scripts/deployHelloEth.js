const hre = require("hardhat");

async function main() {
    // 获取合约工厂
    const HelloEth = await hre.ethers.getContractFactory("HelloEth");
    
    // 部署合约时直接发送 ETH
    const deployTx = {
        value: hre.ethers.parseUnits("1", "kwei")
    };
    
    // 部署合约
    const helloEth = await HelloEth.deploy(deployTx);

    console.log("Contract deployed to:", helloEth.target);
}

// 处理错误
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
