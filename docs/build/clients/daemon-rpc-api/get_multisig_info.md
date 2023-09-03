Looks up multi-sig output by specified identifier.

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "get_multisig_info",
	"params": {
		"ms_id": ""
	}
}
```

### Request parameters

- ms_id - hash identifier of a multisig output

---

### Response

```json
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "out_no": 3,
    "status": "OK",
    "tx_id": "2df88a09b2d8b73a45824526c26e7f21836bbe0b111e1e8a6896c1a7fc8e03eb"
  }
}
```

### Response information

- out_no - string; hash identifier of transaction, containing the given multisig output.
- status - string; "OK" if the output was found, "NOT FOUND" if the requested output was not found.
- tx_id - string; hash identifier of output's source transaction.
  out_no — unsigned int; output local index in its source transaction.