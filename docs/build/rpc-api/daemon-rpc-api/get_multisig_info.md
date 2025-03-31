Retrieve basic information about a multisig output using its unique identifier (hash).

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_multisig_info",
  "params": {
    "ms_id": "a6e8da986858e6825fce7a192097e6afae4e889cabe853a9c29b964985b23da8"
  }
}
```
### Request description: 
```
    "ms_id": The multisig output's unique identifier (hash).

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "out_no": 11,
    "status": "OK",
    "tx_id": "a88541e38d64f87c41b9153412d1d7667f6e4337fe429ed1374722355fa7b423"
  }
}
```
### Response description: 
```
    "out_no": Local output index within the transaction.
    "status": Status of the call.
    "tx_id": Transaction ID where the multisig output is present, if found.

```
<sub>Auto-doc built with: 2.1.5.397[2872515]</sub>