# Subgraph for Tracking Counter Contracts via Templates

This subgraph demonstrates **The Graph's template feature**, enabling efficient tracking and querying of multiple smart contracts deployed dynamically on the **Sepolia Testnet**. 

The subgraph focuses on monitoring instances of the `Counter` contract created by a single `CounterFactory` contract. Each `Counter` instance can emit events that are automatically tracked through the dynamic template system.

The example output can be seen here [The Graph Playground](https://api.studio.thegraph.com/query/90479/base-net/v0.0.3)

---

## Features

1. **Dynamic Contract Tracking**  
   Automatically creates new data sources for `Counter` contracts deployed via the `CounterFactory`.

2. **Track Counter Events**  
   Captures `CounterIncremented` and `NumberSet` events emitted by dynamically deployed `Counter` contracts.

3. **Factory and Template Workflow**  
   Demonstrates how to use a factory contract as the source for new data sources with The Graph templates.

4. **Efficient Data Management**  
   Allows querying and filtering of counter activity across multiple instances in real time.

---

## Tracked Contracts

1. **CounterFactory**
   - **Address:** `0xf9DfDAc93c9571d2c75891bA4a5f748d31bE2C5A`
   - **Purpose:** Deploys `Counter` contracts and emits the `CounterCreated` event, which initializes new data sources.

2. **Counter** (Template)  
   - **Dynamic Instances:** Created when the factory emits the `CounterCreated` event.
   - **Events Captured:**  
     - `CounterIncremented(uint256 previousValue, uint256 newValue)`  
     - `NumberSet(uint256 oldNumber, uint256 newNumber)`

---

## Example Queries

1. **List All Counter Contracts**  
   Query for all `Counter` instances created by the factory:
   ```graphql
    {
      counterCreateds(first: 5) {
          id
          newCounter
          initialNumber
          timestamp
      }
    }
2. **List All Increments**  
   Query for all `Counter` instances that have their value incremented:
   ```graphql
    {
      counterIncrementeds(first: 5) {
          id
          currentNumber
          timestamp
          blockNumber
      }
    }
