Creates an integrated address for the wallet by embedding the given payment ID together with the wallet's public address.

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "make_integrated_address",
	"params": {
		"payment_id": ""
	}
}
```

### Request parameters

- payment_id - hex-encoded payment identifier. If empty, random 8-byte payment ID will be generated and used.

---

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "integrated_address": "ZxBvJDuQjMG9R2j4WnYUhBYNrwZPwuyXrC7FHdVmWqaESgowDvgfWtiXeNGu8Px9B24pkmjsA39fzSSiEQG1ekB225ZnrMTBp",
    "payment_id": "00000000ff00ff00"
  }
}
```

### Response inforamtion

- integrated_address - string; the result.
- payment_id - string; hex-encoded payment ID, that was used (useful if an empty payment_id was given as an input).