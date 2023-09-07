Shows the list of active proposals

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "atomics_get_list_of_active_htlc",
	"params": {
		"income_redeem_only": true
	}
}
```

### Request parameters

- income_redeem_only - Shows only incoming HTLCs, ie only those contracts which might be redeemed by this wallet.

---

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "htlcs": {
      "counterparty_address": "ZxBvJDuQjMG9R2j4WnYUhBYNrwZPwuyXrC7FHdVmWqaESgowDvgfWtiXeNGu8Px9B24pkmjsA39fzSSiEQG1ekB225ZnrMTBp",
      "sha256_hash": "8ee7377d6ee3632ea5b43bed2a5ea41c035abb3fe6146aec63e6c5cbbc4257f1",
      "tx_id": "018c8bcf749063ee4a8127b84586a03f9bbd1909d9e5cfdb92007ebc463462d4",
      "amount": 100000,
      "is_redeem": "true"
    }
  }
}
```

### Response information

- counterparty_address - Address of the party created HTLC
- sha256_hash - Hash of the HTLC, by default sha256
- tx_id - ID of transaction carrying this HTLC(this ID needed for call of atomics_redeem_htlc)
- amount - Amount being transfered by this HTLC
- is_redeem - define, if this HTLC is incoming with respect to the current wallet