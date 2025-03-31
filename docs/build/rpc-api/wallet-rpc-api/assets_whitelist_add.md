Add given asset id to local whitelist. This whitelist is stored with the wallet file and reset in case of wallet resync or restoring wallet from seed phrase.

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "assets_whitelist_add",
  "params": {
    "asset_id": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8"
  }
}
```
### Request description: 
```
    "asset_id": Asset id that needed to be added to local whitelist, asset_id must exist in the network

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
      "full_name": "Zano wrapped ABC",
      "hidden_supply": false,
      "meta_info": "{ \"some_arbitrary_field_name\": \"some arbitrary value\"}",
      "owner": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
      "owner_eth_pub_key": "",
      "ticker": "ZABC",
      "total_max_supply": 1000000000000000000
    },
    "status": "OK"
  }
}
```
### Response description: 
```
    "asset_descriptor": Details of the asset, recieved from node
      "current_supply": Currently emitted supply for the given asset (ignored for REGISTER operation).
      "decimal_point": Decimal point.
      "full_name": Full name of the asset.
      "hidden_supply": This field is reserved for future use and will be documented later.
      "meta_info": Any other information associated with the asset, by default in a json format.
      "owner": Owner's key, used only for EMIT and UPDATE validation, can be changed by transferring asset ownership.
      "owner_eth_pub_key": [Optional] Owner's key in the case when ETH signature is used.
      "ticker": Ticker associated with the asset.
      "total_max_supply": Maximum possible supply for a given asset, cannot be changed after deployment.
    "status": Status of the asset

```
<sub>Auto-doc built with: 2.1.5.397[bd05907]</sub