Signs a transaction prepared by watch-only wallet (for cold-signing process)

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "sign_transfer",
	"params": {
		"tx_unsigned_hex": ""
	}
}
```

### Request information

- tx_unsigned_hex - hex-encoded unsigned transaction as returned from transfer call.

---

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "tx_hash": "855ae466c59b24295152740e84d7f823eaf3c91adfb1ba7b4ff1dc6085b79e63",
    "tx_signed_hex": "00_LONG_HEX_00"
  }
}
```

### Response information

- tx_hash - string; hash identifier of signed transaction.
- tx_signed_hex - string; hex-encoded signed transaction.