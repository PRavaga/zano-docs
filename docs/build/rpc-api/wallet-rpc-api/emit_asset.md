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
    }],
    "do_not_split_destinations": false
  }
}
```
### Request description: 
```
    "asset_id": Id of the asset to emit more coins
    "destinations": Addresses where to receive emitted coins. Asset id in the destinations is irreleant and can be omitted.
      "address": Destination address
      "amount": Amount to transfer to destination
      "asset_id": Asset id to transfer
    "do_not_split_destinations": If true, the provided destinations will be used as-is and won't be splitted (or altered) to avoid common issues. Default is false.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "tx_id": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8"
  }
}
```
### Response description: 
```
    "tx_id": Id of transaction that emits the required asset.

```
