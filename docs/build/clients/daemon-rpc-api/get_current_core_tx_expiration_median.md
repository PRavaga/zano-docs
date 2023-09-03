Returns the median for timestamps of the last 20 blocks

Displayed as returned median value plus 600 seconds, this is used to check the expiration time of parameters.

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "get_current_core_tx_expiration_median"
}
```

---

### Response

```json
{
	"id": 0,
	"jsonrpc": "2.0",
	"result": {
		"expiration_median": 1684416559,
		"status": "OK"
	}
}
```

### Response information

- expiration_median - unsigned int; median value.