Returns the total number of blocks in the blockchain (the height of the top block plus one).

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "getblockcount",
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
    "count": 0,
    "status": "OK"
}
}
```
### Response description: 
```
    "count": The total number of blocks in the blockchain, equivalent to the top block's height plus one.
    "status": Status of the call.

```
