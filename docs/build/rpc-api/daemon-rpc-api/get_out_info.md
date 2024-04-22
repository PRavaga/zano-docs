Returns transaction ID and local output index for a given output amount and its global index.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_out_info",
  "params": {
    "amount": 0,
    "i": 0
}
}
```
### Request description: 
```
    "amount": The specific amount of output to query.
    "i": The global index of the output amount to be queried.

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
    "tx_id": Transaction ID where the queried output is present, if found.

```
