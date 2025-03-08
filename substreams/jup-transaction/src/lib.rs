mod pb;
use pb::{mydata::v1 as mydata, sf::substreams::solana::v1::Transactions};
use pb::sf::solana::r#type::v1::{ConfirmedTransaction, InnerInstruction};

const JUP_TOKEN: &str = "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4";

#[substreams::handlers::map]
fn map_my_data(transactions: Transactions) -> mydata::MyData {
    // TODO: Modify this code to get the data that you need from the transactions.

    let mut my_data = mydata::MyData::default();
    my_data.transactions = transactions
    .transactions
    .into_iter()
    .filter(|tx: &ConfirmedTransaction| contains_transfer(tx))
    .collect();
    my_data
}

fn contains_transfer(tx: &ConfirmedTransaction) -> bool {
    let Some(meta) = &tx.meta else { return false };
    meta.inner_instructions
        .iter()
        .flat_map(|i| &i.instructions)
        .any(|instr: &InnerInstruction| is_jup_transfer(instr, tx));
    return true;
}

fn is_jup_transfer(instr: &InnerInstruction, tx: &ConfirmedTransaction) -> bool {
    let Some(message) = tx.transaction.as_ref().and_then(|t| t.message.as_ref()) else {
        return false;
    };
    let jup_token_bytes = JUP_TOKEN.as_bytes();

    instr.accounts.iter().any(|&index| {
        message.account_keys.get(index as usize)
            .map(|key| key == jup_token_bytes)
            .unwrap_or(false)
    })
}