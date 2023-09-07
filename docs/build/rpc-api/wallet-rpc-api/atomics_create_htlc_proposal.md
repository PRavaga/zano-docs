Creates atomic swap proposal

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "atomics_create_htlc_proposal",
	"params": {
		"amount": 1,
		"counterparty_address": "",
		"lock_blocks_count": 1,
		"htlc_hash": ""
	}
}
```

### Request parameters

- amount - amount of the coins going into HTLC. Fee for redeem transaction will be withheld from this amount too.
- counterparty_address - an address of the other part of atomic swap process
- lock_blocks_count - amount of blocks, which define a period of time, allotted for the redeem operation. 1 block - 1 minute, 1440 blocks is est 1 day.
- htlc_hash - Hash of the secret, if this field specified, then HTLC created with this hash, if this is empty, then wallet will derive secret in deterministic way, and in response will be returned derived_origin_secret, which will be the key for redeem of this HTLC and, obviously, for HTLC created by counter-party in the other blockchain. At this moment by default RPC API in wallet support only sha256 as hashing for HTLC, but we also have implemented support of RIPEMD-160 in core and wallet, so if anyone need access to this hash, please make a issue in our github, and we'll be happy to enable support of this hash too.

---

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "result_tx_blob": "b329cce92a23fdaf89a5ad907ca9c4c1fbd052b79ec8414438533c83b39afc2bb329cce92a23fdaf89a5ad907ca9c4c1fbd052b79ec8414438533c83b39afc2bb329cce92a23fdaf89a5ad907ca9c4c1fbd052b79ec8414438533c83",
    "result_tx_id": "b329cce92a23fdaf89a5ad907ca9c4c1fbd052b79ec8414438533c83b39afc2b",
    "derived_origin_secret_as_hex": "fe42b8c4742d2dbe4d5de5ae5212f75acb62b75e4b66b758ff8e252825c2d7a5"
  }
}
```

### Response information

- result_tx_blob - Created and broadcasted transaction itself.
- result_tx_id - Created transaction id .
- derived_origin_secret_as_hex - If htlc_hash field in request was empty, then this field will keep secret, which was deterministically created by sender wallet(If wallet file was lost and recovered from backup with seed phrase, then secret for any particular HTLC created by this wallet will be possible to restore). This field is HEX-encoded, but sha256 supposed to be calculated from raw blob of this secret.