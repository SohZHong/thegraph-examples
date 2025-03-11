mod pb;
use pb::{mydata::v1 as mydata, sf::solana::r#type::v1::{ConfirmedTransaction, Block}};
use substreams::store::{StoreNew, StoreAdd, StoreAddInt64};

#[substreams::handlers::store]
fn user_transaction_counter(blk: Block, store: StoreAddInt64) {
    for tx in blk.transactions {
        if let Some(confirmed_tx) = &tx.transaction {
            if let Some(message) = &confirmed_tx.message {
                if let Some(sender_bytes) = message.account_keys.first() {
                    if let Ok(sender_address) = String::from_utf8(sender_bytes.clone()) {
                        store.add(0, sender_address, 1); // Increment count for sender
                    }
                }
            }
        }
    }
}
// #[substreams::handlers::map]
// fn map_my_data(blk: Block) -> mydata::MyData {
//     let mut my_data = mydata::MyData::default();
//     my_data.block_hash = blk.blockhash.to_string();
//     my_data.block_slot = blk.slot;
//     my_data.block_timestamp = blk.block_time.clone().unwrap_or_default().timestamp as u64;
//     my_data.transactions_len = blk.transactions.len() as u64;
//     my_data.instructions_len = blk.walk_instructions().count() as u64;
//     my_data
// }
