mod pb;
use pb::{mydata::v1 as mydata, sf::solana::r#type::v1::Block};
use substreams::store::{StoreAdd, StoreAddInt64, StoreGet, StoreGetInt64, StoreNew};

#[substreams::handlers::store]
fn user_transaction_counter(blk: Block, store: StoreAddInt64) {
    // Iterate over transactions in block
    for tx in blk.transactions {
        // Check if transactions has transaction data
        if let Some(confirmed_tx) = &tx.transaction {
            // Check if transaction has message field
            if let Some(message) = &confirmed_tx.message {
                // Get first account key (the fee payer)
                if let Some(sender_bytes) = message.account_keys.first() {
                    // Increment transaction count by 1
                    let sender_address = bs58::encode(sender_bytes).into_string();
                    store.add(0, sender_address.clone(), 1);
                }
            }
        }
    }
}

#[substreams::handlers::map]
fn map_user_transaction_count(blk: Block, store: StoreGetInt64) -> mydata::BlockUserData {
    let block_hash: String = blk.blockhash.to_string();
    let block_slot: u64 = blk.slot;
    let block_timestamp: u64 = blk.block_time.clone().unwrap_or_default().timestamp as u64;

    let mut users: Vec<mydata::UserData> = Vec::new();
    
    // Iterate over transactions in the block
    for tx in blk.transactions {
        if let Some(confirmed_tx) = &tx.transaction {
            if let Some(message) = &confirmed_tx.message {
                if let Some(sender_bytes) = message.account_keys.first() {
                    // Retrieve the transaction count from the store
                    let sender_address: String = bs58::encode(sender_bytes).into_string();
                    if let Some(count) = store.get_at(0, sender_address.as_str()) {
                        // Create new user entity and push it in vector
                        users.push(mydata::UserData {
                            user_address: sender_address,
                            transactions_count: count as u64
                        });
                    }
                }
            }
        }
    }

    mydata::BlockUserData {
        block_hash,
        block_slot,
        block_timestamp,
        users,
    }
}