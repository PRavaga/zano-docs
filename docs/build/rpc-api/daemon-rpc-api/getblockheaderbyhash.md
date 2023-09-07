Returns a block header by the given hash identifier.

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "getblockheaderbyhash",
	"params": {
		"hash": "067fb9861f702b4eabee2e2f9265db3b9adde8a2c43e5afe6887574a12923652"
	}
}
```
---

### Response

```json
{
	"id": 0,
	"jsonrpc": "2.0",
	"result": {
		"block_header": {
			"depth": 3336,
			"difficulty": "6867412547068",
			"hash": "067fb9861f702b4eabee2e2f9265db3b9adde8a2c43e5afe6887574a12923652",
			"height": 2111612,
			"major_version": 2,
			"minor_version": 0,
			"nonce": 5464575110210072335,
			"orphan_status": false,
			"prev_hash": "6860a4742f167fcf7c46e121c8e139fd5232537f580a22ae76ce8013c06d0f09",
			"reward": 1000000000000,
			"timestamp": 1684409286
		},
		"status": "OK"
	}
}
```

### Response information

- depth - unsigned int; distance in blocks from the blockchain top. Always zero for this call.
- difficulty - unsigned int; block difficulty.
- hash - string; block identifier.
- height - unsigned int; block height.
- major_version - unsigned int; major version of a block.
- minor_version - unsigned int; minor version of a block.
- nonce - unsigned int; block nonce.
- orphan_status - boolean; is this block orphan or not? Always false for this call.
- prev_hash -
- reward - unsigned int; how much money this block has generated.
- timestamp - unsigned int; block timestamp.

---