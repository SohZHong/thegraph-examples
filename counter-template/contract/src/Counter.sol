// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Counter {
    uint256 public number;

    event NumberSet(uint256 newNumber, uint256 timestamp);
    event CounterIncremented(uint256 currentNumber, uint256 timestamp);

    constructor(uint256 _initialNumber) {
        number = _initialNumber;
    }

    function setNumber(uint256 newNumber) public {
        number = newNumber;
        emit NumberSet(newNumber, block.timestamp);
    }

    function increment() public {
        number++;
        emit CounterIncremented(number, block.timestamp);
    }
}
