Attach asset descripto to this wallet instance, if asset descripto attached then ADO operations to this asset can be performed using API of this wallet.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "attach_asset_descriptor",
  "params": {
    "asset_id": "40fa6db923728b38962718c61b4dc3af1acaa1967479c73703e260dc3609c58d",
    "do_attach": true
  }
}
```
### Request description: 
```
    "asset_id": Asset id of the ADO that need to be attached to this wallet
    "do_attach": If true - asset descriptor attached to wallet, if false - asset detached

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
    "status": Status of the call

```
<sub>Auto-doc built with: 2.1.5.397[2872515]</sub>