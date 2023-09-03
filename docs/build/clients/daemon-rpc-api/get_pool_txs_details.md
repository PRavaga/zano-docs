Returns transactions that are currently in the pool

Note: Output is less detailed if ids parameter is empty or omitted.

### Request


```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "get_pool_txs_details",
	"params": {
		"ids": ["", ""]
	}
}
```
- ids - list of transaction hash identifiers for which information is requested. All transactions from the pool will be returned if ids is empty or if this parameter is omitted

---

### Response

```json
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "status": "OK",
    "txs": [
      {
        "amount": 500000000000000,
        "blob": "",
        "blob_size": 57913,
        "fee": 10000000000,
        "id": "5864f3e061c70b47d4ea6a47e593aad66bb2462fa4036be2cd3dfede9faa7583",
        "keeper_block": 0,
        "object_in_json": "",
        "pub_key": "24a523aea7d0b1e69e5a393a7e5531455c4317e527ad83be7a871fea716dc45c",
        "timestamp": 1558557359
      }
    ]
  }
}
```

### Response information

- txs - array of tx_rpc_extended_info objects; see get_tx_details method description for details.
