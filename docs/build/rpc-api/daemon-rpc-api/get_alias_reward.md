Retrieves the cost of registering an alias on the blockchain.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "",
  "method": "",
  "params": {
    "alias": ""
}
}
```
### Request description: 
```
    "alias": The alias name for which the registration cost is being queried.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "",
  "method": "",
  "params": {
    "reward": 0,
    "status": "OK"
}
}
```
### Response description: 
```
    "reward": The registration cost for the specified alias.
    "status": Status of the call.

```
