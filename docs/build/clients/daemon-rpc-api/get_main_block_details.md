Returns block details for a specified identifier. Only for main chain blocks.

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "get_main_block_details",
	"params": {
		"id": "498cafd7ae8d7a82abd5267a005ce01482d5580eddd9805dd0162e465cacb7df"
	}
}
```

- id - hash identifier for a block.

---

### Response

```json
{
	"id": 0,
	"jsonrpc": "2.0",
	"result": {
		"block_details": {
			"actual_timestamp": 1684411963,
			"already_generated_coins": "13723707515881367168",
			"base_reward": 1000000000000,
			"blob": "",
			"block_cumulative_size": 13786,
			"block_tself_size": 0,
			"cumulative_diff_adjusted": "2832707833905824613",
			"cumulative_diff_precise": "1273127049356910428816679621",
			"difficulty": "2128820872519086150618",
			"effective_fee_median": 10000000000,
			"height": 2111653,
			"id": "498cafd7ae8d7a82abd5267a005ce01482d5580eddd9805dd0162e465cacb7df",
			"is_orphan": false,
			"miner_text_info": "",
			"object_in_json": "{\n  \"major_version\": 2, \n  \"nonce\": 0, \n  \"prev_id\": \"5c4fd7994c0fbdb419def7afc89fd7914e8f5b07daf6d8bf92cdf85c6dc83840\", \n  \"minor_version\": 0, \n  \"timestamp\": 1684410675, \n  \"flags\": 1, \n  \"miner_tx\": {\n    \"version\": 1, \n    \"vin\": [ {\n        \"gen\": {\n          \"height\": 2111653\n        }\n      }, {\n        \"key\": {\n          \"amount\": 900000000000000, \n          \"key_offsets\": [ {\n              \"uint64_t\": 18826\n            }\n          ], \n          \"k_image\": \"c4f3351243326f66c1ba6fc5b744d8295992de2c210e28243a221092f3977fe9\", \n          \"etc_details\": [ ]\n        }\n      }], \n    \"vout\": [ {\n        \"amount\": 30000000000, \n        \"target\": {\n          \"key\": \"7efc881ec1c060ca9a066ca6a5afcdc48537d74e1bfbaa068cf40cdb10cb086400\"\n        }\n      }, {\n        \"amount\": 1000000000000, \n        \"target\": {\n          \"key\": \"b4b2021f61cf1a8db85edc27832afc25ab469b962d684fc00699dfa282c9448200\"\n        }\n      }, {\n        \"amount\": 900000000000000, \n        \"target\": {\n          \"key\": \"d732ccf5d481e5fd834924fa0a3bab6ff51b9dd7064e675f160a4f4253cb91bd00\"\n        }\n      }\n    ], \n    \"extra\": [ {\n        \"pub_key\": \"c093b0757ecae81a8322140aed69759faa200836ac4a4f32c9633ba32a8d488b\"\n      }, {\n        \"extra_padding\": , \n        \"buff\": [ ]\n      }, {\n        \"derivation_hint\": , \n        \"msg\": 2\"98ee\"\n      }, {\n        \"unlock_time\": , \n        \"v\": 2111663\n      }, {\n        \"attachment\": , \n        \"service_id\": 1\"64\", \n        \"instruction\": 0\"\", \n        \"body\": 8\"3b16666400000000\", \n        \"security\": [ ], \n        \"flags\": 0\n      }], \n    \"signatures\": [ [ \"d030c37a1feae460f3d15c146ec092abc54d3858d1c58d8d03c1148d5b953b0ee70f0633a95696b54f01f550f83b2b04b75e128f2fdc3ac53c3f4a3b934eda08\"\n      ]\n    ], \n    \"attachment\": [ ]\n  }, \n  \"tx_hashes\": [ \"6348ae8c649404d26cbee8e0edbad018b64051499b4e1c02567862a1a74a5a3a\", \"a9492df7468241c1b26ab59abf600cbf336281992afd5c896cbc1f5f7336895b\", \"a5b06721f8d36d6e654fce9fbfaa7366499a46f1f98c2a47d79dd55a4c9653ac\"\n  ]\n}",
			"penalty": 0,
			"pow_seed": "",
			"prev_id": "5c4fd7994c0fbdb419def7afc89fd7914e8f5b07daf6d8bf92cdf85c6dc83840",
			"summary_reward": 1030000000000,
			"this_block_fee_median": 10000000000,
			"timestamp": 1684410675,
			"total_fee": 30000000000,
			"total_txs_size": 13786,
			"transactions_details": [
				{
					"amount": 901030000000000,
					"blob": "",
					"blob_size": 241,
					"fee": 0,
					"id": "de6b824024bbf3ab1240f86122d93a0f3b9e539026e58c9ca40937bbd54bfd04",
					"keeper_block": 2111653,
					"object_in_json": "",
					"pub_key": "c093b0757ecae81a8322140aed69759faa200836ac4a4f32c9633ba32a8d488b",
					"timestamp": 1684411963
				},
				{
					"amount": 1390000000000,
					"blob": "",
					"blob_size": 2131,
					"fee": 10000000000,
					"id": "6348ae8c649404d26cbee8e0edbad018b64051499b4e1c02567862a1a74a5a3a",
					"keeper_block": 2111653,
					"object_in_json": "",
					"pub_key": "116316309f51a8007ae95f8fa1aa54ad6de4357b7d9c2e4c12dad919b7fce578",
					"timestamp": 1684411963
				},
				{
					"amount": 1390000000000,
					"blob": "",
					"blob_size": 2171,
					"fee": 10000000000,
					"id": "a9492df7468241c1b26ab59abf600cbf336281992afd5c896cbc1f5f7336895b",
					"keeper_block": 2111653,
					"object_in_json": "",
					"pub_key": "feecb2ae6efb4e03e392b4f33f512c1a36632346978c478d15cd3eee33708255",
					"timestamp": 1684411963
				},
				{
					"amount": 10000000000000,
					"blob": "",
					"blob_size": 9484,
					"fee": 10000000000,
					"id": "a5b06721f8d36d6e654fce9fbfaa7366499a46f1f98c2a47d79dd55a4c9653ac",
					"keeper_block": 2111653,
					"object_in_json": "",
					"pub_key": "e66ad0eaf2a11e3325a12c7e5bd4cdeba1e3cc82396b50ae6cc2ad71d9cd542f",
					"timestamp": 1684411963
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