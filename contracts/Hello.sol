// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import "hardhat/console.sol";

contract Hello {
    function print1() external pure returns(string memory) {
        return unicode"print1() = 你好，世界";
    }

    function print2() external pure returns(string memory) {
        return "print2() = ni hao a";
    }
}
