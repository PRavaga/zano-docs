This endpoint wasnt on original docs and was found in GitHub code, needs a description of what the endpoint does, any required request parameters? and descriptions for json response parameters


:::info ㅤ
Check with Ravaga what this endpoint does.
:::

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "get_seed_phrase_info"
}
```

---

### Response 

```json
{
	"id": 0,
	"jsonrpc": "2.0",
	"result": {
		"hash_sum_matched": false,
		"require_password": false,
		"syntax_correct": false,
		"tracking": false
	}
}
```

### Response information

- hash_sum_matched - ?
- require_password - ?
- syntax_correct - ?
- tracking - ?