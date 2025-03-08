# Subgraph for Exploring ENS Ownership and Records

This subgraph tracks and queries ENS domains, their ownership, and associated records on **Ethereum Mainnet**. 

This subgraph focuses on demonstrating entity relationships and field derivations.

The `Domain` entity will be linked to their respective records and ownership details through relationships with `CoinAddress`, `TextRecord` and `DNSRecord` entities depicted in the [schema](/ens-explorer/schema.graphql).

The example output can be seen here [The Graph Playground](https://api.studio.thegraph.com/query/90479/ens-explorer/v0.0.5)

---

## Features

1. **Ownership Tracking**  
   Monitors ENS ownership changes via the `NewOwner` and `Transfer` events, ensuring the latest owner is always reflected.

2. **Domain-Record Linking**
   Links ENS domains to their associated records (e.g., TextRecord, Pubkey, Address, and DNSRecord) using derived fields.

3. **Derived Relationships**
   Demonstrates how entities like Domain and Record are interconnected through derived fields, enabling rich data queries without redundancy.

4. **Flexible Querying**  
   Allows querying and filtering of ENS data, such as domains owned by an address, all text records for a domain, or historical ownership changes

---

## Tracked Contracts

1. **ENS Registry**
   - **Address:** `0x00000000000C2E074eC69A0dFb2997Ba6C7d2e1e`
   - **Purpose:** Tracks ENS domain ownership and resolver updates.

2. **ENS Resolver** (Template)  
   - Resolves additional metadata for domains.

---

## How it works

1.	**Domain Events (ENS Registry)**
   - Tracks ownership transfers with the `Transfer` event.
   - Assigns resolvers with the `NewResolver` event.
2.	**Resolver Templates**
   - Dynamically created when a resolver is assigned to a domain.
   - Tracks text records, addresses, DNS records, and public keys.
3.	**Entity Relationships**
   - Links domains to their resolvers.
   - Links resolvers to records (e.g., TextRecord, DNSRecord).

---

## Example Queries

1. **List All ENS Domains**  
   Query to retrieve all tracked domains, including their resolver and ownership details.
   ```graphql
    {
      domains(first: 5) {
        id
        name
        owner
        resolver {
          id
        }
      }
    }
2. **List All Coin Addresses**  
   Query for all `CoinAddresses` instances:
   ```graphql
    {
      coinAddresses(first: 5) {
        id
        domain {
          id
        }
        coinType
        address
      }
    }
3. **List All Associated Coin Addresses and Text Records**
   Query to retrieve associated coin addresses and text records to a specific domain
   ```graphql
   {
      domains(first: 5) {
        id
        node
        owner
        resolver
        coinAddresses(first: 5) {
          id
          coinType
          address
        }
        textRecords(first: 5) {
          id
          indexedKey
          key
          value
        }
      }
    }
