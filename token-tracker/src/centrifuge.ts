import {
  Deny as DenyEvent,
  File as FileEvent,
  Rely as RelyEvent,
} from "../generated/centrifuge/centrifuge"
import { Deny, File, Rely } from "../generated/schema"

export function handleDeny(event: DenyEvent): void {
  let entity = new Deny(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFile(event: FileEvent): void {
  let entity = new File(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.what = event.params.what
  entity.data = event.params.data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRely(event: RelyEvent): void {
  let entity = new Rely(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
