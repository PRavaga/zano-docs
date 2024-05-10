Obtain information for the given asset by its ID.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_asset_info",
  "params": {
    "asset_id": "cc4e69455e63f4a581257382191de6856c2156630b3fba0db4bdd73ffcfb36b6"
}
}
```
### Request description: 
```
    "asset_id": ID of an asset.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
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
    "status": "OK"
}
}
```
### Response description: 
```
    "asset_descriptor": Descriptor of the given asset.
      "current_supply": Currently emitted supply for given asset
      "decimal_point": Decimal point
      "full_name": Full name of the asset
      "hidden_supply": This one reserved for future use, will be documented later
      "meta_info": Any other information assetiaded with asset in a free form
      "owner": Owner's key, used to validate any operations on the asset altering, could be changed in case of transfer ownership
      "ticker": Ticker associated with asset
      "total_max_supply": Maximum possible supply for given asset, can't be changed after deployment
    "status": Status of the call.

```
