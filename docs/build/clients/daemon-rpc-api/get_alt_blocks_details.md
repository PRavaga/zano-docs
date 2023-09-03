Returns alternative blocks details for a specified range.

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "get_alt_blocks_details",
	"params": {
		"offset": 1,
		"count": 1
	}
}
```

### Request parameters

- offset - starting offset in the global list of alternative blocks
- count - number of blocks to be requested

---

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "blocks": [{
      "actual_timestamp": 1537462404,
      "already_generated_coins": 0,
      "base_reward": 0,
      "blob": "",
      "block_cumulative_size": 0,
      ....
    },{
      "actual_timestamp": 1537462619,
      "already_generated_coins": 0,
      "base_reward": 0,
      "blob": "",
      "block_cumulative_size": 0,
      ....
    }],
    "status": "OK"
  }
}
```

### Response information

- see get_blocks_details method for more details.