Remove given asset id from local whitelist. This whitelist is stored with the wallet file and reset in case of wallet resync or restoring wallet from seed phrase.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "assets_whitelist_remove",
  "params": {
    "asset_id": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8"
  }
}
```
### Request description: 
```
    "asset_id": Asset id to be removed from local whitelist

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
    "status": Command result (OK if success)

```
