// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.3

import { Writer, Reader } from "as-proto/assembly";
import { TransactionError } from "./TransactionError";
import { InnerInstructions } from "./InnerInstructions";
import { TokenBalance } from "./TokenBalance";
import { Reward } from "./Reward";
import { ReturnData } from "./ReturnData";

export class TransactionStatusMeta {
  static encode(message: TransactionStatusMeta, writer: Writer): void {
    const err = message.err;
    if (err !== null) {
      writer.uint32(10);
      writer.fork();
      TransactionError.encode(err, writer);
      writer.ldelim();
    }

    writer.uint32(16);
    writer.uint64(message.fee);

    const preBalances = message.preBalances;
    if (preBalances.length !== 0) {
      writer.uint32(24);
      writer.fork();
      for (let i: i32 = 0; i < preBalances.length; ++i) {
        writer.uint64(preBalances[i]);
      }
      writer.ldelim();
    }

    const postBalances = message.postBalances;
    if (postBalances.length !== 0) {
      writer.uint32(32);
      writer.fork();
      for (let i: i32 = 0; i < postBalances.length; ++i) {
        writer.uint64(postBalances[i]);
      }
      writer.ldelim();
    }

    const innerInstructions = message.innerInstructions;
    for (let i: i32 = 0; i < innerInstructions.length; ++i) {
      writer.uint32(42);
      writer.fork();
      InnerInstructions.encode(innerInstructions[i], writer);
      writer.ldelim();
    }

    writer.uint32(80);
    writer.bool(message.innerInstructionsNone);

    const logMessages = message.logMessages;
    if (logMessages.length !== 0) {
      for (let i: i32 = 0; i < logMessages.length; ++i) {
        writer.uint32(50);
        writer.string(logMessages[i]);
      }
    }

    writer.uint32(88);
    writer.bool(message.logMessagesNone);

    const preTokenBalances = message.preTokenBalances;
    for (let i: i32 = 0; i < preTokenBalances.length; ++i) {
      writer.uint32(58);
      writer.fork();
      TokenBalance.encode(preTokenBalances[i], writer);
      writer.ldelim();
    }

    const postTokenBalances = message.postTokenBalances;
    for (let i: i32 = 0; i < postTokenBalances.length; ++i) {
      writer.uint32(66);
      writer.fork();
      TokenBalance.encode(postTokenBalances[i], writer);
      writer.ldelim();
    }

    const rewards = message.rewards;
    for (let i: i32 = 0; i < rewards.length; ++i) {
      writer.uint32(74);
      writer.fork();
      Reward.encode(rewards[i], writer);
      writer.ldelim();
    }

    const loadedWritableAddresses = message.loadedWritableAddresses;
    if (loadedWritableAddresses.length !== 0) {
      for (let i: i32 = 0; i < loadedWritableAddresses.length; ++i) {
        writer.uint32(98);
        writer.bytes(loadedWritableAddresses[i]);
      }
    }

    const loadedReadonlyAddresses = message.loadedReadonlyAddresses;
    if (loadedReadonlyAddresses.length !== 0) {
      for (let i: i32 = 0; i < loadedReadonlyAddresses.length; ++i) {
        writer.uint32(106);
        writer.bytes(loadedReadonlyAddresses[i]);
      }
    }

    const returnData = message.returnData;
    if (returnData !== null) {
      writer.uint32(114);
      writer.fork();
      ReturnData.encode(returnData, writer);
      writer.ldelim();
    }

    writer.uint32(120);
    writer.bool(message.returnDataNone);

    writer.uint32(128);
    writer.uint64(message.computeUnitsConsumed);
  }

  static decode(reader: Reader, length: i32): TransactionStatusMeta {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new TransactionStatusMeta();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.err = TransactionError.decode(reader, reader.uint32());
          break;

        case 2:
          message.fee = reader.uint64();
          break;

        case 3:
          const length: i32 = reader.uint32();
          for (const end: usize = reader.ptr + length; reader.ptr < end; ) {
            message.preBalances.push(reader.uint64());
          }
          break;

        case 4:
          const length: i32 = reader.uint32();
          for (const end: usize = reader.ptr + length; reader.ptr < end; ) {
            message.postBalances.push(reader.uint64());
          }
          break;

        case 5:
          message.innerInstructions.push(
            InnerInstructions.decode(reader, reader.uint32())
          );
          break;

        case 10:
          message.innerInstructionsNone = reader.bool();
          break;

        case 6:
          message.logMessages.push(reader.string());
          break;

        case 11:
          message.logMessagesNone = reader.bool();
          break;

        case 7:
          message.preTokenBalances.push(
            TokenBalance.decode(reader, reader.uint32())
          );
          break;

        case 8:
          message.postTokenBalances.push(
            TokenBalance.decode(reader, reader.uint32())
          );
          break;

        case 9:
          message.rewards.push(Reward.decode(reader, reader.uint32()));
          break;

        case 12:
          message.loadedWritableAddresses.push(reader.bytes());
          break;

        case 13:
          message.loadedReadonlyAddresses.push(reader.bytes());
          break;

        case 14:
          message.returnData = ReturnData.decode(reader, reader.uint32());
          break;

        case 15:
          message.returnDataNone = reader.bool();
          break;

        case 16:
          message.computeUnitsConsumed = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  err: TransactionError | null;
  fee: u64;
  preBalances: Array<u64>;
  postBalances: Array<u64>;
  innerInstructions: Array<InnerInstructions>;
  innerInstructionsNone: bool;
  logMessages: Array<string>;
  logMessagesNone: bool;
  preTokenBalances: Array<TokenBalance>;
  postTokenBalances: Array<TokenBalance>;
  rewards: Array<Reward>;
  loadedWritableAddresses: Array<Uint8Array>;
  loadedReadonlyAddresses: Array<Uint8Array>;
  returnData: ReturnData | null;
  returnDataNone: bool;
  computeUnitsConsumed: u64;

  constructor(
    err: TransactionError | null = null,
    fee: u64 = 0,
    preBalances: Array<u64> = [],
    postBalances: Array<u64> = [],
    innerInstructions: Array<InnerInstructions> = [],
    innerInstructionsNone: bool = false,
    logMessages: Array<string> = [],
    logMessagesNone: bool = false,
    preTokenBalances: Array<TokenBalance> = [],
    postTokenBalances: Array<TokenBalance> = [],
    rewards: Array<Reward> = [],
    loadedWritableAddresses: Array<Uint8Array> = [],
    loadedReadonlyAddresses: Array<Uint8Array> = [],
    returnData: ReturnData | null = null,
    returnDataNone: bool = false,
    computeUnitsConsumed: u64 = 0
  ) {
    this.err = err;
    this.fee = fee;
    this.preBalances = preBalances;
    this.postBalances = postBalances;
    this.innerInstructions = innerInstructions;
    this.innerInstructionsNone = innerInstructionsNone;
    this.logMessages = logMessages;
    this.logMessagesNone = logMessagesNone;
    this.preTokenBalances = preTokenBalances;
    this.postTokenBalances = postTokenBalances;
    this.rewards = rewards;
    this.loadedWritableAddresses = loadedWritableAddresses;
    this.loadedReadonlyAddresses = loadedReadonlyAddresses;
    this.returnData = returnData;
    this.returnDataNone = returnDataNone;
    this.computeUnitsConsumed = computeUnitsConsumed;
  }
}
