Returns alias details by alias name.

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "get_alias_details",
	"params": {
		"alias": "kekzploit"
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
		"alias_details": {
			"address": "ZxDNaMeZjwCjnHuU5gUNyrP1pM3U5vckbakzzV6dEHyDYeCpW8XGLBFTshcaY8LkG9RQn7FsQx8w2JeJzJwPwuDm2NfixPAXf",
			"comment": "",
			"tracking_key": ""
		},
		"status": "OK"
	}
}
```

### Response information

- address - string; public address associated with requested alias.
- comment - string; an arbitrary comment set by the owner. Can be empty.
- tracking_key - string; private view key for public address. Can be empty.