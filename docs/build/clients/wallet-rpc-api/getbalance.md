Retrieves current wallet balance: total and unlocked.

### Request

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "getbalance"
}
```

---

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "balance": 50000000033,
    "unlocked_balance": 50000000033
  }
}
```

### Response information

- balance - unsigned integer; total fund, that the wallet has (unlocked and locked coins).
- unlocked_balance - unsigned integer; unlocked funds, i.e. coins that are stored deep enough in the blockchain to be considered relatively safe to spend. Only this many coins are immediately spendable. Unlocked_balance is always less or equal to balance.
