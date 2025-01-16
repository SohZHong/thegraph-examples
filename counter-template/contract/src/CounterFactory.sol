// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./Counter.sol";

contract CounterFactory {
    event CounterCreated(
        address newCounter,
        uint256 initialNumber,
        uint256 timestamp
    );

    // Create a new 'Counter' contract
    function createCounter(uint256 _initialNumber) external {
        Counter counter = new Counter(_initialNumber);
        emit CounterCreated(address(counter), _initialNumber, block.timestamp);
    }
}
