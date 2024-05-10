Obtain basic information about the transaction pool.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_pool_info",
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
    "error_code": "",
    "status": "OK"
}
}
```
### Response description: 
```
    "error_code": Error code, if there's any error (optional).
    "status": Status code, OK if succeeded.

```
