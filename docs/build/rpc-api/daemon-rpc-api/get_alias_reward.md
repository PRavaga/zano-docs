Retrieves the cost of registering an alias on the blockchain.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_alias_reward",
  "params": {
    "alias": "zxdya6q6whzwqjkmtcsjpc3ku"
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
  "jsonrpc": "2.0",
  "result": {
    "reward": 100000000000,
    "status": "OK"
  }
}
```
### Response description: 
```
    "reward": The registration cost for the specified alias.
    "status": Status of the call.

```
<sub>Auto-doc built with: 2.1.5.397[2872515]</sub>