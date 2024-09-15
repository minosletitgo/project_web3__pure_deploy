# Sample Hardhat Project


目标：
从零开始，如何使用vscode+hardhat 搭建一个前端项目：单纯可以进行部署合约！

提前安装完成的部件：
VSCode、NodeJS

以下是完整步骤：

---创建项目目录
手动在目标盘符中，建立项目文件夹：my-dapp

---初始化 Node.js 项目
打开VsCode，进入到 my-dapp
npm init -y

---安装 Hardhat及其依赖项
npm install --save-dev hardhat

---初始化 Hardhat 项目
npx hardhat
选择“创建一个空的hardhat.config.js”或者 “创建JavaScript项目”

---可能会弹出，Do you want to install this sample project's dependencies with npm (@nomicfoundation/hardhat-toolbox)?
选择yes

---安装 ethers.js 以便与以太坊网络交互：
npm install ethers

---安装dotenv
npm install dotenv

---查看dotenv版本号
npm list dotenv

---手动建立contracts文件夹，以及Hello.sol

---手动建立scripts文件夹，以及deployHello.js

---手动在hardhat.config.js，配置连接网络

---编译sol文件
npx hardhat compile

-- 启动且使用本地hardhat开发节点(会生成20个账户)：
npx hardhat node
npx hardhat run .\scripts\deployHello.js --network localHardhat

--启动且使用第三方软件Ganache搭建开发节点(会生成若干个账户)：
npx hardhat run .\scripts\deployHello.js --network localGanache




本工程为Ethers6，很多语法不一致，甚至是支持问题，暂时废弃。
