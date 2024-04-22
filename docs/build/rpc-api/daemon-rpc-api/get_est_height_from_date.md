Give an estimation of block height by the given date.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "",
  "method": "",
  "params": {
    "timestamp": 1711021795
}
}
```
### Request description: 
```
    "timestamp": Linux timestamp for the required date.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "",
  "method": "",
  "params": {
    "h": 2555000,
    "status": "OK"
}
}
```
### Response description: 
```
    "h": Estimated height of a block.
    "status": Status of the call.

```
