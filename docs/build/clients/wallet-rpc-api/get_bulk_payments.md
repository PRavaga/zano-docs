Gets list of incoming transfers by given payment IDs

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "get_payments",
	"params": {
		"payment_id": "",
		"allow_locked_transactions": false
	}
}
```
- payment_id - payment id of txs to search
- allow_locked_transactions - include transactions that are currently locked

---

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "payments": [
      {
        "amount": 100000000,
        "block_height": 202556,
        "tx_hash": "01220e8304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a93",
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