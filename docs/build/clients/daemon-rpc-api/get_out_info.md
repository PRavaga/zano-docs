Looks up an output in the global outputs table by specified amount and output global index.

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "get_out_info",
	"params": {
		"amount": 1,
		"i": 1
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
		"out_no": 0,
		"status": "OK",
		"tx_id": "5b3bb20dee6307b11f65f8fe2b976efdec570b46241e41df33e85f4cf2332b2a"
	}
}
```

### Response information

- out_no - unsigned int; output local index in its source transaction.
- status - string; "OK" if the output was found, "NOT FOUND" if the requested output was not found.
- tx_id - string; hash identifier of output's source transaction.