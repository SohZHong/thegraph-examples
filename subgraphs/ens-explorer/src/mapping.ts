import {
  DataSourceTemplate,
  ByteArray,
  Bytes,
  store,
} from "@graphprotocol/graph-ts";
import {
  NewOwner as NewOwnerEvent,
  NewResolver as NewResolverEvent,
  NewTTL as NewTTLEvent,
  Transfer as TransferEvent,
} from "../generated/ENSRegistryWithFallback/ENSRegistryWithFallback";
import {
  AddrChanged as AddrChangedEvent,
  AddressChanged as AddressChangedEvent,
  DNSRecordChanged as DNSRecordChangedEvent,
  DNSRecordDeleted as DNSRecordDeletedEvent,
  DNSZonehashChanged as DNSZonehashChangedEvent,
  NameChanged as NameChangedEvent,
  PubkeyChanged as PubkeyChangedEvent,
  TextChanged as TextChangedEvent,
} from "../generated/PublicResolver/PublicResolver";
import {
  CoinAddress,
  DNSRecord,
  DNSRecordDeleted,
  Domain,
  PublicKey,
  TextRecord,
} from "../generated/schema";

function retrieveDomain(node: Bytes): Domain {
  // Load the domain using the `node` as the unique ID
  let entity = Domain.load(node);

  if (!entity) {
    // If the domain doesn't exist, create a new one
    entity = new Domain(node);
  }
  return entity;
}

// Set new owner
export function handleNewOwner(event: NewOwnerEvent): void {
  const entity = retrieveDomain(event.params.node);
  entity.owner = event.params.owner;
  entity.node = event.params.node;

  entity.save();
}

export function handleNewResolver(event: NewResolverEvent): void {
  DataSourceTemplate.create("PublicResolver", [event.params.resolver.toHex()]);
  const entity = retrieveDomain(event.params.node);
  entity.node = event.params.node;
  entity.resolver = event.params.resolver;

  entity.save();
}

// Set new TTL
export function handleNewTTL(event: NewTTLEvent): void {
  const entity = retrieveDomain(event.params.node);

  entity.node = event.params.node;
  entity.ttl = event.params.ttl;

  entity.save();
}

// Transfer owner
export function handleTransfer(event: TransferEvent): void {
  const entity = retrieveDomain(event.params.node);
  entity.owner = event.params.owner;
  entity.node = event.params.node;

  entity.save();
}

export function handleAddrChanged(event: AddrChangedEvent): void {
  const entity = retrieveDomain(event.params.node);
  entity.node = event.params.node;
  entity.address = event.params.a;

  entity.save();
}

export function handleAddressChanged(event: AddressChangedEvent): void {
  const domain = retrieveDomain(event.params.node);
  // Convert coinType to Bytes and concatenate with the node
  const coinTypeBytes = Bytes.fromByteArray(
    ByteArray.fromBigInt(event.params.coinType)
  );
  const idBytes = event.params.node.concat(coinTypeBytes);

  // Load the CoinAddress entity using the constructed ID
  const id = Bytes.fromByteArray(idBytes);

  // Get coin address
  let address = CoinAddress.load(id);
  if (!address) {
    address = new CoinAddress(id);
    address.domain = domain.id; // Link the CoinAddress to the domain
    address.coinType = event.params.coinType;
  }
  address.address = event.params.newAddress;
  address.save();
}

export function handleDNSRecordChanged(event: DNSRecordChangedEvent): void {
  const domain = retrieveDomain(event.params.node);
  // node + resource + record forms the id
  // Convert `resource` to a fixed-length hexadecimal string
  const resourceHex = event.params.resource
    .toString(16) // Convert to hex string
    .padStart(4, "0"); // Pad to 4 characters (assuming `resource` fits in 2 bytes)

  // Create a unique ID by concatenating the hex strings
  const idString =
    event.params.node.toHexString() +
    resourceHex +
    event.params.name.toHexString();

  // Convert the ID string to a ByteArray
  const id = Bytes.fromByteArray(ByteArray.fromHexString(idString));

  // Load DNSRecord entity
  let dnsRecord = DNSRecord.load(id);
  if (!dnsRecord) {
    dnsRecord = new DNSRecord(id);
    dnsRecord.domain = domain.id; // Link DNS record to domain
  }
  dnsRecord.name = event.params.name.toString();
  dnsRecord.resource = event.params.resource;
  dnsRecord.record = event.params.record;

  dnsRecord.save();
}

export function handleDNSRecordDeleted(event: DNSRecordDeletedEvent): void {
  // Convert `resource` to a fixed-length hexadecimal string
  const resourceHex = event.params.resource
    .toString(16) // Convert to hex string
    .padStart(4, "0"); // Pad to 4 characters (assuming `resource` fits in 2 bytes)

  // Create a unique ID by concatenating the hex strings
  const idString =
    event.params.node.toHexString() +
    resourceHex +
    event.params.name.toHexString();

  // Convert the ID string to a ByteArray
  const id = Bytes.fromByteArray(ByteArray.fromHexString(idString));
  // Load the DNSRecord entity
  let dnsRecord = DNSRecord.load(id);

  if (dnsRecord) {
    // If the entity exists, remove it
    store.remove("DNSRecord", id.toHexString());
  }

  let entity = new DNSRecordDeleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.node = event.params.node;
  entity.name = event.params.name;
  entity.resource = event.params.resource;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDNSZonehashChanged(event: DNSZonehashChangedEvent): void {
  const entity = retrieveDomain(event.params.node);
  entity.node = event.params.node;
  entity.lastzonehash = event.params.lastzonehash;
  entity.zonehash = event.params.zonehash;

  entity.save();
}

export function handleNameChanged(event: NameChangedEvent): void {
  const entity = retrieveDomain(event.params.node);
  entity.name = event.params.name;
  entity.node = event.params.node;

  entity.save();
}

export function handlePubkeyChanged(event: PubkeyChangedEvent): void {
  const domain = retrieveDomain(event.params.node);
  domain.node = event.params.node;
  domain.save();

  // Use domain ID as PublicKey ID
  let pubKey = PublicKey.load(domain.id);
  if (!pubKey) {
    pubKey = new PublicKey(domain.id);
    pubKey.domain = domain.id;
  }

  pubKey.x = event.params.x;
  pubKey.y = event.params.y;

  pubKey.save();
}

export function handleTextChanged(event: TextChangedEvent): void {
  const domain = retrieveDomain(event.params.node);
  domain.node = event.params.node;
  domain.save();

  const idString =
    event.params.node.toHexString() + event.params.indexedKey.toHexString();
  const id = Bytes.fromHexString(idString);

  let textRecord = TextRecord.load(id);
  if (!textRecord) {
    textRecord = new TextRecord(id);
    textRecord.domain = domain.id;
  }
  textRecord.indexedKey = event.params.indexedKey;
  textRecord.key = event.params.key;
  textRecord.value = event.params.value;

  textRecord.save();
}
