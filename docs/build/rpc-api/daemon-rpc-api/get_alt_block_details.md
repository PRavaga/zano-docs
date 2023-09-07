Returns block details for a specified identifier. Only for blocks in alternative chains.

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "get_alt_block_details",
	"params": {
		"id": "498cafd7ae8d7a82abd5267a005ce01482d5580eddd9805dd0162e465cacb7df"
	}
}
```

### Request parameters

- id - hash identifier for a block.

---

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "block_details": {
      "actual_timestamp": 1558705296,
      "already_generated_coins": "0",
      "base_reward": 1000000000000,
      "blob": "",
      "block_cumulative_size": 0,
      "block_tself_size": 0,
      "cumulative_diff_adjusted": "47701129767973676",
      "cumulative_diff_precise": "12602457701330728735458",
      "difficulty": "2053263042953598309",
      "effective_fee_median": 0,
      "height": 23138,
      "id": "5391963eb274af8391fa89bc711122b5db9b6c3703cb8865d45505f919f9842b",
      "is_orphan": true,
      "miner_text_info": "1.0.31[29c0487]",
      "object_in_json": "...",
      "penalty": 0,
      "pow_seed": "",
      "prev_id": "62c3d7a0a2f7d253b78a8e48dc0407e7d8f0d26b4fdb8b52687b07a7c4020ba9",
      "summary_reward": 1000000000000,
      "this_block_fee_median": 0,
      "timestamp": 1558705800,
      "total_fee": 0,
      "total_txs_size": 0,
      "transactions_details": [
        {
          "amount": 2000000000000,
          "blob": "",
          "blob_size": 203,
          "extra": [
            {
              "datails_view": "",
              "short_view": "7eaeb2490d85b17773b30ffe9f32fce50a1e89ee5ed258531e6b66ae13b00327",
              "type": "pub_key"
            },
            {
              "datails_view": "312e302e33315b323963303438375d",
              "short_view": "15 bytes",
              "type": "user_data"
            },
            {
              "datails_view": "",
              "short_view": "0 bytes",
              "type": "extra_padding"
            },
            {
              "datails_view": "cefd",
              "short_view": "cefd",
              "type": "XOR"
            },
            {
              "datails_view": "",
              "short_view": "height: 23148",
              "type": "unlock_time"
            },
            {
              "datails_view": "",
              "short_view": "timestamp: 1558705296 Fri, 24 May 2019 13:41:36 GMT",
              "type": "pos_time"
            }
          ],
          "fee": 0,
          "id": "a88f4ae2a89d5cbf9a76946785b6b45e898177cc0acd0b9c6ec5e35ccd73d9e8",
          "ins": [
            {
              "amount": 0,
              "kimage_or_ms_id": "",
              "multisig_count": 0
            },
            {
              "amount": 1000000000000,
              "global_indexes": [
                32159
              ],
              "kimage_or_ms_id": "5125de7598e723efba04d83258f31a3b30b21ed036f8e52b0669b12b93264267",
              "multisig_count": 0
            }
          ],
          "keeper_block": 0,
          "object_in_json": "",
          "outs": [
            {
              "amount": 1000000000000,
              "global_index": 0,
              "is_spent": false,
              "minimum_sigs": 0,
              "pub_keys": [
                "6acb06f7e4916d38ecafb537065e4dedaf0949fd49787fad55256770eaa8b029"
              ]
            },
            {
              "amount": 1000000000000,
              "global_index": 0,
              "is_spent": false,
              "minimum_sigs": 0,
              "pub_keys": [
                "c5179786faf5fe9f0d2adfcf6c9b069aae0e1393b771efddef8efade4bb4ce73"
              ]
            }
          ],
          "pub_key": "7eaeb2490d85b17773b30ffe9f32fce50a1e89ee5ed258531e6b66ae13b00327",
          "timestamp": 1558705296
        }
      ],
      "type": 0
    },
    "status": "OK"
  }
}
```

### Response information

- see get_blocks_details method for more details.