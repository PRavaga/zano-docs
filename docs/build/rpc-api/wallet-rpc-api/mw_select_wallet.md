Select curent active wallet, after that all wallet RPC call would be addressed to this wallet

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "",
  "method": "",
  "params": {
    "wallet_id": 2
}
}
```
### Request description: 
```
    "wallet_id": Wallet id

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
    "status": Result (OK if success)

```
