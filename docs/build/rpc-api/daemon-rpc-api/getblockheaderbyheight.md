Retrieves the block header information for a given block height.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "getblockheaderbyheight",
  "params": {
    "height": 0
}
}
```
### Request description: 
```
    "height": The height of the block for which the header information is being requested.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "block_header": {
      "depth": 0,
      "difficulty": "",
      "hash": "",
      "height": 0,
      "major_version": 0,
      "minor_version": 0,
      "nonce": 0,
      "orphan_status": false,
      "prev_hash": "",
      "reward": 0,
      "timestamp": 0
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
