# Subgraph for Tracking ENAOFT and Centrifuge Tokens

This subgraph is designed to track and record token transfer activities for tokens deployed on the Base Mainnet network: **ENAOFT** and **Centrifuge**. It serves as an example of how to monitor and manage token balances and transfer data using **The Graph**. 

The example output can be seen here [The Graph Playground](https://api.studio.thegraph.com/query/90479/base-test/v0.0.10)

---

## Features

1. **Track Token Transfers**  
   Captures `Transfer` events emitted by the `ENAOFT` and `Centrifuge` token contracts.
   
2. **Record User Balances**  
   Maintains user entities with updated balances of the tracked tokens.

3. **Filter Transfers by Token**  
   Allows querying and filtering of transfer events based on the originating token contract.

4. **Example-Driven Implementation**  
   Demonstrates how to use The Graph to track and analyze token activity efficiently.

---

## Tracked Tokens

1. **ENAOFT**
   - **Address:** `0x58538e6A46E07434d7E7375Bc268D3cb839C0133`

2. **Centrifuge**
   - **Address:** `0x2b51E2Ec9551F9B87B321f63b805871f1c81ba97`
  
---

## Example Queries

1. **List All User Transfers**  
   Query for all `User` instances and the transfers they made:
   ```graphql
   {
     users(first: 5) {
       id
       enaoft
       centrifuge
     }
     transfers(first: 5) {
       id
       from
       to
       value
     }
   }
