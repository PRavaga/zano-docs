Retrieves details of alternative blocks in the blockchain, allowing for pagination through large datasets.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_alt_blocks_details",
  "params": {
    "count": 1,
    "offset": 0
  }
}
```
### Request description: 
```
    "count": The number of alternative blocks to retrieve from the specified offset.
    "offset": The offset in the list of alternative blocks from which to start retrieval.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "blocks": [{
      "actual_timestamp": 1557345925,
      "already_generated_coins": "17517253670000000000",
      "base_reward": 1000000000000,
      "blob": "",
      "block_cumulative_size": 6794,
      "block_tself_size": 0,
      "cumulative_diff_adjusted": "42413051198",
      "cumulative_diff_precise": "28881828324942",
      "difficulty": "951296929031",
      "effective_fee_median": 0,
      "height": 51,
      "id": "af05b814c75e10872afc0345108e830884bc4c32091db783505abe3dac9929cf",
      "is_orphan": false,
      "miner_text_info": "",
      "object_in_json": "",
      "penalty": 0,
      "pow_seed": "",
      "prev_id": "37fe382c755bb8869e4f5255f2aed6a8fb503e195bb4180b65b8e1450b84cafe",
      "summary_reward": 1001000000000,
      "this_block_fee_median": 1000000000,
      "timestamp": 1557345925,
      "total_fee": 1000000000,
      "total_txs_size": 6794,
      "transactions_details": [{
        "amount": 18999000000000,
        "attachments": [{
          "details_view": "",
          "short_view": "0feef5e2ea0e88b592c0a0e6639ce73e12ea9b3136d89464748fcb60bb6f18f5",
          "type": "pub_key"
        }],
        "blob": "ARMBgKCUpY0dBBoAAAAAAAAAABoCAAAAAAAAABoKAAAAAAAAABoPAAAAAAAAACVA4FRLH",
        "blob_size": 6794,
        "extra": [{
          "details_view": "",
          "short_view": "0feef5e2ea0e88b592c0a0e6639ce73e12ea9b3136d89464748fcb60bb6f18f5",
          "type": "pub_key"
        }],
        "fee": 1000000000,
        "id": "a6e8da986858e6825fce7a192097e6afae4e889cabe853a9c29b964985b23da8",
        "ins": [{
          "amount": 1000000000000,
          "global_indexes": [0,2,12,27],
          "htlc_origin": "",
          "kimage_or_ms_id": "2540e0544b1fed3b104976f803dbd83681335c427f9d601d9d5aecf86ef276d2",
          "multisig_count": 0
        }],
        "keeper_block": 51,
        "object_in_json": "ewogICJ2ZXJzaW9uIjogMSwgCiAgInZpbiI6IFsgewogICAgIC",
        "outs": [{
          "amount": 9000000000,
          "global_index": 0,
          "is_spent": false,
          "minimum_sigs": 0,
          "pub_keys": ["7d0c755e7e24a241847176c9a3cf4c970bcd6377018068abe6fe4535b23f5323"]
        }],
        "pub_key": "0feef5e2ea0e88b592c0a0e6639ce73e12ea9b3136d89464748fcb60bb6f18f5",
        "timestamp": 1557345925
      }],
      "type": 1
    }],
    "status": "OK"
  }
}
```
### Response description: 
```
    "blocks": List of alternative blocks with detailed information, retrieved based on the specified parameters.
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
        "attachments": Additional attachments to the transaction.
          "details_view": A detailed representation of the extra entry.
          "short_view": A concise representation of the extra entry.
          "type": Type of the extra entry in the transaction.
        "blob": Serialized form of the transaction, encoded in Base64.
        "blob_size": Size of the serialized transaction in bytes.
        "extra": Extra data associated with the transaction.
          "details_view": A detailed representation of the extra entry.
          "short_view": A concise representation of the extra entry.
          "type": Type of the extra entry in the transaction.
        "fee": Transaction fee in the smallest currency unit.
        "id": Hash of the transaction.
        "ins": Inputs of the transaction.
          "amount": The amount of coins being transacted.
          "global_indexes": List of global indexes indicating the outputs referenced by this input, where only one is actually being spent.
          "htlc_origin": Origin hash for HTLC (Hash Time Locked Contract).
          "kimage_or_ms_id": Contains either the key image for the input or the multisig output ID, depending on the input type.
          "multisig_count": Number of multisig signatures used, relevant only for multisig outputs.
        "keeper_block": Block height where the transaction is confirmed, or -1 if it is unconfirmed.
        "object_in_json": Serialized transaction represented in JSON, encoded in Base64.
        "outs": Outputs of the transaction.
          "amount": The output's amount, 0 for ZC outputs.
          "global_index": Global index of the output for this specific amount.
          "is_spent": Indicates whether the output has been spent.
          "minimum_sigs": Minimum number of signatures required to spend the output, for multisig outputs only.
          "pub_keys": List of public keys associated with the output.
        "pub_key": Public key associated with the transaction.
        "timestamp": Timestamp when the transaction was created.
      "type": Type of the block.
    "status": Status of the call.

```
<sub>Auto-doc built with: 2.1.5.397[2872515]</sub>