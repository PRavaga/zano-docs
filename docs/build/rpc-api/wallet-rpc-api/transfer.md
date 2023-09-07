Creates a transaction and broadcasts it to the network

### Request 

:::caution ㅤ
If you use multiple addresses in destinations field, make sure there are maximum 1 integrated address involved, or, if "payment id" parameter was specified, then integrated addresses are not allowed.
:::


```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "transfer",
	"params": {
		"destinations": "",
		"fee": 0,
		"mixin": 10,
		"payment_id": "",
		"comment": ""
	}
}
```

### Request parameters

- destinations - list of transfer_destination objects (see below); list of recipients with corresponding amount of coins for each.
- fee - transaction fee in atomic units. Minimum: 10^10 atomic units.
- mixin - number of foreign outputs to be mixed in with each input. Increases untraceability. Specify zero for direct and traceable transfers.
- payment_id - hex-encoded payment id. Can be empty if payment ID is not required for this transfer.
- comment - text commentary which follow the transaction in encrypted form and is visible only to the sender and the receiver.

---

### Response


```json
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "tx_hash": "b329cce92a23fdaf89a5ad907ca9c4c1fbd052b79ec8414438533c83b39afc2b",
    "tx_unsigned_hex": ""
  }
}
```

### Response information

- tx_hash - string; hash identifier of the transaction that was successfully sent.
- tx_unsigned_hex - string; hex-encoded unsigned transaction (for watch-only wallets; to be used in cold-signing process).
