Redeems atomic swap

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "atomics_redeem_htlc",
	"params": {
		"tx_id": "",
		"origin_secret_as_hex": ""
	}
}
```

### Request parameters

- tx_id - Identify transaction which carry needed HTLC, by this we basically identify HTLC itself. (Theoretically one transaction can carry more then 1 HTLC, but since this unlikely will ever be used, current implementation of the wallet assume it only one HTLC per tx, and we identify HTLC by carrying tx_id. This can be changed in future, if needed, without hardfork).
- origin_secret_as_hex - Secret for HTLC, encoded in HEX. (sha256 supposed to be calculated from raw secret blob).

---

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "result_tx_blob": "df956c7c82cc2658333de5ca3c860edf956c7c82cc2658333de5ca3c860edf956c7c82cc2658333de5ca3c860edf956c7c82cc2658333de5ca3c860edf956c7c82cc2658333de5ca3c860e",
    "result_tx_id": "612ca0baf8a1a8b7b86d9b56e3b9e1ef4bf6af6296ece8d75e85601fe3987b7b"
  }
}
```

### Response information

- result_tx_blob - Created and broadcasted transaction in a hex encoded blob.
- result_tx_id - Created and broadcasted transaction's ID.