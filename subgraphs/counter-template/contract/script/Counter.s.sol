// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {Counter} from "../src/Counter.sol";
import {CounterFactory} from "../src/CounterFactory.sol";

contract CounterScript is Script {
    Counter public counter;
    CounterFactory public counterFactory;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        counterFactory = new CounterFactory();
        counter = new Counter(0);

        vm.stopBroadcast();
    }
}