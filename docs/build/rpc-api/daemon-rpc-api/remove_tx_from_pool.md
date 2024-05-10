Removes specified transactions from the transaction pool, typically to clear out transactions that are no longer valid or needed.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "remove_tx_from_pool",
  "params": {
}
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
    "status": "OK"
}
}
```
### Response description: 
```
    "status": Status of the call.

```
