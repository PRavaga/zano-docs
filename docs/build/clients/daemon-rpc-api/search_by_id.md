Returns type of an entity by specified hash identifier.

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "search_by_id",
	"params": {
		"id": "ee25a5503726368eef558737f81f15fdc5f1e705b678df81315c83d8789ed4b3"
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
		"status": "OK",
		"types_found": [
			"tx"
		]
	}
}
```

### Response information

- types_found — array of strings; a set of the types found (usually only one). Possible values: block, alt_block, key_image, tx, multisig_id.