import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { CounterCreated } from "../generated/schema"
import { CounterCreated as CounterCreatedEvent } from "../generated/CounterFactory/CounterFactory"
import { handleCounterCreated } from "../src/counter-factory"
import { createCounterCreatedEvent } from "./counter-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let newCounter = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let initialNumber = BigInt.fromI32(234)
    let timestamp = BigInt.fromI32(234)
    let newCounterCreatedEvent = createCounterCreatedEvent(
      newCounter,
      initialNumber,
      timestamp
    )
    handleCounterCreated(newCounterCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CounterCreated created and stored", () => {
    assert.entityCount("CounterCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CounterCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newCounter",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CounterCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "initialNumber",
      "234"
    )
    assert.fieldEquals(
      "CounterCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
