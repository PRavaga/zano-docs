Retrieves information about outputs in recent blocks that are targeted for the given address with the corresponding secret view key.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "find_outs_in_recent_blocks",
  "params": {
    "address": "ZxCSpsGGeJsS8fwvQ4HktDU3qBeauoJTR6j73jAWWZxFXdF7XTbGm4YfS2kXJmAP4Rf5BVsSQ9iZ45XANXEYsrLN2L2W77dH7",
    "blocks_limit": 1711021795,
    "viewkey": "5fa8eaaf231a305053260ff91d69c6ef1ecbd0f5"
  }
}
```
### Request description: 
```
    "address": Target address for which outputs are being searched
    "blocks_limit": Block count limit. If 0, only the transaction pool will be searched. Maximum and default is 5.
    "viewkey": Secret view key corresponding to the given address.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "blockchain_top_block_height": 2555000,
    "blocks_limit": 5,
    "outputs": [{
      "amount": 1000000000000,
      "asset_id": "cc4e69455e63f4a581257382191de6856c2156630b3fba0db4bdd73ffcfb36b6",
      "output_tx_index": 2,
      "tx_block_height": 2555000,
      "tx_id": "a6e8da986858e6825fce7a192097e6afae4e889cabe853a9c29b964985b23da8"
    }],
    "status": "OK"
  }
}
```
### Response description: 
```
    "blockchain_top_block_height": Height of the most recent block in the blockchain.
    "blocks_limit": Used limit for block count.
    "outputs": List of found outputs.
      "amount": The amount of the output.
      "asset_id": Asset ID of the output.
      "output_tx_index": Index of the output in the transaction.
      "tx_block_height": Block height where the transaction is present.
      "tx_id": Transaction ID where the output is present, if found.
    "status": Status of the call.

```
