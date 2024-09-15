const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // 常规部署，如果连接外网，可能不稳定
    // const Hello = await ethers.getContractFactory("Hello");
    // const hello = await Hello.deploy();

    // 简约部署，相对稳定
    const deploy1 = await ethers.deployContract("Deploy1",  { contractPath: "./contracts/TestCreate2.sol" });
    await deploy1.waitForDeployment();

    // 监听 ContractDeployed 事件(Ganache中无法显示Event，还未找到原因，可能是Ether6)
    deploy1.on("ContractDeployed", (funcName, addr) => {
        console.log(`ContractDeployed event detected!`);
        console.log(`Function Name: ${funcName}`);
        console.log(`New Contract Address: ${addr}`);
    });    
    
    console.log("Begin...");
    const addrByDeploy = await deploy1.deployHello1_Create();
    console.log("addrByDeploy : ", addrByDeploy);    
    const addrByCalc = await deploy1.calculateHello1Addr();    
    console.log("addrByCalc : ", addrByCalc);
    console.log("End...");

    console.log("deploy1 deployed to (address):", deploy1.address);
    console.log("deploy1 deployed to (target):", deploy1.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
