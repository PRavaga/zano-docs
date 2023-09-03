Returns a block header by the given block height.

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "getblockheaderbyheight",
	"params": {
		"height": 1
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
			"- depth": 2114588,
			"difficulty": "1",
			"hash": "901214ab938219f5b33b547008607aee14d29950a34834a2e9973b96269bd0b0",
			"height": 1,
			"major_version": 0,
			"minor_version": 0,
			"nonce": 1532031558827332528,
			"orphan_status": false,
			"prev_hash": "cc608f59f8080e2fbfe3c8c80eb6e6a953d47cf2d6aebd345bada3a1cab99852",
			"reward": 1000000000000,
			"timestamp": 1557342384
		},
		"status": "OK"
	}
}
```

### Response information

- depth - unsigned int; distance in blocks from the blockchain top.
- difficulty - unsigned int; block difficulty.
- hash - string; block identifier.
- height - unsigned int; block height.
- major_version - unsigned int; major version of a block.
- minor_version - unsigned int; minor version of a block.
- nonce - unsigned int; block nonce.
- orphan_status - boolean.
- prev_hash
- reward - unsigned int; how much money this block has generated.
- timestamp - unsigned int; block timestamp.
