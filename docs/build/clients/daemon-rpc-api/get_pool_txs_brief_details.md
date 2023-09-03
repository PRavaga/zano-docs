Returns brief information for transactions currently in the pool.

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "get_pool_txs_brief_details",
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
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "status": "OK",
    "txs": [
      {
        "fee": 10000000000,
        "id": "5864f3e061c70b47d4ea6a47e593aad66bb2462fa4036be2cd3dfede9faa7583",
        "sz": 57913,
        "total_amount": 500000000000000
      }
    ]
  }
}
```

### Response information

- fee - unsigned int; transaction fee.
- id - string; hash identifier.
- sz - unsigned int; size of serialized transaction in bytes (the same as blob_size in tx_rpc_extended_info).
- total_amount - unsigned int; sum of all transaction outputs.