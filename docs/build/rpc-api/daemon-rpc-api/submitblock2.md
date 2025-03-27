Adds new block to the blockchain.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "submitblock2",
  "params": {
    "b": "030000000000000000ae73338b7926258a2b5ee340700",
    "explicit_txs": [{
      "blob": "36323538613262356565376139633230"
    },{
      "blob": "38653066306132636565333430373030"
    }]
  }
}
```
### Request description: 
```
    "b": Hex-encoded serialized block.
    "explicit_txs": List of hex-encoded transactions to be explicitly included in the block.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "status": "OK"
  }
}
```
### Response description: 
```
    "status": Status of the call.

```
