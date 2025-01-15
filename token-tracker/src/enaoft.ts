import {
  Approval as ApprovalEvent,
  PeerSet as PeerSetEvent,
  PreCrimeSet as PreCrimeSetEvent,
  RateLimiterSet as RateLimiterSetEvent,
  RateLimitsChanged as RateLimitsChangedEvent,
  Transfer as TransferEvent
} from "../generated/ENAOFT/ENAOFT"
import {
  Approval,
  PeerSet,
  PreCrimeSet,
  RateLimiterSet,
  RateLimitsChanged,
  Transfer
} from "../generated/schema"
import { Bytes } from "@graphprotocol/graph-ts"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePeerSet(event: PeerSetEvent): void {
  let entity = new PeerSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eid = event.params.eid
  entity.peer = event.params.peer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePreCrimeSet(event: PreCrimeSetEvent): void {
  let entity = new PreCrimeSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.preCrimeAddress = event.params.preCrimeAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRateLimiterSet(event: RateLimiterSetEvent): void {
  let entity = new RateLimiterSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.rateLimiter = event.params.rateLimiter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRateLimitsChanged(event: RateLimitsChangedEvent): void {
  let entity = new RateLimitsChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.rateLimitConfigs = changetype<Bytes[]>(event.params.rateLimitConfigs)

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
