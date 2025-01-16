import { CounterCreated as CounterCreatedEvent } from "../generated/CounterFactory/CounterFactory"
import { CounterCreated } from "../generated/schema"

export function handleCounterCreated(event: CounterCreatedEvent): void {
  let entity = new CounterCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newCounter = event.params.newCounter
  entity.initialNumber = event.params.initialNumber
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
