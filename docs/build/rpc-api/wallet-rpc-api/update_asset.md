Update asset descriptor(you can change only owner so far)

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "update_asset",
  "params": {
    "asset_descriptor": {
      "current_supply": 500000000000000000,
      "decimal_point": 12,
      "full_name": "Zano wrapped USD",
      "hidden_supply": false,
      "meta_info": "Stable and private",
      "owner": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
      "ticker": "ZUSD",
      "total_max_supply": 1000000000000000000
},
    "asset_id": "40fa6db923728b38962718c61b4dc3af1acaa1967479c73703e260dc3609c58d"
}
}
```
### Request description: 
```
    "asset_descriptor": Descriptor that holds all information about asset that need to be updated (only owner could be updated)
      "current_supply": Currently emitted supply for given asset
      "decimal_point": Decimal point
      "full_name": Full name of the asset
      "hidden_supply": This one reserved for future use, will be documented later
      "meta_info": Any other information assetiaded with asset in a free form
      "owner": Owner's key, used to validate any operations on the asset altering, could be changed in case of transfer ownership
      "ticker": Ticker associated with asset
      "total_max_supply": Maximum possible supply for given asset, can't be changed after deployment
    "asset_id": Id of the asset to update

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
