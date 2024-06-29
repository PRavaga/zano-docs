Get loaded wallets list, userful for multi-wallet API

URL: ```http:://127.0.0.1:11211/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "mw_get_wallets",
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
    "wallets": [{
      "wallet_id": 2,
      "wi": {
        "address": "ZxBvJDuQjMG9R2j4WnYUhBYNrwZPwuyXrC7FHdVmWqaESgowDvgfWtiXeNGu8Px9B24pkmjsA39fzSSiEQG1ekB225ZnrMTBp",
        "balances": [{
          "asset_info": {
            "asset_id": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
            "current_supply": 500000000000000000,
            "decimal_point": 12,
            "full_name": "Zano wrapped USD",
            "hidden_supply": false,
            "meta_info": "Stable and private",
            "owner": "f74bb56a5b4fa562e679ccaadd697463498a66de4f1760b2cd40f11c3a00a7a8",
            "ticker": "ZUSD",
            "total_max_supply": 1000000000000000000
          },
          "awaiting_in": 1000000000000,
          "awaiting_out": 2000000000000,
          "total": 100000000000000,
          "unlocked": 50000000000000
        }],
        "has_bare_unspent_outputs": false,
        "is_auditable": false,
        "is_watch_only": false,
        "mined_total": 1000000000000,
        "path": "\/some\/path\/to\/wallet\/file.zan",
        "view_sec_key": "97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc"
      }
    }]
  }
}
```
### Response description: 
```
    "wallets": Array of wallets
      "wallet_id": Wallet ID
        "address": Address
        "balances": Balances hold by this wallet
          "asset_info": Asset info details
            "asset_id": Asset ID
            "current_supply": Currently emitted supply for given asset
            "decimal_point": Decimal point
            "full_name": Full name of the asset
            "hidden_supply": This one reserved for future use, will be documented later
            "meta_info": Any other information assetiaded with asset in a free form
            "owner": Owner's key, used to validate any operations on the asset altering, could be changed in case of transfer ownership
            "ticker": Ticker associated with asset
            "total_max_supply": Maximum possible supply for given asset, can't be changed after deployment
          "awaiting_in": Unconfirmed amount for receive
          "awaiting_out": Unconfirmed amount for send
          "total": Total coins available(including locked)
          "unlocked": Unlocked coins available(the ones that could be used right now)
        "has_bare_unspent_outputs": Flag indicating whether the wallet has bare unspent outputs(pre-zarcanum outputs)
        "is_auditable": Flag indicating whether the wallet is auditable
        "is_watch_only": Flag indicating whether the wallet is watch-only
        "mined_total": Total amount mined
        "path": Path to wallet file
        "view_sec_key": View secret key

```
