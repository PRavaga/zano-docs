Retrieve basic information about a multisig output using its unique identifier (hash).

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_multisig_info",
  "params": {
    "ms_id": ""
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
    "out_no": 0,
    "status": "OK",
    "tx_id": ""
}
}
```
### Response description: 
```
    "out_no": Local output index within the transaction.
    "status": Status of the call.
    "tx_id": Transaction ID where the multisig output is present, if found.

```
