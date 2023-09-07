Returns all registered aliases

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "get_all_alias_details"
}
```

---

### Response



:::danger ㅤ

This request has been shortened for the sake of the example, a real response will return many more aliases.

:::

```json
{
	"id": 0,
	"jsonrpc": "2.0",
	"result": {
		"aliases": [
			{
				"address": "ZxCn8fKmvenQRNdoFFsDinWMfucfC5H9Abb71HjUFbPcEgaCk1fdjqSe4ZDskYgLQtRUFYDH1AqUAWDHjmu84hSG394mceDgb",
				"alias": "------",
				"comment": "Coolest username",
				"tracking_key": ""
			},
		],
		"status": "OK"
	}
}
```

### Reponse information

- address - string; address of a corresponding wallet.
- alias - string; alias name.
- comment - string; user-defined comment, made by alias owner (optional).
- tracking_key - string; hex-encoded secret view key (optional) of the wallet.
