Mark offer as not active

### Request

```json
{
	"jsonrpc": "2.0",
	"id": "0",
	"method": "marketplace_cancel_offer",
	"params": {
		"tx_id": "",
		"no": 0
	}
}
```

### Request parameters
- tx_id - id of the transaction with original offer posting(returned in marketplace_push_offer). Basically offers identified by carrier transactions id. Theoretically, one transaction can carry more than one offer, so then there is a second parameter which specifies an index of the offer inside carrier transaction, but since we didn't want to make the user interface and whole system way too complicated for using, by default API place only one offer per transaction.
- no - this parameter is 0 by default, must be used if transaction carries more then one offer.

---

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "tx_blob_size": 368,
    "tx_hash": "d52014dae0b65168e0551acef9e95972041f3f38d92455d18c8b886baece3d90"
  }
}
```

### Response information

- tx_blob_size
- tx_hash - string; tx hash of the transaction related to the offer being cancelled