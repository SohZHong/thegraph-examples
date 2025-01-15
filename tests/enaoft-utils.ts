import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  EnforcedOptionSet,
  MsgInspectorSet,
  OFTReceived,
  OFTSent,
  OwnershipTransferStarted,
  OwnershipTransferred,
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

export function createEnforcedOptionSetEvent(
  _enforcedOptions: Array<ethereum.Tuple>
): EnforcedOptionSet {
  let enforcedOptionSetEvent = changetype<EnforcedOptionSet>(newMockEvent())

  enforcedOptionSetEvent.parameters = new Array()

  enforcedOptionSetEvent.parameters.push(
    new ethereum.EventParam(
      "_enforcedOptions",
      ethereum.Value.fromTupleArray(_enforcedOptions)
    )
  )

  return enforcedOptionSetEvent
}

export function createMsgInspectorSetEvent(
  inspector: Address
): MsgInspectorSet {
  let msgInspectorSetEvent = changetype<MsgInspectorSet>(newMockEvent())

  msgInspectorSetEvent.parameters = new Array()

  msgInspectorSetEvent.parameters.push(
    new ethereum.EventParam("inspector", ethereum.Value.fromAddress(inspector))
  )

  return msgInspectorSetEvent
}

export function createOFTReceivedEvent(
  guid: Bytes,
  srcEid: BigInt,
  toAddress: Address,
  amountReceivedLD: BigInt
): OFTReceived {
  let oftReceivedEvent = changetype<OFTReceived>(newMockEvent())

  oftReceivedEvent.parameters = new Array()

  oftReceivedEvent.parameters.push(
    new ethereum.EventParam("guid", ethereum.Value.fromFixedBytes(guid))
  )
  oftReceivedEvent.parameters.push(
    new ethereum.EventParam("srcEid", ethereum.Value.fromUnsignedBigInt(srcEid))
  )
  oftReceivedEvent.parameters.push(
    new ethereum.EventParam("toAddress", ethereum.Value.fromAddress(toAddress))
  )
  oftReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "amountReceivedLD",
      ethereum.Value.fromUnsignedBigInt(amountReceivedLD)
    )
  )

  return oftReceivedEvent
}

export function createOFTSentEvent(
  guid: Bytes,
  dstEid: BigInt,
  fromAddress: Address,
  amountSentLD: BigInt,
  amountReceivedLD: BigInt
): OFTSent {
  let oftSentEvent = changetype<OFTSent>(newMockEvent())

  oftSentEvent.parameters = new Array()

  oftSentEvent.parameters.push(
    new ethereum.EventParam("guid", ethereum.Value.fromFixedBytes(guid))
  )
  oftSentEvent.parameters.push(
    new ethereum.EventParam("dstEid", ethereum.Value.fromUnsignedBigInt(dstEid))
  )
  oftSentEvent.parameters.push(
    new ethereum.EventParam(
      "fromAddress",
      ethereum.Value.fromAddress(fromAddress)
    )
  )
  oftSentEvent.parameters.push(
    new ethereum.EventParam(
      "amountSentLD",
      ethereum.Value.fromUnsignedBigInt(amountSentLD)
    )
  )
  oftSentEvent.parameters.push(
    new ethereum.EventParam(
      "amountReceivedLD",
      ethereum.Value.fromUnsignedBigInt(amountReceivedLD)
    )
  )

  return oftSentEvent
}

export function createOwnershipTransferStartedEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferStarted {
  let ownershipTransferStartedEvent =
    changetype<OwnershipTransferStarted>(newMockEvent())

  ownershipTransferStartedEvent.parameters = new Array()

  ownershipTransferStartedEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferStartedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferStartedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
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
