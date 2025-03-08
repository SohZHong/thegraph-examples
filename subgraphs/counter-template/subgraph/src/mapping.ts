import {
  CounterIncremented as CounterIncrementedEvent,
  NumberSet as NumberSetEvent,
} from "../generated/Counter/Counter";
import {
  CounterIncremented,
  NumberSet,
  CounterCreated,
} from "../generated/schema";
import { CounterCreated as CounterCreatedEvent } from "../generated/CounterFactory/CounterFactory";
import { DataSourceTemplate } from "@graphprotocol/graph-ts";

export function handleCounterCreated(event: CounterCreatedEvent): void {
  DataSourceTemplate.create("Counter", [event.params.newCounter.toHex()]);
  let entity = new CounterCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.newCounter = event.params.newCounter;
  entity.initialNumber = event.params.initialNumber;
  entity.timestamp = event.params.timestamp;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleCounterIncremented(event: CounterIncrementedEvent): void {
  let entity = new CounterIncremented(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.currentNumber = event.params.currentNumber;
  entity.timestamp = event.params.timestamp;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleNumberSet(event: NumberSetEvent): void {
  let entity = new NumberSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.newNumber = event.params.newNumber;
  entity.timestamp = event.params.timestamp;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
