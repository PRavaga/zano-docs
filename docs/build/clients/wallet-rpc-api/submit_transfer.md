Broadcasts transaction that was previously signed using sign_transfer call

### Request 

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "submit_transfer",
	"params": {
		"tx_signed_hex": ""
	}
}
```

### Request information

- tx_signed_hex - hex-encoded signed transaction as returned from sign_transfer call.

---

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "tx_hash": "0554849abdb62f7d1902ddd14ce005722a340fc14fab4a375adc8749abf4e10b"
  }
}
```

### Response information

- tx_hash - string; transaction hash identifier.