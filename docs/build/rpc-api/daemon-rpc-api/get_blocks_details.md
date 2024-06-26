Retrieves detailed information about a sequence of blocks starting from a specific height.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_blocks_details",
  "params": {
    "count": 0,
    "height_start": 0,
    "ignore_transactions": false
}
}
```
### Request description: 
```
    "count": The number of blocks to retrieve from the starting height.
    "height_start": The starting block height from which block details are retrieved.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "blocks": [{
      "actual_timestamp": 0,
      "already_generated_coins": "",
      "base_reward": 0,
      "blob": "",
      "block_cumulative_size": 0,
      "block_tself_size": 0,
      "cumulative_diff_adjusted": "",
      "cumulative_diff_precise": "",
      "difficulty": "",
      "effective_fee_median": 0,
      "height": 0,
      "id": "",
      "is_orphan": false,
      "miner_text_info": "",
      "object_in_json": "",
      "penalty": 0,
      "pow_seed": "",
      "prev_id": "",
      "summary_reward": 0,
      "this_block_fee_median": 0,
      "timestamp": 0,
      "total_fee": 0,
      "total_txs_size": 0,
      "transactions_details": [{
        "amount": 0,
        "blob": "",
        "blob_size": 0,
        "fee": 0,
        "id": "",
        "keeper_block": 0,
        "object_in_json": "",
        "pub_key": "",
        "timestamp": 0
}],
      "type": 0
}],
    "status": "OK"
}
}
```
### Response description: 
```
    "blocks": List of blocks with detailed information, starting from the specified height.
      "actual_timestamp": Actual timestamp encoded in the block's extra data for PoS blocks.
      "already_generated_coins": Total amount of coins generated in the blockchain up to this block.
      "base_reward": Base mining reward for the block.
      "blob": Serialized form of the block.
      "block_cumulative_size": Cumulative size of the block including all transactions.
      "cumulative_diff_adjusted": Adjusted cumulative difficulty of the blockchain up to this block.
      "cumulative_diff_precise": Precise cumulative difficulty of the blockchain up to this block.
      "difficulty": Mining difficulty of the block.
      "height": Height of the block in the blockchain.
      "id": Unique identifier of the block.
      "is_orphan": Indicates whether the block is an orphan.
      "miner_text_info": Additional textual information provided by the miner of the block.
      "object_in_json": Serialized representation of the block in JSON format.
      "penalty": Penalty applied to the reward if the block is larger than median but not large enough to be rejected.
      "prev_id": Hash of the previous block in the chain.
      "summary_reward": Total reward for the block, including base reward and transaction fees (legacy).
      "this_block_fee_median": Median transaction fee of the transactions within this block.
      "timestamp": Timestamp when the block was created, in PoS blocks used for mining.
      "total_fee": Total transaction fees included in the block.
      "total_txs_size": Total size of all transactions included in the block.
      "transactions_details": Detailed information about each transaction included in the block.
        "amount": Total output amount of the transaction (legacy, for pre-Zarcanum txs).
        "blob": Serialized form of the transaction, encoded in Base64.
        "blob_size": Size of the serialized transaction in bytes.
        "fee": Transaction fee in the smallest currency unit.
        "id": Hash of the transaction.
        "keeper_block": Block height where the transaction is confirmed, or -1 if it is unconfirmed.
        "object_in_json": Serialized transaction represented in JSON, encoded in Base64.
        "pub_key": Public key associated with the transaction.
        "timestamp": Timestamp when the transaction was created.
      "type": Type of the block.
    "status": Status of the call.

```
