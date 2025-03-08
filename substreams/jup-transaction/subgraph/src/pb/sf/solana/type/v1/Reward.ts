// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.3

import { Writer, Reader } from "as-proto/assembly";
import { RewardType } from "./RewardType";

export class Reward {
  static encode(message: Reward, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.pubkey);

    writer.uint32(16);
    writer.int64(message.lamports);

    writer.uint32(24);
    writer.uint64(message.postBalance);

    writer.uint32(32);
    writer.int32(message.rewardType);

    writer.uint32(42);
    writer.string(message.commission);
  }

  static decode(reader: Reader, length: i32): Reward {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Reward();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubkey = reader.string();
          break;

        case 2:
          message.lamports = reader.int64();
          break;

        case 3:
          message.postBalance = reader.uint64();
          break;

        case 4:
          message.rewardType = reader.int32();
          break;

        case 5:
          message.commission = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  pubkey: string;
  lamports: i64;
  postBalance: u64;
  rewardType: RewardType;
  commission: string;

  constructor(
    pubkey: string = "",
    lamports: i64 = 0,
    postBalance: u64 = 0,
    rewardType: RewardType = 0,
    commission: string = ""
  ) {
    this.pubkey = pubkey;
    this.lamports = lamports;
    this.postBalance = postBalance;
    this.rewardType = rewardType;
    this.commission = commission;
  }
}
