Adds new block to the blockchain. Request should contain one string with hex-encoded block blob.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "submitblock",
  "params": [""]
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
<sub>Auto-doc built with: 2.1.5.397[2872515]</sub>