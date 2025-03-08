import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { CounterCreated } from "../generated/CounterFactory/CounterFactory"

export function createCounterCreatedEvent(
  newCounter: Address,
  initialNumber: BigInt,
  timestamp: BigInt
): CounterCreated {
  let counterCreatedEvent = changetype<CounterCreated>(newMockEvent())

  counterCreatedEvent.parameters = new Array()

  counterCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "newCounter",
      ethereum.Value.fromAddress(newCounter)
    )
  )
  counterCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "initialNumber",
      ethereum.Value.fromUnsignedBigInt(initialNumber)
    )
  )
  counterCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return counterCreatedEvent
}
