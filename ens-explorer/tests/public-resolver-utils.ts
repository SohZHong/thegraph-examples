import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ABIChanged,
  AddrChanged,
  AddressChanged,
  ApprovalForAll,
  Approved,
  ContenthashChanged,
  DNSRecordChanged,
  DNSRecordDeleted,
  DNSZonehashChanged,
  InterfaceChanged,
  NameChanged,
  PubkeyChanged,
  TextChanged,
  VersionChanged
} from "../generated/PublicResolver/PublicResolver"

export function createABIChangedEvent(
  node: Bytes,
  contentType: BigInt
): ABIChanged {
  let abiChangedEvent = changetype<ABIChanged>(newMockEvent())

  abiChangedEvent.parameters = new Array()

  abiChangedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromFixedBytes(node))
  )
  abiChangedEvent.parameters.push(
    new ethereum.EventParam(
      "contentType",
      ethereum.Value.fromUnsignedBigInt(contentType)
    )
  )

  return abiChangedEvent
}

export function createAddrChangedEvent(node: Bytes, a: Address): AddrChanged {
  let addrChangedEvent = changetype<AddrChanged>(newMockEvent())

  addrChangedEvent.parameters = new Array()

  addrChangedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromFixedBytes(node))
  )
  addrChangedEvent.parameters.push(
    new ethereum.EventParam("a", ethereum.Value.fromAddress(a))
  )

  return addrChangedEvent
}

export function createAddressChangedEvent(
  node: Bytes,
  coinType: BigInt,
  newAddress: Bytes
): AddressChanged {
  let addressChangedEvent = changetype<AddressChanged>(newMockEvent())

  addressChangedEvent.parameters = new Array()

  addressChangedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromFixedBytes(node))
  )
  addressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "coinType",
      ethereum.Value.fromUnsignedBigInt(coinType)
    )
  )
  addressChangedEvent.parameters.push(
    new ethereum.EventParam("newAddress", ethereum.Value.fromBytes(newAddress))
  )

  return addressChangedEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createApprovedEvent(
  owner: Address,
  node: Bytes,
  delegate: Address,
  approved: boolean
): Approved {
  let approvedEvent = changetype<Approved>(newMockEvent())

  approvedEvent.parameters = new Array()

  approvedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromFixedBytes(node))
  )
  approvedEvent.parameters.push(
    new ethereum.EventParam("delegate", ethereum.Value.fromAddress(delegate))
  )
  approvedEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvedEvent
}

export function createContenthashChangedEvent(
  node: Bytes,
  hash: Bytes
): ContenthashChanged {
  let contenthashChangedEvent = changetype<ContenthashChanged>(newMockEvent())

  contenthashChangedEvent.parameters = new Array()

  contenthashChangedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromFixedBytes(node))
  )
  contenthashChangedEvent.parameters.push(
    new ethereum.EventParam("hash", ethereum.Value.fromBytes(hash))
  )

  return contenthashChangedEvent
}

export function createDNSRecordChangedEvent(
  node: Bytes,
  name: Bytes,
  resource: i32,
  record: Bytes
): DNSRecordChanged {
  let dnsRecordChangedEvent = changetype<DNSRecordChanged>(newMockEvent())

  dnsRecordChangedEvent.parameters = new Array()

  dnsRecordChangedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromFixedBytes(node))
  )
  dnsRecordChangedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromBytes(name))
  )
  dnsRecordChangedEvent.parameters.push(
    new ethereum.EventParam(
      "resource",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(resource))
    )
  )
  dnsRecordChangedEvent.parameters.push(
    new ethereum.EventParam("record", ethereum.Value.fromBytes(record))
  )

  return dnsRecordChangedEvent
}

export function createDNSRecordDeletedEvent(
  node: Bytes,
  name: Bytes,
  resource: i32
): DNSRecordDeleted {
  let dnsRecordDeletedEvent = changetype<DNSRecordDeleted>(newMockEvent())

  dnsRecordDeletedEvent.parameters = new Array()

  dnsRecordDeletedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromFixedBytes(node))
  )
  dnsRecordDeletedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromBytes(name))
  )
  dnsRecordDeletedEvent.parameters.push(
    new ethereum.EventParam(
      "resource",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(resource))
    )
  )

  return dnsRecordDeletedEvent
}

export function createDNSZonehashChangedEvent(
  node: Bytes,
  lastzonehash: Bytes,
  zonehash: Bytes
): DNSZonehashChanged {
  let dnsZonehashChangedEvent = changetype<DNSZonehashChanged>(newMockEvent())

  dnsZonehashChangedEvent.parameters = new Array()

  dnsZonehashChangedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromFixedBytes(node))
  )
  dnsZonehashChangedEvent.parameters.push(
    new ethereum.EventParam(
      "lastzonehash",
      ethereum.Value.fromBytes(lastzonehash)
    )
  )
  dnsZonehashChangedEvent.parameters.push(
    new ethereum.EventParam("zonehash", ethereum.Value.fromBytes(zonehash))
  )

  return dnsZonehashChangedEvent
}

export function createInterfaceChangedEvent(
  node: Bytes,
  interfaceID: Bytes,
  implementer: Address
): InterfaceChanged {
  let interfaceChangedEvent = changetype<InterfaceChanged>(newMockEvent())

  interfaceChangedEvent.parameters = new Array()

  interfaceChangedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromFixedBytes(node))
  )
  interfaceChangedEvent.parameters.push(
    new ethereum.EventParam(
      "interfaceID",
      ethereum.Value.fromFixedBytes(interfaceID)
    )
  )
  interfaceChangedEvent.parameters.push(
    new ethereum.EventParam(
      "implementer",
      ethereum.Value.fromAddress(implementer)
    )
  )

  return interfaceChangedEvent
}

export function createNameChangedEvent(node: Bytes, name: string): NameChanged {
  let nameChangedEvent = changetype<NameChanged>(newMockEvent())

  nameChangedEvent.parameters = new Array()

  nameChangedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromFixedBytes(node))
  )
  nameChangedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return nameChangedEvent
}

export function createPubkeyChangedEvent(
  node: Bytes,
  x: Bytes,
  y: Bytes
): PubkeyChanged {
  let pubkeyChangedEvent = changetype<PubkeyChanged>(newMockEvent())

  pubkeyChangedEvent.parameters = new Array()

  pubkeyChangedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromFixedBytes(node))
  )
  pubkeyChangedEvent.parameters.push(
    new ethereum.EventParam("x", ethereum.Value.fromFixedBytes(x))
  )
  pubkeyChangedEvent.parameters.push(
    new ethereum.EventParam("y", ethereum.Value.fromFixedBytes(y))
  )

  return pubkeyChangedEvent
}

export function createTextChangedEvent(
  node: Bytes,
  indexedKey: string,
  key: string,
  value: string
): TextChanged {
  let textChangedEvent = changetype<TextChanged>(newMockEvent())

  textChangedEvent.parameters = new Array()

  textChangedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromFixedBytes(node))
  )
  textChangedEvent.parameters.push(
    new ethereum.EventParam("indexedKey", ethereum.Value.fromString(indexedKey))
  )
  textChangedEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromString(key))
  )
  textChangedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )

  return textChangedEvent
}

export function createVersionChangedEvent(
  node: Bytes,
  newVersion: BigInt
): VersionChanged {
  let versionChangedEvent = changetype<VersionChanged>(newMockEvent())

  versionChangedEvent.parameters = new Array()

  versionChangedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromFixedBytes(node))
  )
  versionChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newVersion",
      ethereum.Value.fromUnsignedBigInt(newVersion)
    )
  )

  return versionChangedEvent
}
