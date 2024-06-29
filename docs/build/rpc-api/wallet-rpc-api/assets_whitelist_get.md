Get whitelisted assets for this wallet, assets descriptors present in any of the lists in results would be present in balance() call results(if those assets are part of the wallet transfers). Assets that are not included in those lists won't be included in balance even if the wallet own inputs with such assets.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "assets_whitelist_get",
  "params": {
  }
}
```
### Request description: 
```

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "global_whitelist": [{
      "asset_id": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
      "current_supply": 500000000000000000,
      "decimal_point": 12,
      "full_name": "Zano wrapped USD",
      "hidden_supply": false,
      "meta_info": "Stable and private",
      "owner": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
      "ticker": "ZUSD",
      "total_max_supply": 1000000000000000000
    }],
    "local_whitelist": [{
      "asset_id": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
      "current_supply": 500000000000000000,
      "decimal_point": 12,
      "full_name": "Zano wrapped USD",
      "hidden_supply": false,
      "meta_info": "Stable and private",
      "owner": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
      "ticker": "ZUSD",
      "total_max_supply": 1000000000000000000
    }],
    "own_assets": [{
      "asset_id": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
      "current_supply": 500000000000000000,
      "decimal_point": 12,
      "full_name": "Zano wrapped USD",
      "hidden_supply": false,
      "meta_info": "Stable and private",
      "owner": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
      "ticker": "ZUSD",
      "total_max_supply": 1000000000000000000
    }]
  }
}
```
### Response description: 
```
    "global_whitelist": Global whitelist, well-known assets with adoption, mantained by the team and community
      "asset_id": Asset ID
      "current_supply": Currently emitted supply for given asset
      "decimal_point": Decimal point
      "full_name": Full name of the asset
      "hidden_supply": This one reserved for future use, will be documented later
      "meta_info": Any other information assetiaded with asset in a free form
      "owner": Owner's key, used to validate any operations on the asset altering, could be changed in case of transfer ownership
      "ticker": Ticker associated with asset
      "total_max_supply": Maximum possible supply for given asset, can't be changed after deployment
    "local_whitelist": Local whitelist, assets that hase been added to this wallet file manually(!)
      "asset_id": Asset ID
      "current_supply": Currently emitted supply for given asset
      "decimal_point": Decimal point
      "full_name": Full name of the asset
      "hidden_supply": This one reserved for future use, will be documented later
      "meta_info": Any other information assetiaded with asset in a free form
      "owner": Owner's key, used to validate any operations on the asset altering, could be changed in case of transfer ownership
      "ticker": Ticker associated with asset
      "total_max_supply": Maximum possible supply for given asset, can't be changed after deployment
    "own_assets": Own assets, the ones that is under control of this wallet
      "asset_id": Asset ID
      "current_supply": Currently emitted supply for given asset
      "decimal_point": Decimal point
      "full_name": Full name of the asset
      "hidden_supply": This one reserved for future use, will be documented later
      "meta_info": Any other information assetiaded with asset in a free form
      "owner": Owner's key, used to validate any operations on the asset altering, could be changed in case of transfer ownership
      "ticker": Ticker associated with asset
      "total_max_supply": Maximum possible supply for given asset, can't be changed after deployment

```
