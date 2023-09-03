Creates an integrated address for the wallet by embedding the given payment ID together with the wallet's public address.

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "split_integrated_address",
	"params": {
		"integrated_address": ""
	}
}
```

### Request parameters

- integrated_address - integrated or standard address

---

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "payment_id": "",
    "standard_address": "ZxBvJDuQjMG9R2j4WnYUhBYNrwZPwuyXrC7FHdVmWqaESgowDvgfWtiXeNGu8Px9B24pkmjsA39fzSSiEQG1ekB225ZnrMTBp"
  }
}
```

### Response information

- payment_id - string; hex-encoded payment ID, extracted from the given integrated address. Can be empty. Will be empty when a standard address is given as an input.
- standard_address - string; standard address with no payment ID attached.