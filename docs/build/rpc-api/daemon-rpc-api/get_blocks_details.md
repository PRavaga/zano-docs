Retrieves detailed information about a sequence of blocks starting from a specific height.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "",
  "method": "",
  "params": {
    "count": 0,
    "height_start": 0,
    "ignore_transactions": false
}
}
```
### Request description: 
```
    "count": The number of blocks to retrieve from the starting height.
    "height_start": The starting block height from which block details are retrieved.

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
