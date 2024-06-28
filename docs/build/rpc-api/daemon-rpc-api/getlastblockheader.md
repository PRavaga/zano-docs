Returns the block header information of the most recent block.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "getlastblockheader",
  "params": [""]
}
```
### Request description: 
```

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "block_header": {
      "depth": 0,
      "difficulty": "1849593878843995770114",
      "hash": "f5df39c4b1590394976aa6e72f04df7836e22dbdfc1e6f61f6cc1b624d83cd94",
      "height": 2697404,
      "major_version": 3,
      "minor_version": 0,
      "nonce": 0,
      "orphan_status": false,
      "prev_hash": "a1b4359c02985720b0cf542678e08f0d4075e518fbd0cd54bd280269545e0e6f",
      "reward": 0,
      "timestamp": 1719588270
},
    "status": "OK"
}
}
```
### Response description: 
```
    "block_header": Detailed header information of the block.
      "depth": Depth of the block in the blockchain. Depth 0 indicates the most recent block.
      "difficulty": Network difficulty target that the block met.
      "hash": Hash of the block.
      "height": Height of the block in the blockchain.
      "major_version": Major version of the block.
      "minor_version": Minor version of the block.
      "nonce": Nonce used for generating the block to meet the network difficulty.
      "orphan_status": Indicates if the block is an orphan (true) or a normal block (false).
      "prev_hash": Hash of the previous block in the chain.
      "reward": Total mining reward of the block including transaction fees (if applicable).
      "timestamp": Timestamp of the block creation.
    "status": Status of the call.

```
