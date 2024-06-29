Retrieves a list of all transaction IDs currently in the transaction pool.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_all_pool_tx_list",
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
    "ids": [""],
    "status": "OK"
  }
}
```
### Response description: 
```
    "ids": List of all transaction IDs currently in the transaction pool.
    "status": Status of the call.

```
