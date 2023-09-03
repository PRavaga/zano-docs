Returns current reward that must be paid to register an alias name.

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "get_alias_reward",
	"params": {
		"alias": "mickymouse"
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
		"reward": 100000000000,
		"status": "OK"
	}
}
```

### Response information

- reward - unsigned int; current reward (in atomic units) to be paid for an alias.