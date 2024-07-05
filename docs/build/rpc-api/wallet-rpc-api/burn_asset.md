Burn some owned amount of the coins for the given asset.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "burn_asset",
  "params": {
    "asset_id": "40fa6db923728b38962718c61b4dc3af1acaa1967479c73703e260dc3609c58d",
    "burn_amount": 10000000
  }
}
```
### Request description: 
```
    "asset_id": Id of the asset to burn
    "burn_amount": Amount to burn

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "result_tx": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8"
  }
}
```
### Response description: 
```
    "result_tx": Id of transaction that carries asset burn operation

```
