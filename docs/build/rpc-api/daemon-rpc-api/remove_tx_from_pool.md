Removes specified transactions from the transaction pool, typically to clear out transactions that are no longer valid or needed.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "remove_tx_from_pool",
  "params": {
    "tx_to_remove": ["c5efacd06128fc5a73f58392c84534cd1a146de7d47ffbe770486cce5130dc1f","c2f0de2ef4753dc0ec8dd2da5ebf8e77f07d2ac0791357a9e3f2537071b33762"]
  }
}
```
### Request description: 
```
    "tx_to_remove": List of transaction IDs that are to be removed from the transaction pool.

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
<sub>Auto-doc built with: 2.1.5.397[bd05907]</sub