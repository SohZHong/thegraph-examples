// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.3

import { Writer, Reader } from "as-proto/assembly";
import { UiTokenAmount } from "./UiTokenAmount";

export class TokenBalance {
  static encode(message: TokenBalance, writer: Writer): void {
    writer.uint32(8);
    writer.uint32(message.accountIndex);

    writer.uint32(18);
    writer.string(message.mint);

    const uiTokenAmount = message.uiTokenAmount;
    if (uiTokenAmount !== null) {
      writer.uint32(26);
      writer.fork();
      UiTokenAmount.encode(uiTokenAmount, writer);
      writer.ldelim();
    }

    writer.uint32(34);
    writer.string(message.owner);

    writer.uint32(42);
    writer.string(message.programId);
  }

  static decode(reader: Reader, length: i32): TokenBalance {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new TokenBalance();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountIndex = reader.uint32();
          break;

        case 2:
          message.mint = reader.string();
          break;

        case 3:
          message.uiTokenAmount = UiTokenAmount.decode(reader, reader.uint32());
          break;

        case 4:
          message.owner = reader.string();
          break;

        case 5:
          message.programId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  accountIndex: u32;
  mint: string;
  uiTokenAmount: UiTokenAmount | null;
  owner: string;
  programId: string;

  constructor(
    accountIndex: u32 = 0,
    mint: string = "",
    uiTokenAmount: UiTokenAmount | null = null,
    owner: string = "",
    programId: string = ""
  ) {
    this.accountIndex = accountIndex;
    this.mint = mint;
    this.uiTokenAmount = uiTokenAmount;
    this.owner = owner;
    this.programId = programId;
  }
}
