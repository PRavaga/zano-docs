Gets list of incoming transfers by given payment IDs

### Request

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "get_bulk_payments",
  "params": {
    "payment_ids": ["00000000ff00ff00, 00000000ff00ff01"],
    "min_block_height": 2000000,
    "allow_locked_transactions": false
  }
}
```

### Request parameters

- payment_ids - array of strings; payment ids of txs to search
- min_block_height - unsigned int; height of the block to start looking for payments from
- allow_locked_transactions - bool; include transactions that are currently locked

---

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "payments": [
      {
        "payment_id": "00000000ff00ff00",
        "amount": 100000000,
        "block_height": 202556,
        "tx_hash": "01220e8304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a93",
        "unlock_time": 0
      },
      {
        "payment_id": "00000000ff00ff01",
        "amount": 100000000,
        "block_height": 202556,
        "tx_hash": "0b5eb9685c0c11db77e2cdd9879c8d3b815523c6e4bf03dcee62c583b7e1f772",
        "unlock_time": 0
      }
    ]
  }
}
```

### Response information

- amount - unsigned int; amount of coins in atomic units.
- block_height - unsigned int; height of the block containing corresponding transaction.
- tx_hash - string; transaction’s hash.
- unlock_time - unsigned int; if nonzero — unix timestamp since then this transfer’s coins can be spent. If it is less than 500000000, the value is treated as a minimum block height at which this transfer’s coin can be spent.
