import { Protobuf } from 'as-proto/assembly';
import { MyData as protoMyData } from './pb/mydata/v1/MyData';
import {
  JupTransaction,
  TokenBalance,
  UiTokenAmount,
} from '../generated/schema';
import { BigInt, Bytes } from '@graphprotocol/graph-ts';

// Decode JUP token address from Base58
const JUP_TOKEN: string = 'JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4';

export function handleTriggers(bytes: Uint8Array): void {
  const input = Protobuf.decode<protoMyData>(bytes, protoMyData.decode);

  for (var i = 0; i < input.transactions.length; i++) {
    const transaction = input.transactions[i].transaction!;
    const meta = input.transactions[i].meta!;

    // Create JupTransaction entity
    let entity = new JupTransaction(
      Bytes.fromUint8Array(transaction.signatures[0]).toBase58()
    );

    // Store user
    entity.user = Bytes.fromUint8Array(
      transaction.message!.accountKeys[0]
    ).toBase58();

    const accountKeys = transaction.message!.accountKeys.map<string>((key) =>
      Bytes.fromUint8Array(key).toBase58()
    );

    // Handle Pre-Token Balances
    for (let j = 0; j < meta.preTokenBalances.length; j++) {
      const balance = meta.preTokenBalances[j];

      let tokenBalance = new TokenBalance(
        entity.id + '-pre-' + j.toString() // Unique ID
      );
      tokenBalance.preTransaction = entity.id;
      tokenBalance.accountIndex = BigInt.fromU32(balance.accountIndex);
      tokenBalance.mint = balance.mint;
      tokenBalance.owner = balance.owner;
      tokenBalance.programId = balance.programId;

      // Create UiTokenAmount entity
      let uiAmountEntity = new UiTokenAmount(tokenBalance.id);
      uiAmountEntity.tokenBalance = tokenBalance.id;

      uiAmountEntity.decimals = BigInt.fromU32(balance.uiTokenAmount!.decimals);
      uiAmountEntity.amount = balance.uiTokenAmount!.amount;
      uiAmountEntity.uiAmountString = balance.uiTokenAmount!.uiAmountString;

      uiAmountEntity.save();
      tokenBalance.save();
    }

    // Handle Post-Token Balances
    for (let k = 0; k < meta.postTokenBalances.length; k++) {
      const balance = meta.postTokenBalances[k];

      let tokenBalance = new TokenBalance(
        entity.id + '-post-' + k.toString() // Unique ID
      );
      tokenBalance.postTransaction = entity.id;
      tokenBalance.accountIndex = BigInt.fromU32(balance.accountIndex);
      tokenBalance.mint = balance.mint;
      tokenBalance.owner = balance.owner;
      tokenBalance.programId = balance.programId;
      // Create UiTokenAmount entity
      let uiAmountEntity = new UiTokenAmount(tokenBalance.id);
      uiAmountEntity.tokenBalance = tokenBalance.id;

      uiAmountEntity.decimals = BigInt.fromU32(balance.uiTokenAmount!.decimals);
      uiAmountEntity.amount = balance.uiTokenAmount!.amount;
      uiAmountEntity.uiAmountString = balance.uiTokenAmount!.uiAmountString;

      uiAmountEntity.save();
      tokenBalance.save();
    }

    entity.save();
  }
}
