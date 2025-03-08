import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  PeerSet,
  PreCrimeSet,
  RateLimiterSet,
  RateLimitsChanged,
  Transfer
} from "../generated/ENAOFT/ENAOFT"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createPeerSetEvent(eid: BigInt, peer: Bytes): PeerSet {
  let peerSetEvent = changetype<PeerSet>(newMockEvent())

  peerSetEvent.parameters = new Array()

  peerSetEvent.parameters.push(
    new ethereum.EventParam("eid", ethereum.Value.fromUnsignedBigInt(eid))
  )
  peerSetEvent.parameters.push(
    new ethereum.EventParam("peer", ethereum.Value.fromFixedBytes(peer))
  )

  return peerSetEvent
}

export function createPreCrimeSetEvent(preCrimeAddress: Address): PreCrimeSet {
  let preCrimeSetEvent = changetype<PreCrimeSet>(newMockEvent())

  preCrimeSetEvent.parameters = new Array()

  preCrimeSetEvent.parameters.push(
    new ethereum.EventParam(
      "preCrimeAddress",
      ethereum.Value.fromAddress(preCrimeAddress)
    )
  )

  return preCrimeSetEvent
}

export function createRateLimiterSetEvent(
  rateLimiter: Address
): RateLimiterSet {
  let rateLimiterSetEvent = changetype<RateLimiterSet>(newMockEvent())

  rateLimiterSetEvent.parameters = new Array()

  rateLimiterSetEvent.parameters.push(
    new ethereum.EventParam(
      "rateLimiter",
      ethereum.Value.fromAddress(rateLimiter)
    )
  )

  return rateLimiterSetEvent
}

export function createRateLimitsChangedEvent(
  rateLimitConfigs: Array<ethereum.Tuple>
): RateLimitsChanged {
  let rateLimitsChangedEvent = changetype<RateLimitsChanged>(newMockEvent())

  rateLimitsChangedEvent.parameters = new Array()

  rateLimitsChangedEvent.parameters.push(
    new ethereum.EventParam(
      "rateLimitConfigs",
      ethereum.Value.fromTupleArray(rateLimitConfigs)
    )
  )

  return rateLimitsChangedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
