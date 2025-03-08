import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { CounterIncremented, NumberSet } from "../generated/Counter/Counter"

export function createCounterIncrementedEvent(
  currentNumber: BigInt,
  timestamp: BigInt
): CounterIncremented {
  let counterIncrementedEvent = changetype<CounterIncremented>(newMockEvent())

  counterIncrementedEvent.parameters = new Array()

  counterIncrementedEvent.parameters.push(
    new ethereum.EventParam(
      "currentNumber",
      ethereum.Value.fromUnsignedBigInt(currentNumber)
    )
  )
  counterIncrementedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return counterIncrementedEvent
}

export function createNumberSetEvent(
  newNumber: BigInt,
  timestamp: BigInt
): NumberSet {
  let numberSetEvent = changetype<NumberSet>(newMockEvent())

  numberSetEvent.parameters = new Array()

  numberSetEvent.parameters.push(
    new ethereum.EventParam(
      "newNumber",
      ethereum.Value.fromUnsignedBigInt(newNumber)
    )
  )
  numberSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return numberSetEvent
}
