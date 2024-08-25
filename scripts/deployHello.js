const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const Hello = await ethers.getContractFactory("Hello");
    const hello = await Hello.deploy();
    
    console.log("Begin...");
    console.log(await hello.print1());
    console.log(await hello.print2());
    console.log("End...");

    console.log("Hello deployed to (address):", hello.address);
    console.log("Hello deployed to (target):", hello.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
