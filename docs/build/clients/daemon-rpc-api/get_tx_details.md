Returns transaction details by specified transaction hash identifier.

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "get_tx_details",
	"params": {
		"tx_hash": "ee25a5503726368eef558737f81f15fdc5f1e705b678df81315c83d8789ed4b3"
	}
}
```

### Request parameters

- tx_hash - hash identifier of a transaction

---

### Response

```json
{
	"id": 0,
	"jsonrpc": "2.0",
	"result": {
		"status": "OK",
		"tx_info": {
			"amount": 50000000000000,
			"attachments": [
				{
					"datails_view": "ei���(�",
					"short_view": "P:",
					"type": "service"
				}
			],
			"blob": "",
			"blob_size": 5377,
			"extra": [
				{
					"datails_view": "",
					"short_view": "(encrypted)",
					"type": "payer"
				},
				{
					"datails_view": "",
					"short_view": "(encrypted)",
					"type": "receiver"
				},
				{
					"datails_view": "",
					"short_view": "76a7575f488a5a32a766fc5da6d190cab4e90b1ab6d0178eed622a79e922a70d",
					"type": "pub_key"
				},
				{
					"datails_view": "0000",
					"short_view": "0000",
					"type": "FLAGS16"
				},
				{
					"datails_view": "derivation_hash: 1c6e466c\nencrypted_key_derivation: 3d4cf9081c1abea76b595f7226a7d12faa596d33c93f16f4bbfb8856c4895ea9",
					"short_view": "derivation_hash: 1c6e466c",
					"type": "crypto_checksum"
				},
				{
					"datails_view": "2013",
					"short_view": "2 bytes",
					"type": "derivation_hint"
				},
				{
					"datails_view": ", \n\"sz\": 16, \n\"hsh\": \"eb9562934daa508c1f0d5a91cbe9322f0e363287676ab4398f65c9cb5bae8a99\", \n\"cnt\": 1",
					"short_view": "16 bytes",
					"type": "attachment_info"
				}
			],
			"fee": 10000000000,
			"id": "ee25a5503726368eef558737f81f15fdc5f1e705b678df81315c83d8789ed4b3",
			"ins": [
				{
					"amount": 40000000000000,
					"global_indexes": [
						1471,
						2212,
						2224,
						2231,
						2410,
						2508,
						2689,
						2823,
						2969,
						3017,
						3379
					],
					"htlc_origin": "",
					"kimage_or_ms_id": "e254e999afba8b58a608b2634a9420652b7ad084f27bc1a54328c67ea3a9ccad",
					"multisig_count": 0
				},
				{
					"amount": 5000000000000,
					"global_indexes": [
						1075,
						1298,
						12282,
						12776,
						14376,
						15954,
						16160,
						17428,
						18450,
						24724,
						27140
					],
					"htlc_origin": "",
					"kimage_or_ms_id": "b4bbead78a93497bfc6e824f8912cde9293094086f8b9a1ece7a1de86bbe78b2",
					"multisig_count": 0
				},
				{
					"amount": 4000000000000,
					"global_indexes": [
						1426,
						1664,
						3516,
						4478,
						6674,
						7302,
						9144,
						10512,
						12721,
						13115,
						16637
					],
					"htlc_origin": "",
					"kimage_or_ms_id": "8e59f6489a30ec67742dc81ab183b97f8a77bd9417f1a3d2578cf4091d32c564",
					"multisig_count": 0
				},
				{
					"amount": 900000000000,
					"global_indexes": [
						15912,
						18039,
						19507,
						20049,
						23693,
						24192,
						24966,
						31687,
						42782,
						43082,
						48814
					],
					"htlc_origin": "",
					"kimage_or_ms_id": "3a684270c3ec0a32ed15123a17bd7f29ff0ee3ad2500831cbbc570f7b20b8c0e",
					"multisig_count": 0
				},
				{
					"amount": 90000000000,
					"global_indexes": [
						67559,
						76419,
						87859,
						117969,
						119009,
						126366,
						136622,
						161655,
						215760,
						229083,
						250363
					],
					"htlc_origin": "",
					"kimage_or_ms_id": "61ff1dfb6b724c3dba0c16859aa72d014be37c92a44a7b48a17d8ae92d41030a",
					"multisig_count": 0
				},
				{
					"amount": 20000000000,
					"global_indexes": [
						13363,
						17153,
						34369,
						46685,
						65871,
						75813,
						93056,
						97252,
						113935,
						120851,
						133386
					],
					"htlc_origin": "",
					"kimage_or_ms_id": "ec65b4482a5f8e49e09303da57f4054f19e68f4a4aeab935bca62a9d4297def7",
					"multisig_count": 0
				}
			],
			"keeper_block": 2110251,
			"object_in_json": "",
			"outs": [
				{
					"amount": 50000000000000,
					"global_index": 3950,
					"is_spent": false,
					"minimum_sigs": 0,
					"pub_keys": [
						"e04eda49011a30b81629a279285ffda8d69e712b438ecfcc094a26481d8663de"
					]
				}
			],
			"pub_key": "76a7575f488a5a32a766fc5da6d190cab4e90b1ab6d0178eed622a79e922a70d",
			"timestamp": 1684328300
		}
	}
}
```

### Response information

- amount - unsigned int; sum of transaction outputs.
- attachments - array of objects; list of transaction attachments.
- blob_size - unsigned int; size of serialized transaction in bytes.
- extra - array of objects; list of extra items.
- fee - unsigned int; transaction fee.
- id - string; hash identifier of the transaction.
- ins - array of objects; list of inputs.
- keeper_block - unsigned int; height of the block containing this transaction.
- object_in_json -
- outs
    - amount -
    - global_index -
    - is_spent -
    - minimum_sigs -
    - pub_keys -
- pub_key - string; transaction public key.
- timestamp - unsigned int; actual timestamp of the block containing this transaction.