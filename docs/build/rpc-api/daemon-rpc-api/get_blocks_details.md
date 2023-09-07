Return blocks details for a specified range of heights.

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "get_blocks_details",
	"params": {
		"height_start": 1,
		"count": 1
	}
}
```

### Request parameters

- height_start - starting height
- count - number of blocks to be requested

---

### Response

```json
{
	"id": 0,
	"jsonrpc": "2.0",
	"result": {
		"blocks": [
			{
				"actual_timestamp": 1557342384,
				"already_generated_coins": "17517204000000000000",
				"base_reward": 1000000000000,
				"blob": "",
				"block_cumulative_size": 0,
				"block_tself_size": 0,
				"cumulative_diff_adjusted": "2",
				"cumulative_diff_precise": "1",
				"difficulty": "1",
				"effective_fee_median": 10000,
				"height": 1,
				"id": "901214ab938219f5b33b547008607aee14d29950a34834a2e9973b96269bd0b0",
				"is_orphan": false,
				"miner_text_info": "",
				"object_in_json": "{\n  \"major_version\": 0, \n  \"nonce\": 1532031558827332528, \n  \"prev_id\": \"cc608f59f8080e2fbfe3c8c80eb6e6a953d47cf2d6aebd345bada3a1cab99852\", \n  \"minor_version\": 0, \n  \"timestamp\": 1557342384, \n  \"flags\": 0, \n  \"miner_tx\": {\n    \"version\": 1, \n    \"vin\": [ {\n        \"gen\": {\n          \"height\": 1\n        }\n      }\n    ], \n    \"vout\": [ {\n        \"amount\": 1000000000000, \n        \"target\": {\n          \"key\": \"ffd231f5386282c281f58c8d578c95b429b1b8ed5bddd6472d58b911384cd99300\"\n        }\n      }\n    ], \n    \"extra\": [ {\n        \"pub_key\": \"24196c9ab3f827a586cc906a6133f0b4b0663eb15491fae33e9ade63d34ae398\"\n      }, {\n        \"extra_padding\": , \n        \"buff\": [ ]\n      }, {\n        \"etc_tx_flags16\": , \n        \"v\": 63119\n      }, {\n        \"unlock_time\": , \n        \"v\": 11\n      }, {\n        \"string\": 8\"8f3f4736b24f69a8\"\n      }], \n    \"signatures\": [ ], \n    \"attachment\": [ ]\n  }, \n  \"tx_hashes\": [ ]\n}",
				"penalty": 0,
				"pow_seed": "",
				"prev_id": "cc608f59f8080e2fbfe3c8c80eb6e6a953d47cf2d6aebd345bada3a1cab99852",
				"summary_reward": 1000000000000,
				"this_block_fee_median": 0,
				"timestamp": 1557342384,
				"total_fee": 0,
				"total_txs_size": 0,
				"transactions_details": [
					{
						"amount": 1000000000000,
						"blob": "",
						"blob_size": 96,
						"fee": 0,
						"id": "8d0fbc9ee9948bc74bf6b80914e95997e9769641f3a20ef963c4264922ac004b",
						"keeper_block": 1,
						"object_in_json": "",
						"pub_key": "24196c9ab3f827a586cc906a6133f0b4b0663eb15491fae33e9ade63d34ae398",
						"timestamp": 1557342384
					}
				],
				"type": 1
			}
		],
		"status": "OK"
	}
}
```

### Response parameters

- actual_timestamp — unsigned int; timestamp for the moment of block creation (for PoW blocks equal to timestamp, for PoS they differ).
- already_generated_coins — unsigned int; total number of coins generated, including this block.
- base_reward — unsigned int; base reward for the block (equal to reward if there are no transactions except the miner tx).
- blob
- block_cumulative_size — unsigned int; total size of block's transactions, in bytes. Miner tx is included in special cases.
- block_tself_size
- cumulative_diff_adjusted — unsigned int; cumulative PoS or PoW difficulty for the block, adjusted by the sequence factor (number of same type - blocks going sequentially one-by-one).
- cumulative_diff_precise — unsigned int; precise cumulative PoS or PoW difficulty for the block.
- difficulty — unsigned int; difficulty of the block.
- effective_fee_median — unsigned int; median of transaction fees within a specific window used in calculations for this block.
- height — unsigned int; block height.
- id — string; block hash identifier.
- is_orphan — boolean; orphan status for the block. False for normal blocks.
- miner_text_info — string; undefined text inserted by miner when the block was mined.
- object_in_json — string; JSON-serialized block object.
- penalty — unsigned int; difference between summary_reward and base_reward.
- pow_seed — some hex string .
- prev_id — string; hash identifier of the previous block.
- summary_reward — unsigned int; amount of coins this block has generated in miner tx.
- this_block_fee_median — unsigned int; median fee among the transactions for this block.
- timestamp — unsigned int; block timestamp (serves a special purpose for PoS blocks, which is why actual_timestamp should be used as actual block timestamp).
- total_fee — unsigned int; sum of transaction fees in this block.
- total_txs_size — unsigned int; total transaction size in this block (excluding the miner tx).
- transactions_details — array of tx_rpc_extended_info objects (see below get_tx_details description).
    - amount
    - blob
    - blob_size
    - fee
    - id
    - keeper_block
    - object_in_json
    - pub_key
    - timestamp
- type — unsigned int; 0 if this is PoS block, 1 if this is PoW block 