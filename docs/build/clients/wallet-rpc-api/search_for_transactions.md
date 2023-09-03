Gets list of incoming or outgoing transfers by a given payment ID

### Request

```json
{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "search_for_transactions",
	"params": {
		"tx_id": "",
		"in": true,
		"out": false,
		"pool": false,
		"filter_by_height": false,
		"min_height": 1,
		"max_height": 1
	}
}
```

- tx_id - hash of a transaction, if specified then only that tx will be returned (if it passes the filters)in - bool; include incomin txs in response
- in - if true then incoming transactions will be taken into account
- out - if true then outgoing transactions will be taken into account
- pool - if true, unconfirmed transactions from the pool will be taken into account as well
- filter_by_height - if true, transactions will be filtered by block height using min_height and max_height
- min_height - minimum block height (including)
- max_height - maximum block height (including)

--- 

:::danger ㅤ
This request has been shortened for the sake of the example, a real response will return many more aliases.
:::

### Response

```json
{
	"id": 0,
	"jsonrpc": "2.0",
	"result": {
		"in": [
			{
				"amount": 100000000000000,
				"comment": "twitter thread contest kekz",
				"fee": 0,
				"height": 2108980,
				"is_income": true,
				"is_mining": false,
				"is_mixing": false,
				"is_service": false,
				"payment_id": "",
				"remote_addresses": [
					"aZxb4c9AMKP2rzg9JnJpV8M9Lm7MRiSoQSV9BJrJ4BVo9xTUw5JQoS4DjNzAcjfQsxRPJ38nWNh9c7w4UuZ7NCYxRvkgRbqEng9"
				],
				"show_sender": false,
				"td": {
					"rcv": [
						100000000000000
					]
				},
				"timestamp": 1684249681,
				"transfer_internal_index": 0,
				"tx_blob_size": 608,
				"tx_hash": "41ec870cb4d03e62193f7b57cd4485c579441d009a9e44a31abc5b392a5991e3",
				"tx_type": 0,
				"unlock_time": 0
			}
		]
	}
}
```

### Response information

- amount - integer; amount of coins in atomic units;
- comment - string; an optional comment set by the sender;
- fee - integer; transaction fee in atomic units;
- height - integer; height of the block containing corresponding transaction;
- is_income - Boolean; true if this is incoming transfer;
- is_mining - Boolean; true if this is a miner (i.e. coinbase) tx;
- is_mixing - Boolean; true if this tx is using mixins;
- is_service - Boolean; true if this is a special service tx, not a normal one;
- payment_id - string; (optional) hex-encoded payment identifier;
- remote_addresses - list of strings; (optional) sender address(es);
- show_sender - Boolean; true if sender address info is present;
- td - a wallet_transfer_info_details object;
    - rcv - list of integers; received amounts in atomic units;
- timestamp - integer; Unix timestamp when the tx was received;
- transfer_internal_index -
- tx_blob_size -
- tx_hash - string; transaction’s hash.
- tx_type -
- unlock_time - unlock_time — unsigned int; if nonzero — unix timestamp since then this transfer’s coins can be spent. If it is less than 500000000, the value is treated as a minimum block height at which this transfer’s coin can be spent.