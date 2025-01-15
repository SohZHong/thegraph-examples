import { User } from "../generated/schema";
import { Transfer as TransferEvent } from "../generated/ENAOFT/ENAOFT";
import { Transfer } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";

// Helper function to create User entity
function getOrCreateUser(address: string): User {
  let user = User.load(address);
  if (!user) {
    user = new User(address);
    user.enaoft = BigInt.fromI32(0);
    user.centrifuge = BigInt.fromI32(0);
    user.save();
  }
  return user;
}

// Handle transfer event for ENAOFT token
export function handleEnaoftTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  // Record user balance
  let fromUser = getOrCreateUser(event.params.from.toHex());
  let toUser = getOrCreateUser(event.params.to.toHex());

  fromUser.enaoft = fromUser.enaoft.minus(event.params.value);
  toUser.enaoft = toUser.enaoft.plus(event.params.value);

  fromUser.save();
  toUser.save();

  // Record transaction entity
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.value = event.params.value;
  entity.tokenAddress = event.address;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

// Handle transfer event for Centrifuge token
export function handleCentrifugeTransfer(event: TransferEvent): void {
    let entity = new Transfer(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    );
  
    // Record user balance
    let fromUser = getOrCreateUser(event.params.from.toHex());
    let toUser = getOrCreateUser(event.params.to.toHex());
  
    fromUser.centrifuge = fromUser.centrifuge.minus(event.params.value);
    toUser.centrifuge = toUser.centrifuge.plus(event.params.value);
  
    fromUser.save();
    toUser.save();
  
    // Record transaction entity
    entity.from = event.params.from;
    entity.to = event.params.to;
    entity.value = event.params.value;
    entity.tokenAddress = event.address;
  
    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;
  
    entity.save();
  }
