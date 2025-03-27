Deploy new asset in the system.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "deploy_asset",
  "params": {
    "asset_descriptor": {
      "current_supply": 500000000000000000,
      "decimal_point": 12,
      "full_name": "Zano wrapped ABC",
      "hidden_supply": false,
      "meta_info": "{ \"logo_url\": \"https:\/\/some.nice.logo.png\"}",
      "owner": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
      "owner_eth_pub_key": "",
      "ticker": "ZABC",
      "total_max_supply": 1000000000000000000
    },
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
    "asset_descriptor": Descriptor that holds all information about asset - ticker, emission, description etc
      "current_supply": Currently emitted supply for the given asset (ignored for REGISTER operation).
      "decimal_point": Decimal point.
      "full_name": Full name of the asset.
      "hidden_supply": This field is reserved for future use and will be documented later.
      "meta_info": Any other information associated with the asset, by default in a json format.
      "owner": Owner's key, used only for EMIT and UPDATE validation, can be changed by transferring asset ownership.
      "owner_eth_pub_key": [Optional] Owner's key in the case when ETH signature is used.
      "ticker": Ticker associated with the asset.
      "total_max_supply": Maximum possible supply for a given asset, cannot be changed after deployment.
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
    "new_asset_id": "40fa6db923728b38962718c61b4dc3af1acaa1967479c73703e260dc3609c58d",
    "tx_id": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8"
  }
}
```
### Response description: 
```
    "new_asset_id": Issued asset id
    "tx_id": Id of transaction that carries asset registration command, asset would be registered as soon as transaction got confirmed

```
