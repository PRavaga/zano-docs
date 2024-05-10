Emmit new coins of the the asset, that is controlled by this wallet.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "emit_asset",
  "params": {
    "asset_id": "40fa6db923728b38962718c61b4dc3af1acaa1967479c73703e260dc3609c58d",
    "destinations": [{
      "address": "ZxBvJDuQjMG9R2j4WnYUhBYNrwZPwuyXrC7FHdVmWqaESgowDvgfWtiXeNGu8Px9B24pkmjsA39fzSSiEQG1ekB225ZnrMTBp",
      "amount": 10000000000000,
      "asset_id": "cc608f59f8080e2fbfe3c8c80eb6e6a953d47cf2d6aebd345bada3a1cab99852"
}]
}
}
```
### Request description: 
```
    "asset_id": Id of the asset to emit more coins
    "destinations": Addresses where to receive emitted coins. Asset id in destinations should be set to 0000000000000000000000000000000000000000000000000000000000000000
      "address": Destination address
      "amount": Amount to transfer to destination
      "asset_id": Asset id to transfer

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
    "result_tx": Id of transaction that carries asset registration command, asset would be registered as soon as transaction got confirmed

```
