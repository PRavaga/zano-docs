Gets information related to wallet

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "get_wallet_info"
}
```

---

### Response

```json
{
	"id": 0,
	"jsonrpc": "2.0",
	"result": {
		"address": "ZxDbSpgDzyaMecaMUi6orsLimz3M8ptCzYzEuboTdYmwai8xhyATWnkHCt26Ts2kT75ajPGgmDAWR6xdpVBto8Vz1dmQJp8AJ",
		"current_height": 2116310,
		"is_whatch_only": false,
		"path": "docs.wallet",
		"transfer_entries_count": 0,
		"transfers_count": 0
	}
}
```

### Response information

- address - string; address associated with wallet
- current_height - current block height
- is_whatch_only
- path - string; path to wallet file
- transfer_entries_count - the number of transfers conducted by the wallet
