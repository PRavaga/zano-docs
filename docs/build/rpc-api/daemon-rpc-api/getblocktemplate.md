Generates a block template for mining, intended for both PoW and PoS types of blocks based on the provided parameters.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "getblocktemplate",
  "params": {
    "explicit_transaction": "5fa8eaaf231a305053260ff91d69c6ef1ecbd0f5",
    "extra_text": "OMG, you can't just ask people why they're PoW-maxi",
    "pe": {
      "amount": 0,
      "block_timestamp": 0,
      "g_index": 0,
      "keyimage": "\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000",
      "stake_unlock_time": 0,
      "tx_id": "0000000000000000000000000000000000000000000000000000000000000000",
      "tx_out_index": 0
    },
    "pos_block": false,
    "stakeholder_address": "",
    "wallet_address": "ZxCSpsGGeJsS8fwvQ4HktDU3qBeauoJTR6j73jAWWZxFXdF7XTbGm4YfS2kXJmAP4Rf5BVsSQ9iZ45XANXEYsrLN2L2W77dH7"
  }
}
```
### Request description: 
```
    "explicit_transaction": A transaction blob that must be explicitly included in the block.
    "extra_text": Arbitrary data added to the extra field of the miner transaction.
    "pe": PoS entry details, relevant only for PoS block generation.
    "pos_block": Flag indicating whether the block is a PoS block.
    "stakeholder_address": Address where the stake is returned for PoS blocks (usually the same as 'wallet_address').
    "wallet_address": Address where mining rewards will be deposited.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "block_reward": 1000000000000,
    "block_reward_without_fee": 1000000000000,
    "blocktemplate_blob": "030000000000000000ae73338b792......6258a2b5ee340700",
    "difficulty": "12936195379842",
    "height": 2555002,
    "miner_tx_tgc": {
      "amount_blinding_masks": "",
      "amount_blinding_masks_sum": "0000000000000000000000000000000000000000000000000000000000000000",
      "amount_commitments": "",
      "amount_commitments_sum": "00000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "amounts": "",
      "ao_amount_blinding_mask": "0000000000000000000000000000000000000000000000000000000000000000",
      "ao_amount_commitment": "00000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "ao_asset_id": "0000000000000000000000000000000000000000000000000000000000000000",
      "ao_asset_id_pt": "00000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "ao_commitment_in_outputs": "00",
      "asset_id_blinding_mask_x_amount_sum": "0000000000000000000000000000000000000000000000000000000000000000",
      "asset_id_blinding_masks": "",
      "asset_ids": "",
      "blinded_asset_ids": "",
      "pseudo_out_amount_blinding_masks_sum": "0000000000000000000000000000000000000000000000000000000000000000",
      "pseudo_out_amount_commitments_sum": "00000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "pseudo_outs_blinded_asset_ids": "",
      "pseudo_outs_plus_real_out_blinding_masks": "",
      "real_in_asset_id_blinding_mask_x_amount_sum": "0000000000000000000000000000000000000000000000000000000000000000",
      "real_zc_ins_asset_ids": "",
      "tx_key": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "tx_pub_key_p": "00000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    },
    "prev_hash": "ae73338b7927df71b6ed477937625c230172219306750ba97995fb5109dda703",
    "seed": "0518e1373ff88ccabb28493cac10cb0731313135d880dae0d846be6016ab9acf",
    "status": "OK",
    "txs_fee": 0
  }
}
```
### Response description: 
```
    "block_reward": Total block reward, including transaction fees if they are given to the miner (legacy), or the base reward if fees are burnt (current state).
    "block_reward_without_fee": Base block reward excluding any transaction fees.
    "blocktemplate_blob": Serialized block template blob.
    "difficulty": The mining difficulty targeted by the block template.
    "height": The height of the block template in the blockchain.
    "miner_tx_tgc": Miner transaction generation context. Intended for PoS blocks and Zarcanum.
    "prev_hash": Hash of the previous block in the chain.
    "seed": Seed value for the ProgPoWZ mining algorithm's epoch.
    "status": Status of the call.
    "txs_fee": Total fees from transactions included in the block.

```
<sub>Auto-doc built with: 2.1.5.397[bd05907]</sub