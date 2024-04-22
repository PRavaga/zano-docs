Retrieves details of alternative blocks in the blockchain, allowing for pagination through large datasets.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "",
  "method": "",
  "params": {
    "count": 0,
    "offset": 0
}
}
```
### Request description: 
```
    "count": The number of alternative blocks to retrieve from the specified offset.
    "offset": The offset in the list of alternative blocks from which to start retrieval.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "",
  "method": "",
  "params": {
    "status": "OK"
}
}
```
### Response description: 
```
    "status": Status of the call.

```
