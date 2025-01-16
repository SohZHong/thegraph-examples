import {
  ApprovalForAll as ApprovalForAllEvent,
  NewOwner as NewOwnerEvent,
  NewResolver as NewResolverEvent,
  NewTTL as NewTTLEvent,
  Transfer as TransferEvent
} from "../generated/ENSRegistryWithFallback/ENSRegistryWithFallback"
import {
  ApprovalForAll,
  NewOwner,
  NewResolver,
  NewTTL,
  Transfer
} from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewOwner(event: NewOwnerEvent): void {
  let entity = new NewOwner(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.node = event.params.node
  entity.label = event.params.label
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewResolver(event: NewResolverEvent): void {
  let entity = new NewResolver(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.node = event.params.node
  entity.resolver = event.params.resolver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewTTL(event: NewTTLEvent): void {
  let entity = new NewTTL(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.node = event.params.node
  entity.ttl = event.params.ttl

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.node = event.params.node
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
